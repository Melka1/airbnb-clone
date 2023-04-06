'use client'

import { useSearchParams, usePathname } from 'next/navigation'
import Container from './Container'
import CategoryBox from '../CategoryBox'
import {TbBeach, TbMountain, TbPool} from 'react-icons/tb'
import {GiBarn, GiCactus, GiCaveEntrance, GiWindmill, GiIsland,GiForestCamp,GiBoatFishing} from 'react-icons/gi'
import {MdOutlineVilla} from 'react-icons/md'
import {FaSkiing} from 'react-icons/fa'
import {BsSnow} from 'react-icons/bs'
import {IoDiamond} from 'react-icons/io5'

export const categories = [
  {
    label:'Beach',
    icon:TbBeach,
    description:'This propery is close to the beach!'
  },
  {
    label:'Windmills',
    icon:GiWindmill,
    description:'This propery has windmill!'
  },
  {
    label:'Modern',
    icon:MdOutlineVilla,
    description:'This propery is modern!'
  },
  {
    label:'Countrside',
    icon:TbMountain,
    description:'This propery is in countryside!'
  },
  {
    label:'polls',
    icon:TbPool,
    description:'This propery has a pool!'
  },
  {
    label:'Islands',
    icon:GiIsland,
    description:'This propery is on an island!'
  },
  {
    label:'Lake',
    icon:GiBoatFishing,
    description:'This propery is close to the lake!'
  },
  {
    label:'Skiing',
    icon:FaSkiing,
    description:'This propery has skiing activities!!'
  },
  {
    label:'Camping',
    icon:GiForestCamp,
    description:'This propery has camping activities!'
  },
  {
    label:'Arctic',
    icon:BsSnow,
    description:'This propery has camping activities!'
  },
  {
    label:'Cave',
    icon:GiCaveEntrance,
    description:'This propery is in a cave!'
  },
  {
    label:'Desert',
    icon:GiCactus,
    description:'This propery is in the desert!'
  },
  {
    label:'Barns',
    icon:GiBarn,
    description:'This propery is in the barn!'
  },
  {
    label:'Lux',
    icon:IoDiamond,
    description:'This propery is luxurious!'
  },
]

const Categories = () =>{
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname= usePathname();

  const isMainPage = pathname === '/'

  if(!isMainPage){
    return null
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex
          flex-row
          items-center
          justify-between
          overflow-x-auto
        "
      >
        {
          categories.map(item=>(
            <CategoryBox
              key={item.label}
              label={item.label}
              description={item.description}
              icon={item.icon}
              selected={category === item.label}
            />
          ))
        }
      </div>
    </Container>
  )
}

export default Categories