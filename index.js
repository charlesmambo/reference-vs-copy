
    // start with strings, numbers and booleans
    let age = 100
    let age2 = age;
    console.log(age, age2)
    age2 = 200;
    console.log(age2);

    let name = 'Charles';
    let name2 = name;
    console.log(name, name2);
    name2 = 'Mambo';
    console.log(name)

    // Let's say we have an array
    const players = ['Charles', 'Aron', 'Ryan', 'Coco'];

    // and we want to make a copy of it.
    const team = players;
    console.log(team)

    // You might think we can just do something like this:
    team[3] = 'Draco'
    console.log(team)

    // however what happens when we update that array?
    console.log(players)

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
    const team2 = players.slice();

    // one way

    // or create a new array and concat the old one in
    const team3 = [].concat(players);

    // or use the new ES6 Spread
    const team4 = [...players];
    team4[3] = 'Who are we?'
    console.log(team4);

    const team5 = Array.from(players)

    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Char les',
      age: 50
    };

    // and think we make a copy:
    const student = person;
    student.number = 24;

    // how do we take a copy instead?
    const stud = Object.assign({}, person, {number: 24, age: 22});
    console.log(stud)

    // We will hopefully soon see the object ...spread

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

    const char = {
        name: 'Char',
        age: 28,
        social :{
            twitter: '@cmwebtech',
            facebook: 'hellochar'
        }
    }

    console.log(char)

    const dev = Object.assign({}, char);
    const dev2 = JSON.parse(JSON.stringify(char));
    console.log(dev2)