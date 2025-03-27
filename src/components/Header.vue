<template>
  <header class="header">
    <div class="header-top">
      <div class="notification-bar">
        Orders placed after March 27th will be delivered after Eid. For Karachi, Lahore, Islamabad, and Rawalpindi, orders placed after March 29th will be delivered after Eid, if dispatched from the same city warehouse.
      </div>
    </div>
    <div class="main-header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <img src="../assets/logo.png" alt="PriceOye.pk" />
          </div>
          <div class="search-bar">
            <input type="text" placeholder="Search..." />
            <button class="voice-search">
              <img src="https://ext.same-assets.com/1903171383/3464047432.svg" alt="voice search" />
            </button>
          </div>
          <div class="user-actions">
            <a href="#" class="login-btn">Log in</a>
            <a href="#" class="register-btn">Register</a>
          </div>
        </div>
      </div>
    </div>
    <div class="navigation">
      <div class="container">
        <div class="brand-nav">
          <div class="brand-item">
            <img src="https://ext.same-assets.com/3715870235/577375583.svg" alt="brand-samsung" />
            <span>Samsung</span>
          </div>
          <div class="brand-item">
            <img src="https://ext.same-assets.com/3715870235/87309871.svg" alt="brand-infinix" />
            <span>Infinix</span>
          </div>
          <div class="brand-item">
            <img src="https://ext.same-assets.com/3715870235/4221045604.svg" alt="brand-oppo" />
            <span>Oppo</span>
          </div>
          <div class="brand-item">
            <img src="https://ext.same-assets.com/3715870235/2074630184.svg" alt="brand-xiaomi" />
            <span>Xiaomi</span>
          </div>
          <div class="brand-item">
            <img src="https://ext.same-assets.com/3715870235/1731132193.svg" alt="brand-vivo" />
            <span>Vivo</span>
          </div>
          <div class="brand-item">
            <img src="https://ext.same-assets.com/3715870235/2290646045.svg" alt="brand-tecno" />
            <span>Tecno</span>
          </div>
          <div class="brand-item">
            <img src="https://ext.same-assets.com/3715870235/2180092232.svg" alt="brand-realme" />
            <span>Realme</span>
          </div>
          <div class="brand-item">
            <img src="https://ext.same-assets.com/3715870235/3691464021.svg" alt="brand-itel" />
            <span>Itel</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  width: 100%;
}

.header-top {
  background-color: #fff;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.notification-bar {
  font-size: 12px;
  text-align: center;
  color: #333;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.main-header {
  /* background-color: #41a3e9; */
  padding: 15px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo img {
  height: 30px;
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  width: 50%;
}

.search-bar input {
  flex-grow: 1;
  border: none;
  padding: 10px 15px;
  outline: none;
  background-color: transparent;
  font-size: 14px;
  color: #333;
}

.voice-search {
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.voice-search img {
  width: 20px;
  height: 20px;
}

.user-actions {
  display: flex;
  gap: 15px;
}

.user-actions a {
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
}

.navigation {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 10px 0;
}

.brand-nav {
  display: flex;
  overflow-x: auto;
  gap: 20px;
}

.brand-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  min-width: 60px;
}

.brand-item img {
  width: 40px;
  height: 40px;
  margin-bottom: 5px;
}

.brand-item span {
  font-size: 12px;
  color: #333;
}
</style>
