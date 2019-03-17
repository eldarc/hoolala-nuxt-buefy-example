<template>
  <div>
    <draggable
      :list="groups"
      @end="updateGroupsOrder">
      <transition-group>
        <div
          v-for="group in groups"
          :key="group"
          :class="{'is-outlined': value !== group}"
          class="category__button mb-10 button is-primary is-inverted is-fullwidth is-flex"
          @click="$emit('input', group)">
          <div>
            <i class="mdi mdi-drag"/>
          </div>
          <div>
            {{ group }}
          </div>
          <div
            class="category__button__close"
            @click="removeGroup(group)">
            <i class="mdi mdi-close-circle"/>
          </div>
        </div>
      </transition-group>
    </draggable>

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
</template>

<script>
import { mapGetters } from 'vuex'
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      newGroupField: ''
    }
  },
  computed: {
    ...mapGetters({
      groups: 'items/getGroups'
    })
  },
  methods: {
    removeGroup(group) {
      const isGroupSelected = this.value === group

      this.$store.dispatch('items/removeGroup', group).then(() => {
        if (isGroupSelected && this.groups.length > 0) {
          this.$nextTick(() => {
            this.$emit('input', this.groups[0])
          })
        } else if (this.groups.length === 0) {
          this.$emit('input', null)
        }
      })
    },
    addNewGroup(newGroup) {
      if (this.groups.find(group => group === newGroup)) {
        this.$emit('input', newGroup)
        this.newGroupField = ''
        return
      }

      const selectNewGroup = !this.value
      this.$store.dispatch('items/addGroup', newGroup).then(group => {
        this.newGroupField = ''

        if (selectNewGroup) {
          this.$emit('input', group)
        }
      })
    },
    updateGroupsOrder() {
      this.$store.commit('items/setGroups', this.groups)
    }
  }
}
</script>

<style lang="scss" scoped>
.category {
  &__button {
    justify-content: space-between;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0;

    &.sortable-chosen.sortable-ghost {
      opacity: 0;
    }

    &.sortable-fallback {
      opacity: 1 !important;
    }

    &__close {
      color: darken($red, 10%);
    }
  }
}
</style>
