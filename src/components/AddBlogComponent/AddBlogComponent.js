import React, { useState } from "react";
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import { Breadcrumb, BreadcrumbItem } from "../BreadcrumbComponent/BreadcrumbComponent";
import "./AddBlogComponent.css";
import "../input.css";
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/tooltip';
import 'bootstrap/dist/css/bootstrap.css';
import { db } from "../../firebase";
import queryString from 'query-string';

export default function AddBlogComponent() {
    const [blogtitle, setTitle] = useState('');
    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };

    const [blogcategory, setCategory] = useState('');
    const category = (e) => {
        setCategory(e.target.value);
    };
    const [blogauthor, setAuthor] = useState('');
    const author = (e) => {
        setAuthor(e.target.value);
    };
    const [blogimageurl, setImageUrl] = useState('');
    const imageurl = (e) => {
        setImageUrl(e.target.value);
    };
    const [blogcontent, setContent] = useState('');
    const content = (e) => {
        setContent(e.target.value);
    };

    const firestoremaisave = (e) => {
        e.preventDefault();
        db.collection("Blogs").add({
            blogtitle: blogtitle,
            blogcategory: blogcategory,
            blogauthor: blogauthor,
            blogimageurl: blogimageurl,
            blogcontent: blogcontent
        })
            .then(() => {
                alert("Blog Posted!");
            })
            .catch((error) => {
                alert(error.message);
            });

    }

    return (
        <React.Fragment>
            <div className="addBlogContainer">
                <HeaderTitle heading="ADD BLOG" />
                <Breadcrumb>
                    <BreadcrumbItem icon="fas fa-home" title="Home" path="/" />
                    <BreadcrumbItem icon="fas fa-plus fa-xs" title="Add Blog" status="active" />
                </Breadcrumb>

                <div className="title">
                    <h3>Fill in all the Details and Post the Blog</h3>
                </div>

                <div className="formsCont">
                    <form action="/contactus">
                        <div className="input-group">
                            <input type="text" name="title" id="title" onChange={handleOnChange} value={blogtitle} placeholder="Blog Title" required />
                            <label for="title">Blog Title</label>
                        </div>
                        <div className="input-group">
                            <select name="category" onChange={category} value={blogcategory} id="category" required>
                                <option value="">--Select Blog Category--</option>
                                <option value="1">Category 1</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <input type="text" name="author" id="author" onChange={author} value={blogauthor} placeholder="Blog Author" required />
                            <label for="author">Blog Author</label>
                        </div>
                        <div className="input-group">
                            <input type="text" name="image" id="image" onChange={imageurl} value={blogimageurl} placeholder="Blog Image" required />
                            <label for="image">Blog Image Drive ID</label>
                        </div>
                        <div className="summernote">
                            <textarea onChange={content} value={blogcontent}>

                            </textarea>
                        </div>
                        <div className="input-group w50p">
                            <button type="submit" onClick={firestoremaisave}>Post Blog</button>
                        </div>
                    </form>
                    <form action="/addblog">
                        <div className="input-group">
                            <input type="text" name="cname" id="cname" placeholder="Category Name" required />
                            <label for="cname">Category Name</label>
                        </div>
                        <div className="input-group w50p">
                            <button type="submit">Add Category</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

