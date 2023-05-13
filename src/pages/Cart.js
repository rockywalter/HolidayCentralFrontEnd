import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Cart() {
  const [passengerName, setPassengerName] = useState('');
  const [nicNumber, setNicNumber] = useState('');
  const [mealPreference, setMealPreference] = useState('');
  const [seatType, setSeatType] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Perform desired action with form data
    console.log('Passenger Name:', passengerName);
    console.log('NIC Number:', nicNumber);
    console.log('Meal Preference:', mealPreference);
    console.log('Seat Type:', seatType);

    // Reset the form fields
    setPassengerName('');
    setNicNumber('');
    setMealPreference('');
    setSeatType('');
  };

  const { price } = useParams();


  return (
    <div className="container mt-4" style={{ background: '#f8f9fa' }}>
      <h2 className="text-center mb-4">Flight Details</h2>

      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Flight Name: ABC123</h5>
          <p className="card-text">Departure: New York</p>
          <p className="card-text">Arrival: London</p>
          <p className="card-text">Price:{ price }</p>
        </div>
      </div>

      <form onSubmit={handleFormSubmit} className="mb-4">
        <div className="mb-3">
          <label htmlFor="passengerName" className="form-label">Passenger Name</label>
          <input
            type="text"
            className="form-control"
            id="passengerName"
            value={passengerName}
            onChange={(e) => setPassengerName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="nicNumber" className="form-label">NIC Number</label>
          <input
            type="text"
            className="form-control"
            id="nicNumber"
            value={nicNumber}
            onChange={(e) => setNicNumber(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="mealPreference" className="form-label">Meal Preference</label>
          <select
            className="form-select"
            id="mealPreference"
            value={mealPreference}
            onChange={(e) => setMealPreference(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="seatType" className="form-label">Seat Type</label>
          <select
            className="form-select"
            id="seatType"
            value={seatType}
            onChange={(e) => setSeatType(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Window">Window</option>
            <option value="Aisle">Aisle</option>
            <option value="Middle">Middle</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">Book</button>
      </form>
    </div>
  )
}
