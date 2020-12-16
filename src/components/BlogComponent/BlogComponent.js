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

const blog = () => {
    let shareUrl = "https://technohubbit.in";

    return(
        <React.Fragment>
            <div className="blogContainer">
                <div className="blogContents">
                    <div className="blogTitle">Difference Between UI & UX</div>
                    <div className="blogAuthor">by Dhiman Das Gupta</div>
                    <img src="./assets/images/blog/difference-between-ux-ui.png" className="blogImage" />
                    <div className="blogDetails">
                        <p>
                            UX and UI: Two terms that are often used interchangeably, but in reality, have very different meanings. So, what exactly is the difference? 
                            We’ve all overheard conversations while walking down with people, techies or in the world’s tech capitals, about the great ‘UX’ of a product, or the poor ‘UI’ of a website. Is it a secret language you will never be familiar with? 
                            <br />
                            <br />
                            Well, obviously NOT. Let’s define each of the terms individually- What is user experience (UX) design? 
                            User experience design is a user-first way of designing products. Don Norman coined the term “user experience” in the late 1990s. He describes it as: 
                            “User experience encompasses all aspects of the user’s interaction with the company’s products and services.” 
                            UX Design encompasses any and all interactions between customer and a company. Essentially, UX applies to anything that can be experienced—be it a car, a coffee shop or a website. The “user experience” refers to the interaction between a user and a company’s product. At the user’s end, an easy and a pleasant experience is the aim of a good UX design. 
                            Here’s what you need to know about UX design in a nutshell:
                            <br />
                            <br />
                            1.	User experience design is the process of creating a quality interaction between a user and all aspects of a company.
                            <br />
                            2.	Theoretically, User experience design is a non-digital practice, but used and defined predominantly by digital industries.
                            <br />
                            3.	UX design is NOT about visuals but the overall experience of a product.
                            <br />
                            <br />
                            What is user interface (UI) design? 
                            <br />
                            <br />
                            User interface design is the complement of UX: the look and feel, the presentation and interactivity of a product. But unlike UX, user interface design is a strictly digital term. A user interface is the point of interaction between the user and a digital product—like the screen of your device or the touchpad you use to select a particular product in the menu. In websites and apps, UI design is all about the look, feel, and interactivity of the product. It’s about ensuring that the user interface of a product is as creative and interactive as possible, which means carefully going through each and every visual, interactive element the user might encounter. 
                            <br />
                            Before looking at main differences between UX and UI,
                            Let’s recall what we read about UI: 
                            <br />
                            <br />
                            1.	User interface design is solely a digital term. It considers all the on-screen, interactive elements of a product interface—which includes buttons, typography, colour and responsive design. 
                            <br />
                            2.	 To guide the user through a product’s interface is UI’s ultimate aim. It’s about creating an experience that doesn’t require the user to use too much of thought process. 
                            <br />
                            3.	UI design represents a brand’s strengths in terms of visual assets to a product’s interface, making sure the design is consistent and aesthetically pleasing.  
                            <br />
                            <br />
                            Now we have defined both UX and UI, let’s consider the key differences between the two.
                            The main differences that make UI and UX stand apart: 
                            <br />
                            There is an analogy to describe the different parts of a digital product: 
                            <br />
                            If you imagine a product as a human body, our bones stand for the code which gives it a structure. The organs represent the UX design: working for supporting life functions. And UI design represents the aesthetic parts of the body; its five senses, reactions and presentation. 
                            <br />
                            <br />
                            Let’s know how experts interpret this- 
                            <br />
                            Rahul Varshney, co-creator of Foster.fm says that: 
                            <br />
                            “User Experience (UX) and User Interface (UI) are some of the most confused terms in our field. A UI without UX is like a painter pouring paint onto a canvas without thought; while UX without UI is like the frame of a sculpture with no content on it. A great product experience begins with designing the UX followed by UI. Both are necessary for the product being successful.” 
                            <br />
                            <br />
                            The main difference to understand: UX design is all about the overall feel of the experience, while UI design is all about the look and functionality of interfaces of a product. 
                            <br />
                            With the plan to design the core of the product being chalked out, the role of the UI designer is to bring it to life. The UI designer keeps in mind and works on all the visual aspects of the user’s journey, including all screens and the moments of touching the screen that the user might encounter: from tapping a button, scrolling down a page to swiping through a gallery. While the UX designer maps out the journey, the UI designer focuses on the details of the same. That doesn’t mean UI design is all about looks; UI designers hugely impact whether or not a product is accessible and inclusive. They consider factors like “How can different colour combinations enhance readability?”. 
                            <br />
                            Hopefully you’ve now understood that UX and UI design are two very different things.  
                            <br />
                            <br />
                            To summarize the article: 
                            <br />
                            <br />
                            1.	UX design is all about finding out and eliminating user-end problems; UI design is all about making interfaces interactive and aesthetically pleasing. 
                            <br />
                            2.	UX design mainly comes first in the product process of development, followed by UI.  
                            <br />
                            3.	UX can apply to any kind of product, service, or experience; UI is specific to digital products and experiences.
                        </p>
                    </div>
                    <div className="shareButtons">
                        <h6>Share on:</h6>
                        <FacebookShareButton url={shareUrl} quote="Check out this amazing Blog from Aaryan Khandelwal">
                            <FacebookIcon size="32" round={true} />
                        </FacebookShareButton>
                        <TwitterShareButton url={shareUrl} title="Check out this amazing Blog from Aaryan Khandelwal">
                            <TwitterIcon size="32" round={true} />
                        </TwitterShareButton>
                        <WhatsappShareButton url={shareUrl} title="Check out this amazing Blog from Aaryan Khandelwal">
                            <WhatsappIcon size="32" round={true} />
                        </WhatsappShareButton>
                        <TelegramShareButton url={shareUrl} title="Check out this amazing Blog from Aaryan Khandelwal">
                            <TelegramIcon size="32" round={true} />
                        </TelegramShareButton>
                        <LinkedinShareButton url={shareUrl} title="Check out this amazing Blog from Aaryan Khandelwal">
                            <LinkedinIcon size="32" round={true} />
                        </LinkedinShareButton>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default blog;