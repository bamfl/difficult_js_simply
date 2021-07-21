// Урок 1. JavaScript. Что такое prototype. JavaScript Prototype (English Subs)
// У обычного объекта есть св-во __proto__: Object, в к-ом доступны св-ва и методп объекта-прототипа, например .toString()
const person = {
  name: 'Dmitriy',
  age: 26,
  greet() {
    console.log('Greeting you!');
  }
};

// т.е. под капотом происходит создание экземплера класса Object:
const persone1 = new Object({
  name: 'Dmitriy',
  age: 26,
  greet() {
    console.log('Greeting you!');
  }
});

// Этот __proto__: Object можно получить, обратившись к классу Object.prototype
console.log(Object.prototype);
console.log(persone1.__proto__);
console.log(persone1.__proto__ === Object.prototype);

// В прототип класса Object можно записывать новые св-ва и методы, к-ые будут наследоваться новыми экземплярами объектов:
Object.prototype.myProps = 'myValue';
Object.prototype.sayHello = function () {
  console.log('Hello!');
};

// Создать новый экзмпляр выбрав родительский объект:
const masha = Object.create(person); // у него в __proto__: Object будут все св-ва родителя person, а у него в __proto__: Object будут все св-ва родителя-класса Object
masha.name = "Maria";

// Создание строки
const str = 'Строка';

// т.е. под капотом происходит создание экземплера класса String:
const str1 = new String('Строка'); // у него есть __proto__: String, а у него __proto__: Object

// Итого: св-ва и методы читаются сверху-вниз. Сначала ищется в экземляре, потом в прототипе и т.д.
// Если встречается такое св-во или метод, то он возвращает первое попавшееся значение, если его нет - ошибка