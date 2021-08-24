![GitHub Last Commit](https://img.shields.io/github/last-commit/samrogers15/mattcoburnportfolio?style=plastic)
![GitHub Repo Size](https://img.shields.io/github/repo-size/samrogers15/mattcoburnportfolio?style=plastic)
![GitHub Followers](https://img.shields.io/github/followers/samrogers15?style=social)
![GitHub](https://img.shields.io/github/languages/top/samrogers15/mattcoburnportfolio?style=plastic)


# Matt Coburn Portfolio
> This is a repository for the professional voiceover artist Matt Coburn's portfolio. It was built using React and was deployed to a custom domain name. Matt's portfolio houses general information about Matt, links to review his professional materials (including voiceover reels), as well a biography and colleague testimonials. It was built in conjunction with Sam Rogers Web Developer.
 
## Table of contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Live Link](#Live-Link)
* [Screen Shot](#Screen-Shot)
* [Code Snippets](#code-snippets)
* [Sources](#sources)
* [Contact](#contact)

## General Info
TBD.

## Technologies
* Javascript
* HTML/CSS
* Node
* React
* Material-UI
* React Router DOM

## Live Link
[Matt Coburn Sound](tbd)

## Screen Shot
![Matt Coburn Sound](tbd)

## Code Snippets

TBD Header:
```js
const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.textContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={fries} alt="French Fries" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        Matt Coburn Sound
      </Typography>
    </Box>
  );
};
```

TBD AppBar:
```js
const Appbar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();

  const sideList = (slider) => (
    <Box
      className={classes.menuStyle}
      component="div"
      onClick={toggleSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={fries} alt="French Fries" />
      <Divider />
      <List>
        {menuItems.map((listItem, key) => (
          <ListItem button key={key}>
            <ListItemIcon className={classes.listItem}>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={listItem.listText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <Menu style={{ color: "white" }} />
            </IconButton>
            <Typography variant="h5" style={{ color: "white" }}>
              Matt Coburn
            </Typography>
            <MobileRightMenuSlider
              anchor="left"
              open={state.right}
              onClose={toggleSlider("right", false)}
            >
              {sideList("right")}
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
```

## Sources
Application enabled using the following sources:

* [React](https://reactjs.org/)
* [React Router DOM](https://www.npmjs.com/package/react-router-dom)
* [NPM React Particles.js](https://www.npmjs.com/package/react-particles-js)

## Contact
Created by Sam Rogers - feel free to contact me to collaborate on a project!

![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)

[samuelerogers](https://www.linkedin.com/in/samuelerogers/)



[Sam Rogers Dev](https://samrogers15.github.io/Current_Portfolio/index.html)


![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

[samrogers15](https://github.com/samrogers15)


https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
