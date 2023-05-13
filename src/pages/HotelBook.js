import React, {useEffect,useState} from 'react'
import axios from 'axios'

export default function HotelBook() {
  let[data,setData] = useState([])
  const[alldata,setAllData] = useState([])
  
  
  const[destination,setDestination] = useState("")
  const[checkingDate,setchekingDate] = useState("")
  const[checkoutDate,setcheckoutDate] = useState("")
  const[starRating,setStarRating] = useState("")


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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the query parameters
    const queryParams = new URLSearchParams();
    if (destination) queryParams.append('destination', destination);
    if (checkingDate) queryParams.append('checkingDate', checkingDate);
    if (checkoutDate) queryParams.append('checkoutDate', checkoutDate);
    if (starRating) queryParams.append('starRating', starRating);
   
    // Send the GET request to the API URL
    fetch(`http://localhost:5000/hotels/searchhotels?${queryParams.toString()}`)
      .then(response => response.json())
      .then(data => {
        setData(data)
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error fetching hotels:', error);
      });
  };


  return (
    <div className='container' style={{ background: '#f8f9fa' }}>
      <form onSubmit={handleSubmit}>
<div class="row">
  <div class="col">
  <label for="validationServer01">Destination</label>
  <select id="inputState" class="form-control" onChange={(e)=>{
    setDestination(e.target.value);
  }}>
<option selected > Choose </option>
<option  > Kandy </option>
<option  > India </option>
<option  > Australia </option>
    </select>
  </div>

  <div class="col">
  <label for="validationServer01">checking Date</label>
  <input type='date' class="form-control" onChange={(e)=>{
    setchekingDate(e.target.value);
  }} ></input>
  </div>
  <div class="col">
  <label for="validationServer01">checkout Date</label>
  <input type='date' class="form-control" onChange={(e)=>{
    setcheckoutDate(e.target.value);
  }}></input>
  </div>
  <div class="col">
  <label for="validationServer01">Star Rating</label>
  <select id="inputState" class="form-control"onChange={(e)=>{
    setStarRating(e.target.value);
  }}>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="col">
      <br/>
  <button class="btn btn-primary" type="submit">Search</button>
  </div>

</div>
</form >








<div className="container mt-4">
      <h6>Filter Hotels</h6>

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
 data.map((hotel,index)=>{
return<tr key={index}>
<td>
<div class="card border-0 shadow-lg">
  <div class="card-header bg-primary text-white">
    <h5 class="fw-bold mb-0">{hotel.hotel_name}</h5>
  </div>
  <div class="card-body">
    
    <div class="row">
      <div class="col-sm-6">
        <p class="mb-1">Destination</p>
        <h6 class="card-subtitle mb-2 text-muted">{hotel.destination}</h6>
        <p class="mb-1">Check In Date</p>
        <p class="mb-0">{hotel.checkInDate}</p>
      </div>
      <div class="col-sm-6">
        <p class="mb-1">Check out date</p>
        <h6 class="card-subtitle mb-2 text-muted">{hotel.checkOutDate}</h6>
      </div>
    </div>
    <hr/>
    <div class="row">
      <div class="col-sm-6">
        <p class="mb-1">Price</p>
        <h6 class="card-subtitle mb-2 text-muted">{hotel.price}</h6>
      </div>
      <div class="col-sm-6">
        <button class="btn btn-primary w-100">Book Now</button>
       
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
