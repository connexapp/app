import { useState, useCallback } from 'react'
import axios, { AxiosInstance } from 'axios'
import { getCurrentToken } from 'utils/localStorage'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

const errorHandler = (statusError: number) => {
  switch (statusError) {
    case 400:
      return 'Preencha corretamente os seus dados!'
    case 401:
      return 'Sua sessão expirou, faça login novamente'
    case 403:
      return 'Não autorizado'
    case 429:
      return 'Muitas requisições! Aguarde um pouco'
    case 404:
      return 'Recurso não encontrado'
    case 500:
      return 'Erro no servidor interno'
    default:
      return 'Default error'
  }
}

export type useRequestConfig = {
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'
  url: string
  sendToken?: boolean
  headers?: any
  data?: any
}

const useRequest = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const request = useCallback(async (config: useRequestConfig) => {
    setError('')

    try {
      if (config.sendToken) {
        config.headers = { Authorization: 'Bearer ' + getCurrentToken() }
      }

      setLoading(true)

      const response = await axiosInstance(config)
      return response.data
    } catch (error) {

      const errorMessage = errorHandler(error.response.status)

      setError(errorMessage)

      const errorResponse = {
        error: {
          statusCode: error.response.data.statusCode,
          message: error.response.data.message
        }
      }

      return errorResponse
    } finally {
      setLoading(false)
    }
  }, [])

  return { error, loading, request, setLoading }
}

export default useRequest
