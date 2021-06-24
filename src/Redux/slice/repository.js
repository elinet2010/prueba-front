import axios from 'axios'

/**
 * Get Users from API
 * @returns {response} response axios
 */
export const fetchAllUsers = () => {
  const url = 'https://cjh3xsu0m2.execute-api.us-east-2.amazonaws.com/prod/usuarios/-nit'
  return axios.get(url).then((r) => r.data)
}
