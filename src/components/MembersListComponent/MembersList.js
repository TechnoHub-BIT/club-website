import React,{useState, useEffect} from 'react';
import { Breadcrumb, BreadcrumbItem } from "../BreadcrumbComponent/BreadcrumbComponent";
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import "./MembersList.css"
import {useAuth} from '../../contexts/AuthContext';
import { db } from "../../firebase";

const OurMembers = (props) => {

  const [memberList, setMemberList] = useState([]);
  const {currentUser} = useAuth();

  useEffect(() => {
    if(currentUser){
      db.collection("members")
        .get()
        .then((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => doc.data());
          setMemberList(data);
        });
  }
  }, [currentUser]);


  return (
    <React.Fragment>    
      <div className="members-container">
        
        <HeaderTitle heading="MEMBERS" />
        <Breadcrumb>
            <BreadcrumbItem icon="fas fa-home" title="Home" path="/" />
            <BreadcrumbItem icon="fas fa-user-friends" title="Members" status="active" />
        </Breadcrumb>

        <div className="container-fluid">
          <table className="table table-responsive-sm table-responsive-md table-striped table-hover table-borderless">
            <thead className="thead-dark text-center">
              <tr>
                <th>Name</th>
                <th>Branch</th>
                <th>Semester</th>
                <th>Skills</th>
                <th>Interest</th>
                <th>Workshops Attended</th>
              </tr>
            </thead>
            <tbody>
            {
              memberList?.map((data, i) => {
              if(data.payment === true){
                return (
                  <tr key={i}>
                    <td data-label="Full Name">{data.fullname}</td>
                    <td data-label="Branch">{data.branch}</td>
                    <td className="text-center" data-label="Semester">{data.semester}</td>
                    <td data-label="Skills">{data.skills}</td>
                    <td data-label="Interests">{data.interest}</td>
                    <td data-label="Skills">{data.workshops}</td>
                  </tr>
                );
              }
              else {
                <div>No Data to show now</div>
              }
            })}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}

export default OurMembers;