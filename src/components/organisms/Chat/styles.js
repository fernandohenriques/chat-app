const styles = theme => ({
  card: {
    marginTop: 20,
    minWidth: 355,
    [theme.breakpoints.only('sm')]: {
      width: 520,
    },
    [theme.breakpoints.up('sm')]: {
      width: 700,
    },
  },
});

export default styles;
