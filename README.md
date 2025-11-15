### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory. You can preview the production build with:

```bash
npm run preview
```

## Project Structure

```
bio-website/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Header.jsx    # Navigation header
│   │   └── Footer.jsx    # Footer component
│   ├── pages/            # Page components
│   │   ├── Home.jsx      # Home page
│   │   ├── ProspectiveMembers.jsx
│   │   └── Members.jsx
│   ├── App.jsx           # Main app with routing
│   ├── App.css
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── vite.config.js
└── package.json
```

## Pages

- **Home** (`/`) - Information about the club
- **Prospective Members** (`/prospective-members`) - Empty page ready for content
- **Members** (`/members`) - Empty page ready for content

## Customization

Update the content in each page component to match your club's information. The pages are currently set up with basic structure and can be customized as needed.
