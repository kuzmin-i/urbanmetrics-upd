import React, { useState, useRef, useEffect } from "react"
import mapboxgl from "mapbox-gl"
import * as MapboxDraw from "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw"
import * as turf from "@turf/turf"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"
import DrawAssistedRectangle from "@geostarters/mapbox-gl-draw-rectangle-assisted-mode/dist/DrawAssistedRectangle.js"

// eslint-disable-next-line import/no-webpack-loader-syntax
// mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const drawStyles = [
  // ACTIVE (being drawn)
  // line stroke
  {
    id: "gl-draw-line",
    type: "line",
    filter: ["all", ["==", "$type", "LineString"], ["!=", "mode", "static"]],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#000000",
      "line-width": 3,
    },
  },
  // polygon fill
  {
    id: "gl-draw-polygon-fill",
    type: "fill",
    filter: ["all", ["==", "$type", "Polygon"], ["!=", "mode", "static"]],
    paint: {
      "fill-color": "#FFFFFF",
      "fill-outline-color": "#000000",
      "fill-opacity": 0.6,
    },
  },
  // polygon outline stroke
  // This doesn't style the first edge of the polygon, which uses the line stroke styling instead
  {
    id: "gl-draw-polygon-stroke-active",
    type: "line",
    filter: ["all", ["==", "$type", "Polygon"], ["!=", "mode", "static"]],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#000000",
      "line-width": 3,
    },
  },

  // vertex points
  {
    id: "gl-draw-polygon-and-line-vertex-active",
    type: "circle",
    filter: ["all", ["==", "$type", "Point"]],
    paint: {
      "circle-radius": 4,
      "circle-color": "#FFF",
      "circle-stroke-width": 2,
      "circle-stroke-color": "#000",
    },
  },

  // INACTIVE (static, already drawn)
  // line stroke
  {
    id: "gl-draw-line-static",
    type: "line",
    filter: ["all", ["==", "$type", "LineString"], ["==", "mode", "static"]],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#000",
      "line-width": 1,
    },
  },
  // polygon fill
  {
    id: "gl-draw-polygon-fill-static",
    type: "fill",
    filter: ["all", ["==", "$type", "Polygon"], ["==", "mode", "static"]],
    paint: {
      "fill-color": "#000",
      "fill-outline-color": "#000",
      "fill-opacity": 0.1,
    },
  },
  // polygon outline
  {
    id: "gl-draw-polygon-stroke-static",
    type: "line",
    filter: ["all", ["==", "$type", "Polygon"], ["==", "mode", "static"]],
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#000",
      "line-width": 3,
    },
  },
]

export default function MapComponent({
  handleUpdateArea,
  handleUpdateCoordinates,
}) {
  const accessToken =
    "pk.eyJ1Ijoic2FuaXNpbW92IiwiYSI6ImNra2Jsb3h2MTAzbmszMXFzeDZzNXUyZWoifQ.dq9YuV8GpDbbv8B4btLRTA"

  //pk.eyJ1Ijoic2FuaXNpbW92IiwiYSI6ImNra2Jsb3h2MTAzbmszMXFzeDZzNXUyZWoifQ.dq9YuV8GpDbbv8B4btLRTA

  const [map, setMap] = useState(null)
  const mapContainer = useRef(null)
  const modes = MapboxDraw.modes
  modes.draw_assisted_rectangle = DrawAssistedRectangle

  useEffect(() => {
    mapboxgl.accessToken = accessToken
    const initializeMap = () => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/markkabierski/ckluq33gb0xe517o58xko2knw",
        center: { lng: 37.618423, lat: 55.751244 },
        zoom: 10,
      })

      const draw = new MapboxDraw({
        displayControlsDefault: false,
        controls: {
          polygon: true,
          trash: true,
        },
        modes: modes,
        styles: drawStyles,
      })

      const scale = new mapboxgl.ScaleControl({
        maxWidth: 100,
      })

      const navi = new mapboxgl.NavigationControl({
        showZoom: true,
        showCompass: true,
      })

      function updateArea() {
        const data = draw.getAll()
        if (data.features.length > 0) {
          const area = turf.area(data)
          handleUpdateArea(area / 10000)
          handleUpdateCoordinates(data.features)
          // Багованный попап:
          // const popup_text = `<p style="color: black; padding: 0; margin: 0">${Math.round(area/10000)} га</p>`
          // const allCoord = data.features[0].geometry.coordinates[0];
          // const popup = new mapboxgl.Popup({})
          //    .setLngLat(allCoord[allCoord.length - 3])
          //    .setHTML(popup_text)
          //    .addTo(map);
        } else {
          handleUpdateArea(0)
        }
        if (document.querySelector(".main__submission-text_type_warning")) {
          document.querySelector(".mapboxgl-map").style =
            "width: 100%; min-height: 503px; min-width: 936px; border-radius: 10px; margin: 30px 0px;"
          document.querySelector(
            ".main__submission-text_type_warning"
          ).textContent = ""
          document
            .querySelector(".main__submission-text_type_warning")
            .classList.remove("main__submission-text_type_warning")
        }
      }
      map.addControl(draw)
      map.addControl(navi)
      map.addControl(scale)
      const geocoder = new MapboxGeocoder({
        accessToken: accessToken,
        mapboxgl: mapboxgl,
      })
      document
        .querySelector("#geocoder__container")
        .appendChild(geocoder.onAdd(map))
        console.log(geocoder.onAdd(map))
      map.on("load", () => {
        setMap(map)
        map.resize()
      })

      map.on("draw.modechange", (e) => {
        if (e.mode === "draw_polygon") {
          draw.changeMode("draw_assisted_rectangle")
        }
      })

      map.on("draw.create", updateArea)
      map.on("draw.update", updateArea)
      map.on("draw.delete", updateArea)
    }
    if (!map) {
      initializeMap()
    }
  }, [map])

  return <div ref={(el) => (mapContainer.current = el)} className="form__map" />
}
