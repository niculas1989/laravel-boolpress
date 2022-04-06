<template>
  <div :class="`alert alert-${type} || 'info'`" role="alert">{{ message }}</div>
</template>

<script>
export default {
  props: ["message", "type"],
  name: "Alert",
};
</script>
