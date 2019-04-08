let grades = [{id: 1, name: 'John Smith', course: 'CS572', grade: 95}]

class Grade {
    static find(id) {
        const grade = grades.find(grade => grade.id === parseInt(id));
        return grade ? grade : {};
    }

    static all() {
        return grades;
    }

    static create(grade) {
        grade.id = grades.length + 1;
        grades.push(grade);
        return grade;
    }

    static delete(id) {
        grades = grades.filter(grade => grade.id !== parseInt(id));
    }
}

module.exports = Grade;