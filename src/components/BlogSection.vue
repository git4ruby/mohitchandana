<template>
  <section id="blog" class="py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <div ref="sectionRef" class="fade-in">
        <h2 class="text-3xl font-bold text-white mb-2">Blog</h2>
        <div class="w-16 h-1 bg-accent rounded mb-10"></div>

        <div class="max-w-2xl mx-auto text-center">
          <div class="bg-navy-800 rounded-xl border border-navy-700 p-12">
            <div class="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
              <svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>

            <h3 class="text-xl font-bold text-white mb-3">Coming Soon</h3>
            <p class="text-gray-400 mb-8">
              Writing about Rails, AI integration, and building production apps.
            </p>

            <form @submit.prevent class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                class="flex-1 px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg text-gray-300 placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                class="px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-lg font-medium transition-colors whitespace-nowrap"
              >
                Subscribe for Updates
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

const sectionRef = ref(null)

onMounted(() => {
  useIntersectionObserver(sectionRef.value)
})
</script>
