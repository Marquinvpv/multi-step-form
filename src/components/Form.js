import React from 'react';
import Addons from './forms/Addons';
import Selectplan from './forms/Selectplan';
import Summary from './forms/Summary';
import Yourinfo from './forms/Yourinfo';

import "../css/form.css";

const Form = ({step, setStep}) => {
    return ( 
        <form>
            <Yourinfo 
                step = {step}
            />

            <Selectplan 
                step = {step}
            />

            <Addons 
                step = {step}
            />

            <Summary 
                step = {step}
            />
            <div className='button-container'>
                <button type={step !== 4 ? 'button' : 'submit'}>{step !== 4 ? 'Next Step' : 'Confirm'}</button>
                <button type='button' className={step !== 1 ? 'go-back' : 'not-active'}>Go Back</button>
            </div>
        </form>
     );
}
 
export default Form;