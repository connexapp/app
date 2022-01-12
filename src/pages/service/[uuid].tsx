import { useRouter } from 'next/router'
import EditingService from 'templates/EditingService'
import React, { useState, useEffect } from 'react'
import Loading from 'components/Loading/Loding';

export default function Service() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { uuid } = router.query
  
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  return <>
    {
      loading ?
        (
          <Loading />
        ) :
        (<>
          <EditingService uuid={uuid as string}/>
        </>
        )
    }
  </>
}
