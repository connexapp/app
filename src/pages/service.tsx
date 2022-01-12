import ServiceForm from 'templates/Service'
import React, { useState, useEffect } from 'react'
import Loading from 'components/Loading/Loding';

export default function Service() {
  const [loading, setLoading] = useState(false)

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
          <ServiceForm />

        </>
        )
    }
  </>
}
