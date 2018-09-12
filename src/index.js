import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import MainRouter from './routers';
import {storeFactory} from './reducers';

import './index.css';
import registerServiceWorker from './registerServiceWorker';


const initialState = {
    ads: [
        {
            title: "Продам Автомобиль",
            description: "ООО \"Луидор\" Официальный дилер ГАЗ Предлагает Вашему вниманию автомобиль – ГАЗель Next Автомобиль прошел комплексную диагностику и готов к эксплуатации. 2015 . По ПТС - 1 владелец, двигатель бензин 2,7 , 106 Л.С. Пробег 135 457км - ! Отличное состояние. Автоцентр ГАЗ \"Луидор\" Балашиха. Отдел Trade-in. ш. Энтузиастов вл. 1 \"В\". Звоните! И мы с удовольствием расскажем Вам ВСЕ об этом автомобиле! ",
            phone: "+79175689442",

        },
        {
            title: "Продам Дом",
            description: "Продается дом и земельный участок. Дом одно этажный 80 кв.м. вместе с летней верандой, большая кухня 25 кв.м.комната 20 кв.м., маленькая 15 кв., с/у в доме.",
            phone: "+79267936463",
        },

    ]

};

const store = storeFactory(initialState);

const render = () =>
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <MainRouter/>
            </BrowserRouter>
        </Provider>,
        document.getElementById('root'));

store.subscribe(render);
render();

registerServiceWorker();
