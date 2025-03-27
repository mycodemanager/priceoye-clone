<template>
  <div class="mobiles-page">
    <Header />
    <div class="container">
      <div class="banner">
        <img src="../assets/banner.png" alt="Home banner" />
      </div>
      <h1 class="page-title">Buy Mobile Phones in Pakistan 2025</h1>
      <p class="page-description">900 results for Mobiles. Find a wide range of mobiles at the lowest rates in Pakistan, only at Priceoye.</p>

      <div class="content-wrapper">
        <ProductGrid :products="products" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
import ProductGrid from '../components/ProductGrid.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'MobilesPage',
  components: {
    Header,
    Sidebar,
    ProductGrid,
    Footer
  },
  data() {
    return {
      products: [
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
        },
        {
          id: '6',
          name: 'AllCall Shine 12 Pro',
          price: 16999,
          originalPrice: 20999,
          discount: '19%',
          image: 'https://ext.same-assets.com/3715870235/2701030634.bin',
          rating: 0,
          reviews: 0
        },
        {
          id: '7',
          name: 'Xiaomi Redmi Note 13',
          price: 44500,
          originalPrice: 57999,
          discount: '23%',
          image: 'https://ext.same-assets.com/3715870235/3903702123.bin',
          rating: 4.9,
          reviews: 549
        },
        {
          id: '8',
          name: 'Xiaomi Redmi Note 14',
          price: 48500,
          originalPrice: 53999,
          discount: '10%',
          image: 'https://ext.same-assets.com/3715870235/1177378232.bin',
          rating: 4.9,
          reviews: 32
        }
      ]
    }
  }
}
</script>

<style scoped>
.mobiles-page {
  background-color: #f9f9f9;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.banner {
  width: 100%;
  margin-bottom: 20px;
}
.banner img {
  width: 100%;
  border-radius: 8px;
}
.page-title {
  font-size: 24px;
  color: #26282f;
  margin-bottom: 10px;
}
.page-description {
  color: #99afb8;
  margin-bottom: 20px;
}
.content-wrapper {
  display: flex;
}
</style>
