<template>
  <section id="contact" class="py-24 px-6 bg-navy-800/30">
    <div class="max-w-6xl mx-auto">
      <div ref="sectionRef" class="fade-in">
        <h2 class="text-3xl font-bold text-white mb-2">Let's Connect</h2>
        <div class="w-16 h-1 bg-accent rounded mb-10"></div>

        <div class="max-w-2xl mx-auto text-center">
          <p class="text-lg text-gray-400 mb-10">
            Open to Senior / Staff Rails Engineer roles. Remote-friendly. Let's talk.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <!-- Email Me → opens modal -->
            <button
              @click="showForm = true"
              class="flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-lg font-medium transition-all cursor-pointer"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </button>

            <!-- LinkedIn -->
            <a
              href="https://www.linkedin.com/in/mohit-c-937830123/"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-2 px-6 py-3 bg-navy-800 border border-navy-700 rounded-lg text-gray-300 hover:text-accent hover:border-accent/40 transition-all"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>

            <!-- GitHub -->
            <a
              href="https://github.com/git4ruby"
              target="_blank"
              rel="noopener"
              class="flex items-center gap-2 px-6 py-3 bg-navy-800 border border-navy-700 rounded-lg text-gray-300 hover:text-accent hover:border-accent/40 transition-all"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>

          <!-- Additional info -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Washington D.C. (Remote-Open)
            </span>
            <span class="flex items-center gap-1.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +1 (669) 224-0734
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Form Modal -->
    <Teleport to="body">
      <div
        v-if="showForm"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="showForm = false"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <!-- Modal -->
        <div class="relative w-full max-w-lg bg-navy-800 border border-navy-700 rounded-2xl shadow-2xl shadow-black/40 p-8">
          <!-- Close button -->
          <button
            @click="showForm = false"
            class="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h3 class="text-2xl font-bold text-white mb-2">Send me a message</h3>
          <p class="text-gray-500 text-sm mb-6">I'll get back to you within 24 hours.</p>

          <!-- Success state -->
          <div v-if="submitted" class="text-center py-8">
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/10 flex items-center justify-center">
              <svg class="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 class="text-xl font-bold text-white mb-2">Message Sent!</h4>
            <p class="text-gray-400">Thanks for reaching out. I'll reply soon.</p>
          </div>

          <!-- Form -->
          <form v-else @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-400 mb-1">Name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                placeholder="Your name"
                class="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg text-gray-200 placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-400 mb-1">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                placeholder="your@email.com"
                class="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg text-gray-200 placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-gray-400 mb-1">Subject</label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                required
                placeholder="What's this about?"
                class="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg text-gray-200 placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-400 mb-1">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="4"
                placeholder="Your message..."
                class="w-full px-4 py-3 bg-navy-900 border border-navy-700 rounded-lg text-gray-200 placeholder-gray-600 focus:outline-none focus:border-accent transition-colors resize-none"
              ></textarea>
            </div>

            <div v-if="error" class="text-red-400 text-sm">{{ error }}</div>

            <button
              type="submit"
              :disabled="sending"
              class="w-full py-3 bg-accent hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all"
            >
              {{ sending ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

const FORMSPREE_ID = 'mpqonqjn'

const sectionRef = ref(null)
const showForm = ref(false)
const sending = ref(false)
const submitted = ref(false)
const error = ref('')

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

async function submitForm() {
  sending.value = true
  error.value = ''

  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: form.name,
        _replyto: form.email,
        _subject: form.subject,
        message: form.message,
      }),
    })

    if (res.ok) {
      submitted.value = true
    } else {
      const data = await res.json()
      error.value = data.errors?.map(e => e.message).join(', ') || 'Something went wrong. Please try again.'
    }
  } catch {
    error.value = 'Network error. Please try again.'
  } finally {
    sending.value = false
  }
}

onMounted(() => {
  useIntersectionObserver(sectionRef.value)
})
</script>
