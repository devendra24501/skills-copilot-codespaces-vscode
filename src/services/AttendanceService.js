class AttendanceService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    async fetchAttendanceRecords() {
        try {
            const response = await fetch(`${this.apiUrl}/attendance`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching attendance records:', error);
            throw error;
        }
    }

    async addAttendanceRecord(record) {
        try {
            const response = await fetch(`${this.apiUrl}/attendance`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(record),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error adding attendance record:', error);
            throw error;
        }
    }

    async updateAttendanceRecord(id, updatedRecord) {
        try {
            const response = await fetch(`${this.apiUrl}/attendance/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedRecord),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('Error updating attendance record:', error);
            throw error;
        }
    }
}

export default AttendanceService;