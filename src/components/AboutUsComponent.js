import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props) {

    return(
        <React.Fragment>
            <div className="container">
                  <div className="row">
                                <Breadcrumb>
                                  <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                  <BreadcrumbItem active>About Us</BreadcrumbItem>
                                </Breadcrumb>
                        <div className="col-12">
                         <h3>About Us</h3>
                             <hr />
                        </div>                
                   </div>
                    <div className="row row-content">
                          <div className="col-12 col-md-6">
                             <h2>Technohub</h2><br />
                             <p>The club provides an ambiance for students to prepare and to showcase their skills at technical events and entrepreneurship held all across India and Asia in various colleges with the aim to add more feathers in the cap. The ultimate goal of the TechnoHub club is to educate more students and make robotics and entrepreneurship an everyday phenomenon.</p>
                           </div>
                            <div className="col-12 col-md-5">
                                    <img src='assets/images/logo.png' height="200" width="400" alt='Technohub' />
                            </div>
                              <div className="col-12">
                                      <Card>
                                <CardBody className="bg-faded">
                                    <blockquote className="blockquote">
                                           <p className="mb-0">You better cut the pizza in four pieces because
                                              I'm not hungry enough to eat six.</p>
                                         <footer className="blockquote-footer">Yogi Berra,
                                         <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                            P. Pepe, Diversion Books, 2014</cite>
                                         </footer>
                                    </blockquote>
                                </CardBody>
                                  </Card>
                             </div>
                           </div>
                    <div className="row justify-content-around">
                        <div className="col-12">
                             <h2>Training & Placement Officer</h2><br />
                         </div>
                            <div className="col-lg-4 col-sm-6">
                                  <img src='assets/images/DSC_2055.jpg' alt="" height="400px" width="350px" />

                                         <div className="single_industries_text">

                                      <h3>Dr. Manisha Sharma</h3>

                                      <p>Electronics and Telecommunications Department</p>

                                       </div>
                        
                                 </div>
                                 
            </div>
            <div className="row justify-content-around">
                        <div className="col-12">
                             <h2>President</h2><br />
                         </div>
                            <div className="col-lg-4 col-sm-6">
                                  <img src='assets/images/gaurav.jpeg' alt="" height="400px" width="350px" />

                                         <div className="single_industries_text">

                                      <h3>Kumar Gaurav</h3>

                                      <p><i class="fa fa-phone"></i>+91-8434986336</p>

                                       </div>
                        
                                 </div>
                                 
            </div>
            
            </div>

            <div className="container">
            <div class="row">
<div class="col-xl-4">
  
<div class="section_tittle">
<h2>Vice President</h2><br />
</div>
</div>
</div>
<div class="row justify-content-around">
<div class="col-lg-4 col-sm-6">
<div class="single_industries">
<img src='assets/images/DSC_0733_3.jpg' alt="" height="400px" width="350px" />
<div class="single_industries_text">
<h3>Sachet Sabarad</h3>
<p><i class="fa fa-phone"></i>+91-7722874355</p>
</div>
</div>
</div>
<div class="col-lg-4 col-sm-6">
<div class="single_industries">
<img src='assets/images/shub.jpeg' alt="" height="400px" width="350px" />
<div class="single_industries_text">
<h3>Shubham Agrawal</h3>
<p><i class="fa fa-phone"></i>+91-7771878241</p>
</div>
</div>
</div>
<div class="col-lg-4 col-sm-6">
<div class="single_industries">
<img src='assets/images/harsha.jpeg' alt="" height="400px" width="350px" />
<div class="single_industries_text">
<h3>Harsha Dubey</h3>
<p><i class="fa fa-phone"></i>+91-9111258904</p>
</div>
</div>
</div>
<div class="col-lg-4 col-sm-6">
<div class="single_industries">
<img src='assets/images/Saisha.jpeg' alt="" height="400px" width="350px" />
<div class="single_industries_text">
<h3>T Saisha</h3>
<p><i class="fa fa-phone"></i>+91-8085999174</p>
</div>
</div>
</div>
</div>
            </div>
            <div className="container">
            <div class="row">
<div class="col-xl-4">
  
<div class="section_tittle">
<h2>Vice President</h2><br />
</div>
</div>
</div>
<div class="row justify-content-around">
<div class="col-lg-4 col-sm-6">
<div class="single_industries">
<img src='assets/images/DSC_0733_3.jpg' alt="" height="400px" width="350px" />
<div class="single_industries_text">
<h3>Sachet Sabarad</h3>
<p><i class="fa fa-phone"></i>+91-7722874355</p>
</div>
</div>
</div>
<div class="col-lg-4 col-sm-6">
<div class="single_industries">
<img src='assets/images/shub.jpeg' alt="" height="400px" width="350px" />
<div class="single_industries_text">
<h3>Shubham Agrawal</h3>
<p><i class="fa fa-phone"></i>+91-7771878241</p>
</div>
</div>
</div>
<div class="col-lg-4 col-sm-6">
<div class="single_industries">
<img src='assets/images/harsha.jpeg' alt="" height="400px" width="350px" />
<div class="single_industries_text">
<h3>Harsha Dubey</h3>
<p><i class="fa fa-phone"></i>+91-9111258904</p>
</div>
</div>
</div>
<div class="col-lg-4 col-sm-6">
<div class="single_industries">
<img src='assets/images/Saisha.jpeg' alt="" height="400px" width="350px" />
<div class="single_industries_text">
<h3>T Saisha</h3>
<p><i class="fa fa-phone"></i>+91-8085999174</p>
</div>
</div>
</div>
</div>
            </div>
        </React.Fragment>
     );

    }  




export default About;
                

