import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function FlightBook() {

  
  let[data,setData] = useState([])
  const[alldata,setAllData] = useState([])
  
  
  const[departure,setDeparture] = useState("")
  const[arrival ,setArrival] = useState("")
  const[dDate,setDDate] = useState("")
  const[aDate,setADate] = useState("")
  const[cClass,setCClass] = useState("")



  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the query parameters
    const queryParams = new URLSearchParams();
    if (departure) queryParams.append('departure', departure);
    if (arrival) queryParams.append('arrival', arrival);
    if (dDate) queryParams.append('dDate', dDate);
    if (aDate) queryParams.append('aDate', aDate);
    if (cClass) queryParams.append('cClass', cClass);

    // Send the GET request to the API URL
    fetch(`http://localhost:5000/flights/searchflights?${queryParams.toString()}`)
      .then(response => response.json())
      .then(data => {
        setData(data)
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error fetching flights:', error);
      });
  };

  const navigate = useNavigate();
  const price = 'yourData';

  // const navigateToDestination = () => {
  //   navigate(`/cart/${price}`);
  // };


  const [priceFilter, setPriceFilter] = useState('');

  const handlePriceFilterChange = (e) => {
    setPriceFilter(e.target.value);
    if (priceFilter === 'lowToHigh') {
      console.log("loq")
      data = data.sort((a, b) => a.price - b.price);
    } else if (priceFilter === 'highToLow') {
      console.log("high")
      data = data.sort((a, b) => b.price - a.price);
    }

  };


  


  return (
    <div className='container' style={{ background: '#f8f9fa' }}>
    <form onSubmit={handleSubmit}>
<div class="row">
  <div class="col">
  <label for="validationServer01">Departure Destination</label>
  <select id="inputState" class="form-control" onChange={(e)=>{
    setDeparture(e.target.value);
  }}>
<option selected > Choose </option>
<option  > Sri Lanka </option>
<option  > India </option>
<option  > Australia </option>
    </select>
  </div>
  <div class="col">
  <label for="validationServer01">Arrival Destination</label>
  <select id="inputState" class="form-control" onChange={(e)=>{
    setArrival(e.target.value);
  }}>
<option selected > Choose </option>    
<option  > Sri Lanka </option>
<option  > India </option>
<option  > Australia </option>
    </select>
  </div >
  <div class="col">
  <label for="validationServer01">Departure Date</label>
  <input type='date' class="form-control" onChange={(e)=>{
    setDDate(e.target.value);
  }} ></input>
  </div>
  <div class="col">
  <label for="validationServer01">Arrival Date</label>
  <input type='date' class="form-control" onChange={(e)=>{
    setADate(e.target.value);
  }}></input>
  </div>
  <div class="col">
  <label for="validationServer01">Cabin Class</label>
  <select id="inputState" class="form-control"onChange={(e)=>{
    setCClass(e.target.value);
  }}>
      <option>First Class</option>
      <option>Business</option>
      <option>Economy</option>
    </select>
  </div>
  <div class="col">
      <br/>
  <button class="btn btn-primary" type="submit">Search</button>
  </div>

</div>
</form >



<div className="container mt-4">
      <h6>Filter Tickets</h6>

      <div className="row mt-3">
        <div className="col-md-2">
          <label htmlFor="priceFilter" className="form-label">Price</label>
          <select
            className="form-select"
            id="priceFilter"
            value={priceFilter}
            onChange={handlePriceFilterChange}
          >
        
            <option value="lowToHigh">High to Low</option>
            <option value="highToLow">Low to High</option>
          </select>
        </div>


      </div>

      {/* Display filtered tickets */}
      {/* ... */}
    </div>




<table class="table table-striped">
  <thead>
  </thead>
  <tbody>
 {
 data.map((flight,index)=>{
return<tr key={index}>
<td>
<div class="card border-0 shadow-lg">
  <div class="card-header bg-primary text-white">
    <h5 class="fw-bold mb-0">{flight.airline}</h5>
  </div>
  <div class="card-body">
    <h6 class="card-title fw-bold mb-3">{flight.cabin_class}</h6>
    <div class="row">
      <div class="col-sm-6">
        <p class="mb-1">Departure</p>
        <h6 class="card-subtitle mb-2 text-muted">{flight.departure_destination}</h6>
        <p class="mb-1">Departure Date</p>
        <p class="mb-0">{flight.departure_date}</p>
      </div>
      <div class="col-sm-6">
        <p class="mb-1">Arrival</p>
        <h6 class="card-subtitle mb-2 text-muted">{flight.arrival_destination}</h6>
        <p class="mb-1">Arrival Date</p>
        <p class="mb-0">{flight.arrival_date}</p>
      </div>
    </div>
    <hr/>
    <div class="row">
      <div class="col-sm-6">
        <p class="mb-1">Price</p>
        <h6 class="card-subtitle mb-2 text-muted">{flight.price}</h6>
      </div>
      <div class="col-sm-6">
        <button onClick={ () => {

    navigate(`/cart/${flight.price}`);
  }} class="btn btn-primary w-100">Book Now</button>
       
      </div>
    </div>
  </div>
</div>

</td>

</tr>

 })

}
  </tbody>
</table>

  </div>
  )
}
