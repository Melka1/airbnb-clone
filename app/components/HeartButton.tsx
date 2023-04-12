'use client'

import {SafeUser} from '@/app/types'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import useFavourite from '../hooks/useFavourites'

interface HeartButtonProps {
  listingId: string,
  currentUser?:SafeUser|null,
}

const HeartButton:React.FC<HeartButtonProps> = ({
  listingId,
  currentUser
}) =>{

  const {hasFavourited, toggleFavourite} = useFavourite({
    listingId, currentUser
  })
  
  return (
    <div
      onClick={toggleFavourite} 
      className='
        relative
        hover:opacity-80
        transition
        cursor-pointer
      ' 
    >
      <AiOutlineHeart
        size={28}
        className='
          fill-white
          absolute
          
        '
      />
      <AiFillHeart
        size={28}
        className={
          hasFavourited ? 'fill-rose-500' : 'fill-neutral-500/70'
        }
      />
    </div>
  )
}

export default HeartButton