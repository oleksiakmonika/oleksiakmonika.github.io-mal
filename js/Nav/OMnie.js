import React from 'react';
import Header from '../Home/Header';
import Footer from "../Home/Footer";
import margaret from "../../img/malgosia_2.jpeg";

const AboutMe = () => {
    return (
        <div className='subsite'><Header/>
            <div className='sub'><h2 className='center1'>O mnie</h2>
                <div className='aboutMe'>
                    <div><img id='margaret' src={margaret}/></div>
                    <div>
                        <div className='subsiteP space right'>Jestem dyplomowanym psychoterapeutą i członkiem
                            zwyczajnym <a href='https://ptppd.pl/'>Polskiego Towarzystwa Psychoterapii
                                Psychodynamicznej</a>.

                            Ukończyłam psychologię na Uniwersytecie Gdańskim i <a
                                href='https://kcp.com.pl/'>Szkołę Psychoterapii Psychodynamicznej KCP</a> w Krakowie.
                        </div>
                        <div className='subsiteP space right'>Swoją edukację kontynuowałam na Gdańskim Uniwersytecie
                            Medycznym,
                            gdzie ukończyłam studia podyplomowe z zakresu psychologii klinicznej. Pracuję z młodzieżą i
                            osobami
                            dorosłymi od 2002 roku. Pomagam osobom cierpiącym z powodu depresji, zaburzeń lękowych,
                            żałoby,
                            przeżywającym kryzys lub pragnącym coś zmienić.
                        </div></div>

                    </div>
                <div className='subsiteP space right'> Pracuję również z kobietami w ciąży i młodymi (stażem)
                    mamami.
                    Wspieram rodziców gniewnych nastolatków. Posiadam bogate doświadczenie zawodowe zdobyte w
                    pracy w
                    placówkach medycznych, środowiskowych, mundurowych i w gabinecie prywatnym.
                </div>
                <div className='subsiteP space right'> Stale podnoszę swoje kwalifikacje. Ukończyłam m.in.:
                    Studium Socjoterapii i Treningu Interpersonalnego
                    oraz Studium Przeciwdziałania Przemocy w Rodzinie. Pracę swoją poddaję regularnej
                    superwizji.
                </div>
                <div className='subsiteP space right'> Zapraszam
                    do kontaktu telefonicznego 691 110 747.
                </div>
            </div>
            <Footer/></div>
    )
};
export default AboutMe;