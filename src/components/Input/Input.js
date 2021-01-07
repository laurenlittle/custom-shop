import React from 'react';

import './style.scss';

const Input = ({ handleChange, label, ...props }) => {

  return(
    <div className="form-group">
      <input className="form-input" onChange={handleChange} {...props} />
      {
        label ?
        <label htmlFor={props.id} className={`${props.value.length ? 'shrink' : ''} form-label`}>
          { label }
        </label>
        : null
      }
    </div>
  )
};

export default Input;