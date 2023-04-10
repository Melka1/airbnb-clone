
import getCurrentUser from "../actions/getCurrentUser";

import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getListings from "../actions/getListings";
import PropertiesClient from "./PropertiesClient";

const PropertiesPage = async() => {
  const currentUser = await getCurrentUser()

  if(!currentUser){
    return (
      <ClientOnly>
        <EmptyState
          title='Unauthorized'
          subtitle="Please login"
        />
      </ClientOnly>
    )
  }

  const properties = await getListings({
    userId:currentUser.id
  }) 

  if(properties.length == 0){
    return (
      <ClientOnly>
        <EmptyState
          title="No properties found"
          subtitle="looks like you haven't no properties."
        />
      </ClientOnly>
    )
  }

  return (
    <ClientOnly>
      <PropertiesClient
        properties={properties}
        currentUser={currentUser}
      />
    </ClientOnly>
  )
}

export default PropertiesClient