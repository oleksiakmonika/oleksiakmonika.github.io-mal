import React from 'react';
import Header from '../Home/Header';
import Footer from "../Home/Footer";
import invite from "../../img/malgosia_2.jpeg";

const Contact = () => {
    return (
        <div className='subsite'>
            <Header/>
            <div className='sub'>
                <h2 className='center'>Kontakt</h2>
                <div className='center'>
                    <h4 className='center'>tel.: 691 110 747 </h4>
                    <div className='center'>e-mail: mprociewicz@gmail.com</div>
                </div>
                {/*<div className='contact'>*/}
                {/*    <img className="invite marginPhoto" src={invite}/>*/}
                {/*</div>*/}
                <div className='contact '>
                    <div>
                        <h4 className='center'>Gdynia, ul. Starowiejska 26/4</h4>
                        <div>
                            <iframe id="inlineFrameExample" className='subsiteP'
                                    title="Inline Frame Example"
                                    width="300"
                                    height="220"

                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9262.746660169247!2d18.529325226992672!3d54.52138713794281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda7245d86000d%3A0x40a42556574a977a!2sStarowiejska%2026%2C%2081-353%20Gdynia!5e0!3m2!1spl!2spl!4v1601641470086!5m2!1spl!2spl">

                            </iframe>
                        </div>
                    </div>
                    <div>
                        <h4 className='center'>Gdańsk, ul. Gnilna 24/5</h4>
                        <div>
                            <iframe id="inlineFrameExample" className='subsiteP'
                                    title="Inline Frame Example"
                                    width="300"
                                    height="220"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9300.0219141925!2d18.63949412683652!3d54.356884187439725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd7376bb35e689%3A0x9221be0fa480eabe!2sGnilna%2024%2C%2080-850%20Gda%C5%84sk!5e0!3m2!1spl!2spl!4v1601641563560!5m2!1spl!2spl">

                            </iframe>
                        </div>

                    </div>
                </div>

            </div>
            {/*<div className='contact tekstDiv'>*/}
            {/*    <img className="invite marginPhoto tekst" src={invite}/>*/}
            {/*    <div className="tekst">Zapraszam</div>*/}
            {/*</div>*/}
            <Footer/>
        </div>
    )
};
export default Contact;