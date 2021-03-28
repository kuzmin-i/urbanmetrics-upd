class Api {
    constructor(options) {
        this._options = options;
    }

    calculatePrice(priceData) {
        if (priceData.conf.bbox.length > 0) {
            return fetch("https://api.strelka-kb.com/urbanmetrics/v-dev/order/calculate", {
                method: "POST",
                headers: this._options.headers,
                body: JSON.stringify(priceData),
            })
                .then((res) => res.json())
                .catch((err) => console.log(err));
        } else {
            document.querySelector('.main__submission-text_type_warning').textContent = 'Выберите зону на карте';
            document.querySelector('.mapboxgl-map').style = "width: 100%; min-height: 503px; min-width: 936px; border-radius: 10px; margin: 30px 0px; border: 3px solid crimson;";
            console.log('Выберите зону на карте');
        }}

    sendData(data) {
        if (data.conf.bbox) {
            if (data.conf.bbox.length > 0) {
                return fetch("https://api.strelka-kb.com/urbanmetrics/v-dev/order/checkout", {
                    method: "POST",
                    headers: this._options.headers,
                    body: JSON.stringify(data),
                })
                    .then((res) => res.json())
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                document.querySelector('.main__submission-text_type_warning').textContent = 'Выберите зону на карте';
                document.querySelector('.mapboxgl-map').style = "width: 100%; min-height: 503px; min-width: 936px; border-radius: 10px; margin: 30px 0px; border: 3px solid crimson;";
                console.log('Выберите зону на карте');
            }
        } else {
            document.querySelector('.main__submission-text_type_warning').textContent = 'Выберите зону на карте';
            document.querySelector('.mapboxgl-map').style = "width: 100%; min-height: 503px; min-width: 936px; border-radius: 10px; margin: 30px 0px; border: 3px solid crimson;";
            console.log('Выберите зону на карте');
        }
    }
}

const api = new Api({
    headers: {
        "Content-Type": "application/json",
    }
});

export default api;