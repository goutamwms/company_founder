import { ref } from 'vue'
import { fetchFounderData } from '../services/apiService'

export function useCompanyFounderSearch() {
  const founderImage = ref(null)
  const founderDetails = ref(null)
  const companyDetails = ref(null)
  const founderId = ref(null)
  const loading = ref(false)
  const error = ref(null)

  async function searchFounder(query) {
    loading.value = false
    error.value = null

    if (query.trim() !== '') {
      loading.value = true
      try {
        const [details, company] = await fetchFounderData(
          [
            `https://randomuser.me/api/?seed=${query}`,
            `https://fakerapi.it/api/v2/companies?_quantity=1&_seed=${query}`,
          ],
          `search-${query}`,
        )
        founderImage.value = `https://robohash.org/${query}.png?gravatar=hashed`
        founderDetails.value = details?.results[0]
        companyDetails.value = company?.data[0]
        founderId.value = query
      } catch (err) {
        error.value = err
      } finally {
        loading.value = false
      }
    } else {
      founderImage.value = null
      founderDetails.value = null
      companyDetails.value = null
      founderId.value = null
    }
  }

  return {
    founderImage,
    founderDetails,
    companyDetails,
    loading,
    error,
    searchFounder,
    founderId,
  }
}
