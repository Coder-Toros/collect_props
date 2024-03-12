'use strict';

const submit = document.querySelector('button[type=submit]');
const fName = document.querySelector('#f-name');
const lName = document.querySelector('#l-name');
const email = document.querySelector('#email');
const nickName = document.querySelector('#nick-name');

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
  const person = new Person(
    fName.value,
    lName.value,
    email.value,
    nickName.value
  );

  localStorage.setItem(`${person.lastName}`,
                       `${JSON.stringify(person)}`);
}

submit.addEventListener('click', getData);