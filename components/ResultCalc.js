import React from "react"

export default function ResultCalc({ price, area, scale, exportFormat }) {
  return (
    <section className="form__sumup">
      
      <p className="mainpage__p3 form__p3">Площадь участка:</p>
      <p className="mainpage__h3 form__h3">{area} га</p>
      <p className="mainpage__p3 form__p3">Итоговая стоимость:</p>
      <p className="mainpage__h3 form__h3">{price} ₽</p>
    </section>
  )
}
