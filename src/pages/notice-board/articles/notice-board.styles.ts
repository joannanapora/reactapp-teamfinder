import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const useNoticeBoardStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardRoot: {
      margin: theme.spacing(3),
      minHeight: 300,
    },
    container: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2, 30, 3, 0),
      },
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(2, 30, 3, 0),
      },
      [theme.breakpoints.up("lg")]: {
        padding: theme.spacing(2, 30, 3, 0),
      },
    },
    keywordsList: {
      display: "flex",
      justifyContent: "space-evenly",

      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
      },
    },
    keywords: {
      display: "flex",
      flexDirection: "row",
      fontSize: 15,
      padding: theme.spacing(1),
    },
    media: {
      height: 150,
    },
    articles: {},
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(1, 4, 3, 5),
    },
    speedDial: {
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(8, 0, 0, 2),
      },
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(8, 0, 0, 2),
      },
      [theme.breakpoints.up("lg")]: {
        padding: theme.spacing(8, 0, 0, 2),
      },
      [theme.breakpoints.up("xl")]: {
        padding: theme.spacing(8, 0, 0, 2),
      },
    },
    scrollArea: {
      height: "100%",
      overflow: "auto",
    },
    noResults: {
      marginLeft: theme.spacing(7),
    },
    alert: {
      marginTop: theme.spacing(8),
    },
    progress: {
      display: "flex",
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
    },
    noPosts: {
      marginBottom: theme.spacing(2),
      width: "100%",
      textAlign: "center",
    },
    textPost: {
      fontSize: "14px",
      textAlign: "justify",
      width: "100%",
    },
  })
);
