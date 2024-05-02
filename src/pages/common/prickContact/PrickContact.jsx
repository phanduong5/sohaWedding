import React from "react";
import "./prickContact.scss"
import CallIcon from '@mui/icons-material/Call';

const PrickContact = () =>{
    const phoneNumber = '0867058105';
    return(
        <div className="containerPrickContact">
            <a className="boxParentPrickContact" href={`tel:${phoneNumber}`}>
                <CallIcon className="PrickContactIcon"/>
            </a>
            <div className="boxChildPrickContact">
           </div>
        </div>
    )
}
export default PrickContact