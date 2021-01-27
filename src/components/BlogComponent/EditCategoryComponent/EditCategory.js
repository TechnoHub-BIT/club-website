import React, { Component } from "react";
// import "./EditBlogComponent.css";
import "../EditBlogComponent/EditBlogComponent.css"
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

import { Helmet } from "react-helmet";
import { render } from "@testing-library/react";
import queryString from "../query";





class EditCategory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: '',
            blogcategorynameurl: '',
            blogcategorytype: ''
        };
    }

    componentDidMount() {
        const ref = db.collection('Blogcategory').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if (doc.exists) {
                const Blogcategory = doc.data();
                this.setState({
                    key: doc.id,
                    blogcategorynameurl: Blogcategory.blogcategorynameurl,
                    blogcategorytype: Blogcategory.blogcategorytype

                });
            } else {
                console.log("No such document!");
            }
        });
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({ Blogcategory: state });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { blogcategorynameurl, blogcategorytype } = this.state;

        const updateRef = db.collection('Blogcategory').doc(this.state.key);
        updateRef.set({
            blogcategorynameurl,
            blogcategorytype
        }).then((docRef) => {
            this.setState({
                key: '',
                blogcategorynameurl: '',
                blogcategorytype: ''
            });
            this.props.history.push("/editblogcategory/" + this.props.match.params.id)
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }


    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Edit Blog Category| TechnoHub BITD</title>
                </Helmet>
                <div class="editBlogContainer">

                    <HeaderTitle heading="EDIT BLOG CATEGORY" />
                    <Breadcrumb>
                        <BreadcrumbItem icon="fas fa-home" title="Home" path="/" />
                        <BreadcrumbItem icon="fas fa-pencil-alt" title="Edit Blog" status="active" />
                    </Breadcrumb>
                    <div className="formsCont">
                        <form>
                            <div className="title">
                                <h3  >Edit Blog Category</h3>
                            </div>
                            <div className="input-group">
                                <input type="text" name="title" id="title" name="blogcategorynameurl" onChange={this.onChange} value={this.state.blogcategorynameurl} placeholder="Blog Title" required />
                                <label for="title">Blog Image url</label>
                            </div>

                            <div className="input-group">
                                <input type="text" name="author" id="author" onChange={this.onChange} name="blogcategorytype" value={this.state.blogcategorytype} placeholder="Blog Author" required />
                                <label for="author">Blog Category type</label>
                            </div>

                            <div className="input-group w50p">
                                <button type="submit" onClick={this.onSubmit} >Update Blog</button>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default EditCategory;





