// const myArr = [1, 2, 3, 4]

// console.log(myArr);

// for ( let i = 0; i < myArr.length; i++ ) {
//     console.log(myArr[i])
// }

// myArr.forEach((element) => {
//     console.log(element)
// })

// myArr.map(element => {
//     console.log(element)
// })

// const mySinglePost = {
//     title: 'My Post Title',
//     author: 'Rick',
//     publishingDate: '2023-09-07',
//     isDraft: false,
//     content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio fuga, reiciendis dolore ducimus optio facilis, nostrum fugiat et repellendus voluptate quibusdam doloribus architecto quasi eveniet aliquid nam, aspernatur qui.',
//     featuredImage: ['https://img1.com/img.jpg', 'https://img1.com/img-xl.jpg', 'https://img1.com/img-thumb.jpg']
// }

// console.log(mySinglePost);

// const allPosts = [
//     {
//         title: 'My Post Title 1',
//         author: 'Rick',
//         publishingDate: '2023-09-07',
//         isDraft: false,
//         content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio fuga, reiciendis dolore ducimus optio facilis, nostrum fugiat et repellendus voluptate quibusdam doloribus architecto quasi eveniet aliquid nam, aspernatur qui.',
//         featuredImage: ['https://img1.com/img.jpg', 'https://img1.com/img-xl.jpg', 'https://img1.com/img-thumb.jpg']
//     },
//     {
//         title: 'My Post Title 2',
//         author: 'Rick',
//         publishingDate: '2023-09-07',
//         isDraft: true,
//         content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio fuga, reiciendis dolore ducimus optio facilis, nostrum fugiat et repellendus voluptate quibusdam doloribus architecto quasi eveniet aliquid nam, aspernatur qui.',
//         featuredImage: ['https://img1.com/img.jpg', 'https://img1.com/img-xl.jpg', 'https://img1.com/img-thumb.jpg']
//     },
//     {
//         title: 'My Post Title 3',
//         author: 'Rick',
//         publishingDate: '2023-09-07',
//         isDraft: false,
//         content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio fuga, reiciendis dolore ducimus optio facilis, nostrum fugiat et repellendus voluptate quibusdam doloribus architecto quasi eveniet aliquid nam, aspernatur qui.',
//         featuredImage: ['https://img1.com/img.jpg', 'https://img1.com/img-xl.jpg', 'https://img1.com/img-thumb.jpg']
//     },
//     {
//         title: 'My Post Title 4',
//         author: 'Rick',
//         publishingDate: '2023-09-07',
//         isDraft: false,
//         content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio fuga, reiciendis dolore ducimus optio facilis, nostrum fugiat et repellendus voluptate quibusdam doloribus architecto quasi eveniet aliquid nam, aspernatur qui.',
//         featuredImage: ['https://img1.com/img.jpg', 'https://img1.com/img-xl.jpg', 'https://img1.com/img-thumb.jpg']
//     },
//     {
//         title: 'My Post Title 5',
//         author: 'Rick',
//         publishingDate: '2023-09-07',
//         isDraft: false,
//         content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio fuga, reiciendis dolore ducimus optio facilis, nostrum fugiat et repellendus voluptate quibusdam doloribus architecto quasi eveniet aliquid nam, aspernatur qui.',
//         featuredImage: ['https://img1.com/img.jpg', 'https://img1.com/img-xl.jpg', 'https://img1.com/img-thumb.jpg']
//     },
//     {
//         title: 'My Post Title 6',
//         author: 'Rick',
//         publishingDate: '2023-09-07',
//         isDraft: false,
//         content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio fuga, reiciendis dolore ducimus optio facilis, nostrum fugiat et repellendus voluptate quibusdam doloribus architecto quasi eveniet aliquid nam, aspernatur qui.',
//         featuredImage: ['https://img1.com/img.jpg', 'https://img1.com/img-xl.jpg', 'https://img1.com/img-thumb.jpg']
//     }
// ]
// console.log(allPosts[1].isDraft);

// allPosts.map(post => {
//     console.log(post.title)
// })

//Create an object called PinkFloyd
// key Called band Members => object -> keys role in band and Names
// key called discography => array of objects include the year and the name of the album
// create function that inputs a name of band members output the role
// create function input name of album output a year

const pinkFloyd = {
    members: [
        {
            name: 'David Gilmour',
            role: 'Lead and rhythm guitar, vocals',
            isAlive: true
        },
        {
           name: 'Roger Waters',
           role: 'Bass guitar, piano, vocals',
           isAlive: true 
        },
        {
            name: 'Syd Barrett',
            role: 'Lead and Rhythm guitar, vocals',
            isAlive: false
        },
        {
            name: 'Richard Wright',
            role: 'Keyboards, piano, organ, vocals',
            isAlive: false
        },
        {
            name: 'Nick Mason',
            role: 'drums, percussion',
            isAlive: true
        },
    ],
    discography: [
        {
            name: 'The Piper at the Gates of Dawn',
            year: 1967
        },
        {
            name: 'A Sauceful of Secrets',
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
           Name: 'Atom Heart Mother',
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
        },

    ],
}


function findYearOfAlbum(name) {
    let year;
    pinkFloyd.discography.map(album => {
        if (name === album.name) {
            year = album.year;
        }
    })
    return year
}

function findBandMember(name) {
    let role;
    pinkFloyd.members.map(person => {
        if (name === person.name) {
            role = person.role;
        }
    }) 
    return role
}

function areTheyAlive(name) {
    let isAlive;
    pinkFloyd.members.map(person => {
        if (name === person.name) {
            isAlive = person.isAlive;
        }
        if (isAlive === true) {
            isAlive = 'This person is still alive'
        } else if (isAlive === false) {
            isAlive = 'This person has passed away'
        }    
    })
    return isAlive

}


console.log(findYearOfAlbum('The Piper at the Gates of Dawn'))
console.log(findBandMember('Richard Wright'))
console.log(areTheyAlive('Richard Wright'))

