import React from 'react';

const MySelect = function({name, lable, options, value, onChange}){

    return(
        <div>
            <label htmlFor={name}>{lable}</label>

            <select name={name} value={value} onChange={event => onChange(event.target.value)}>
                {options.map(option =>
                    <option key={option.value} value={option.value}>{option.name}</option>
                )}
            </select>
        </div>
    )
}

export default MySelect;
