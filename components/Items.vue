<template>
  <div class="columns is-centered mt-30">
    <div class="items column is-paddingless">
      <div class="items__categories column is-one-third pr-0">
        <a
          v-for="group in groups"
          :key="group.name"
          :class="{'is-outlined': selectedGroup !== group.name}"
          class="items__category-button mb-10 button is-primary is-inverted is-fullwidth"
          @click="selectedGroup = group.name">
          <i class="mdi mdi-format-list-bulleted is-pulled-left"/>
          {{ group.name }}</a>
        <!--<a class="items__category-button mb-10 button is-primary is-inverted is-outlined is-fullwidth">Inverted</a>-->

        <form @submit.prevent="addNewGroup(newGroupField)">
          <b-field class="mt-20 mr-10">
            <b-input
              v-model="newGroupField"
              placeholder="Add new group"
              type="text"/>
          </b-field>
          <button
            style="display: none;"
            type="submit">Submit</button>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      selectedGroup: null,
      newGroupField: ''
    }
  },
  computed: {
    groups() {
      const groups = this.$store.getters['items/getGroups']
      groups.sort((a, b) => {
        return a.order - b.order
      })

      return groups
    }
  },
  methods: {
    addNewGroup(newGroup) {
      if (this.groups.find(group => group.name === newGroup)) {
        this.selectedGroup = newGroup
        this.newGroupField = ''
        return
      }

      const selectNewGroup = !this.selectedGroup
      this.$store.dispatch('items/addGroup', newGroup.trim()).then(group => {
        this.newGroupField = ''

        if (selectNewGroup) {
          this.selectedGroup = group
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.items {
  border: solid 1px lighten(#888, 30%); // TODO: Import sass resources
  border-radius: 10px;
  max-width: 768px;

  &__categories {
    background-color: #6abfb0;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
  }

  &__category-button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0;
  }
}
</style>
