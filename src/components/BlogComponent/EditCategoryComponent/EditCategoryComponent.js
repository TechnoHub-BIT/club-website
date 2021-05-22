import React, { useState, Component } from "react";
// import "./EditBlogComponent.css";
import HeaderTitle from "../../HeaderComponents/HeaderTitle";
import {
  Breadcrumb,
  BreadcrumbItem,
} from "../../BreadcrumbComponent/BreadcrumbComponent";
import "../../input.css";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css";
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/tooltip";
import "bootstrap/dist/css/bootstrap.css";
import { db } from "../../../firebase";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { render } from "@testing-library/react";
import editcategory from "./EditCategory";

class EditCategoryComponent extends Component {
  ref = db.collection("Blogcategory");
  unsubscribe = null;
  state = {
    Blogs: [],
  };

  onCollectionUpdate = (querySnapshot) => {
    const Blogs = [];
    querySnapshot.forEach((doc) => {
      const { blogcategorynameurl, blogcategorytype } = doc.data();
      Blogs.push({
        id: doc.id,
        blogcategorynameurl,
        blogcategorytype,
      });
    });
    this.setState({
      Blogs,
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  delete(id) {
    db.collection("Blogcategory")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        this.props.history.push("/");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  }

  render() {
    return (
      <div className="container" style={{ margin: "3em auto" }}>
        <div className="panel panel-default">
          <div className="panel-heading">
            <h2 className="panel-title text-center mb-4">
              Blog Category Component
            </h2>
          </div>
          <div className="panel-body">
            <table className="table table-striped table-hover text-center">
              <thead className="thead-dark">
                <tr>
                  <th>Category Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.Blogs.map((Blog) => (
                  <tr>
                    <td style={{ verticalAlign: "middle" }}>
                      {Blog.blogcategorytype}
                    </td>
                    <td>
                      <Link to={`/Editcategory/${Blog.id}`}>
                        <button className="btn btn-info">
                          <i className="fas fa-pencil-alt"></i>&nbsp;&nbsp;Edit
                        </button>
                      </Link>
                    </td>
                    {/* <td><button onClick={this.delete.bind(this, Blog.key)} class="btn btn-danger">Delete</button></td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default EditCategoryComponent;
