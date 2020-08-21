import React from "react";
import "./InForm.css";

const InForm = (props) =>{
    return(
<center><form onSubmit={props.onSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email Address</label>
    <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input name="password" type="password" className="form-control" id="exampleInputPassword1"/>
  </div>

  <center><button type="submit" className="btn btn-primary">Submit</button></center>
</form></center>
    )
}

export default InForm;