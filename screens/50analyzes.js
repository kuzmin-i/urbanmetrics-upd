import {
  Accordion,
  useAccordionToggle,
  AccordionContext,
} from "react-bootstrap"
import { useContext } from "react"

const ScreenAnalyzes = ({ analyzes }) => {
  const maintitle = analyzes.maintitle

  const categories = analyzes.content[0].categories

  const HeaderToogle = ({ hclassname, children, eventKey, callback }) => {
    let currentEventKey = useContext(AccordionContext)

    let f = useAccordionToggle(eventKey, () => callback && callback(eventKey))

    let isCurrentEventKey = currentEventKey === eventKey

    return (
      <div className={hclassname} onClick={f}>
        {children}
        <div className={isCurrentEventKey ? "analyzes__header--arrow r" : "analyzes__header--arrow"} />
      </div>
    )
  }

  const cardComponent = categories.map((cat, cat_i) => {
    const groups = cat.cat_content.groups.map((group, group_i) => {
      const title = group.group_title
      const desc = group.group_desc
      const layers = group.layers.map((layer, layer_i) => {
        if (layer) {
          if (layer.layer_title !== title) {
            return (
              <div className="analyzes__linkComponent">
                <p className="analyzes__p4--dash">—</p>
                <a
                  href={layer.layer_map}
                  className="analyzes__link"
                  key={layer_i}
                  target="_blank"
                >
                  { layer.layer_title }
                </a>
              </div>
            )
          } else {
            return (
              <div className="analyzes__linkComponent">
                <p className="analyzes__p4--dash">—</p>
                <a
                  href={layer.layer_map}
                  className="analyzes__link"
                  key={layer_i}
                  target="_blank"
                >
                  {title}
                </a>
              </div>
            )
          }
        }
      })

      return (
        <div className="analyzes__card" key={group_i}>
          <div className="analyzes__content">
            <h3 className="mainpage__h4 analyzes__h4">{title}</h3>
            <p className="mainpage__p4 analyzes__p4">{desc}</p>
          </div>
              <div className="analyzes__examples">
              <p className="analyzes__h5">Посмотреть примеры</p>
                <div className="analyzes__linkList">
                {layers}
                </div>
              </div>
        </div>
      )
    })

    return (
      <div className="analyzes__item" key={cat_i}>
        <HeaderToogle
          hclassname={"analyzes__header _" + cat.cat_id}
          eventKey={cat_i + 1}
        >
          <h3 className="mainpage__h3 analyzes__h3">{cat.cat_title}</h3>
        </HeaderToogle>
        <Accordion.Collapse eventKey={cat_i + 1}>
          <div className={"analyzes__list _" + cat.cat_id}>{groups}</div>
        </Accordion.Collapse>
      </div>
    )
  })

  return (
    <div className="screen screen--analyzes" id="analysis">
      <h2 className="mainpage__h2">
        Более 50 видов анализа
        <br/>
        по основным блокам комплексного предпроектного анализа территорий
      </h2>
      <div className="analyzes">
        <Accordion>{cardComponent}</Accordion>
      </div>
      <div className="analyzes__comment">{analyzes.comment}</div>
    </div>
  )
}

export default ScreenAnalyzes
