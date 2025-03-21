import React, { useState } from 'react';
import BookingForm from './components/BookingForm';
import UserDashboard from './components/UserDashboard';
import AccommodationRecommendations from './components/AccommodationRecommendations';

const App = () => {
    const [bookings, setBookings] = useState([]);
    const [selectedDestination, setSelectedDestination] = useState('');

    const handleBooking = (booking) => {
        setBookings([...bookings, booking]);
        setSelectedDestination(booking.destination);
    };

    return (
        <div className="app">
            <header>
                <h1>Dubai to the Stars</h1>
            </header>
            <BookingForm onBooking={handleBooking} />
            {selectedDestination && (
                <AccommodationRecommendations destination={selectedDestination} />
            )}
            <User Dashboard bookings={bookings} />
        </div>
    );
};

export default App;