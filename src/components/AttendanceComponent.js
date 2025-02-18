class AttendanceComponent {
    constructor() {
        this.attendanceList = [];
    }

    render() {
        const container = document.createElement('div');
        container.className = 'attendance-container';

        const title = document.createElement('h2');
        title.innerText = 'Student Attendance';
        container.appendChild(title);

        const table = this.createAttendanceTable();
        container.appendChild(table);

        const addButton = this.createAddButton();
        container.appendChild(addButton);

        document.body.appendChild(container);
    }

    createAttendanceTable() {
        const table = document.createElement('table');
        table.className = 'attendance-table';

        const header = table.createTHead();
        const headerRow = header.insertRow(0);
        const headers = ['Student Name', 'Date', 'Status'];
        headers.forEach((text) => {
            const cell = headerRow.insertCell();
            cell.innerText = text;
        });

        const body = table.createTBody();
        this.attendanceList.forEach((attendance) => {
            const row = body.insertRow();
            row.insertCell().innerText = attendance.studentName;
            row.insertCell().innerText = attendance.date;
            row.insertCell().innerText = attendance.status;
        });

        return table;
    }

    createAddButton() {
        const button = document.createElement('button');
        button.innerText = 'Add Attendance';
        button.onclick = () => this.addAttendance();
        return button;
    }

    addAttendance() {
        const studentName = prompt('Enter student name:');
        const date = prompt('Enter date (YYYY-MM-DD):');
        const status = prompt('Enter status (Present/Absent):');

        if (studentName && date && status) {
            this.attendanceList.push({ studentName, date, status });
            this.render(); // Re-render to update the table
        }
    }
}

export default AttendanceComponent;