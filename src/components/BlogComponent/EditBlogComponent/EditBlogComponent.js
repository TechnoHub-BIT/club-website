import React from "react";
import "./EditBlogComponent.css";
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
import AddCategory from "../../AddBlogComponent/AddCategoryComponent/AddCategoryComponent";
import { Helmet } from "react-helmet";
import { render } from "@testing-library/react";


class Editblog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogtitle: '',
            blogcategory: '',
            blogauthor: '',
            blogimageurl: '',
            blogdate: '',
            blogcontent: ''
        }
    }

    componentDidCatch() {
        db.collection('Blogs').get().then((doc) => {
            const document = doc.data();
            this.setState({
                id: doc.id,
                blogtitle: document.blogtitle,
                blogcategory: document.blogcategory,
                blogauthor: document.blogauthor,
                blogimageurl: document.blogimageurl,
                blogdate: document.blogdate,
                blogcontent: document.blogcontent
            })
        })
    }
 

    handleOnChange  = (e) => {
    const state = this.state;
    state[e.target.blogtitle] = e.target.value;
    this.setState({document:state});
}

handleOnChange  = (e) => {
    const state = this.state;
    state[e.target.blogauthor] = e.target.value;
    this.setState({document:state});
}
handleOnChange  = (e) => {
    const state = this.state;
    state[e.target.blogcategory] = e.target.value;
    this.setState({document:state});
}
handleOnChange  = (e) => {
    const state = this.state;
    state[e.target.imageurl] = e.target.value;
    this.setState({document:state});
}
handleOnChange  = (e) => {
    const state = this.state;
    state[e.target.content] = e.target.value;
    this.setState({document:state});
}
onSubmit = (e)=>{
    e.preventDefault();
    const {blogtitle ,blogauthor,blogcategory,blogcontent,blogimageurl} = this.state;
    const updateref = db.collection('Blogs').doc(this.state.id);
    updateref.set({
        blogtitle ,
        blogauthor,
        blogcategory,
       
        blogimageurl,
        blogcontent


    }).then((docref) => {
        this.setState({
          
            blogtitle: '' ,
            blogauthor: '',
            blogcategory: '',
           
            blogimageurl: '',
            blogcontent: ''
        })
    })
}


    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>Edit Blog | TechnoHub BITD</title>
                </Helmet>
                <div class="editBlogContainer">
                    <HeaderTitle heading="EDIT BLOG" />
                    <Breadcrumb>
                        <BreadcrumbItem icon="fas fa-home" title="Home" path="/" />
                        <BreadcrumbItem icon="fas fa-pencil-alt" title="Edit Blog" status="active" />
                    </Breadcrumb>
                    <div className="formsCont">
                        <form>
                            <div className="title">
                                <h3>Edit Blog</h3>
                            </div>
                            <div className="input-group">
                                <input type="text" name="title" id="title" onChange={this.handleOnChange} value={this.state.blogtitle} placeholder="Blog Title" required />
                                <label for="title">Blog Title</label>
                            </div>
                            <div className="input-group">
                                <AddCategory onChange={this.category} value={this.state.blogcategory} />
                            </div>
                            <div className="input-group">
                                <input type="text" name="author" id="author" onChange={this.author} value={this.state.blogauthor} placeholder="Blog Author" required />
                                <label for="author">Blog Author</label>
                            </div>
                            <div className="input-group">
                                <input type="text" name="image" id="image" onChange={this.imageurl} value={this.state.blogimageurl} placeholder="Blog Image" required />
                                <label for="image">Blog Image Drive ID(1920x1080)</label>
                            </div>
                            <div className="summernote">
                                <ReactSummernote
                                    value={this.state.blogcontent}
                                    options={{
                                        lang: 'en-US',
                                        height: 350,
                                        dialogsInBody: true,
                                        toolbar: [
                                            ['font', ['bold', 'underline']],
                                            ['para', ['ul', 'ol', 'paragraph']],
                                            ['insert', ['link', 'picture']],
                                            ['view', ['codeview']]
                                        ]
                                    }}
                                    onChange={this.onChange}
                                />
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
export default Editblog;





































//import { useAuth } from "../../contexts/AuthContext";

// export default function Editblog() {



//     const [blogedit, setblogs] = React.useState([]);


//     React.useEffect(() => {
//         const fetchdata = async () => {
//             db.collection("Blogs")
//                 .onSnapshot(function (data) {
//                     setblogs(data.docs.map(doc => ({
//                         ...doc.data(), id: doc.id
//                     })));
//                 })
//         }
//         fetchdata();
//     }, []);

//     //const {currentUser} = useAuth();
//     //const [currentProfile, setCurrentProfile] = useState('');

//     const [blogtitle, setTitle] = useState('');
//     const handleOnChange = (e) => {
//         setTitle(e.target.value);
//     };

//     const [blogcategory, setCategory] = useState('');
//     const category = (e) => {
//         setCategory(e.target.value);
//     };
//     const [blogauthor, setAuthor] = useState('');
//     const author = (e) => {
//         setAuthor(e.target.value);
//     };
//     const [blogimageurl, setImageUrl] = useState('');
//     const imageurl = (e) => {
//         setImageUrl(e.target.value);
//     };
//     const [blogcontent, setContent] = useState('');
//     const content = (param) => {
//         setContent(param);
//     };
//     const blogdate = new Date().toLocaleDateString();



//     const firestoremaisave = (e) => {
//         if (blogtitle !== '' && blogauthor !== '' && blogcategory !== '' && blogimageurl !== '') {
//             e.preventDefault();
//             db.collection("Blogs").add({
//                 blogtitle: blogtitle,
//                 blogcategory: blogcategory,
//                 blogauthor: blogauthor,
//                 blogimageurl: blogimageurl,
//                 blogdate: blogdate,
//                 blogcontent: blogcontent

//             })
//                 .then(() => {
//                     alert("Blog Posted!");
//                 })
//                 .catch((error) => {
//                     alert(error.message);
//                 });

//         }
//         else {
//             alert("Please fill in all the details!");
//         }

//     }
//     const [blogupdate, setupdate] = useState('');

//     // React.useEffect(() => {

//     //     db.collection('Blogs').get()
//     //         .then((doc) => {
//     //             const document = doc.data();
//     //             setupdate({
//     //                 id: doc.id,
//     //                 blogtitle: document.blogtitle,
//     //                 blogcategory: document.blogcategory,
//     //                 blogauthor: document.blogauthor,
//     //                 blogimageurl: document.blogimageurl,
//     //                 blogdate: document.blogdate,
//     //                 blogcontent: document.blogcontent
//     //             })
//     //         })
//     // })

//     React.useEffect(() => {
//         const fetchdata = async () => {
//             db.collection("Blogs")
//                 .onSnapshot(function (data) {
//                     setupdate(data.docs.map(doc => ({
//                          id: doc.id,

//                                         blogtitle: document.blogtitle,
//                                         blogcategory: document.blogcategory,
//                                         blogauthor: document.blogauthor,
//                                         blogimageurl: document.blogimageurl,
//                                         blogdate: document.blogdate,
//                                         blogcontent: document.blogcontent
//                     })));
//                 })
//         }
//         fetchdata();
//     }, []);
















//     //     const [blogs,setedit] = useState([]);
//     //     const ref = db.collection('Blogs');

//     //     function getdata() {
//     //     ref.onSnapshot((querySnapshot) => {
//     //         const items = [];
//     //         querySnapshot.forEach((doc) => {
//     //             items.push(doc.data());
//     //         });
//     //         setedit(items);
//     //     })
//     //     }
//     // useEffect(() => {
//     //   getdata();

//     // }, [])

//     // function deleteblog(){
//     //     ref.doc().delete()
//     //     .catch((err) => {
//     //         console.error(err);
//     //     })
//     // }

//     // function editblog(updateblog){
//     //     ref.doc().update(updateblog)
//     //     .catch((err) => {
//     //         console.error(err);
//     //     })
//     // }

//     // const [blogcategorytype, setblogcategortype] = useState('');
//     // const categoryname = (e) => {
//     //     setblogcategortype(e.target.value);
//     // };
//     // const [blogcategorynameurl, setblogcategorynameurl] = useState('');
//     // const categorynameurl = (e) => {
//     //     setblogcategorynameurl(e.target.value);
//     // };


//     //     const blogcategorysave = (e) => {
//     //         if ( blogcategorytype !== '' && blogcategorynameurl !== '' ) {
//     //         e.preventDefault();
//     //         db.collection("Blogcategory").add({
//     //             blogcategorytype: blogcategorytype,
//     //             blogcategorynameurl: blogcategorynameurl
//     //         })
//     //             .then(() => {
//     //                 alert("Blog category added");
//     //             })
//     //             .catch((error) => {
//     //                 alert(error.message);
//     //             });
//     //     }
//     //     else {
//     //         alert("Please fill in all the details");
//     //     }
//     // }
//     /*if (currentUser) {
//         db.collection("members")
//             .doc(currentUser.uid)
//             .onSnapshot(function (doc) {
//                 const data = doc.data();
//                 setCurrentProfile(data);
//             });
//     }*/

//     const onChange = (value) => {
//         content(value);
//     }

//     return (
//         <React.Fragment>
//             {
//                 //(currentProfile.id === 1 || currentProfile.id === 3) &&
//                 <div className="addBlogContainer">
//                     <HeaderTitle heading="EDIT BLOG" />
//                     <Breadcrumb>
//                         <BreadcrumbItem icon="fas fa-home" title="Home" path="/" />
//                         <BreadcrumbItem icon="fas fa-plus fa-xs" title="Add Blog" status="active" />
//                     </Breadcrumb>

//                     <div className="formsCont">
//                         <form  >
//                             <div className="title">
//                                 <h3>Edit Blog</h3>
//                             </div>
//                             <div className="input-group">
//                                 {/* {blogs.map((blog) => ( */}


//                                 <input type="text" name="title" id="title" onChange={handleOnChange} value={blogtitle} placeholder="Blog Title" required />
//                                 {/* ))} */}
//                                 <label for="title">Blog Title</label>
//                             </div>
//                             <div className="input-group">
//                                 <AddCategory change={category} value={blogcategory} />
//                             </div>
//                             <div className="input-group">
//                                 <input type="text" name="author" id="author" onChange={author} value={blogauthor} placeholder="Blog Author" required />
//                                 <label for="author">Blog Author</label>
//                             </div>
//                             <div className="input-group">
//                                 <input type="text" name="image" id="image" onChange={imageurl} value={blogimageurl} placeholder="Blog Image" required />
//                                 <label for="image">Blog Image Drive ID(1920x1080)</label>
//                             </div>
//                             <div className="summernote">
//                                 <ReactSummernote
//                                     value={blogcontent}
//                                     options={{
//                                         lang: 'en-US',
//                                         height: 350,
//                                         dialogsInBody: true,
//                                         toolbar: [
//                                             ['font', ['bold', 'underline']],
//                                             ['para', ['ul', 'ol', 'paragraph']],
//                                             ['insert', ['link', 'picture']],
//                                             ['view', ['codeview']]
//                                         ]
//                                     }}
//                                     onChange={onChange}
//                                 />
//                             </div>
//                             <div className="input-group w50p">
//                                 <button type="submit" onClick={firestoremaisave}>Update Blog</button>
//                             </div>
//                         </form>
//                         {/* <form action="/addblog">
//                             <div className="title">
//                                 <h3>Add Category</h3>
//                             </div>
//                             <div className="input-group">
//                                 <input type="text" name="cname" id="cname" onChange={categoryname} value={blogcategorytype} placeholder="Category Name" required />
//                                 <label for="cname">Category Name</label>
//                             </div>
//                             <div className="input-group">
//                                 <input type="text" name="cimage" id="cimage" onChange={categorynameurl} value={blogcategorynameurl} placeholder="Category Image Drive ID" required />
//                                 <label for="cimage">Category Image Drive ID(1920x1080)</label>
//                             </div>
//                             <div className="input-group w50p">
//                                 <button type="submit" onClick={blogcategorysave}>Add Category</button>
//                             </div>
//                         </form> */}
//                     </div>
//                 </div>
//             }
//         </React.Fragment>
//     );
// };