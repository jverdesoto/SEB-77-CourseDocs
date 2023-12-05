// const myArr = [1, 2, 3, 4]
// console.log(myArr)

// for (let i = 0; i < myArr.length; i++) {
//     console.log(myArr[i])
// } 

// Create an object called PinkFloyd
// key called band Members => object -> keys role in band and Names
// key called dicography => array of objects include the year and the name of the album
// create function that inputs a name of band member output the role
// create function input name of album output a year

const pinkFloyd = {
    members: [
        {
            name: "Roger Waters",
            role: "Bassist"
        },
        {  
            name: "David Gilmour",
            role: "Guitar, vocals"
        },
        {
            name: "Nick Mason",
            role: "Drummer"
        }
    ],
    discography: [
        {
            name: "The piper at the Gates of Dawn",
            year: 1979
        },
        {
            name: "The Wall",
            year: 1967
        },
        {
            name: "Wish you were here",
            year: 1975
        },
    ]
}
function findYearofAlbum(name){
    for (let i = 0; i<pinkFloyd.discography.length; i++) {
        if(pinkFloyd.discography[i].name === name) {
            return pinkFloyd.discography[i].year
        }
    }
}   
function findBandMember(name){
for (let i = 0; i<pinkFloyd.members.length; i++) {
    if(pinkFloyd.members[i].name === name) {
        return pinkFloyd.members[i].role
    }
}
}
findBandMember("Nick Mason")
findYearofAlbum("The Wall")

function againFindYearofAlbum(name) {
    pinkFloyd.discography.map((album) => {
        album.name === name
    })
}


