export const projects = [
  {
    name: 'RFE Ready',
    url: 'https://rfeready.com',
    github: 'https://github.com/git4ruby',
    stack: ['Rails 8', 'Vue.js 3', 'pgvector', 'OpenAI GPT-4o', 'ActionCable', 'AWS EC2'],
    description:
      'B2B SaaS for immigration law firms. AI-powered RAG pipeline reduces RFE response time from 4+ hours to 15 minutes. Real-time collaborative editing with WebSockets, multi-tenant architecture, 90.7% test coverage.',
    badge: 'Live \u00B7 B2B SaaS',
    badgeColor: 'bg-indigo-500/20 text-indigo-300',
  },
  {
    name: 'LullaTrack',
    url: 'https://lullatrack.com',
    github: null,
    stack: ['Rails 8', 'Vue.js 3', 'Google Gemini 2.5 Flash', 'Twilio SMS', 'Telegram Bot'],
    description:
      'Newborn health tracking platform. Parents log feeding, sleep, growth, and vaccinations via SMS, Telegram, or Gmail using natural language \u2014 powered by Gemini AI. WHO growth percentile charts, PDF doctor reports.',
    badge: 'Live \u00B7 Consumer App',
    badgeColor: 'bg-emerald-500/20 text-emerald-300',
  },
  {
    name: 'Memvra',
    url: 'https://memvra.com',
    github: null,
    install: 'brew install memvra/tap/memvra',
    stack: ['Go', 'SQLite', 'sqlite-vec', 'MCP Protocol', 'Claude', 'OpenAI', 'Gemini', 'Ollama'],
    description:
      'Developer CLI tool giving AI coding assistants persistent memory across sessions. Integrates with Claude Code, Cursor, and Windsurf via MCP protocol. 70-90% cache hit rate, 5.6x indexing performance improvement.',
    badge: 'Live \u00B7 Developer Tool \u00B7 Open Source',
    badgeColor: 'bg-purple-500/20 text-purple-300',
  },
  {
    name: 'Asclepius AI',
    url: null,
    github: null,
    stack: ['Rails 7.2', 'Vue.js 3', 'Ollama', 'RAG', 'pgvector', 'AWS S3', 'Lockbox'],
    description:
      'HIPAA-compliant pharmaceutical document management with local LLM. All PHI stays on-premise \u2014 no data sent to external APIs. Semantic search, field-level encryption, role-based access control, full audit trails.',
    badge: 'HIPAA \u00B7 Healthcare AI',
    badgeColor: 'bg-sky-500/20 text-sky-300',
  },
  {
    name: 'Massklan',
    url: 'https://www.massklan.com',
    github: null,
    stack: ['Rails', 'PostgreSQL', 'Devise', 'Cloudinary'],
    description:
      'Production tournament management platform for badminton. Dynamic bracket generation, ELO-based skill rating system, doubles partner matching, admin dashboard for organizers.',
    badge: 'Live \u00B7 Sports Tech',
    badgeColor: 'bg-amber-500/20 text-amber-300',
  },
]
