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

export { tenureToString, convertToCurrency };
