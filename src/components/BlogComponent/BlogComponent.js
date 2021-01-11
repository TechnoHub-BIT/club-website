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
import queryString from "./query";
import { Alert, ButtonToggle } from 'reactstrap';
import Moment from 'moment';
// import { render } from "@testing-library/react";

class BlogComponent extends React.Component {
    state = {
        Blogs: null,
        queryString: queryString("blog"),
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

    render() {
        let counter = 0;
        return (
            <React.Fragment>
                <div className="blogContainer">
                    <div className="blogContents">
                        {
                            this.state.Blogs && this.state.Blogs.map(Blogs => {
                                if(Blogs.blogtitle === this.state.queryString[0] && Blogs.blogauthor === this.state.queryString[1]) {
                                    counter++;

                                    const newTitle = Blogs.blogtitle.replace(/ /g, "%20");
                                    const newAuthor = Blogs.blogauthor.replace(/ /g, "%20");

                                    const shareUrl = "http://technohubbit.in/blog?title=" + newTitle + "&author=" + newAuthor;
                                    const shareText = "\n\nHere's TechnoHub's blog post on \"" + Blogs.blogtitle + "\" by " + Blogs.blogauthor + ".\n\n";

                                    return (
                                        <div>
                                            <div className="blogHeader">
                                                <img src={"https://drive.google.com/uc?export=view&id=" + Blogs.blogimageurl} className="blogImage" />
                                                <div className="headerContent">
                                                    <div className="blogTitle">{Blogs.blogtitle}</div>
                                                    <div className="blogAuthor">by {Blogs.blogauthor}</div>
                                                    <div className="blogDate">Posted on {Moment(Blogs.blogdate).format('ll')}</div>
                                                    <div>
                                                        <button className="blogCategory">{Blogs.blogcategory}</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: Blogs.blogcontent
                                                }}
                                                className="blogDetails"
                                            >
                                            </div>
                                            <div className="shareButtons">
                                                <h6>Share on:</h6>
                                                <FacebookShareButton url={shareUrl} quote={shareText}>
                                                    <FacebookIcon size="32" round={true} />
                                                </FacebookShareButton>
                                                <TwitterShareButton url={shareUrl} title={shareText}>
                                                    <TwitterIcon size="32" round={true} />
                                                </TwitterShareButton>
                                                <WhatsappShareButton url={shareUrl} title={shareText}>
                                                    <WhatsappIcon size="32" round={true} />
                                                </WhatsappShareButton>
                                                <TelegramShareButton url={shareUrl} title={shareText}>
                                                    <TelegramIcon size="32" round={true} />
                                                </TelegramShareButton>
                                                <LinkedinShareButton url={shareUrl} title={shareText}>
                                                    <LinkedinIcon size="32" round={true} />
                                                </LinkedinShareButton>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                        {
                            counter === 0 ? 
                                <div>
                                    <Alert color="danger" style={{textAlign: "center"}}>
                                        Oops! Looks like this blog does not exist.
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

export default BlogComponent;