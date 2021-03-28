import React, { useState } from "react"
import PlaceForm from "./PlaceForm"
import ResultCalc from "./ResultCalc"
import ContactsForm from "./ContactsForm"
import MapComponent from "./MapComponent"
import api from "../utils/api"

export default function Main({ onOrderSuccess }) {
  const [area, setArea] = useState(0) // площадь выделенной области
  const [price, setPrice] = useState(0) // цена услуг (должна подсчитываться на сервере)
  const [scale, setScale] = useState(10000) // выбранный масштаб
  const [layers, setLayers] = useState("a.1.1") // выбранный тип
  const [format, setFormat] = useState("gis") // выбранный формат экспорта
  const [email, setEmail] = useState("") // email
  const [name, setName] = useState("") // имя покупателя
  const [job, setJob] = useState("архитектура") // выбранная профессия
  const [coordinates, setCoordinates] = useState([]) // координаты выделенной области

  function handleEmailChange(evt) {
    // изменение email
    setEmail(evt.target.value)
  }

  function handleNameChange(evt) {
    // изменение имени
    setName(evt.target.value)
  }

  function handleJobChange(evt) {
    // изменение профессии
    setJob(evt.target.value)
  }

  function handleUpdateArea(area_res) {
    // обновление выделенной площади
    setArea(Math.round(area_res))
  }

  function handleUpdateScale(evt) {
    // обновление масштаба
    setScale(evt.target.value)
  }

  function handleUpdateType(evt) {
    // обновление типа работ
    setLayers(evt.target.value)
  }

  function handleUpdateFormat(evt) {
    // обновление формата экспорта
    setFormat(evt.target.attributes.value.value)
  }

  function handleUpdateCoordinates(data) {
    // обновление координат выделенной площади
    setCoordinates(data[0].geometry.coordinates)
    handlePriceCount(data[0].geometry.coordinates)
  }

  function handlePriceCount(coord) {
    // подсчёт цены
    if (coord.length > 0) {
      const data = {
        conf: {
          bbox: coord[0], // список списков [lng, lat]
          zoom: scale,
          layers: [{ id: layers, attributes: { gis_layer_type: format } }],
          customer: name,
          username: email,
        },
      }
      api
        .calculatePrice(data)
        .then((res) => {
          if (res) {
            setPrice(Math.round(res.summary))
          }
        })
        .catch((err) => console.log(err))
    } else {
      console.log("Выберите зону на карте")
    }
  }

  function handleOrderSubmit(evt) {
    // отправка всех данных
    evt.preventDefault()
    const data = {
      conf: {
        bbox: coordinates[0], // список списков [lng, lat]
        zoom: scale,
        layers: [{ id: layers, attributes: { gis_layer_type: format } }],
        customer: name,
        username: email,
      },
    }
    evt.target.disabled = true
    evt.target.textContent = "Оформление заказа..."
    api
      .sendData(data)
      .then((res) => {
        onOrderSuccess()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <main className="form__group">
      <div className="form__settings">
          <PlaceForm
            handleUpdateScale={handleUpdateScale}
            handleUpdateFormat={handleUpdateFormat}
            handleUpdateType={handleUpdateType}
            layers={layers}
            scale={scale}
            format={format}
          />
          <ResultCalc
              price={price}
              area={area}
              scale={scale}
              exportFormat={format}
            />
            <button
            className="mainpage__cta form__cta"
            onClick={handleOrderSubmit}
            disabled={
              !(
                layers.length > 0 &&
                format &&
                scale &&
                coordinates.length > 0 &&
                name.length > 0
              )
            }
          >
            Заказать карту
          </button>
        </div>
        <MapComponent
          handleUpdateArea={handleUpdateArea}
          handleUpdateCoordinates={handleUpdateCoordinates}
        />
        
        
    </main>
  )
}

/*
<section className="main__forms-container">
          <ContactsForm
            handleNameChange={handleNameChange}
            handleEmailChange={handleEmailChange}
            handleJobChange={handleJobChange}
            job={job}
            name={name}
            email={email}
          />
          <ResultCalc
            price={price}
            area={area}
            scale={scale}
            exportFormat={format}
          />
        </section>



*/
