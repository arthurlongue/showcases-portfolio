# UI Components (shadcn/ui)

## OVERVIEW
This directory contains 56 accessible, reusable UI components based on shadcn/ui. 
They provide the consistent design language across all niche showcases like Dentista and Psicólogo. 
The components use Radix UI primitives and Tailwind CSS v4 to provide high-performance, professional layouts.
Each file is locally owned, so you can modify the source code directly to fit specific project needs.

## COMPONENT LIST
The library organizes primitives by their functional roles:
- **Forms & Inputs**: 
  - Button, Checkbox, Form, Input, Label, Radio Group.
  - Select, Slider, Switch, Textarea, Toggle, Toggle Group.
- **Navigation**: 
  - Breadcrumb, Menubar, Navigation Menu, Pagination.
  - Sidebar, Tabs, Command, Combobox.
- **Feedback & Overlays**: 
  - Alert Dialog, Dialog, Drawer, Progress, Skeleton.
  - Sonner, Toast, Tooltip, Hover Card, Popover.
- **Data Display**: 
  - Accordion, Avatar, Badge, Card, Carousel.
  - Chart, Collapsible, Resizable, Scroll Area, Separator, Table.

## USAGE PATTERNS
- **Client Boundaries**: 
  Components using Radix UI or Framer Motion for state (like Dialog or Tabs) include the "use client" directive. 
  Keep client logic at the leaves of the render tree when building new features.
- **CLI Management**: 
  Add new components using the shadcn CLI to keep them compatible with the project's Tailwind v4 and Biome settings.
  ```bash
  npx shadcn@latest add [component-name]
  ```
- **Refactoring**: 
  If a showcase needs a unique variation, add a new variant to the component's file using Class Variance Authority (cva). 
  Avoid creating one-off copies in niche directories.
- **Accessibility**: 
  Components follow WAI-ARIA patterns by default. 
  Keep aria-attributes and focus rings intact when customizing styles.
- **Performance**:
  Most components are lightweight. 
  For heavy data displays like Table or Chart, ensure you are using memoization if the data updates frequently.

## CUSTOMIZATION
- **Tailwind Classes**: 
  Customize individual component instances using Tailwind utility classes in the className prop.
- **Direct Modification**: 
  To change a component's default appearance site-wide, edit its source code in this directory.
- **Micro-interactions**: 
  Use Framer Motion for subtle animations that improve the user experience.
  Match the motion complexity to the "Premium" or "Essencial" tier of the current niche.
- **Dark Mode**:
  All components are designed to be compatible with dark mode out of the box.
  Use the dark: prefix in Tailwind classes if specific overrides are necessary.
