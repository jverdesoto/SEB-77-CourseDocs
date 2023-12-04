const myArr = [1, 2, 3, 4];

console.log(myArr);

for (i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
}

myArr.forEach((element) => {
    console.log(element)
});

// with this method (forEach) we don't need to call the Array in the console.log, the 'element' is already
// each of the items inside of the Array

// the arrow => is another way of writing a function, instead of writing function(element) {}, like this:
myArr.forEach(function (element) {
    console.log(element)
});

// if the arrow function only has one parameter, you can forgo the (), in this case it would be myArr.forEach(element), like this:

myArr.forEach(element => {
    console.log(element)
});

//there's another way of iterating through an array, with the map function:

myArr.map(element => {
    console.log(element)
})

// The map() method returns a new array, whereas the forEach() method does not return a new array. 
// The map() method is used to transform the elements of an array, whereas the forEach() method is used to loop through the elements of an array.

const mySinglePost = {
    title: 'My Post Title',
    author: 'Rick',
    publishingDate: '2023-09-07',
    isDraft: false,
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime distinctio fuga, reiciendis dolore ducimus optio facilis, nostrum fugiat et repellendus voluptate quibusdam doloribus architecto quasi eveniet aliquid nam, aspernatur qui.',
    featuredImage: ['https://img1.com/img.jpg', 'https://img1.com/img-xl.jpg', 'https://img1.com/img-thumb.jpg']
}

console.log(mySinglePost.author);
console.log(mySinglePost['content']); //we usually only use the square bracket notation if the key has any '-' or '_' or other symbols

//--------------------------------------------------------------------------------------------------------------------------

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

allPosts.map(post => {
    console.log(post.title);
})

// this yould iterate thourgh the allPosts array, and for each object (for each post) output their title key

//--------------------------------------------------------------------------------------------------------------------------

// Create an object called PinkFloyd
// key called band Members => object -> keys role in band and Names
// key called dicography => array of objects include the year and the name of the album



const pinkFloyd = {
    members: [
        {
            name: 'Nick Mason',
            role: 'Drums, Percussion, Tape Effects, Occasional Vocals'
        },

        {
            name: 'Roger Waters',
            role: 'Lead and Backing Vocals, Bass, Tape Effects, Occasional Guitar, Percussion and Synthesizers'
        },

        {
            name: 'Richard Wright',
            role: 'Backing and Lead Vocals, Keyboards, Synthesizers'
        },

        {
            name: 'Syd Barrett',
            role: 'Lead and Backing Vocals, Guitar'
        },

        {
            name: 'David Gilmour',
            role: 'Lead and Backing Vocals, Guitar, Occasional Bass, Keyboards, Synthesizers and Drums'
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
            name: 'Soundtrack From the Film More',
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
            name: 'Wish You Where Here',
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


// create function that inputs a name of band member output the role
function getTheMemberRole (name) { 
    const members = pinkFloyd.members
    let role

    members.map(element => {
        if (element.name === name) {
            role = element.role;
        }
    })

    return role;
}


// create function input name of album output a year
function getYearOfAlbum (name) {
    const albums = pinkFloyd.discography
    let year

    albums.map(element => {
        if (element.name === name) {
            year = element.year;
        }
    })

    return year

}

console.log(getTheMemberRole('David Gilmour'));

console.log(getTheMemberRole('Nick Mason'))

console.log(getTheMemberRole('Roger Waters'));

console.log(getYearOfAlbum('The Piper at the Gates of Dawn'));

