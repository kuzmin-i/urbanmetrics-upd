import BarPanel from "../screens/bar"

import CoverScreen from "../screens/cover"
import ScreenAnalyzes from "../screens/50analyzes"
import FormatsScreen from "../screens/formats"
import ServicesScreen from "../screens/services"
import PriceScreen from "../screens/price"
import FormApp from "../components/App"
import FormHeader from "../components/FormHeader"

import Footer from "../components/Footer"

import { mainData } from "../data/main"

import Head from "next/head"

import "bootstrap/dist/css/bootstrap.min.css"

export default function Home() {
  return (
    <div className="maincontent">
      <Head>
        <title>Urbanmetrics</title>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(72178255, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
        })`,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/72178255"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </Head>
      <BarPanel />

      <div className="mainpage__p80">
        <div className="mainpage__content">
          <CoverScreen cover={mainData.cover} />

          <ScreenAnalyzes analyzes={mainData.analyzes} />
          <FormatsScreen formatexport={mainData.formatexport} />
          <ServicesScreen services={mainData.services} />
          <PriceScreen price={mainData.price} />
          <FormHeader/>
        </div>
        
          <FormApp />
        
          <div className="mainpage__content">

          <Footer/>
        </div>
      </div>
    </div>
  )
}
