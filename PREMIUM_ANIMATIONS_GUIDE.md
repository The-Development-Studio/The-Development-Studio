# Premium Corporate Animations Guide

## 🎨 Overview

This guide covers all the premium, professional animation components and utilities implemented in your website. These follow corporate design standards with smooth, minimal animations that enhance user experience without overwhelming them.

---

## ✅ Key Principles

### DO:
- ✅ Use smooth, subtle animations
- ✅ Apply professional easing curves: `cubic-bezier(0.22, 1, 0.36, 1)`
- ✅ Keep animation durations between 0.3s - 0.6s
- ✅ Use minimal movement (20-40px max)
- ✅ Implement scroll-based reveals for content

### DON'T:
- ❌ Overuse bounce effects
- ❌ Add shake/wiggle animations everywhere
- ❌ Use durations longer than 0.8s
- ❌ Animate too many elements at once
- ❌ Use aggressive scale changes (keep between 0.95-1.05)

---

## 📦 Components & Utilities

### 1. **PageTransition** - Smooth Page Changes

**Location**: `/src/app/components/PageTransition.tsx`

**Usage**:
```tsx
import { PageTransition } from '@/app/components/PageTransition';

<PageTransition>
  {/* Your page content */}
</PageTransition>
```

**Features**:
- Smooth fade-in/fade-out on route changes
- Subtle 20px vertical movement
- Professional easing curve
- 0.4s duration

---

### 2. **ScrollReveal** - Element Reveal on Scroll

**Location**: `/src/app/components/ScrollReveal.tsx`

**Basic Usage**:
```tsx
import { ScrollReveal } from '@/app/components/ScrollReveal';

<ScrollReveal direction="up" delay={0.1}>
  <h2>Your Content</h2>
</ScrollReveal>
```

**Props**:
- `direction`: `'up' | 'down' | 'left' | 'right' | 'none'` (default: `'up'`)
- `delay`: number in seconds (default: `0`)
- `className`: additional CSS classes

**Example with Multiple Elements**:
```tsx
<ScrollReveal direction="up">
  <h1>Headline</h1>
</ScrollReveal>

<ScrollReveal direction="up" delay={0.1}>
  <p>Subtext</p>
</ScrollReveal>

<ScrollReveal direction="left" delay={0.2}>
  <button>CTA Button</button>
</ScrollReveal>
```

---

### 3. **TextReveal** - Animated Text Reveals

**Location**: `/src/app/components/TextReveal.tsx`

**Usage**:
```tsx
import { TextReveal } from '@/app/components/TextReveal';

<TextReveal type="word" className="text-5xl font-bold">
  Your Premium Headline Goes Here
</TextReveal>
```

**Props**:
- `type`: `'word' | 'char' | 'line'` (default: `'word'`)
- `delay`: number in seconds
- `className`: additional CSS classes

**Examples**:
```tsx
// Word-by-word reveal (professional)
<TextReveal type="word">
  Crafting Dreams into Digital Reality
</TextReveal>

// Character-by-character (use sparingly)
<TextReveal type="char">
  DS
</TextReveal>
```

---

### 4. **MagneticButton** - Interactive Magnetic Effect

**Location**: `/src/app/components/MagneticButton.tsx`

**Usage**:
```tsx
import { MagneticButton } from '@/app/components/MagneticButton';

<MagneticButton 
  strength={0.3}
  className="px-8 py-4 bg-[#FF6600] text-white rounded-full"
  onClick={() => console.log('clicked')}
>
  Get Started
</MagneticButton>
```

**Props**:
- `strength`: number (default: `0.3`, recommended: `0.2-0.5`)
- `className`: button styles
- `onClick`: click handler

**Best Practices**:
```tsx
// Primary CTA - stronger effect
<MagneticButton strength={0.4}>
  Start Your Project
</MagneticButton>

// Secondary button - subtle effect
<MagneticButton strength={0.2}>
  Learn More
</MagneticButton>
```

---

### 5. **TiltCard** - 3D Hover Tilt Effect

**Location**: `/src/app/components/TiltCard.tsx`

**Usage**:
```tsx
import { TiltCard } from '@/app/components/TiltCard';

<TiltCard 
  tiltAmount={15}
  className="perspective-1000"
>
  <div className="bg-white p-8 rounded-2xl">
    <h3>Your Card Content</h3>
    <p>Card description...</p>
  </div>
</TiltCard>
```

**Props**:
- `tiltAmount`: degrees (default: `15`, recommended: `10-20`)
- `className`: container styles

**Example - Feature Cards**:
```tsx
<div className="grid md:grid-cols-3 gap-8">
  {features.map((feature, index) => (
    <TiltCard key={index} tiltAmount={12}>
      <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border">
        <feature.icon className="w-12 h-12 text-[#FF6600] mb-4" />
        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    </TiltCard>
  ))}
</div>
```

---

### 6. **ParallaxSection** - Depth with Parallax

**Location**: `/src/app/components/ParallaxSection.tsx`

**Usage**:
```tsx
import { ParallaxSection } from '@/app/components/ParallaxSection';

<section className="relative">
  <ParallaxSection speed={-0.3}>
    <div className="background-element" />
  </ParallaxSection>
  
  <div className="relative z-10">
    {/* Your content */}
  </div>
</section>
```

**Props**:
- `speed`: number (negative for upward, positive for downward)
  - `-0.3` to `-0.5`: Subtle background movement (recommended)
  - `0.3` to `0.5`: Content layer movement
- `className`: wrapper styles

**Example - Layered Background**:
```tsx
<section className="relative min-h-screen overflow-hidden">
  {/* Background layer - moves slower */}
  <ParallaxSection speed={-0.3} className="absolute inset-0">
    <div className="w-full h-full bg-gradient-to-br from-orange-500/10 to-transparent" />
  </ParallaxSection>
  
  {/* Middle layer - moves at medium speed */}
  <ParallaxSection speed={-0.2} className="absolute inset-0">
    <div className="decorative-shapes" />
  </ParallaxSection>
  
  {/* Content - static or slight movement */}
  <div className="relative z-10 max-w-7xl mx-auto px-4">
    <h1>Your Content</h1>
  </div>
</section>
```

---

### 7. **useScrollReveal** - Custom Hook

**Location**: `/src/app/hooks/useScrollReveal.ts`

**Usage**:
```tsx
import { useScrollReveal } from '@/app/hooks/useScrollReveal';
import { motion } from 'motion/react';

function MyComponent() {
  const { ref, isInView } = useScrollReveal({
    once: true,
    margin: '-100px',
    amount: 0.3
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      Content appears when 30% visible
    </motion.div>
  );
}
```

**Options**:
- `once`: boolean - animate only once (default: `true`)
- `margin`: string - trigger offset (default: `'-100px'`)
- `amount`: number | 'some' | 'all' - visibility threshold (default: `0.3`)

---

## 🎯 Common Patterns

### Hero Section
```tsx
<section className="min-h-screen flex items-center">
  <div className="max-w-7xl mx-auto px-4">
    <ScrollReveal direction="up">
      <span className="inline-block px-4 py-2 bg-[#FF6600]/10 rounded-full mb-6">
        Award-Winning Studio
      </span>
    </ScrollReveal>

    <ScrollReveal direction="up" delay={0.1}>
      <TextReveal type="word" className="text-7xl font-bold mb-6">
        Crafting Dreams into Digital Reality
      </TextReveal>
    </ScrollReveal>

    <ScrollReveal direction="up" delay={0.2}>
      <p className="text-xl text-gray-600 mb-8">
        Your vision, our artistry.
      </p>
    </ScrollReveal>

    <ScrollReveal direction="up" delay={0.3}>
      <MagneticButton 
        strength={0.4}
        className="px-8 py-4 bg-[#FF6600] text-white rounded-full"
      >
        Start Your Project
      </MagneticButton>
    </ScrollReveal>
  </div>
</section>
```

### Feature Grid with Cards
```tsx
<section className="py-32">
  <div className="max-w-7xl mx-auto px-4">
    <ScrollReveal direction="up">
      <h2 className="text-5xl font-bold text-center mb-16">Our Services</h2>
    </ScrollReveal>

    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ScrollReveal key={service.id} direction="up" delay={index * 0.1}>
          <TiltCard tiltAmount={12}>
            <div className="bg-white p-8 rounded-2xl border">
              <service.icon className="w-12 h-12 text-[#FF6600] mb-4" />
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <MagneticButton className="px-6 py-3 border-2 border-[#FF6600] rounded-full">
                Learn More
              </MagneticButton>
            </div>
          </TiltCard>
        </ScrollReveal>
      ))}
    </div>
  </div>
</section>
```

### Sticky Section with Scroll Snap
```tsx
<section className="relative scroll-snap-start">
  <div className="sticky top-24 min-h-screen flex items-center">
    <div className="max-w-5xl mx-auto px-4">
      <ScrollReveal direction="up">
        <h2 className="text-6xl font-bold mb-8">
          Sticky Content
        </h2>
      </ScrollReveal>
      
      <ScrollReveal direction="up" delay={0.1}>
        <p className="text-xl text-gray-600">
          This section sticks as you scroll
        </p>
      </ScrollReveal>
    </div>
  </div>
</section>
```

---

## 🎨 CSS Utilities Added

### Scroll Snap
```css
html {
  scroll-snap-type: y proximity;
}

section {
  scroll-snap-start; /* Add this class to sections */
}
```

### Typography Enhancements
```css
h1, h2, h3 {
  letter-spacing: -0.02em; /* Tighter, more corporate */
}
```

### Smooth Transitions
```css
a, button, input {
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
```

---

## ⚡ Performance Tips

1. **Use `once: true`** for scroll reveals to prevent re-triggering
2. **Stagger delays** by 0.1s intervals (0, 0.1, 0.2, 0.3...)
3. **Limit tilt cards** to 3-6 per viewport
4. **Keep parallax speeds** between -0.5 and 0.5
5. **Use GPU-accelerated properties**: transform, opacity, filter

---

## 📱 Responsive Considerations

```tsx
// Disable tilt on mobile
<TiltCard 
  tiltAmount={typeof window !== 'undefined' && window.innerWidth > 768 ? 15 : 0}
>
  {/* Content */}
</TiltCard>

// Reduce magnetic strength on mobile
<MagneticButton 
  strength={typeof window !== 'undefined' && window.innerWidth > 768 ? 0.4 : 0.2}
>
  Button
</MagneticButton>
```

---

## 🎯 Animation Timing Reference

### Durations
- **Instant**: 0.2s
- **Fast**: 0.3s (most UI interactions)
- **Normal**: 0.4-0.6s (page transitions, scroll reveals)
- **Slow**: 0.8s (large movements, special effects)

### Delays (Stagger)
- **Tight**: 0.05s
- **Normal**: 0.1s (recommended)
- **Loose**: 0.2s

### Easing Curves
- **Professional**: `cubic-bezier(0.22, 1, 0.36, 1)` ✅ **Use this**
- **Smooth**: `ease-out`
- **Snappy**: `ease-in-out`

---

## 🚀 Quick Start Checklist

- [x] Page transitions enabled in App.tsx
- [x] Scroll reveal components created
- [x] Magnetic buttons implemented
- [x] 3D tilt cards ready
- [x] Parallax utilities available
- [x] Text reveal animations working
- [x] Professional easing curves applied
- [x] Scroll snap configured
- [x] Premium theme styles updated

---

## 📚 Example Usage in Your Project

See `/src/app/components/PremiumShowcase.tsx` for a complete demonstration of all animation features in action.

---

## 🎓 Best Practices Summary

1. **Start simple**: Add animations gradually, test user response
2. **Consistency**: Use same easing curves throughout
3. **Purpose**: Every animation should enhance understanding
4. **Performance**: Keep it smooth at 60fps
5. **Accessibility**: Respect `prefers-reduced-motion`

---

**Remember**: Premium animations are about refinement, not quantity. Less is more. Every animation should have a purpose and enhance the user experience, not distract from it.
