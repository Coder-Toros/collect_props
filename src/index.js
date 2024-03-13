'use strict';

const inputs = Array.from(document.querySelectorAll('input'));
const submit = document.querySelector('button[type=submit]');

class Person {
  constructor(firstName, lastName, email, nickName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.nickName = nickName;
  }
}

function getData(e) {
  e.preventDefault();
  
  const person = new Person(...inputs.map(el => el.value))

  localStorage.setItem(`${person.lastName}`,
                       `${JSON.stringify(person)}`);
}

submit.addEventListener('click', getData);