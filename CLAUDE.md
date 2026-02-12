# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Expo/React Native application using NativeWind (Tailwind CSS for React Native) with TypeScript. The project is a minimal starter template ready for expansion.

**Tech Stack:**
- Expo SDK 54
- React Native 0.81.5
- React 19.1.0
- NativeWind (latest) for Tailwind CSS styling
- TypeScript 5.9.2 (strict mode)
- React Native Reanimated 4.1.1 for animations

## Common Commands

### Development
```bash
# Start development server
npm start

# Run on specific platform
npm run android
npm run ios
npm run web

# Generate native code
npm run prebuild
```

### Code Quality
```bash
# Lint and format check
npm run lint

# Auto-fix linting and formatting issues
npm run format
```

**Note:** No testing framework is currently set up in this project.

## Architecture and Key Patterns

### Entry Point
- Main entry: `App.tsx` (renders `ScreenContent` component)
- Expo entry point: `node_modules/expo/AppEntry.js`

### Component Styling Pattern
All components use NativeWind with string-based Tailwind classes. The pattern is:

```typescript
const styles = {
  container: `flex-1 items-center justify-center bg-white`,
  title: `text-xl font-bold`,
};

// Apply via className prop
<View className={styles.container}>
  <Text className={styles.title}>Hello</Text>
</View>
```

**Important:** Use `className` prop (not `style`) for Tailwind classes. NativeWind converts these to React Native styles.

### Directory Structure
```
my-expo-app/
├── components/          # Reusable UI components
│   ├── Container.tsx   # SafeAreaView wrapper
│   ├── EditScreenInfo.tsx
│   └── ScreenContent.tsx
├── assets/             # Images and media
├── App.tsx             # Root component
├── global.css          # Tailwind imports
└── [config files]
```

### TypeScript Configuration
- Path alias configured: `@/*` maps to `src/*` (not yet utilized)
- Strict mode enabled
- To use path alias, create `src/` directory and import with `@/` prefix

### Babel & Metro
- Babel includes NativeWind preset and react-native-worklets plugin
- Metro is configured to process `./global.css` for Tailwind
- No custom modifications needed for NativeWind to work

### Code Quality Tools
- ESLint uses `eslint-config-expo` (Expo recommended)
- Prettier configured with:
  - 100 character line width
  - Single quotes
  - Tailwind class sorting via `prettier-plugin-tailwindcss`
- Prettier monitors `className` attribute for Tailwind class auto-sorting

## Configuration Files Reference

- `app.json`: Expo app configuration (name, icons, splash screen, platform settings)
- `tsconfig.json`: TypeScript config extending `expo/tsconfig.base`
- `babel.config.js`: Babel preset with NativeWind and worklets plugin
- `metro.config.js`: Metro bundler with NativeWind integration
- `tailwind.config.js`: Tailwind content paths (App.tsx, components/**)
- `eslint.config.js`: ESLint flat config
- `prettier.config.js`: Prettier with Tailwind plugin
- `global.css`: Tailwind directives import
- `nativewind-env.d.ts`: NativeWind TypeScript definitions

## Development Notes

### When Adding New Components
1. Create in `components/` directory (or `src/components/` if restructuring)
2. Use TypeScript with proper prop types
3. Follow the Tailwind className pattern shown above
4. Update `tailwind.config.js` content paths if adding new directories

### When Modifying Styles
- Use Tailwind utility classes in `className` strings
- Prettier will auto-sort Tailwind classes on format
- Extend Tailwind theme in `tailwind.config.js` if custom values needed
- Global styles go in `global.css`

### Platform-Specific Code
Use React Native's `Platform` module when needed:
```typescript
import { Platform } from 'react-native';

const styles = Platform.select({
  ios: `pt-5`,
  android: `pt-3`,
  default: `pt-4`
});
```

### Safe Areas
The `Container` component wraps content in `SafeAreaView`. Use for screens that need safe area insets (notches, status bars).
