# Modern Portfolio Website

A stunning, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features smooth animations, modern design, and optimal performance.

## ✨ Features

- **Responsive Design**: Perfectly optimized for all devices and screen sizes
- **Modern Animations**: Smooth, engaging animations powered by Framer Motion
- **Fast Performance**: Built with Next.js 15 and optimized for speed
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first styling with custom design system
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Interactive Components**: Engaging user interface elements
- **Contact Form**: Functional contact form with validation
- **Dark/Light Mode Support**: Automatic theme detection

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React & Heroicons
- **Package Manager**: pnpm (recommended for fast development)
- **Font**: Geist Sans & Geist Mono

## 📋 Sections

1. **Hero Section**: Eye-catching introduction with animated elements
2. **About Section**: Personal information, skills, and expertise
3. **Projects Section**: Showcase of development projects with live demos
4. **Contact Section**: Interactive contact form and information
5. **Footer**: Social links and additional navigation

## 🛠️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd portfolio-2
   ```

2. **Install dependencies** (using pnpm for optimal speed):
   ```bash
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   pnpm dev
   ```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

To customize this portfolio for your own use:

1. **Update personal information** in the components:
   - `src/components/Hero.tsx` - Name, title, description
   - `src/components/About.tsx` - Skills, experience, bio
   - `src/components/Projects.tsx` - Your projects and demos
   - `src/components/Contact.tsx` - Contact information
   - `src/components/Footer.tsx` - Social links

2. **Replace project images** with your own screenshots

3. **Update metadata** in `src/app/layout.tsx`

4. **Customize colors** in `src/app/globals.css` and Tailwind config

5. **Add your resume** to the `public` folder

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance Features

- **Image Optimization**: Automatic image optimization with Next.js
- **Code Splitting**: Automatic code splitting for optimal loading
- **SEO Optimization**: Meta tags, OpenGraph, and Twitter cards
- **Lazy Loading**: Framer Motion's `useInView` for performance
- **Fast Refresh**: Instant feedback during development

## 📦 Available Scripts

```bash
# Development
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint

# Using npm/yarn alternatives
npm run dev       # Start development server
yarn dev          # Start development server
```

## 🌐 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

- **Netlify**: Build command `pnpm build`, publish directory `out`
- **GitHub Pages**: Use `next export` for static export
- **Docker**: Use the provided Dockerfile

## 🎯 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](../../issues).

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

**Built with ❤️ using Next.js and Tailwind CSS**
