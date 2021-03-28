import React from "react"

export default function ContactsForm({
  handleEmailChange,
  handleNameChange,
  handleJobChange,
  job,
  name,
  email,
}) {
  return (
    <form className="main__contacts-form">
      <h3 className="main__contacts-form-title">Контактная информация</h3>
      <fieldset className="main__contacts-form-fieldset">
        <input
          placeholder="Ваш e-mail"
          onChange={handleEmailChange}
          type="email"
          value={email || ""}
          className="main__contacts-form-input"
        />
        <input
          placeholder="Ваше имя"
          onChange={handleNameChange}
          type="text"
          value={name || ""}
          className="main__contacts-form-input"
        />
        <select
          placeholder="Сфера деятельности"
          onChange={handleJobChange}
          value={job || ""}
          className="main__contacts-form-input"
        >
          <option>архитектура</option>
          <option>градостроительство</option>
          <option>девелопмент</option>
          <option>консалтинг</option>
          <option>маркетинг</option>
        </select>
      </fieldset>
      <div className="main__contacts-form-info">
        <img src="./info.svg" alt="info" className="" />
        <p className="main__contacts-form-text">
          Если после отправки заказа, вам не пришло оповещение с номером заказа
          на почту, обратитесь в службу поддержки по почте
          <a
            href="mailto:digital@strelka-kb.com"
            className="main__contacts-form-link"
          >
            digital@strelka-kb.com
          </a>
        </p>
      </div>
    </form>
  )
}
