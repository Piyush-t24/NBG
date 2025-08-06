# UI Components Documentation

This document provides comprehensive documentation for all UI components used in the NEET Battleground platform.

## 🎨 Design System

### Color Palette
- **Primary Blues**: `blue-400` to `blue-700` for main actions
- **Purple Accents**: `purple-400` to `purple-700` for secondary elements
- **Medical Greens**: `green-400` to `green-600` for success states
- **Warning Colors**: `yellow-400` to `orange-400` for highlights
- **Background**: `slate-900` to `indigo-900` for dark theme

### Typography
- **Headings**: Bold, gaming-inspired fonts with gradient text effects
- **Body**: Clean, readable text with proper contrast
- **Interactive**: Hover states with smooth transitions

### Animations
- **Duration**: 300-500ms for smooth user experience
- **Easing**: `transition-all duration-300` for consistent feel
- **Hover Effects**: Scale transforms and glow effects
- **Loading States**: Pulsing animations for feedback

## 📦 Component Library

### Button Component
Enhanced button with multiple variants and gaming aesthetics.

```tsx
import Button from './Button';

// Primary button with gradient
<Button 
  size="lg" 
  className="bg-gradient-to-r from-blue-600 to-purple-600"
  icon={<Play className="w-6 h-6" />}
>
  Start Playing
</Button>

// Outline button
<Button 
  variant="outline" 
  size="lg" 
  className="border-blue-400 text-blue-100"
>
  Learn More
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'danger' | 'gradient'
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `gradient`: 'blue' | 'purple' | 'green' | 'pink' | 'orange'
- `icon`: React.ReactNode for icon display
- `iconPosition`: 'left' | 'right'

### Card Component
Flexible card component with glass morphism and hover effects.

```tsx
import Card, { CardHeader, CardBody } from './Card';

<Card 
  hoverable 
  glow="blue" 
  gradient 
  className="bg-gradient-to-br from-blue-600 to-purple-700"
>
  <CardHeader gradient>
    <h3>Card Title</h3>
  </CardHeader>
  <CardBody glass>
    <p>Card content with glass effect</p>
  </CardBody>
</Card>
```

**Props:**
- `hoverable`: Boolean for hover animations
- `glow`: 'blue' | 'purple' | 'green' | 'pink' | 'orange' | 'none'
- `gradient`: Boolean for gradient background
- `glass`: Boolean for glass morphism effect

### AnimatedBackground Component
Dynamic background with medical-themed particles and effects.

```tsx
import AnimatedBackground from './AnimatedBackground';

<AnimatedBackground className="absolute inset-0" />
```

**Features:**
- 20 animated particles with varying speeds
- DNA helix effect with sine wave animation
- Medical-themed decorative elements
- Floating medical symbols with ping/pulse effects

### HeroSection Component
Complete hero section with animated logo and CTA buttons.

```tsx
import HeroSection from './HeroSection';

<HeroSection onStartPlaying={handleStartPlaying} />
```

**Features:**
- Animated brain logo with sparkles
- Gradient text effects for title
- Interactive CTA buttons
- Statistics section with colored metrics

### FeaturesSection Component
Showcase platform features with animated cards.

```tsx
import FeaturesSection from './FeaturesSection';

<FeaturesSection />
```

**Features:**
- 3 main feature cards with hover animations
- 2 additional feature cards with gradient backgrounds
- Responsive grid layout
- Icon animations on hover

### GameModeCard Component
Specialized card for game mode selection with 3D effects.

```tsx
import GameModeCard from './GameModeCard';
import { Brain, Pencil } from 'lucide-react';

<GameModeCard
  title="MCQ Quiz Battle"
  subtitle="Test your knowledge"
  description="Challenge yourself with timed questions"
  features={["Real-time gameplay", "Detailed explanations"]}
  icon={Brain}
  color="blue"
  createPath="/mcq/create"
  joinPublicPath="/mcq/play"
  joinPrivatePath="/mcq/join"
  status="LIVE"
/>
```

**Props:**
- `title`: Card title
- `subtitle`: Card subtitle
- `description`: Detailed description
- `features`: Array of feature strings
- `icon`: Lucide icon component
- `color`: 'blue' | 'purple' | 'green' | 'pink' | 'orange'
- `status`: 'LIVE' | 'CREATIVE' | 'BETA'
- Navigation paths for different actions

## 🎯 Usage Guidelines

### Responsive Design
- Use `md:` and `lg:` prefixes for responsive breakpoints
- Mobile-first approach with progressive enhancement
- Touch-friendly button sizes (minimum 44px)

### Animation Best Practices
- Keep animations under 500ms for responsiveness
- Use `transform` and `opacity` for performance
- Provide loading states for async operations
- Ensure animations don't interfere with accessibility

### Accessibility
- Maintain proper color contrast ratios
- Include focus states for keyboard navigation
- Provide alt text for icons and images
- Use semantic HTML elements

### Performance
- Use CSS transforms instead of layout changes
- Optimize images and SVGs
- Lazy load non-critical components
- Minimize re-renders with proper state management

## 🚀 Customization

### Adding New Variants
To add a new button variant:

```tsx
// In Button.tsx
const variants = {
  // ... existing variants
  custom: 'bg-custom-color text-white hover:bg-custom-color-dark',
};
```

### Creating Custom Animations
For custom animations, use Tailwind's animation utilities:

```css
/* In your CSS */
@keyframes custom-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-custom-pulse {
  animation: custom-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### Theme Customization
Update the color palette in `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      }
    }
  }
}
```

## 📱 Mobile Optimization

### Touch Targets
- Minimum 44px for touch targets
- Adequate spacing between interactive elements
- Clear visual feedback for touch interactions

### Performance
- Optimize animations for mobile devices
- Use `will-change` sparingly
- Test on various device capabilities

### Layout
- Stack elements vertically on mobile
- Use appropriate font sizes for readability
- Ensure proper spacing for touch interaction

## 🔧 Development

### Component Structure
```
src/components/ui/
├── Button.tsx           # Enhanced button component
├── Card.tsx            # Flexible card component
├── AnimatedBackground.tsx # Dynamic background
├── HeroSection.tsx     # Hero section component
├── FeaturesSection.tsx # Features showcase
├── GameModeCard.tsx    # Game mode selection
└── README.md          # This documentation
```

### Testing
- Test all interactive states (hover, focus, active)
- Verify responsive behavior across devices
- Ensure accessibility compliance
- Performance testing for animations

### Maintenance
- Keep components modular and reusable
- Document prop changes and new features
- Maintain consistent naming conventions
- Regular code reviews for quality assurance 