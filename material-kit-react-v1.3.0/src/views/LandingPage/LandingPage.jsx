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


import Profile from "assets/img/faces/profile-pic.jpg";


// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx"
import Badge from "components/Badge/Badge.jsx";
import SectionCarousel from "views/Components/Sections/SectionCarousel.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";
import Dashboard from "@material-ui/core/SvgIcon/SvgIcon";

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
                              <img src={Profile} alt="Profile Pic" className="SectionTypography-imgRounded-647 SectionTypography-imgFluid-646"/>
                            </div>
                          </GridItem>
                          <GridItem xs={12} sm={9}>
                            <span>
                              <p style={darkFont}>
                                I am currently planning on graduating a year early with my Bachelor's degree; my expected graduation date is May 2020. I am primarily interested
                                in Full Stack Development, but I am still in the process of exploring different fields within the Computer Science industry
                                and I am open to anything.
                                <br />
                                <br />
                                Outside of coding, I have played guitar for seven years; I am a big rock and metal fan. I also enjoy lifting, trying new food,
                                and watching basketball.
                              </p>
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
                                    <p style={darkFont}>
                                      VTHacks is the organization responsible for setting up the VTHacks hackathon.
                                      Our hackathon is one of the largest in the Southeast, hosting over 500 particpants.
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
                                    <h4 style={darkFont}>Company: Virginia Tech</h4>
                                    <h4 style={darkFont}>Location: Blacksburg, VA</h4>
                                    <h4 style={darkFont}>December 2018 - Present</h4>
                                    <p style={darkFont}>
                                      Promote Git and Github usage across campus by organizing workshops for beginners and
                                      advanced users, consult with professors on how to incorporate Git/Github usage in their curriculum,
                                      and hold office hours for students who need assistnace with Git.
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
                          <Badge color="primary">CS 1114 Intro to Software Design</Badge>
                          <br/>
                          <Badge color="primary">CS 2114 Software Design and Data Structures</Badge>
                          <br/>
                          <Badge color="primary">MATH 2114 Linear Algebra</Badge>
                          <br/>
                          <Badge color="primary">MATH 2534 Discrete Math</Badge>
                          <br/>
                          <Badge color="primary">CS 2505 Computer Organization I</Badge>
                          <br/>
                          <Badge color="primary">CS 2304 Intro to SQL and Database Management</Badge>
                          <br/>
                          <Badge color="primary">CS 2104 Intro to Problem Solving in CS</Badge>
                          <br/>
                          <Badge color="primary">MATH 3134 Applied Combinatorics and Graph Theory</Badge>
                        </div>
                      )
                    },
                    {
                      tabButton: "Projects",
                      tabIcon: ImportantDevices,
                      tabContent: (<SectionCarousel/>)
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
