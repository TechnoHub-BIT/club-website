import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import "./ProfileComponents.css";
import "../input.css";
import { db } from "../../firebase";
import ProfileHeader from "./ProfileHeader";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";
import Moment from "moment";


const MyBlogs = () => {
  //Current User Details
  const { currentUser} = useAuth();
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    if (currentUser) {
      db.collection("members")
        .doc(currentUser.uid)
        .onSnapshot(function (doc) {
          const data = doc.data();
          setProfiles(data);
        });
    }
  }, [currentUser]);

  const [blogedit, setblogs] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      db.collection("Blogs")
        .orderBy("blogdate", "desc")
        .onSnapshot(function (data) {
          setblogs(
            data.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }))
          );
        });
    };
    fetchdata();
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>My Blogs | TechnoHub BITD</title>
        <meta name="title" content="My Blogs at TechnoHub BITD" />
      </Helmet>
      <div className="testsListCont">
        <Fade up>
          <h1 className="title">
            My Blogs
          </h1>
          <div className="centreCard">
            <div className="testsList">
              <div
                className="test"
                style={{ backgroundColor: "#ff4444", color: "#fff" }}
              >
                <div className="index">
                  <strong>S.No.</strong>
                </div>
                <div className="testTitle">
                  Test Title(Max. Marks)
                  <div className="date">{/* <strong>Date</strong> */}</div>
                </div>
                <div className="duration">
                  <strong>Time Taken/Your Score</strong>
                </div>
                <div className="buttons">
                  <strong>Answer Key</strong>
                </div>
              </div>

              {blogedit.map((blogs, i) => {
               if( blogs.blogauthor ==  profiles.fullname ){
                return (
                    <a href={"/blog/" + blogs.blogcategory + "/" + blogs.id }>
                  <div className="test">
                    <div className="index">{i + 1}</div>
                    <div className="testTitle">
                      {blogs.blogtitle}
                      <div className="date">
                        {Moment(blogs.blogdate).format("ll")}
                        <br />
                      </div>
                    </div>
                  </div>
                  </a>
                );
               }
              })}
            </div>
          </div>
        </Fade>
      </div>
    </React.Fragment>
  );
};

export default MyBlogs;
