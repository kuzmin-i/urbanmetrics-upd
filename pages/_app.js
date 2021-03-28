import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import '../index.css';
import '../vendor/mapbox__style-changes.css';
import '../styles/main.css';
import '../styles/normalize.css';
import '../styles/webflow.css';
import React from "react";

function MyApp({ Component, pageProps }) {

  return <Component {...pageProps} />
}

export default MyApp;
