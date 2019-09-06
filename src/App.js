import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { tenureToString, convertToCurrency } from './util/util';
import * as ACTIONS from './store/actions/actions';
import './static/scss/App.scss';

class App extends Component {

  handleChangeAmount = (event) => {
    this.props.calculateLoan({ amount: event.target.value, tenure: this.props.tenure });
  };

  handleChangeTenure = (event) => {
    this.props.calculateLoan({ amount: this.props.amount, tenure: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-9" id="calculator">
            <div className="form-container">
              <form className="form">
                <div className="row amount-row">
                  <div className="col-lg-7 col-6">
                    <div className="amount-label-container amount">
                      <span className="amount-label figure-label">I want to borrow</span>
                    </div>
                  </div>
                  <div className="col-lg-5 col-6">
                    <div className="amount-value-container amount">
                      <h3 className="amount-value figure-value" id="amountValue">{convertToCurrency(this.props.amount, 2)}</h3>
                    </div>
                  </div>
                </div>
                <div className="row slider-container">
                  <div className="col-lg-12 col-12">
                    <input type="range" className="custom-range" id="amountRange" min="1000" max="20000" step="100" defaultValue={this.props.amount} onInput={this.handleChangeAmount} />
                  </div>
                </div>
                <div className="row slider-container tenure-value-container text-center">
                  <div className="col-lg-12 col-12">
                    <h3>
                      <span className="tenure-label figure-label">Over</span>
                      &nbsp;
                      <span className="tenure-value figure-value" id="tenureValue">
                        {tenureToString(this.props.tenure)}
                      </span>
                    </h3>
                  </div>
                  <div className="col-lg-12 col-12 mt-10 tenure-slider-container">
                    <input type="range" className="custom-range" id="tenureRange" min="12" max="60" step="6" defaultValue={this.props.tenure} onInput={this.handleChangeTenure} />
                  </div>
                </div>
              </form>
            </div>
            <div className="payment-detail-container">
              <div className="row payment-detail-row text-center">
                <div className="col-lg-6 col-6 payment-detail-column">
                  <div className="interest-rate-container payment-figure">
                    <h3 className="payment-value figure-value">{this.props.interestRate}%</h3>
                    <span className="payment-label figure-label">Interest rate</span>
                  </div>
                </div>
                <div className="col-lg-6 col-6 payment-detail-column">
                  <div className="repayment-container payment-figure">
                    <h3 className="payment-value figure-value">{convertToCurrency(this.props.monthlyRepayment, 0)}</h3>
                    <span className="payment-label figure-label">Monthly repayment</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-container">
              <div className="row">
                <div className="col-lg-12 col-12">
                  <div className="submit-button">
                    <button className="btn btn-block">Get your quote <FontAwesomeIcon icon={faAngleDoubleRight} /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    amount: state.amount,
    tenure: state.tenure,
    interestRate: state.interestRate,
    monthlyRepayment: state.monthlyRepayment
  };
}

function mapDispatchToProps(dispatch) {
  return {
    calculateLoan: (payload) => dispatch(ACTIONS.calculateLoan(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
