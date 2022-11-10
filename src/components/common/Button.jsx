import React from 'react';

function Button({btnTask,className,handleClick,name,inputType}) {
    return (
        <div>
            <button className={className}
             name={name} type={inputType}
             onClick={handleClick}>{btnTask}</button>      
        </div>
    );
}

export default Button;