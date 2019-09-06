import React from 'react';
const LoanDetail = (props) => (
    <div className="col-lg-6 col-6 payment-detail-column">
        <div className="payment-figure">
        <h3 className="payment-value figure-value">{props.value}</h3>
        <span className="payment-label figure-label">{props.title}</span>
        </div>
    </div>
);

export default LoanDetail;