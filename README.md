# Ishuraj Portfolio Website

A modern, responsive personal portfolio website built with React.js, featuring 3D animations, interactive components, and a professional design to showcase projects, skills, and services.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and React Router for seamless navigation
- **3D Animations**: Powered by Three.js and React Three Fiber for immersive visual experiences
- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Interactive Components**: Smooth animations with Framer Motion
- **Professional Sections**: Home, About, Services, Portfolio, Projects, Blog, and Contact pages
- **Development Server**: Custom Python server with security headers and auto-browser launch
- **Deployment Ready**: Optimized for Vercel deployment

## 🛠️ Tech Stack

### Frontend
- **React 18.2.0** - Core JavaScript framework
- **React Router DOM 6.8.0** - Client-side routing
- **Three.js 0.158.0** - 3D graphics and animations
- **React Three Fiber 8.15.12** - React renderer for Three.js
- **React Three Drei 9.88.13** - Useful helpers for React Three Fiber
- **Framer Motion 10.0.0** - Animation library
- **Tailwind CSS 3.2.0** - Utility-first CSS framework

### Development Tools
- **React Scripts 5.0.1** - Build and development tooling
- **PostCSS 8.4.0** - CSS transformation
- **Autoprefixer 10.4.0** - CSS vendor prefixing

### Icons & Assets
- **Font Awesome 6.7.2** - Icon library

## 📁 Project Structure

```
my-persnal-website-main/
├── public/                 # Static assets
├── src/                   # React source code
│   ├── components/        # Reusable React components
│   │   ├── layout/       # Layout components
│   │   ├── sections/     # Page sections
│   │   └── ui/           # UI components
│   ├── pages/           # Page components
│   │   ├── Home.js      # Homepage
│   │   ├── About.js     # About page
│   │   ├── Services.js  # Services page
│   │   ├── Portfolio.js # Portfolio page
│   │   ├── Projects.js  # Projects page
│   │   ├── Blog.js      # Blog page
│   │   └── Contact.js   # Contact page
│   ├── animations/      # Animation configurations
│   ├── styles/          # CSS and styling files
│   ├── App.jsx          # Main App component
│   ├── index.js         # Application entry point
│   └── index.css        # Global styles
├── js/                  # Additional JavaScript files
│   ├── cinematic-interactions.js  # Cinematic effects
│   ├── main.js          # Main JavaScript functionality
│   ├── menu.js          # Menu interactions
│   ├── mobile-menu.js   # Mobile menu functionality
│   ├── modern.js        # Modern UI interactions
│   └── theme.js         # Theme management
├── projects/            # Projects showcase
├── images/              # Image assets
├── server.py           # Development server
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── vercel.json         # Vercel deployment configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-persnal-website-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The application will open in your default browser at `http://localhost:3000`

### Alternative Development Server

You can also use the custom Python server:

```bash
python server.py
```

This server includes:
- Automatic port detection (starts at 8000)
- Security headers
- Proper MIME types for modern file formats
- Cache control headers
- Auto-browser launch

## 📜 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🌐 Deployment

### Vercel Deployment

The project is configured for Vercel deployment with `vercel.json`:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel --prod
```

### Build for Production

```bash
npm run build
```

The build files will be created in the `build/` directory.

## 🎨 Customization

### Styling
- Global styles are in `src/index.css`
- Component-specific styles are in their respective directories
- Tailwind CSS configuration is in `tailwind.config.js`

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update navigation in `src/components/Navigation.js`

### 3D Animations
- 3D components use Three.js through React Three Fiber
- Animation configurations are in `src/animations/`
- Interactive 3D elements are in `src/components/sections/`

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS with custom configuration in `tailwind.config.js`. You can customize:
- Theme colors
- Font families
- Breakpoints
- Plugins

### PostCSS
PostCSS is configured in `postcss.config.js` with Autoprefixer for cross-browser compatibility.

## 📱 Responsive Design

The website is fully responsive and works across:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🛡️ Security

The development server includes security headers:
- X-Content-Type-Options: nosniff
- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Portfolio**: [Your Portfolio URL]
- **Email**: [Your Email]
- **GitHub**: [Your GitHub Profile]

## 🙏 Acknowledgments

- React.js team for the amazing framework
- Three.js community for 3D graphics capabilities
- Tailwind CSS for the utility-first CSS framework
- Font Awesome for the icon library

---

**Built with ❤️ by Ishuraj**