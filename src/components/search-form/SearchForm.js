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
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';



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
  const [userSelectTechnique, setUserSelectTechnique] = React.useState("All");

  const [userSelectNationality, setUserSelectNationality] = React.useState("All");
  const [techniques, setTechniques] = React.useState(["All", "Glass", "Lithograph", "Textiles", "Woven", "Embroidered", "Printed"]);
  const [nationalities, setNationality] = React.useState(["All", "Italian", "French", "Dutch", "Russian"]);


  const [artists, setArtists] = React.useState([]);
  const [filteredArtists, setFilteredArtists] = React.useState([]);


  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSelectTechnique = (event) => {
    setUserSelectTechnique(event.target.value);
  };

  const handleSelectNationality = (event) => {
    setUserSelectNationality(event.target.value);
  }
  const handleClick = () => {

    let filteredArtists = context.artists;
    filteredArtists = filterByName(filteredArtists);
    //filteredArtists = filterByTechnique(filteredArtists);
    console.log(filteredArtists)

    filteredArtists = filterByNationality(filteredArtists);









    console.log(filteredArtists)
    setFilteredArtists(filteredArtists);



  };

  const filterByName = (filteredArtists) => {
    return filteredArtists.filter(el => el.name.toLowerCase().includes(userInput.toLowerCase()))
  }

  const filterByTechnique = (filterArtists) => {
    return filteredArtists.filter(el => userSelectTechnique === "All" || el.technique.includes(userSelectTechnique))
  }

  const filterByNationality = (filteredArtists => {
    return filteredArtists.filter(el => userSelectNationality === "All" || el.nationality === userSelectNationality)
  })

  useEffect(() => {
    setArtists(context.artists);
  }, []);

  return (
    <div>

      <Typography className="heading-one" variant="h3" component="h2" gutterBottom>
        Find your artist!
      </Typography>      <FormGroup className="inputs-fileds" row>

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
        <div>
          <FormGroup className="filters-fileds" row>

            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Technique
          </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={userSelectTechnique}
                onChange={handleSelectTechnique}
                label="Technique"
              >
                <MenuItem value="">
                </MenuItem>
                {techniques.map(technique => <MenuItem value={technique}>{technique}</MenuItem>)}

              </Select>
            </FormControl>
          </FormGroup>

        </div>
        <div>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              Nationality
          </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={userSelectNationality}
              onChange={handleSelectNationality}
              label="Nationality"
            >
              <MenuItem value="">
              </MenuItem>
              {nationalities.map(nationality => <MenuItem value={nationality}>{nationality}</MenuItem>)}

            </Select>
          </FormControl>

        </div>
      </FormGroup>

      <div className="search-button">
        <Button variant="contained" color="default" onClick={handleClick}>
          Find your artist
        </Button>
        <Link to="/artists/artist">
          <Button variant="contained" color="default">
            Browse all
        </Button>
        </Link>
        <ArtistsList filteredArtists={filteredArtists} />

      </div>


    </div>
  );
};

export default SearchForm;
