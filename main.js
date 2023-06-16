let name = prompt("Будь ласка, введіть ваше ім'я:");
while (name === "" || name === null) {
  name = prompt("Будь ласка, введіть ваше ім'я:");
}

let age = parseInt(prompt("Будь ласка, введіть ваш вік:"));
while (isNaN(age) || age <= 0) {
  age = parseInt(prompt("Будь ласка, введіть коректний вік цифрами:"));
}

let smoking = confirm("Чи курите ви?");

if (age < 18 && !smoking) {
  alert(`Молодець ${name}! Гарний приклад для своїх однолітків.`);
} else if (age < 18 && smoking) {
  alert(`${name}, а твої батьки знають про це?`);
} else if (age >= 18 && !smoking) {
  alert(`Супер ${name}! Мабуть ще й спортом займаєшся!`);
} else {
  alert(`Що ж ${name}, це твій вибір. Але я не радив би курити.`);
}
