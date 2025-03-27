<template>
  <div class="product-detail-page">
    <Header />
    <div class="container">
      <div class="breadcrumb">
        <router-link to="/mobiles">Mobiles</router-link> / {{ product.name }}
      </div>

      <div class="product-detail">
        <div class="product-gallery">
          <div class="main-image">
            <span v-if="product.badge" class="product-badge">
              <img src="https://ext.same-assets.com/3715870235/3213180843.png" alt="badges logo" />
            </span>
            <img :src="product.image" :alt="product.name" />
          </div>
          <div class="image-thumbnails">
            <div class="thumbnail active">
              <img :src="product.image" :alt="product.name" />
            </div>
            <div class="thumbnail">
              <img :src="product.image" :alt="product.name" />
            </div>
            <div class="thumbnail">
              <img :src="product.image" :alt="product.name" />
            </div>
          </div>
        </div>

        <div class="product-info">
          <h1 class="product-name">{{ product.name }}</h1>

          <div class="product-rating" v-if="product.rating">
            <img src="https://ext.same-assets.com/1903171383/986793156.svg" alt="Rating Star" />
            <span class="rating">{{ product.rating }}</span>
            <span class="reviews">{{ product.reviews }} Reviews</span>
          </div>

          <div class="price-section">
            <div class="price-box">
              <span class="current-price">Rs {{ formatPrice(product.price) }}</span>
              <span class="original-price">Rs {{ formatPrice(product.originalPrice) }}</span>
              <span class="discount">{{ product.discount }} OFF</span>
            </div>
            <div class="stock-info">In Stock</div>
          </div>

          <div class="product-actions">
            <button class="buy-now-btn" @click="onBuyNow">BUY NOW</button>
          </div>

          <div class="product-specs">
            <h3 class="specs-title">Key Features</h3>
            <div class="specs-list">
              <div class="spec-item">
                <div class="spec-name">Display</div>
                <div class="spec-value">{{ productDetails.display }}</div>
              </div>
              <div class="spec-item">
                <div class="spec-name">Processor</div>
                <div class="spec-value">{{ productDetails.processor }}</div>
              </div>
              <div class="spec-item">
                <div class="spec-name">RAM</div>
                <div class="spec-value">{{ productDetails.ram }}</div>
              </div>
              <div class="spec-item">
                <div class="spec-name">Storage</div>
                <div class="spec-value">{{ productDetails.storage }}</div>
              </div>
              <div class="spec-item">
                <div class="spec-name">Camera</div>
                <div class="spec-value">{{ productDetails.camera }}</div>
              </div>
              <div class="spec-item">
                <div class="spec-name">Battery</div>
                <div class="spec-value">{{ productDetails.battery }}</div>
              </div>
            </div>
          </div>

          <div class="delivery-info">
            <div class="delivery-title">
              <img src="https://ext.same-assets.com/1903171383/2122055849.svg" alt="Delivery" />
              <span>Delivery Options</span>
            </div>
            <div class="delivery-options">
              <div class="option">Standard delivery: 2-3 days</div>
              <div class="option">Express delivery: Next day (select areas)</div>
            </div>
          </div>
        </div>
      </div>

      <div class="product-description">
        <h2 class="section-title">Product Description</h2>
        <div class="description-content">
          <p>{{ productDetails.description }}</p>
        </div>
      </div>

      <div class="similar-products">
        <h2 class="section-title">Similar Products</h2>
        <div class="similar-products-grid">
          <ProductCard v-for="(similarProduct, index) in similarProducts" :key="index" :product="similarProduct" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'ProductDetail',
  components: {
    Header,
    Footer,
    ProductCard
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      product: {},
      productDetails: {
        display: '6.5 inches, Super AMOLED, 1080 x 2400 pixels',
        processor: 'Octa-core (2x2.0 GHz Cortex-A75 & 6x1.8 GHz Cortex-A55)',
        ram: '4GB/6GB/8GB',
        storage: '64GB/128GB/256GB',
        camera: 'Triple 50 MP, f/1.8 (wide) + 8 MP, f/2.2 (ultrawide) + 2 MP, f/2.4 (macro)',
        battery: '5000mAh, 25W Charging',
        description: 'Experience the next level of mobile technology with the latest smartphone that combines powerful performance with elegant design. The high-resolution display delivers vibrant colors and sharp details, while the advanced camera system captures stunning photos in any lighting condition. With a long-lasting battery and fast charging capability, you can stay connected all day. The device also features the latest security technologies to keep your data safe.'
      },
      similarProducts: [
        {
          id: '7',
          name: 'Xiaomi Redmi Note 13',
          price: 44500,
          image: 'https://ext.same-assets.com/3715870235/3903702123.bin'
        },
        {
          id: '8',
          name: 'Xiaomi Redmi Note 14',
          price: 48500,
          image: 'https://ext.same-assets.com/3715870235/1177378232.bin'
        },
        {
          id: '3',
          name: 'Samsung Galaxy A05s',
          price: 30400,
          image: 'https://ext.same-assets.com/3715870235/1158475021.bin'
        },
        {
          id: '4',
          name: 'itel S23 Plus',
          price: 33999,
          image: 'https://ext.same-assets.com/3715870235/4170368268.bin'
        }
      ]
    }
  },
  methods: {
    formatPrice(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    fetchProductDetails() {
      // In a real application, this would be an API call to fetch product details
      // For now, we'll use the product data from the parent component

      // Simulate products database
      const products = [
        {
          id: '1',
          name: 'Itel S24',
          price: 23999,
          originalPrice: 33999,
          discount: '29%',
          image: 'https://ext.same-assets.com/3715870235/3143272039.bin',
          rating: 4.8,
          reviews: 136
        },
        {
          id: '2',
          name: 'Samsung Galaxy A16',
          price: 43799,
          originalPrice: 54999,
          discount: '20%',
          image: 'https://ext.same-assets.com/3715870235/622709223.bin',
          rating: 4.8,
          reviews: 45
        },
        {
          id: '3',
          name: 'Samsung Galaxy A05s',
          price: 30400,
          originalPrice: 38500,
          discount: '21%',
          image: 'https://ext.same-assets.com/3715870235/1158475021.bin',
          rating: 4.9,
          reviews: 136,
          badge: true
        },
        {
          id: '4',
          name: 'itel S23 Plus',
          price: 33999,
          originalPrice: 44999,
          discount: '24%',
          image: 'https://ext.same-assets.com/3715870235/4170368268.bin',
          rating: 4.8,
          reviews: 12
        },
        {
          id: '5',
          name: 'Samsung Galaxy A15',
          price: 40200,
          originalPrice: 52999,
          discount: '24%',
          image: 'https://ext.same-assets.com/3715870235/1130977329.bin',
          rating: 4.9,
          reviews: 307,
          badge: true
        }
      ];

      this.product = products.find(p => p.id === this.id) || products[0];
    },
    goToProductDetail(id) {
      if (id === this.id) return; // 避免重复导航到当前页面
      this.$router.push({ name: 'product-detail', params: { id: id } });
    },
    onBuyNow() {
      // 在这里添加购买逻辑，例如添加到购物车或立即购买
      this.$router.push({ name: 'payment' });
    }
  },
  created() {
    this.fetchProductDetails();
  },
  watch: {
    // 当路由参数变化时重新获取产品详情
    id: {
      immediate: true,
      handler() {
        this.fetchProductDetails();
      }
    }
  }
}
</script>

<style scoped>
.product-detail-page {
  background-color: #f9f9f9;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.breadcrumb {
  font-size: 14px;
  margin-bottom: 20px;
}

.breadcrumb a {
  color: #41a3e9;
  text-decoration: none;
}

.product-detail {
  display: flex;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  padding: 20px;
}

.product-gallery {
  flex: 1;
  max-width: 450px;
  padding-right: 30px;
}

.main-image {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: 350px;
  margin-bottom: 20px;
}

.main-image img {
  max-width: 100%;
  max-height: 300px;
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

.image-thumbnails {
  display: flex;
  gap: 10px;
}

.thumbnail {
  width: 60px;
  height: 60px;
  border: 1px solid #eee;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.thumbnail.active {
  border-color: #41a3e9;
}

.thumbnail img {
  max-width: 90%;
  max-height: 90%;
}

.product-info {
  flex: 1;
}

.product-name {
  font-size: 24px;
  color: #26282f;
  margin: 0 0 15px 0;
}

.product-rating {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.product-rating img {
  width: 16px;
  margin-right: 4px;
}

.rating {
  font-weight: 600;
  color: #26282f;
  margin-right: 10px;
}

.reviews {
  color: #99afb8;
  font-size: 14px;
}

.price-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.price-box {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.current-price {
  font-size: 24px;
  font-weight: 700;
  color: #26282f;
}

.original-price {
  font-size: 16px;
  color: #99afb8;
  text-decoration: line-through;
}

.discount {
  background-color: #e8f7e9;
  color: #4caf50;
  font-size: 14px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 4px;
}

.stock-info {
  color: #4caf50;
  font-weight: 600;
}

.product-actions {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
}

.buy-now-btn,
.add-to-cart-btn {
  padding: 12px 25px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.buy-now-btn {
  background-color: #41a3e9;
  color: white;
}

.add-to-cart-btn {
  background-color: #f1f1f1;
  color: #26282f;
}

.buy-now-btn:hover {
  background-color: #3893d9;
}

.add-to-cart-btn:hover {
  background-color: #e5e5e5;
}

.product-specs {
  margin-bottom: 30px;
}

.specs-title {
  font-size: 18px;
  color: #26282f;
  margin-bottom: 15px;
}

.specs-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.spec-item {
  display: flex;
  gap: 10px;
}

.spec-name {
  font-weight: 600;
  min-width: 80px;
  color: #26282f;
}

.spec-value {
  color: #555;
}

.delivery-info {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
}

.delivery-title {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-weight: 600;
}

.delivery-title img {
  width: 16px;
  margin-right: 8px;
}

.delivery-options {
  color: #555;
  font-size: 14px;
}

.delivery-options .option {
  margin-bottom: 5px;
}

.section-title {
  font-size: 20px;
  color: #26282f;
  margin-bottom: 20px;
}

.product-description {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.description-content {
  color: #555;
  line-height: 1.6;
}

.similar-products {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.similar-products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

@media (max-width: 992px) {
  .product-detail {
    flex-direction: column;
  }

  .product-gallery {
    max-width: 100%;
    padding-right: 0;
    margin-bottom: 30px;
  }

  .specs-list {
    grid-template-columns: 1fr;
  }

  .similar-products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .product-actions {
    flex-direction: column;
  }

  .similar-products-grid {
    grid-template-columns: 1fr;
  }
}
</style>
