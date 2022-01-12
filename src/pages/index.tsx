import Home from 'templates/Home'
import React, { useState, useEffect } from 'react'
import Loading from 'components/Loading/Loding';

export default function Index() {
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
          <Home />
        </>
        )
    }
  </>
}