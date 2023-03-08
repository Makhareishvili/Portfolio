import { Box, Button } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { DefaultThemes } from "../../Themes/DefaultThemes";
const useStyles = makeStyles(() => ({
  contentContainer: {
    display: "flex",
    height: "100vh",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    margin: "0px auto",
    maxWidth: "1400px",
    "& p": {
      // animation
      animationDuration: "100ms",
      animationTimingFunction: "ease-in",
      animationFillMode: "forwards",
      transform: "scale(0)",
      "&:nth-child(2)": {
        fontSize: "18px",
        margin: "0 0 12px 4px",
        color: `${DefaultThemes.colors.blueBolt}`,
        letterSpacing: ".1em",
        // animation
        animationDelay: "800ms",
        animationName: "$contentAnimation",
      },
      "&:nth-child(3)": {
        fontSize: "4.8em",
        color: "#ccd6f6",
        lineHeight: "1.5",
        fontWeight: "bolder",
        // animation
        animationDelay: "900ms",
        animationName: "$contentAnimation",
      },
      "&:nth-child(4)": {
        fontSize: "4.8em",
        fontWeight: "bolder",
        color: "#8892b0",
        // animation
        animationDelay: "1000ms",
        animationName: "$contentAnimation",
      },
      "&:nth-child(5)": {
        fontSize: "18px",
        maxWidth: "700px",
        lineHeight: "1.3",
        marginTop: "20px",
        // color: "#8892b0",
        color: `${DefaultThemes.colors.gainsBoro}`,
        // animation
        animationDelay: "1100ms",
        animationName: "$contentAnimation",
      },
    },
  },
  animationLine: {
    backgroundColor: `#0c0c9b`,
    width: "1px",
    height: "458%",
    position: "absolute",
    marginLeft: "-25px",
    marginTop: "13px",
    "& div": {
      width: "10px",
      height: "10px",
      border: "1px solid #0c0c9b",
      borderRadius: "50%",
      marginLeft: "-4.7px",
      marginTop: "-10px",
    },
  },
  bookButton: {
    // animation
    animationDuration: "100ms",
    animationTimingFunction: "ease-in",
    animationFillMode: "forwards",
    transform: "scale(0)",
    animationDelay: "1200ms",
    animationName: "$contentAnimation",
  },
  "@keyframes contentAnimation": {
    "0%": {
      color: `${DefaultThemes.colors.blueBolt}`,
      transform: "translateY(-30%)",
    },
    "100%": {
      transform: "translateY(0)",
    },
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.contentContainer}>
        <Box>
          <Box className={classes.animationLine}>
            <Box />
          </Box>
          <p>Hola, my name is</p>
          <p>Levani Makhareishvili</p>
          <p>I build things for the web.</p>
          <p>
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at Upstatement.
          </p>
          <Button
            className={classes.bookButton}
            sx={{ marginTop: "50px" }}
            variant="contained"
          >
            Book a meeting
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default Header;
