import React, {useEffect,useState} from 'react'
import axios from 'axios'

export default function PackageBook() {

    let[data,setData] = useState([])
    const[alldata,setAllData] = useState([])

    const[numberOfTravelers,setNumbeOfTravellers] = useState("")
  const[destination,setDestination] = useState("")
  const[numberOfDays,setNumberOfDays] = useState("")
  const[specialty,setSpecialty] = useState("")

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
    if (numberOfTravelers) queryParams.append('numberOfTravelers', numberOfTravelers);
    if (destination) queryParams.append('destination', destination);
    if (numberOfDays) queryParams.append('numberOfDays', numberOfDays);
    if (specialty) queryParams.append('specialty', specialty);
   
    // Send the GET request to the API URL
    fetch(`http://localhost:5000/packages/searchpackages?${queryParams.toString()}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data)
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error('Error fetching packages:', error);
      });
  };

 

  return (
    <div className='container' style={{ background: '#f8f9fa' }}>
            <form onSubmit={handleSubmit}>
<div class="row">
  <div class="col">
  <label for="validationServer01">Package Country</label>
  <select id="inputState" class="form-control" onChange={(e)=>{
    setDestination(e.target.value);
  }}>
<option selected > Choose </option>
<option  > Japan </option>
<option  > India </option>
<option  > Australia </option>
<option  > USA </option>
    </select>
  </div>

  <div class="col">
  <label for="validationServer01">Number Of Travellers</label>
  <select id="inputState" class="form-control" onChange={(e)=>{
    setNumbeOfTravellers(e.target.value);
  }}>
<option selected > Choose </option>
<option  > 1 </option>
<option  > 2 </option>
<option  > 3 </option>
<option  > 4 </option>
<option  > 5 </option>
<option  > 6 </option>
<option  > 7 </option>
<option  > 8 </option>
<option  > 9 </option>
<option  > 10 </option>
    </select>

  </div>
  <div class="col">
  <label for="validationServer01">Number Of Days Staying</label>
  <select id="inputState" class="form-control" onChange={(e)=>{
    setNumberOfDays(e.target.value);
  }}>
<option selected > Choose </option>
<option  > 1 </option>
<option  > 2 </option>
<option  > 3 </option>
<option  > 4 </option>
<option  > 5 </option>
<option  > 6 </option>
<option  > 7 </option>
<option  > 8 </option>
<option  > 9 </option>
<option  > 10 </option>
    </select>

  </div>
  <div class="col">
  <label for="validationServer01">specialty Of Package</label>
  <select id="inputState" class="form-control"onChange={(e)=>{
    setSpecialty(e.target.value);
  }}>
      <option selected > Choose </option>
      <option>Family Holiday</option>
      <option>Honeymoon</option>
      <option>Beach Holiday</option>
    </select>
  </div>
  <div class="col">
      <br/>
  <button class="btn btn-primary" type="submit">Search</button>
  </div>

</div>
</form >




<div className="container mt-4">
      <h6>Filter Packages</h6>

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
 data.map((pack,index)=>{
return<tr key={index}>
<td>
<div class="card border-0 shadow-lg">
  <div class="card-header bg-primary text-white">
    <h5 class="fw-bold mb-0">{pack.package_name}</h5>
  </div>
  <div class="card-body">
    
    <div class="row">
      <div class="col-sm-6">
        <p class="mb-1">Destination</p>
        <h6 class="card-subtitle mb-2 text-muted">{pack.destination}</h6>
        <p class="mb-1">specialty</p>
        <p class="mb-0">{pack.specialty}</p>
      </div>
      <div class="col-sm-6">
        <p class="mb-1">No of Travellers</p>
        <h6 class="card-subtitle mb-2 text-muted">{pack.numberOfTravelers}</h6>
      </div>
    </div>
    <hr/>
    <div class="row">
      <div class="col-sm-6">
        <p class="mb-1">Price</p>
        <h6 class="card-subtitle mb-2 text-muted">{pack.price}</h6>
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
