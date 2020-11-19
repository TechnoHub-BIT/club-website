import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Breadcrumb, BreadcrumbItem } from "../BreadcrumbComponent/BreadcrumbComponent";
import { Link } from "react-router-dom";
import HeadingTitle from "../HeaderComponents/HeaderTitle";
import "./MembersList.css"

 
const OurMembers = (props) => {
  return (
    <React.Fragment>    
      <div className="members-container">
        <HeadingTitle heading="Members" />
        <Breadcrumb>
            <BreadcrumbItem title="Home" path="/" />
            <BreadcrumbItem title="Members" status="active" />
        </Breadcrumb>
        <div className="table-container ">
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
              <Tr>
                <Td>Aditya Deshmukh</Td>
                <Td>Electrical and Electronics</Td>
                <Td>5th</Td>
                <Td>Web Development(MERN), Robotics, Python/C++, Electronics Simulation</Td>
                <Td>Robotics, EagleCAD, Electric Vehicles</Td>
              </Tr>
              <Tr>
                <Td>Kuldeep Patel</Td>
                <Td>Electronics and Telecommunications</Td>
                <Td>5th</Td>
                <Td>Web Development, NodeJS, AndroidDev</Td>
                <Td>All</Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
      </div>
    </React.Fragment>
  );
}

export default OurMembers;