const coolPeople = [{
    name: 'Mahatma Ghandi',
    nation: 'India',
    random: [1, 10, -123214],
},
{
    name: 'Mark Erlenwein',
    nation: 'USA',
    random: [98, 124, 51]
},
{
    name: 'Winston Churchill',
    nation: 'UK',
    random: [-9., 124124, 0]
}]

coolPeople.forEach((person) => console.log(person.name));
coolPeople.forEach((person) => console.log(person));
coolPeople.forEach((person) => person.random.forEach((item) => console.log(item)));

const random = coolPeople.filter((person) => person.random.every((item) => item > 10));
console.log(random)