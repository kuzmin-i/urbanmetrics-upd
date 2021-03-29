const BarPanel = () => {
  return (
    <div className="bar">
      <div className="mainpage__p80 bar__p80">
        <div className="bar__content">
          <div className="bar__logo" />
          <a href="#analysis" className="bar__link">
            Анализ территорий
          </a>
          <a href="#exportFormats" className="bar__link">
            Форматы экспорта
          </a>
          <a href="#formApp" className="bar__link">
            Заказать карту
          </a>
          <div className="bar__navigation"/>
        </div>
      </div>
    </div>
  )
}

export default BarPanel
