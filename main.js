function getRandomColor() {
  const symbols = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += symbols[Math.floor(Math.random() * symbols.length)];
  }
  return color;
}

// Функція для отримання списку контактів з JSONPlaceholder
function getContacts() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      const contactsContainer = document.getElementById("contactsContainer");
      data.forEach((contact) => {
        const contactCard = document.createElement("div");
        contactCard.classList.add("contact-card");

        const avatar = document.createElement("div");
        avatar.classList.add("avatar");
        avatar.style.backgroundColor = getRandomColor();
        avatar.innerText = contact.name.charAt(0);

        const name = document.createElement("h3");
        name.innerText = contact.name;

        const phone = document.createElement("p");
        const phoneLink = document.createElement("a");
        phoneLink.href = "tel:" + contact.phone;
        phoneLink.innerText = contact.phone;
        phone.appendChild(phoneLink);

        const email = document.createElement("p");
        const emailLink = document.createElement("a");
        emailLink.href = "mailto:" + contact.email;
        emailLink.innerText = contact.email;
        email.appendChild(emailLink);

        const address = document.createElement("p");
        address.innerText =
          contact.address.city +
          ", " +
          contact.address.street +
          ", " +
          contact.address.suite;

        contactCard.appendChild(avatar);
        contactCard.appendChild(name);
        contactCard.appendChild(phone);
        contactCard.appendChild(email);
        contactCard.appendChild(address);

        contactsContainer.appendChild(contactCard);
      });
    });
}

// Виклик функції для отримання контактів
getContacts();
