import React, { useState,useEffect } from "react";
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
import AddCategory from "./AddCategoryComponent/AddCategoryComponent";

export default function AddBlogComponent() {

//   useEffect(() => {
//     const bloglist =  db.collection('Blogcategory');
//     bloglist.onSnapshot('value',(snapshot) =>{
//         const blogsc = snapshot.val();
//         const blogcategorytype = [];
//         for(let id in blogsc){
//             blogcategorytype.push(blogsc[id]);
//         }
//         setblogcategortype(blogcategorytype);
//     });

//     },[]);

//    const [blogcategorytype, setblogcategortype] = React.useState([])

//  React.useEffect(() => {
//     const fetchdata = async () =>{

//     const data = await db.collection('Blogcategory')
//         .get()
//         setblogcategortype(data.docs.map(doc=> doc.data()))
//     }
//     fetchdata()
// },[])
 
 useEffect(() => {
    db.collection('Blogcategory')
    .get()
    .then(snapshot => {

        const  Blogcategorytype = []
        snapshot.forEach(doc => {
            const data = doc.data()
            Blogcategorytype.push(data)
        })
        setblogcategortype(Blogcategorytype)
    });
},[]);

    const [blogtitle, setTitle] = useState('');
    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };

    const [ Blogcategory, setCategory] = useState('');
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
    
    const blogcategorysave = (e) => {
        e.preventDefault();
        db.collection("Blogcategory").add({
        
            Blogcategorytype: Blogcategorytype
        })
            .then(() => {
                alert("Blogcategory added!");
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

                <div className="formsCont">
                    <form action="/contactus">
                        <div className="title">
                            <h3>Post Blog</h3>
                        </div>
                        <div className="input-group">
                            <input type="text" name="title" id="title" onChange={handleOnChange} value={blogtitle} placeholder="Blog Title" required />
                            <label for="title">Blog Title</label>
                        </div>
                        <div className="input-group">
                       
                       
                            <select name="category" onChange={category} value={Blogcategory} id="category" required>
                                {/* {blogcategorytype.map(blogc => (

                                    <options>{blogc.blogcategorytype}</options>
                                ))}
                                {/* <option>select--1--</option>
                                <option>select--2--</option> */} */

                            {
                                Blogcategorytype ?  Blogcategorytype.map((Blogcategorytype) =>  
                               
                                <option >{Blogcategorytype. Blogcategorytype}</option>
                                   
                                       ): ''} 
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
                    
                    <AddCategory />

                </div>
            </div>
        </React.Fragment>
    );
};

