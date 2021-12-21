import { Container, Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CardMui from "../../components/CardMui/CardMui";
import SearchMui from "../../components/SearchMui/SearchMui";
import { getToken } from "../../features/actions/auth.actions";
import { selectImagesList } from "../../features/selectors/images.selectors";

function ImagesView() {
  const images: any = useSelector(selectImagesList);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const code = window.location.search.split("code=")[1];
    if (code) {
      dispatch(getToken(code));
    }
  }, []);

  return (
    <Container>
      <SearchMui />
      {images && (
        <Grid
          container
          alignItems="center"
          spacing={{ xs: 2, md: 3 }}
          columns={{ sm: 8, md: 12 }}
        >
          {images.map((image) => {
            return (
              <CardMui
                key={image.id}
                url={image.urls.small}
                altDescription={image.alt_description}
              />
            );
          })}
        </Grid>
      )}
    </Container>
  );
}

export default ImagesView;
