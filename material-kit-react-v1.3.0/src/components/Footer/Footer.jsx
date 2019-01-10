/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="."
                className={classes.block}
                // target="_blank"
              >
                Nabdeep Shrestha
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.linkedin.com/in/nabdeep-shrestha"
                className={classes.block}
                target="_blank"
              >
                <i className={classes.socialIcons + " fab fa-linkedin"} />
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://github.com/nubdub"
                className={classes.block}
                target="_blank"
              >
                <i className={classes.socialIcons + " fab fa-github"} />
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.facebook.com/nabdeep.shrestha"
                className={classes.block}
                target="_blank"
              >
                <i className={classes.socialIcons + " fab fa-facebook"} />
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="mailto:nabdeep@vt.edu"
                className={classes.block}
              >
                <i className={classes.socialIcons + " fas fa-envelope"} />
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
