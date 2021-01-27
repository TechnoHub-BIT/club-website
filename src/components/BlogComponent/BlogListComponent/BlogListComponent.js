import React from "react";
import "./BlogListComponent.css";
import { db } from "../../../firebase";
import queryString from "../query";
import { Alert, ButtonToggle } from 'reactstrap';
import Moment from 'moment';
import { Helmet } from "react-helmet";
import { Zoom } from 'react-reveal';

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

    function onDelete(id) {
        db.collection('Blogs').doc(id).delete()
            .catch((err) => {
                console.error(err);
            })
    }

    let counter = 0;
    return (
        <React.Fragment>
            <div className="blogContainer">
                <div className="blogContents">
                    <div className="alertMessage">
                        <h4>{qur} Blogs</h4>
                    </div>
                    {blogedit.map(Blogs => {
                        if (Blogs.blogcategory === qur) {
                            counter++;

                            const blogTitle = Blogs.blogtitle.replace(/-/g, "%20");
                            const newTitle = blogTitle.replace(/ /g, "-");

                            const blogAuthor = Blogs.blogauthor.replace(/-/g, "%20");
                            const newAuthor = blogAuthor.replace(/ /g, "-");

                            return (
                                <Zoom>
                                    <a href={"/blogpost?title=" + newTitle + "&author=" + newAuthor} className="singleBlog">

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
                                </Zoom>
                            )
                        }
                    })}
                    {
                        counter === 0 ?
                            <div>
                                <Helmet>
                                    <title>Blogs | TechnoHub BITD</title>
                                </Helmet>
                                <Zoom>
                                    <Alert color="danger" style={{ textAlign: "center" }}>
                                        Oops! Looks like this category does not have any blogs.
                                            <br />
                                        <a href="/blog"><ButtonToggle color="danger">Go Back</ButtonToggle></a>
                                    </Alert>
                                </Zoom>
                            </div>
                            :
                            <Helmet>
                                <title>{qur} Blogs | TechnoHub BITD</title>
                            </Helmet>
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default BlogListComponent;