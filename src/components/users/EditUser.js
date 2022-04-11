import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { CollectorID } = useParams();
  const [user, setUser] = useState({
    CollectorID: 0,
    Active: '',
    LastName: '',
    CollectorCode: '',
    Aging1to15: '',
    Aging31to45: '',
    Aging31to60: '',
    AgingOver60: '',
    ProgramBucketA: '',
    ProgramBucketB: '',
    ProgramBucketC: '',
    ProgramBucketSU: '',
    FinanceCompany: ''
  });
  
  const { Active, LastName, CollectorCode, Aging1to15, Aging31to45, Aging31to60, AgingOver60, ProgramBucketA, ProgramBucketB, ProgramBucketC, ProgramBucketSU, FinanceCompany} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value});
  };

  useEffect(() => {
    loadUser();
  }, []);// eslint-disable-line react-hooks/exhaustive-deps


  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/UpdateUser/${CollectorID}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:5000/getCollector/${CollectorID}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
       <div className="form-group">
         <label>Collector ID</label>
         <input
              type="text"
              className="form-control form-control-lg"
              placeholder="CollectorID"
              name="CollectorID"
              defaultValue={CollectorID}
              onChange={e => onInputChange(e)}
            />
          </div>
          {/* <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="ProgramBucketID"
              name="ProgramBucketID"
              defaultValue={ProgramBucketID}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="CollectorOptionsID"
              name="CollectorOptionsID"
              defaultValue={CollectorOptionsID}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="FinanceCompanyID"
              name="FinanceCompanyID"
              defaultValue={FinanceCompanyID}
              onChange={e => onInputChange(e)}
            />
          </div> */}
          <label>Active</label>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Active Status"
              name="Active"
              defaultValue={Active}
              onChange={e => onInputChange(e)}
            />
          </div>
          <label>Last Name</label>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Last Name"
              name="LastName"
              defaultValue={LastName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <label>CollectorCode</label>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Collector Code"
              name="CollectorCode"
              defaultValue={CollectorCode}
              onChange={e => onInputChange(e)}
            />
          </div>
          <label>Aging1to15</label>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Aging1to15"
              name="Aging1to15"
              defaultValue={Aging1to15}
              onChange={e => onInputChange(e)}
            />
          </div>
          <label>Aging31to45</label>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Aging31to45"
              name="Aging31to45"
              defaultValue={Aging31to45}
              onChange={e => onInputChange(e)}
            />
          </div>
          <label>Aging31to60</label>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Aging31to60"
              name="Aging31to60"
              defaultValue={Aging31to60}
              onChange={e => onInputChange(e)}
            />
          </div>
          <label>AgingOver60</label>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="AgingOver60"
              name="AgingOver60"
              defaultValue={AgingOver60}
              onChange={e => onInputChange(e)}
            />
          </div>
          <label>ProgramBucketA</label>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="ProgramBucketA"
              name="ProgramBucketA"
              defaultValue={ProgramBucketA}
              onChange={e => onInputChange(e)}
            />
          </div>
          <label>ProgramBucketB</label>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="ProgramBucketB"
              name="ProgramBucketB"
              defaultValue={ProgramBucketB}
              onChange={e => onInputChange(e)}
            />
          </div>
          <label>ProgramBucketC</label>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="ProgramBucketC"
              name="ProgramBucketC"
              defaultValue={ProgramBucketC}
              onChange={e => onInputChange(e)}
            />
          </div>
          <label>ProgramBucketSU</label>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="ProgramBucketSU"
              name="ProgramBucketSU"
              defaultValue={ProgramBucketSU}
              onChange={e => onInputChange(e)}
            />
          </div>
          <label>FinanceCompany</label>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="FinanceCompany"
              name="FinanceCompany"
              defaultValue={FinanceCompany}
              onChange={e => onInputChange(e)}
            />
          </div> 
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
