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
      db.collection("members").orderBy("fullname")
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
          <div className="membersList">
            {
              memberList?.map((data, i) => {
              if(data.payment === true && data.fullname !== null && data.branch !== null && data.semester !== null) {

                //Setting the Suffix for Semester
                  let suffix = "th";

                  if (data.semester === 1)
                      suffix = "st";
                  else if (data.semester === 2)
                      suffix = "nd";
                  else if (data.semester === 3)
                      suffix = "rd";

                  return (
                    <div className="singleMember" key={i}>
                      <div className="leftSide">
                        <div className="name">{data.fullname.toLowerCase()}</div>
                        <div className="branch">{data.branch}</div>
                        <div className="sem">{data.semester}{suffix} Semester</div>
                        <div className="member">{data.member !== null ? data.member : "N/A"}</div>
                      </div>
                      <div className="rightSide">
                        <div className="skills"><span>Skill(s)- </span>{data.skills !== null ? data.skills : "N/A"}</div>
                        <div className="interests"><span>Interest(s)- </span>{data.interest !== null ? data.interest : "N/A"}</div>
                        <div className="workshops"><span>Workshop(s) Attended- </span>{data.workshops !== null ? data.workshops : "N/A"}</div>
                      </div>
                    </div>
                  );
              }
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OurMembers;
