<template>
  <div class="columns is-centered mt-30">
    <div class="overview column">
      <div class="columns">
        <div class="column is-one-quarter">
          <b-field label="Currency">
            <b-input v-model="currency"/>
          </b-field>
        </div>
        <div class="column overview__total">
          <span>
            Total: <strong>{{ total }} {{ currency }}</strong>
          </span>
        </div>
      </div>

      <div
        v-for="group in groups"
        v-if="getItems(group).length > 0"
        :key="group">
        <h2 class="overview__group-title">{{ group }}</h2>
        <b-table
          :data="getItems(group)"
          :columns="getColumns()"
          class="is-fullwidth">
          <template slot-scope="props">
            <b-table-column field="title">
              {{ props.row.title }}
            </b-table-column>
            <b-table-column field="quantity">
              {{ props.row.type === 'Piece' ? 'x' : '' }} {{ props.row.quantity }} {{ props.row.type !== 'Piece' ? props.row.type : '' }}
            </b-table-column>
            <b-table-column field="price">
              {{ props.row.price * props.row.quantity }} {{ currency }}
            </b-table-column>
          </template>
        </b-table>

        <div class="overview__subtotal">
          Subtotal: <strong>{{ subtotal(group) }} {{ currency }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      currency: '€'
    }
  },
  computed: {
    ...mapGetters({
      groups: 'items/getGroups'
    }),
    total() {
      let total = 0

      this.groups.forEach(group => {
        this.$store.getters['items/getItems'][group].forEach(item => {
          total += item.price * item.quantity
        })
      })

      return total
    }
  },
  methods: {
    getItems(group) {
      return (
        this.$store.getters['items/getItems'][group].filter(
          item => item.price > 0 && item.quantity > 0
        ) || []
      )
    },
    getColumns() {
      // Table columns are hard-coded inside a method prevent side-effects which b-table can have on the columns definition.
      return [
        {
          field: 'title',
          label: 'Item'
        },
        {
          field: 'quantity',
          label: 'Quantity'
        },
        {
          field: 'price',
          label: 'Price'
        }
      ]
    },
    subtotal(group) {
      let total = 0

      this.$store.getters['items/getItems'][group].forEach(item => {
        total += item.price * item.quantity
      })

      return total
    }
  }
}
</script>

<style lang="scss" scoped>
.overview {
  border-radius: 10px;
  max-width: 1024px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  &__group-title {
    font-size: 1.8rem;
    text-align: center;
  }

  &__total {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: end;

    span {
      display: block;
      margin-left: auto;
    }
  }

  &__subtotal {
    font-size: 1.3rem;
    text-align: right;
  }
}
</style>
