import React from 'react';

import "../../css/form.css";

const Yourinfo = ({step}) => {
    return (  
        <fieldset className={step === 1 ? 'yi-container' : 'not-active'}>
            <h1>Your INFO</h1>
        </fieldset>
    );
}
 
export default Yourinfo;