# 🎵 Concert Finder

A modern web application to discover live music events near you. Search for concerts by city or zip code, get ticket links, and add events directly to your Google Calendar.

![Concert Finder Demo](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ Features

- 🔍 **Smart Search**: Find concerts by city name or zip code
- 📅 **Date Filtering**: Only shows upcoming events (current date onwards)
- 🎫 **Direct Ticket Links**: One-click access to purchase tickets via Ticketmaster
- 📆 **Google Calendar Integration**: Add events to your calendar instantly
- 🎨 **Modern UI**: Clean, responsive design for desktop and mobile
- ⚡ **Real-time Data**: Powered by the Ticketmaster Discovery API

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- A [Ticketmaster Developer Account](https://developer.ticketmaster.com/) (free)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GetRid4484/Concert-Ticket-Finder.git
   cd Concert-Ticket-Finder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your API key**
   
   a. Create a Ticketmaster Developer account at [developer.ticketmaster.com](https://developer.ticketmaster.com/)
   
   b. Create a new app to get your API credentials
   
   c. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   
   d. Open `.env` and add your Ticketmaster API credentials:
   ```env
   VITE_TICKETMASTER_API_KEY=your_consumer_key_here
   VITE_TICKETMASTER_SECRET=your_consumer_secret_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

## 📖 Usage

1. **Search for Concerts**
   - Enter a city name (e.g., "New York") or zip code in the search box
   - Click "Find Concerts" or press Enter

2. **View Results**
   - Browse through upcoming concerts in your area
   - See artist names, dates, times, and venues

3. **Get Tickets**
   - Click the "Get Tickets" button to visit the Ticketmaster page
   - Purchase tickets directly from the official source

4. **Add to Calendar**
   - Click "Add to Calendar" to create a Google Calendar event
   - Event includes artist, venue, and location details

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Vanilla CSS with modern design patterns
- **API**: Ticketmaster Discovery API v2
- **Build Tool**: Vite 5
- **Package Manager**: npm

## 📁 Project Structure

```
concert-finder/
├── src/
│   ├── components/
│   │   ├── EventCard.jsx       # Individual event display
│   │   ├── EventList.jsx       # List of events
│   │   └── LocationInput.jsx   # Search input component
│   ├── services/
│   │   ├── concertApi.js       # Ticketmaster API integration
│   │   └── calendar.js         # Google Calendar URL generator
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore rules
├── package.json                # Dependencies and scripts
└── vite.config.js              # Vite configuration
```

## 🔒 Security

- **API keys are protected**: The `.env` file is excluded from version control
- **Never commit secrets**: Always use `.env.example` as a template
- **Regenerate compromised keys**: If your API key is exposed, regenerate it immediately in your Ticketmaster Developer account

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🐛 Troubleshooting

### No events showing up
- Verify your API key is correct in `.env`
- Restart the dev server after changing `.env`
- Check browser console for error messages

### "API Key missing" error
- Make sure `.env` file exists in the project root
- Confirm the variable name is `VITE_TICKETMASTER_API_KEY`
- Restart the development server

### Port already in use
- Vite will automatically try another port (e.g., 5174)
- Or manually specify a port: `npm run dev -- --port 3000`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Concert data provided by [Ticketmaster](https://www.ticketmaster.com/)
- Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/)

## 📧 Contact

Project Link: [https://github.com/GetRid4484/Concert-Ticket-Finder](https://github.com/GetRid4484/Concert-Ticket-Finder)

---

Made with ❤️ for music lovers everywhere
