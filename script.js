// Класс электроприборов

class Electrodevice {
    constructor(name, power) {
        this.class = "Электроприбор";
        this.name = name;
        this.power = power;         // мощность в ваттах
        this.isOn = false;          // выключен
        this.timeOfwork = 0;        // время работы в секундах
    }

    // Включение 
    turnOn() {                       
        if (this.isOn) {
            console.log(`${this.name} уже включен.`);
        } else {
            this.isOn = true;
            console.log(`${this.name} включен.`);
        }
    }

    // Выключение
    turnOff() {                 
        if (!this.isOn) {
            console.log(`${this.name} уже выключен.`);
        } else {
            this.isOn = false;
            console.log(`${this.name} выключен.`);
        }
    }

    // Смена режима вкл/выкл
    turnOnOff() {                 
        if (this.isOn) {
            this.isOn = false;
            console.log(`${this.name} выключен.`);
        } else {
            this.isOn = true;
            console.log(`${this.name} включен.`);
        }
    }

}

// 3 У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.

// Класс телефоны - много в квартире
// бывают стационарные, радиотелефоны, мобильные (subClass) 
// свой цвет - черный по-умолчанию
// умеют пикать при включении

class Phone extends Electrodevice {
    constructor(power, color, subClass) {
        super('Телефон', power);
        this.color = color ? color : 'Черный';
        this.subClass = subClass ? subClass : 'Мобильный';
    }

// умеют пикать при включении
    turnOn() {                       
        super.turnOn();
        if (this.isOn) {
            console.log(`${this.subClass} ${this.name} на зарядке сказал "Пи-и-и"`);
        }
    }
}


// 4. Создайте экземпляры каждого прибора.

const vacuumCleaner = new Electrodevice("Пылесос", 1800);
const nuke = new Electrodevice("Микроволновка", 700);
const tableLamp = new Electrodevice("Настольная лампа", 60);

const myIphone = new Phone(50);
const homePhone = new Phone(15, "красный", "Стационарный");

// 5. Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)

let devices = [vacuumCleaner, nuke, tableLamp, myIphone, homePhone];
console.log(devices);

// Сделать убоку - включить вылесос на 15 минут
vacuumCleaner.turnOn();
vacuumCleaner.timeOfwork = 15 * 60;     

// Поставить мобильный на зарядку на 1 час
myIphone.turnOn();
myIphone.timeOfwork = 60 * 60;     




function calcEnergyConsumption(devices) {
    let totalEnergy = 0;

    devices.forEach(device => {
        if (device.isOn) {
            // Потребляемая энергия = мощность прибора * время работы (в часах)
            const timeInHours = device.timeOfwork / 3600; // фактическое время работы в часах
            const energy = device.power * timeInHours;
            totalEnergy += energy;
        }
    });

    return totalEnergy;
}

// 6. Подсчитать потреблянемую энергию всех приборв 
const totalConsumption = calcEnergyConsumption(devices);
console.log(`Потребляемая энергия: ${totalConsumption} ватт-часов`);
