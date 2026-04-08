<template>
  <section id="experience" class="py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <div ref="sectionRef" class="fade-in">
        <h2 class="text-3xl font-bold text-white mb-2">Experience</h2>
        <div class="w-16 h-1 bg-accent rounded mb-10"></div>
      </div>

      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-navy-700"></div>

        <div ref="timelineRef" class="space-y-12 stagger-children">
          <div
            v-for="job in experience"
            :key="job.company"
            class="relative pl-8 md:pl-20"
          >
            <!-- Timeline dot -->
            <div
              class="absolute left-0 md:left-8 top-1 w-3 h-3 rounded-full -translate-x-[5px] border-2"
              :class="job.current ? 'bg-accent border-accent shadow-lg shadow-accent/30' : 'bg-navy-800 border-navy-700'"
            ></div>

            <div class="bg-navy-800 rounded-xl p-6 border border-navy-700 hover:border-navy-700/80 transition-colors">
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                <h3 class="text-lg font-bold text-white">{{ job.company }}</h3>
                <span class="text-sm text-gray-500 font-mono">{{ job.period }}</span>
              </div>
              <p class="text-accent font-medium text-sm mb-3">{{ job.role }}</p>
              <p class="text-gray-400 text-sm leading-relaxed">{{ job.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { experience } from '../data/experience'
import { useIntersectionObserver, useStaggerObserver } from '../composables/useIntersectionObserver'

const sectionRef = ref(null)
const timelineRef = ref(null)

onMounted(() => {
  useIntersectionObserver(sectionRef.value)
  useStaggerObserver(timelineRef.value)
})
</script>
