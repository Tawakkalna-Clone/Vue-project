<template>
  <div v-for="service in services" :key="service.serviceId">
    <ServiceCard :data="service" />
  </div>
</template>

<script>
import ServiceCard from "../CautiouslyWeReturn/ServiceCard.vue";
import data from "./data";
export default {
  name: "Curfew",
  components: {
    ServiceCard,
  },
  data() {
    return {
      services: data,
    };
  },
};
</script>
