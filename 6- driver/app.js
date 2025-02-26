const hasLicence = true;
const age = 20;
const isDrunk = false;
const canDrive = age>=18 && hasLicence && !isDrunk;
console.log(canDrive ? 'Может водить машину' : 'Не может водить машину') 