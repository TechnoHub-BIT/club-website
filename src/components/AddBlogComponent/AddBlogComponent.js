import React, { useState, useEffect } from "react";
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import {
  Breadcrumb,
  BreadcrumbItem,
} from "../BreadcrumbComponent/BreadcrumbComponent";
import "../input.css";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css";
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/tooltip";
import "bootstrap/dist/css/bootstrap.css";
import { db } from "../../firebase";
import { Helmet } from "react-helmet";
import { useAuth } from "../../contexts/AuthContext";

export default function AddBlogComponent() {
  const { currentUser } = useAuth();
  const [currentProfile, setCurrentProfile] = useState("");

  const [blogtitle, setTitle] = useState("");
  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const [blogcategory, setCategory] = useState("");
  const category = (e) => {
    setCategory(e.target.value);
  };

  const [blogauthorid, setAuthorId] = useState("");
  const authorid = (e) => {
    setAuthorId(e.target.value);
  };
  const [blogimageurl, setImageUrl] = useState("");
  const imageurl = (e) => {
    setImageUrl(e.target.value);
  };
  const [blogcontent, setContent] = useState("");
  const content = (param) => {
    setContent(param);
  };
  const [blogauthor, setAuthor] = useState("");
  const author = (e) => {
    setAuthor(e.target.value);
  };
  const [like] = useState(0);

  const blogdate = new Date().toLocaleDateString();

  const firestoremaisave = (e) => {
    if (
      blogtitle !== "" &&
      blogauthorid !== "" &&
      // blogcategory !== "" &&
      blogimageurl !== ""
    ) {
      e.preventDefault();
      db.collection("Blogs")
        .add({
          blogtitle: blogtitle,
          blogcategory: blogcategory,
          blogauthorid: blogauthorid,
          blogimageurl: blogimageurl,
          blogauthor:blogauthor,
          blogdate: blogdate,
          like: like,
          blogcontent: blogcontent,
        })
        .then(() => {
          alert("Blog Posted!");
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Please fill in all the details!");
    }
  };

  const [blogcategorytype, setblogcategortype] = useState("");
  const categoryname = (e) => {
    setblogcategortype(e.target.value);
  };
  const [blogcategorynameurl, setblogcategorynameurl] = useState("");
  const categorynameurl = (e) => {
    setblogcategorynameurl(e.target.value);
  };

  const blogcategorysave = (e, id) => {
    if (blogcategorytype !== "" && blogcategorynameurl !== "") {
      e.preventDefault();
      db.collection("Blogcategory")
        .add({
          blogcategorytype: blogcategorytype,
          blogcategorynameurl: blogcategorynameurl,
        })
        .then(() => {
          alert("Blog category added");
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("Please fill in all the details");
    }
  };
  useEffect(() => {
    if (currentUser) {
      db.collection("members")
        .doc(currentUser.uid)
        .onSnapshot(function (doc) {
          const data = doc.data();
          setCurrentProfile(data);
        });
    }
  }, [currentUser]);
  const [list, setList] = useState([]);
  
  useEffect(() => {
    const fetchdata = async () => {
      db.collection("Blogcategory").onSnapshot(function (data) {
        setList(
          data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    };
    fetchdata();
  }, []);

  const [members, setMembers] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      db.collection("members").onSnapshot(function (data) {
        setMembers(
          data.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
    };
    fetchdata();
  }, []);

  const onChange = (value) => {
    content(value);
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Add Blog | TechnoHub BITD</title>
      </Helmet>
      {(currentProfile.id === 1 || currentProfile.id === 3) && (
        <div className="addBlogContainer">
          <HeaderTitle heading="ADD BLOG" />
          <Breadcrumb>
            <BreadcrumbItem icon="fas fa-home" title="Home" path="/" />
            <BreadcrumbItem
              icon="fas fa-plus fa-xs"
              title="Add Blog"
              status="active"
            />
          </Breadcrumb>
          <div className="formsCont">
            <form>
              <div className="title">
                <h3>Post Blog</h3>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="title"
                  id="title"
                  onChange={handleOnChange}
                  value={blogtitle}
                  placeholder="Blog Title"
                  required
                />
                <label for="title">Blog Title</label>
              </div>
              <div className="input-group">
                <select
                  name="privacy"
                  id="privacy"
                  onChange={category}
                  value={blogcategory}
                  required
                >
                  <option value="">--Blog Category List--</option>
                  {list.map((cat) => {
                    return (
                      <option value={cat.blogcategorytype}>
                        {cat.blogcategorytype}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="input-group">
                <select
                  name="privacy"
                  id="privacy"
                  onChange={authorid}
                  value={blogauthorid}
                  required
                >
                  <option value="">--Blog Author--</option>
                  {members.map((mem) => {
                    return <option value={mem.id}>{mem.fullname}</option>;
                  })}
                </select>
              </div>
              <div className="input-group">
                <select
                  name="privacy"
                  id="privacy"
                  onChange={author}
                  value={blogauthor}
                  required
                >
                  <option value="">--Blog Author--</option>
                  {members.map((mem) => {
                    return <option value={mem.fullname}>{mem.fullname}</option>;
                  })}
                </select>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="image"
                  id="image"
                  onChange={imageurl}
                  value={blogimageurl}
                  placeholder="Blog Image"
                  required
                />
                <label for="image">Blog Image Drive ID(1920x1080)</label>
              </div>
              <div className="summernote">
                <ReactSummernote
                  value={blogcontent}
                  options={{
                    lang: "en-US",
                    height: 350,
                    dialogsInBody: true,
                    toolbar: [
                      ["font", ["bold", "underline"]],
                      ["para", ["ul", "ol", "paragraph"]],
                      ["insert", ["link", "picture"]],
                      ["view", ["codeview"]],
                    ],
                  }}
                  onChange={onChange}
                />
              </div>
              <div className="input-group w50p">
                <button type="submit" onClick={firestoremaisave}>
                  Post Blog
                </button>
              </div>
            </form>
            <form action="/addblog">
              <div className="title">
                <h3>Add Category</h3>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="cname"
                  id="cname"
                  onChange={categoryname}
                  value={blogcategorytype}
                  placeholder="Category Name"
                  required
                />
                <label for="cname">Category Name</label>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="cimage"
                  id="cimage"
                  onChange={categorynameurl}
                  value={blogcategorynameurl}
                  placeholder="Category Image Drive ID"
                  required
                />
                <label for="cimage">Category Image Drive ID(1920x1080)</label>
              </div>
              <div className="input-group w50p">
                <button type="submit" onClick={(id) => blogcategorysave(id)}>
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
