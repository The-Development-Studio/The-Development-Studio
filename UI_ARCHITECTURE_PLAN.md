# The Development Studio - Home Page UI Architecture Plan
## Complete Advanced UI Plan & Component Architecture

**Document Version:** 1.0  
**Target Platform:** Web (Desktop-first, Mobile-responsive)  
**Design System:** The Development Studio Brand System  
**Last Updated:** January 7, 2026

---

## 1. BRAND & VISUAL SYSTEM SPECIFICATION

### 1.1 Brand Identity
```yaml
Brand Name: The Development Studio
Descriptor: A Digital Solution Company
Tagline Primary: Crafting Dreams into Design.
Tagline Secondary: Your Vision, Our Artistry.
```

### 1.2 Color Tokens
```css
--color-primary: #FF6600;      /* Orange - Actions, highlights, metrics */
--color-primary-hover: #FF7722; /* Orange hover state */
--color-primary-light: #FF8800; /* Orange gradient end */
--color-secondary: #FFFFFF;     /* White - Readability, spacing */
--color-contrast: #000000;      /* Black - Structural backgrounds */
--color-gray-100: #F9FAFB;
--color-gray-200: #E5E7EB;
--color-gray-300: #D1D5DB;
--color-gray-400: #9CA3AF;
--color-gray-500: #6B7280;
--color-gray-600: #4B5563;
--color-gray-700: #374151;
--color-gray-800: #1F2937;
--color-gray-900: #111827;
```

### 1.3 Color Usage Rules
- **Black (#000000)**: Structural backgrounds, dark sections, high-contrast areas
- **White (#FFFFFF)**: Text on dark backgrounds, section backgrounds, cards
- **Orange (#FF6600)**: CTAs, metrics, hover states, accent lines, icons on hover
- **PROHIBITED**: Long-form text on orange backgrounds
- **Contrast Ratios**: Minimum 4.5:1 for body text, 3:1 for large text (WCAG AA)

---

## 2. LAYOUT SYSTEM SPECIFICATION

### 2.1 Grid System
```yaml
Desktop Artboard: 1440px
Grid Columns: 12
Max Content Width: 1200px
Gutter Width: 24px (3 × 8px units)
Container Padding: 32px desktop, 24px tablet, 16px mobile
Base Unit: 8px
```

### 2.2 Breakpoint System
```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Tablet portrait */
--breakpoint-md: 768px;   /* Tablet landscape */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Large desktop */
--breakpoint-2xl: 1440px; /* Max content width */
```

### 2.3 Spacing Scale (8px System)
```css
--space-1: 8px;    /* Micro spacing */
--space-2: 16px;   /* Component internal spacing */
--space-3: 24px;   /* Card padding, gutters */
--space-4: 32px;   /* Section spacing (mobile) */
--space-5: 40px;
--space-6: 48px;   /* Section spacing (tablet) */
--space-8: 64px;   /* Section spacing (desktop) */
--space-10: 80px;
--space-12: 96px;  /* Large section spacing */
--space-16: 128px; /* Extra large spacing */
--space-20: 160px; /* Hero/footer spacing */
```

### 2.4 Vertical Rhythm
```yaml
Section Padding Vertical:
  Mobile: 64px (--space-8)
  Tablet: 96px (--space-12)
  Desktop: 128px (--space-16)

Component Spacing:
  Between elements: 24px (--space-3)
  Between groups: 48px (--space-6)
  Between sections: 128px desktop, 64px mobile
```

---

## 3. TYPOGRAPHY SYSTEM

### 3.1 Font Stack
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
                'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;

/* Font Loading Strategy */
font-display: swap;
preload: Inter-Regular.woff2, Inter-Medium.woff2, Inter-Bold.woff2
```

### 3.2 Type Scale
```css
/* Headings */
--text-h1: 56px;          /* Desktop */
--text-h1-mobile: 40px;   /* Mobile */
--text-h1-line-height: 1.1;
--text-h1-weight: 700;
--text-h1-letter-spacing: -0.02em;

--text-h2: 40px;          /* Desktop */
--text-h2-mobile: 32px;   /* Mobile */
--text-h2-line-height: 1.2;
--text-h2-weight: 700;
--text-h2-letter-spacing: -0.01em;

--text-h3: 28px;          /* Desktop */
--text-h3-mobile: 24px;   /* Mobile */
--text-h3-line-height: 1.3;
--text-h3-weight: 600;

--text-h4: 24px;
--text-h4-line-height: 1.4;
--text-h4-weight: 600;

/* Body Text */
--text-body-lg: 18px;
--text-body-lg-line-height: 1.7;

--text-body: 16px;
--text-body-line-height: 1.6;
--text-body-weight: 400;

--text-body-sm: 14px;
--text-body-sm-line-height: 1.5;

/* UI Text */
--text-button: 16px;
--text-button-weight: 500;
--text-button-letter-spacing: 0.01em;

--text-caption: 14px;
--text-caption-line-height: 1.4;

--text-overline: 12px;
--text-overline-weight: 600;
--text-overline-letter-spacing: 0.05em;
--text-overline-transform: uppercase;
```

### 3.3 Typography Rules
1. **One H1 per page** - Semantic SEO requirement
2. **Heading hierarchy** must be sequential (no H1 → H3 skip)
3. **Body text color**: White on black backgrounds (#FFFFFF), Black on white backgrounds (#000000)
4. **Minimum font size**: 14px for UI elements, 16px for body content
5. **Line length**: 60-75 characters optimal reading width
6. **Contrast**: 7:1 for body text, 4.5:1 for large text (WCAG AAA where possible)

---

## 4. COMPONENT ARCHITECTURE (ATOMIC DESIGN)

### 4.1 ATOMS

#### A1. Button Component
```typescript
States: default | hover | active | focus | disabled | loading
Variants: primary | secondary | ghost | link
Sizes: sm | md | lg
```

**Primary Button**
```yaml
Background: #FF6600
Text Color: #FFFFFF
Padding: 12px 24px (md), 10px 20px (sm), 14px 32px (lg)
Border Radius: 8px
Font Size: 16px
Font Weight: 500
Transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1)

Hover:
  Background: #FF7722
  Transform: translateY(-2px)
  Box Shadow: 0 8px 24px rgba(255, 102, 0, 0.3)
  
Active:
  Transform: translateY(0)
  Box Shadow: 0 4px 12px rgba(255, 102, 0, 0.2)
  
Focus:
  Outline: 2px solid #FF6600
  Outline Offset: 2px
  
Disabled:
  Background: #9CA3AF
  Cursor: not-allowed
  Opacity: 0.6
```

**Secondary Button**
```yaml
Background: transparent
Border: 2px solid #FFFFFF
Text Color: #FFFFFF
Padding: 10px 24px (md)
Border Radius: 8px

Hover:
  Background: rgba(255, 255, 255, 0.1)
  Border Color: #FF6600
  Text Color: #FF6600
  
Focus:
  Outline: 2px solid #FFFFFF
  Outline Offset: 2px
```

**Ghost Button**
```yaml
Background: transparent
Text Color: #FFFFFF
Padding: 8px 16px

Hover:
  Text Color: #FF6600
  Background: rgba(255, 102, 0, 0.1)
```

**Accessibility Requirements**
- Minimum touch target: 44×44px (iOS) / 48×48px (Android)
- Focus indicators visible
- ARIA label support
- Keyboard accessible (Enter, Space)

#### A2. Icon Component
```yaml
Style: Outline (Lucide React)
Sizes: 16px | 20px | 24px | 32px | 48px
Stroke Width: 2px
Color: Inherits from parent
Transition: all 200ms ease
```

**Icon States**
```css
Default: currentColor
Hover: #FF6600 (interactive contexts)
Active: scale(0.95)
```

#### A3. Text Link
```yaml
Font Size: 16px
Font Weight: 500
Color: #FFFFFF (dark bg) | #000000 (light bg)
Text Decoration: none

Hover:
  Color: #FF6600
  Text Decoration: underline
  Text Underline Offset: 4px
  
Focus:
  Outline: 2px dashed #FF6600
  Outline Offset: 2px
```

#### A4. Divider Line
```yaml
Height: 1px
Background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)
Margin: 32px 0 (vertical spacing)
```

#### A5. Badge Component
```yaml
Variants: status | count | label

Status Badge:
  Background: rgba(255, 102, 0, 0.1)
  Text Color: #FF6600
  Padding: 4px 12px
  Border Radius: 12px
  Font Size: 12px
  Font Weight: 600
  Text Transform: uppercase
  Letter Spacing: 0.05em
```

---

### 4.2 MOLECULES

#### M1. Navigation Item
```yaml
Components: Text Link + Icon (optional) + Underline Indicator

Structure:
  <nav-item>
    <link-text>Label</link-text>
    <chevron-icon /> (if has dropdown)
    <underline-indicator />
  </nav-item>

Default State:
  Text: #FFFFFF
  Underline Width: 0%
  
Hover State:
  Text: #FF6600
  Underline Width: 100%
  Underline Height: 2px
  Underline Color: #FF6600
  Transition: width 300ms ease
  
Active State:
  Text: #FF6600
  Underline Width: 100%
  Underline Opacity: 1
```

#### M2. Dropdown Menu
```yaml
Container:
  Background: rgba(0, 0, 0, 0.95)
  Backdrop Filter: blur(10px)
  Border: 1px solid rgba(255, 255, 255, 0.1)
  Border Radius: 16px
  Padding: 12px
  Min Width: 240px
  Box Shadow: 0 20px 40px rgba(0, 0, 0, 0.5)

Animation:
  Enter: opacity 0→1, translateY(-10px→0), scale(0.95→1)
  Exit: opacity 1→0, translateY(0→-10px), scale(1→0.95)
  Duration: 200ms
  Easing: cubic-bezier(0.4, 0, 0.2, 1)

Dropdown Item:
  Padding: 12px 16px
  Border Radius: 8px
  Font Size: 14px
  Color: #FFFFFF
  
  Hover:
    Background: rgba(255, 255, 255, 0.05)
    Color: #FF6600
    Left Border Accent: 3px solid #FF6600
```

#### M3. Card Component
```yaml
Default Card:
  Background: #FFFFFF
  Border Radius: 16px
  Padding: 32px
  Box Shadow: 0 4px 12px rgba(0, 0, 0, 0.05)
  Transition: all 300ms ease
  
Hover State:
  Transform: translateY(-8px)
  Box Shadow: 0 12px 32px rgba(0, 0, 0, 0.1)
  Border: 1px solid rgba(255, 102, 0, 0.2)
  
Active State:
  Transform: translateY(-4px)
  
Focus State:
  Outline: 2px solid #FF6600
  Outline Offset: 4px

Dark Card Variant:
  Background: #000000
  Border: 1px solid rgba(255, 255, 255, 0.1)
  Color: #FFFFFF
  
  Hover:
    Border Color: rgba(255, 102, 0, 0.5)
```

#### M4. CTA Group
```yaml
Structure: Primary Button + Secondary Button (optional)
Gap: 16px
Flex Direction: row (desktop) | column (mobile)
Alignment: center

Mobile Stack:
  Flex Direction: column
  Button Width: 100%
  Gap: 12px
```

#### M5. Metric Block
```yaml
Structure:
  <metric-block>
    <metric-value>150+</metric-value>
    <metric-label>Projects Delivered</metric-label>
  </metric-block>

Metric Value:
  Font Size: 48px (desktop), 36px (mobile)
  Font Weight: 700
  Color: #FF6600
  Line Height: 1
  Animation: Count-up on scroll into view
  
Metric Label:
  Font Size: 14px
  Font Weight: 400
  Color: rgba(255, 255, 255, 0.7)
  Text Transform: uppercase
  Letter Spacing: 0.05em
  Margin Top: 8px
```

---

### 4.3 ORGANISMS

#### O1. Sticky Header
```yaml
Height: 80px (desktop), 64px (mobile)
Position: fixed
Top: 0
Z-Index: 1000
Width: 100%

Default State (Top of Page):
  Background: transparent
  Backdrop Filter: none
  Border Bottom: none
  
Scrolled State (>50px scroll):
  Background: rgba(0, 0, 0, 0.95)
  Backdrop Filter: blur(10px)
  Border Bottom: 1px solid rgba(255, 255, 255, 0.1)
  Box Shadow: 0 4px 24px rgba(0, 0, 0, 0.5)
  
  Animation:
    Duration: 500ms
    Easing: ease-in-out

Structure:
  <header>
    <logo-area>
      <logo-icon /> (56px square, animated on hover)
      <brand-text>
        <company-name />
        <company-descriptor />
      </brand-text>
    </logo-area>
    
    <navigation>
      <nav-item /> × 8
      <customer-hub-link />
    </navigation>
    
    <mobile-menu-toggle /> (< 1024px)
  </header>

Logo Animation:
  Hover: rotate(360deg) scale(1.1)
  Duration: 600ms
  
Navigation Items:
  Gap: 32px (desktop)
  Font Size: 14px
  Font Weight: 500

Social Bar (appears on scroll):
  Background: rgba(0, 0, 0, 0.5)
  Backdrop Filter: blur(8px)
  Border Top: 1px solid rgba(255, 255, 255, 0.05)
  Padding: 8px 0
  Animation: slideDown from top
  
  Social Links:
    Font Size: 12px
    Gap: 24px
    Color: rgba(255, 255, 255, 0.6)
    Hover Color: #FF6600

Mobile Menu:
  Background: rgba(0, 0, 0, 0.98)
  Backdrop Filter: blur(20px)
  Full Height: 100vh
  Animation: slideIn from right
  Duration: 300ms
  
  Menu Items:
    Stack vertically
    Padding: 16px 24px
    Stagger animation: 50ms delay per item
```

**Accessibility**
- Skip to main content link
- Keyboard navigation (Tab, Arrow keys)
- Focus trap in mobile menu
- ARIA expanded states
- aria-label on navigation regions

#### O2. Hero Section
```yaml
Height: 100vh (min-height: 600px, max-height: 1080px)
Background: #000000
Position: relative
Overflow: hidden

Background Effects:
  - Gradient overlay: radial-gradient from top-right
  - Animated particles (floating geometric shapes)
  - Grid pattern overlay (subtle, 10% opacity)

Content Container:
  Max Width: 1200px
  Padding: 0 32px
  Display: flex
  Flex Direction: column
  Justify Content: center
  Min Height: 100vh

Structure:
  <hero-section>
    <animated-background />
    
    <content-wrapper>
      <badge>A Digital Solution Company</badge>
      
      <h1>
        Crafting Dreams into Design.<br/>
        Your Vision, Our Artistry.
      </h1>
      
      <description>
        We transform bold ideas into exceptional digital experiences
        through innovative design and cutting-edge technology.
      </description>
      
      <cta-group>
        <primary-button>Start Your Project</primary-button>
        <secondary-button>View Our Work</secondary-button>
      </cta-group>
      
      <metrics-row>
        <metric-block>150+ Projects</metric-block>
        <metric-block>98% Satisfaction</metric-block>
        <metric-block>8+ Years</metric-block>
      </metrics-row>
    </content-wrapper>
    
    <scroll-indicator />
  </hero-section>

Typography:
  Badge:
    Font Size: 14px
    Color: #FF6600
    Text Transform: uppercase
    Letter Spacing: 0.1em
    Margin Bottom: 24px
    Animation: fadeIn + slideUp, delay 200ms
    
  H1:
    Font Size: 56px (desktop), 40px (mobile)
    Line Height: 1.1
    Font Weight: 700
    Color: #FFFFFF
    Max Width: 900px
    Animation: fadeIn + slideUp, delay 400ms
    
  Description:
    Font Size: 18px
    Line Height: 1.7
    Color: rgba(255, 255, 255, 0.8)
    Max Width: 600px
    Margin: 32px 0
    Animation: fadeIn + slideUp, delay 600ms
    
  CTA Group:
    Margin: 40px 0
    Animation: fadeIn + slideUp, delay 800ms
    
  Metrics Row:
    Display: flex
    Gap: 64px (desktop), 32px (mobile)
    Margin Top: 64px
    Animation: fadeIn + slideUp, delay 1000ms

Scroll Indicator:
  Position: absolute
  Bottom: 40px
  Left: 50%
  Transform: translateX(-50%)
  
  Design:
    Mouse icon outline
    Animated scroll wheel
    Text: "Scroll to explore"
    Font Size: 12px
    Color: rgba(255, 255, 255, 0.5)
    
  Animation:
    Bounce animation (vertical movement)
    Duration: 2s infinite
```

**Animations**
```css
@keyframes fadeInSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes floatingParticles {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(10px, -10px) rotate(90deg); }
  50% { transform: translate(-5px, -20px) rotate(180deg); }
  75% { transform: translate(-10px, -10px) rotate(270deg); }
}

@keyframes scrollBounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(10px); }
}
```

**Responsive Behavior**
```yaml
Desktop (1440px):
  - Full metrics row visible
  - Particles animated
  - Large typography scale
  
Tablet (768px):
  - Reduced H1 to 48px
  - Metrics wrap to 2 columns
  - CTA buttons side-by-side
  
Mobile (< 640px):
  - H1: 40px
  - Metrics stack vertically
  - CTA buttons full width, stacked
  - Hide animated particles (performance)
  - Scroll indicator smaller
```

#### O3. Value Proposition Section
```yaml
Background: #FFFFFF
Padding: 128px 0 (desktop), 64px 0 (mobile)

Structure:
  <section id="value-proposition">
    <section-header>
      <overline>Why Choose Us</overline>
      <h2>Exceptional Solutions, Measurable Results</h2>
      <description>
        We deliver enterprise-grade digital solutions that drive
        business growth and exceed expectations.
      </description>
    </section-header>
    
    <value-grid>
      <value-card /> × 4
    </value-grid>
  </section>

Section Header:
  Text Align: center
  Max Width: 800px
  Margin: 0 auto 64px
  
  Overline:
    Color: #FF6600
    Font Size: 14px
    Font Weight: 600
    Text Transform: uppercase
    Letter Spacing: 0.1em
    Margin Bottom: 16px
    
  H2:
    Font Size: 40px (desktop), 32px (mobile)
    Color: #000000
    Font Weight: 700
    Margin Bottom: 16px
    
  Description:
    Font Size: 18px
    Line Height: 1.7
    Color: #6B7280

Value Grid:
  Display: grid
  Grid Template Columns: repeat(4, 1fr) (desktop)
  Gap: 24px
  
  Tablet (768px):
    Grid Template Columns: repeat(2, 1fr)
    
  Mobile (< 640px):
    Grid Template Columns: 1fr

Value Card:
  Background: #FFFFFF
  Border: 1px solid #E5E7EB
  Border Radius: 16px
  Padding: 40px 32px
  Text Align: center
  Transition: all 300ms ease
  
  Structure:
    <icon-wrapper>
      <icon size={48} />
    </icon-wrapper>
    <h3>Innovation First</h3>
    <p>Description text explaining the value</p>
  
  Icon Wrapper:
    Width: 80px
    Height: 80px
    Margin: 0 auto 24px
    Background: linear-gradient(135deg, #FF6600, #FF8800)
    Border Radius: 50%
    Display: flex
    Align Items: center
    Justify Content: center
    
    Icon:
      Color: #FFFFFF
      Size: 40px
      Animation: rotate on card hover
  
  H3:
    Font Size: 20px
    Font Weight: 600
    Color: #000000
    Margin Bottom: 12px
    
  P:
    Font Size: 16px
    Line Height: 1.6
    Color: #6B7280
  
  Hover State:
    Transform: translateY(-8px)
    Border Color: #FF6600
    Box Shadow: 0 12px 32px rgba(255, 102, 0, 0.15)
    
    Icon Wrapper:
      Transform: rotate(360deg)
      Transition: transform 600ms ease

Scroll Animation:
  Cards fade in sequentially
  Stagger delay: 100ms per card
  Animation: fadeInSlideUp
  Trigger: when 20% visible (Intersection Observer)
```

**Four Value Props**
1. **Innovation First**: Cutting-edge technology and creative solutions
2. **Client-Centric**: Your success is our priority
3. **Quality Assured**: Rigorous testing and best practices
4. **On-Time Delivery**: Reliable timelines and clear communication

#### O4. Expertise Section
```yaml
Background: #000000
Padding: 128px 0
Position: relative

Structure:
  <section id="expertise">
    <section-header>
      <overline>Our Services</overline>
      <h2>Comprehensive Digital Expertise</h2>
    </section-header>
    
    <expertise-grid>
      <expertise-card /> × 8
    </expertise-grid>
  </section>

Section Header:
  Text Align: center
  Max Width: 800px
  Margin: 0 auto 80px
  
  Overline:
    Color: #FF6600
    
  H2:
    Color: #FFFFFF

Expertise Grid:
  Display: grid
  Grid Template Columns: repeat(4, 1fr) (desktop)
  Gap: 24px
  
  Tablet (768px):
    Grid Template Columns: repeat(2, 1fr)
    Gap: 16px
    
  Mobile (< 640px):
    Grid Template Columns: 1fr
    Gap: 16px

Expertise Card:
  Background: rgba(255, 255, 255, 0.05)
  Backdrop Filter: blur(10px)
  Border: 1px solid rgba(255, 255, 255, 0.1)
  Border Radius: 16px
  Padding: 40px 32px
  Position: relative
  Overflow: hidden
  Cursor: pointer
  Transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1)
  
  Structure:
    <gradient-overlay /> (hidden by default)
    <icon-wrapper>
      <rotating-icon />
    </icon-wrapper>
    <service-title>Service Name</service-title>
    <service-description>Brief description</service-description>
    <key-features-list /> (hidden by default)
    <cta-arrow />
  
  Icon Wrapper:
    Width: 64px
    Height: 64px
    Border Radius: 12px
    Background: rgba(255, 102, 0, 0.1)
    Border: 1px solid rgba(255, 102, 0, 0.3)
    Display: flex
    Align Items: center
    Justify Content: center
    Margin Bottom: 24px
    Transition: all 300ms ease
    
    Icon:
      Color: #FF6600
      Size: 32px
      
  Service Title:
    Font Size: 20px
    Font Weight: 600
    Color: #FFFFFF
    Margin Bottom: 12px
    
  Service Description:
    Font Size: 14px
    Line Height: 1.6
    Color: rgba(255, 255, 255, 0.6)
    Margin Bottom: 16px
    
  Key Features List:
    Opacity: 0
    Max Height: 0
    Overflow: hidden
    Transition: all 300ms ease
    
    List Items:
      Font Size: 13px
      Color: rgba(255, 255, 255, 0.7)
      Padding Left: 20px
      Position: relative
      
      Before (bullet):
        Content: "→"
        Color: #FF6600
        Position: absolute
        Left: 0
  
  CTA Arrow:
    Position: absolute
    Bottom: 24px
    Right: 24px
    Color: #FF6600
    Opacity: 0
    Transform: translateX(-10px)
    Transition: all 300ms ease
  
  Hover State:
    Background: rgba(255, 102, 0, 0.1)
    Border Color: #FF6600
    Transform: translateY(-4px)
    Box Shadow: 0 16px 48px rgba(255, 102, 0, 0.2)
    
    Gradient Overlay:
      Opacity: 1
      Background: linear-gradient(135deg, 
                  rgba(255, 102, 0, 0.2), 
                  rgba(255, 136, 0, 0.1))
    
    Icon Wrapper:
      Background: #FF6600
      Border Color: #FF6600
      Transform: scale(1.1) rotate(360deg)
      
      Icon:
        Color: #FFFFFF
    
    Key Features List:
      Opacity: 1
      Max Height: 200px
      
    CTA Arrow:
      Opacity: 1
      Transform: translateX(0)
      
  Active/Focus State:
    Outline: 2px solid #FF6600
    Outline Offset: 4px

Scroll Animation:
  Grid items fade in
  Stagger delay: 80ms per card
  Animation direction: from bottom
  Trigger threshold: 15% visible
```

**Eight Services**
1. Web Design & Development
2. Mobile Apps
3. Custom Software
4. AI & Automation
5. Cyber Security
6. Digital Solutions
7. Digital Marketing
8. Graphical Designs

#### O5. Success Stories Section
```yaml
Background: linear-gradient(180deg, #000000 0%, #1F2937 100%)
Padding: 128px 0
Overflow: hidden

Structure:
  <section id="success-stories">
    <section-header>
      <overline>Case Studies</overline>
      <h2>Success Stories That Inspire</h2>
      <nav-controls>
        <prev-button />
        <next-button />
      </nav-controls>
    </section-header>
    
    <carousel-container>
      <case-study-card /> × 6
    </carousel-container>
    
    <metrics-banner>
      <metric /> × 4
    </metrics-banner>
  </section>

Section Header:
  Display: flex
  Justify Content: space-between
  Align Items: flex-start
  Max Width: 1200px
  Margin: 0 auto 64px
  
  Mobile (< 768px):
    Flex Direction: column
    Gap: 24px

Carousel Container:
  Display: flex
  Gap: 32px
  Overflow-x: scroll
  Scroll Snap Type: x mandatory
  Scroll Behavior: smooth
  Padding: 0 32px 40px
  
  Scrollbar:
    Height: 8px
    Background: rgba(255, 255, 255, 0.1)
    Border Radius: 4px
    
    Thumb:
      Background: #FF6600
      Border Radius: 4px

Case Study Card:
  Min Width: 400px (desktop), 320px (mobile)
  Scroll Snap Align: start
  Background: rgba(255, 255, 255, 0.05)
  Backdrop Filter: blur(20px)
  Border: 1px solid rgba(255, 255, 255, 0.1)
  Border Radius: 20px
  Overflow: hidden
  Transition: all 300ms ease
  
  Structure:
    <card-image>
      <img src="project-thumbnail" />
      <category-badge>Category</category-badge>
    </card-image>
    
    <card-content>
      <client-logo />
      <project-title>Project Name</project-title>
      <project-description>Brief overview</project-description>
      
      <metrics-row>
        <metric-item>
          <metric-value>+250%</metric-value>
          <metric-label>ROI Increase</metric-label>
        </metric-item>
        × 2
      </metrics-row>
      
      <read-more-link>
        View Case Study →
      </read-more-link>
    </card-content>
  
  Card Image:
    Height: 240px
    Position: relative
    Overflow: hidden
    
    Img:
      Width: 100%
      Height: 100%
      Object Fit: cover
      Transition: transform 400ms ease
      
    Category Badge:
      Position: absolute
      Top: 16px
      Right: 16px
      Background: rgba(0, 0, 0, 0.8)
      Backdrop Filter: blur(10px)
      Padding: 6px 12px
      Border Radius: 20px
      Font Size: 12px
      Color: #FF6600
      Font Weight: 600
      
  Card Content:
    Padding: 32px
    
  Project Title:
    Font Size: 22px
    Font Weight: 600
    Color: #FFFFFF
    Margin: 16px 0 12px
    
  Project Description:
    Font Size: 15px
    Line Height: 1.6
    Color: rgba(255, 255, 255, 0.7)
    Margin Bottom: 24px
    
  Metrics Row:
    Display: flex
    Gap: 32px
    Padding: 24px 0
    Border Top: 1px solid rgba(255, 255, 255, 0.1)
    Border Bottom: 1px solid rgba(255, 255, 255, 0.1)
    Margin Bottom: 24px
    
  Metric Value:
    Font Size: 28px
    Font Weight: 700
    Color: #FF6600
    
  Metric Label:
    Font Size: 12px
    Color: rgba(255, 255, 255, 0.6)
    Text Transform: uppercase
    Letter Spacing: 0.05em
    
  Read More Link:
    Color: #FF6600
    Font Size: 14px
    Font Weight: 500
    Display: inline-flex
    Align Items: center
    Gap: 8px
    
  Hover State:
    Transform: translateY(-8px)
    Border Color: rgba(255, 102, 0, 0.5)
    Box Shadow: 0 20px 60px rgba(255, 102, 0, 0.2)
    
    Card Image Img:
      Transform: scale(1.05)
      
    Read More Link:
      Gap: 12px

Metrics Banner:
  Background: rgba(255, 102, 0, 0.1)
  Backdrop Filter: blur(20px)
  Border: 1px solid rgba(255, 102, 0, 0.2)
  Border Radius: 16px
  Padding: 48px 32px
  Margin Top: 64px
  Display: grid
  Grid Template Columns: repeat(4, 1fr)
  Gap: 48px
  
  Tablet (< 1024px):
    Grid Template Columns: repeat(2, 1fr)
    Gap: 32px
    
  Mobile (< 640px):
    Grid Template Columns: 1fr
    Gap: 24px

Navigation Controls:
  Display: flex
  Gap: 12px
  
  Button:
    Width: 48px
    Height: 48px
    Border Radius: 50%
    Background: rgba(255, 255, 255, 0.1)
    Border: 1px solid rgba(255, 255, 255, 0.2)
    Color: #FFFFFF
    Cursor: pointer
    Transition: all 300ms ease
    
    Hover:
      Background: #FF6600
      Border Color: #FF6600
      Transform: scale(1.1)
      
    Disabled:
      Opacity: 0.3
      Cursor: not-allowed
```

#### O6. Domains Section
```yaml
Background: #FFFFFF
Padding: 128px 0

Structure:
  <section id="domains">
    <section-header>
      <overline>Industries We Serve</overline>
      <h2>Specialized Domain Expertise</h2>
      <description>
        Deep industry knowledge across multiple sectors
      </description>
    </section-header>
    
    <domains-grid>
      <domain-card /> × 6
    </domains-grid>
  </section>

Domains Grid:
  Display: grid
  Grid Template Columns: repeat(3, 1fr) (desktop)
  Gap: 32px
  
  Tablet (768px):
    Grid Template Columns: repeat(2, 1fr)
    Gap: 24px
    
  Mobile (< 640px):
    Grid Template Columns: 1fr
    Gap: 20px

Domain Card:
  Background: #FFFFFF
  Border: 2px solid #E5E7EB
  Border Radius: 20px
  Padding: 48px 40px
  Position: relative
  Overflow: hidden
  Cursor: pointer
  Transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1)
  
  Structure:
    <background-pattern /> (subtle grid/icon pattern)
    <icon-wrapper>
      <industry-icon />
    </icon-wrapper>
    <domain-title>Industry Name</domain-title>
    <domain-description>Brief industry insight</domain-description>
    <insight-preview /> (hidden by default)
    <stats-row />
    <explore-link>
      Explore Solutions →
    </explore-link>
  
  Background Pattern:
    Position: absolute
    Top: 0
    Right: 0
    Width: 200px
    Height: 200px
    Opacity: 0.03
    Pointer Events: none
    
  Icon Wrapper:
    Width: 72px
    Height: 72px
    Background: linear-gradient(135deg, #FF6600, #FF8800)
    Border Radius: 16px
    Display: flex
    Align Items: center
    Justify Content: center
    Margin Bottom: 24px
    Transition: all 400ms ease
    Box Shadow: 0 8px 24px rgba(255, 102, 0, 0.2)
    
    Icon:
      Color: #FFFFFF
      Size: 36px
      
  Domain Title:
    Font Size: 24px
    Font Weight: 700
    Color: #000000
    Margin Bottom: 12px
    
  Domain Description:
    Font Size: 16px
    Line Height: 1.6
    Color: #6B7280
    Margin Bottom: 24px
    
  Insight Preview:
    Background: rgba(255, 102, 0, 0.05)
    Border Left: 3px solid #FF6600
    Padding: 16px
    Border Radius: 8px
    Margin Bottom: 24px
    Opacity: 0
    Max Height: 0
    Overflow: hidden
    Transition: all 300ms ease
    
    Text:
      Font Size: 14px
      Color: #374151
      Font Style: italic
      
  Stats Row:
    Display: flex
    Gap: 24px
    Padding Top: 24px
    Border Top: 1px solid #E5E7EB
    
    Stat Item:
      Font Size: 12px
      Color: #6B7280
      
      Strong:
        Display: block
        Font Size: 18px
        Font Weight: 600
        Color: #FF6600
        Margin Bottom: 4px
        
  Explore Link:
    Color: #FF6600
    Font Size: 14px
    Font Weight: 500
    Margin Top: 24px
    Display: inline-flex
    Align Items: center
    Gap: 8px
    Opacity: 0
    Transform: translateX(-10px)
    Transition: all 300ms ease
  
  Hover State:
    Border Color: #FF6600
    Transform: translateY(-8px) scale(1.02)
    Box Shadow: 0 20px 60px rgba(255, 102, 0, 0.15)
    
    Icon Wrapper:
      Transform: rotate(360deg) scale(1.1)
      Box Shadow: 0 12px 36px rgba(255, 102, 0, 0.3)
      
    Insight Preview:
      Opacity: 1
      Max Height: 200px
      
    Explore Link:
      Opacity: 1
      Transform: translateX(0)
      Gap: 12px
      
  Focus State:
    Outline: 3px solid #FF6600
    Outline Offset: 4px

Scroll Animation:
  Cards fade in with scale
  Stagger delay: 120ms per card
  Animation: fadeInScale from 0.9 to 1
  Trigger: 25% visible
```

**Six Industries**
1. FinTech
2. Healthcare
3. E-Commerce
4. Logistics
5. SaaS
6. Education

#### O7. Knowledge Hub Section
```yaml
Background: #F9FAFB
Padding: 128px 0

Structure:
  <section id="knowledge-hub">
    <section-header>
      <overline>Insights & Resources</overline>
      <h2>Knowledge Hub</h2>
      <view-all-link>View All Articles →</view-all-link>
    </section-header>
    
    <articles-layout>
      <featured-article />
      <secondary-articles-grid>
        <article-card /> × 3
      </secondary-articles-grid>
    </articles-layout>
    
    <newsletter-signup />
  </section>

Section Header:
  Display: flex
  Justify Content: space-between
  Align Items: center
  Margin Bottom: 64px
  
  View All Link:
    Color: #FF6600
    Font Size: 16px
    Font Weight: 500

Articles Layout:
  Display: grid
  Grid Template Columns: 1.5fr 1fr (desktop)
  Gap: 32px
  
  Tablet (< 1024px):
    Grid Template Columns: 1fr
    Gap: 24px

Featured Article:
  Background: #FFFFFF
  Border Radius: 24px
  Overflow: hidden
  Box Shadow: 0 8px 32px rgba(0, 0, 0, 0.08)
  Transition: all 400ms ease
  
  Structure:
    <featured-image>
      <img />
      <reading-time-badge>8 min read</reading-time-badge>
    </featured-image>
    
    <article-content>
      <category-badge>Technology</category-badge>
      <article-title>Headline of Featured Article</article-title>
      <article-excerpt>
        Compelling excerpt text that draws readers in...
      </article-excerpt>
      <meta-info>
        <author-avatar />
        <author-name>John Doe</author-name>
        <publish-date>Jan 5, 2026</publish-date>
      </meta-info>
    </article-content>
  
  Featured Image:
    Height: 400px
    Position: relative
    Overflow: hidden
    
    Img:
      Width: 100%
      Height: 100%
      Object Fit: cover
      Transition: transform 600ms ease
      
    Reading Time Badge:
      Position: absolute
      Bottom: 16px
      Left: 16px
      Background: rgba(0, 0, 0, 0.8)
      Backdrop Filter: blur(10px)
      Padding: 8px 16px
      Border Radius: 20px
      Font Size: 13px
      Color: #FFFFFF
      
  Article Content:
    Padding: 40px
    
  Article Title:
    Font Size: 28px
    Font Weight: 700
    Color: #000000
    Line Height: 1.3
    Margin: 16px 0
    
  Article Excerpt:
    Font Size: 16px
    Line Height: 1.7
    Color: #6B7280
    Margin Bottom: 24px
    
  Meta Info:
    Display: flex
    Align Items: center
    Gap: 12px
    Padding Top: 24px
    Border Top: 1px solid #E5E7EB
    
    Author Avatar:
      Width: 40px
      Height: 40px
      Border Radius: 50%
      
    Author Name:
      Font Size: 14px
      Font Weight: 500
      Color: #000000
      
    Publish Date:
      Font Size: 14px
      Color: #9CA3AF
      
  Hover State:
    Transform: translateY(-4px)
    Box Shadow: 0 16px 48px rgba(0, 0, 0, 0.12)
    
    Featured Image Img:
      Transform: scale(1.05)

Secondary Articles Grid:
  Display: grid
  Grid Template Rows: repeat(3, 1fr)
  Gap: 24px

Article Card:
  Background: #FFFFFF
  Border Radius: 16px
  Padding: 24px
  Display: flex
  Gap: 20px
  Box Shadow: 0 4px 16px rgba(0, 0, 0, 0.06)
  Transition: all 300ms ease
  
  Structure:
    <article-thumbnail>
      <img />
    </article-thumbnail>
    
    <article-info>
      <category-badge>Category</category-badge>
      <article-title>Article Title</article-title>
      <meta-row>
        <publish-date />
        <reading-time />
      </meta-row>
    </article-info>
  
  Article Thumbnail:
    Width: 120px
    Height: 120px
    Border Radius: 12px
    Overflow: hidden
    Flex Shrink: 0
    
    Img:
      Width: 100%
      Height: 100%
      Object Fit: cover
      Transition: transform 400ms ease
      
  Article Info:
    Flex: 1
    Display: flex
    Flex Direction: column
    
  Article Title:
    Font Size: 16px
    Font Weight: 600
    Color: #000000
    Line Height: 1.4
    Margin: 8px 0 auto
    
  Meta Row:
    Display: flex
    Gap: 16px
    Font Size: 13px
    Color: #9CA3AF
    
  Hover State:
    Transform: translateX(8px)
    Box Shadow: 0 8px 24px rgba(0, 0, 0, 0.1)
    
    Article Thumbnail Img:
      Transform: scale(1.1)

Newsletter Signup:
  Background: linear-gradient(135deg, #FF6600, #FF8800)
  Border Radius: 24px
  Padding: 64px 48px
  Margin Top: 64px
  Text Align: center
  Position: relative
  Overflow: hidden
  
  Structure:
    <background-pattern />
    <newsletter-content>
      <icon />
      <h3>Stay Updated</h3>
      <description>
        Subscribe to our newsletter for the latest insights
      </description>
      <email-form>
        <email-input />
        <submit-button />
      </email-form>
      <privacy-note>
        We respect your privacy. Unsubscribe anytime.
      </privacy-note>
    </newsletter-content>
  
  H3:
    Font Size: 32px
    Font Weight: 700
    Color: #FFFFFF
    Margin: 16px 0 12px
    
  Description:
    Font Size: 16px
    Color: rgba(255, 255, 255, 0.9)
    Margin Bottom: 32px
    
  Email Form:
    Display: flex
    Gap: 12px
    Max Width: 500px
    Margin: 0 auto
    
    Mobile (< 640px):
      Flex Direction: column
      
  Email Input:
    Flex: 1
    Padding: 16px 24px
    Border Radius: 12px
    Border: 2px solid rgba(255, 255, 255, 0.3)
    Background: rgba(255, 255, 255, 0.1)
    Backdrop Filter: blur(10px)
    Color: #FFFFFF
    Font Size: 16px
    
    Placeholder:
      Color: rgba(255, 255, 255, 0.6)
      
    Focus:
      Outline: none
      Border Color: #FFFFFF
      Background: rgba(255, 255, 255, 0.2)
      
  Submit Button:
    Padding: 16px 32px
    Background: #000000
    Color: #FFFFFF
    Border: none
    Border Radius: 12px
    Font Size: 16px
    Font Weight: 500
    Cursor: pointer
    Transition: all 300ms ease
    
    Hover:
      Background: #1F2937
      Transform: translateY(-2px)
      Box Shadow: 0 8px 24px rgba(0, 0, 0, 0.3)
      
  Privacy Note:
    Font Size: 13px
    Color: rgba(255, 255, 255, 0.7)
    Margin Top: 16px
```

#### O8. CTA Section
```yaml
Background: #000000
Padding: 160px 0
Position: relative
Overflow: hidden

Background Effects:
  - Radial gradient overlay (orange glow from center)
  - Animated grid pattern
  - Floating particles

Structure:
  <section id="cta">
    <animated-background />
    
    <cta-content>
      <badge>Let's Build Together</badge>
      <h2>Ready to Transform Your Vision into Reality?</h2>
      <description>
        Partner with us to create exceptional digital experiences
        that drive results and exceed expectations.
      </description>
      
      <cta-button-group>
        <primary-cta>Start Your Project</primary-cta>
        <secondary-cta>Schedule a Consultation</secondary-cta>
      </cta-button-group>
      
      <trust-indicators>
        <indicator>
          <icon />
          <text>Free Consultation</text>
        </indicator>
        × 3
      </trust-indicators>
    </cta-content>
  </section>

CTA Content:
  Text Align: center
  Max Width: 900px
  Margin: 0 auto
  Position: relative
  Z-Index: 10
  
  Badge:
    Background: rgba(255, 102, 0, 0.15)
    Border: 1px solid rgba(255, 102, 0, 0.3)
    Color: #FF6600
    Padding: 8px 20px
    Border Radius: 24px
    Font Size: 14px
    Font Weight: 600
    Text Transform: uppercase
    Letter Spacing: 0.1em
    Display: inline-block
    Margin Bottom: 24px
    Animation: pulse 2s infinite
    
  H2:
    Font Size: 56px (desktop), 36px (mobile)
    Font Weight: 700
    Color: #FFFFFF
    Line Height: 1.2
    Margin Bottom: 24px
    Background: linear-gradient(135deg, #FFFFFF, #E5E7EB)
    Background Clip: text
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    
  Description:
    Font Size: 20px
    Line Height: 1.7
    Color: rgba(255, 255, 255, 0.8)
    Margin Bottom: 48px
    Max Width: 700px
    Margin Left: auto
    Margin Right: auto

CTA Button Group:
  Display: flex
  Gap: 20px
  Justify Content: center
  Margin Bottom: 64px
  
  Mobile (< 640px):
    Flex Direction: column
    Align Items: stretch
    
  Primary CTA:
    Background: #FF6600
    Color: #FFFFFF
    Padding: 18px 48px
    Font Size: 18px
    Border Radius: 12px
    Font Weight: 600
    Border: none
    Cursor: pointer
    Transition: all 300ms ease
    Box Shadow: 0 12px 40px rgba(255, 102, 0, 0.4)
    
    Hover:
      Background: #FF7722
      Transform: translateY(-4px)
      Box Shadow: 0 16px 56px rgba(255, 102, 0, 0.5)
      
  Secondary CTA:
    Background: transparent
    Color: #FFFFFF
    Padding: 18px 48px
    Font Size: 18px
    Border Radius: 12px
    Font Weight: 600
    Border: 2px solid rgba(255, 255, 255, 0.3)
    Cursor: pointer
    Transition: all 300ms ease
    
    Hover:
      Border Color: #FF6600
      Color: #FF6600
      Background: rgba(255, 102, 0, 0.1)

Trust Indicators:
  Display: flex
  Gap: 48px
  Justify Content: center
  
  Tablet (< 768px):
    Flex Wrap: wrap
    Gap: 32px
    
  Mobile (< 640px):
    Flex Direction: column
    Gap: 24px
    
  Indicator:
    Display: flex
    Align Items: center
    Gap: 12px
    
    Icon:
      Color: #FF6600
      Size: 24px
      
    Text:
      Font Size: 15px
      Color: rgba(255, 255, 255, 0.9)
      Font Weight: 500

Animated Background:
  Grid Pattern:
    Background: repeating-linear-gradient(
      0deg,
      rgba(255, 102, 0, 0.03) 0px,
      transparent 1px,
      transparent 80px,
      rgba(255, 102, 0, 0.03) 81px
    )
    Animation: gridMove 20s linear infinite
    
  Radial Gradient:
    Background: radial-gradient(
      circle at 50% 50%,
      rgba(255, 102, 0, 0.15) 0%,
      transparent 70%
    )
    
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

@keyframes gridMove {
  0% { transform: translateY(0); }
  100% { transform: translateY(80px); }
}

Scroll Animation:
  Content fades in with scale
  Animation: fadeInScale
  Scale: 0.95 to 1
  Opacity: 0 to 1
  Duration: 800ms
  Trigger: 30% visible
```

#### O9. Footer
```yaml
Background: #000000
Border Top: 1px solid rgba(255, 255, 255, 0.1)
Padding: 80px 0 32px

Structure:
  <footer>
    <footer-main>
      <footer-brand>
        <logo />
        <tagline />
        <social-links />
      </footer-brand>
      
      <footer-links>
        <link-column title="Services" />
        <link-column title="Company" />
        <link-column title="Resources" />
        <link-column title="Connect" />
      </footer-links>
    </footer-main>
    
    <footer-bottom>
      <copyright />
      <legal-links />
    </footer-bottom>
  </footer>

Footer Main:
  Display: grid
  Grid Template Columns: 1.5fr 3fr (desktop)
  Gap: 80px
  Padding Bottom: 64px
  Border Bottom: 1px solid rgba(255, 255, 255, 0.1)
  
  Tablet (< 1024px):
    Grid Template Columns: 1fr
    Gap: 48px

Footer Brand:
  Logo:
    Width: 56px
    Height: 56px
    Margin Bottom: 16px
    
  Tagline:
    Font Size: 16px
    Line Height: 1.6
    Color: rgba(255, 255, 255, 0.7)
    Max Width: 320px
    Margin Bottom: 24px
    
  Social Links:
    Display: flex
    Gap: 16px
    
    Social Icon:
      Width: 40px
      Height: 40px
      Border Radius: 50%
      Background: rgba(255, 255, 255, 0.05)
      Border: 1px solid rgba(255, 255, 255, 0.1)
      Display: flex
      Align Items: center
      Justify Content: center
      Color: rgba(255, 255, 255, 0.7)
      Transition: all 300ms ease
      
      Hover:
        Background: #FF6600
        Border Color: #FF6600
        Color: #FFFFFF
        Transform: translateY(-4px)

Footer Links:
  Display: grid
  Grid Template Columns: repeat(4, 1fr)
  Gap: 48px
  
  Tablet (< 768px):
    Grid Template Columns: repeat(2, 1fr)
    Gap: 32px
    
  Mobile (< 640px):
    Grid Template Columns: 1fr
    Gap: 32px

Link Column:
  Column Title:
    Font Size: 16px
    Font Weight: 600
    Color: #FFFFFF
    Margin Bottom: 20px
    Text Transform: uppercase
    Letter Spacing: 0.05em
    
  Link List:
    Display: flex
    Flex Direction: column
    Gap: 12px
    
    Link:
      Font Size: 15px
      Color: rgba(255, 255, 255, 0.7)
      Transition: all 300ms ease
      
      Hover:
        Color: #FF6600
        Padding Left: 4px

Footer Bottom:
  Display: flex
  Justify Content: space-between
  Align Items: center
  Padding Top: 32px
  
  Mobile (< 640px):
    Flex Direction: column
    Gap: 16px
    Text Align: center
    
  Copyright:
    Font Size: 14px
    Color: rgba(255, 255, 255, 0.5)
    
  Legal Links:
    Display: flex
    Gap: 24px
    
    Link:
      Font Size: 14px
      Color: rgba(255, 255, 255, 0.5)
      
      Hover:
        Color: #FF6600
```

---

## 5. INTERACTION & MOTION SYSTEM

### 5.1 Hover States Specification
```yaml
All Interactive Elements:
  - Minimum: color change + cursor pointer
  - Standard: color + transform (translateY or scale)
  - Premium: color + transform + shadow + icon/underline animation
  - Duration: 300ms (standard), 400ms (complex)
  - Easing: cubic-bezier(0.4, 0, 0.2, 1)
```

### 5.2 Micro-Interactions
```css
/* Button Press */
.button:active {
  transform: scale(0.98);
  transition: transform 100ms ease;
}

/* Card Hover Elevation */
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
}

/* Link Underline Slide */
.link::after {
  content: '';
  width: 0;
  height: 2px;
  background: #FF6600;
  transition: width 300ms ease;
}
.link:hover::after {
  width: 100%;
}

/* Icon Rotation */
.icon-wrapper:hover .icon {
  transform: rotate(360deg);
  transition: transform 600ms ease;
}

/* Opacity Fade */
.element {
  opacity: 0.7;
  transition: opacity 200ms ease;
}
.element:hover {
  opacity: 1;
}
```

### 5.3 Scroll-Based Animations
```javascript
// Intersection Observer Configuration
const observerOptions = {
  root: null,
  threshold: 0.2,  // Trigger when 20% visible
  rootMargin: '0px 0px -100px 0px'
};

// Animation Classes
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 600ms ease, transform 600ms ease;
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}

.fade-in-scale {
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 500ms ease, transform 500ms ease;
}

.fade-in-scale.visible {
  opacity: 1;
  transform: scale(1);
}

// Stagger Animation
.stagger-item {
  transition-delay: calc(var(--index) * 100ms);
}
```

### 5.4 Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 5.5 Performance Optimization
```yaml
Animation Rules:
  - Use transform and opacity ONLY (GPU accelerated)
  - Avoid animating: width, height, top, left
  - Use will-change sparingly
  - Remove will-change after animation completes
  - Max simultaneous animations: 10
  - Debounce scroll events
```

---

## 6. ACCESSIBILITY REQUIREMENTS

### 6.1 Keyboard Navigation
```yaml
Tab Order:
  - Logical flow: top to bottom, left to right
  - Skip to main content link (first tab stop)
  - All interactive elements reachable
  - Modal/dropdown focus trap
  - Escape key closes modals/dropdowns

Focus Indicators:
  - Visible on all interactive elements
  - Minimum 2px outline
  - Color contrast: 3:1 against background
  - Never use outline: none without alternative
  - Custom focus styles permitted if WCAG compliant

Keyboard Shortcuts:
  - Enter/Space: activate buttons/links
  - Arrow keys: navigate menus/carousels
  - Escape: close modals/dropdowns
  - Tab: forward navigation
  - Shift+Tab: backward navigation
```

### 6.2 ARIA Implementation
```html
<!-- Navigation -->
<nav aria-label="Main navigation">
  <button aria-expanded="false" aria-controls="dropdown-menu">
    Services
  </button>
  <div id="dropdown-menu" role="menu" aria-hidden="true">
    <a role="menuitem">Web Development</a>
  </div>
</nav>

<!-- Carousel -->
<section aria-label="Success stories" aria-roledescription="carousel">
  <div role="group" aria-label="1 of 6">
    <!-- Card content -->
  </div>
  <button aria-label="Next slide">Next</button>
</section>

<!-- Form -->
<form aria-labelledby="newsletter-heading">
  <h3 id="newsletter-heading">Subscribe to Newsletter</h3>
  <input aria-label="Email address" aria-required="true" />
  <button type="submit">Subscribe</button>
  <div role="status" aria-live="polite" aria-atomic="true">
    <!-- Success/error messages -->
  </div>
</form>

<!-- Modal -->
<div role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <h2 id="modal-title">Modal Heading</h2>
  <button aria-label="Close modal">×</button>
</div>
```

### 6.3 Screen Reader Support
```yaml
Text Alternatives:
  - Alt text for all images (descriptive, not decorative)
  - aria-label for icon-only buttons
  - Visually hidden text for context
  - aria-describedby for additional info

Content Structure:
  - Proper heading hierarchy (H1 → H2 → H3)
  - Semantic HTML (nav, main, section, article)
  - Lists for grouped items (ul, ol)
  - Landmark roles (banner, main, contentinfo)

Dynamic Content:
  - aria-live regions for updates
  - Status messages announced
  - Loading states communicated
  - Error messages linked to inputs
```

### 6.4 Color Contrast Ratios
```yaml
WCAG AA Requirements (Minimum):
  - Body text (< 18px): 4.5:1
  - Large text (≥ 18px or ≥ 14px bold): 3:1
  - UI components: 3:1
  - Graphical objects: 3:1

WCAG AAA Requirements (Enhanced):
  - Body text: 7:1
  - Large text: 4.5:1

The Development Studio Compliance:
  - White on Black: 21:1 ✓ AAA
  - Black on White: 21:1 ✓ AAA
  - Orange (#FF6600) on Black: 5.81:1 ✓ AA
  - Orange on White: 3.61:1 ✓ AA (large text only)
  - White on Orange: 3.61:1 ✓ AA (large text only)
```

### 6.5 Touch Target Sizes
```yaml
Minimum Sizes:
  - iOS: 44×44px
  - Android: 48×48px
  - Desktop: 24×24px (with padding)

The Development Studio Standard:
  - Primary buttons: 48px height minimum
  - Icon buttons: 44×44px minimum
  - Text links: 44px height with padding
  - Card/tile: entire card clickable
  - Spacing between targets: minimum 8px
```

---

## 7. PERFORMANCE & ENGINEERING

### 7.1 Lazy Loading Strategy
```yaml
Images:
  - All images lazy loaded except above-the-fold
  - loading="lazy" attribute
  - Intersection Observer fallback
  - Progressive image loading (blur-up)
  - Responsive images with srcset

Components:
  - Route-based code splitting
  - Dynamic imports for heavy components
  - Lazy load below-the-fold sections
  - Intersection Observer for scroll-triggered content

Priority Loading:
  High Priority (immediate):
    - Header
    - Hero section
    - Critical CSS
    - Primary font
    
  Medium Priority (defer):
    - Value Proposition section
    - Expertise section (if above fold)
    
  Low Priority (lazy):
    - Success Stories
    - Domains
    - Knowledge Hub
    - Footer
```

### 7.2 Image Optimization
```yaml
Format Strategy:
  - WebP with JPEG fallback
  - SVG for icons and logos
  - AVIF for modern browsers (optional)

Sizing:
  - Provide multiple sizes (320w, 640w, 960w, 1280w, 1920w)
  - Use appropriate size for context
  - Maximum: 1920px width
  - Compress at 80% quality

Dimensions:
  - Set explicit width and height
  - Use aspect-ratio CSS
  - Prevent Cumulative Layout Shift (CLS)

Implementation:
  <img
    src="image-640w.webp"
    srcset="
      image-320w.webp 320w,
      image-640w.webp 640w,
      image-960w.webp 960w,
      image-1280w.webp 1280w
    "
    sizes="(max-width: 640px) 100vw, 
           (max-width: 1024px) 50vw, 
           33vw"
    alt="Descriptive alt text"
    loading="lazy"
    width="640"
    height="480"
  />
```

### 7.3 Layout Shift Prevention
```yaml
Reserved Space:
  - Images: explicit width/height or aspect-ratio
  - Skeleton screens for dynamic content
  - Min-height for sections loading async
  - Placeholder components

Font Loading:
  - font-display: swap
  - Preload critical fonts
  - Match fallback font metrics
  - Use font-size-adjust

Dynamic Content:
  - Reserve space before data loads
  - Skeleton loaders matching final size
  - Avoid inserting content above viewport
  - Smooth transitions for content appearance
```

### 7.4 Component Rendering Strategy
```typescript
// Server-Side Rendering (SSR)
const ssrComponents = [
  'Header',
  'Hero',
  'ValueProposition',
  'Footer'
];

// Client-Side Rendering (CSR)
const csrComponents = [
  'SuccessStories',  // Interactive carousel
  'Newsletter',      // Form with validation
  'DomainCards'      // Interactive hover states
];

// Static Site Generation (SSG)
const ssgSections = [
  'Expertise',       // Static service list
  'Domains',         // Static industry list
  'KnowledgeHub'     // Pre-built article cards
];

// Progressive Enhancement
const enhancedFeatures = {
  animations: 'CSS with JS fallback',
  carousel: 'CSS scroll-snap with JS controls',
  forms: 'Native HTML5 with JS validation',
  navigation: 'Anchor links with smooth scroll'
};
```

### 7.5 Bundle Optimization
```yaml
Code Splitting:
  - Route-based chunks
  - Component-level splitting for large components
  - Vendor bundle separate from app code
  - CSS extracted and split per route

Tree Shaking:
  - ES6 modules only
  - Remove unused imports
  - Dead code elimination
  - Analyze bundle with webpack-bundle-analyzer

Compression:
  - Brotli compression (primary)
  - Gzip fallback
  - Minify JS/CSS/HTML
  - Remove comments and whitespace

Caching Strategy:
  - Content hash in filenames
  - Long-term caching (1 year)
  - Service worker for offline support
  - Cache-first for static assets
```

---

## 8. SEO & CONTENT STRUCTURE

### 8.1 Semantic HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Essential Meta -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Development Studio - Crafting Dreams into Design</title>
  <meta name="description" content="Transform your vision into exceptional digital experiences. Expert web development, mobile apps, and custom software solutions.">
  
  <!-- Open Graph -->
  <meta property="og:title" content="The Development Studio">
  <meta property="og:description" content="Crafting Dreams into Design. Your Vision, Our Artistry.">
  <meta property="og:image" content="/og-image.jpg">
  <meta property="og:type" content="website">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="The Development Studio">
  <meta name="twitter:description" content="Exceptional digital solutions">
  
  <!-- Canonical -->
  <link rel="canonical" href="https://thedevelopmentstudio.com/">
</head>

<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  
  <header role="banner">
    <!-- Navigation -->
  </header>
  
  <main id="main-content" role="main">
    <article>
      <section id="hero">
        <h1>Crafting Dreams into Design</h1>
      </section>
      
      <section id="value-proposition" aria-labelledby="value-heading">
        <h2 id="value-heading">Exceptional Solutions</h2>
      </section>
      
      <!-- Additional sections -->
    </article>
  </main>
  
  <footer role="contentinfo">
    <!-- Footer content -->
  </footer>
</body>
</html>
```

### 8.2 Heading Hierarchy
```yaml
Page Structure:
  H1: "Crafting Dreams into Design" (Hero - Only one per page)
  
  H2 Level:
    - "Exceptional Solutions, Measurable Results" (Value Prop)
    - "Comprehensive Digital Expertise" (Expertise)
    - "Success Stories That Inspire" (Success Stories)
    - "Specialized Domain Expertise" (Domains)
    - "Knowledge Hub" (Articles)
    - "Ready to Transform Your Vision" (CTA)
  
  H3 Level:
    - Value proposition card titles
    - Service names in Expertise grid
    - Article titles
    - Domain/industry titles
  
  H4 Level:
    - Subsections within cards
    - Feature lists
    - Metric labels
```

### 8.3 Internal Linking Strategy
```yaml
Primary Navigation Links:
  - Home (/)
  - Expertise (/expertise)
  - Success Stories (/success-stories)
  - Domains (/domains)
  - Knowledge Hub (/knowledge-hub)
  - Company (/company)
  - Opportunities (/opportunities)
  - Connect (/connect)
  - Customer Hub (/customer-hub)

Contextual Links:
  - Service cards → Service detail pages
  - Domain cards → Domain landing pages
  - Case studies → Full case study pages
  - Articles → Full article pages
  - CTA buttons → Contact/Project form

Footer Links:
  - Sitemap
  - Privacy Policy
  - Terms of Service
  - All main navigation links

Link Attributes:
  - Descriptive anchor text (no "click here")
  - title attribute for additional context
  - rel="noopener" for external links
  - Proper href values (no javascript:void(0))
```

### 8.4 Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "The Development Studio",
  "alternateName": "A Digital Solution Company",
  "url": "https://thedevelopmentstudio.com",
  "logo": "https://thedevelopmentstudio.com/logo.png",
  "description": "Crafting Dreams into Design. Your Vision, Our Artistry.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://linkedin.com/company/thedevelopmentstudio",
    "https://instagram.com/thedevelopmentstudio",
    "https://twitter.com/thedevstudio",
    "https://facebook.com/thedevelopmentstudio",
    "https://threads.net/@thedevelopmentstudio",
    "https://youtube.com/@thedevelopmentstudio",
    "https://github.com/thedevelopmentstudio"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Sales",
    "email": "contact@thedevelopmentstudio.com"
  }
}

{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "The Development Studio",
  "url": "https://thedevelopmentstudio.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://thedevelopmentstudio.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Digital Services",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Web Design & Development",
        "description": "Custom web solutions"
      }
    }
    // ... additional services
  ]
}
```

### 8.5 Content Optimization
```yaml
Title Tags:
  Home: "The Development Studio | Digital Solution Company"
  Expertise: "Our Services | The Development Studio"
  Success Stories: "Case Studies | The Development Studio"
  Domains: "Industries We Serve | The Development Studio"
  Knowledge Hub: "Blog & Resources | The Development Studio"
  
  Format: [Page Name] | [Brand] - [Descriptor]
  Length: 50-60 characters
  Include primary keyword

Meta Descriptions:
  Length: 150-160 characters
  Include call-to-action
  Unique per page
  Include target keywords naturally
  
  Example: "Transform your business with expert digital solutions. Web development, mobile apps, custom software, and more. Start your project today."

Image Alt Text:
  - Descriptive and specific
  - Include context, not just object
  - Avoid "image of" or "picture of"
  - Include keywords naturally
  - Max 125 characters
  
  Example: "Modern web application dashboard displaying analytics and metrics"

URL Structure:
  - Lowercase only
  - Hyphens for word separation
  - Short and descriptive
  - Include target keyword
  - Remove stop words (a, the, and)
  
  Good: /expertise/web-development
  Bad: /services/our-web-design-and-development-services
```

---

## 9. RESPONSIVE BEHAVIOR SPECIFICATIONS

### 9.1 Breakpoint Behavior Matrix

#### Desktop (1440px+)
```yaml
Header:
  - Full horizontal navigation
  - Logo + text
  - Social bar visible on scroll
  - Height: 80px

Hero:
  - Full viewport height
  - H1: 56px
  - Metrics row: 3 columns horizontal
  - Animated particles active
  - CTA buttons side-by-side

Value Proposition:
  - 4-column grid
  - Cards: 280px width
  - Full descriptions visible

Expertise:
  - 4-column grid
  - Hover effects: full feature list reveal
  - Icon animations active

Success Stories:
  - Horizontal scroll carousel
  - 3 cards visible simultaneously
  - Custom scrollbar visible

Domains:
  - 3-column grid
  - Large cards with full content
  - Insight preview on hover

Knowledge Hub:
  - Featured article: 60% width
  - Secondary articles: 40% width
  - 3 secondary articles visible

CTA:
  - Centered content, max-width 900px
  - Buttons side-by-side
  - Trust indicators: 3 columns

Footer:
  - 4-column link sections
  - Brand section: 40% width
```

#### Tablet (768px - 1023px)
```yaml
Header:
  - Condensed navigation
  - Reduced gaps (24px → 16px)
  - Height: 72px
  - Logo text smaller

Hero:
  - H1: 48px
  - Metrics: 2 columns
  - Reduced padding
  - CTA buttons stacked

Value Proposition:
  - 2-column grid
  - Cards: 45% width

Expertise:
  - 2-column grid
  - Reduced hover complexity

Success Stories:
  - 2 cards visible
  - Larger touch targets for navigation
  - Simplified metrics display

Domains:
  - 2-column grid
  - Reduced padding

Knowledge Hub:
  - Featured article: full width
  - Secondary articles: full width below
  - 2-column grid for secondary

CTA:
  - Buttons full width, stacked
  - Trust indicators: 2 columns

Footer:
  - 2-column link sections
  - Brand section: full width above
```

#### Mobile (< 768px)
```yaml
Header:
  - Hamburger menu
  - Logo icon only
  - Height: 64px
  - Mobile menu: full-screen overlay

Hero:
  - H1: 40px
  - Metrics: stacked vertically
  - CTA buttons: full width, stacked
  - Reduced vertical padding
  - Particles disabled (performance)

Value Proposition:
  - Single column
  - Cards: full width
  - Reduced padding (24px)

Expertise:
  - Single column
  - Tap to expand features (no hover)
  - Accordion behavior

Success Stories:
  - Single card view
  - Swipe navigation
  - Dot pagination
  - Metrics: stacked

Domains:
  - Single column
  - Tap to view insight
  - Reduced card height

Knowledge Hub:
  - All articles: full width
  - Stacked vertically
  - Simplified card layout

CTA:
  - Full width content
  - Buttons: full width stacked
  - Trust indicators: stacked

Footer:
  - Single column
  - Collapsible sections (accordion)
  - Social icons: grid 4×2
```

### 9.2 Touch Interaction Enhancements
```yaml
Mobile-Specific:
  - Swipe gestures for carousels
  - Pull-to-refresh disabled
  - Touch target minimum: 44×44px
  - Increased padding on interactive elements
  - Tap highlights: -webkit-tap-highlight-color
  - Disabled hover states (use :active instead)
  - Simplified animations
  - Reduced parallax effects
  - Sticky header on scroll up only

Tablet-Specific:
  - Hybrid hover/touch support
  - Larger text for readability
  - Simplified multi-column layouts
  - Optimized for landscape orientation
  - Touch-friendly navigation
```

### 9.3 Image Responsive Rules
```yaml
Hero Background:
  Desktop: 1920×1080px
  Tablet: 1024×768px
  Mobile: 640×960px

Card Images:
  Desktop: 400×300px
  Tablet: 350×260px
  Mobile: 100% width, auto height

Article Thumbnails:
  Desktop: 800×450px
  Tablet: 600×340px
  Mobile: 100% width, aspect-ratio 16:9

Profile/Avatar:
  All devices: 80×80px, 160×160px @2x
```

### 9.4 Typography Scaling
```yaml
Heading Scale:
  H1:
    Desktop: 56px
    Tablet: 48px
    Mobile: 40px
    
  H2:
    Desktop: 40px
    Tablet: 36px
    Mobile: 32px
    
  H3:
    Desktop: 28px
    Tablet: 24px
    Mobile: 24px
    
  Body:
    Desktop: 18px
    Tablet: 17px
    Mobile: 16px
    
  Button:
    Desktop: 16px
    Tablet: 16px
    Mobile: 16px (consistent)
```

---

## 10. COMPONENT STATE DEFINITIONS

### 10.1 Button States
```yaml
Primary Button:
  Default:
    Background: #FF6600
    Text: #FFFFFF
    Border: none
    Shadow: none
    Cursor: pointer
    
  Hover:
    Background: #FF7722
    Transform: translateY(-2px)
    Shadow: 0 8px 24px rgba(255, 102, 0, 0.3)
    
  Active:
    Transform: translateY(0)
    Shadow: 0 4px 12px rgba(255, 102, 0, 0.2)
    
  Focus:
    Outline: 2px solid #FF6600
    Outline Offset: 2px
    
  Disabled:
    Background: #9CA3AF
    Cursor: not-allowed
    Opacity: 0.6
    Transform: none
    
  Loading:
    Background: #FF6600
    Cursor: wait
    Content: Spinner animation
    Text: "Loading..."

Secondary Button:
  Default:
    Background: transparent
    Text: #FFFFFF
    Border: 2px solid #FFFFFF
    
  Hover:
    Background: rgba(255, 255, 255, 0.1)
    Border Color: #FF6600
    Text Color: #FF6600
    
  Active:
    Background: rgba(255, 255, 255, 0.15)
    
  Focus:
    Outline: 2px solid #FFFFFF
    Outline Offset: 2px
    
  Disabled:
    Border Color: #9CA3AF
    Text Color: #9CA3AF
    Opacity: 0.5
```

### 10.2 Card States
```yaml
Default:
  Background: #FFFFFF
  Border: 1px solid #E5E7EB
  Shadow: 0 4px 12px rgba(0, 0, 0, 0.05)
  Transform: none
  
Hover:
  Background: #FFFFFF
  Border: 1px solid rgba(255, 102, 0, 0.2)
  Shadow: 0 12px 32px rgba(0, 0, 0, 0.1)
  Transform: translateY(-8px)
  Cursor: pointer
  
Active:
  Transform: translateY(-4px)
  Shadow: 0 8px 24px rgba(0, 0, 0, 0.08)
  
Focus:
  Outline: 2px solid #FF6600
  Outline Offset: 4px
  
Selected:
  Border: 2px solid #FF6600
  Background: rgba(255, 102, 0, 0.02)
  
Disabled:
  Opacity: 0.5
  Cursor: not-allowed
  Pointer Events: none
```

### 10.3 Input States
```yaml
Default:
  Background: #FFFFFF
  Border: 1px solid #D1D5DB
  Text: #000000
  
Hover:
  Border: 1px solid #9CA3AF
  
Focus:
  Border: 2px solid #FF6600
  Outline: none
  Shadow: 0 0 0 3px rgba(255, 102, 0, 0.1)
  
Filled:
  Background: #F9FAFB
  Border: 1px solid #9CA3AF
  
Error:
  Border: 2px solid #DC2626
  Background: #FEF2F2
  
  Focus (Error):
    Border: 2px solid #DC2626
    Shadow: 0 0 0 3px rgba(220, 38, 38, 0.1)
    
Success:
  Border: 2px solid #10B981
  Background: #F0FDF4
  
Disabled:
  Background: #F3F4F6
  Border: 1px solid #E5E7EB
  Text: #9CA3AF
  Cursor: not-allowed
```

### 10.4 Navigation States
```yaml
Navigation Item:
  Default:
    Text: #FFFFFF
    Underline: 0% width
    
  Hover:
    Text: #FF6600
    Underline: 100% width, 2px height
    
  Active (Current Page):
    Text: #FF6600
    Underline: 100% width, 2px height, opacity 1
    
  Focus:
    Outline: 2px dashed #FF6600
    Outline Offset: 4px
    
Dropdown:
  Closed:
    Opacity: 0
    Visibility: hidden
    Transform: translateY(-10px) scale(0.95)
    
  Open:
    Opacity: 1
    Visibility: visible
    Transform: translateY(0) scale(1)
    Transition: 200ms ease
    
Mobile Menu:
  Closed:
    Transform: translateX(100%)
    Visibility: hidden
    
  Open:
    Transform: translateX(0)
    Visibility: visible
    Backdrop: rgba(0, 0, 0, 0.8)
```

---

## 11. DESIGN SYSTEM TOKENS

### 11.1 Complete Token Library
```css
:root {
  /* Colors - Primary */
  --color-primary-50: #FFF7ED;
  --color-primary-100: #FFEDD5;
  --color-primary-200: #FED7AA;
  --color-primary-300: #FDBA74;
  --color-primary-400: #FB923C;
  --color-primary-500: #FF6600;  /* Brand primary */
  --color-primary-600: #EA580C;
  --color-primary-700: #C2410C;
  --color-primary-800: #9A3412;
  --color-primary-900: #7C2D12;
  
  /* Colors - Neutral */
  --color-white: #FFFFFF;
  --color-black: #000000;
  --color-gray-50: #F9FAFB;
  --color-gray-100: #F3F4F6;
  --color-gray-200: #E5E7EB;
  --color-gray-300: #D1D5DB;
  --color-gray-400: #9CA3AF;
  --color-gray-500: #6B7280;
  --color-gray-600: #4B5563;
  --color-gray-700: #374151;
  --color-gray-800: #1F2937;
  --color-gray-900: #111827;
  
  /* Colors - Semantic */
  --color-success: #10B981;
  --color-success-light: #D1FAE5;
  --color-error: #DC2626;
  --color-error-light: #FEE2E2;
  --color-warning: #F59E0B;
  --color-warning-light: #FEF3C7;
  --color-info: #3B82F6;
  --color-info-light: #DBEAFE;
  
  /* Spacing */
  --space-0: 0;
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 40px;
  --space-6: 48px;
  --space-8: 64px;
  --space-10: 80px;
  --space-12: 96px;
  --space-16: 128px;
  --space-20: 160px;
  --space-24: 192px;
  
  /* Typography */
  --font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  
  --font-size-xs: 12px;
  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 20px;
  --font-size-2xl: 24px;
  --font-size-3xl: 28px;
  --font-size-4xl: 32px;
  --font-size-5xl: 40px;
  --font-size-6xl: 48px;
  --font-size-7xl: 56px;
  
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  --line-height-tight: 1.1;
  --line-height-snug: 1.3;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.6;
  --line-height-loose: 1.7;
  
  --letter-spacing-tight: -0.02em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.05em;
  --letter-spacing-wider: 0.1em;
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-base: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-2xl: 24px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-base: 0 4px 12px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 60px rgba(0, 0, 0, 0.15);
  --shadow-2xl: 0 24px 80px rgba(0, 0, 0, 0.2);
  --shadow-orange: 0 8px 24px rgba(255, 102, 0, 0.3);
  --shadow-orange-lg: 0 16px 48px rgba(255, 102, 0, 0.2);
  
  /* Transitions */
  --transition-fast: 150ms;
  --transition-base: 300ms;
  --transition-slow: 500ms;
  --transition-slower: 800ms;
  
  --easing-linear: linear;
  --easing-ease: ease;
  --easing-ease-in: ease-in;
  --easing-ease-out: ease-out;
  --easing-ease-in-out: ease-in-out;
  --easing-spring: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Z-Index */
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-fixed: 300;
  --z-modal-backdrop: 400;
  --z-modal: 500;
  --z-popover: 600;
  --z-tooltip: 700;
  
  /* Container */
  --container-max-width: 1200px;
  --container-padding-mobile: 16px;
  --container-padding-tablet: 24px;
  --container-padding-desktop: 32px;
}
```

---

## 12. IMPLEMENTATION CHECKLIST

### 12.1 Development Phases

**Phase 1: Foundation (Week 1)**
- [ ] Design system tokens implemented
- [ ] Typography system configured
- [ ] Color system with CSS variables
- [ ] Spacing system established
- [ ] Grid system configured
- [ ] Base component atoms created
- [ ] Accessibility foundation (focus styles, skip links)

**Phase 2: Core Components (Week 2)**
- [ ] Header with navigation
- [ ] Footer
- [ ] Button components (all variants)
- [ ] Card components
- [ ] Form inputs and validation
- [ ] Icon library integrated
- [ ] Image optimization system

**Phase 3: Home Page Sections (Week 3-4)**
- [ ] Hero section with animations
- [ ] Value Proposition section
- [ ] Expertise grid with hover effects
- [ ] Success Stories carousel
- [ ] Domains section
- [ ] Knowledge Hub
- [ ] CTA section
- [ ] Newsletter signup

**Phase 4: Interactions & Animations (Week 5)**
- [ ] Scroll-based animations
- [ ] Hover states and micro-interactions
- [ ] Loading states
- [ ] Transition effects
- [ ] Particle animations
- [ ] Smooth scroll behavior

**Phase 5: Responsive & Accessibility (Week 6)**
- [ ] Mobile breakpoint implementation
- [ ] Tablet breakpoint implementation
- [ ] Touch interaction optimization
- [ ] Keyboard navigation complete
- [ ] Screen reader testing
- [ ] ARIA implementation
- [ ] Focus management

**Phase 6: Performance & SEO (Week 7)**
- [ ] Image lazy loading
- [ ] Code splitting
- [ ] Bundle optimization
- [ ] Semantic HTML review
- [ ] Structured data implementation
- [ ] Meta tags optimization
- [ ] Sitemap generation
- [ ] Performance audit (Lighthouse)

**Phase 7: Testing & Launch (Week 8)**
- [ ] Cross-browser testing
- [ ] Device testing
- [ ] Accessibility audit (WCAG AA)
- [ ] Performance optimization
- [ ] SEO audit
- [ ] User testing
- [ ] Bug fixes
- [ ] Launch preparation

---

## 13. QUALITY ASSURANCE CRITERIA

### 13.1 Performance Targets
```yaml
Core Web Vitals:
  LCP (Largest Contentful Paint): < 2.5s
  FID (First Input Delay): < 100ms
  CLS (Cumulative Layout Shift): < 0.1

Lighthouse Scores:
  Performance: > 90
  Accessibility: > 95
  Best Practices: > 95
  SEO: > 95

Loading Metrics:
  Time to Interactive: < 3.5s
  First Contentful Paint: < 1.5s
  Speed Index: < 3.0s
  Total Blocking Time: < 300ms

Resource Limits:
  Total Page Size: < 2MB
  JavaScript Bundle: < 300KB
  CSS Bundle: < 100KB
  Images (total): < 1.5MB
  Fonts: < 100KB
```

### 13.2 Accessibility Checklist
```yaml
WCAG 2.1 AA Compliance:
  - [ ] Color contrast ratios meet requirements
  - [ ] All images have alt text
  - [ ] Keyboard navigation functional
  - [ ] Focus indicators visible
  - [ ] No keyboard traps
  - [ ] Headings in logical order
  - [ ] Form labels properly associated
  - [ ] Error messages clear and helpful
  - [ ] Skip to main content link
  - [ ] ARIA labels on complex components
  - [ ] Screen reader tested
  - [ ] Zoom to 200% without loss of content
  - [ ] No content solely conveyed by color
  - [ ] Motion respects prefers-reduced-motion
```

### 13.3 Browser Support
```yaml
Desktop Browsers:
  - Chrome: Latest 2 versions
  - Firefox: Latest 2 versions
  - Safari: Latest 2 versions
  - Edge: Latest 2 versions

Mobile Browsers:
  - iOS Safari: Latest 2 versions
  - Chrome Android: Latest 2 versions
  - Samsung Internet: Latest version

Fallbacks:
  - CSS Grid: Flexbox fallback
  - WebP: JPEG/PNG fallback
  - Modern JS: Transpiled to ES5
  - CSS Variables: Static color fallback
```

---

## DOCUMENT END

This comprehensive UI architecture plan provides complete specifications for implementing The Development Studio home page with professional-grade quality, accessibility compliance, performance optimization, and SEO readiness.

**Total Estimated Components:** 45+  
**Estimated Development Time:** 8 weeks  
**Technology Stack:** React, TypeScript, Tailwind CSS, Motion/React  
**Target Performance:** 90+ Lighthouse Score  
**Accessibility:** WCAG 2.1 AA Compliant  
**Browser Support:** Modern browsers (2 latest versions)
