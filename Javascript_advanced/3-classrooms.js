#!/usr/bin/node\

/**
 * closure and loops
 */

function createClassRoom(numberOfStudents) {
    function studentSeat(seat) {
        function seatNumber() {
            return seat;
        }
        return seatNumber;
    }
    const students = [];
    for (let i=1; i <= numberOfStudents; i++) {
            let seatValue = studentSeat(i);
            students.push(seatValue);
        }
        return students;
        

}

const classRoom = createClassRoom(10);
