<template>
  <div class="grid place-items-center mt-3">
    <p>Please enter the founder's unique ID to get started.</p>
    <label>
      Founder ID:
      <search-founder @search="onSearch" />
    </label>
  </div>

  <error-boundary :error="error">
    <skeleton-loader v-if="loading" />
    <founder-index
      :founder-image="founderImage"
      :founder-details="founderDetails"
      v-if="!loading && founderDetails"
    />
    <company-index
      :company-details="companyDetails"
      v-if="!loading && companyDetails"
    />
  </error-boundary>
</template>

<script>
import { useCompanyFounderSearch } from '@/hooks/useCompanyFounderSearch'
import SearchFounder from '@/components/SearchFounder.vue'
import ErrorBoundary from '@/components/common/ErrorBoundary.vue'
import CompanyIndex from '@/components/company/CompanyIndex.vue'
import FounderIndex from '@/components/founder/FounderIndex.vue'
import SkeletonLoader from '@/components/common/SkeletonLoader.vue'

export default {
  components: {
    SearchFounder,
    ErrorBoundary,
    SkeletonLoader,
    CompanyIndex,
    FounderIndex,
  },
  setup() {
    const {
      founderImage,
      founderDetails,
      companyDetails,
      loading,
      error,
      searchFounder,
      founderId,
    } = useCompanyFounderSearch()

    function onSearch(query) {
      searchFounder(query)
    }

    return {
      founderImage,
      founderDetails,
      companyDetails,
      loading,
      error,
      onSearch,
      founderId,
    }
  },
}
</script>
