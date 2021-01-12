import React, { useState, useEffect } from "react";
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import { Breadcrumb, BreadcrumbItem } from "../BreadcrumbComponent/BreadcrumbComponent";
import "../AddBlogComponent/AddBlogComponent.css";
import "../input.css";
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/tooltip';
import 'bootstrap/dist/css/bootstrap.css';
import { db } from "../../firebase";
import AddCategory from "../AddBlogComponent/AddCategoryComponent/AddCategoryComponent";

//import { useAuth } from "../../contexts/AuthContext";

export default function Editblog() {

    //const {currentUser} = useAuth();
    //const [currentProfile, setCurrentProfile] = useState('');

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
    const content = (param) => {
        setContent(param);
    };
    const blogdate = new Date().toLocaleDateString();



    const firestoremaisave = (e) => {
        if (blogtitle !== '' && blogauthor !== '' && blogcategory !== '' &&  blogimageurl !== '') {
            e.preventDefault();
            db.collection("Blogs").add({
                blogtitle: blogtitle,
                blogcategory: blogcategory,
                blogauthor: blogauthor,
                blogimageurl: blogimageurl,
                blogdate: blogdate,
                blogcontent: blogcontent

            })
                .then(() => {
                    alert("Blog Posted!");
                })
                .catch((error) => {
                    alert(error.message);
                });

        }
        else {
            alert("Please fill in all the details!");
        }

    }

//     const [blogs,setedit] = useState([]);
//     const ref = db.collection('Blogs');

//     function getdata() {
//     ref.onSnapshot((querySnapshot) => {
//         const items = [];
//         querySnapshot.forEach((doc) => {
//             items.push(doc.data());
//         });
//         setedit(items);
//     })
//     }
// useEffect(() => {
//   getdata();
  
// }, [])

// function deleteblog(){
//     ref.doc().delete()
//     .catch((err) => {
//         console.error(err);
//     })
// }

// function editblog(updateblog){
//     ref.doc().update(updateblog)
//     .catch((err) => {
//         console.error(err);
//     })
// }

    // const [blogcategorytype, setblogcategortype] = useState('');
    // const categoryname = (e) => {
    //     setblogcategortype(e.target.value);
    // };
    // const [blogcategorynameurl, setblogcategorynameurl] = useState('');
    // const categorynameurl = (e) => {
    //     setblogcategorynameurl(e.target.value);
    // };


//     const blogcategorysave = (e) => {
//         if ( blogcategorytype !== '' && blogcategorynameurl !== '' ) {
//         e.preventDefault();
//         db.collection("Blogcategory").add({
//             blogcategorytype: blogcategorytype,
//             blogcategorynameurl: blogcategorynameurl
//         })
//             .then(() => {
//                 alert("Blog category added");
//             })
//             .catch((error) => {
//                 alert(error.message);
//             });
//     }
//     else {
//         alert("Please fill in all the details");
//     }
// }
    /*if (currentUser) {
        db.collection("members")
            .doc(currentUser.uid)
            .onSnapshot(function (doc) {
                const data = doc.data();
                setCurrentProfile(data);
            });
    }*/

    const onChange = (value) => {
        content(value);
    }

    return (
        <React.Fragment>
            {
                //(currentProfile.id === 1 || currentProfile.id === 3) &&
                <div className="addBlogContainer">
                    <HeaderTitle heading="EDIT BLOG" />
                    <Breadcrumb>
                        <BreadcrumbItem icon="fas fa-home" title="Home" path="/" />
                        <BreadcrumbItem icon="fas fa-plus fa-xs" title="Add Blog" status="active" />
                    </Breadcrumb>

                    <div className="formsCont">
                        <form  >
                            <div className="title">
                                <h3>Edit Blog</h3>
                            </div>
                            <div className="input-group">
                                {/* {blogs.map((blog) => ( */}

                               
                                <input type="text" name="title" id="title" onChange={handleOnChange} value={blogtitle} placeholder="Blog Title" required />
                                {/* ))} */}
                                <label for="title">Blog Title</label>
                            </div>
                            <div className="input-group">
                                <AddCategory change={category} value={blogcategory} />
                            </div>
                            <div className="input-group">
                                <input type="text" name="author" id="author" onChange={author} value={blogauthor} placeholder="Blog Author" required />
                                <label for="author">Blog Author</label>
                            </div>
                            <div className="input-group">
                                <input type="text" name="image" id="image" onChange={imageurl} value={blogimageurl} placeholder="Blog Image" required />
                                <label for="image">Blog Image Drive ID(1920x1080)</label>
                            </div>
                            <div className="summernote">
                                <ReactSummernote
                                    value={blogcontent}
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
                                    onChange={onChange}
                                />
                            </div>
                            <div className="input-group w50p">
                                <button type="submit" onClick={firestoremaisave}>Post Blog</button>
                            </div>
                        </form>
                        {/* <form action="/addblog">
                            <div className="title">
                                <h3>Add Category</h3>
                            </div>
                            <div className="input-group">
                                <input type="text" name="cname" id="cname" onChange={categoryname} value={blogcategorytype} placeholder="Category Name" required />
                                <label for="cname">Category Name</label>
                            </div>
                            <div className="input-group">
                                <input type="text" name="cimage" id="cimage" onChange={categorynameurl} value={blogcategorynameurl} placeholder="Category Image Drive ID" required />
                                <label for="cimage">Category Image Drive ID(1920x1080)</label>
                            </div>
                            <div className="input-group w50p">
                                <button type="submit" onClick={blogcategorysave}>Add Category</button>
                            </div>
                        </form> */}
                    </div>
                </div>
            }
        </React.Fragment>
    );
};