#!/usr/bin/node
/**
 * function welcome
 * @param {*} firstName 
 * @param {*} lastName 
 */

function welcome(firstName, lastName) {
    fullName = `${firstName} ${lastName}`;
    
    function displayFullName() {
        alert(`Welcome ${fullName}!`);
    }

    displayFullName()

}