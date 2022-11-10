import React, { useState } from 'react';

function RadioInput({name, handleChange,radioValue,isCheck}) {
    return (
        <div className='radio__input--select'>
               <div>
                    <input id={radioValue} type="radio" name={name} value={radioValue}
                            checked={isCheck}
                            onChange={handleChange} 
                    />
                    <label htmlFor={radioValue}>{radioValue}</label>
                </div>
        </div>
    );
}

export default RadioInput;