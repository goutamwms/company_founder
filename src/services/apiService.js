import axios from 'axios'
import { getCachedData, setCachedData } from './cacheService'

export async function fetchFounderData(endpoints, cacheKey) {
  const cachedData = await getCachedData(cacheKey)
  if (cachedData) return cachedData

  const responses = await Promise.all(endpoints.map(url => axios.get(url)))
  const data = responses.map(response => response.data)

  setCachedData(cacheKey, data)
  return data
}
