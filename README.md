# Portfolio

My personal portfolio website built with React and TypeScript.

![API Call Status](https://github.com/Nj221102/Portfolio/actions/workflows/api_call.yml/badge.svg)

## Features

- Modern, responsive design
- Dark theme with glassmorphic UI elements
- Automatic API calls every 10 minutes
- Real-time API call tracking
- Smooth animations and transitions

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.
You can view it at: https://nj221102.github.io/Portfolio/

## API Integration

The site includes automatic API calls to keep the server active:
- Calls are made every 10 minutes via GitHub Actions
- A visual tracker shows the status of API calls in real-time
- The workflow status can be monitored via the badge above
