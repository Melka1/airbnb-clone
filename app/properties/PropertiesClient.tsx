'use client'

import { useRouter } from "next/navigation";

import { SafeListing, SafeUser } from "../types";

import Heading from "../components/heading";
import Container from "../components/navbar/Container";
import { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import ListingCard from "../components/listings/ListingCard";


interface PropertiesClientProps {
  properties:SafeListing[],
  currentUser?:SafeUser|null
}

const PropertiesClient:React.FC<PropertiesClientProps> = ({
  properties,
  currentUser
}) => {

  const router = useRouter()
  const [deletedId, setDeletedId] = useState('')

  const onCancel = useCallback((id:string)=>{
    setDeletedId(id)

    axios.delete(`/api/listings/${id}`)
      .then(()=>{
        toast.success("Property deleted")
        router.refresh()
      })
      .catch((error)=>{
        toast.error(error?.response?.data?.error)
      })
      .finally(()=>{
        setDeletedId("")
      })
  },[router])

  return (
    <Container>
      <Heading
        title="Properties"
        subtitle="List of your Properties"
      />
      <div
        className="
          mt-10
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {properties.map(property=>(
          <ListingCard
            key={property.id}
            data={property}
            actionId={property.id}
            onAction={onCancel}
            disabled={deletedId==property.id}
            actionLabel="Delete property"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default PropertiesClient;