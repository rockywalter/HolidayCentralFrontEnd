import React, {useEffect,useState} from 'react'
import axios from 'axios'

export default function FlightBook() {
  const[data,setData] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/flights')
    .then(res=>setData(res.data))
    .catch(err=>console.log(err));
  },[])



  return (
    <div className='container'>
    <form>
<div class="row">
  <div class="col">
  <label for="validationServer01">Departure Destination</label>
  <select id="inputState" class="form-control">
      <option selected>Choose</option>
      <option>...</option>
    </select>
  </div>
  <div class="col">
  <label for="validationServer01">Arrival Destination</label>
  <select id="inputState" class="form-control">
      <option selected>Choose</option>
      <option>...</option>
    </select>
  </div>
  <div class="col">
  <label for="validationServer01">Departure Date</label>
  <input type='date' class="form-control" ></input>
  </div>
  <div class="col">
  <label for="validationServer01">Arrival Date</label>
  <input type='date' class="form-control"></input>
  </div>
  <div class="col">
  <label for="validationServer01">Cabin Class</label>
  <select id="inputState" class="form-control">
      <option selected>Cabin Class</option>
      <option>...</option>
    </select>
  </div>
  <div class="col">
      <br/>
  <button class="btn btn-primary" type="submit">Search</button>
  </div>

</div>
</form>
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
        <a href="#" class="btn btn-primary w-100">Book Now</a>
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
