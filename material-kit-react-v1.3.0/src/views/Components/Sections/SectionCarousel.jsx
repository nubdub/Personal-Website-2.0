import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import Button from "components/CustomButtons/Button.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/sentimentally.PNG";
import image3 from "assets/img/vthacks.PNG";
import image4 from "assets/img/bg7.jpg";

class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    const white = {color: "white"};
    const dark = {color: "black"};
    const height = {height: 367.06};
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={image1}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h3>
                        <a style={white} href="https://github.com/nubdub/Website-Dev" target="_blank"><i className="fab fa-github" /><p> </p>Web Development Work</a>
                      </h3>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image2}
                      alt="Second slide"
                      className="slick-image"
                      style={height}
                    />
                    <div className="slick-caption">
                      <h3>
                        <a style={dark} href="https://devpost.com/software/sentimentally" target="_blank"><i className="fab fa-github" /><p> </p>Sentimentally</a>
                      </h3>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image2}
                      alt="Third slide"
                      className="slick-image"
                      style={height}
                    />
                    <div className="slick-caption">
                      <h3>
                        <a style={dark} href="https://github.com/nubdub/SentimentallyJS" target="_blank"><i className="fab fa-github" /><p> </p>Sentimentally.js (Node.js backend)</a>
                      </h3>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image3}
                      alt="Fourth slide"
                      className="slick-image"
                      style={height}
                    />
                    <div className="slick-caption">
                      <Button color="primary">
                        <h3>
                          <a style={white} href="https://vthacks.com" target="_blank"><i className="fa fa-terminal" /><p> </p>Register for VTHacks VI!</a>
                        </h3>
                      </Button>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image4}
                      alt="Fourth slide"
                      className="slick-image"
                      style={height}
                    />
                    <div className="slick-caption">
                        <h3>
                          <a style={white} href="https://github.com/nubdub/Personal-Website-2.0" target="_blank"><i className="fab fa-github" /><p> </p>This Website!</a>
                        </h3>
                    </div>
                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
