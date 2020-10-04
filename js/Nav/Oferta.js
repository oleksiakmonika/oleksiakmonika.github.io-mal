import React from 'react';
import Header from '../Home/Header';
import Footer from "../Home/Footer";
import cabinet1 from "../../img/gabinet_3.jpeg";
import cabinet2 from "../../img/gabinet_Gdynia.jpeg";
const Offer = () => {
    return (
        <div className='subsite'><Header/>
            <div className='sub'>
                <h2>Oferta</h2>
                <div className='space'>
                    <div><p className='subsiteP space spaceRight '>Psychoterapia psychodynamiczna to metoda leczenia oparta w dużej
                        mierze na dynamice relacji między pacjentem a terapeutą. Podstawą teoretyczną jest
                        psychoanaliza. Zmiana możliwa jest dzięki zintegrowaniu wiedzy i doświadczenia. Czasem myśli są
                        straszniejsze niż rzeczywistość.</p>
                    <p className='subsiteP space spaceRight'> Przyjdź i sprawdź. Koszt pierwszej konsultacji 110 zł.</p></div>
                  <div className='offer'>  <img  className="offerPhoto" src={cabinet2}/>
                     <img  className="offerPhoto" src={cabinet1}/></div>
                </div>
            </div>
            <Footer/></div>
    )
}
export default Offer;