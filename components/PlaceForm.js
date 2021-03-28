import React from "react"

export default function PlaceForm({
  handleUpdateType,
  handleUpdateScale,
  handleUpdateFormat,
  layers,
  scale,
  format,
}) {
  return (
    <div className="form__inputs">
      <div className="form__address" id="geocoder__container" />
      <fieldset className="form__selectors">
        <select
          className="form__selector"
          placeholder="Тип данных"
          required
          onChange={handleUpdateType}
          style={{marginBottom: '10px'}}
          value={layers || ""}
        >
          <option value="a.1.1">Плотность населения</option>
          <option value="a.2.1">
            Индекс привлекательности городских пространств
          </option>
          <optgroup label="Индекс популярности улично-дорожной сети у спортсменов">
            <option value="a.3.1">Для занятия бегом</option>
            <option value="a.3.2">Для велоспорта</option>
            <option value="a.3.3">Общий показатель: бег и велоспорт</option>
          </optgroup>

          <option value="a.5.1">
            Индекс популярности улично-дорожной сети у туристов
          </option>

          <optgroup label="Индекс социальной активности">
            <option value="a.6.1-1">Социальная активность на улице</option>
            <option value="a.6.1-2">Социальная активность в помещениях</option>

            <option value="a.6.2-1">Социальная активность у туристов</option>
            <option value="a.6.2-2">
              Социальная активность у местных жителей
            </option>

            <option value="a.6.3-1">Зимняя социальная активность</option>
            <option value="a.6.3-2">Весенняя социальная активность</option>
            <option value="a.6.3-3">Летняя социальная активность</option>
            <option value="a.6.3-4">Осенняя социальная активность</option>
          </optgroup>

          <optgroup label="Обеспеченность городскими сервисами">
            <option value="a.7.1">Общий показатель</option>
            <option value="a.7.2">Магазины и здравоохранение</option>
            <option value="a.7.3">Объекты образования</option>
            <option value="a.7.4">Общественное питание</option>
            <option value="a.7.5">Развлечения</option>
            <option value="a.7.6">Спорт и отдых</option>
          </optgroup>

          <option value="b.1.1">Безопасность на дорогах (Плотность ДТП)</option>

          <optgroup label="Зоны пешеходной доступности социально значимых объектов и инфраструктуры (800 м)">
            <option value="b.4.1">Детские сады</option>
            <option value="b.4.2">Школы</option>
            <option value="b.4.3">Благоустроенное озеленение</option>
            <option value="b.4.4">Станции метро</option>
            <option value="b.4.5">Парковки</option>
            <option value="b.4.6">Остановки общественного транспорта</option>
          </optgroup>

          <option value="b.5.1">
            Востребованность транспортной инфраструктуры
          </option>
          <option value="b.6.1">
            Востребованность пешеходной инфраструктуры
          </option>
          <optgroup label="Общественный транспорт">
            <option value="b.7.1">Остановки общественного транспорта</option>
            <option value="b.7.2">Маршруты общественного транспорта</option>
            <option value="b.7.3">Станции метро</option>
            <option value="b.7.4">Платформы ж/д транспорта</option>
          </optgroup>

          <option value="c.1.1">
            Плотность социально-досуговых функций (медицина, общество, культура,
            досуг)
          </option>

          <option value="c.2.1">
            Плотность общественно-деловых функций (бизнес, услуги, государство)
          </option>

          <option value="c.3.1">
            Концентрация точек торговли на 100 метров улицы
          </option>

          <option value="d.1.1">Программа реновации</option>

          <option value="d.2.1">Строящийся жилой фонд</option>

          <option value="d.3.1">Жилая/нежилая застройка</option>
          <option value="d.4.1">Этажность застройки</option>
          <option value="d.5.1">Периоды застройки</option>
          <option value="d.6.1">Административно-территориальное деление</option>

          <optgroup label="Территориальное зонирование (ПЗЗ - Правила землепользования и застройки)">
            <option value="d.8.1">Зоны</option>
            <option value="d.8.2">Подзоны</option>
          </optgroup>

          <option value="d.9.1">Кадастровые кварталы</option>

          <option value="d.12.1">
            Ценные исторические и культурные объекты и территории
          </option>

          <option value="E.1.1">
            Индекс видимого озеленения (Green View Index)
          </option>

          <option value="E.2.2">
            Температура поверхности (Land Surface Temperature)
          </option>
        </select>
        


        <div className="form__switch">
          <div onClick={handleUpdateFormat} value="gis" className={(format === "gis") ? "form__switch--item sel" : "form__switch--item"}>GeoJSON</div>
          <div onClick={handleUpdateFormat} value="vector" className={(format === "vector") ? "form__switch--item sel" : "form__switch--item"}>PDF</div>
        </div>
      </fieldset>
    </div>
  )
}
