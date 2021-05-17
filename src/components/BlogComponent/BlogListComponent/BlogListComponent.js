import React, { useEffect, useState } from "react";
import "./BlogListComponent.css";
import { db } from "../../../firebase";
import queryString from "../query";
import { Alert, ButtonToggle } from "reactstrap";
import Moment from "moment";
import { Helmet } from "react-helmet";
import { Zoom } from "react-reveal";

function BlogListComponent(props) {
  const qur = queryString("blogList");

  const [blogedit, setblogs] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      db.collection("NewBlogcategory")
        .doc(props.match.params.id)
        .collection("CBlogs")
        .orderBy("blogdate", "asc")
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

  let counter = 0;
  return (
    <React.Fragment>
      <div className="blogContainer">
        <div className="blogContents">
          <div className="alertMessage">
            <h4> Blogs</h4>
          </div>
          {blogedit.map((Blogs) => {
            counter++;
            return (
              <Zoom>
                <a href={"/blog/" + Blogs.blogcategory + "/" + Blogs.id}>
                  <img
                    src={
                      "https://drive.google.com/uc?export=view&id=" +
                      Blogs.blogimageurl
                    }
                    className="blogImage"
                  />
                  <div className="blogHeader">
                    <div className="headerContent">
                      <div className="blogTitle">{Blogs.blogtitle}</div>
                      <div className="blogAuthor">by {Blogs.blogauthor}</div>
                      <div className="blogCategory">
                        in {Blogs.blogcategory} Posts
                      </div>
                      <div className="blogDate">
                        Posted on {Moment(Blogs.blogdate).format("ll")}
                      </div>
                    </div>
                  </div>
                </a>
              </Zoom>
            );
          })}
          {counter === 0 ? (
            <div>
              <Helmet>
                <title>Blogs | TechnoHub BITD</title>
              </Helmet>
              <Zoom>
                <Alert color="danger" style={{ textAlign: "center" }}>
                  Oops! Looks like this category does not have any blogs.
                  <br />
                  <a href="/blog">
                    <ButtonToggle color="danger">Go Back</ButtonToggle>
                  </a>
                </Alert>
              </Zoom>
            </div>
          ) : (
            <Helmet>
              {console.log(counter)}
              <title> Blogs | TechnoHub BITD</title>
            </Helmet>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default BlogListComponent;
