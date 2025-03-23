function crypto(password) {
    let passwordChars = password.split('');
        function swap(index) {
        if (index >= passwordChars.length - 1) {
            return; 
        }
        let arr = passwordChars[index];
        passwordChars[index] = passwordChars[index + 1];
        passwordChars[index + 1] = arr;
        swap(index + 2);
    }
        swap(0);  
    return passwordChars.join('');
}

let password = 'Qwerty1234';
let cryptoPassword = crypto(password);
console.log (`Изначальный пароль: ${password}`)
console.log(`Зашифрованный пароль: ${cryptoPassword}`); 

function decrypt(password) {
    let passwordChars = password.split('');
        function swap(index) {
        if (index >= passwordChars.length - 1) {
            return; 
        }
        let arr = passwordChars[index];
        passwordChars[index] = passwordChars[index + 1];
        passwordChars[index + 1] = arr;
        swap(index + 2);
    }
        swap(0);  
    return passwordChars.join('');
}
let decryptedPassword = decrypt(cryptoPassword)
console.log (`Изначальный зашифрованный пароль: ${cryptoPassword}`);
console.log (`Рашифрованный пароль: ${decryptedPassword}`);

function checkPassword (originalPassword,encryptedPassword) {
    let decryptedPassword = decrypt(encryptedPassword);
    return decryptedPassword === originalPassword
}
let isPasswordCorrect = checkPassword (password,cryptoPassword);
console.log(`Пароли совпадают? ${isPasswordCorrect}`)
