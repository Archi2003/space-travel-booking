import React from 'react';

const AccommodationRecommendations = ({ destination }) => {
    const recommendations = {
        'space station': ['Orbital Hotel', 'Zero Gravity Inn'],
        'lunar hotel': ['Lunar Base Alpha', 'Moonlight Suites'],
    };

    return (
        <div className="accommodation-recommendations">
            <h3>Recommended Accommodations for {destination}</h3>
            <ul>
                {recommendations[destination]?.map((hotel) => (
                    <li key={hotel}>{hotel}</li>
                ))}
            </ul>
        </div>
    );
};

export default AccommodationRecommendations;