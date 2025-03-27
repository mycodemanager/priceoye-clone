<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="footer-columns">
          <div class="footer-column">
            <h3>All Brand List</h3>
            <div class="brand-list">
              <img src="https://ext.same-assets.com/3715870235/577375583.svg" alt="Samsung" />
              <img src="https://ext.same-assets.com/3715870235/87309871.svg" alt="Infinix" />
              <img src="https://ext.same-assets.com/3715870235/4221045604.svg" alt="Oppo" />
              <img src="https://ext.same-assets.com/3715870235/2074630184.svg" alt="Xiaomi" />
              <img src="https://ext.same-assets.com/3715870235/1731132193.svg" alt="Vivo" />
              <img src="https://ext.same-assets.com/3715870235/2290646045.svg" alt="Tecno" />
              <img src="https://ext.same-assets.com/3715870235/2180092232.svg" alt="Realme" />
              <img src="https://ext.same-assets.com/3715870235/3691464021.svg" alt="Itel" />
            </div>
          </div>
          <div class="footer-column">
            <h3>Customer Service</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">

        <div class="copyright">
          <p>Copyright © 2025 | Powered by Data Network Solutions</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  margin-top: 40px;
}

.footer-top {
  background-color: #f9f9f9;
  padding: 40px 0;
  border-top: 1px solid #e5e5e5;
}

.footer-columns {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
}

.footer-column {
  flex: 1;
  min-width: 200px;
  text-align: center;
}

.footer-column h3 {
  font-size: 16px;
  color: #26282f;
  margin-bottom: 15px;
  font-weight: 600;
}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column ul li {
  margin-bottom: 8px;
}

.footer-column ul li a {
  color: #99afb8;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;
}

.footer-column ul li a:hover {
  color: #41a3e9;
}

.brand-list {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.brand-list img {
  width: 40px;
  height: 40px;
  opacity: 0.8;
  transition: opacity 0.2s ease;
}

.brand-list img:hover {
  opacity: 1;
}

.footer-bottom {
  background-color: #41a3e9;
  padding: 30px 0;
  color: white;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.footer-logo img {
  height: 30px;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.2s ease;
}

.social-link:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.download-apps {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.app-link img {
  height: 40px;
}

.copyright {
  text-align: center;
  font-size: 12px;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .footer-columns {
    flex-direction: column;
  }

  .footer-column {
    width: 100%;
  }
}
</style>
