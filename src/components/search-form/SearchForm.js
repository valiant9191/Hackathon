import "./SearchForm.css";
import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../../context/ContextProvider";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import ArtistsList from "../artists-list";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "35ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  },
  selectEmpty: {
    marginTop: theme.spacing(4),
  },
}));

const SearchForm = () => {
  const classes = useStyles();
  const context = useContext(MyContext);
  const [userInput, setUserInput] = React.useState("");
  const [userSelectTechnique, setUserSelectTechnique] = React.useState("");
  const [artists, setArtists] = React.useState([]);
  const [filteredArtists, setFilteredArtists] = React.useState([]);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSelectTechnique = (event) => {
    setUserSelectTechnique(event.target.value);
  };

  const handleClick = () => {

    let filteredArtists = context.artists;
    filteredArtists = filterByName(filteredArtists);
    console.log(filteredArtists)
    setFilteredArtists(filteredArtists);

  };

  const filterByName = (filteredArtists) => {
      return filteredArtists.filter(el => el.name.toLowerCase().includes(userInput.toLowerCase()))
  }

  useEffect(() => {
    setArtists(context.artists);
  }, []);

  return (
    <div className="form_wrap">
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-search"
            label="Artist name"
            type="search"
            variant="outlined"
            value={userInput}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className="form-btn_wrap">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Technique
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={userSelectTechnique}
            onChange={handleSelectTechnique}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="form-button_wrap">
      <div className="search-btn_wrap">
        <Button variant="contained" color="default" onClick={handleClick}>
          Find your artist
        </Button>
        <Link to="/artists/artist">
        <Button variant="contained" color="default">
          Find ALL artist
        </Button>
        </Link>
        </div>
        <ArtistsList filteredArtists={filteredArtists} />
      </div>
    </div>
  );
};

export default SearchForm;
