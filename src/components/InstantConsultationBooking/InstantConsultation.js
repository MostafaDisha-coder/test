import React, { useEffect, useState } from 'react';
import './InstantConsultation.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import FindDoctorSearchIC from './FindDoctorSearchIC/FindDoctorSearchIC';
import DoctorCardIC from './DoctorCardIC/DoctorCardIC';
import { API_URL } from '../Server_Setup/config';  // Import the API_URL

const InstantConsultation = () => {
    const [searchParams] = useSearchParams();
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    
    const getDoctorsDetails = () => {
        fetch(`${API_URL}/doctors`)  // Use the dynamic API_URL
            .then(res => res.json())
            .then(data => {
                if (searchParams.get('speciality')) {
                    const filtered = data.filter(doctor => 
                        doctor.speciality.toLowerCase() === searchParams.get('speciality').toLowerCase()
                    );
                    setFilteredDoctors(filtered);
                    setIsSearched(true);
                } else {
                    setFilteredDoctors([]);
                    setIsSearched(false);
                }
                setDoctors(data);
            })
            .catch(err => console.error('Error fetching doctors:', err));  // Improved error handling
    };

    const handleSearch = (searchText) => {
        if (searchText === '') {
            setFilteredDoctors([]);
            setIsSearched(false);
        } else {
            const filtered = doctors.filter(doctor =>
                doctor.speciality.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredDoctors(filtered);
            setIsSearched(true);
        }
    };

    const navigate = useNavigate();
    useEffect(() => {
        getDoctorsDetails();
    }, [searchParams]);

    return (
        <div className="center">
            <div className="searchpage-container">
                <FindDoctorSearchIC onSearch={handleSearch} />
                <div className="search-results-container">
                    {isSearched ? (
                        <div className="center">
                            <h2>{filteredDoctors.length} doctors are available {searchParams.get('location')}</h2>
                            <h3>Book appointments with minimum wait-time & verified doctor details</h3>
                            {filteredDoctors.length > 0 ? (
                                filteredDoctors.map(doctor => (
                                    <DoctorCardIC className="doctorcard" {...doctor} key={doctor.name} />
                                ))
                            ) : (
                                <p>No doctors found.</p>
                            )}
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    );
};

export default InstantConsultation;