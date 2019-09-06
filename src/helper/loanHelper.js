function calculateLoan(payload) {
    let amount = parseInt(payload.amount);
    let tenure = parseInt(payload.tenure);
    let interestRate = 0;

    if (amount >= 1000 && amount <= 5000) {
        interestRate = 5;
    } else if (amount > 5000 && amount <= 10000) {
        interestRate = 10;
    } else if (amount > 10000 && amount <= 15000) {
        interestRate = 15;
    } else {
        interestRate = 20;
    }

    let decimalInterest = interestRate / 100;
    let total = amount * decimalInterest;
    let monthlyRepayment = (total / tenure).toFixed(2);

    return { amount, tenure, interestRate, monthlyRepayment };
}

export { calculateLoan };