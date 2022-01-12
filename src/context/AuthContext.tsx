import {
  getCurrentToken,
  saveToken,
  deleteToken,
  saveUser,
  deleteUser
} from 'utils/localStorage'
import useRequest, { useRequestConfig } from 'hooks/useRequest'
import React, { createContext, useEffect, useState } from 'react'
import Router from 'next/router'

type User = {
  name: string
  id: number
  provider: any
  profilePictureUrl: string
}

export type SignInData = {
  email: string
  password: string
}

type SignUpData = {
  name: string
  email: string
  password: string
  phoneNumber: string
}

type ProviderData = {
  name: string
  email: string
}

type AuthContextType = {
  isAuthenticated: boolean
  user: User | null
  signIn: (data: SignInData) => Promise<any>
  signUp: (data: SignUpData) => Promise<any>
  signInProvider: (data: ProviderData) => Promise<any>
  logout: () => Promise<any>
}

export const AuthContext = createContext({} as AuthContextType)

type AuthProviderProp = {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProp) {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(!!user)
  const { request } = useRequest()

  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    setIsAuthenticated(!!user)
  }, [user])

  const getUser = async () => {
    const config: useRequestConfig = {
      method: 'GET',
      url: '/user/read',
      sendToken: true
    }

    const response = await request(config)

    const token = getCurrentToken()

    if (token && response) {
      setUser(response)
      saveUser(response)
    }
  }

  async function signIn({ email, password }: SignInData): Promise<any> {
    const config: useRequestConfig = {
      method: 'POST',
      url: '/auth/login',
      data: {
        email,
        password
      }
    }

    const response = await request(config)

    if (response.user && response.token) {
      saveToken(response.token)
      getUser()

      Router.push('/')
    }

    return response
  }

  async function signInProvider({ email, name }: ProviderData): Promise<any> {
    const config: useRequestConfig = {
      method: 'POST',
      sendToken: true,
      url: '/provider',
      data: {
        email,
        name
      }
    }

    const response = await request(config)

    if (!response.error) {
      getUser()

      Router.push('/')
    }

    return response
  }

  async function signUp({
    name,
    email,
    password,
    phoneNumber
  }: SignUpData): Promise<any> {
    const config: useRequestConfig = {
      method: 'POST',
      url: '/auth/signup',
      data: {
        name,
        email,
        password,
        phoneNumber
      }
    }

    const response = await request(config)

    if (response.user && response.token) {
      saveToken(response.token)
      getUser()

      Router.push('/')
    }

    return response
  }

  async function logout() {
    const config: useRequestConfig = {
      method: 'POST',
      url: '/auth/logout'
    }

    await request(config)

    deleteToken()
    deleteUser()

    Router.reload()
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, logout, signUp, signInProvider }}
    >
      {children}
    </AuthContext.Provider>
  )
}
