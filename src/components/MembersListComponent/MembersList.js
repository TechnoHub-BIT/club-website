import React,{useState, useEffect} from 'react';
import { Breadcrumb, BreadcrumbItem } from "../BreadcrumbComponent/BreadcrumbComponent";
import HeadingTitle from "../HeaderComponents/HeaderTitle";
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
        
        <HeadingTitle heading="MEMBERS" />
        <Breadcrumb>
            <BreadcrumbItem icon="fas fa-home" title="Home" path="/" />
            <BreadcrumbItem icon="fas fa-user-friends" title="Members" status="active" />
        </Breadcrumb>

        <div className="table-container">
          <div className="table table-responsive table-striped table-hover table-borderless">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Branch</th>
                <th>Semester</th>
                <th>Skills</th>
                <th>Workshops Attended</th>
              </tr>
            </thead>
            <tbody>
              {/* <Tr>
                <Td>Aditya Deshmukh</Td>
                <Td>Electrical and Electronics</Td>
                <Td>5th</Td>
                <Td>Web Development(MERN), Robotics, Python/C++, Electronics Simulation</Td>
                <Td>Robotics, EagleCAD, Electric Vehicles</Td>
              </Tr> */}
              {memberList?.map((data, i) => {
                return (
                  <tr key={i}>
                    <td data-label="Full Name">{data.fullname}</td>
                    <td data-label="Branch">{data.branch}</td>
                    <td data-label="Semester">{data.semester}</td>
                    <td data-label="Skills">{data.skills}</td>
                    <td data-label="Skills">{data.workshops}</td>
                  </tr>
                );
              })}
            </tbody>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default OurMembers;