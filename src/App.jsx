import React from 'react'
import './App.css'
import {City} from "./components/City/City.jsx";
import {Country} from "./components/Country/Country.jsx";
import {FoundationDate} from "./components/FoundationDate/FoundationDate.jsx";
import {Population} from "./components/Population/Population.jsx";
import {Hoods} from "./components/Hoods/Hoods.jsx";
import {Description} from "./components/Description/Description.jsx";
import {PhotoGallery} from "./components/PhotoGallery/PhotoGallery.jsx";

function App() {


    const info = {
        "city": "Одеса",
        "country": "Україна",
        "foundationDate": "2 вересеня 1794 року",
        "population": "1 010 537",
        "hoods": [
            "Київський",
            "Приморський",
            "Малиновський"
        ],
        "description": "Чарівне місто на березі Чорного моря, відоме своїм гумором, архітектурою та неповторною атмосферою. Це культурна перлина Півдня України."
    }

    return (
        <>
            <div className="content">
                <City text={`Місто: ${info.city}`}/>
                <Country text={`Країна: ${info.country}`}/>
                <Description text={`Опис: ${info.description}`}/>
                <FoundationDate text={`Дата заснування: ${info.foundationDate}`}/>
                <Population text={`Населення: ${info.population} людей`}/>
                <Hoods hoods={info.hoods}/>
                <PhotoGallery/>
            </div>
        </>
    );
}

export default App