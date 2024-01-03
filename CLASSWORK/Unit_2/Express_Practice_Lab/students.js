const students = [
    {student: 'Bob', attending: true},
    {student: 'Alice', attending: false},
    {student: 'Michael', attending: true},
    {student: 'Sharon', attending: false}
];

module.exports = {
    getAll: function() {
        return students;
    }
}