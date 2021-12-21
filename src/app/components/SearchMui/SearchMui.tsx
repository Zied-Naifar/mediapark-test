import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { loadSearchValues } from "../../utils/storage";
import "./SearchMui.css";
import {
  fetchImages,
  setSearchValue,
} from "../../features/actions/images.actions";
import { useSelector, useDispatch } from "react-redux";
import LoadingButton from "@mui/lab/LoadingButton";
import { Grid } from "@mui/material";
import { selectSearchValue } from "../../features/selectors/images.selectors";

const SearchMui: React.FunctionComponent = () => {
  const searchValue: string = useSelector(selectSearchValue);
  const [searchValues, setSearchValues] = React.useState(loadSearchValues());

  React.useEffect(() => {
    setSearchValues(loadSearchValues())
  }, [searchValue])
  
  const dispatch = useDispatch();

  return (
    <Grid
      className="SearchMui"
      container
      spacing={1}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item sx={{ width: 300 }}>
        <Autocomplete
          freeSolo
          disableClearable
          id="search_input"
          options={searchValues.map(val => val)}
          onInputChange={(event: any, newValue: string | null) => {
            dispatch(setSearchValue(newValue));

            
          }}
          inputValue={searchValue}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search..."
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </Grid>
      <Grid item sx={{ width: 300 }}>
        <LoadingButton
          className="SearchMui__LoadingButton"
          size="large"
          loading={false}
          variant="outlined"
          onClick={() => {
            dispatch(fetchImages(searchValue));
          }}
        >
          Submit
        </LoadingButton>
      </Grid>
    </Grid>
  );
};

export default SearchMui;
