import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Home from "@material-ui/icons/Home";
import Contact from "@material-ui/icons/AccountCircle";
import Assignment from "@material-ui/icons/Assignment";
import Reader from "@material-ui/icons/ChromeReaderMode";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ImportantDevices from "@material-ui/icons/ImportantDevices";

// Images
import Profile from "assets/img/faces/profile-pic.jpg";
import WDVT from "assets/img/wdvt.PNG";
import VTHacks from "assets/img/vthacks2.PNG";
import VTCS from "assets/img/vtcs.PNG";
import LNF from "assets/img/lnf.jpg";
import Torg from "assets/img/torg.jpg";
import Bio from "assets/img/bio.jpg";
import Github from "assets/img/git.jpg";
import Bridge from "assets/img/bridge.PNG";
import Senti from "assets/img/sentimentally.PNG";
import OldSite from "assets/img/oldsite.PNG";
import NewSite from "assets/img/newsite.PNG";
import WebDev from "assets/img/webdev.PNG";
import Other from "assets/img/gitprofile.PNG";


// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Badge from "components/Badge/Badge.jsx";
import SectionCarousel from "views/Components/Sections/SectionCarousel.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import WorkSection from "./Sections/WorkSection.jsx";


const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const darkFont = {
      color: 'black'
    };
    const imgSize = {
      width: "100%",
      height: "auto"
    }
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Nabdeep Shrestha"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/bg7.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className="LandingPage-title-1">Welcome to my Page!</h1>
                <br/>
                <h4>
                  Computer Science Junior at Virginia Tech.
                </h4>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            {/*<ProductSection />*/}
            {/*<TeamSection />*/}
            <GridContainer>
              <GridItem>
                <NavPills
                  // color="primary"
                  tabs={[
                    {
                      tabButton: "About Me",
                      tabIcon: Home,
                      tabContent: (
                        <GridContainer>
                          <GridItem xs={12} sm={3}>
                            <div>
                              <img src={Profile} alt="Profile Pic" style={imgSize} className={classes.imgRounded}/>
                            </div>
                          </GridItem>
                          <GridItem xs={12} sm={9}>
                            <span>
                              <h4 style={darkFont}>
                                I am currently planning on graduating a year early with my Bachelor's degree; my expected graduation date is May 2020. I am primarily interested
                                in Full Stack Development, but I am still in the process of exploring different fields within the Computer Science industry
                                and I am open to anything. I have a strong background in object oriented programming and my most proficient language is Java.
                                <br />
                                <br />
                                Outside of coding, I have played guitar for seven years; I am a big rock and metal fan. I also enjoy lifting, gaming, trying new food,
                                and watching basketball.
                              </h4>
                            </span>
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Involvement",
                      tabIcon: DashboardIcon,
                      tabContent: (
                        <NavPills
                          color="success"
                          horizontal={
                            {
                              tabsGrid: { xs: 12, sm: 4, md: 4 },
                              contentGrid: { xs: 12, sm: 8, md: 8 }
                            }
                          }
                          tabs={
                            [
                              {
                                tabButton: "VP of Web Development @ VT",
                                tabContent: (
                                  <div>
                                    <a href="https://wdvt.github.io/?fbclid=IwAR2BKi4NMP0JBaCE_2-ABNjZljJuxN8ovkMeZ1r57qxGguHJr56QaFGhVGA" target="_blank"><img src={WDVT} style={imgSize} alt="WD@VT"/></a>
                                    <hr/>
                                    <p style={darkFont}>
                                      WD@VT specializes in teaching beginner web development skills
                                      through weekly workshops where we develop mini projects. As Vice President, I
                                      assist the President with leadership duties and managing the social media accounts
                                      for WDVT.
                                    </p>
                                    <Button color="success" href="https://wdvt.github.io/?fbclid=IwAR2BKi4NMP0JBaCE_2-ABNjZljJuxN8ovkMeZ1r57qxGguHJr56QaFGhVGA" target="_blank">
                                      Check out our website!
                                    </Button>
                                  </div>
                                )
                              },
                              {
                                tabButton: "VTHacks PR Committee",
                                tabContent: (
                                  <div>
                                    <a href="https://vthacks.com/" target="_blank"><img style={imgSize} src={VTHacks} alt="VTHacks"/></a>
                                    <hr/>
                                    <p style={darkFont}>
                                      VTHacks is the organization responsible for setting up the VTHacks hackathon.
                                      Our hackathon is one of the largest in the Southeast, hosting over 500 participants.
                                      As a member of the Public Relations committee, we are responsible for using a wide
                                      range of media to build and sustain a good image for VTHacks and engaging the
                                      audience with information about new promotional updates and current progress.
                                    </p>
                                    <Button color="success" href="https://vthacks.com/" target="_blank">
                                      Register for VTHacks today!
                                    </Button>
                                  </div>
                                )
                              },
                              {
                                tabButton: "VT CS Student Ambassador",
                                tabContent: (
                                  <div>
                                    <img style={imgSize} src={VTCS} alt="VT CS"/>
                                    <hr/>
                                    <p style={darkFont}>
                                      As a CS Ambassador, I assist the department with their yearly recruiting efforts,
                                      such as volunteering at family information sessions. I also assist with hosting
                                      company representatives throughout the semester when they give information
                                      sessions or tech talks and Computer Science Career Fair activities.
                                    </p>
                                  </div>
                                )
                              }
                            ]
                          }
                        />
                      )
                    },
                    {
                      tabButton: "Resume",
                      tabIcon: Assignment,
                      tabContent: (
                        <NavPills
                          color="info"
                          horizontal={
                            {
                              tabsGrid: { xs: 12, sm: 4, md: 4 },
                              contentGrid: { xs: 12, sm: 8, md: 8 }
                            }
                          }
                          tabs={
                            [
                              {
                                tabButton: "Software Development Intern",
                                tabContent: (
                                  <div>
                                    <img src={LNF} alt="Long & Foster" style={imgSize}/>
                                    <hr/>
                                    <h4 style={darkFont}>Company: Long & Foster</h4>
                                    <h4 style={darkFont}>Location: Chantilly, VA</h4>
                                    <h4 style={darkFont}>June 2018 - August 2018</h4>
                                    <p style={darkFont}>
                                      Designed and implemented a multi-threaded Java application with test driven
                                      practices that utilizes the Google Maps API to calculate linear distance between
                                      Long & Foster Property Management's properties and their offices. The program
                                      also generated a map image with all of the properties' locations marked along with
                                      their office locations
                                    </p>
                                  </div>
                                )
                              },
                              {
                                tabButton: "SWAT Technician",
                                tabContent: (
                                  <div>
                                    <img src={Torg} alt="Torgersen Hall" style={imgSize}/>
                                    <hr/>
                                    <h4 style={darkFont}>Company: VT College of Engineering</h4>
                                    <h4 style={darkFont}>Location: Blacksburg, VA</h4>
                                    <h4 style={darkFont}>August 2018 - Present</h4>
                                    <p style={darkFont}>
                                      Provide troubleshooting and consulting for students within the VT College of
                                      Engineering with software installation, operating system installation, driver
                                      issues, virus removal, network issues, and hardware diagnostics.
                                    </p>
                                    <br/>
                                    <p style={darkFont}>
                                      Maintain and configure computer systems and peripheral devices
                                      for the Engineering Dean's Suite, WARE LaB, and INVENTS Lab while creating and
                                      updating troubleshooting and installation guides.
                                    </p>
                                  </div>
                                )
                              },
                              {
                                tabButton: "Undergraduate Research Assistant",
                                tabContent: (
                                  <div>
                                    <img src={Bio} alt="VT Biocomplexity Institute" style={imgSize}/>
                                    <hr/>
                                    <h4 style={darkFont}>Company: VT Biocomplexity Institute</h4>
                                    <h4 style={darkFont}>Location: Blacksburg, VA</h4>
                                    <h4 style={darkFont}>September 2018 - December 2018</h4>
                                    <p style={darkFont}>
                                      Develop an interactive webpage exhibit that explains the concept
                                      of biological gene expression noise through musical analogy under the direction of
                                      Dr. Silke Hauf
                                    </p>
                                  </div>
                                )
                              },
                              {
                                tabButton: "Github Organization Coordinator",
                                tabContent: (
                                  <div>
                                    <img src={Github} alt="Explore Githbu" style={imgSize}/>
                                    <hr/>
                                    <h4 style={darkFont}>Company: Virginia Tech</h4>
                                    <h4 style={darkFont}>Location: Blacksburg, VA</h4>
                                    <h4 style={darkFont}>December 2018 - Present</h4>
                                    <p style={darkFont}>
                                      Promote Git and Github usage across campus by organizing workshops for beginners and
                                      advanced users, consult with professors on how to incorporate Git/Github usage in their curriculum,
                                      and hold office hours for students who need assistance with Git.
                                    </p>
                                  </div>
                                )
                              },
                             ]
                          }
                        />
                      )
                    },
                    {
                      tabButton: "Coursework",
                      tabIcon: Reader,
                      tabContent: (
                        <div>
                          <GridContainer>
                            <GridItem xs={6}>
                              <h4 style={darkFont}>Completed Courses</h4>
                              <hr/>
                              <Badge color="success">CS 1114 Intro to Software Design</Badge>
                              <br/>
                              <Badge color="success">CS 2114 Software Design and Data Structures</Badge>
                              <br/>
                              <Badge color="success">MATH 2114 Linear Algebra</Badge>
                              <br/>
                              <Badge color="success">MATH 2534 Discrete Math</Badge>
                              <br/>
                              <Badge color="success">CS 2505 Computer Organization I</Badge>
                              <br/>
                              <Badge color="success">CS 2304 Intro to SQL and Database Management</Badge>
                              <br/>
                              <Badge color="success">CS 2104 Intro to Problem Solving in CS</Badge>
                              <br/>
                              <Badge color="success">MATH 3134 Applied Combinatorics and Graph Theory</Badge>
                            </GridItem>
                            <GridItem xs={6}>
                              <h4 style={darkFont}>Currently Enrolled</h4>
                              <hr/>
                              <Badge color="info">CS 3114 Data Structures and Algorithms</Badge>
                              <br/>
                              <Badge color="info">CS 2506 Computer Organization II</Badge>
                              <br/>
                              <Badge color="info">STAT 4705 Statistics for Engineers</Badge>
                              <br/>
                              <Badge color="info">MATH 4175 Cryptography I</Badge>
                            </GridItem>
                          </GridContainer>
                          <GridContainer>

                          </GridContainer>
                        </div>
                      )
                    },
                    {
                      tabButton: "Projects",
                      tabIcon: ImportantDevices,
                      tabContent: (
                        <NavPills
                          color="warning"
                          horizontal={
                            {
                              tabsGrid: { xs: 12, sm: 4, md: 4 },
                              contentGrid: { xs: 12, sm: 8, md: 8 }
                            }
                          }
                          tabs={[
                            {
                              tabButton: 'Web Development Work',
                              tabContent: (
                                <div>
                                  <img src={WebDev} alt="WebDev Repo" style={imgSize}/>
                                  <hr/>
                                  <p style={darkFont}>This is a directory of all of my Web Development work. I have projects
                                  from Web Development @ VT meetings to personal work on here!</p>
                                  <Button color="warning" href="https://github.com/nubdub/Website-Dev" target="_blank">
                                    <i className="fab fa-github"/>Repository</Button>
                                </div>
                              )
                            },
                            {
                              tabButton: 'Sentimentally',
                              tabContent: (
                                <div>
                                  <img style={imgSize} src={Senti} alt="Sentimentally"/>
                                  <hr/>
                                  <p style={darkFont}>
                                    Sentimentally is a web application that my team and I developed for PatriotHacks 2018.
                                    Its main purpose is to perform sentiment analysis on Tweets related to a user-inputted term
                                    and display the sentiment score of each tweet and the average sentiment score on the topic.
                                    My primary role for this project was to develop the front-end user interface with HTML, CSS,
                                    Javascript, Bootstrap.css, Chart.js, and Swiper.js. Chart.js was used to display the
                                    sentiment score on a graph and Swiper.js was used to display the tweets in a coverflow element.
                                    The back-end was written in Python and utilized Python Flask, Tweepy, Twitter Search API, and Textblob.
                                    Flask helped with creating the API routes, Tweepy was used to consume the Twitter Search API, and
                                    Textblob was the library that was responsible for performing sentiment analysis. Our project
                                    eventually won Verizon's "Best Use of Open Source Intelligence" award for utilizing multiple
                                    libraries and frameworks to develop this app. I later reimplemented the back-end using Node.js
                                    and Express.js and changed the form submission on the front-end to make Ajax calls to improve
                                    performance.
                                  </p>
                                  <Button color="warning" target="_blank" href="https://devpost.com/software/sentimentally">
                                    <i className="fab fa-dev"></i>Sentimentally.py</Button>
                                  <Button color="warning" target="_blank" href="https://sentimentallyjs.firebaseapp.com"><i className="fas fa-external-link-alt"/>Sentimentally.js</Button>
                                </div>
                              )
                            },
                            {
                              tabButton: 'Bridge and Torch Calculator',
                              tabContent: (
                                <div>
                                  <img style={imgSize} src={Bridge} alt="Bridge and Torch Website"/>
                                  <hr/>
                                  <p style={darkFont}>
                                    This website was developed as an assignment for CS 2104 Intro to Problem Solving.
                                    The purpose of the assignment is to create a website that solves a famous puzzle, so
                                    my implementation solves the Bridge and Torch problem with 4 people crossing. The
                                    initial version of the project utilized a Python backend to calculate the problem, but
                                    I rewrote it so that the calculations are performed on the browser side with Javascript.
                                    I used the Bootstrap.css framework to style my website and I deployed it on Google Cloud
                                    Platform.
                                  </p>
                                  <Button color="warning" href="https://ninth-keyword-221616.appspot.com/" target="_blank">
                                    <i className="fas fa-external-link-alt"></i>Check out my project!</Button>
                                </div>
                              )
                            },
                            {
                              tabButton: 'Personal Website 1.0',
                              tabContent: (
                                <div>
                                  <img src={OldSite} alt="Old Website" style={imgSize}/>
                                  <hr/>
                                  <p style={darkFont}>
                                    This used to be my personal portfolio website. It was designed during Web Development
                                    @ VT meetings and utilizes Bootstrap.css styling and jQuery for animations. I have moved
                                    on from this website but you can still check it out!
                                  </p>
                                  <Button color="warning" href="https://nubdub.github.io" target="_blank">
                                    <i className="fas fa-external-link-alt"></i>Check out my old website!</Button>
                                  <Button color="warning" href="https://github.com/nubdub/nubdub.github.io"><i className="fab fa-github"/>Repository</Button>
                                </div>
                              )
                            },
                            {
                              tabButton: 'This Website! (Personal Website 2.0)',
                              tabContent: (
                                <div>
                                  <img src={NewSite} alt="New Website" style={imgSize}/>
                                  <hr/>
                                  <p style={darkFont}>
                                    This is version 2.0 of my personal website. In an attempt to learn React.js, I came across the
                                    Material UI component library and decided to redesign my website using Material UI, which
                                    is the product you are seeing now! I also decided to change my hosting platform from Github Pages
                                    to Google Firebase. I will continue to update this website as I continue
                                    my student and professional life.
                                  </p>
                                  <Button color="warning" href="#" target="_blank"><i className="fas fa-redo-alt"></i></Button>
                                  <Button color="warning" href="https://github.com/nubdub/Personal-Website-2.0"><i className="fab fa-github"/>Repository</Button>
                                </div>
                              )
                            },
                            {
                              tabButton: 'Other Stuff',
                              tabContent: (
                                <div>
                                  <img src={Other} alt="Git Profile" style={imgSize}/>
                                  <hr/>
                                  <p style={darkFont}>
                                    Feel free to check out some of my other projects on Github! I have projects that have dealt
                                    with database work, trying out Spring Boot, Android development, etc.
                                  </p>
                                  <Button color="warning" href="https://github.com/nubdub/"><i className="fab fa-github"/>Repository</Button>
                                </div>
                              )
                            }
                          ]}
                        />
                      )
                    },
                    {
                      tabButton: "Contact",
                      tabIcon: Contact,
                      tabContent: (<WorkSection/>)
                    }
                    ]
                  }
                />
              </GridItem>
            </GridContainer>
            {/*<WorkSection />*/}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
