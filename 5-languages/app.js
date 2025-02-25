const langType = prompt ('Выберете язык, где EN  - английский, RU - русский, DE - немецкий, FR - французский, IT - Итальянский');
switch (langType) {
    case 'EN':
        console.log ('Hello!');
        break;
    case 'DE':
        console.log ('Hallo!');
        break;
    case 'RU':
        console.log ('Привет!');
        break;
    case 'FR':
        console.log ('Salut!');
        break;
    case 'IT':
        console.log ('Ciao!');
        break;
    default :
        console.log ('Язык не распознан')
}
