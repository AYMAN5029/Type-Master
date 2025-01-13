# Type Master

<img src="https://i.imgur.com/BtSHvtz.png?auto=format&fit=crop&w=1200&h=400&q=80" alt="Typing Test Banner" width="100%" style="border-radius: 8px; margin: 20px 0;" />

A beautiful and modern typing test application that helps you measure and improve your typing speed. Challenge yourself with our 60-second typing test and get detailed insights into your performance.

## Demo
https://typemaster-app-deploy.netlify.app/

## Features

- Real-time typing test with word highlighting
- Detailed performance metrics:
  - Words Per Minute (WPM)
  - Accuracy percentage
  - Correct/incorrect character count
  - Time tracking
  - Detailed analysis of mistakes
  - Performance statistics
- Modern, clean UI design
- Responsive layout for all devices
- Real-time feedback with color-coded words
- Comprehensive result analysis

## Screenshots

<img src="https://i.imgur.com/m6RPbbC.png?auto=format&fit=crop&w=800&h=400&q=80" alt="Typing Test Interface" width="100%" style="border-radius: 8px; margin: 20px 0;" />

<img src="https://i.imgur.com/jawGFmJ.png?auto=format&fit=crop&w=800&h=400&q=80" alt="Results Dashboard" width="100%" style="border-radius: 8px; margin: 20px 0;" />

## Technologies Used

- React with TypeScript
- Tailwind CSS for styling
- Lucide React for beautiful icons
- Custom hooks for typing logic
- Modern component architecture

## Technical Requirements

- Node.js (v18 or higher)
- npm (v8 or higher)
- Modern web browser with JavaScript enabled

## Project Structure

```
type-master/
├── src/
│   ├── components/        # React components
│   │   ├── Results.tsx    # Test results component
│   │   └── TypingTest.tsx # Main typing test component
│   ├── hooks/
│   │   └── useTypingTest.ts # Custom typing test logic
│   ├── types/
│   │   └── index.ts      # TypeScript interfaces
│   ├── utils/
│   │   └── words.ts      # Word generation utility
│   ├── App.tsx           # Main application component
│   └── main.tsx         # Application entry point
├── public/              # Static assets
├── index.html          # HTML entry point
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.ts      # Vite configuration
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AYMAN5029/Type-Master.git
   cd Type-Master
   ```

2. Install dependencies:
   ```bash
   npm install
   npm run dev
   ```

## Development

### Environment Setup

1. Ensure you have Node.js and npm installed
2. Install VS Code extensions (recommended):
   - ESLint
   - Prettier
   - Tailwind CSS IntelliSense

### Code Style

- TypeScript strict mode enabled
- ESLint configuration for React and TypeScript
- Tailwind CSS for styling
- Component-based architecture
- Custom hooks for business logic

### Adding New Features

1. Create new components in `src/components`
2. Add TypeScript interfaces in `src/types`
3. Implement custom hooks in `src/hooks`
4. Update tests if applicable

## How to Use

1. Click "Start Test" to begin your typing challenge
2. Type the displayed words as accurately as possible
3. Press space after each word to move to the next one
4. The test automatically ends after 60 seconds
5. View your detailed performance analysis
6. Click "Try Again" to start a new test and beat your score


## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

