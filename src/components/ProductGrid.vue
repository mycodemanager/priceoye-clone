<template>
  <div class="product-grid">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductGrid',
  components: {
    ProductCard
  },
  props: {
    products: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px 15px;
  flex: 1;
}

@media (max-width: 1100px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}
</style>
