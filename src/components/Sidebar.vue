<template>
  <div class="sidebar">
    <div class="filter-group">
      <h3 class="filter-title">Sorting</h3>
      <div class="filter-options">
        <label class="filter-option">
          <input type="radio" name="sorting" value="popularity" checked />
          <span>Popularity</span>
        </label>
        <label class="filter-option">
          <input type="radio" name="sorting" value="price-low" />
          <span>Prices (Low to High)</span>
        </label>
        <label class="filter-option">
          <input type="radio" name="sorting" value="price-high" />
          <span>Prices (High to Low)</span>
        </label>
      </div>
    </div>

    <div class="filter-group">
      <h3 class="filter-title">Express Delivery</h3>
      <div class="filter-options">
        <label class="filter-option">
          <input type="checkbox" name="express" />
          <span>Express Delivery</span>
        </label>
      </div>
    </div>

    <div class="filter-group">
      <h3 class="filter-title">Set your price range</h3>
      <div class="filter-options">
        <label class="filter-option">
          <input type="checkbox" name="price-range" value="below-15000" />
          <span>Below Rs. 15,000</span>
        </label>
        <label class="filter-option">
          <input type="checkbox" name="price-range" value="15000-25000" />
          <span>Rs. 15,000 - Rs. 25,000</span>
        </label>
        <label class="filter-option">
          <input type="checkbox" name="price-range" value="25000-40000" />
          <span>Rs. 25,000 - Rs. 40,000</span>
        </label>
        <label class="filter-option">
          <input type="checkbox" name="price-range" value="40000-60000" />
          <span>Rs. 40,000 - Rs. 60,000</span>
        </label>
        <label class="filter-option">
          <input type="checkbox" name="price-range" value="60000-80000" />
          <span>Rs. 60,000 - Rs. 80,000</span>
        </label>
        <label class="filter-option">
          <input type="checkbox" name="price-range" value="80000-100000" />
          <span>Rs. 80,000 - Rs. 100,000</span>
        </label>
        <label class="filter-option">
          <input type="checkbox" name="price-range" value="100000-150000" />
          <span>Rs. 100,000 - Rs. 150,000</span>
        </label>
        <label class="filter-option">
          <input type="checkbox" name="price-range" value="above-150000" />
          <span>Above 150,000</span>
        </label>
      </div>
    </div>

    <div class="filter-group">
      <h3 class="filter-title">Primary Camera</h3>
      <div class="filter-options">
        <label class="filter-option">
          <input type="checkbox" name="camera" value="min-4mp" />
          <span>Minimum 4MP</span>
        </label>
        <label class="filter-option">
          <input type="checkbox" name="camera" value="min-8mp" />
          <span>Minimum 8MP</span>
        </label>
        <label class="filter-option">
          <input type="checkbox" name="camera" value="min-13mp" />
          <span>Minimum 13MP</span>
        </label>
      </div>
    </div>

    <div class="filter-group">
      <h3 class="filter-title">RAM</h3>
      <div class="filter-options ram-options">
        <label class="filter-option ram-option">
          <input type="checkbox" name="ram" value="1gb" />
          <span>1 GB or Less</span>
        </label>
        <label class="filter-option ram-option">
          <input type="checkbox" name="ram" value="2gb" />
          <span>2 GB</span>
        </label>
        <label class="filter-option ram-option">
          <input type="checkbox" name="ram" value="3gb" />
          <span>3 GB</span>
        </label>
        <label class="filter-option ram-option">
          <input type="checkbox" name="ram" value="4gb" />
          <span>4 GB</span>
        </label>
        <label class="filter-option ram-option">
          <input type="checkbox" name="ram" value="6gb" />
          <span>6 GB</span>
        </label>
        <label class="filter-option ram-option">
          <input type="checkbox" name="ram" value="above" />
          <span>Above</span>
        </label>
      </div>
    </div>

    <div class="filter-group">
      <h3 class="filter-title">MEMORY</h3>
      <div class="filter-options memory-options">
        <label class="filter-option memory-option">
          <input type="checkbox" name="memory" value="4gb" />
          <span>4 GB</span>
        </label>
        <label class="filter-option memory-option">
          <input type="checkbox" name="memory" value="8gb" />
          <span>8 GB</span>
        </label>
        <label class="filter-option memory-option">
          <input type="checkbox" name="memory" value="16gb" />
          <span>16 GB</span>
        </label>
        <label class="filter-option memory-option">
          <input type="checkbox" name="memory" value="32gb" />
          <span>32 GB</span>
        </label>
        <label class="filter-option memory-option">
          <input type="checkbox" name="memory" value="64gb" />
          <span>64 GB</span>
        </label>
        <label class="filter-option memory-option">
          <input type="checkbox" name="memory" value="128gb" />
          <span>128 GB</span>
        </label>
        <label class="filter-option memory-option">
          <input type="checkbox" name="memory" value="256gb" />
          <span>256 GB</span>
        </label>
        <label class="filter-option memory-option">
          <input type="checkbox" name="memory" value="512gb" />
          <span>512 GB</span>
        </label>
      </div>
    </div>

    <div class="filter-group">
      <h3 class="filter-title">Brands</h3>
      <div class="filter-options">
        <label class="filter-option">
          <input type="checkbox" name="brand" value="infinix" />
          <span>Infinix</span>
        </label>
        <label class="filter-option">
          <input type="checkbox" name="brand" value="itel" />
          <span>Itel</span>
        </label>
        <label class="filter-option">
          <input type="checkbox" name="brand" value="oppo" />
          <span>Oppo</span>
        </label>
        <label class="filter-option">
          <input type="checkbox" name="brand" value="realme" />
          <span>Realme</span>
        </label>
        <label class="filter-option">
          <input type="checkbox" name="brand" value="samsung" />
          <span>Samsung</span>
        </label>
        <label class="filter-option">
          <input type="checkbox" name="brand" value="tecno" />
          <span>Tecno</span>
        </label>
        <label class="filter-option">
          <input type="checkbox" name="brand" value="vivo" />
          <span>Vivo</span>
        </label>
        <label class="filter-option">
          <input type="checkbox" name="brand" value="xiaomi" />
          <span>Xiaomi</span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  padding-right: 20px;
}

.filter-group {
  margin-bottom: 20px;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 15px;
}

.filter-title {
  font-size: 14px;
  color: #26282f;
  margin-bottom: 10px;
  font-weight: 600;
  text-transform: uppercase;
}

.filter-options {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.ram-options, .memory-options {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.ram-option, .memory-option {
  width: calc(33.33% - 8px);
  margin-bottom: 5px;
}

.filter-option {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #26282f;
}

.filter-option input {
  margin-right: 8px;
}
</style>
