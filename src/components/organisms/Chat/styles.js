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
  avatar: {
    width: 40,
    height: 40,
  },
});

export default styles;
