// Create an object called PinkFloyd
// key called band Members => object -> keys role in band and Names
// key called dicography => array of objects include the year and the name of the album
// create function that inputs a name of band member output the role
// create function input name of album output a year

const pinkFloyd = {
    members: [ 
        {
            name: 'Luke',
            role: 'singer',
        },
        {   
            name: 'Nathan',
            role: 'Guitar',
        },
        {
            name: 'Steve',
            role: 'Drums',
        }
    ],
    discography: [
        {
            name: 'Album1',
            year: 2023,
        },
        {
            name: 'Album2',
            year: 2020,
        }
    ]
}

function findRoleOfBandMember(memberName) {
    let role 
    pinkFloyd.members.forEach(member => {
        if (member.name === memberName) {
            role = member.role;
        }
    });
    return role;
}

function findYearOfAlbum(albumName) {
    let year 
    pinkFloyd.discography.forEach(album => {
        if (album.name === albumName) {
            year = album.year;
        }
    });
    return year;
}

console.log(findRoleOfBandMember('Nathan'));
console.log(findYearOfAlbum('Album2'));

