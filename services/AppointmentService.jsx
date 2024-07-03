
export class AppointmentService {
    constructor(initialAppointments) {
        this.appointments = initialAppointments;
    }

    createAppointment(appointment) {
        debugger
        this.appointments.push(appointment);
        return this.appointments;
    }

    updateAppointment(updatedAppointment) {
        const index = this.appointments.findIndex(a => a.id === updatedAppointment.id);
        if (index !== -1) {
            this.appointments[index] = { ...this.appointments[index], ...updatedAppointment };
        }
        return this.appointments;
    }

    deleteAppointment(id) {
        this.appointments = this.appointments.filter(a => a.id !== id);
        return this.appointments;
    }

    getAppointments() {
        return [...this.appointments];
    }
}
