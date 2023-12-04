// const myArr = [1, 2, 3, 4]

// console.log(myArr)

// for ( let i = 0; i < myArr.length; i++ ) {
//     console.log(myArr[i])
// }

// myArr.forEach(function (element) {
//     console.log()
// })

// myArr.forEach((element) => {
//     console.log(element)
// })

// myArr.map(element => {
// console.log(element)
// })

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

// allPosts.map(post => {
//     console.log(post.title)
// })

const pinkFloyd = {
    members: [
        {
            name: "Syd Barrett",
            role: "Lead Guitar",
        },
        {
            name: "Nick Mason",
            role: "Drums",
        },
        {
            name: "Roger Waters",
            role: "Bass guitar, vocals",
        },
        {
            name: "Richard Wright",
            role: "Keyboards, Vocals",
        }
    ],

    discography: [
        {
            name: "The Wall",
            year: 1979,
        },
        {
            name: "Pulse",
            year: 1995,
        },
        {
            name: "The Dark Side of The Moon",
            year: 1973,
        },
        {
            name: "Meddle",
            year: 1971,
        },
        {
            name: "The Final Cut",
            year: 1983,
        },
    ]
};

function findYearOfAlbum(albumName) {
   const album = pinkFloyd.discography.find(album => album.name === albumName);
   if (album) {
    return album.year;
}
};

console.log(findYearOfAlbum("The Final Cut"))
console.log(findYearOfAlbum("Meddle"))
console.log(findYearOfAlbum("Pulse"))
console.log(findYearOfAlbum("The Dark Side of The Moon"))
console.log(findYearOfAlbum("The Wall"))

function findBandMember(memberName) {
    const member = pinkFloyd.members.find(member => member.name === memberName);
    if (member) {
        return member.role;
    }
};

console.log(findBandMember("Syd Barrett"))
console.log(findBandMember("Nick Mason"))
console.log(findBandMember("Roger Waters"))
console.log(findBandMember("Richard Wright"))
