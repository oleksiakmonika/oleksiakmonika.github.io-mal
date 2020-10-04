import React from "react";
import Header from './Header';
import Footer from './Footer';
import main from
     "../../img/enargia.jpeg";

const Home = () => {
    return (
        <div id='home'>
        <Header/>
        <div className='containerHome'>
           <img className="photo" src={main}/>
        </div>
            <p className='quotation'>"Człowiek nigdy nie pozbędzie się tego, o czym milczy"</p>
            <p className='quotation'> Karel Čapek</p>
        <Footer/>
    </div>
    )
}
export default Home;