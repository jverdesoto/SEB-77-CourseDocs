// // const myArr = [1,2,3,4]

// // console.log(myArr)


// // for (let i=0; i<myArr.length; i++) {
// //     console.log(myArr[i])
// // }

// // myArr.forEach(element => {
// //     console.log(element)
// // })

// // myArr.map(element => {
// //     console.log(element)
// // })

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

// console.log(allPosts[1].isDraft)

// allPosts.map(post =>{
//     console.log(post.title)
// })


// Create an object called PinkFloyd
// key called band Members => object -> keys role in band and Names
// key called dicography => array of objects include the year and the name of the album
// create function that inputs a name of band member output the role
// create function input name of album output a year


const pinkFloyd = {
    members: [
        {
            name: 'David Gilmour',
            role: 'Lead rythm guitar, vocals'
        },
        {
            name: 'Mark Green',
            role: 'Drummer'
        },
        {
            name: 'Barry Brown',
            role: 'Base guitarist'
        }
    ],
    discography: [
        {
            name: 'The Piper at the Gates of Dawn',
            year: 1967
        },
        {
            name: 'The Great Album',
            year: 1981
        },
        {
            name: 'The Next Best Album',
            year: 1988
        }
    ]
}


function findBandMember(name) {
    let role
    pinkFloyd.members.map(member => {
        if(name === member.name)
        role = member.role
    })
    return role
}

console.log(findBandMember('Barry Brown'))



function findYearOfAlbum(name){
    let year
    pinkFloyd.discography.map((album) => {
        if(name === album.name)
            year = album.year
    })
    return year
}

console.log(findYearOfAlbum('The Piper at the Gates of Dawn'));