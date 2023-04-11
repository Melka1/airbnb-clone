
import getCurrentUser from "../actions/getCurrentUser";
import getFavourites from "../actions/getFavourites";

import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import FavouritesClient from "./FavouritesClient";

const FavouritesPage = async() => {
  const currentUser = await getCurrentUser()

  const favourites = await getFavourites() 

  if(favourites.length == 0){
    return (
      <ClientOnly>
        <EmptyState
          title="No Favourites found"
          subtitle="looks like you haven't reserved any trips."
        />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <FavouritesClient
        favourites={favourites}
        currentUser={currentUser}
      />
    </ClientOnly>
  )
}

export default FavouritesPage