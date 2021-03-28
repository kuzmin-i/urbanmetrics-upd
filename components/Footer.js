import React from 'react';

export default function Footer() {
    return (
        <footer className='footer screen'>
            <div className='footer__container'>
                <p className='footer__logo'>Urbanmetrics</p>
                <div className='footer__mail-container'>
                    <p className='footer__mail'>Вы можете написать нам на почту:</p>
                    <a href='mailto: digital@strelka-kb.com' className='footer__mail-link'>digital@strelka-kb.com</a>
                </div>
            </div>
            <hr/>
            <div className="footer__bottom">
                <p className='mainpage__p2 footer__copyright'>OOO “КБ Стрелка”, 2021</p>
                <div className="footer__links">
                    <a href="/">Договор оферты</a>
                    <p>|</p>
                    <a href="/">Правила конфиденциальности</a>
                    <p>|</p>
                    <a href="/">Использование Cookies</a>
                </div>
            </div>
        </footer>
    )
}