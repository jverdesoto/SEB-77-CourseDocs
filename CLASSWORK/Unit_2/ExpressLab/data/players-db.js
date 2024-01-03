const players = [
    {name: 'Meslier', pos: 'GK', apps: '24', goals: '0'},
    {name: 'Struijk', pos: 'CB', apps: '25', goals: '5'},
    {name: 'Rodon', pos: 'CB', apps: '23', goals: '0'},
    {name: 'Byram', pos: 'LB', apps: '21', goals: '1'},
    {name: 'Ayling', pos: 'RB', apps: '15', goals: '1'},
    {name: 'Ampadu', pos: 'CDM', apps: '28', goals: '0'},
    {name: 'Gray', pos: 'CM', apps: '26', goals: '0'},
    {name: 'James', pos: 'LW', apps: '25', goals: '8'},
    {name: 'Summerville', pos: 'RW', apps: '24', goals: '12'},
    {name: 'Rutter', pos: 'CF', apps: '26', goals: '4'},
    {name: 'Piroe', pos: 'CF', apps: '23', goals: '9'},
]

module.exports = {
    getAll: function() {
        return players
    }
}