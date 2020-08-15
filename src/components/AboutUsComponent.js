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
                                           <p className="mb-0">You have to grow from the inside out. None can teach you, none can make you spiritual. There is no other teacher but your own soul.</p>
                                         <footer className="blockquote-footer">Swami Vivekananda,
                                         <cite title="Source Title"> Indian monk,
                                         a chief disciple of the 19th-century Indian mystic Ramakrishna.</cite>
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
                                      <h5>( Head )</h5>

                                      <p>Training and Placement Cell</p>

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
<h2>Our Managers</h2><br />
</div>
</div>
</div>
<div class="row justify-content-around">
<div class="col-lg-4 col-sm-6">
<div class="single_industries">
<img src='assets/images/agney.jpg' alt="" height="400px" width="350px" />
<div class="single_industries_text">
<h3>Agney Deshkar</h3>
<h6>Program Manager</h6>
<p><i class="fa fa-phone"></i>+91-6261731565</p>
</div>
</div>
</div>
<div class="col-lg-4 col-sm-6">
<div class="single_industries">
<img src='assets/images/shubharangshu.jpg' alt="" height="400px" width="350px" />
<div class="single_industries_text">
  <h3>Shubharangshu Chakraborty </h3>
  <h6>Marketing Manager</h6>
<p><i class="fa fa-phone"></i>+91-9407762880</p>
</div>
</div>
</div>
<div class="col-lg-4 col-sm-6">
<div class="single_industries">
<img src='assets/images/arpit.jpg' alt="" height="400px" width="350px" />
<div class="single_industries_text">
<h3>Arpit Sahu </h3>
<h6>Finance Manager</h6>
<p><i class="fa fa-phone"></i>+91-8319560199</p>
</div>
</div>
</div>
<div class="col-lg-4 col-sm-6">
<div class="single_industries">
<img src='assets/images/Suchi.jpg' alt="" height="400px" width="350px" />
<div class="single_industries_text">
<h3>Shuchi Agrawal</h3>
<h6>Public Relations Manager</h6>
<p><i class="fa fa-phone"></i>+91-9893010932</p>
</div>
</div>
</div>
<div class="col-lg-4 col-sm-6">
<div class="single_industries">
<img src='assets/images/kartikey.jpg' alt="" height="400px" width="350px" />
<div class="single_industries_text">
<h3>Kartikey Rawat </h3>
<h6>Technical Lead</h6>
<p><i class="fa fa-phone"></i>+91-8839256099</p>
</div>
</div>
</div>
</div>
            </div>

            <div className="container">
            <div class="row">
<div class="col-xl-4">
  
<div class="section_tittle">
<h2>Our Coordinators</h2><br />
</div>
</div>
</div>
<div class="row justify-content-around">
<div class="col-lg-4 col-sm-6">
<div class="single_industries">
<img src='assets/images/aditya.jpg' alt="" height="400px" width="350px" />
<div class="single_industries_text">
<h3>Aditya Deshmukh </h3>
<p><i class="fa fa-phone"></i>+91-9584913846</p>
</div>
</div>
</div>
<div class="col-lg-4 col-sm-6">
<div class="single_industries">
<img src='assets/images/nitesh.jpg' alt="" height="400px" width="350px" />
<div class="single_industries_text">
  <h3>Nitesh Bharti</h3>
<p><i class="fa fa-phone"></i>+91-7354124249</p>
</div>
</div>
</div>
<div class="col-lg-4 col-sm-6">
<div class="single_industries">
<img src='assets/images/abhishek.jpg' alt="" height="400px" width="350px" />
<div class="single_industries_text">
<h3>Abhishek Agrawal</h3>
<p><i class="fa fa-phone"></i>+91-8871637776</p>
</div>
</div>
</div>
<div class="col-lg-4 col-sm-6">
<div class="single_industries">
<img src='assets/images/navya.jpg' alt="" height="400px" width="350px" />
<div class="single_industries_text">
<h3>Navya Singh</h3>
<p><i class="fa fa-phone"></i>+91-6264365144</p>
</div>
</div>
</div>
<div class="col-lg-4 col-sm-6">
<div class="single_industries">
<img src='assets/images/tanmay.jpg' alt="" height="400px" width="350px" />
<div class="single_industries_text">
<h3>Tanmay Soni</h3>
<p><i class="fa fa-phone"></i>+91-9329847520</p>
</div>
</div>
</div>
<div class="col-lg-4 col-sm-6">
<div class="single_industries">
<img src='assets/images/shubhangi.jpg' alt="" height="400px" width="350px" />
<div class="single_industries_text">
<h3>Shubhangi Sharma</h3>
<p><i class="fa fa-phone"></i>+91-7489488979</p>
</div>
</div>
</div>
<div class="col-lg-4 col-sm-6">
<div class="single_industries">
<img src='assets/images/kuldeep.jpg' alt="" height="400px" width="350px" />
<div class="single_industries_text">
<h3>Kuldeep Patel</h3>
<p><i class="fa fa-phone"></i>+91-7000728570</p>
</div>
</div>
</div>
<div class="col-lg-4 col-sm-6">
<div class="single_industries">
<img src='assets/images/aman.jpg' alt="" height="400px" width="350px" />
<div class="single_industries_text">
<h3>Aman Mandal</h3>
<p><i class="fa fa-phone"></i>+91-7225952566</p>
</div>
</div>
</div>
</div>
            </div>
            <div className="container">
            <div class="row">
<div class="col-xl-4">
  
<div class="section_tittle">
<h2>Secretary</h2><br />
</div>
</div>
</div>
<div class="row justify-content-around">
<div class="col-lg-4 col-sm-6">
<div class="single_industries">
<div class="single_industries_text">
<h3>Bipul Biswas</h3>
<p><i class="fa fa-phone"></i>+91-9358222648</p>
</div>
</div>
</div>
<div class="col-lg-4 col-sm-6">
<div class="single_industries">
<div class="single_industries_text">
<h3>Anubhav Bhatt</h3>
<p><i class="fa fa-phone"></i>+91-8234993336</p>
</div>
</div>
</div>
<div class="col-lg-4 col-sm-6">
<div class="single_industries">
<div class="single_industries_text">
<h3>Anurag Sharma</h3>
<p><i class="fa fa-phone"></i>+91-7566837132</p>
</div>
</div>
</div>
<div class="col-lg-4 col-sm-6">
<div class="single_industries">
<div class="single_industries_text">
<h3>Anubhav Agrawal</h3>
<p><i class="fa fa-phone"></i>+91-7024880719</p>
</div>
</div>
</div>
</div>
            </div>
        </React.Fragment>
     );

    }  




export default About;
                

