import React, { useEffect, useState } from "react";
import "./CategoriesComponent.css";
import {
  Breadcrumb,
  BreadcrumbItem,
} from "../../BreadcrumbComponent/BreadcrumbComponent";
import HeadingTitle from "../../HeaderComponents/HeaderTitle";
import { db } from "../../../firebase";
import { Helmet } from "react-helmet";
import { Zoom } from "react-reveal";

const CategoriesComponent = () => {
  const [blogcategory, setBlogCategory] = useState([]);
  const refe = db.collection("Blogcategory");
  useEffect(() => {
    const fetchdata = async () => {
      refe.onSnapshot(function (data) {
        setBlogCategory(
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
        <title>Blog Categories | TechnoHub BITD</title>
        <meta
          name="description"
          content="BIT Durg’s TechnoHub blog section bestows you with technical, Technical - Non Computer Science and career blogs. As our club’s motto is to Imagine, Invent and Inspire so with our blogs we keep you up to date about all the technical and career related changes around the world."
        />
      </Helmet>
      <div>
        <HeadingTitle heading="BLOG CATEGORIES" image="blog-categories.jpg" />
        <Breadcrumb>
          <BreadcrumbItem icon="fas fa-home" title="Home" path="/" />
          <BreadcrumbItem
            icon="fas fa-th-large"
            title="Blog Categories"
            status="active"
          />
        </Breadcrumb>
        <div className="categoriesCont">
          <div className="categoriesList">
            {blogcategory &&
              blogcategory.map((blog) => {
                return (
                  <Zoom>
                    <a
                      href={"/blog/" + blog.blogcategorytype}
                      className="singleCategory"
                    >
                      <img
                        src={
                          "https://drive.google.com/uc?export=view&id=" +
                          blog.blogcategorynameurl
                        }
                        className="categoryImage"
                        alt={blog.blogcategorytype}
                      />
                      <div className="categoryContent">
                        <div className="categoryTitle">
                          {blog.blogcategorytype} Blogs{" "}
                        </div>
                      </div>
                    </a>
                  </Zoom>
                );
              })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CategoriesComponent;
