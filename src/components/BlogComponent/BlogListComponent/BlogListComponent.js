import React, { Component } from "react";
import "./BlogListComponent.css";
import { db } from "../../../firebase";
import queryString from "../query";
import { Alert, ButtonToggle } from 'reactstrap';

import Moment from 'moment';
import { data } from "jquery";

// class BlogListComponent extends Component {
//     state = {
//         // Blogs: [],
//         Blogs: null,
//         queryString: queryString("blogList"),
//         key: ''
//     }


//     componentDidMount() {
//         db.collection('Blogs')
//             .get()
//             .then(snapshot => {

//                 const Blogs = []
//                 snapshot.forEach(doc => {
//                     const data = doc.data()
//                     Blogs.push({
//                         key: doc.id
//                     }, data)
//                 })
//                 this.setState({ Blogs: Blogs })
//             })
//             // .then((doc)=> {
//             //     this.setState({
//             //         Blogs : doc.data(),
//             //         key: doc.id,
//             //     })
//             // })
//             .catch(error => console.log(error))
//     }

//     delete(id) {
//         db.collection('Blogs').doc(id).delete()
//             .catch((err) => {
//                 console.error(err);
//             })
//     }



function BlogListComponent() {

    const qur = queryString("blogList");

    const [blogedit, setblogs] = React.useState([]);


    React.useEffect(() => {
        const fetchdata = async () => {
            db.collection("Blogs")
                .onSnapshot(function (data) {
                    setblogs(data.docs.map(doc => ({
                        ...doc.data(), id: doc.id
                    })));
                })
        }
        fetchdata();
    }, []);


    function onDelete (id) {
       
        db.collection('Blogs').doc(id).delete()
            .catch((err) => {
                console.error(err);
            })
        
    }



    // render() {
        let counter = 0;
    return (
        
        <React.Fragment>
            <div className="blogContainer">
                <div className="blogContents">
                    <div className="alertMessage">
                        <h4> Blogs</h4>
                        {qur}
                    </div>
                    {blogedit.map(Blogs => {


                        {/* {
                            this.state.Blogs && this.state.Blogs.map(Blogs => { */}
                        if (Blogs.blogcategory === qur) {
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
                    })}
                        {
                        counter === 0 ?
                            <div>
                                <Alert color="danger" style={{ textAlign: "center" }}>
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

// };

export default BlogListComponent;