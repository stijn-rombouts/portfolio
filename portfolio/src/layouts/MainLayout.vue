<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glass-header text-white">
      <q-toolbar class="container">
        <q-toolbar-title class="text-weight-bold letter-spacing-1">
          STIJN ROMBOUTS
        </q-toolbar-title>

        <div class="gt-sm q-gutter-md row items-center">
          <q-btn flat no-caps label="Home" to="/" :class="{ 'active': $route.path === '/' }" />
          <q-btn flat no-caps label="About Me" to="/about" :class="{ 'active': $route.path === '/about' }" />
          <q-btn flat no-caps label="Projects" to="/projects" :class="{ 'active': $route.path === '/projects' }" />
          <q-btn flat no-caps label="View CV" to="/cv" :class="{ 'active': $route.path === '/cv' }" class="q-px-md" />
          
          <q-btn
            flat
            round
            dense
            :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
            class="q-ml-md"
            @click="$q.dark.toggle"
            aria-label="Toggle dark mode"
          >
            <q-tooltip>{{ $q.dark.isActive ? 'Switch to Light Mode' : 'Switch to Dark Mode' }}</q-tooltip>
          </q-btn>
        </div>

        <div class="lt-md row items-center">
          <q-btn
            flat
            round
            dense
            :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
            class="q-mr-sm"
            @click="$q.dark.toggle"
          />
          <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="toggleLeftDrawer"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="bg-grey-1"
    >
      <q-list>
        <q-item-label header>Navigation</q-item-label>
        <q-item clickable v-ripple to="/" active-class="bg-indigo-1 text-primary" exact>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/about" active-class="bg-indigo-1 text-primary">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>About Me</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/projects" active-class="bg-indigo-1 text-primary">
          <q-item-section avatar>
            <q-icon name="work" />
          </q-item-section>
          <q-item-section>Projects</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/cv" active-class="bg-indigo-1 text-primary">
          <q-item-section avatar>
            <q-icon name="description" />
          </q-item-section>
          <q-item-section>CV</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>

    <q-footer class="transparent text-grey-7 q-pa-md text-center">
      <div>&copy; {{ new Date().getFullYear() }} Stijn Rombouts.</div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useRoute } from 'vue-router';

const $q = useQuasar();
const $route = useRoute();

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style lang="scss">
.glass-header {
  background: rgba(15, 23, 42, 0.8) !important;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.letter-spacing-1 {
  letter-spacing: 0.1em;
}

.nav-link-active {
  font-weight: 700;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 20%;
    right: 20%;
    height: 2px;
    border-radius: 2px;
    transition: all 0.3s ease;
  }
}

.active {
  color: #818cf8 !important; /* Indigo 400 */
  @extend .nav-link-active;
  &::after { background: #818cf8; }
}

.active-about {
  color: #2dd4bf !important; /* Teal 400 */
  @extend .nav-link-active;
  &::after { background: #2dd4bf; }
}

.active-projects {
  color: #fbbf24 !important; /* Amber 400 */
  @extend .nav-link-active;
  &::after { background: #fbbf24; }
}

.active-cv {
  color: #f472b6 !important; /* Pink 400 */
  @extend .nav-link-active;
  &::after { background: #f472b6; }
}
</style>
