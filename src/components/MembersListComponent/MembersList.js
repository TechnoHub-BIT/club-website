import React,{useState, useEffect} from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Breadcrumb, BreadcrumbItem } from "../BreadcrumbComponent/BreadcrumbComponent";
import { Link } from "react-router-dom";
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

          <Table>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Branch</Th>
                <Th>Semester</Th>
                <Th>Skills</Th>
                <Th>Workshops Attended</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
              memberList?.map((data, i) => {
              if(data.payment == true){
                return (
                  <Tr key={i}>
                    <Td data-label="Full Name">{data.fullname}</Td>
                    <Td data-label="Branch">{data.branch}</Td>
                    <Td data-label="Semester">{data.semester}</Td>
                    <Td data-label="Skills">{data.skills}</Td>
                    <Td data-label="Skills">{data.workshops}</Td>
                  </Tr>
                );
              }

            })}

            </Tbody>
          </Table>
        </div>
      </div>
    </React.Fragment>
  );
}

export default OurMembers;