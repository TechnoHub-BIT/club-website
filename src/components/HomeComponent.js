import React, { Fragment } from 'react';


function Home(props) {
    return(
        
     <Fragment>
         <section className="service_part">
         <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-3 col-sm-6 col-md-6">
                    <div className="single_service_part">
                        <div className="services0">
                        <i className="fa fa-microchip "></i>
                        <span className="line"></span>
                        <h3>Project Development</h3>
                        <p>The focus of the TechnoHub club primarily is to help the students gain practical as well as theoretical technical knowledge.
                            </p>
                        </div>    
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6">
                    <div className="single_service_part">
                        <div className="services1">
                        <i className="fa fa-wrench"></i>
                        <span className="line"></span>
                        <h3>Learn and Develop</h3>
                        <p>Learn through exclusive capacity building programs, preferential internship and job opportunities.Develop the Team by participating in projects that create a huge impact.

                            </p>
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6">
                    <div className="single_service_part">
                        <div className="services2">
                        <i className="fa fa-users"></i>
                        <span className="line"></span>
                        <h3>Leadership Skills </h3>
                        <p>Enhance your leadership skills and competencies in learning by doing approach. 
                            
                            Become equipped to inspire, build and manage strong teams.
                                
                               
                               
                                </p>
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-md-6">
                    <div className="single_service_part">
                        <i className="fa fa-graduation-cap "></i>
                        <span className="line"></span>
                        <h3>Entrepreneurship</h3>
                        <p>Develop an entrepreneurial mindset to innovate and create new value with hands-on training and workshops
                                Get support and mentorship from the TechnoHub network for your ideas and innovations
                                
                                </p>
                    </div>
                </div>
            </div>
        </div>
         </section>
         
        <div className="container">
        
        <div className="allign"><a name ="about"><h2>Our Club Supports</h2><hr /></a></div>
            <div className="row">
            
            </div>

        </div>
    {/* <!-- about part start--> */} 
          <section className="about_part section_bg section_padding">
            <div className="container">
               <div className="row align-items-center justify-content-between">
                   <div className="col-md-6 col-lg-6">
                    <div className="about_img">
                        <img src='assets/images/technology.jpg' height="250" width="550" alt="Technology" />
                    </div>
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="about_text">
                        <h2>Technical Activities </h2>
                        <p>For the all-round development of the students and to enrich their technical knowledge the institute provides a platform for various students’ activities. This club envisages conducive platform to explore student’s latent talents and also to enable them to come out with their innovative ideas. 

                        </p>
                        <a href="#rcp" className="btn_2">read more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    <section className="about_part1 section_bg section_padding">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-md-6 col-lg-6">
                    <div className="about_text">
                            <h2>Management  </h2>
                            
                            <p>The aim of this club is to offer the ability to plan and execute events throughout the college. Event Management for students have the opportunity to gain experience in Management and create important contacts that they can use once they have completed the course. The club also aims to create leadership skills, team building skills, interpersonal skills and social atmosphere which will encourage members to get involved in activities outside their academic timetables.
                            </p>
                            <a href="#rcp" className="btn_2">read more</a>
                            </div>
                        
                    
                </div>
                <div className="col-md-5 col-lg-5">
                        <div className="about_img">
                                <img src='assets/images/management1.jpg' height="200" width="450" alt="" />
                            </div>
                </div>
            </div>
        </div>
    </section>
   
    {/*<!-- about part start-->

    <!--::industries start::-->
   
    <!--::industries end::-->

    <!--::industries start::-->*/}
     <section className="faq_part">
            <div className="allign"><h2>Frequently Asked Questions</h2><hr /></div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6 col-md-6">
                    <div className="faq_content">
                        <div className="accordion">
                            <div className="accordion-item active">
                                <div className="accordion-header">
                                    <h2>Why TechnoHub?</h2>
                                </div>
                                <div className="accordion-body">
                                    <p>In its attempt to provide a national platform for the youth to showcase their talents and skills in aggressive competitions, displaying latest technology and having renowned personalities motivate the youth and providing solutions to various significant problems, TechnoHub endeavors for one and all to get inspired and look up to.

                                        </p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <h2>How do I start a new project?
                                        </h2>
                                </div>
                                <div className="accordion-body">
                                    <p>If you don't like any of the current projects that are being worked on in the Club, you can start your own! That is the beauty of TechnoHub, we are here for you. Just approach any coordinator and tell them about your idea. They will help you get funding and publicity so you can recruit others into your crazy robot plot.
                                        </p>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <div className="accordion-header">
                                    <h2>What if I don't know anything about robots?
                                        </h2>
                                </div>
                                <div className="accordion-body">
                                    <p>That's fine! There is no entrance exam or prerequisites. No experience is required.
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6">
                        <div className="faq_content">
                            <div className="accordion">
                                <div className="accordion-item active">
                                    <div className="accordion-header">
                                        <h2>How many of the robots are built by faculty?
                                            </h2>
                                    </div>
                                    <div className="accordion-body">
                                        <p>Absolutely none of the robots are built by faculty. They are built by a majority of undergraduate students, as well as some graduate students.

                                            </p>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <div className="accordion-header">
                                        <h2>How can I become a member?
                                            </h2>
                                    </div>
                                    <div className="accordion-body">
                                        <p>Even if you don't know much to begin with, you'll learn a lot throughout the year till your graduation. Just come down to the club and any current manager can sign you up and take your dues. 
                                                
                                            Note: If you pay dues that cover only one time investment. 
                                                </p>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <div className="accordion-header">
                                        <h2>How is TechnoHub put up?

                                            </h2>
                                    </div>
                                    <div className="accordion-body">
                                        <p>
                                                Complete planning and execution of TechnoHub are done by the students of BIT Durg in a five-layer team structure. We greatly rely upon the perception of “Together everyone achieves more”. Every success and failure is shared equally by all of us.
                                                
                                                 Although every facet of TechnoHub is no dear to one coordinator than the other for proper functioning, certain assortments are made within the team. The assortments can be broadly categorised into six sections. Each domain is specialised in its own task. The various groups are Tech Team, Documentation Team, Design Team and Marketing Team.
                                                 They collaboratively take care of the various happenings and initiatives of TechnoHub. 
                                                
                                                
                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </section>
    
    {/* <!--::industries end::-->

    <!-- portfolio_part start--> */}
    <section className="portfolio_part section_padding">
        <div className="container"><a name ="rcp"></a>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card-columns">
                        <div className="card tittle">
                            <blockquote className="blockquote0">
                                <h2>Recent Completed
                                    Project</h2>
                            </blockquote>
                        </div>
                        <div className="card ">
                            <div className="card_iner overlay">
                                <img src='assets/images/Drone.jpg' className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Quadcopter</h5>
                                    <p className="card-text">Drone surveillance is the use of unmanned aeriel vehichle to capture still images and video to gather information about specific target which might be idividuals, groups or environments.</p>
                                    <a href="#" className="portfolio_btn">read more <img src='assets/images/right-arrow.svg' alt="" />
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="card">
                            <div className="card_iner overlay">
                                <img src='assets/images/eyantra2.jpg' className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">e-yantra - Nutty Squirrel</h5>
                                    <p className="card-text">A squirrel builds itself an elevator mechanism to ease its load-carrying capacity.</p>
                                    <a href="#" className="portfolio_btn">read more <img src='assets/images/right-arrow.svg' alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_iner overlay">
                                <img src='assets/images/firebird.jpg' className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Fire Bird V</h5>
                                    <p className="card-text">This bot detects colours and picks a particular coloured box and place it to the destination.</p>
                                    <a href="#" className="portfolio_btn">read more <img src='assets/images/right-arrow.svg' alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_iner overlay">
                                <img src='assets/images/unknown.jpeg' className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Visual Weight Detector</h5>
                                    <p className="card-text">The aim of this project is to present a visual body weight estimation, which is suitable for
                                        medical applications.
                                        </p>
                                    <a href="#" className="portfolio_btn">read more <img src='assets/images/right-arrow.svg' alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card see_more_project">
                            <blockquote className="blockquote1">
                                <a href="#" className="btn_1">more project</a>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
     {/*<!-- portfolio_part part end-->

    <!--::industries start::-->
  <!--::industries end::-->

     <!--::catagory_post start::-->*/}
    <section className="catagory_post">
        <div className="container">
            <div className="row">
                <div className="col-xl-4">
                    <div className="section_tittle">
                        <h2>Latest Posts of Our
                            Instagram page</h2><hr />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-lg-4">
                    <div className="single_catagory_post post_2">
                        <div className="category_post_img">
                            <img src='assets/images/drdo.png' alt="" />
                            <a href="https://www.instagram.com/tv/Bz4E9XLB2kc/" className="category_btn">DRDO</a>
                        </div>
                        <div className="post_text_1 pr_30">
                            <p><span></span> July 14 , 2019 </p>
                            <a href="https://www.instagram.com/tv/Bz4E9XLB2kc/">
                                <h3>Vocational Training at DRDO Delhi</h3>
                            </a>
                            <div className="post_icon">
                                <ul>
                                   {/* <!--<li><i className="ti-comment"></i>2 Comment</li>
                                    <li><i className="ti-bookmark"></i>Views</li>--> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="single_catagory_post post_2">
                        <div className="category_post_img">
                            <img src='assets/images/bsnl.png' height="220" width="200" alt="" />
                            <a href="https://www.instagram.com/tv/B0DyRXTBvN5/" className="category_btn">BSNL</a>
                        </div>
                        <div className="post_text_1 pr_30">
                            <p><span></span> July 18 , 2019</p>
                            <a href="https://www.instagram.com/tv/B0DyRXTBvN5/">
                                <h3>Vocational Training at BSNL Raipur</h3>
                            </a>
                            <div className="post_icon">
                                <ul>
                                    {/* <!---<li><i className="ti-comment"></i>2 Comment</li>
                                    <li><i className="ti-bookmark"></i>Petrolium, Gas</li>-->*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="single_catagory_post post_2">
                        <div className="category_post_img">
                            <img src='assets/images/proje.jpeg' height="220" width="250" alt="" />
                            <a href="https://www.instagram.com/p/Bvx608Og9xj/" className="category_btn">Tech Expo</a>
                        </div>
                        <div className="post_text_1 pr_30">
                            <p><span></span> April 03 , 2019</p>
                            <a href="https://www.instagram.com/p/Bvx608Og9xj/">
                                <h3>Project Exhibition 2019</h3>
                            </a>
                            <div className="post_icon">
                                <ul>
                                   {/*<!--<li><i className="ti-comment"></i>2 Comment</li>
                                    <li><i className="ti-bookmark"></i>Views</li>--> <!---<li><i className="ti-comment"></i>2 Comment</li>
                                    <li><i className="ti-bookmark"></i>Petrolium, Gas</li>--> */} 
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--::catagory_post end::-->*/}
     </Fragment>
    );
}

export default Home