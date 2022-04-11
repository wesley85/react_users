import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    CollectorID: '',
    ProgramBucketID: '',
    CollectorOptionsID: '',
    FinanceCompanyID: '',
    Active: '',
    FirstName: '',
    MiddleInitial: '',
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
  const { CollectorID } = useParams(user);
  useEffect(() => {
    loadUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:5000/getCollector/${CollectorID}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Collector Id: {CollectorID}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Collector ID: {CollectorID}</li>
        <li className="list-group-item">Program Bucket ID: {user.ProgramBucketID}</li>
        <li className="list-group-item">Collector Options ID: {user.CollectorOptionsID}</li>
        <li className="list-group-item">FinanceCompanyID: {user.FinanceCompanyID}</li>
        <li className="list-group-item">Active: {user.Active}</li>
        <li className="list-group-item">First Name: {user.FirstName}</li>
        <li className="list-group-item">Middle Initial: {user.MiddleInitial}</li>
        <li className="list-group-item">Last Name: {user.LastName}</li>
        <li className="list-group-item">Collector Code: {user.CollectorCode}</li>
        <li className="list-group-item">Aging 1-15: {user.Aging1to15}</li>
        <li className="list-group-item">Aging 31-45: {user.Aging31to45}</li>
        <li className="list-group-item">Aging 31-60: {user.Aging31to60}</li>
        <li className="list-group-item">Aging Over 60: {user.AgingOver60}</li>
        <li className="list-group-item">Program Bucket A: {user.ProgramBucketA}</li>
        <li className="list-group-item">Program Bucket B: {user.ProgramBucketB}</li>
        <li className="list-group-item">Program Bucket C: {user.ProgramBucketC}</li>
        <li className="list-group-item">Program Bucket SU: {user.ProgramBucketSU}</li>
        <li className="list-group-item">Finance Company: {user.FinanceCompany}</li>
      </ul>
    </div>
  );
};

export default User;
