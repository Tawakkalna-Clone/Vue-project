<template>
  <div class="container">
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
.icon {
  width: 45px;
}
</style>
