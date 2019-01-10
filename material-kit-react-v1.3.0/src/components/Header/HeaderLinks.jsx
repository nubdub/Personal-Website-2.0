/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import Resume from "assets/Resume/College Resume 2018-19.pdf";


function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      {/*<ListItem className={classes.listItem}>*/}
        {/*<CustomDropdown*/}
          {/*noLiPadding*/}
          {/*buttonText="Components"*/}
          {/*buttonProps={{*/}
            {/*className: classes.navLink,*/}
            {/*color: "transparent"*/}
          {/*}}*/}
          {/*buttonIcon={Apps}*/}
          {/*dropdownList={[*/}
            {/*<Link to="/" className={classes.dropdownLink}>*/}
              {/*All components*/}
            {/*</Link>,*/}
            {/*<a*/}
              {/*href="https://creativetimofficial.github.io/material-kit-react/#/documentation"*/}
              {/*target="_blank"*/}
              {/*className={classes.dropdownLink}*/}
            {/*>*/}
              {/*Documentation*/}
            {/*</a>*/}
          {/*]}*/}
        {/*/>*/}
      {/*</ListItem>*/}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="linkedin"
          title="Connect with me on LinkedIn"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://www.linkedin.com/in/nabdeep-shrestha/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-linkedin"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="github"
          title="Check out my GitHub"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/nubdub"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow me on Facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/nabdeep.shrestha"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="email"
          title="Email me"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="mailto:nabdeep@vt.edu"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fas fa-envelope"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href={Resume}
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Download Resume
        </Button>

      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
