<template>
  <section class="services-section">
    <h1 class="services-title">خدمات توكلنا خلال فترة المنع</h1>
    <div class="services-container">
      <div
        class="services-card"
        v-for="service in services"
        :key="service.serviceId"
      >
        <ServiceCard :data="service" />
      </div>
    </div>
  </section>
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
