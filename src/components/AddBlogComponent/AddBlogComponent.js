import React from "react";
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

const addBlog = () => {
    const onChange = (content) => {
        console.log('onChange', content);
    }

    return(
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

                <form action="/contactus">
                    <div className="input-group">
                        <input type="text" name="title" id="title" placeholder="Blog Title" required />
                        <label for="title">Blog Title</label>
                    </div>
                    <div className="input-group">
                        <select name="category" id="category" required>
                            <option value="">--Select Blog Category--</option>
                            <option value="1">Category 1</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <input type="text" name="author" id="author" placeholder="Blog Author" required />
                        <label for="author">Blog Author</label>
                    </div>
                    <div className="input-group">
                        <input type="url" name="image" id="image" placeholder="Blog Image" required />
                        <label for="image">Blog Image</label>
                    </div>
                    <div className="summernote">
                        <ReactSummernote
                            value="Default value"
                            options={{
                                lang: 'en-US',
                                height: 350,
                                dialogsInBody: true,
                                toolbar: [
                                    ['style', ['style']],
                                    ['font', ['bold', 'underline', 'clear']],
                                    ['fontname', ['fontname']],
                                    ['para', ['ul', 'ol', 'paragraph']],
                                    ['insert', ['link']],
                                    ['view', ['codeview']]
                                ]
                            }}
                            onChange={onChange}
                        />
                    </div>
                    <div className="input-group w50p">
                        <button type="submit">Post Blog</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};

export default addBlog;