const myArr = [1, 2, 3, 4]

//console.log(myArr)

// for ( let i = 0; i < myArr.length; i++){
//     console.log(myArr[i]);
// }

// myArr.forEach(function (element){
//     console.log(element)

// const mySinglePost = {
//     title: 'My Post Title',
//     author: 'Rick',
//     publishingDate: '2023-09-07',
//     isDraft: false,
//     content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio fuga, reiciendis dolore ducimus optio facilis, nostrum fugiat et repellendus voluptate quibusdam doloribus architecto quasi eveniet aliquid nam, aspernatur qui.',
//     featuredImage: ['https://img1.com/img.jpg', 'https://img1.com/img-xl.jpg', 'https://img1.com/img-thumb.jpg']
// }

// // console.log(mySinglePost.author);
// // console.log(mySinglePost['content']);

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

// Create an object called PinkFloyd
// key called band Members => object -> keys role in band and Names
// key called dicography => array of objects include the year and the name of the album
// create function that inputs a name of band member output the role
// create function input name of album output a year

const PinkFloyd = {
    members: [
        {
            name: 'Paul James',
            role: 'Vocals Lead 1'
        },
        {
            name: 'George Simon',
            role: 'Vocals Backup 1'
        },
        {
            name: 'Kirsty Owen',
            role: 'Base Guitar'
        },
    ],
    discography: [
        {
            name: 'Dreams can come true',
            year: '1900'
        },
        {
            name: 'I can code',
            year: '2023'
        },
        {
            name: 'You only live once',
            year: '1983'
        },
    ], 
}


findYearofAlbum: function(name) {
    const album = this.discography.find(album => album.name === name);
    return album ? album.year : 'Album not found';
}

findBandMember: function(name) {
    const member = this.members.find(member => member.name === name);
    return member ? member.role : 'Member not found';
}

console.log(PinkFloyd.findBandMember('Paul James')); 
console.log(PinkFloyd.findYearofAlbum('You only live once'));
