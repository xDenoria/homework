let positionLat = prompt('Введите координату текущего положения (X1):'), 
    positionLong = prompt('Введите координату текущего положения (Y1):');  
console.log(`Координаты текущего местоположения : ${positionLat}, ${positionLong}`);
const addressLat = prompt('Введите координату назначения (X2):'),
      addressLong = prompt('Введите координату назначения (Y2):');
console.log(`Координаты точки назначения: ${addressLat}, ${addressLong}`);    
const distance = Math.sqrt((addressLat - positionLat)**2 + (addressLong - positionLong)**2);
console.log(`Расстояние между текущим положением и точкой назначения составит: ${distance}`)