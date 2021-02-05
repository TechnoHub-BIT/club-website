<<<<<<< HEAD
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
import { Alert, ButtonToggle } from 'reactstrap';
import Moment from 'moment';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import HeaderTitle from "../HeaderComponents/HeaderTitle";
import { Zoom, Fade } from 'react-reveal';


function BlogComponent() {

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
    /*let bitlyURL;
    
    async function shortenURL(url) {
        const { BitlyClient } = require('bitly-react');
        const bitly = new BitlyClient('b59f838b3679e007289c4d954d190df966316c19', {});

        let result;
        try {
            result = await bitly.shorten(url);
        } catch(e) {
            throw e;
        }
        alert(result.url);
    };
    shortenURL("https://youtube.com/codegrind")*/

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
                                               
                                                <button onClick={() => onDelete(Blogs.id)}>Delete</button> */}

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

=======
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

function BlogComponent() {

    const {currentUser} = useAuth();
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
    let checkImage = "1aQ-CNfTMTdWRnTsPzNtR_nyFjOMI21-2";
    /*let bitlyURL;
    
    async function shortenURL(url) {
        const { BitlyClient } = require('bitly-react');
        const bitly = new BitlyClient('b59f838b3679e007289c4d954d190df966316c19', {});

        let result;
        try {
            result = await bitly.shorten(url);
        } catch(e) {
            throw e;
        }
        alert(result.url);
    };
    shortenURL("https://youtube.com/codegrind")*/

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

                        checkImage = Blogs.blogimageurl;

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
                                             
                                                {/* <Link to={"/editblog?id=" + Blogs.id}>Edit</Link> */}

                                                {
                                                    (currentProfile.id === 1 || currentProfile.id === 3) &&
                                                        <Button color="danger" onClick={() => onDelete(Blogs.id)}>Delete Blog Permanently</Button>
                                                }

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
                        <title>Blog by { checkAuthor } | TechnoHub BITD</title>
                        <meta name="title" content={ "TechnoHub Blogs- " + checkTitle } />

                        {/* Facebook Share */}
                        <meta
                            property="og:title"
                            content={ "TechnoHub Blogs- " + checkTitle }
                        />
                        <meta
                            property="og:description"
                            content="TechnoHub Blogs are a great way to increase your knowldge from every field."
                        />
                        <meta
                            property="og:image:secure_url"
                            itemprop="image"
                            content={ "https://drive.google.com/uc?export=view&id=" + checkImage }
                        />
                        

                        {/* Twitter Share */}
                        <meta
                            name="twitter:title"
                            content={ "TechnoHub Blogs- " + checkTitle }
                        />
                        <meta
                            name="twitter:description"
                            content="TechnoHub Blogs are a great way to increase your knowldge from every field."
                        />
                        <meta
                            name="twitter:image"
                            content={ "https://drive.google.com/uc?export=view&id=" + checkImage }
                        />
                    </Helmet>
            }
        </React.Fragment>
    );
}

>>>>>>> 9bd0de27dd3ffdd9b5444dd29eaa282fc9183ca9
export default BlogComponent;