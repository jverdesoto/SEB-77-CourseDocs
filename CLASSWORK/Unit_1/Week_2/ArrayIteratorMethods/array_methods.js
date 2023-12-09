//array iterator methods

// forEach

// const friends = ["Melissa", "Mark", "Andrew", "Nick"];

// friends.forEach((friend) => {
//     console.log(`I have a friend named ${friend}`)
// })


//map

// const nums = [1, 2, 3];
// const squared = nums.map((num) => num * num)

// console.log(squared)

// filter

// const nums = [22, 56, 2, 6, 87];
// const odds = nums.filter((num) => num % 2); // filters out the odd numbers 

//find

// const cars = [
//     {color: 'red', make: 'BMW', year: 2021},
//     {color: 'white', make: 'Toyota', year: 2002},
//     {color: 'black', make: 'Ford', year: 2014},
//     {color: 'white', make: 'Tesla', year: 2016}
// ]

// const firstWhiteCar = cars.find((car) => car.color === 'white');
// console.log(firstWhiteCar)

// const missingCar = cars.find((car) => car.color === 'blue');
// console.log(missingCar)

// findIndex

// const idxFirstCarNewer = cars.findIndex((car) => car.year > 2015)
// console.log(idxFirstCarNewer)

// const missingCarIdx = cars.findIndex((car) => car.year > 2020)

//find

// const hasFord = cars.some((car) => car.make === 'Ford')
// console.log(hasFord)

// reduce

// const nums = [25, 4, 100, 45]

// const sum = nums.reduce((acc, num) => acc + num, 0)

const votes = ['yes', 'no', 'no', 'no', 'yes']

const tally = votes.reduce((runningTally, vote) => {
    //assign 1 if first seeing that type of vote, if not increase vote count
    runningTally[vote] = runningTally[vote] ? runningTally[vote] + 1 : 1
    return runningTally
}, {})

console.log(tally)