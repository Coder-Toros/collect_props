'use strict';

const inputs = Array.from(document.querySelectorAll('input'));
const submit = document.querySelector('button[type=submit]');
const errorMessage = document.querySelector('span');

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

  const person = new Person(...inputs.map((el) => el.value));

  localStorage.setItem(`${person.lastName}`, `${JSON.stringify(person)}`);
}

function checkEmail() {
  const rexEx = /^\w+\.?\w+@[a-z]{3,8}\.[a-z]{2,5}$/gi;

  rexEx.test(inputs[2].value)
    ? (errorMessage.style.display = 'none')
    : (errorMessage.style.display = 'inline-block');
}

inputs[2].addEventListener('keyup', () => setTimeout(checkEmail, 2000));
submit.addEventListener('click', getData);