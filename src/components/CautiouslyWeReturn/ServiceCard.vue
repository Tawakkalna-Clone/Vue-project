<template>
  <h1>{{ data.serviceName }}</h1>
  <p>{{ data.serviceDesc }}</p>
</template>

<script>
export default {
  name: "ServiceCard",
  props: {
    data: Object,
  },
};
</script>
