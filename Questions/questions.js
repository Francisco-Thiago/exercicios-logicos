async function getRandomUser() {

    function getWeight(max, min){
        return Number((Math.random() * (max - min) +min).toFixed(2));
    }

    function getHeight(max, min) {
        return Number("1." + Math.floor(Math.random() * (max - min) + min));
    }

    const url = "https://randomuser.me/api/";

    return axios.get(url)
    .then(response => {
        const data = response['data']['results'][0];
        const gender = data.gender.charAt(0).toUpperCase();
        const name = `${(data.name).first} ${(data.name).last}` 
        const height = getHeight(600, 999);
        const weight = getWeight(60, 90);
        const person = {
            name: name,
            gender: gender,
            height: height,
            weight: weight
        }
        return person;
    })
    .catch(error => console.error(error));
}

function question1(name, workedHours, moneyPerHour, sons) {
    const funcionary = {};

    funcionary.name = name;
    funcionary.workedHours = workedHours;
    funcionary.moneyPerHour = moneyPerHour;
    funcionary.sons = sons;
    funcionary.grossSalary = funcionary.moneyPerHour * funcionary.workedHours;
    funcionary.addition = funcionary.grossSalary * ((funcionary.sons * 3)/100);
    funcionary.total = funcionary.grossSalary + funcionary.addition;

    console.log("Question 1")
    console.table(funcionary);

    // Dúvida: Juros simples ou compostos?
}

function question2(name, fixedSalary, totalSales, percentual) {
    const seller = {};
    seller.name = name;
    seller.fixedSalary = fixedSalary;
    seller.totalSales = totalSales;
    seller.percentual = percentual/100;
    seller.total = seller.fixedSalary + (seller.totalSales * seller.percentual);

    console.log("Question 2")
    console.table(seller);
}

function question3(valueToBePaid, paid) {
    let change = parseInt(paid - valueToBePaid);
    const exchanged = {
        "$50": 0, "$20": 0,
        "$10": 0, "$5": 0,
        "$2": 0, "$1": 0
    };

    if(change > 0) {
        let pay = true;
        while(pay){
            if(change >= 50) {
                exchanged["$50"] += 1;
                change -= 50;
            }else if(change >= 20) {
                exchanged["$20"] += 1;
                change -= 20;
            }else if(change >= 10) {
                exchanged["$10"] += 1;
                change -= 10;
            }else if(change >= 5) {
                exchanged["$5"] += 1;
                change -= 5;
            }else if(change >= 2) {
                exchanged["$2"] += 1;
                change -= 2;
            }else if(change >= 1){
                exchanged["$1"] += 1;
                change -= 1;
            }else {
                pay = false;
            }
        }         
        console.log("Question 3")
        console.table(exchanged)
    }else {
        throw `O valor pago é insuficiente: ${change}`;
    }    
    //console.table(exchaged);
}

function question4() {
    // Grupo é um suposto array 250 pessoas;
    const group = [];
    while(group.length < 5) {
        group.push(getRandomUser());
    }
}

function question5(number) {
    console.log("Question 5")
    const perfectNumbers = [];

    for(let i = 1 ; i <= number/2 ; i++) {
        if(number % i === 0) {
            perfectNumbers.push(i);
        }
    }

    if((perfectNumbers.reduce((pv, cv) => pv+cv)) === number) {
        console.table(perfectNumbers.slice(0, 4))
    }else {
        console.log("Número imperfeito")
    }
}



question1("Martin", 10, 20, 5);
question2("Haroldo", 100, 560, 6);
question3(200, 499);
question5(28)
