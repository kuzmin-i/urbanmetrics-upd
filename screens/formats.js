const FormatsScreen = ({ formatexport }) => {
  let maintitle = formatexport.maintitle

  const cardComponent = formatexport.content.map((a, i) => {
    return (
      <div className="formats__card" key={i}>
        <div className={"formats__icon _" + a.id} />
        <div className="card_content">
          <h1 className="mainpage__h3 formats__h3">{a.title}</h1>
          <p className="mainpage__p2">
            {a.description.map((b, desc_i) => {
              return (
                <span key={desc_i}>
                  {b} <br />
                </span>
              )
            })}
          </p>
          <a href="#formApp" className="mainpage__cta formats__cta">
            Заказать карту
          </a>
        </div>
      </div>
    )
  })

  return (
    <div className="screen" id="exportFormats">
      <h2 className="mainpage__h2 white">{maintitle}</h2>

      <div className="formats__group">{cardComponent}</div>
    </div>
  )
}

export default FormatsScreen
