# 🌟 Jyoti Chauhan - Personal Portfolio

A modern, glassmorphic personal portfolio website built with React, Tailwind CSS, and Framer Motion. This project features a sleek dark theme, interactive animations, and a responsive design tailored to showcase professional experience and skills beautifully.

## 🚀 Key Features

*   **Dark & Glassmorphic Design:** A premium aesthetic utilizing translucent backgrounds, subtle borders, and smooth glowing effects.
*   **Animated Hero Section:** Aurora background combined with clean typography and an interactive hover button to immediately grab attention.
*   **Dynamic Experience Carousel:** A smooth, auto-playing feature carousel tailored to visually present work history, timelines, and roles.
*   **Interactive UI Components:** Includes hover effects on skill cards, floating display cards in the hero section, and a custom Tetris-style loading screen.
*   **Functional Contact Form:** Integrated seamlessly with [Web3Forms](https://web3forms.com/) to receive emails directly from visitors without the need for a backend server.
*   **Fully Responsive:** Perfectly optimized for mobile, tablet, and desktop viewing.

## 💻 Technologies Used

*   **Frontend Framework:** [React.js](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Icons:** `react-icons` & `lucide-react`
*   **Form Handling:** [Web3Forms API](https://web3forms.com/)
*   **UI Components:** Custom components inspired by modern design libraries like Magic UI and Aceternity.

## 🛠️ Getting Started

To run this project locally, simply follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/Nikshay1/Girlfriend-s-Portfolio.git
   cd Girlfriend-s-Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   You will need a Web3Forms access key for the contact form to work.
   - Go to [Web3Forms](https://web3forms.com/) and generate an access key for your email address.
   - Open `src/components/Contact.jsx` and replace `"YOUR_ACCESS_KEY_HERE"` with your actual Web3Forms access key.

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5173` to view the live site!

## 📂 Project Structure

```
├── public/                 # Static assets (Favicons, etc.)
├── src/                    # Source code
│   ├── assets/             # Images and local media files
│   ├── components/         # Core application components (Hero, About, Experience, etc.)
│   │   └── ui/             # Reusable UI components (Buttons, Carousels, Loaders)
│   ├── lib/                # Utility logic (clsx, tailwind-merge tools)
│   ├── App.jsx             # Main application component & layout structure
│   ├── index.css           # Global Tailwind and custom CSS styles
│   └── main.jsx            # React root injection point
├── package.json            # Project dependencies and running scripts
├── tailwind.config.js      # Custom styling, animations, and color themes
└── vite.config.js          # Vite build configuration
```

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
