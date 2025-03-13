# Blog Prototype

This is a fast demo project created to try out new techniques and showcase prototyping styling skills I made some while ago. The project mimics a blog platform's user interface. My focus during development was to create a cool layout clone of a given blog, without overthinking the details. It’s a simple mock UI to demonstrate skills in frontend development.

## Tech Stack ⚙️

- **Tailwind CSS**: A utility-first CSS framework for building modern designs quickly.
- **DaisyUI**: A plugin for Tailwind CSS that provides a set of ready-to-use, customizable components.
- **Vite**: A fast and modern build tool for web development that focuses on speed and performance.
- **Bun**: A modern JavaScript runtime built from scratch, designed for fast performance.

## Features 📱

- **Responsive Design**: The interface adapts to various screen sizes, providing a smooth experience across all devices. (Note: Tailwind v4 updates might have caused some visual inconsistencies, but I won’t be updating this anymore.)
  
- **White and Dark Mode 🌑**: Toggle between light and dark modes for an enhanced user experience.

- **Interactive Mock UI**: Includes functional components like buttons, links, and cards, powered by DaisyUI.

## Getting Started 🚀

To run the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone <repo-url>
   ```

2. **Navigate to the project directory**:

   ```bash
   cd <project-directory>
   ```

3. **Install dependencies**:
   First, ensure you have [Bun](https://bun.sh) installed. Bun is a modern JavaScript runtime that helps speed up development. If you don't have it installed, follow the steps below:

   - For **POSIX-based systems (Linux/macOS)**, run this in your terminal:

     ```bash
     curl -fsSL https://bun.sh/install | bash
     ```

   - For **Windows**, use PowerShell:

     ```powershell
     powershell -c "irm bun.sh/install.ps1 | iex"
     ```

   Once Bun is installed, run the following to install project dependencies:

   ```bash
   bun install
   ```

4. **Start the development server**:
   With all dependencies installed, run:

   ```bash
   bun dev
   ```

5. **Open your browser** 🌐 and go to `http://localhost:5174` to see the app in action.
