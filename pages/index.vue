<template>
  <div>

    <section class="hero">
      <div class="hero-body">
        <div
          class="container"
          style="text-align: center">
          <img
            style="max-height: 120px;"
            src="@/assets/logo.svg"
            alt="Hoolala">
        </div>
      </div>
    </section>

    <div class="container">
      <b-tabs
        type="is-toggle-rounded"
        position="is-centered"
        class="block">
        <b-tab-item
          label="Items"
          icon="format-list-bulleted">
          <items/>
        </b-tab-item>
        <b-tab-item
          label="Cost"
          icon="cash-multiple"/>
        <b-tab-item
          label="Offers"
          icon="tag"/>
      </b-tabs>
    </div>

  </div>
</template>

<script>
import Items from '@/components/Items.vue'
export default {
  name: 'Homepage',
  components: {
    Items
  },
  data() {
    return {}
  }
}
</script>
