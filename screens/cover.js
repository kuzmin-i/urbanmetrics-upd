const CoverScreen = ({ cover }) => {
  return (
    <div className="screen--cover cover">
      <div className="cover__image"/>

      <div className="cover__group">
        <h1 className="mainpage__h1">{cover.maintitle}</h1>
        <p className="mainpage__p1 cover__p1">{cover.description}</p>
        <a href="#formApp" className="mainpage__cta cover__cta">
          {cover.cta}
        </a>
      </div>
    </div>
  )
}

export default CoverScreen
