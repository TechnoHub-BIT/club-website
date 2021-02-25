import React, { useState, useEffect } from "react";
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
import { Alert, Button, ButtonToggle } from 'reactstrap';
import Moment from 'moment';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import { Zoom, Fade } from 'react-reveal';
import { useAuth } from "../../contexts/AuthContext";
import LikeButton from './LikeButton'

function BlogComponent() {

    const { currentUser } = useAuth();
    const [currentProfile, setCurrentProfile] = useState('');
    if (currentUser) {
        db.collection("members")
            .doc(currentUser.uid)
            .onSnapshot(function (doc) {
                const data = doc.data();
                setCurrentProfile(data);
            });
    }

    const qur = queryString("blog");

    const [blogedit, setblogs] = useState([]);

    useEffect(() => {
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

    const setCharAt = (str, index, chr) => {
        if (index > str.length - 1) return str;
        return (str.substring(0, index) + chr + str.substring(index + 1));
    }

    const getIndices = (str) => {
        let indices = [];

        for (let i = 0; i < str.length; i++) {
            let char = str.charAt(i);

            if (char === " ")
                indices.push(i);
        }
        return indices;
    }

    let checkTitle = qur[0].replace(/-/g, " ");

    for (let i = 0; i < getIndices(qur[0]).length; i++) {
        checkTitle = setCharAt(checkTitle, getIndices(qur[0])[i], "-");
    }

    const checkAuthor = qur[1].replace(/-/g, " ");

    let counter = 0;

    return (
        <React.Fragment>
            {
                blogedit.map(Blogs => {
                    if (Blogs.blogtitle === checkTitle && Blogs.blogauthor === checkAuthor) {
                        counter++;

                        const blogTitle = Blogs.blogtitle.replace(/-/g, "%20");
                        const newTitle = blogTitle.replace(/ /g, "-");

                        const blogAuthor = Blogs.blogauthor.replace(/-/g, "%20");
                        const newAuthor = blogAuthor.replace(/ /g, "-");

                        const shareUrl = "http://technohubbit.in/blogpost?title=" + newTitle + "&author=" + newAuthor;
                        const shareText = "\n\nHere's TechnoHub's blog post on \"" + Blogs.blogtitle + "\" by " + Blogs.blogauthor + ".\n\n";

                        return (
                            <div>
                                <HeaderTitle heading={Blogs.blogtitle} blogImage={Blogs.blogimageurl} author={Blogs.blogauthor} date={Moment(Blogs.blogdate).format('ll')} />
                                <div className="blogContainer">
                                    <div className="blogContents">
                                        <div>
                                            <Fade>
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: Blogs.blogcontent
                                                    }}
                                                    className="blogDetails"
                                                >
                                                </div>

                                                {/* //  Edit and Delete Blog Buttons */}

                                                {/* <Link to={"/editblog?id=" + Blogs.id}>Edit</Link>

                                                {
                                                    (currentProfile.id === 1) &&
                                                    <Button color="danger" onClick={() => onDelete(Blogs.id)}>Delete Blog Permanently</Button>
                                                }

                                                <LikeButton like={Blogs} /> */}

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
                                            </Fade>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
            {
                counter === 0 ?
                    <div className="errorMessage">
                        <Helmet>
                            <title>Blogs | TechnoHub BITD</title>
                        </Helmet>
                        <Zoom>
                            <Alert color="danger" style={{ textAlign: "center" }}>
                                Oops! Looks like this blog does not exist.
                                <br />
                                <a href="/blog"><ButtonToggle color="danger">Go Back</ButtonToggle></a>
                            </Alert>
                        </Zoom>
                    </div>
                    :
                    <Helmet>
                        <title>Blog post by {checkAuthor} | TechnoHub BITD</title>
                        <meta name="title" content={checkTitle} />
                    </Helmet>
            }
        </React.Fragment>
    );
}

export default BlogComponent;