import React, { useState,Component  } from "react";
// import "./EditBlogComponent.css";
import HeaderTitle from "../../HeaderComponents/HeaderTitle";
import { Breadcrumb, BreadcrumbItem } from "../../BreadcrumbComponent/BreadcrumbComponent";
import "../../input.css";
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/tooltip';
import 'bootstrap/dist/css/bootstrap.css';
import { db } from "../../../firebase";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { render } from "@testing-library/react";
import queryString from "../query";

import editcategory from "./EditCategory"







//this oone new one
class EditCategoryComponent extends Component {
    constructor(props) {
      super(props);
      this.ref = db.collection('Blogcategory');
      this.unsubscribe = null;
      this.state = {
        Blogs: []
      };
    }
  
    onCollectionUpdate = (querySnapshot) => {
      const Blogs = [];
      querySnapshot.forEach((doc) => {
        const {blogcategorynameurl,blogcategorytype } = doc.data();
        Blogs.push({
          key: doc.id,
         blogcategorynameurl,
         blogcategorytype
        });
      });
      this.setState({
      Blogs
     });
    }
  
    componentDidMount() {
      this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }
    
    delete(id){
        db.collection('Blogcategory').doc(id).delete().then(() => {
           console.log("Document successfully deleted!");
           this.props.history.push("/")
         }).catch((error) => {
           console.error("Error removing document: ", error);
         });
       }
  
    render() {
      return (
        <div class="container">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">
                Blog Category Component
              </h3>
            </div>
            <div class="panel-body">
         
              <table class="table table-stripe">
                <thead>
                  <tr>
                    <th> Blogcategorynameurl</th>
                    <th>Blogcategorytype</th>
                   
                  </tr>
                </thead>
                <tbody>
                  {this.state.Blogs.map(Blog=>
                    <tr>
                      <td>{Blog.blogcategorynameurl}</td>
                      <td>{Blog.blogcategorytype}</td>
                      
                      <td><Link to={`/Editcategory/${Blog.key}`}>Edit</Link></td>
                      <td> <button onClick={this.delete.bind(this, Blog.key)} class="btn btn-danger">Delete</button></td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default  EditCategoryComponent;













