<template>
  <div id="app">
    <main class="main-content">
      <div class="container">
        <div class="order-progress">
          <div class="progress-step" :class="{ active: currentStep >= 1, completed: currentStep > 1 }">
            <div class="step-number">1</div>
            <div class="step-label">OTP Verification</div>
          </div>
          <div class="progress-step" :class="{ active: currentStep >= 2, completed: currentStep > 2 }">
            <div class="step-number">2</div>
            <div class="step-label">Contact Info</div>
          </div>
          <div class="progress-step" :class="{ active: currentStep >= 3, completed: currentStep > 3 }">
            <div class="step-number">3</div>
            <div class="step-label">Delivery</div>
          </div>
          <div class="progress-step" :class="{ active: currentStep >= 4, completed: currentStep > 4 }">
            <div class="step-number">4</div>
            <div class="step-label">Payment</div>
          </div>
        </div>
        <div class="step-details">
          <!-- Step 1: OTP Verification -->
          <div v-if="currentStep === 1" class="order-step">
            <div class="step-content">
              <h2 class="step-title">OTP Verification</h2>
              <div class="input-group">
                <input id="mobile-number" type="text" v-model="mobileNumber" placeholder="Mobile Number"
                  class="mobile-input">
              </div>
              <button class="request-otp-btn" @click="requestOTP">Request OTP</button>
            </div>
          </div>

          <!-- Step 2: Contact Information -->
          <div v-if="currentStep === 2" class="order-step">
            <div class="step-content">
              <h2 class="step-title">2. Contact Information</h2>
              <div class="input-group">
                <input type="text" v-model="contactInfo.name" placeholder="Full Name" class="form-input">
              </div>
              <div class="input-group">
                <input type="email" v-model="contactInfo.email" placeholder="Email Address" class="form-input">
              </div>
              <div class="input-row">
                <div class="input-group half">
                  <input type="text" v-model="contactInfo.phone" placeholder="Phone Number" class="form-input" disabled>
                </div>
                <div class="input-group half">
                  <input type="text" v-model="contactInfo.altPhone" placeholder="Alternate Phone (Optional)"
                    class="form-input">
                </div>
              </div>
              <div class="buttons-row">
                <button class="back-btn" @click="goToStep(1)">Back</button>
                <button class="next-btn" @click="goToStep(3)">Next</button>
              </div>
            </div>
          </div>

          <!-- Step 3a: Delivery Information -->
          <div v-if="currentStep === 3" class="order-step">
            <div class="step-content">
              <h2 class="step-title">3a. Delivery Information</h2>
              <div class="input-group">
                <select v-model="deliveryInfo.city" class="form-select">
                  <option value="" disabled selected>Select City</option>
                  <option value="karachi">Karachi</option>
                  <option value="lahore">Lahore</option>
                  <option value="islamabad">Islamabad</option>
                  <option value="rawalpindi">Rawalpindi</option>
                </select>
              </div>
              <div class="input-group">
                <input type="text" v-model="deliveryInfo.area" placeholder="Mobile Number" class="mobile-input">
              </div>
              <div class="input-group">
                <textarea v-model="deliveryInfo.address" placeholder="Complete Address"
                  class="form-textarea"></textarea>
              </div>
              <div class="buttons-row">
                <button class="back-btn" @click="goToStep(2)">Back</button>
                <button class="next-btn" @click="goToStep(3.5)">Next</button>
              </div>
            </div>
          </div>

          <!-- Step 3b: Delivery Type -->
          <div v-if="currentStep === 3.5" class="order-step">
            <div class="step-content">
              <h2 class="step-title">3b. Delivery Type</h2>
              <div class="delivery-options">
                <div class="delivery-option" :class="{ 'selected': deliveryType === 'standard' }"
                  @click="deliveryType = 'standard'">
                  <div class="option-radio">
                    <div class="radio-inner" v-if="deliveryType === 'standard'"></div>
                  </div>
                  <div class="option-details">
                    <h3>Standard Delivery</h3>
                    <p>3-5 working days</p>
                  </div>
                  <div class="option-price">Rs 0</div>
                </div>
                <div class="delivery-option" :class="{ 'selected': deliveryType === 'express' }"
                  @click="deliveryType = 'express'">
                  <div class="option-radio">
                    <div class="radio-inner" v-if="deliveryType === 'express'"></div>
                  </div>
                  <div class="option-details">
                    <h3>Express Delivery</h3>
                    <p>1-2 working days</p>
                  </div>
                  <div class="option-price">Rs 200</div>
                </div>
              </div>
              <div class="buttons-row">
                <button class="back-btn" @click="goToStep(3)">Back</button>
                <button class="next-btn" @click="goToStep(4)">Next</button>
              </div>
            </div>
          </div>

          <!-- Step 4: Payment Information -->
          <div v-if="currentStep === 4" class="order-step">
            <div class="step-content" v-if="!isSuccess">
              <h2 class="step-title">4. Payment Information</h2>
              <div class="payment-options">
                <div class="payment-option" :class="{ 'selected': paymentMethod === 'cod' }"
                  @click="paymentMethod = 'cod'">
                  <div class="option-radio">
                    <div class="radio-inner" v-if="paymentMethod === 'cod'"></div>
                  </div>
                  <div class="option-details">
                    <h3>Cash on Delivery</h3>
                    <p>Pay when you receive your order</p>
                  </div>
                </div>
                <div class="payment-option" :class="{ 'selected': paymentMethod === 'card' }"
                  @click="paymentMethod = 'card'">
                  <div class="option-radio">
                    <div class="radio-inner" v-if="paymentMethod === 'card'"></div>
                  </div>
                  <div class="option-details">
                    <h3>Credit/Debit Card</h3>
                    <p>Pay securely with your card</p>
                  </div>
                </div>
                <div class="payment-option" :class="{ 'selected': paymentMethod === 'easypaisa' }"
                  @click="paymentMethod = 'easypaisa'">
                  <div class="option-radio">
                    <div class="radio-inner" v-if="paymentMethod === 'easypaisa'"></div>
                  </div>
                  <div class="option-details">
                    <h3>Easypaisa</h3>
                    <p>Pay with your Easypaisa account</p>
                  </div>
                </div>
              </div>
              <div class="buttons-row">
                <button class="back-btn" @click="goToStep(3.5)">Back</button>
                <button class="next-btn" @click="placeOrder">Place Order</button>
              </div>
            </div>
            <div v-if="isSuccess" class="pay-success">
              <img src="../assets/success.jpg" alt="" style="width: 40px;height: 40px;">
              <h3>Payment Successful</h3>
              <p>Your order has been placed successfully.</p>
              <button class="back-btn" @click="backHome">Back to Home</button>
            </div>
          </div>

          <!-- Order Summary (Right Side) -->
          <div class="order-summary">
            <h2>Order Summary</h2>
            <div class="summary-content">
              <div class="summary-detail">
                <img style="width: 100px" :src="product.image" alt="">
                <div class="summary-name">
                  <div style="">{{ product.name }}</div>
                  <div>Rs {{ product.price }}</div>
                </div>
              </div>
              <div class="price-detail">
                <div class="detail-header">
                  <span>Price Detail</span>
                </div>
                <div class="price-row">
                  <span>Sale Price</span>
                  <span>Rs {{ product.price }}</span>
                </div>
                <div class="price-row">
                  <span>Delivery Charges</span>
                  <span>Rs 0</span>
                </div>
                <div class="total-price">
                  <span>Total Price</span>
                  <span>Rs {{ product.price }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
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
      currentStep: 1,
      mobileNumber: '',
      otpCode: '',
      contactInfo: {
        name: '',
        email: '',
        phone: '',
        altPhone: ''
      },
      deliveryInfo: {
        city: '',
        area: '',
        address: ''
      },
      deliveryType: 'standard',
      paymentMethod: 'cod',
      cartItems: [],
      isSuccess: false,
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
  },
  methods: {
    requestOTP() {
      // In a real app, this would make an API call to request an OTP
      // For demo purposes, just moving to the next step
      this.contactInfo.phone = this.mobileNumber;
      this.currentStep = 2;
    },
    goToStep(step) {
      this.currentStep = step;
    },
    placeOrder() {
      // In a real app, this would submit the order to the backend
      // For demo purposes, just showing success message
      this.isSuccess = true;
    },
    backHome() {
      this.resetForm();
      this.$router.push('/');
    },
    resetForm() {
      this.currentStep = 1;
      this.mobileNumber = '';
      this.otpCode = '';
      this.contactInfo = {
        name: '',
        email: '',
        phone: '',
        altPhone: ''
      };
      this.deliveryInfo = {
        city: '',
        area: '',
        address: ''
      };
      this.deliveryType = 'standard';
      this.paymentMethod = 'cod';
      this.isSuccess = false;
    },
    fetchProductDetails() {
      // In a real application, this would be an API call to fetch product details
      // For now, we'll use the product data from the parent component

      // Simulate products database
      const products = [
        {
          id: '1',
          name: 'Xiaomi Redmi Note 13',
          price: 44500,
          originalPrice: 57999,
          discount: '23%',
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
          name: 'Apple iPhone 15',
          price: 49999,
          originalPrice: 79900,
          discount: '37%',
          image: 'https://static.toiimg.com/thumb/msid-113683512,width-1280,height-720,resizemode-4/113683512.jpg',
          rating: 4.8,
          reviews: 1256
        },
        {
          id: '4',
          name: 'Realme GT 2 Pro',
          price: 39999,
          originalPrice: 49999,
          discount: '20%',
          image: 'https://images.moneycontrol.com/static-mcnews/2022/04/Realme-GT-2-Pro-1-770x433.jpg',
          rating: 4.5,
          reviews: 782
        },
        {
          id: '5',
          name: 'Vivo X90',
          price: 48999,
          originalPrice: 63999,
          discount: '23%',
          image: 'https://static.sociofyme.com/thumb/113632886/113632886.jpg',
          rating: 4.4,
          reviews: 493
        },
        {
          id: '6',
          name: 'Nokia X30 5G',
          price: 36999,
          originalPrice: 48999,
          discount: '24%',
          image: 'https://www.gizmochina.com/wp-content/uploads/2023/02/Nokia-X30-5G.jpg',
          rating: 4.3,
          reviews: 289
        },
        {
          id: '7',
          name: 'Google Pixel 7a',
          price: 43999,
          originalPrice: 52999,
          discount: '17%',
          image: 'https://www.livemint.com/lm-img/img/2025/03/20/600x338/pixel_9a_1742448181991_1742448187963.png',
          rating: 4.6,
          reviews: 615
        },
        {
          id: '8',
          name: 'Apple iPhone SE 2022',
          price: 33999,
          originalPrice: 49900,
          discount: '32%',
          image: 'https://images.moneycontrol.com/static-mcnews/2022/03/Apple-iPhoneSE-2022.jpg',
          rating: 4.4,
          reviews: 742
        },
        {
          id: '9',
          name: 'Motorola Edge 50 Fusion',
          price: 20999,
          originalPrice: 27999,
          discount: '25%',
          image: 'https://i.ytimg.com/vi/Y8Ua_pocT2Y/hq720.jpg',
          rating: 4.3,
          reviews: 328
        },
        {
          id: '10',
          name: 'OnePlus 13R',
          price: 39999,
          originalPrice: 45999,
          discount: '13%',
          image: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1xsxyr.img?w=700&h=400&m=6',
          rating: 4.7,
          reviews: 892
        },
        {
          id: '11',
          name: 'POCO X7 Pro',
          price: 22999,
          originalPrice: 29999,
          discount: '23%',
          image: 'https://i.ytimg.com/vi/khcMWxVg6DI/hq720.jpg',
          rating: 4.5,
          reviews: 463
        },
        {
          id: '12',
          name: 'iQOO 15',
          price: 41999,
          originalPrice: 49999,
          discount: '16%',
          image: 'https://i.ytimg.com/vi/JuyMhUPJRw0/hq720.jpg',
          rating: 4.6,
          reviews: 527
        },
        {
          id: '13',
          name: 'OnePlus Nord CE 3',
          price: 24999,
          originalPrice: 29999,
          discount: '17%',
          image: 'https://cdn.zeebiz.com/sites/default/files/2024/05/27/295913-4-32.jpg',
          rating: 4.4,
          reviews: 618
        },
        {
          id: '14',
          name: 'Xiaomi 12 Pro',
          price: 44999,
          originalPrice: 62999,
          discount: '29%',
          image: 'https://images.firstpost.com/uploads/2023/12/Xiaomi-12-Pro-5G.jpg',
          rating: 4.5,
          reviews: 721
        },
        {
          id: '15',
          name: 'Samsung Galaxy S22',
          price: 46999,
          originalPrice: 65999,
          discount: '29%',
          image: 'https://www.livemint.com/lm-img/img/2023/12/04/600x338/S23-FE-Product-Group-KV_pc_1701670223901_1701670232186.webp',
          rating: 4.7,
          reviews: 1049
        },
        {
          id: '16',
          name: 'Nothing Phone 2',
          price: 42999,
          originalPrice: 49999,
          discount: '14%',
          image: 'https://images.firstpost.com/uploads/2024/06/Nothing-Phone-2-2024-06-af84e46486c79ec4c402d84b9ef92d68-1200x675.jpg',
          rating: 4.5,
          reviews: 862
        },
        {
          id: '17',
          name: 'OPPO Reno 10 Pro Plus',
          price: 46999,
          originalPrice: 54999,
          discount: '15%',
          image: 'https://i.ytimg.com/vi/t7b05JbtNxs/hq720.jpg',
          rating: 4.4,
          reviews: 489
        },
        {
          id: '18',
          name: 'Google Pixel 8a',
          price: 49999,
          originalPrice: 56999,
          discount: '12%',
          image: 'https://i.ytimg.com/vi/msFRTyLTuhM/hq720.jpg',
          rating: 4.6,
          reviews: 358
        },
        {
          id: '19',
          name: 'Realme 14 Pro Plus',
          price: 34999,
          originalPrice: 42999,
          discount: '19%',
          image: 'https://i.ytimg.com/vi/khcMWxVg6DI/hq720.jpg',
          rating: 4.3,
          reviews: 472
        },
        {
          id: '20',
          name: 'OPPO Reno 13 Pro',
          price: 43999,
          originalPrice: 49999,
          discount: '12%',
          image: 'https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2025/01/Reno-13-Pro-vs.-OnePlus-13R-Which-Is-The-Better-Android-Midranger-Below-Rs.-500001.png',
          rating: 4.4,
          reviews: 384
        },
        {
          id: '21',
          name: 'Xiaomi Redmi Note 14 Pro Plus',
          price: 26999,
          originalPrice: 32999,
          discount: '18%',
          image: 'https://i.ytimg.com/vi/khcMWxVg6DI/hq720.jpg',
          rating: 4.5,
          reviews: 531
        },
        {
          id: '22',
          name: 'Motorola Edge 50 Neo',
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
          price: 35999,
          originalPrice: 42999,
          discount: '16%',
          image: 'https://assets.mspimages.in/gear/wp-content/uploads/2022/12/Best-Gaming-Smartphones-From-Rs-20000-to-Rs-50000-min.png',
          rating: 4.6,
          reviews: 486
        },
        {
          id: '24',
          name: 'Samsung Galaxy A54',
          price: 28999,
          originalPrice: 37999,
          discount: '24%',
          image: 'https://i.ytimg.com/vi/rZmGmSruQys/hq720.jpg',
          rating: 4.4,
          reviews: 738
        },
        {
          id: '25',
          name: 'OnePlus Nord 4',
          price: 32999,
          originalPrice: 38999,
          discount: '15%',
          image: 'https://i.ytimg.com/vi/khcMWxVg6DI/hq720.jpg',
          rating: 4.5,
          reviews: 652
        },
        {
          id: '26',
          name: 'POCO F6',
          price: 29999,
          originalPrice: 37999,
          discount: '21%',
          image: 'https://i.ytimg.com/vi/rZmGmSruQys/hq720.jpg',
          rating: 4.3,
          reviews: 421
        },
        {
          id: '27',
          name: 'Vivo V30 Pro',
          price: 39999,
          originalPrice: 46999,
          discount: '15%',
          image: 'https://static.sociofyme.com/thumb/113632886/113632886.jpg',
          rating: 4.4,
          reviews: 389
        },
        {
          id: '28',
          name: 'Motorola Edge 50 Pro',
          price: 35999,
          originalPrice: 43999,
          discount: '18%',
          image: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1xsxyr.img',
          rating: 4.5,
          reviews: 412
        },
        {
          id: '29',
          name: 'Nothing Phone 2a',
          price: 28999,
          originalPrice: 34999,
          discount: '17%',
          image: 'https://i.ytimg.com/vi/mZs-wJ38nN0/maxresdefault.jpg',
          rating: 4.4,
          reviews: 546
        },
        {
          id: '30',
          name: 'Samsung Galaxy S21 FE',
          price: 34999,
          originalPrice: 54999,
          discount: '36%',
          image: 'https://i.ytimg.com/vi/mZs-wJ38nN0/maxresdefault.jpg',
          rating: 4.5,
          reviews: 892
        }
      ];

      this.product = products.find(p => p.id === this.id) || products[0];
    },
  }
}
</script>

<style>
/* Global styles will go here */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', Arial, sans-serif;
  background-color: #f7f7f7;
  color: #333;
}

input,
select,
textarea {
  background-color: #fff;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Main content styles */
.main-content {
  padding: 30px 0;
}

/* Order progress styles */
.order-progress {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  position: relative;
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 25%;
  z-index: 2;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font-weight: bold;
}

.progress-step.active .step-number {
  background-color: #33a3f9;
  color: white;
}

.progress-step.completed .step-number {
  background-color: #4caf50;
  color: white;
}

.order-progress::before {
  content: '';
  position: absolute;
  top: 20px;
  left: 10%;
  right: 10%;
  height: 2px;
  background-color: #e0e0e0;
  z-index: 1;
}

/* Order step styles */
.order-step {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin-bottom: 30px;
  width: 65%;
  float: left;
}

.step-content {
  padding: 20px 0;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
}

.input-group input,
.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.input-group textarea {
  min-height: 100px;
  resize: vertical;
}

.mobile-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.request-otp-btn {
  background-color: #33a3f9;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.request-otp-btn:hover {
  background-color: #2196f3;
}

/* Step title */
.step-title {
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #333;
}

/* Input row for side-by-side inputs */
.input-row {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.input-group.half {
  width: 50%;
}

/* Navigation buttons */
.buttons-row {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
}

.back-btn,
.next-btn {
  padding: 10px 25px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.back-btn {
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;
}

.next-btn {
  background-color: #33a3f9;
  color: white;
  border: none;
}

.back-btn:hover {
  background-color: #e0e0e0;
}

.next-btn:hover {
  background-color: #2196f3;
}

/* Delivery and payment options */
.delivery-options,
.payment-options {
  margin: 20px 0;
}

.delivery-option,
.payment-option {
  display: flex;
  align-items: center;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: border-color 0.3s;
}

.delivery-option.selected,
.payment-option.selected {
  border-color: #33a3f9;
  background-color: #f0f8ff;
}

.option-radio {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid #ddd;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delivery-option.selected .option-radio,
.payment-option.selected .option-radio {
  border-color: #33a3f9;
}

.radio-inner {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #33a3f9;
}

.option-details {
  flex-grow: 1;
}

.option-details h3 {
  margin: 0 0 5px;
  font-size: 16px;
  font-weight: 600;
}

.option-details p {
  margin: 0;
  color: #666;
  font-size: 14px;
}

.option-price {
  font-weight: 600;
  color: #333;
}

/* Order summary styles */
.order-summary {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 30%;
  float: right;
}

.summary-content {
  padding: 15px 0;
}

.price-detail {
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
}

.detail-header {
  display: flex;
  justify-content: space-between;
  margin: 15px 0 15px 0;
  font-weight: bold;
}

.detail-header-urdu {
  font-family: 'Noto Nastaliq Urdu', Arial, sans-serif;
}

.price-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.cart-empty {
  color: #e91e63;
  text-align: center;
  margin: 15px 0;
  font-weight: bold;
}

.savings {
  color: #4caf50;
  text-align: center;
  margin: 15px 0;
}

.total-price {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  font-weight: bold;
}

.payment-methods img {
  max-width: 100%;
}

.app-link img {
  max-width: 150px;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link img {
  width: 24px;
  height: 24px;
  transition: opacity 0.3s;
}

.social-link:hover img {
  opacity: 0.8;
}

/* Clear float after the floating elements */
.main-content .container::after {
  content: "";
  display: table;
  clear: both;
}

.pay-success {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.summary-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 992px) {
  .container {
    max-width: 992px;
    margin: 0 auto;
    padding: 0 15px;
  }
  .step-details{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .order-step{
    width: 100%;
  }
  .order-summary{
    width: 100%;
  }
}

@media (max-width: 576px) {
  .container {
    max-width: 992px;
    margin: 0 auto;
    padding: 0 15px;
  }
  .step-details{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .order-step{
    width: 100%;
  }
  .order-summary{
    width: 100%;
  }
}
.summary-name{
  font-size: 16px;
}
</style>
