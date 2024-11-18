<template>
  <div v-if="founderDetails">
    <founder-profileHeader
      :profile-picture="founderImage"
      :profile-name="founderDetails?.name"
      :registered="founderDetails?.registered?.date"
    />
    <founder-details :details="founderDetails" />
  </div>
</template>

<script>
import FounderProfileHeader from './FounderProfileHeader.vue'
import FounderDetails from './FounderDetails.vue'

export default {
  props: {
    founderDetails: Object,
    founderImage: String,
  },
  components: {
    FounderProfileHeader,
    FounderDetails,
  },
}
</script>
