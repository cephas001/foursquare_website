<template>
  <HeroSection
      text="NEW HERE. We can't wait to meet you!"
      backgroundURL="src/assets/images/background.jpg"
  />
  <section>
    <p>address</p>
    <!-- Address -->
    <!-- Map -->
  </section>
  <section>
    <p>Let Us Know You're Coming</p>
    <h1>we can't wait to meet you! let us know you're coming or reach out to us</h1>
    <div>
      <div>
        <img src="../assets/images/DSC_0192.jpg" class="rounded-md" />
      </div>
      <form>
        <div>
          <label>Name</label>
          <div>
            <input type="text">
            <p>First</p>  
          </div>
          <div>
            <input type="text">
            <p>Last</p>  
          </div>
        </div>
        <div>
          <label>Email</label>
          <input type="text">
        </div>
        <div>
          <label>Are you visiting or just reaching out?</label>
          <select>
            <option default></option>
            <option>Visiting</option>
            <option>Reaching out</option>
          </select>
        </div>
        <div>
          <label>When will you be visiting?</label>
          <input type="date">
        </div>
        <div>
          <label>Will anybody be coming with you?</label>
          <input type="text">
        </div>
        <div>
          <label>Type your message here</label>
          <textarea placeholder="message..."></textarea>
        </div>
      </form>
    </div>
    <CustomButton text="Submit" />
  </section>
</template>

<script setup>
</script>

<style scoped>
.about {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.about h1 {
  color: #333;
}

.about p {
  color: #555;
  line-height: 1.6;
}
</style>
