const myArr = [1, 2, 3, 4];

// console.log(myArr)
// console.log(myArr[2])

// for (let i = 0; i < myArr.length; i++) {
//     console.log(myArr[i])
// }

// myArr.forEach(arr => {
//     console.log(arr)
// })

// for (let arr of myArr) {
//     console.log(arr)
// }

// myArr.map((arr, id) => {
//     console.log(id + ":" + arr)
// })

// const mySinglePost = {
//     title: 'My Post Title',
//     author: 'Rick',
//     publishingDate: '2023-09-07',
//     isDraft: false,
//     content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio fuga, reiciendis dolore ducimus optio facilis, nostrum fugiat et repellendus voluptate quibusdam doloribus architecto quasi eveniet aliquid nam, aspernatur qui.',
//     featuredImage: ['https://img1.com/img.jpg', 'https://img1.com/img-xl.jpg', 'https://img1.com/img-thumb.jpg']
// }

// console.log(mySinglePost.author)
// console.log(mySinglePost['content'])

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

// console.log(allPosts[1].isDraft)

allPosts.map(post => {
    console.log(post.title)
})

// 
// 

const PinkFloyd = {
    members : [
        {
            name: 'David Gilmour',
            role: 'Lead rythm guitar, vocals'
        },
        {
            name: 'Nick Mason',
            role: 'Drums, tape effects and occasional vocals'
        },
        {
            name: 'Roger Waters',
            role: 'Lead and backing vocals'
        },
        {
            name: 'Richard Wright',
            role: 'Backing and Lead vocals'
        },
        {
            name: 'Syd Barrett',
            role: 'Lead and backing vocals'
        }
    ],
    discography : [
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
            name: 'Meddle',
            year: 1971
        }
    ]
}


// // function getMembersRole(name) {
// //     let role = PinkFloyd.members.map(person => {
// //         if (person.name === name) {
// //             console.log(person.role)
// //         }
// //     })
// //     return role
// // }

// // function getYearOfAlbum(name) {
// //     let year = PinkFloyd.discography.map(album => {
// //         if (album.name === name) {
// //             console.log(album.year)
// //         }
// //     })
// //     return year
// // }

// // getMembersRole("Nick Mason")
// // getYearOfAlbum("Ummagumma") 

function getMembersRole(name) {
    let role;
    PinkFloyd.members.map(person => {
        if (person.name === name) {
            role = person.role
        }
    })
    return role;
}

function getYearOfAlbum(name) {
    let year;
    PinkFloyd.discography.map(album => {
        if (album.name === name) {
            year = album.year
        }
    })
    return year;
}

console.log(getMembersRole("Nick Mason"))
console.log(getYearOfAlbum("Ummagumma")) 