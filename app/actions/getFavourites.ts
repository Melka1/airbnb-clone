import prisma from '@/app/libs/prismadb'

import getCurrentUser from './getCurrentUser';

export default async function getFavouries(){
  try {

    const currentUser = await getCurrentUser()

    if(!currentUser)return []

    const favourites = await prisma.listing.findMany({
      where:{
        id:{
          in:[...(currentUser.favouriteIds || [])]
        }
      },
      
      orderBy:{
        createdAt:'desc'
      }
    })

    const safeFavourites = favourites.map(favourite =>({
      ...favourite,
      createdAt:favourite.createdAt.toString()
    }))

    return safeFavourites
  } catch (error:any) {
    throw new Error(error)
  }
}