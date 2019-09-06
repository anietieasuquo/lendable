function convertToCurrency(amount, fractionalDigits, currency) {
    return new Intl.NumberFormat('en-UK', {
        style: 'currency',
        currency: currency || 'GBP',
        minimumFractionDigits: fractionalDigits
    }).format(amount);
}

//less elegant, but for the sake of better testing
function tenureToString(t) {
    let tenure = convertTenure(t);

    if (t % 12 !== 0) {
        tenure += '½';
    }

    tenure += ' year';

    if (t > 12) {
        tenure += 's';
    }

    return tenure;
}

function convertTenure(tenure) {
    return tenure % 12 === 0 ? tenure / 12 : (tenure - 6) / 12;
}

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
    let monthlyRepayment = (total / (1 - Math.pow((1 + decimalInterest), (tenure * (0-1))))).toFixed(2);

    return { amount, tenure, interestRate, monthlyRepayment };
}

export { tenureToString, convertToCurrency, calculateLoan };
