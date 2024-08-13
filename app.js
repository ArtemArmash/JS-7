const classrooms = [
    { name: 'Room A', capacity: 15, faculty: 'Engineering' },
    { name: 'Room B', capacity: 20, faculty: 'Mathematics' },
    { name: 'Room C', capacity: 12, faculty: 'Physics' },
    { name: 'Room D', capacity: 10, faculty: 'Chemistry' },
    { name: 'Room E', capacity: 18, faculty: 'Engineering' }
];

function AllClassrooms(classrooms) {
    classrooms.forEach(classroom => {
        console.log(`Classroom: ${classroom.name}, Capacity: ${classroom.capacity}, Faculty: ${classroom.faculty}`);
    });
}

function ClassroomsByFaculty(classrooms, faculty) {
    const filteredClassrooms = classrooms.filter(classroom => classroom.faculty === faculty);
    filteredClassrooms.forEach(classroom => {
        console.log(`Classroom: ${classroom.name}, Capacity: ${classroom.capacity}, Faculty: ${classroom.faculty}`);
    });
}

function ClassroomsForGroup(classrooms, group) {
    const suitableClassrooms = classrooms.filter(classroom =>
        classroom.faculty === group.faculty && classroom.capacity >= group.students
    );
    suitableClassrooms.forEach(classroom => {
        console.log(`Classroom: ${classroom.name}, Capacity: ${classroom.capacity}, Faculty: ${classroom.faculty}`);
    });
}

function ClassroomsByCapacity(classrooms) {
    return classrooms.slice().sort((a, b) => a.capacity - b.capacity);
}
function ClassroomsByName(classrooms) {
    return classrooms.slice().sort((a, b) => a.name.localeCompare(b.name));
}

const group = { name: 'Group 1', students: 14, faculty: 'Engineering' };

console.log('All Classrooms:');
AllClassrooms(classrooms);

console.log('\nClassrooms for Engineering Faculty:');
ClassroomsByFaculty(classrooms, 'Engineering');

console.log('\nClassrooms suitable for Group 1:');
ClassroomsForGroup(classrooms, group);

console.log('\nClassrooms sorted by Capacity:');
console.log(ClassroomsByCapacity(classrooms));

console.log('\nClassrooms sorted by Name:');
console.log(ClassroomsByName(classrooms));
