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
            description: "Автомоби́ль (от др.-греч. αὐτός — сам и лат. mobilis — подвижной, скорый) — моторное дорожное транспортное средство, используемое для перевозки людей или грузов",
            phone: "+79175689442",

        },
        {
            title: "Куплю Собаку",
            description: "купу",
            phone: "+79267936463",
        },
        {
            title: "Продам Автомобиль",
            description: "Автомоби́ль (от др.-греч. αὐτός — сам и лат. mobilis — подвижной, скорый) — моторное дорожное транспортное средство, используемое для перевозки людей или грузов",
            phone: "+79175689442",

        },
        {
            title: "Куплю Собаку",
            description: "купу",
            phone: "+79267936463",
        },
        {
            title: "Продам Автомобиль",
            description: "Автомоби́ль (от др.-греч. αὐτός — сам и лат. mobilis — подвижной, скорый) — моторное дорожное транспортное средство, используемое для перевозки людей или грузов",
            phone: "+79175689442",

        },
        {
            title: "Куплю Собаку",
            description: "купу",
            phone: "+79267936463",
        }
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
