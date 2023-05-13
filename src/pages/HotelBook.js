import React, {useEffect,useState} from 'react'
import axios from 'axios'

export default function HotelBook() {


    const[data,setData] = useState([])
    useEffect(()=>{
      axios.get('http://localhost:5000/flights')
      .then(res=>setData(res.data))
      .catch(err=>console.log(err));
    },[])



  return (
    <div className='container'>
      <h1>Hotel</h1>

      <form>
<div class="row">
  <div class="col">
  <label for="validationServer01">Departure Destination</label>
  <select id="inputState" class="form-control">
  {
 data.map((flight,index)=>{
return<option key={index} > {flight.departure_destination}</option>
 
 })

}
    </select>
  </div>
  <div class="col">
  <label for="validationServer01">Arrival Destination</label>
  <select id="inputState" class="form-control">
    
  {
 data.map((flight,index)=>{
return<option key={index} > {flight.arrival_destination}</option>
 
 })

}
      
    </select>
  </div>
  <div class="col">
  <label for="validationServer01">Departure Date</label>
  <input type='date' class="form-control" ></input>
  </div>
  <div class="col">
  <label for="validationServer01">Arrival Date</label>
  <input type='date' class="form-control" ></input>
  </div>
  <div class="col">
  <label for="validationServer01">Cabin Class</label>
  <select id="inputState" class="form-control">
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
</form>


    </div>
  )
}
