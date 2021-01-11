import React, { Component } from "react";
import "./BlogListComponent.css";
import { db } from "../../../firebase";
import queryString from "../query";

class BlogListComponent extends Component {
    state = {
        Blogs: null,
        queryString: queryString("blogList"),
    }
 
    componentDidMount() {
        db.collection('Blogs')
            .get()
            .then(snapshot => {

                const Blogs = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    Blogs.push(data)
                })
                this.setState({ Blogs: Blogs })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
                <div className="blogContainer">
                    <div className="blogContents">
                        {
                            this.state.Blogs && this.state.Blogs.map(Blogs => {
                                if(Blogs.blogcategory === this.state.queryString) {
                                    return (
                                        <a href={"/blog?title=" + Blogs.blogtitle + "&author=" + Blogs.blogauthor} className="singleBlog">
                                            <img src={"https://drive.google.com/uc?export=view&id=" + Blogs.blogimageurl} className="blogImage" />
                                            <div className="blogHeader">
                                                <div className="headerContent">
                                                    <div className="blogTitle">{Blogs.blogtitle}</div>
                                                    <div className="blogAuthor">by {Blogs.blogauthor}</div>
                                                    <div className="blogCategory">in {Blogs.blogcategory} Posts</div>
                                                    <div className="blogDate">Posted on {Blogs.blogdate}</div>
                                                </div>
                                            </div>
                                            {
                                                /*
                                                <div className="blogDetails">
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eligendi vitae praesentium ipsa optio architecto dolore repellendus expedita eaque perspiciatis!
                                                    </p>
                                                </div>
                                                */
                                            }
                                        </a>
                                    )
                                }
                            })
                        }
                    </div>
                </div>

            </React.Fragment>
        );

    }

};

export default BlogListComponent;