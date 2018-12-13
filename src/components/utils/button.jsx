import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";

const Button = props => {
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

  let toggle;
  if (props.toggle === true) toggle = "dropdown-menu";
  else toggle = "show";

  return (
    <div className="btn-group dropup">
      <button
        onClick={props.click}
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {props.label}
      </button>
      <div className={toggle} aria-labelledby="dropdownMenuButton">
        <button
          name="New York"
          onClick={props.loc}
          value="40.7128,-74.006"
          className="dropdown-item btn"
        >
          New York, NY
        </button>
        <button
          name="Chicago"
          onClick={props.loc}
          value="41.8781,-87.6298"
          className="dropdown-item btn"
        >
          Chicago, IL
        </button>
        <button
          name="Slade"
          onClick={props.loc}
          value="37.7951,-83.7041"
          className="dropdown-item btn"
        >
          Slade, KY
        </button>
        <button
          name="DodgeVille"
          onClick={props.loc}
          value="42.9603,-90.1301"
          className="dropdown-item btn"
        >
          DodgeVille, WI
        </button>
        <button
          name="Tampa, FL"
          onClick={props.loc}
          value="27.9506,-82.4572"
          className="dropdown-item btn"
        >
          Tampa, FL
        </button>
      </div>
    </div>
  );
};

export default Button;
