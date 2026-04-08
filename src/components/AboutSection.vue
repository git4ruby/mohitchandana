<template>
  <section id="about" class="py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <div ref="sectionRef" class="fade-in">
        <h2 class="text-3xl font-bold text-white mb-2">About Me</h2>
        <div class="w-16 h-1 bg-accent rounded mb-10"></div>

        <div class="grid md:grid-cols-5 gap-12">
          <div class="md:col-span-3">
            <p class="text-gray-400 leading-relaxed text-lg">
              I'm a Senior Full-Stack Engineer with 12+ years building enterprise-grade Rails applications.
              I specialize in HIPAA-compliant healthcare systems and AI-powered backends — integrating
              local LLMs (Ollama), RAG pipelines, and vector search into production systems.
            </p>
            <p class="text-gray-400 leading-relaxed text-lg mt-4">
              Currently Senior Engineer &amp; Team Lead at Vanda Pharmaceuticals in Washington D.C.,
              where I've built Ultra CRM from the ground up. I also ship personal projects —
              <span class="text-accent font-semibold">4 of them are live in production right now</span>.
            </p>
          </div>

          <div class="md:col-span-2">
            <div class="bg-navy-800 rounded-xl p-6 border border-navy-700">
              <h3 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Core Stack</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in coreStack"
                  :key="tech"
                  class="px-3 py-1.5 bg-navy-700/50 text-gray-300 text-sm rounded-md border border-navy-700"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
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
const coreStack = [
  'Rails', 'Vue.js', 'PostgreSQL', 'Docker', 'AWS',
  'Redis', 'Sidekiq', 'GraphQL', 'Tailwind', 'Go',
]

onMounted(() => {
  useIntersectionObserver(sectionRef.value)
})
</script>
