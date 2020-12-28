import React, {useState} from 'react';

const Input = ({name, def, step, min, max, acc, value, setValue}) => {



    const subtract = () =>{
        if(value > min) {
            const val = Math.round( ( (value - step) + Number.EPSILON ) * 100 ) / 100;
            setValue(val);
        }
    };

    const add = () => {
        if(value < max){
            const val = Math.round( ( (value + step) + Number.EPSILON ) * 100 ) / 100;
            setValue(val);
        }
    };

    const handleChange = (event) => {
        if(event.target.value > max){
            setValue(max)
        }else if(event.target.value < min){
            setValue(min)
        }else {
            setValue(Number(event.target.value));
        }
    };

    return(
        <div className="input-container">
            <p>{name}</p>
            <button onClick={subtract}>-</button>
            <input type="number" value={value} min={min} max={max} step={step} onChange={handleChange}/>
            <button onClick={add}>+</button>
        </div>
    )
};

export default Input;