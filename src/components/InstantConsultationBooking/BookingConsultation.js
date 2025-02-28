import React, { useState } from 'react';
import DoctorCard from './DoctorCard'; // Adjust the path as needed
import FindDoctorSearch from './FindDoctorSearch'; // Adjust the path as needed

const BookingConsultation = () => {
    const [selectedSpecialty, setSelectedSpecialty] = useState('');
    const [doctors, setDoctors] = useState([]);
    const [bookedAppointments, setBookedAppointments] = useState([]);

    // Mock data for doctors (replace with actual API call)
    const mockDoctors = [
        { id: 1, name: 'Dr. John Doe', specialty: 'Dentist', rating: 4.5 },
        { id: 2, name: 'Dr. Jane Smith', specialty: 'Gynecologist', rating: 4.8 },
        { id: 3, name: 'Dr. Alice Johnson', specialty: 'Dermatologist', rating: 4.7 },
    ];

    // Handle specialty selection from FindDoctorSearch
    const handleSpecialtySelect = (specialty) => {
        setSelectedSpecialty(specialty);
        // Filter doctors based on the selected specialty (replace with actual API call)
        const filteredDoctors = mockDoctors.filter(doctor => doctor.specialty === specialty);
        setDoctors(filteredDoctors);
    };

    // Handle booking an appointment
    const handleBookAppointment = (doctorId) => {
        const doctor = mockDoctors.find(doctor => doctor.id === doctorId);
        if (doctor) {
            setBookedAppointments([...bookedAppointments, doctor]);
            alert(`Appointment booked with ${doctor.name}`);
        }
    };

    // Handle canceling an appointment
    const handleCancelAppointment = (doctorId) => {
        const updatedAppointments = bookedAppointments.filter(doctor => doctor.id !== doctorId);
        setBookedAppointments(updatedAppointments);
        alert(`Appointment canceled`);
    };

    return (
        <div className="booking-consultation">
            <h1>Book a Consultation</h1>

            {/* Integrate FindDoctorSearch component */}
            <FindDoctorSearch onSpecialtySelect={handleSpecialtySelect} />

            {/* Display filtered doctors using DoctorCard component */}
            <div className="doctor-list">
                {doctors.length > 0 ? (
                    doctors.map(doctor => (
                        <DoctorCard
                            key={doctor.id}
                            id={doctor.id}
                            name={doctor.name}
                            specialty={doctor.specialty}
                            rating={doctor.rating}
                            onBookAppointment={handleBookAppointment}
                            onCancelAppointment={handleCancelAppointment}
                            isBooked={bookedAppointments.some(appointment => appointment.id === doctor.id)}
                        />
                    ))
                ) : (
                    <p>No doctors found for the selected specialty.</p>
                )}
            </div>

            {/* Display booked appointments */}
            <div className="booked-appointments">
                <h2>Your Appointments</h2>
                {bookedAppointments.length > 0 ? (
                    bookedAppointments.map(doctor => (
                        <div key={doctor.id} className="booked-doctor">
                            <p>{doctor.name} - {doctor.specialty}</p>
                            <button onClick={() => handleCancelAppointment(doctor.id)}>Cancel Appointment</button>
                        </div>
                    ))
                ) : (
                    <p>No appointments booked yet.</p>
                )}
            </div>
        </div>
    );
};

export default BookingConsultation;