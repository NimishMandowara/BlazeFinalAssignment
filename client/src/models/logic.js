class Logic {
    constructor()   {
        this.students = [
            {StudentId: 101, StudentName: 'Mahesh', University: 'Pune', Course: 'IT', Fees: 10000},
            {StudentId: 102, StudentName: 'Tejas', University: 'Amravati', Course: 'MECH', Fees: 6000},
            {StudentId: 103, StudentName: 'Akash', University: 'Kolhapur', Course: 'CIVIL', Fees: 8000},
            {StudentId: 104, StudentName: 'Atul', University: 'Kolhapur', Course: 'CIVIL', Fees: 8000},
            {StudentId: 105, StudentName: 'Amit', University: 'Mumbai', Course: 'IT', Fees: 8200},
            {StudentId: 106, StudentName: 'Zen', University: 'Mumbai', Course: 'CSE', Fees: 8700}
        ];
    }

    getStudents()   {
        return this.students;
    }
}

export default Logic;