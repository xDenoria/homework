function convertCurrency(fromCurrency, toCurrency,amount) {
    let exchangeRate;

    switch (fromCurrency) {
        case 'USD':
            switch (toCurrency) {
                case 'EUR':
                    exchangeRate = 0.92; 
                    break;
                case 'RUB':
                    exchangeRate = 87.62;
                    break;
                case 'GBP':
                    exchangeRate = 0.78; 
                    break;
                default:
                    console.log('Курс конвертации для заданной пары валют отсутствует');
                    return null;
            }
            break;
        
        case 'EUR':
            switch (toCurrency) {
                case 'USD':
                    exchangeRate = 1.08; 
                    break;
                case 'RUB':
                    exchangeRate = 94,93;
                    break;
                case 'GBP':
                    exchangeRate = 0.84;
                    break;
                default:
                    console.log('Курс конвертации для заданной пары валют отсутствует');
                    return null;
            }
            break;
        
        case 'RUB':
            switch (toCurrency) {
                case 'USD':
                    exchangeRate = 0.011;
                    break;
                case 'EUR':
                    exchangeRate = 0.011;
                    break;
                case 'GBP':
                    exchangeRate = 0.0089; 
                    break;
                default:
                    console.log('Курс конвертации для заданной пары валют отсутствует');
                    return null;
            }
            break;
        
        case 'GBP':
            switch (toCurrency) {
                case 'USD':
                    exchangeRate = 1.29; // курс GBP / USD
                    break;
                case 'EUR':
                    exchangeRate = 1.19; // курс GBP / EUR
                    break;
                case 'RUB':
                    exchangeRate = 112.84; // курс GBP / RUB
                    break;
                default:
                    console.log('Курс конвертации для заданной пары валют отсутствует');
                    return null;
            }
            break;
        
        default:
            console.log('Курс конвертации для заданной пары валют отсутствует');
            return null;
    }

    const convertedAmount = amount * exchangeRate;
    console.log(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
    return convertedAmount;
}

convertCurrency('RUB', 'USD',1000);
convertCurrency('EUR', 'USD',100);  
convertCurrency('GBP', 'CNY',100); 
convertCurrency('CHF', 'RUB',100); 
