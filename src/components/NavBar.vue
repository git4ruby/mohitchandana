<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'"
  >
    <div class="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
      <a href="#hero" class="text-xl font-bold text-white tracking-tight hover:text-accent transition-colors">
        MC<span class="text-accent">.</span>
      </a>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm text-gray-400 hover:text-white transition-colors"
        >
          {{ link.label }}
        </a>
        <a
          href="#contact"
          class="text-sm bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-lg transition-colors"
        >
          Get in Touch
        </a>
      </div>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden text-gray-400 hover:text-white"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            v-if="!mobileOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mobileOpen"
      class="md:hidden bg-navy-800/95 backdrop-blur-md border-t border-navy-700"
    >
      <div class="px-6 py-4 flex flex-col gap-4">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm text-gray-400 hover:text-white transition-colors"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </a>
        <a
          href="#contact"
          class="text-sm bg-accent text-white px-4 py-2 rounded-lg text-center"
          @click="mobileOpen = false"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Blog', href: '#blog' },
]

function onScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
