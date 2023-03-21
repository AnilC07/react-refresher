import React, { useContext } from "react";
import { FavoritesContext } from "../../../store/favorites-context";
import Card from "../UI/Card";

import classes from "./MeetupItem.module.css";

const MeetupItem = ({ id, image, title, address, description }) => {
  console.log(id);
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(id);

  const toggleFavouriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorites(id);
    } else {
      favoritesCtx.addFavorite({ id, image, title, address, description });
    }
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>{itemIsFavorite ? 'Remove from favorites' : 'To favorites'}</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
