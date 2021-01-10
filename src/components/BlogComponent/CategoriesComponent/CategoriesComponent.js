import React from "react";
import "./CategoriesComponent.css";
import { Breadcrumb, BreadcrumbItem } from "../../BreadcrumbComponent/BreadcrumbComponent";
import HeadingTitle from "../../HeaderComponents/HeaderTitle";

const categoriesComponent = () => {
    return(
        <React.Fragment>
            <div>
                <HeadingTitle heading="BLOG CATEGORIES" />
                <Breadcrumb>
                    <BreadcrumbItem icon="fas fa-home" title="Home" path="/" />
                    <BreadcrumbItem icon="fas fa-th-large" title="Blog Categories" status="active" />
                </Breadcrumb>
                <div className="categoriesCont">
                    <div className="categoriesList">
                        <a href="/blog?cat=technical" className="singleCategory">
                            <div className="categoryTitle">Technical</div>
                            <div className="posts">12+</div>
                        </a>
                        <a href="/blog" className="singleCategory">
                            <div className="categoryTitle">Non-Technical</div>
                            <div className="posts">10+</div>
                        </a>
                        <a href="/blog" className="singleCategory">
                            <div className="categoryTitle">Non-Technical</div>
                            <div className="posts">10+</div>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default categoriesComponent;