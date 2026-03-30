<template>
  <q-page class="flex flex-center hero-page">
    <div class="row full-width container justify-center items-center" :class="$q.screen.gt.xs ? 'q-px-xl' : 'q-px-md'">
      <div class="col-12 col-md-8 q-pa-lg animate-fade-in text-center">
        <h1 class="text-weight-bold q-mb-md gradient-text responsive-title">
          Welcome to My Portfolio
        </h1>
        <p class="text-h5 q-mb-xl line-height-1-6 hero-subtitle">
          Hello, I'm <span class="text-primary text-weight-medium text-glow">Stijn Rombouts</span>. <br />
          Highly motivated Applied Computer Science student with a passion for building innovative and efficient digital
          solutions.
        </p>
        <div class="q-gutter-sm flex flex-center">
          <q-btn unelevated color="primary" label="About Me" size="lg" to="/about" class="q-px-xl" />
          <q-btn outline :color="$q.dark.isActive ? 'white' : 'primary'" label="View CV" size="lg" to="/cv"
            class="q-px-xl" />
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="decorator circle-1"></div>
    <div class="decorator circle-2"></div>
  </q-page>
</template>

<script setup lang="ts">
// No complex logic needed for the landing page
</script>

<style lang="scss">
.hero-page {
  overflow: hidden;
  position: relative;
  background-image: url('/home_light.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.5s ease-in-out;
  width: 100%;
  min-height: 100vh;
  display: flex !important;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.65);
    backdrop-filter: blur(8px);
    z-index: 0;
    transition: background 0.3s ease, backdrop-filter 0.3s ease;
  }
}

.body--dark .hero-page {
  background-image: url('/home_dark.webp');
  background-color: #0f172a;
  /* Fallback for dark mode */

  &::before {
    background: rgba(0, 0, 0, 0.4);
    /* Subtle overlay for dark mode to avoid boxiness */
    backdrop-filter: none !important;
    /* Disabling blur in dark mode as it may cause visual artifacts or "rectangle" issues */
  }
}

.container {
  position: relative;
  z-index: 1;
}

.hero-subtitle {
  color: #0f172a;
  /* Even darker for light mode readability */
  position: relative;
  z-index: 1;
  font-weight: 400;
}

.body--dark .hero-subtitle {
  color: var(--text-main);
}

.text-glow {
  text-shadow: 0 0 10px rgba(var(--q-primary), 0.5);
}

.gradient-text {
  display: inline-block;
  background: linear-gradient(135deg, #000000 0%, var(--primary-color) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.body--dark .gradient-text {
  background: linear-gradient(135deg, #ffffff 0%, var(--primary-color) 100%);
  background-clip: text;
  -webkit-background-clip: text;
}

.responsive-title {
  font-size: clamp(2.5rem, 8vw, 4rem);
  line-height: 1.1;
}

@media (max-width: 600px) {
  .hero-page {
    padding-top: 50px;
    padding-bottom: 50px;
    justify-content: center !important;
  }

  .responsive-title {
    font-size: 2.2rem;
  }
}

.line-height-1-6 {
  line-height: 1.6;
}


.decorator {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 1;
  pointer-events: none;
}

.circle-1 {
  width: 300px;
  height: 300px;
  background: rgba(99, 102, 241, 0.1);
  top: -100px;
  right: -50px;
}

.circle-2 {
  width: 400px;
  height: 400px;
  background: rgba(14, 165, 233, 0.05);
  bottom: -150px;
  left: -100px;
}

.animate-fade-in {
  animation: fadeIn 1.2s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
