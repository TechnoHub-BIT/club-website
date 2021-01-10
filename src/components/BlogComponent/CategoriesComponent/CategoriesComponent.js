import React from "react";
import "./CategoriesComponent.css";
import { Breadcrumb, BreadcrumbItem } from "../../BreadcrumbComponent/BreadcrumbComponent";
import HeadingTitle from "../../HeaderComponents/HeaderTitle";
import { db } from "../../../firebase";

class categoriesComponent extends React.Component {
    state = {
        Blogcategory: null
    }

    componentDidMount() {
        // console.log('mounted')
        db.collection('Blogcategory')
            .get()
            .then(snapshot => {

                const  Blogcategory = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    Blogcategory.push(data)
                })
                this.setState({ Blogcategory: Blogcategory })
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
                                this.state.Blogcategory && this.state.Blogcategory.map(Blogcategory => {
                                    return (
                                        
                                        <a href="/blog?cat=technical" className="singleCategory">
                                <div className="categoryTitle">{Blogcategory.blogcategorytype} </div>
                                <div className="posts">12+</div>
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