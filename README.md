# 🌿 Unfold

> A psychology-backed, offline-first personal growth companion — open source, free forever.

Unfold is a **free, open-source** daily growth companion that blends CBT, ACT, Stoicism, Vedanta, and mindfulness into one clean, offline-capable web app. No tracking. No subscriptions. No cloud lock-in. Your data stays with you — always.


---

## ✨ Features

| Feature | Description |
|---------|-------------|
| ☀️ **Today Dashboard** | At-a-glance view of mood, streak, journal prompt, breathwork, ritual progress and affirmation |
| 🧠 **CBT Check-in** | 3-step daily check-in: mood rating → energy level → cognitive distortion tracker |
| 📓 **Guided Journal** | Rotating prompts from Stoicism, Vedanta, CBT, ACT, Gratitude & Positive Psychology |
| 🧘 **Breathwork Timer** | 4-7-8, Box breathing, Wim Hof, 4-6 Relax — with animated orb and countdown |
| 🌅 **Morning Ritual Builder** | Build, track and complete your custom daily ritual with ring progress indicator |
| 🔥 **Affirmations** | 20+ affirmations across 7 categories — Confidence, Peace, Growth, Purpose, Vedic, Stoic |
| 📊 **Mood Trends** | Canvas chart tracking mood and energy over 14 days with distortion pattern analysis |
| 🌙 **Dark Mode** | Full light/dark theme toggle, persisted across sessions |
| 📴 **Offline-First** | Works 100% without internet. All data stored in localStorage |
| 📱 **Responsive** | Sidebar on desktop, bottom nav on mobile — works on all screen sizes |
| ☁️ **Optional Cloud Sync** | Seamless Supabase integration for email/password auth and cross-device sync |

---

## 🧠 Psychology Frameworks

Unfold integrates evidence-based mental health frameworks:

| Framework | Application |
|-----------|-------------|
| **CBT** (Cognitive Behavioural Therapy) | Mood tracking, cognitive distortion identifier, daily check-ins |
| **ACT** (Acceptance & Commitment Therapy) | Journal prompts around values and acceptance |
| **Stoicism** | Journal prompts, affirmations (Marcus Aurelius, Epictetus) |
| **Vedanta / Advaita** | Morning intention prompts, Vedic affirmations (Soham, Aham Brahmasmi) |
| **Positive Psychology** | Gratitude prompts, strength-spotting, affirmation engine |
| **Mindfulness** | Breathwork patterns, grounding exercises |

---

## 🚀 Quick Start

### Option 1: Just Open It

```bash
git clone https://github.com/vanshika114/unfolddd.git
cd unfolddd
# Open index.html in your browser — that's it
```

### Option 2: Local Server (Recommended for Development)

#### VS Code + Live Server
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
2. Right-click `index.html` → **Open with Live Server**
3. Visit `http://localhost:5500`

#### Python
```bash
python -m http.server 8000
# Open http://localhost:8000
```

#### Node.js
```bash
npm install
npm run dev  # Uses Vite
# Open http://localhost:5173
```

---

## 🛠 Tech Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Storage**: localStorage (offline-first)
- **Optional Backend**: Supabase (for email/password auth and cloud sync)
- **Build Tool**: Vite (optional, for development and production builds)
- **Deployment**: Vercel

**Zero dependencies by default.** Supabase and Vite are optional.

---

## 📁 Project Structure

```
unfolddd/
├── index.html           # Main entry point
├── app.js              # Core app logic and routing
├── style.css           # All styling (light/dark modes)
├── supabase.js         # Optional Supabase integration
├── cloud-sync.js       # Optional cloud sync logic
├── package.json        # Dependencies (Supabase, Vite)
├── vite.config.js      # Build config
└── README.md           # This file
```

---

## 🔑 Key Features in Depth

### Today Dashboard
Your at-a-glance daily view showing:
- Current mood and energy level
- Today's journal prompt
- Streak counter
- Scheduled affirmation
- Breathwork session status
- Morning ritual progress

### CBT Check-in
Three-step daily check-in workflow:
1. **Rate your mood** (1–10 scale)
2. **Check your energy** (low, medium, high)
3. **Identify thoughts** (Cognitive distortion patterns from CBT)

Results feed into your 14-day mood trends chart.

### Guided Journal
Rotating prompts from six psychology schools:
- **Stoicism**: Amor fati, dichotomy of control, virtue
- **Vedanta**: Self-inquiry (Neti Neti), Soham, unity consciousness
- **ACT**: Values clarification, acceptance, commitment
- **CBT**: Thought records, behavioral experiments
- **Gratitude**: Reflection on abundance and small wins
- **Positive Psychology**: Strength-spotting, meaning-making

### Breathwork Timer
Four guided breathing patterns with visual cues:
- **4-7-8 Breathing** (Box breathing variant)
- **Box Breathing** (4-4-4-4 cycle)
- **Wim Hof Method** (hyperventilation + breath hold)
- **4-6 Relax** (extended exhale)

Each includes an animated orb synced to your breath rhythm.

### Morning Ritual Builder
Create a custom daily ritual (e.g., meditation → journaling → affirmation → cold shower). Track completion with a ring progress indicator.

### Affirmations
20+ pre-written affirmations across 7 categories:
- Confidence & Self-Worth
- Peace & Calm
- Growth & Learning
- Purpose & Meaning
- Vedic / Advaita
- Stoic Wisdom
- Energy & Vitality

Rotated daily or on demand.

### Mood Trends
14-day Canvas chart visualizing:
- Daily mood ratings
- Energy levels
- Cognitive distortion frequency
- Patterns and insights

---

## ☁️ Optional Cloud Sync

By default, Unfold stores everything locally in `localStorage`.

To enable **cross-device sync**:

1. **Create a Supabase account** at [supabase.com](https://supabase.com)
2. **Copy your project credentials** (URL, anon key)
3. **Update `supabase.js`** with your credentials
4. **Sign up in the app** with email/password
5. Data syncs automatically to Supabase PostgreSQL

If you turn off cloud sync, your local data persists forever.

---

## 📦 Development

### Build for Production

```bash
npm run build
# Outputs optimized files to dist/
```

### Serve Production Build

```bash
npm run preview
# Opens http://localhost:4173
```

### Modify Styles

All CSS is in `style.css`. CSS variables handle theming:

```css
:root {
  --bg: #ffffff;
  --text: #000000;
  --accent: #8b5cf6;
  /* ... */
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0f172a;
    --text: #ffffff;
    /* ... */
  }
}
```

Edit these to rebrand Unfold.

### Add New Journal Prompts

Open `app.js` and extend the `journalPrompts` array:

```javascript
const journalPrompts = [
  // Existing prompts...
  {
    framework: "Stoicism",
    prompt: "What is one thing outside your control today?"
  }
];
```

---

## 🤝 Contributing

We welcome contributions! Here's how:

1. **Fork** the repository
2. **Create a branch** for your feature: `git checkout -b feature/your-feature`
3. **Make your changes** and test locally
4. **Commit** with clear messages: `git commit -m "Add new affirmation category"`
5. **Push** to your fork: `git push origin feature/your-feature`
6. **Open a Pull Request** with a description of your changes

### Contribution Ideas
- New psychology frameworks or journal prompts
- Additional breathwork patterns
- Accessibility improvements
- Mobile UI refinements
- Translations to other languages
- New affirmation sets

---

## 📄 License

Licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

You're free to fork, modify, and commercialize — just give credit.

---

## 🙏 Acknowledgments

- **Psychology frameworks** inspired by:
  - Albert Ellis & David Clark (CBT)
  - Steven Hayes (ACT)
  - Marcus Aurelius & Epictetus (Stoicism)
  - Advaita Vedanta masters (Ramakrishna, Vivekananda, Nisargadatta)
  - Martin Seligman & Barbara Fredrickson (Positive Psychology)

- **Breathwork patterns** from:
  - Andrew Huberman (Wim Hof, physiological sigh)
  - Box breathing (U.S. Navy SEAL protocol)
  - 4-7-8 breathing (Dr. Andrew Weil)

---

## 💬 Support & Feedback

- **Found a bug?** [Open an issue](https://github.com/vanshika114/unfolddd/issues)
- **Have an idea?** [Start a discussion](https://github.com/vanshika114/unfolddd/discussions)
- **Want to chat?** Reach out on [X/Twitter](https://twitter.com) or [email](mailto:vanshika@example.com)

---

## 🌱 Roadmap

- [ ] Habit tracker integration
- [ ] Spaced repetition for affirmations
- [ ] Export journal entries as PDF
- [ ] Meditation sound library
- [ ] Progress badges & milestones
- [ ] Multi-language support
- [ ] Wearable integration (Apple Watch, Fitbit)
- [ ] Community prompts marketplace

---

## 🚀 Deployed

**Live at:** [unfolddd.vercel.app](https://unfolddd.vercel.app)

---

**Made with 🌱 by [Vanshika Sharma](https://github.com/vanshika114)**

*Start unfolding today. Your growth matters.*
