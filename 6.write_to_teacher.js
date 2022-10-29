let phoneNumber = "11000000010111011010110001110110"

function BinarioADecimal(num){
    let sum = 0;

    for(let i = 0; i < num.length; i++){
    sum += +num[i] * 2 ** (num.length -1 -i);
    }

    return sum;
}

console.log(BinarioADecimal(phoneNumber));
//convert to decimal to obtains the teahcer's number and write in whtasApp "Profe ya acabe" and send a sticker :)