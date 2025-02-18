const AttendanceService = require('./services/AttendanceService');
const AttendanceComponent = require('./components/AttendanceComponent');

document.addEventListener('DOMContentLoaded', () => {
    const attendanceService = new AttendanceService();
    const attendanceComponent = new AttendanceComponent(attendanceService);

    attendanceComponent.render();
});