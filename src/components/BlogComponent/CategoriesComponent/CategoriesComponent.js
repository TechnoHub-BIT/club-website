import React from "react";
import "./CategoriesComponent.css";
import { Breadcrumb, BreadcrumbItem } from "../../BreadcrumbComponent/BreadcrumbComponent";
import HeadingTitle from "../../HeaderComponents/HeaderTitle";
import { db } from "../../../firebase";

class categoriesComponent extends React.Component {
    state = {
        Blogcategorytype: null
    }

    componentDidMount() {
        // console.log('mounted')
        db.collection('Blogcategory')
            .get()
            .then(snapshot => {

                const  Blogcategorytype = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    Blogcategorytype.push(data)
                })
                this.setState({  Blogcategorytype:  Blogcategorytype })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <HeadingTitle heading="BLOG CATEGORIES" />
                    <Breadcrumb>
                        <BreadcrumbItem icon="fas fa-home" title="Home" path="/" />
                        <BreadcrumbItem icon="fas fa-th-large" title="Blog Categories" status="active" />
                    </Breadcrumb>
                    <div className="categoriesCont">
                        <div className="categoriesList">
                            {
                                this.state.Blogcategorytype && this.state.Blogcategorytype.map( Blogcategorytype => {
                                    return (
                                        <a href={"/bloglist?cat=" + Blogcategorytype.blogcategorytype} className="singleCategory">
                                            <img src={"https://drive.google.com/uc?export=view&id=" + Blogcategorytype.blogcategorynameurl} className="categoryImage" />
                                            <div className="categoryContent">
                                                <div className="categoryTitle">{ Blogcategorytype.blogcategorytype } Blogs</div>
                                                <div className="posts">12+</div>
                                            </div>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );

    }

};
export default categoriesComponent;
