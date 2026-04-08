<template>
  <section id="skills" class="py-24 px-6 bg-navy-800/30">
    <div class="max-w-6xl mx-auto">
      <div ref="sectionRef" class="fade-in">
        <h2 class="text-3xl font-bold text-white mb-2">Skills & Tools</h2>
        <div class="w-16 h-1 bg-accent rounded mb-10"></div>
      </div>

      <div ref="gridRef" class="flex flex-wrap gap-3 stagger-children">
        <span
          v-for="skill in skills"
          :key="skill.name"
          class="px-4 py-2 rounded-lg border text-sm font-medium transition-all hover:scale-105"
          :class="categoryColors[skill.category]"
        >
          {{ skill.name }}
        </span>
      </div>

      <!-- Legend -->
      <div class="mt-10 flex flex-wrap gap-4 text-xs text-gray-500">
        <span class="flex items-center gap-1.5">
          <span class="w-2.5 h-2.5 rounded-full bg-indigo-500/40"></span> Backend
        </span>
        <span class="flex items-center gap-1.5">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/40"></span> Frontend
        </span>
        <span class="flex items-center gap-1.5">
          <span class="w-2.5 h-2.5 rounded-full bg-purple-500/40"></span> AI / ML
        </span>
        <span class="flex items-center gap-1.5">
          <span class="w-2.5 h-2.5 rounded-full bg-sky-500/40"></span> DevOps
        </span>
        <span class="flex items-center gap-1.5">
          <span class="w-2.5 h-2.5 rounded-full bg-amber-500/40"></span> Testing
        </span>
        <span class="flex items-center gap-1.5">
          <span class="w-2.5 h-2.5 rounded-full bg-rose-500/40"></span> Domain
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { skills, categoryColors } from '../data/skills'
import { useIntersectionObserver, useStaggerObserver } from '../composables/useIntersectionObserver'

const sectionRef = ref(null)
const gridRef = ref(null)

onMounted(() => {
  useIntersectionObserver(sectionRef.value)
  useStaggerObserver(gridRef.value)
})
</script>
