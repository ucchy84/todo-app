import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const Form = () => {
  const classes = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  }));

  return (
    <div className={classes.root}>
      <TextField
        id="standard-full-width"
        label="Label"
        style={{ margin: 10 }}
        placeholder="Placeholder"
        helperText="Full width!"
        fullWidth
        margin="normal"
      />
    </div>
  )
}

export default Form;