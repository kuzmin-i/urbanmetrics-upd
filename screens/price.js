import { Accordion, Card, Button, useAccordionToggle } from "react-bootstrap"

const PriceScreen = ({ price }) => {
  let maintitle = price.maintitle

  const cardComponent = price.content.map((a, i) => {
    if (a.cardType) {
      let subcardContent

      if (a.contentType === 1) {
        subcardContent = a.content.map((b, c) => {
          const HeaderToogle = ({ children, eventKey }) => {
            const decoratedOnClick = useAccordionToggle(eventKey, () =>
              console.log("Okay")
            )

            return (
              <div className="price__header" onClick={decoratedOnClick} key={c}>
                {children}
              </div>
            )
          }

          return (
            <div className="price__list" key={c}>
              <HeaderToogle eventKey={b.sid}>
                <p className="mainpage__p3 price__p3">{b.name}</p>
                <div className="mainpahe__p3 price__cost">{b.price}</div>
              </HeaderToogle>

              <Accordion.Collapse eventKey={b.sid}>
                <div className="price__descr">
                  <p className="mainpage__p4">{b.description}</p>
                </div>
              </Accordion.Collapse>
            </div>
          )
        })
      } else {
        subcardContent = <p className="mainpage__p4">{a.content}</p>
      }

      return (
        <div className="price__card" key={i}>
          <div className={"price__icon _" + a.id} />
          <h1 className="mainpage__h3 price__h3">{a.title}</h1>
          <Accordion defaultActiveKey="1">{subcardContent}</Accordion>
        </div>
      )
    } else {
      return (
        <div className="price__gap" key={i}>
          <div className="price__gap--icon" />
        </div>
      )
    }
  })

  return (
    <div className="screen">

      <h2 className="mainpage__h2 white">{maintitle}</h2>

      <div className="price__frame">
        <div className="price">{cardComponent}</div>
      </div>
    </div>
  )
}

export default PriceScreen
