import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./CardMui.css";
import { Grid } from "@mui/material";

interface IOwnProps {
  isFavorite?: boolean;
  url: string;
  altDescription: string;
}

const CardMui: React.FunctionComponent<IOwnProps> = (props) => {
  const { url, altDescription ,isFavorite} = props;
  return (
    <Grid item sm={4} md={4} className="CardMui">
      <Card sx={{ maxWidth: 345 }}>
        {isFavorite && (
          <CardHeader
            action={
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            }
          />
        )}
        <CardMedia
          component="img"
          height="194"
          image={url}
          alt={altDescription}
        />
      </Card>
    </Grid>
  );
};

export default CardMui;
