// const myArr = [1,2,3,4,5];

// console.log(myArr);
//  for (let x = 0; x<myArr.length; x++){
//     console.log(myArr[x]);
//  }

//  myArr.forEach(function (element){
//     console.log(element);
//  });
//  // is the same as

//  myArr.forEach(element => {
//     console.log(element);
//  })

//  // for more than one

//  myArr.map((element,idx) => {
//     console.log(`${idx}: ${element}`);
//  });

//  const mySinglePost = {
//     title: 'My Post Title',
//     author: 'Rick',
//     publishingDate: '2023-09-07',
//     isDraft: false,
//     content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio fuga, reiciendis dolore ducimus optio facilis, nostrum fugiat et repellendus voluptate quibusdam doloribus architecto quasi eveniet aliquid nam, aspernatur qui.',
//     featuredImage: ['https://img1.com/img.jpg', 'https://img1.com/img-xl.jpg', 'https://img1.com/img-thumb.jpg']
// }

// // how to get a the second element of an array in an object
// let x = mySinglePost["featuredImage"];


// console.log(x[1]);

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
//     console.log(post.title);
// });

const pinkFloyd = {
    bandMembers: [{
        name: "David Gilmour",
        role: "Lead rhythm guitar, bass, vocals",
    },
    {
        name: "Syd Barrett",
        role: "Lead rhythm guitar, vocals",
    },
    {
        name: "Nick Mason",
        role: "Drums, percussions, vocals",
    },
    {
        name: "Roger Waters",
        role: "Bass, rhythm guitar, synthesizers, vocals",
    },
    {
        name: "Richard Wright",
        role: "Keyboard, piano, vocals",
    }
],
     discography: [{
        name: "The Piper at the Gates of Dawn",
        year: 1967,
    },
    {
        name: "A Saucerful of Secrets",
        year: 1968,
    },
    {
        name: "Soundtrack From The Film More",
        year: 1969,
    },
    {
        name: "Ummagumma",
        year: 1969,
    },
    {
        name: "Atom Heart Mother",
        year: 1970,
    },
    {
        name: "Meddle",
        year: 1971,
    },

],

}

function findYearOfAlbum(name){
    let year; 
    pinkFloyd.discography.map(album => {
       
        if (name === album.name){
            year = album.year;
        }
    });
    return year;
}

function findBandMember(name){
    let role;
    pinkFloyd.bandMembers.map(member=>{
        if (name === member.name){
            role = member.role;
        }
    })
    return role;
}
console.log(findYearOfAlbum("Atom Heart Mother"));
console.log(findBandMember("Syd Barrett"));