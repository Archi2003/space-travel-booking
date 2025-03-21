import React from 'react';

const UserDashboard = ({ bookings }) => {
    return (
        <div className="user-dashboard">
            <h2>Your Bookings</h2>
            {bookings.length === 0 ? (
                <p>No bookings yet.</p>
            ) : (
                bookings.map((booking, index) => (
                    <div key={index} className="booking-item">
                        <p><strong>Destination:</strong> {booking.destination}</p>
                        <p><strong>Seat Class:</strong> {booking.seatClass}</p>
                        <p><strong>Departure Date:</strong> {booking.departureDate}</p>
                        <p><strong>Price:</strong> ${booking.price}</p>
                        <p><strong>Countdown:</strong> {Math.max(0, new Date(booking.departureDate) - new Date()) / 1000} seconds</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default UserDashboard;