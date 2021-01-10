import React from "react";
import "./BlogComponent.css";
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
} from "react-share";

import { db } from "../../firebase";
// import { render } from "@testing-library/react";

class BlogComponent extends React.Component {
    state = {
        Blogs: null,
    }
 
    componentDidMount() {
        // console.log('mounted')
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

    shareUrl = "https://technohubbit.in";

    render() {
        return (
            <React.Fragment>
                <div className="blogContainer">
                    <div className="blogContents">
                        {
                            this.state.Blogs && this.state.Blogs.map(Blogs => {
                                return (
                                    <div>
                                        <div className="blogHeader">
                                            <img src={"https://drive.google.com/uc?export=view&id=" + Blogs.blogimageurl} className="blogImage" />
                                            <div className="headerContent">
                                                <div className="blogTitle">  {Blogs.blogtitle}</div>
                                                <div className="blogAuthor">  {Blogs.blogauthor}</div>

                                                <div className="blogDate">{Blogs.blogdate}</div>
                                                <div>
                                              
                                                            <button className="blogCategory">{Blogs.blogcategory}</button>
                                             
                                                </div>
                                            </div>
                                        </div>
                                        <div className="blogDetails">
                                            <p>
                                                {Blogs.blogcontent}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <div className="shareButtons">
                            <h6>Share on:</h6>
                            <FacebookShareButton url={this.shareUrl} quote="Check out this amazing Blog from Aaryan Khandelwal">
                                <FacebookIcon size="32" round={true} />
                            </FacebookShareButton>
                            <TwitterShareButton url={this.shareUrl} title="Check out this amazing Blog from Aaryan Khandelwal">
                                <TwitterIcon size="32" round={true} />
                            </TwitterShareButton>
                            <WhatsappShareButton url={this.shareUrl} title="Check out this amazing Blog from Aaryan Khandelwal">
                                <WhatsappIcon size="32" round={true} />
                            </WhatsappShareButton>
                            <TelegramShareButton url={this.shareUrl} title="Check out this amazing Blog from Aaryan Khandelwal">
                                <TelegramIcon size="32" round={true} />
                            </TelegramShareButton>
                            <LinkedinShareButton url={this.shareUrl} title="Check out this amazing Blog from Aaryan Khandelwal">
                                <LinkedinIcon size="32" round={true} />
                            </LinkedinShareButton>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );

    }

};

export default BlogComponent;