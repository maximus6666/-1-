const cola = 15.678,
    pepsi = 123.965,
    fanta = 90.2345;


const maxPrise = Math.max(cola, pepsi, fanta);
console.log(`максимальне число ${maxPrise}`);

const minPrise = Math.min(cola, pepsi, fanta);
console.log(`мінімальне число ${minPrise}`);

const sum = cola + pepsi + fanta;
console.log(`вартість всіх товарів ${sum}`);


const roundedCola = Math.floor(cola),
    roundedPepsi = Math.floor(pepsi),
    roundedFanta = Math.floor(fanta);

const roundedSum = roundedCola + roundedPepsi + roundedFanta;
console.log(`сума без копійок ${roundedSum}`);

console.log(`сума товарів округлена до сотень ${Math.round((roundedSum/100))*100}`);


const minRoundedSum = Math.floor(sum);
if (minRoundedSum % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}



const restOfMoney = 500 - sum;
console.log(`сума решти при оплаті всіх товарів, клієнт платить 500 - ${restOfMoney}`);


const roundedMiddlePrise = ((cola + pepsi + fanta) / 3).toFixed(2);
console.log(`середнє значення цін, округлене до другого знаку після коми ${roundedMiddlePrise}`);



const randomSales = Math.ceil((Math.random()*100));
const profit = (sum / 2 - sum * (randomSales / 100)).toFixed(2);

console.log(`прибуток при сумі ${sum.toFixed(2)} зі знижкою ${randomSales}% складає ${profit}`);

