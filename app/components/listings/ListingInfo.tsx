import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types"
import { IconType } from "react-icons";
import ListingCategory from "./ListingCategory";
import Avatar from "../Avatar";
import dynamic from "next/dynamic";

interface ListingInfoProps {
  user:SafeUser;
  category:{
    icon:IconType;
    label:string;
    description:string
  }|undefined;
  roomCount:number;
  guestCount:number;
  bathroomCount:number;
  locationValue:string;
  description:string;
}

const ListingInfo:React.FC<ListingInfoProps> = ({
  user,
  category,
  roomCount,
  guestCount,
  bathroomCount,
  locationValue,
  description
})=>{

  const {getByValue} = useCountries()

  const coordinates = getByValue(locationValue)?.latlng;

  const Map = dynamic(()=>import('../Map'),{ssr:false})

  return (
    <div
      className="
        col-span-6 flex flex-col gap-6
      "
    >
      <div
        className="
          flex flex-col gap-2
        "
      >
        <div
          className="
            text-xl
            font-semibold
            flex
            flex-row
            items-center
            gap-2
          "
        >
          <p>Hosted by {user?.name}</p>
          <Avatar src={user?.image}/>
        </div>
        <div
          className="
            flex
            flex-row
            items-center
            gap-4
            font-light
            text-neutral-500
          "
        >
          <p>{guestCount} guests</p>
          <p>{roomCount} rooms</p>
          <p>{bathroomCount} bathrooms</p>
        </div>
      </div>
      <hr/>
      {category&&(
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
      <hr/>
      <p
        className="
          text-lg
          font-light
          text-neutral-500
        "
      >{description}</p>
      <hr />
      <Map
        center={coordinates}
      />
    </div>
  )
}

export default ListingInfo