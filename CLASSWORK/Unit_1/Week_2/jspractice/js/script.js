// const myArr = [1,2,3,4]

// console.log(myArr)

// for (let i = 0; i < myArr.length; i++) {
//     console.log(myArr[i])
// }

// myArr.forEach(element => <element{

// })

const mySinglePost = {
    title: 'My Post Title',
    author: 'Rick',
    publishingDate: '2023-09-07',
    isDraft: false,
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio fuga, reiciendis dolore ducimus optio facilis, nostrum fugiat et repellendus voluptate quibusdam doloribus architecto quasi eveniet aliquid nam, aspernatur qui.',
    featuredImage: ['https://img1.com/img.jpg', 'https://img1.com/img-xl.jpg', 'https://img1.com/img-thumb.jpg']
}

// console.log(mySinglePost.author);
// console.log(mySinglePost["content"]);

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

console.log(allPosts[1].isDraft);

allPosts.map(post => {
    console.log(post.title)
})

// Create an object called PinkFloyd
// key called band Members => object -> keys role in band and Names
// key called dicography => array of objects include the year and the name of the album
// create function that inputs a name of band member output the role
// create function input name of album output a year

const PinkFloyd = {
    // Key called bandMembers => object -> keys role in band and Names
    bandMembers: {
      "David Gilmour": "Guitarist and Vocalist",
      "Roger Waters": "Bassist and Vocalist",
      "Richard Wright": "Keyboardist",
      "Nick Mason": "Drummer"
      },

    discography: [
        { year: 1967, album: "The Piper at the Gates of Dawn" },
        { year: 1968, album: "A Saucerful of Secrets" },
        { year: 1969, album: "More" },
      ],
    
      getRole: function (memberName) {
        return this.bandMembers[memberName] || "Not a band member";
      },
    
      getYear: function (albumName) {
        const foundAlbum = this.discography.find(album => album.album === albumName);
        return foundAlbum ? foundAlbum.year : "Album not found";
      }
    };
    
    console.log(PinkFloyd.getRole("David Gilmour"));
    console.log(PinkFloyd.getYear("A Saucerful of Secrets"));

    
