# Implementation of an generator in a Сlass that takes array as an argument

---
[![Build status](https://ci.appveyor.com/api/projects/status/f22hava44fa4rp2o?svg=true)](https://ci.appveyor.com/project/AACMKT/ajs-generators)

### Описание

Представлены условные типы игровых персонажей, как дочерние классы от класса Character:

```javascript
const char = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
}
```

Для создания команды персонажей, реализован класс `Team`(принимающий список персонажей в качестве аргумента).

Реализован генератор в классе `Team`, который по одному выдаёт персонажей (объекты типа `Character`), по шаблону:

```javascript
class Team {
  // ...
  *[Symbol.iterator]() {
    // ...
  }

}
```
---

Дополнительно, реализована  функция `canIterate`, которая определяет, соответствует ли объект протоколу итерирования, возвращая, соответственно, `true`/`false`.

Примеры использования:
```javascript
canIterate(new Map()); // true
canIterate(new Set()); // true
canIterate(null); // false
canIterate(10); // false
canIterate("Netology"); // true
```
---

Обеспечено покрытие тестами.
