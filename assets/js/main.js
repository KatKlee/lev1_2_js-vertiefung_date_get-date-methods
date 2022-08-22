let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

// Output Year
const d = new Date()
console.log(d.getFullYear())

// Output Month
console.log(d.getMonth() + ' Monate')

// Output Day
console.log(d.getDate() + ' Tage')

// Output Hour
console.log(d.getHours() + ' Stunden')

// Output Minutes
console.log(d.getMinutes() + ' Minuten')

// Output weekday from Array wochenTag
let day = wochenTag[d.getDay()]
console.log(day)

// Output month from Array monate
let month = monate[d.getMonth()]
console.log(month)