// const myArr = [1,2,3,4]

// // iteration methods
// console.log(myArr)
// // goes through each thin in array. starting from 0, adding one each time.
// for ( let i = 0; i < myArr.length; i++ ) {
//     console.log(myArr[i]);
// };

// //call back functions (annonymous) introduced in 2015. 
// //arrow function
// myArr.forEach((element) => {
//     console.log(element)
// });

// // regular function
// // brackets are not needed for a single parameter 
// myArr.forEach(function(element) {
//     console.log(element)
// });
// // using map ? difference with foreach vs map 
// myArr.map((element, idx) => {
//     console.log(idx + ": " + element)
// });




// Create an object called PinkFloyd
// key called band Members => object -> keys role in band and Names
// key called dicography => array of objects include the year and the name of the album
// create function that inputs a name of band member output the role
// create function input name of album output a year
const pinkFloyd = {
    members: [
        {
            name: 'Syd Barrett',
            role: 'lead and rhythm guitars, vocals'
        },
        {
            name: 'David Gilmour',
            role: 'lead and rhythm guitars, vocals, bass, keyboards, synthesisers'
        },
        {
            name: 'Roger Waters',
            role: 'bass, vocals, rhythm guitar, synthesisers'
        },
        {
            name: 'Richard Wright',
            role: 'keyboards, piano, organ, synthesisers, vocals'
        },
        {
            name: 'Nick Mason',
            role: 'drums, percussion'
        }
    ],
    discography: [
        {
            name: 'The Piper at the Gates of Dawn',
            year: 1967
        },
        {
            name: 'A Saucerful of Secrets',
            year: 1968
        },
        {
            name: 'More',
            year: 1969
        },
        {
            name: 'Ummagumma',
            year: 1969
        },
        {
            name: 'Atom Heart Mother',
            year: 1970
        },
        {
            name: 'Meddle',
            year: 1971
        },
        {
            name: 'Obscured by Clouds',
            year: 1972
        },
        {
            name: 'The Dark Side of the Moon',
            year: 1973
        },
        {
            name: 'Wish You Were Here',
            year: 1975
        },
        {
            name: 'Animals',
            year: 1977
        },
        {
            name: 'The Wall',
            year: 1979
        },
        {
            name: 'The Final Cut',
            year: 1983
        },
        {
            name: 'A Momentary Lapse of Reason',
            year: 1987
        },
        {
            name: 'The Division Bell',
            year: 1994
        },
        {
            name: 'The Endless River',
            year: 2014
        }
    ]
}

function findYearofAlbum(name) {
    let year
    pinkFloyd.discography.map(album =>  {
        if ( name === album.name ) {
            year = album.year;
        }
    })
    return year
}

function findBandMember(name){
    let role
    pinkFloyd.members.map(member => {
        if ( name === member.name ) {
            role = member.role;
        }
    })
    return role
}
console.log(findYearofAlbum('The Wall'))
console.log(findBandMember('Roger Waters'))

