import { useContext } from "react";
import MeetupList from "../components/layout/meetups/MeetupList";
import { FavoritesContext } from "../store/favorites-context";

const Favorite = () => {
  const favoriteCtx = useContext(FavoritesContext);
  let content;

  if (favoriteCtx.favorites.length === 0) {
    content = <p>You got no favorites yet. Start adding some ?</p>
    

  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
    console.log(content)

  }

  return (
    <section>
      <h1>Favorite</h1>
      {content}
    </section>
  );
};

export default Favorite;
