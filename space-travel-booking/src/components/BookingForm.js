import React, { useState } from 'react';

const BookingForm = ({ onBooking }) => {
    const [departureDate, setDepartureDate] = useState('');
    const [destination, setDestination] = useState('space station');
    const [seatClass, setSeatClass] = useState('economy');
    const [price, setPrice] = useState(1000);

    const handleSeatClassChange = (e) => {
        const selectedClass = e.target.value;
        setSeatClass(selectedClass);
        setPrice(selectedClass === 'luxury' ? 5000 : selectedClass === 'VIP' ? 3000 : 1000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const booking = { departureDate, destination, seatClass, price };
        onBooking(booking);
        setDepartureDate('');
    };

    return (
        <form onSubmit={handleSubmit} className="booking-form">
            <label>
                Departure Date:
                <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} required />
            </label>
            <label>
                Destination:
                <select value={destination} onChange={(e) => setDestination(e.target.value)}>
                    <option value="space station">Space Station</option>
                    <option value="lunar hotel">Lunar Hotel</option>
                </select>
            </label>
            <label>
                Seat Class:
                <select value={seatClass} onChange={handleSeatClassChange}>
                    <option value="economy">Economy</option>
                    <option value="VIP">VIP</option>
                    <option value="luxury">Luxury</option>
                </select>
            </label>
            <p>Price: ${price}</p>
            <button type="submit">Book Now</button>
        </form>
    );
};

export default BookingForm;