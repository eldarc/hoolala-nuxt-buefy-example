<template>
  <div class="columns is-centered mt-30">
    <div class="tutorial column">
      <img
        class="mb-10"
        src="@/assets/tutorial-1.gif"
        alt="Tutorial 1">
      <img
        src="@/assets/tutorial-2.gif"
        alt="Tutorial 2">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.tutorial {
  border-radius: 10px;
  max-width: 1024px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  text-align: center;
}
</style>
