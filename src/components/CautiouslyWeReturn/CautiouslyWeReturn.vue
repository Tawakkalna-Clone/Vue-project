<template>
  <section class="services-section">
    <h1 class="services-title">خدمات توكلنا خلال فترة العودة بحذر</h1>
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
import ServiceCard from "./ServiceCard.vue";
import data from "./data";
export default {
  name: "CautiouslyWeReturn",
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
<style>
.services-title {
  margin: 2em 0em;
  text-align: center;
  /* font-weight: bold; */
  font-size: 1.8em;
  color: #1ea99a;
}
.services-card {
  color: #333e4b;
}
.services-card h1{
  /* font-weight: bold; */
  transition: color 0.5s;
}
.services-card:hover h1 {
  color: #1ea99a;
}
.services-card:hover img {
  animation: flip 1s forwards;
}
@keyframes flip {
  from{
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(-180deg);
  }
}
.services-section {
  background-color: #f8fbff;
  padding: 30px 50px;
  text-align: end;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.services-container {
  display: grid;
  grid-template-columns: repeat(4, 20%);
  grid-gap: 5%;
}
</style>