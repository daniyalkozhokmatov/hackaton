import React from 'react';
// import clientContext from '../contexts/ClientContext';
import Pagination from '@mui/material/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import Stack from '@mui/material/Stack';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const PPagination = () => {
  const pageNumber = []
  const classes = useStyles();
  return (
    <div>
      <ul>
        <div className={classes.root}>
    <Stack spacing={2}>
      <Pagination count={pageNumber.length} variant="outlined"
      onChange={(e, newPage) => (newPage)}
      /> 
    </Stack>
    </div>
    </ul>
    </div>
  );
}
export default PPagination;