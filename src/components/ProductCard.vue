<template>
  <div class="product-card" @click="goToProductDetail">
    <div class="product-image">
      <span v-if="product.badge" class="product-badge">
        <img src="https://ext.same-assets.com/3715870235/3213180843.png" alt="badges logo" />
      </span>
      <img class="placeholder" src="https://ext.same-assets.com/1903171383/208382828.gif" alt="placeholder" />
      <img class="main-image" :src="product.image" :alt="product.name" />
    </div>
    <div class="product-info">
      <div class="product-rating" v-if="product.rating">
        <img src="https://ext.same-assets.com/1903171383/986793156.svg" alt="Rating Star" />
        <span>{{ product.rating }}</span>
        <span class="review-count">{{ product.reviews }} Reviews</span>
      </div>
      <h3 class="product-name">{{ product.name }}</h3>
      <div class="product-price">
        <span class="current-price">Rs {{ formatPrice(product.price) }}</span>
        <span class="original-price" v-if="product.originalPrice">Rs {{ formatPrice(product.originalPrice) }}</span>
        <span class="discount" v-if="product.discount">{{ product.discount }} OFF</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatPrice(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    goToProductDetail() {
      this.$router.push({
        name: 'product-detail',
        params: { id: this.product.id.toString() }
      });
    }
  }
}
</script>

<style scoped>
.product-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
  height: 400px;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  position: relative;
  padding: 20px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}

.product-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
}

.product-badge img {
  width: 40px;
}

.placeholder {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.main-image {
  position: relative;
  max-width: 100%;
  max-height: 180px;
  z-index: 1;
}

.product-info {
  padding: 15px;
  border-top: 1px solid #eee;
}

.product-rating {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
  color: #26282f;
}

.product-rating img {
  width: 14px;
  margin-right: 4px;
}

.review-count {
  margin-left: 5px;
  color: #99afb8;
  font-size: 12px;
}

.product-name {
  font-size: 14px;
  color: #26282f;
  margin: 0 0 10px 0;
  font-weight: 500;
  line-height: 1.4;
}

.product-price {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.current-price {
  font-size: 18px;
  font-weight: 700;
  color: #26282f;
}

.original-price {
  font-size: 14px;
  color: #99afb8;
  text-decoration: line-through;
}

.discount {
  font-size: 12px;
  color: #4caf50;
  font-weight: 600;
}
</style>
