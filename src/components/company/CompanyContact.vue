<template>
  <div class="mt-6">
    <v-card>
      <template #title>Company Contact Details</template>
      <div class="grid grid-cols-2 gap-4 mt-2 text-gray-700 px-4">
        <div class="col-span-2">
          <div>
            <strong>Name:</strong> {{ contactDetails?.firstname }}
            {{ contactDetails?.lastname }}
          </div>
          <div><strong>Email:</strong> {{ contactDetails.email }}</div>
          <div><strong>Phone:</strong> {{ contactDetails.phone }}</div>
          <div>
            <strong>Birthday:</strong>
            {{ formatDate(contactDetails?.birthday) }}
          </div>
          <div><strong>Gender:</strong> {{ contactDetails.gender }}</div>
          <div><strong>Website:</strong> {{ contactDetails.website }}</div>
        </div>
        <ul v-for="(address, i) in contactAddress" :key="i">
          <address-details :address-details="address" />
        </ul>
      </div>
    </v-card>
  </div>
</template>

<script>
import { useCommon } from '@/hooks/useCommon'
import AddressDetails from './AddressDetails.vue'
import VCard from '@/components/ui/Vcard.vue'

export default {
  setup() {
    const { formatDate } = useCommon()
    return {
      formatDate,
    }
  },
  props: {
    contactDetails: Object,
  },
  components: {
    AddressDetails,
    VCard,
  },
  computed: {
    contactAddress() {
      const cAddress = this.contactDetails?.address
      const result = []
      if (cAddress) {
        result.push(cAddress)
      }
      return result
    },
  },
}
</script>
