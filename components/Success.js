import React from 'react';

export default function Success() {
    return (
        <div className='success__container'>
            <h2 className='success__title'>Спасибо за оформление заявки</h2>
            <ol className='success__list'>
                <li className='success__list-item'>
                    Проверьте наличие письма с номером заказа у себя на почте. Если после
                    отправки заказа, вам не пришло оповещение с номером заказа на почту, обратитесь в службу поддержки по почте digital@strelka-kb.com
                </li>
                <li className='success__list-item'>
                    К вам на почту придет письмо с счетом и ссылкой на оплату.
                </li>
                <li className='success__list-item'>
                    После получения оплаты запрашиваемые данные будут высланы вам на указанную почту в течении 5 рабочих дней.
                </li>
            </ol>
        </div>
    )
}