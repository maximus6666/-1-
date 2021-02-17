const cola = 15.678,
    pepsi = 123.965,
    fanta = 90.2345;

//максимальне число
const maxPrise = Math.max(cola, pepsi, fanta);
console.log(`максимальне число ${maxPrise}`);


//мінімальне число
const minPrise = Math.min(cola, pepsi, fanta);
console.log(`мінімальне число ${minPrise}`);


//вартість всіх товарів
const sum = cola + pepsi + fanta;
console.log(`вартість всіх товарів ${sum}`);


//ціла частина вартості кожного товару, округлення в меншу сторону
const roundedCola = Math.floor(cola),
    roundedPepsi = Math.floor(pepsi),
    roundedFanta = Math.floor(fanta);


//сума без копійок
const roundedSum = roundedCola + roundedPepsi + roundedFanta;
console.log(`сума без копійок ${roundedSum}`);


//сума товарів округлена до сотень
const roundToHundreds = Math.round((sum/100))*100;
console.log(`сума товарів округлена до сотень ${roundToHundreds}`);


//є парним чи непарним числом?
const minRoundedSum = Math.floor(sum);
let isEven;
if (minRoundedSum % 2 === 0) {
    console.log(true);
    isEven = true; 
} else {
    console.log(false);
    isEven = false;
}

//сума решти при оплаті всіх товарів, клієнт платить 500
const restOfMoney = 500 - sum;
console.log(`сума решти при оплаті всіх товарів, клієнт платить 500: ${restOfMoney}`);

//середнє значення цін, округлене до другого знаку після коми
const roundedMiddlePrise = Number(((cola + pepsi + fanta) / 3).toFixed(2));
console.log(`середнє значення цін, округлене до другого знаку після коми ${roundedMiddlePrise}`);

//Чистий прибуток 
const randomSales = Math.ceil((Math.random() * 100));
const priseWithSale = Number((sum - sum * randomSales / 100).toFixed(2));
console.log(`ціна зі знижкою ${priseWithSale}`);
const profit = Number((sum / 2 - sum * randomSales / 100).toFixed(2));
console.log(`прибуток при сумі ${sum.toFixed(2)} зі знижкою ${randomSales}% складає ${profit}`);

//шаблонний рядок
const totalString = `Максимальна ціна: ${maxPrise}
Мінімальна ціна: ${minPrise}
Вартість всіх товарів: ${sum}
Cума без копійок: ${roundedSum}
Cума товарів округлена до сотень ${roundToHundreds}
Чи є сума всіх товарів парним числом: ${isEven}
Cума решти при оплаті всіх товарів, клієнт платить 500: ${restOfMoney}
Cереднє значення цін ${roundedMiddlePrise}`;

console.log(totalString);
