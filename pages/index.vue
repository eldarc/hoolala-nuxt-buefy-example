<template>
  <div class="pb-80">

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
          label="Overview"
          icon="cash-multiple">
          <overview/>
        </b-tab-item>
        <b-tab-item
          label="Tutorial"
          icon="help-circle">
          <tutorial/>
        </b-tab-item>
      </b-tabs>
    </div>

  </div>
</template>

<script>
import Items from '@/components/Items.vue'
import Overview from '@/components/Overview.vue'
import Tutorial from '@/components/Tutorial.vue'

export default {
  name: 'Homepage',
  components: {
    Items,
    Overview,
    Tutorial
  },
  data() {
    return {}
  }
}
</script>
