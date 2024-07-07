import React from "react";
import { useNavigate } from "react-router-dom";

const Register=()=>{
    const navigate = useNavigate();
    const handleSubmit = () => {
    navigate('/login')
    };
    return(
        <div class="container">
         <div class="container">
  <div class="row">
    <div class="col">
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">User Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label"> Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="button" class="btn btn-warning" onClick={handleSubmit}>Submit</button>
</form>
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div>
        </div>
    )
}

export default Register;