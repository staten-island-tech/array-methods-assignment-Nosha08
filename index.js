const coolPeople = [{
    name: 'Mahatma Ghandi',
    nation: 'India',
    random: [1, 10, 123214],
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

coolPeople.forEach((person) => console.log(person))
coolPeople.filter((person) => person.random)