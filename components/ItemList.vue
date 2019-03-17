<template>
  <div>
    <template v-if="!group">
      Please add some groups before adding items.
    </template>
    <template v-else>
      <form @submit.prevent="addNewItem(newItemField)">
        <b-field class="is-fullwidth">
          <b-input
            v-model="newItemField"
            placeholder="Add new item"
            type="text"/>
        </b-field>
        <button
          style="display: none;"
          type="submit">Submit</button>
      </form>

      <b-table
        v-if="items && items.length > 0"
        :data="items"
        :columns="getColumns()"
        class="is-fullwidth">
        <template slot-scope="props">
          <b-table-column field="title">
            <b-field>
              <b-input v-model="props.row.title"/>
            </b-field>
          </b-table-column>

          <b-table-column field="type">
            <b-field>
              <b-select
                v-model="props.row.type"
                placeholder="Type">
                <option
                  v-for="option in ['Piece', 'kg', 'g', 'cm', 'm', 'l']"
                  :value="option"
                  :key="option">
                  {{ option }}
                </option>
              </b-select>
            </b-field>
          </b-table-column>

          <b-table-column field="quantity">
            <b-field>
              <b-input v-model="props.row.quantity"/>
            </b-field>
          </b-table-column>

          <b-table-column field="price">
            <b-field>
              <b-input v-model="props.row.price"/>
            </b-field>
          </b-table-column>

          <b-table-column
            class="remove-item__wrapper"
            field="delete">
            <div
              class="remove-item"
              @click="removeItem(props.row)">
              <i class="mdi mdi-backspace"/>
            </div>
          </b-table-column>
        </template>
      </b-table>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    group: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      newItemField: ''
    }
  },
  computed: {
    items: {
      get() {
        if (this.group) {
          return this.$store.getters['items/getItems'][this.group]
        } else {
          return []
        }
      },
      set(items) {
        if (this.group) {
          this.$store.state.items[this.group] = items
        }
      }
    }
  },
  methods: {
    removeItem(row) {
      this.items.splice(this.items.indexOf(row), 1)
    },
    getColumns() {
      // Table columns are hard-coded inside a method prevent side-effects which b-table can have on the columns definition.
      return [
        {
          field: 'title',
          label: 'Item'
        },
        {
          field: 'type',
          label: 'Type'
        },
        {
          field: 'quantity',
          label: 'Quantity'
        },
        {
          field: 'price',
          label: 'Price per unit'
        },
        {
          field: 'delete',
          label: ''
        }
      ]
    },
    addNewItem(title) {
      this.items.push({
        title: title,
        type: 'Piece',
        quantity: 1,
        price: 0
      })

      this.newItemField = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.remove-item {
  color: darken($red, 10%);
  cursor: pointer;

  &__wrapper {
    vertical-align: middle;
  }
}
</style>
