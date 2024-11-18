<template>
  <li>
    <div class="text-gray-500 font-bold text-sm">
      Address {{ idx > 0 ? idx : null }}:
    </div>
    <p>{{ fullAddress }}</p>
  </li>
</template>

<script>
export default {
  props: {
    addressDetails: Object,
    idx: {
      required: false,
      type: Number,
      default: 0,
    },
  },
  computed: {
    fullAddress() {
      return [
        this.addressDetails?.street,
        this.addressDetails?.streetName,
        this.addressDetails?.buildingNumber,
        this.addressDetails?.zipcode,
        this.addressDetails?.country,
      ]
        .filter(e => e)
        .join(', ')
    },
  },
}
</script>
