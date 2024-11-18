<template>
  <div class="mt-6">
    <v-card>
      <template #title>Company Details</template>
      <div class="grid grid-cols-2 gap-4 mt-2 text-gray-700 px-4">
        <div class="col-span-2">
          <div><strong>Name:</strong> {{ companyDetails.name }}</div>
          <div><strong>Email:</strong> {{ companyDetails.email }}</div>
          <div><strong>Vat:</strong> {{ companyDetails.vat }}</div>
          <div><strong>Phone:</strong> {{ companyDetails.phone }}</div>
          <div><strong>Country:</strong> {{ companyDetails.country }}</div>
          <div><strong>Website:</strong> {{ companyDetails.website }}</div>
        </div>
        <ul v-for="(address, i) in addresses" :key="i">
          <address-details :address-details="address" :idx="i + 1" />
        </ul>
      </div>
    </v-card>
  </div>
  <company-contact :contact-details="contactDetails" v-if="contactDetails" />
</template>

<script>
import VCard from '@/components/ui/Vcard.vue'
import AddressDetails from './AddressDetails.vue'
import CompanyContact from './CompanyContact.vue'
export default {
  props: {
    companyDetails: Object,
  },
  components: {
    AddressDetails,
    CompanyContact,
    VCard,
  },
  computed: {
    addresses() {
      return this.companyDetails?.addresses
    },
    contactDetails() {
      return this.companyDetails?.contact
    },
  },
}
</script>
