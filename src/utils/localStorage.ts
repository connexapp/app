export const saveToken = (token: string) => {
  localStorage.setItem('token', token)
}

export const getCurrentToken = () => {
  return localStorage.getItem('token')
}

export const deleteToken = () => {
  return localStorage.removeItem('token')
}

export const saveUser = (user: string) => {
  const userJSON = JSON.stringify(user)
  localStorage.setItem('user', userJSON)
}

export const deleteUser = () => {
  return localStorage.removeItem('user')
}

export const getCurrentUser = () => {
  const user = localStorage.getItem('user')
  return JSON.parse(user!)
}
