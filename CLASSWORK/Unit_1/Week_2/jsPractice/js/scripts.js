const myArr = [1,2,3,4]
// console.log(myArr)

// for (let i= 0; i< myArr.length; i++) {
//     console.log (myArr[i])
// }

// myArr.forEach (function (element) {
//     console.log(element)

// })

// myArr.forEach ((element) => {
//     console.log(element)
// })

// myArr.map((element, idx) => {
//     console.log(idx +": " + element)
// })

const mySinglePost = {
    title: 'My Post Title',
    author: 'Rick',
    publishingDate: '2023-09-07',
    isDraft: false,
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio fuga, reiciendis dolore ducimus optio facilis, nostrum fugiat et repellendus voluptate quibusdam doloribus architecto quasi eveniet aliquid nam, aspernatur qui.',
    featuredImage: ['https://img1.com/img.jpg', 'https://img1.com/img-xl.jpg', 'https://img1.com/img-thumb.jpg']
}

// console.log (mySinglePost.author);
// console.log (mySinglePost['content']);

const allPosts = [
    {
        title: 'My Post Title 1',
        author: 'Rick',
        publishingDate: '2023-09-07',
        isDraft: false,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio fuga, reiciendis dolore ducimus optio facilis, nostrum fugiat et repellendus voluptate quibusdam doloribus architecto quasi eveniet aliquid nam, aspernatur qui.',
        featuredImage: ['https://img1.com/img.jpg', 'https://img1.com/img-xl.jpg', 'https://img1.com/img-thumb.jpg']
    },
    {
        title: 'My Post Title 2',
        author: 'Rick',
        publishingDate: '2023-09-07',
        isDraft: true,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio fuga, reiciendis dolore ducimus optio facilis, nostrum fugiat et repellendus voluptate quibusdam doloribus architecto quasi eveniet aliquid nam, aspernatur qui.',
        featuredImage: ['https://img1.com/img.jpg', 'https://img1.com/img-xl.jpg', 'https://img1.com/img-thumb.jpg']
    },
    {
        title: 'My Post Title 3',
        author: 'Rick',
        publishingDate: '2023-09-07',
        isDraft: false,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio fuga, reiciendis dolore ducimus optio facilis, nostrum fugiat et repellendus voluptate quibusdam doloribus architecto quasi eveniet aliquid nam, aspernatur qui.',
        featuredImage: ['https://img1.com/img.jpg', 'https://img1.com/img-xl.jpg', 'https://img1.com/img-thumb.jpg']
    },
    {
        title: 'My Post Title 4',
        author: 'Rick',
        publishingDate: '2023-09-07',
        isDraft: false,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio fuga, reiciendis dolore ducimus optio facilis, nostrum fugiat et repellendus voluptate quibusdam doloribus architecto quasi eveniet aliquid nam, aspernatur qui.',
        featuredImage: ['https://img1.com/img.jpg', 'https://img1.com/img-xl.jpg', 'https://img1.com/img-thumb.jpg']
    },
    {
        title: 'My Post Title 5',
        author: 'Rick',
        publishingDate: '2023-09-07',
        isDraft: false,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio fuga, reiciendis dolore ducimus optio facilis, nostrum fugiat et repellendus voluptate quibusdam doloribus architecto quasi eveniet aliquid nam, aspernatur qui.',
        featuredImage: ['https://img1.com/img.jpg', 'https://img1.com/img-xl.jpg', 'https://img1.com/img-thumb.jpg']
    },
    {
        title: 'My Post Title 6',
        author: 'Rick',
        publishingDate: '2023-09-07',
        isDraft: false,
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio fuga, reiciendis dolore ducimus optio facilis, nostrum fugiat et repellendus voluptate quibusdam doloribus architecto quasi eveniet aliquid nam, aspernatur qui.',
        featuredImage: ['https://img1.com/img.jpg', 'https://img1.com/img-xl.jpg', 'https://img1.com/img-thumb.jpg']
    }
]

// to access an element inside the array
// allPosts.map(post => {
//     console.log(post.title)
// })

// // or: 

// console.log(allPosts[1].isDraft);




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
    pinkFloyd.discography.map (album => {
        if (name === album.name)
            year=album.year
    })
    return year

}

function findBandMember (name) {
    let role
    pinkFloyd.members.map(member => {
        if (name === member.name )
            role=member.role
    })
    return role
}

console.log (findYearofAlbum('The Division Bell'))
console.log (findBandMember('Roger Waters'))

// Create an object called PinkFloyd
// let PinkFloyd = {
//     // Key called bandMembers
//     bandMembers: [
//         { name: 'David Gilmour', role: 'guitarist' },
//         { name: 'Roger Waters', role: 'bassist' },
//         { name: 'Richard Wright', role: 'keyboardist' },
//         { name: 'Nick Mason', role: 'drummer' },
//         { name: 'Syd Barrett', role: 'vocalist' }
//     ],
//     // Key called discography
//     discography: [
//         { year: 1967, album: 'The Piper at the Gates of Dawn' },
//         { year: 1968, album: 'A Saucerful of Secrets' },
//         { year: 1969, album: 'More' },
        
//     ],
//     // Function to get the role of a band member
//     getRole: function (memberName) {
//         const member = this.bandMembers.find(
//             entry => entry.name === memberName
//         );
//         return member ? member.role : 'Member not found';
//     },
//     // Function to get the year of an album
//     getAlbumYear: function (albumName) {
//         const album = this.discography.find(
//             entry => entry.album === albumName
//         );
//         return album ? album.year : 'Album not found';
//     }
// };


// console.log(PinkFloyd.getRole('David Gilmour')); 
// console.log(PinkFloyd.getAlbumYear('The Piper at the Gates of Dawn')); 




