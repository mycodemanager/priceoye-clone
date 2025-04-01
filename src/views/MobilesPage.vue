<template>
  <div class="mobiles-page">
    <Header />
    <div class="container">
      <div class="banner">
        <img src="../assets/banner.png" alt="Home banner" />
      </div>
      <h1 class="page-title">Buy Mobile Phones in Pakistan 2025</h1>
      <p class="page-description">900 results for Mobiles. Find a wide range of mobiles at the lowest rates in Pakistan,
        only at Priceoye.</p>

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
    name: 'Xiaomi Redmi Note 13',
    price: 44500,
    originalPrice: 52999,
    discount: '16%',
    image: 'https://www.dxomark.com/wp-content/uploads/medias/post-164163/Xiaomi-Redmi-Note-13-Pro-5G_featured-image-packshot-review-1024x691.jpg',
    rating: 4.7,
    reviews: 549
  },
  {
    id: '2',
    name: 'Samsung Galaxy S23 FE',
    price: 49999,
    originalPrice: 59999,
    discount: '17%',
    image: 'https://static.toiimg.com/thumb/msid-107624439,imgsize-1803723,width-400,resizemode-4/107624439.jpg',
    rating: 4.6,
    reviews: 342
  },
  {
    id: '3',
    name: 'Infinix Note 50',
    price: 42999,
    originalPrice: 49999,
    discount: '14%',
    image: 'https://whatmobiles.net.pk/wp-content/uploads/2024/11/infinix-Note-50-Price-in-Pakistan-593x500.webp',
    rating: 4.8,
    reviews: 1256
  },
  {
    id: '4',
    name: 'Realme 11 Pro Plus',
    price: 39999,
    originalPrice: 49999,
    discount: '20%',
    image: 'https://images.moneycontrol.com/static-mcnews/2022/04/Realme-GT-2-Pro-1-770x433.jpg',
    rating: 4.5,
    reviews: 782
  },
  {
    id: '5',
    name: 'Vivo V40',
    price: 48999,
    originalPrice: 63999,
    discount: '23%',
    image: 'https://static.sociofyme.com/thumb/113632886/113632886.jpg',
    rating: 4.4,
    reviews: 493
  },
  {
    id: '6',
    name: 'Infinix Zero 30',
    price: 36999,
    originalPrice: 48999,
    discount: '24%',
    image: 'https://www.gizmochina.com/wp-content/uploads/2023/02/Nokia-X30-5G.jpg',
    rating: 4.3,
    reviews: 289
  },
  {
    id: '7',
    name: 'Oppo Reno 10 Pro',
    price: 43999,
    originalPrice: 52999,
    discount: '17%',
    image: 'https://www.livemint.com/lm-img/img/2025/03/20/600x338/pixel_9a_1742448181991_1742448187963.png',
    rating: 4.6,
    reviews: 615
  },
  {
    id: '8',
    name: 'Tecno Camon 30',
    price: 45999,
    originalPrice: 59900,
    discount: '23%',
    image: 'https://mobilemaya.net/wp-content/uploads/2024/10/Tecno-Camon-30-Premier-500x500.webp',
    rating: 4.4,
    reviews: 742
  },
  {
    id: '9',
    name: 'Motorola Edge 40',
    price: 26999,
    originalPrice: 34999,
    discount: '23%',
    image: 'https://i.ytimg.com/vi/Y8Ua_pocT2Y/hq720.jpg',
    rating: 4.3,
    reviews: 328
  },
  {
    id: '10',
    name: 'OnePlus Nord 3',
    price: 39999,
    originalPrice: 45999,
    discount: '13%',
    image: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1xsxyr.img?w=700&h=400&m=6',
    rating: 4.7,
    reviews: 892
  },
  {
    id: '11',
    name: 'POCO X6 Pro',
    price: 34999,
    originalPrice: 43999,
    discount: '20%',
    image: 'https://i.ytimg.com/vi/1sUcc7TdGqU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBPMXiC3yQ6X68gg_u3PXebWuW5YA',
    rating: 4.5,
    reviews: 463
  },
  {
    id: '12',
    name: 'iQOO 12',
    price: 49999,
    originalPrice: 59999,
    discount: '17%',
    image: 'https://i.ytimg.com/vi/JuyMhUPJRw0/hq720.jpg',
    rating: 4.6,
    reviews: 527
  },
  {
    id: '13',
    name: 'OnePlus Nord CE 3',
    price: 33999,
    originalPrice: 40999,
    discount: '17%',
    image: 'https://cdn.zeebiz.com/sites/default/files/2024/05/27/295913-4-32.jpg',
    rating: 4.4,
    reviews: 618
  },
  {
    id: '14',
    name: 'Xiaomi 13T',
    price: 44999,
    originalPrice: 56999,
    discount: '21%',
    image: 'https://images.firstpost.com/uploads/2023/12/Xiaomi-12-Pro-5G.jpg',
    rating: 4.5,
    reviews: 721
  },
  {
    id: '15',
    name: 'Samsung Galaxy A54',
    price: 37999,
    originalPrice: 46999,
    discount: '19%',
    image: 'https://www.livemint.com/lm-img/img/2023/12/04/600x338/S23-FE-Product-Group-KV_pc_1701670223901_1701670232186.webp',
    rating: 4.7,
    reviews: 1049
  },
  {
    id: '16',
    name: 'Tecno Phantom X2',
    price: 42999,
    originalPrice: 49999,
    discount: '14%',
    image: 'https://cdn.beebom.com/mobile/2024/04/Tecno-Camon-30-Premier-5G.png',
    rating: 4.5,
    reviews: 862
  },
  {
    id: '17',
    name: 'OPPO Reno 10 Pro',
    price: 46999,
    originalPrice: 54999,
    discount: '15%',
    image: 'https://i.ytimg.com/vi/t7b05JbtNxs/hq720.jpg',
    rating: 4.4,
    reviews: 489
  },
  {
    id: '18',
    name: 'Vivo V30 Pro',
    price: 49999,
    originalPrice: 56999,
    discount: '12%',
    image: 'https://i.ytimg.com/vi/msFRTyLTuhM/hq720.jpg',
    rating: 4.6,
    reviews: 358
  },
  {
    id: '19',
    name: 'Realme 12 Pro Plus',
    price: 44999,
    originalPrice: 54999,
    discount: '18%',
    image: 'https://i.ytimg.com/vi/khcMWxVg6DI/hq720.jpg',
    rating: 4.3,
    reviews: 472
  },
  {
    id: '20',
    name: 'OPPO Reno 12 Pro',
    price: 43999,
    originalPrice: 49999,
    discount: '12%',
    image: 'https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2025/01/Reno-13-Pro-vs.-OnePlus-13R-Which-Is-The-Better-Android-Midranger-Below-Rs.-500001.png',
    rating: 4.4,
    reviews: 384
  },
  {
    id: '21',
    name: 'Xiaomi Redmi Note 12 Pro Plus',
    price: 26999,
    originalPrice: 32999,
    discount: '18%',
    image: 'https://i.ytimg.com/vi/khcMWxVg6DI/hq720.jpg',
    rating: 4.5,
    reviews: 531
  },
  {
    id: '22',
    name: 'Motorola Edge 40 Neo',
    price: 30999,
    originalPrice: 37999,
    discount: '18%',
    image: 'https://i.ytimg.com/vi/khcMWxVg6DI/hq720.jpg',
    rating: 4.2,
    reviews: 297
  },
  {
    id: '23',
    name: 'iQOO Neo 9 Pro',
    price: 42999,
    originalPrice: 49999,
    discount: '14%',
    image: 'https://assets.mspimages.in/gear/wp-content/uploads/2022/12/Best-Gaming-Smartphones-From-Rs-20000-to-Rs-50000-min.png',
    rating: 4.6,
    reviews: 486
  },
  {
    id: '24',
    name: 'Samsung Galaxy A34',
    price: 28999,
    originalPrice: 37999,
    discount: '24%',
    image: 'https://i.ytimg.com/vi/rZmGmSruQys/hq720.jpg',
    rating: 4.4,
    reviews: 738
  },
  {
    id: '25',
    name: 'OnePlus Nord CE 4',
    price: 32999,
    originalPrice: 38999,
    discount: '15%',
    image: 'https://i.ytimg.com/vi/khcMWxVg6DI/hq720.jpg',
    rating: 4.5,
    reviews: 652
  },
  {
    id: '26',
    name: 'POCO F5',
    price: 32999,
    originalPrice: 40999,
    discount: '19%',
    image: 'https://i.ytimg.com/vi/TWCTtpvEps4/hq720.jpg',
    rating: 4.3,
    reviews: 421
  },
  {
    id: '27',
    name: 'Vivo V30',
    price: 39999,
    originalPrice: 46999,
    discount: '15%',
    image: 'https://static.sociofyme.com/thumb/113632886/113632886.jpg',
    rating: 4.4,
    reviews: 389
  },
  {
    id: '28',
    name: 'Motorola Edge 40',
    price: 35999,
    originalPrice: 43999,
    discount: '18%',
    image: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1xsxyr.img',
    rating: 4.5,
    reviews: 412
  },
  {
    id: '29',
    name: 'Infinix Note 30 Pro',
    price: 28999,
    originalPrice: 34999,
    discount: '17%',
    image: 'https://i.gadgets360cdn.com/large/infinix_note_50_series_infinix_instagram_1740984533550.jpg',
    rating: 4.4,
    reviews: 546
  },
  {
    id: '30',
    name: 'Samsung Galaxy A34',
    price: 34999,
    originalPrice: 46999,
    discount: '26%',
    image: 'https://i.ytimg.com/vi/rZmGmSruQys/hq720.jpg',
    rating: 4.5,
    reviews: 892
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
