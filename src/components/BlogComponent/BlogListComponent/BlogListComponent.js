import React, { Component } from "react";
import "./BlogListComponent.css";
import { db } from "../../../firebase";
import queryString from "../query";
import { Alert, ButtonToggle } from 'reactstrap';
import Moment from 'moment';

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
        let counter = 0;
        return (
            <React.Fragment>
                <div className="blogContainer">
                    <div className="blogContents">
                        <div className="alertMessage">
                            <h4>{this.state.queryString} Blogs</h4>
                        </div>
                        {
                            this.state.Blogs && this.state.Blogs.map(Blogs => {
                                if(Blogs.blogcategory === this.state.queryString) {
                                    counter++;
                                    return (
                                        <a href={"/blog?title=" + Blogs.blogtitle + "&author=" + Blogs.blogauthor} className="singleBlog">
                                            <img src={"https://drive.google.com/uc?export=view&id=" + Blogs.blogimageurl} className="blogImage" />
                                            <div className="blogHeader">
                                                <div className="headerContent">
                                                    <div className="blogTitle">{Blogs.blogtitle}</div>
                                                    <div className="blogAuthor">by {Blogs.blogauthor}</div>
                                                    <div className="blogCategory">in {Blogs.blogcategory} Posts</div>
                                                    <div className="blogDate">Posted on {Moment(Blogs.blogdate).format('ll')}</div>
                                                </div>
                                            </div>
                                        </a>
                                    )
                                }
                            })
                        }
                        {
                            counter === 0 ? 
                                <div>
                                    <Alert color="danger" style={{textAlign: "center"}}>
                                        Oops! Looks like this category does not have any blogs.
                                        <br />
                                        <a href="/blogcategories"><ButtonToggle color="danger">Go Back</ButtonToggle></a>
                                    </Alert>
                                </div> : null
                        }
                    </div>
                </div>

            </React.Fragment>
        );

    }

};

export default BlogListComponent;