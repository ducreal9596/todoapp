import React from 'react';
import PropTypes from 'prop-types';

Input.propTypes = {
    inputValue: PropTypes.string,
    name: PropTypes.string,
};

function Input({inputValue,autoFocus,handleKeyup, handleChange,ipboder,innerRef,validate,duplicate,inputname,placeholder, type,inputClass}) {

    return (
        <div>
            <div className='form__group'>
                    <label className='ipt' htmlFor={inputname}>{inputname}</label>
                    <div className='validate'>
                        <div className={ipboder}>
                        <input id={inputname} name={inputname} className={inputClass} type={type} value={inputValue}
                            placeholder={placeholder}
                            onChange={handleChange}
                            ref={innerRef}
                            autoFocus={autoFocus}
                            onKeyUp={handleKeyup}
                        />
                        </div>
                        <span className='mess'>{validate}</span>
                        <span className='mess'>{duplicate}</span>
                    </div>
                </div>
        </div>
    );
}

export default Input;