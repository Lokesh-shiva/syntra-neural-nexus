# Orbynet - Product Requirements Document (PRD)

## 1. Overview

### Product Description
Orbynet is a futuristic AI content automation platform that demonstrates the potential of AI-driven content creation through an immersive, simulated experience. While the platform doesn't integrate with real AI services, it provides a compelling visualization of how AI agents could collaborate to streamline content creation workflows.

### Hackathon Objective
To create a visually stunning, interactive demonstration of AI-powered content automation that:
- Showcases the potential of AI in content creation
- Provides an engaging user experience through animations and mock functionality
- Demonstrates technical proficiency in modern web development
- Creates a believable simulation of AI-driven workflows

### Tech Stack
- **Frontend Framework**: React + Vite
- **Styling**: TailwindCSS + CSS Modules
- **Animation Libraries**: 
  - `anime.js` for page transitions and micro-interactions
  - Framer Motion for component animations
- **UI Components**: Custom components + Radix UI primitives
- **Routing**: React Router v6
- **State Management**: React Context + Local Storage
- **Icons**: Lucide Icons
- **Build & Deploy**: Vercel

## 2. Core Features

### Landing Page Elements
1. **Hero Section**
   - Animated glowing orb with particle effects
   - Dynamic gradient background
   - Floating UI elements with parallax effect
   - CTA buttons with hover animations

2. **Navbar**
   - Sticky positioning with backdrop blur
   - Scroll-activated glow effect
   - Responsive mobile menu with animations
   - Dynamic color transitions

### AI Simulation Features
1. **Mock AI Generator**
   - Interactive prompt input field
   - Animated robot character showing "thinking" states
   - Progress indicators and loading animations
   - Simulated response generation

2. **Agent Cards**
   - Grid layout with hover effects
   - Gradient borders and backgrounds
   - Icon animations on interaction
   - Feature highlights for each agent type

3. **Workflow Visualization**
   - Step-by-step animation sequence
   - Connected nodes with flowing particles
   - Progress indicators
   - Mobile-responsive layout

### Interactive Elements
1. **Showcase Section**
   - Mock social media posts with realistic styling
   - Placeholder images and videos
   - Engagement metrics simulation
   - Platform-specific formatting

2. **Loading Simulation**
   - "Orbynet is thinking..." animation
   - Progress bars and spinners
   - Simulated agent activity indicators
   - Cancelable operations

3. **Authentication**
   - Pre-populated demo account
   - Mock login/signup forms
   - Session simulation
   - Protected routes

## 3. Pages

### Home (/)
- Hero section with animated orb
- Feature highlights
- How it works section
- CTA sections

### Features (/features)
- Detailed agent cards
- Interactive demonstrations
- Use case examples
- Technical capabilities

### Showcase (/showcase)
- Generated content examples
- Platform integrations
- Success metrics
- User testimonials (simulated)

### Dashboard (/dashboard)
- User profile overview
- Recent activities
- Mock analytics
- Content calendar

### AI Simulation (/simulate)
- Prompt interface
- Real-time animation
- Result preview
- Export options

### Contact (/contact)
- Beta signup form
- Contact information
- FAQ section
- Support resources

## 4. Fake Backend / Mock Data

### Data Simulation
- **Local Storage**: User session and preferences
- **Static JSON**: Pre-defined responses and content
- **Randomization**: Varied loading times and responses
- **Mock APIs**: Simulated network requests

### Content Generation
- Pre-written social media posts
- Placeholder images and videos
- Randomized engagement metrics
- Simulated user interactions

### Authentication Flow
- Demo account auto-login
- Persistent session simulation
- Protected route handling
- Mock user preferences

## 5. Future Scope

### AI Integration Possibilities
- OpenAI GPT integration for real text generation
- DALL-E or Stable Diffusion for image creation
- Whisper API for audio transcription
- Claude for advanced reasoning

### Platform Enhancements
- Real user authentication
- Database integration
- Content scheduling
- Analytics dashboard
- Multi-platform publishing
- Team collaboration features

## Task Status

### ✅ Completed
- Initial layout from Lovable
- Replaced favicon with animated orb SVG
- Basic login/signup UI (disconnected backend)
- Fake AI Output with robot animation
- Replaced Supabase references
- Removed Lovable mentions
- Hosted on Vercel

### 🚧 In Progress
- Break down large files into modular components
- Add scroll & hover transitions via anime.js
- Inject mock user on load
- Enhance loading simulation page

### 📌 To-Do
- Create new pages: Dashboard, AI Thinking Room, Features, Showcase
- Add mock videos/images with placeholders
- Add animation between routes
- Build PRD file and push to GitHub
- Generate README.md with project overview
- Add Contact / Join Beta form (mocked)
- Add dynamic glow-on-scroll nav animations

## Implementation Guidelines

### Animation Standards
- Use consistent easing functions
- Maintain 60fps performance
- Implement fallbacks for reduced motion
- Keep animations under 400ms

### Design System
- Follow atomic design principles
- Maintain consistent spacing (4px grid)
- Use defined color palette
- Implement dark mode by default

### Code Organization
- Component-based architecture
- Shared utilities and hooks
- Centralized animation configs
- Modular styling approach

### Performance Targets
- Lighthouse score > 90
- First contentful paint < 1.5s
- Time to interactive < 3s
- Bundle size < 500KB 