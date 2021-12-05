import React from "react";
import {Link} from 'react-router-dom';
import Modal from "./modal";

const Contact = () => {

    return(
        <div>
            <Modal />
            <div className="ui raised very padded text container segment" style={{marginTop: '80px'}}>
                <Link to='/card/alex' className="ui header">Alex</Link>
                <p>ffftftfu ftftfu, yfyufuyfyffu</p>
            </div>
            <div className="ui raised very padded text container segment" style={{marginTop: '80px'}}>
                <Link to='/card/omi' className="ui header">Omi</Link>
                <p>ffftftfu ftftfu, yfyufuyfyffu</p>
            </div>
            <div className="ui raised very padded text container segment" style={{marginTop: '80px'}}>
                <Link to='/card/woma' className="ui header">Woma</Link>
                <p>ffftftfu ftftfu, yfyufuyfyffu</p>
        </div>
        </div>
        
    )
}

export default Contact;