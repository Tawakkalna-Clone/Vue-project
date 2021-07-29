<template>
  <div class="service-content">
    <img :src="data.serviceIcon" class="icon" />
    <h1>{{ data.serviceName }}</h1>
    <p>{{ data.serviceDesc }}</p>
  </div>
</template>

<script>
export default {
  name: "ServiceCard",
  props: {
    data: Object,
  },
};
</script>

<style>
.service-content h1 {
  font-size: large;
}
.service-content p {
  font-size: 12px;
  line-height: 1.5em;
}
.icon {
  width: 35px;
  height: auto;
}
</style>
