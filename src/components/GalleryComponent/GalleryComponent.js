import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "../BreadcrumbComponent/BreadcrumbComponent";
import "./GalleryComponent.css";
import HeadingTitle from "../HeaderComponents/HeaderTitle";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Helmet } from "react-helmet";
import { Zoom } from 'react-reveal';

class gallery extends Component {
  
    state = {
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        }
    }

    render() {
        return(
            <React.Fragment>
                <Helmet>
                    <title>Gallery | TechnoHub BITD</title>
                </Helmet>
                <HeadingTitle heading="GALLERY" image="gallery.jpg" />
                <div className="gallery-container">
                    <Breadcrumb>
                        <BreadcrumbItem icon="fas fa-home" title="Home" path="/" />
                        <BreadcrumbItem icon="fas fa-images" title="Gallery" status="active" />
                    </Breadcrumb>
                    <div className="container">
                        <Zoom>
                            <div className="row">
                                <div className="title">
                                    <h2>Tech-Expo @ Ojas2019</h2>
                                </div>
                                <div className="container">
                                    <div className="gallery">
                                        <OwlCarousel
                                            className="owl-theme"
                                            margin={10}
                                            loop
                                            autoplay
                                            autoplayTimeout={1500}
                                            autoplayHoverPause
                                            dotsEach
                                            responsive={this.state.responsive}
                                        >
                                            <div>
                                                <img src="./assets/images/gallery/tech-expo/1.jpeg" alt="" />
                                            </div>
                                            <div>
                                                <img src="./assets/images/gallery/tech-expo/2.jpeg" alt="" />
                                            </div>
                                            <div>
                                                <img src="./assets/images/gallery/tech-expo/3.jpeg" alt="" />
                                            </div>
                                            <div>
                                                <img src="./assets/images/gallery/tech-expo/4.jpeg" alt="" />
                                            </div>
                                            <div>
                                                <img src="./assets/images/gallery/tech-expo/5.jpeg" alt="" />
                                            </div>
                                            <div>
                                                <img src="./assets/images/gallery/tech-expo/6.jpeg" alt="" />
                                            </div>
                                            <div>
                                                <img src="./assets/images/gallery/tech-expo/7.jpeg" alt="" />
                                            </div>
                                            <div>
                                                <img src="./assets/images/gallery/tech-expo/8.jpeg" alt="" />
                                            </div>
                                            <div>
                                                <img src="./assets/images/gallery/tech-expo/9.jpeg" alt="" />
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="title">
                                    <h2>GSEA</h2>
                                </div>
                                <div className="container">
                                    <div className="gallery">
                                        <OwlCarousel
                                            className="owl-theme"
                                            margin={10}
                                            autoplay
                                            autoplayTimeout={1500}
                                            autoplayHoverPause
                                            dotsEach
                                            responsive={this.state.responsive}
                                        >
                                            <div>
                                                <img src="./assets/images/gallery/gsea/1.jpg" alt="" />
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="title">
                                    <h2>How to position yourself for the future?</h2>
                                </div>
                                <div className="container">
                                    <div className="gallery">
                                        <OwlCarousel
                                            className="owl-theme"
                                            margin={10}
                                            loop
                                            autoplay
                                            autoplayTimeout={1500}
                                            autoplayHoverPause
                                            dotsEach
                                            responsive={this.state.responsive}
                                        >
                                            <div>
                                                <img src="./assets/images/gallery/feb-20/1.jpg" alt="" />
                                            </div>
                                            <div>
                                                <img src="./assets/images/gallery/feb-20/2.jpg" alt="" />
                                            </div>
                                            <div>
                                                <img src="./assets/images/gallery/feb-20/3.jpg" alt="" />
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="title">
                                    <h2>Robotics Workshop</h2>
                                </div>
                                <div className="container">
                                    <div className="gallery">
                                        <OwlCarousel
                                            className="owl-theme"
                                            margin={10}
                                            loop
                                            autoplay
                                            autoplayTimeout={1500}
                                            autoplayHoverPause
                                            dotsEach
                                            responsive={this.state.responsive}
                                        >
                                            <div>
                                                <img src="./assets/images/gallery/robotics-workshop/1.jpg" alt="" />
                                            </div>
                                            <div>
                                                <img src="./assets/images/gallery/robotics-workshop/2.jpg" alt="" />
                                            </div>
                                            <div>
                                                <img src="./assets/images/gallery/robotics-workshop/3.jpg" alt="" />
                                            </div>
                                            <div>
                                                <img src="./assets/images/gallery/robotics-workshop/4.jpg" alt="" />
                                            </div>
                                            <div>
                                                <img src="./assets/images/gallery/robotics-workshop/5.jpeg" alt="" />
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="title">
                                    <h2>Hult Prize- January 2020</h2>
                                </div>
                                <div className="container">
                                    <div className="gallery">
                                        <OwlCarousel
                                            className="owl-theme"
                                            margin={10}
                                            autoplay
                                            autoplayTimeout={1500}
                                            autoplayHoverPause
                                            dotsEach
                                            responsive={this.state.responsive}
                                        >
                                            <div>
                                                <img src="./assets/images/gallery/hult-prize-january/1.jpg" alt="" />
                                            </div>
                                            <div>
                                                <img src="./assets/images/gallery/hult-prize-january/2.jpg" alt="" />
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="title">
                                    <h2>Hult Prize- 2021</h2>
                                </div>
                                <div className="container">
                                    <div className="gallery">
                                        <OwlCarousel
                                            className="owl-theme"
                                            margin={10}
                                            autoplay
                                            autoplayTimeout={1500}
                                            autoplayHoverPause
                                            dotsEach
                                            responsive={this.state.responsive}
                                        >
                                            <div>
                                                <img src="./assets/images/gallery/hult-prize-2021/1.jpg" alt="" />
                                            </div>
                                            <div>
                                                <img src="./assets/images/gallery/hult-prize-2021/2.jpg" alt="" />
                                            </div>
                                            <div>
                                                <img src="./assets/images/gallery/hult-prize-2021/3.jpg" alt="" />
                                            </div>
                                            <div>
                                                <img src="./assets/images/gallery/hult-prize-2021/4.png" alt="" />
                                            </div>
                                            <div>
                                                <img src="./assets/images/gallery/hult-prize-2021/5.png" alt="" />
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default gallery;