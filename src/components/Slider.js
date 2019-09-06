import React from 'react';
const Slider = (props) => (
    <div className="row slider-container">
        <div className="col-lg-12 col-12">
            <input type="range" className="custom-range" id={props.id} min={props.min} max={props.max} step={props.step} defaultValue={props.defaultValue} onInput={props.onInput} />
        </div>
    </div>
);

export default Slider;
