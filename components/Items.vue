<template>
  <div class="columns is-centered mt-30">
    <div class="items column">
      <div class="columns">
        <groups
          v-model="activeGroup"
          class="items__categories column is-one-quarter pr-0"/>
        <item-list
          :group="activeGroup"
          class="column is-three-quarters"/>
      </div>
    </div>
  </div>
</template>

<script>
import Groups from '@/components/Groups.vue'
import ItemList from '@/components/ItemList.vue'

export default {
  components: {
    Groups,
    ItemList
  },
  data() {
    return {
      activeGroup: ''
    }
  },
  created() {
    this.activeGroup = this.$store.getters['items/getGroups'][0] || ''
  }
}
</script>

<style lang="scss" scoped>
.items {
  border-radius: 10px;
  max-width: 1024px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &__categories {
    background-color: $turquoise;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
  }
}
</style>
