'use client'

import {useState, useEffect } from 'react'

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly:React.FC<ClientOnlyProps> = ({children}) =>{
  const [hasRendered, setHasRendered] = useState(false)

  useEffect(() =>{
    setHasRendered(true)
  }, [])

  return hasRendered? (
    <>
      {children}
    </>
  ) : null
}

export default ClientOnly