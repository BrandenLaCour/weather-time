import React from "react";

import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class Change extends React.Component {
  state = {
    loc: "",
    name: "",
    labelWidth: 0
  };

  handleInput = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="age-native-label-placeholder">
            City
          </InputLabel>
          <NativeSelect
            value={this.state.age}
            onInput={this.props.loc}
            input={<Input name="city" id="city placeholder" />}
          >
            <option name="Chicago" value="41.8781,-87.6298">
              Chicago
            </option>
            <option name="New York" value="40.7128,-74.006">
              New York
            </option>
            <option name="Slade" value="37.7951,-83.7041">
              Slade
            </option>
            <option name="DodgeVille" value="42.9603,-90.1301">
              DodgeVille
            </option>
          </NativeSelect>
          {/* <FormHelperText>placeholder</FormHelperText> */}
        </FormControl>
      </div>
    );
  }
}

Change.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Change);
