// Shared JavaScript for portfolio website

const projectsData = [
            // Individual Projects
            {
                id: 'my-dear-diary-digital-journal',
                type: 'individual',
                title: 'My Dear Diary - Digital Journal',
                image: 'my-dear-diary.png', // NOTE: Please add 'my-dear-diary.png' to your project's root directory for the image to display.
                shortDescription: 'A private digital journaling web app for daily reflections and mood tracking.',
                fullDescription: 'A secure and intuitive digital journaling web application designed for personal reflection and mood tracking. This platform allows users to record their thoughts, experiences, and emotions in a private space. Key features include organized entry management, date-based navigation, and a user-friendly interface to encourage consistent journaling. It serves as a personal companion for self-awareness and mental well-being.',
                tools: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
                tags: ['web-dev', 'javascript'],
                date: 'December 2024',
                github: 'https://github.com/sOuL2000s/My-Dear-Diary.git',
                livedemo: 'https://my-dear-digital-diary.netlify.app/'
            },
            {
                id: 'ai-auctioneer-game', // New unique ID
                type: 'individual',
                title: 'AI Auctioneer Game', // Distinct title
                image: 'ai-auctioneer-game.png', // NOTE: Please add 'ai-auctioneer-game.png' to your project's root directory for the image to display.
                shortDescription: 'An AI-enhanced auction game where players bid against intelligent AI competitors or other users.',
                fullDescription: 'An advanced variant of "The Auction Game," this full-stack web application integrates AI to provide a dynamic and challenging bidding experience. Players can compete against intelligent AI opponents that employ various bidding strategies, or against other human players. It retains real-time bidding, user authentication, and a dynamic leaderboard, but adds a layer of AI-driven challenge and engagement. Built with modern web technologies (Node.js, Express.js, MongoDB, Socket.IO), it offers a competitive environment to test bidding skills against both human and artificial intelligence.',
                tools: ['Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'HTML', 'CSS', 'JavaScript', 'AI/LLM'],
                tags: ['full-stack', 'ai-ml', 'web-dev', 'javascript', 'node', 'socket.io'],
                date: 'December 2024 (AI Enhanced)', // Distinct date
                github: 'https://github.com/sOuL2000s/The-Auction-Game.git', // As provided by user
                livedemo: 'https://ai-auctioneer-game.onrender.com/' // As provided by user
            },
            {
                id: 'ai-podcaster-assistant',
                type: 'individual',
                title: 'AI Podcaster Assistant',
                image: 'ai-podcaster-assistant.png', // NOTE: Please add 'ai-podcaster-assistant.png' to your project's root directory for the image to display.
                shortDescription: 'AI-powered tool for podcasters to assist with script generation, content ideas, and editing.',
                fullDescription: 'An innovative AI-powered assistant designed to streamline the podcast creation process. This tool helps podcasters at every stage, from generating compelling script ideas and outlines to transcribing audio, editing content, and optimizing for audience engagement. Leveraging advanced Natural Language Processing (NLP) and Large Language Models (LLM), it aims to significantly reduce manual effort, enhance creativity, and improve the overall quality and efficiency of podcast production.',
                tools: ['Python', 'Streamlit', 'AI/LLM', 'Natural Language Processing (NLP)'],
                tags: ['ai-ml', 'python', 'streamlit', 'web-dev'],
                date: 'December 2024',
                github: 'https://github.com/sOuL2000s/AI-Podcaster-Assistant.git',
                livedemo: 'https://ai-podcaster-assistant.netlify.app/'
            },
            {
                id: 'simple-tetris-game',
                type: 'individual',
                title: 'Simple Tetris Game',
                image: 'tetris.png', // NOTE: Please add 'tetris.png' to your project's root directory for the image to display.
                shortDescription: 'A classic Tetris game implemented with vanilla JavaScript for addictive gameplay.',
                fullDescription: 'A faithful recreation of the classic Tetris puzzle game, developed entirely with vanilla JavaScript, HTML, and CSS. This project offers the familiar and addictive gameplay experience of manipulating falling blocks to clear lines. It features responsive controls, score tracking, and a clean interface, demonstrating fundamental web development skills in game logic implementation and dynamic rendering without external libraries.',
                tools: ['HTML', 'CSS', 'JavaScript'],
                tags: ['web-dev', 'javascript', 'game'],
                date: 'December 2024', // Assuming a recent date to place it near the top
                github: 'https://github.com/sOuL2000s/simple-tetris-game.git',
                livedemo: 'https://simple-tetris-game-static.netlify.app/'
            },
            {
                id: 'cricket-match-simulator',
                type: 'individual',
                title: 'Cricket Match Simulator',
                image: 'cricket-match-simulator.png', // NOTE: Please add 'cricket-match-simulator.png' to your project's root directory for the image to display.
                shortDescription: 'An interactive web-based simulator for cricket matches with dynamic scoring.',
                fullDescription: 'An engaging and interactive web-based application that simulates cricket matches. This project allows users to set up a match between two teams, track live scores, visualize innings progression, and experience the dynamics of a cricket game through a user-friendly interface. It features real-time score updates, overs progression, wicket tracking, and basic match statistics, providing a fun and accessible way to enjoy a virtual cricket game.',
                tools: ['HTML', 'CSS', 'JavaScript'],
                tags: ['web-dev', 'javascript', 'game'],
                date: 'December 2024',
                github: 'https://github.com/sOuL2000s/cricket-match-simulator.git',
                livedemo: 'https://cricket-match-simulator.netlify.app/'
            },
            {
                id: 'the-auction-game',
                type: 'individual',
                title: 'The Auction Game',
                image: 'the-auction-game.png', // NOTE: Please add 'the-auction-game.png' to your project's root directory for the image to display.
                shortDescription: 'An interactive full-stack web game where players bid to win items in real-time.',
                fullDescription: 'The Auction Game is a real-time, interactive full-stack web application that simulates a live auction experience. Players can join ongoing auctions, place bids, and compete to win virtual items. The game features real-time updates for bids and auction status, user authentication, and a dynamic leaderboard. It\'s built with modern web technologies, providing a engaging and competitive environment for players to test their bidding strategies.',
                tools: ['Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'HTML', 'CSS', 'JavaScript'],
                tags: ['full-stack', 'web-dev', 'javascript', 'node', 'socket.io'],
                date: 'December 2024',
                github: 'https://github.com/sOuL2000s/The-Auction-Game.git',
                livedemo: 'https://the-auction-game.onrender.com/'
            },
            {
                id: 'the-ultimate-coder-ai-coding-assistant',
                type: 'individual',
                title: 'The Ultimate Coder - AI Coding Assistant',
                image: 'the-ultimate-coder.png', // NOTE: Please add 'the-ultimate-coder.png' to your project's root directory for the image to display.
                shortDescription: 'An AI coding assistant designed to reduce human effort to zero in coding tasks.',
                fullDescription: 'The Ultimate Coder is an advanced AI coding assistant designed with a singular mission: to eliminate human effort in all coding tasks. This intelligent tool understands user requests, generates full code files, applies modifications directly to provided code, and maintains cross-file consistency in multi-file projects. It ensures that users always receive ready-to-use, fully functional code, adhering strictly to the "Zero Human Effort Principle." This project showcases sophisticated AI capabilities in code generation, refactoring, and project management.',
                tools: ['Python', 'Large Language Models (LLM)', 'AI/NLP', 'Code Generation', 'Automated Refactoring'],
                tags: ['ai-ml', 'python'],
                date: 'November 2024',
                github: 'https://github.com/sOuL2000s/The-Ultimate-Coder.git',
                livedemo: 'https://the-ultimate-coder-ai-coding-assist.netlify.app/'
            },
            {
                id: 'youtube-shorts-converter',
                type: 'individual',
                title: 'YouTube Video to Shorts Converter',
                image: 'youtube-shorts.png', // NOTE: Please add 'youtube-shorts.png' to your project's root directory for the image to display.
                shortDescription: 'A web application to convert long YouTube videos into engaging short clips for social media.',
                fullDescription: 'This powerful web application streamlines content creation by allowing users to easily convert lengthy YouTube videos into concise, engaging short-form content. Users simply input a YouTube video URL, and the application leverages video processing techniques to extract key segments suitable for platforms like YouTube Shorts, TikTok, or Instagram Reels. It aims to help content creators quickly repurpose existing videos, enhance audience engagement, and expand their reach across various social media channels.',
                tools: ['Python', 'Flask', 'FFmpeg', 'HTML', 'CSS', 'JavaScript'],
                tags: ['python', 'web-dev', 'full-stack'],
                date: 'November 2024',
                github: 'https://github.com/sOuL2000s/YouTube-Video-to-Shorts-Converter.git',
                livedemo: 'https://youtube-video-to-shorts-converter.onrender.com/'
            },
            {
                id: '2048-ultimate-multi-themed',
                type: 'individual',
                title: '2048 Ultimate - Multi-Themed Game',
                image: '2048-ultimate.png', // NOTE: Please add '2048-ultimate.png' to your project's root directory for the image to display.
                shortDescription: 'A modern, multi-themed 2048 game with customizable UI and score tracking.',
                fullDescription: '"2048 Ultimate - Multi-Themed Game" is a reimagined version of the classic 2048 puzzle game, offering a highly customizable and engaging experience. This web-based game features multiple distinct themes, allowing players to personalize their visual experience. It includes robust local storage for high score tracking, ensuring competitive play across sessions. The intuitive gameplay mechanics and smooth transitions provide an addictive and enjoyable puzzle experience for all ages.',
                tools: ['HTML', 'CSS', 'JavaScript', 'Local Storage'],
                tags: ['web-dev', 'javascript', 'game'],
                date: 'November 2024',
                github: 'https://github.com/sOuL2000s/2048-Ultimate-Multi-Themed.git',
                livedemo: 'https://2048-ultimate-multi-themed.netlify.app/'
            },
            {
                id: 'guitar-chord-finder',
                type: 'individual',
                title: 'Guitar Chord Finder',
                image: 'guitar-chord-finder.png', // Ensure this image exists in your project's root directory
                shortDescription: 'An interactive web app for finding and visualizing guitar chords.',
                fullDescription: 'An interactive web application designed to help guitarists easily find and visualize chords. Users can select a root note and chord type, and the application will display the corresponding chord diagram, notes, and various voicings. This project demonstrates dynamic content generation, musical theory implementation, and a user-friendly interface for learning and referencing guitar chords.',
                tools: ['HTML', 'CSS', 'JavaScript'],
                tags: ['web-dev', 'javascript'],
                date: 'November 2024',
                github: 'https://github.com/sOuL2000s/guitar-chord-finder.git',
                livedemo: 'https://guitar-chord-finder.netlify.app/'
            },
            {
                id: 'imdb-movie-randomizer',
                type: 'individual',
                title: 'IMDb Movie Randomizer',
                image: 'imdb-movie-randomizer.png', // Ensure this image exists in your project
                shortDescription: 'A simple web app to discover random movies from IMDb with details and ratings.',
                fullDescription: 'An engaging web application designed to help users discover new movies effortlessly. With a single click, it fetches a random movie from IMDb, displaying its title, rating, genre, and a brief synopsis. This project demonstrates API integration (likely IMDb or a proxy), dynamic content rendering, and a clean user interface built with modern web technologies, offering a fun way to find your next watch.',
                tools: ['HTML', 'CSS', 'JavaScript', 'IMDb API'],
                tags: ['web-dev', 'javascript'],
                date: 'October 2024',
                github: 'https://github.com/sOuL2000s/imdb-movie-randomizer.git',
                livedemo: 'https://imdb-movie-randomizer.netlify.app/'
            },
            {
                id: 'excel-exporter-extension',
                type: 'individual',
                title: 'Excel Exporter Browser Extension',
                image: 'excel-exporter.png',
                shortDescription: 'Browser extension for automated form filling from spreadsheets.',
                fullDescription: 'A powerful and highly efficient browser extension designed to significantly streamline data entry workflows. This tool allows users to upload a spreadsheet (supporting various formats like .xlsx, .csv), intelligently map its columns to specific form fields found on any webpage, and then automatically fill those fields. It includes advanced features such as batch filling, conditional filling (only populating empty fields), and automated button clicking, enabling comprehensive workflow automation for repetitive data entry tasks.',
                tools: ['HTML', 'CSS', 'JavaScript', 'Fuse.js', 'SheetJS'],
                tags: ['web-dev'],
                date: 'September 2024',
                github: 'https://github.com/sOuL2000s/Excel-Exporter-Browser-Extension.git',
                livedemo: null // No live demo for browser extension
            },
            {
                id: 'football-tournament-hub',
                type: 'individual',
                title: 'The Winner Challenge - Football Tournament Hub',
                image: 'football-tournament-hub.png',
                shortDescription: 'Football tournament manager with League, Champions League, World Cup modes.',
                fullDescription: 'A comprehensive football tournament manager web application designed to handle various competition formats, including League, Champions League, and World Cup modes. It provides a complete suite of tools for tournament organizers, allowing them to effortlessly create and manage tournaments, add and track teams and players, generate detailed fixtures, record live score updates, view real-time standings, compile player statistics, and visualize knockout brackets. Enhanced with dark/light theme options and robust data import/export functionalities, this hub delivers a powerful and user-friendly experience for any football event.',
                tools: ['HTML', 'CSS', 'JavaScript'],
                tags: ['web-dev'],
                date: 'September 2024',
                github: 'https://github.com/sOuL2000s/The-Winner-Challenge-Football-Tournament-Hub.git',
                livedemo: 'https://the-winner-challenge-tournament-hub.netlify.app/'
            },
            {
                id: 'ai-text-beautifier',
                type: 'individual',
                title: 'AI Text Beautifier & Chatbot',
                image: 'beautifier-ai.png',
                shortDescription: 'AI web app for text beautification & real-time chatbot with Gemini API.',
                fullDescription: 'An innovative AI-powered web application that offers intelligent text beautification and real-time conversational capabilities. It transforms plain text into elegantly formatted Markdown using the Gemini API, ensuring professional and readable output. The application boasts dynamic theme selection (dark/light mode), Progressive Web App (PWA) support for an app-like experience, and an integrated chatbot with voice input and file attachment functionalities. This project demonstrates a blend of utility and advanced AI interaction within a sleek, user-friendly interface.',
                tools: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Gemini API', 'AI/NLP', 'Web Speech API', 'Marked.js', 'PWA', 'Local Storage'],
                tags: ['ai-ml', 'web-dev'],
                date: 'September 2024',
                github: 'https://github.com/sOuL2000s/AI-Text-Beautifier.git',
                livedemo: 'https://ai-text-beautifier.netlify.app/'
            },
            {
                id: 'simple-tournament-manager',
                type: 'individual',
                title: 'Simple Tournament Manager App',
                image: 'simple-tourny.PNG',
                shortDescription: 'Lightweight web app for creating and managing tournaments with ease.',
                fullDescription: 'A lightweight and intuitive web application designed to simplify tournament creation and management. Users can easily add teams, set up match schedules, and track results in a seamless and straightforward manner. Built with a focus on simplicity and usability, this app is an ideal solution for organizing small competitions, casual tournaments, or any event requiring basic fixture and score management.',
                tools: ['HTML', 'CSS', 'JavaScript'],
                tags: ['web-dev'],
                date: 'September 2024',
                github: 'https://github.com/sOuL2000s/Simple-Tournament-Manager-App.git',
                livedemo: 'https://simple-tournament-manager-app.netlify.app/'
            },
            {
                id: 'community-notice-board',
                type: 'individual',
                title: 'Community Notice Board',
                image: 'community-notice-board.png',
                shortDescription: 'Web app to centralize community announcements and urgent notices.',
                fullDescription: 'A lightweight and efficient web application meticulously designed to centralize community announcements, upcoming events, and urgent notices. This platform serves as a powerful alternative to fragmented communication methods like WhatsApp groups or scattered Facebook posts, providing authorized administrators with a structured, easy-to-manage environment to share critical information effectively, ensuring all community members stay informed.',
                tools: ['HTML', 'CSS', 'JavaScript'],
                tags: ['web-dev'],
                date: 'October 2024',
                github: 'https://github.com/sOuL2000s/Community-Notice-Board.git',
                livedemo: null
            },
            {
                id: 'lost-found-tracker',
                type: 'individual',
                title: 'Lost & Found Tracker Web Application',
                image: 'lost-found-tracker.png',
                shortDescription: 'Web app for reporting/searching lost & found items with filters.',
                fullDescription: 'An intuitive web application meticulously crafted to assist individuals in efficiently reporting and searching for lost or found items. This platform establishes a central, easily accessible hub with robust filtering capabilities, allowing users to quickly narrow down searches by location, item category, and specific item type. The aim is to streamline the often-stressful process of reuniting owners with their lost belongings, enhancing community collaboration and efficiency.',
                tools: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
                tags: ['web-dev', 'full-stack'],
                date: 'October 2024',
                github: 'https://github.com/sOuL2000s/Lost-Found-Tracker-Web-Application.git',
                livedemo: null
            },
            {
                id: 'creative-recording-studio',
                type: 'individual',
                title: 'Creative Recording Studio Website',
                image: 'creative-recording-studio.png', // Ensure this image exists in your project
                shortDescription: 'Modern, responsive website for a recording studio showcasing services and portfolio.',
                fullDescription: 'A sleek, responsive website designed for a creative recording studio. It features sections for studio services, equipment, artist portfolio, testimonials, and contact information. The design emphasizes a modern aesthetic, ease of navigation, and a strong visual appeal to attract potential clients, providing a comprehensive online presence for the studio.',
                tools: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
                tags: ['web-dev'],
                date: 'October 2024',
                github: 'https://github.com/sOuL2000s/Creative-Recording-Studio.git',
                livedemo: 'https://creative-recording-studio.netlify.app/'
            },
            {
                id: 'small-ai-v2',
                type: 'individual',
                title: 'Small AI v2 - Multi-Themed AI Chatbot',
                image: 'small-ai-v2.PNG',
                shortDescription: 'Advanced, multi-themed AI chatbot with Gemini API, PWA, voice input.',
                fullDescription: 'An advanced, multi-themed AI chat assistant, \'Small AI v2,\' that significantly enhances the original \'Small AI - Big Vision\' with expanded features and a refined user experience. Integrating the Gemini API, it provides a sleek, responsive UI with comprehensive markdown support, dynamic dark/light themes, voice input capabilities, and support for file attachments. A key improvement is the comprehensive chat session management system, allowing users to save, load, and manage multiple conversations. This version also offers Progressive Web App (PWA) capabilities, providing a native app-like experience directly from the browser.',
                tools: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Gemini API', 'AI/NLP', 'Web Speech API', 'Marked.js', 'Local Storage', 'PWA'],
                tags: ['ai-ml', 'web-dev'],
                date: 'October 2024 (v2 Update)',
                github: 'https://github.com/sOuL2000s/SMALL-AI-v2.git',
                livedemo: 'https://small-ai-big-vision-v2.netlify.app/'
            },
            {
                id: 'study-buddy-ai',
                type: 'individual',
                title: 'Study Buddy AI - Intelligent Learning Companion',
                image: 'study-buddy-ai.png', // Ensure this image exists in your project
                shortDescription: 'AI-powered learning app with voice chat, multi-theming, and contextual text analysis for any topic.',
                fullDescription: 'Study Buddy AI is an innovative, Progressive Web Application (PWA) designed as your intelligent learning companion. It integrates advanced Web Speech APIs for seamless voice input (speech-to-text) and dictation (text-to-speech), offering a dynamic chat experience. Key features include robust chat history management, versatile file attachments (images, text, PDFs, etc.), and a unique "Conversation Mode" that allows for natural, voice-only interactions with a customizable AI personality and voice. The core "Study Helper" functionality guides users to search for topics on Google, then paste relevant content directly into the chat for the AI to analyze and explain, making complex subjects easily understandable. With multiple vibrant themes (including \'Celestial Horizon\', \'Verdant Calm\', \'Cybernetic Pulse\', etc.) and PWA support, Study Buddy AI provides a personalized and accessible learning environment.',
                tools: ['JavaScript', 'HTML', 'CSS', 'Gemini API', 'Web Speech API', 'Local Storage', 'Marked.js', 'PWA'],
                tags: ['ai-ml', 'web-dev', 'full-stack', 'javascript'],
                date: '2024',
                github: 'https://github.com/sOuL2000s/Study-Buddy-AI.git',
                livedemo: 'https://study-buddy-ai-studyhelper.netlify.app/'
            },
            {
                id: 'multi-game-hub',
                type: 'individual',
                title: 'Multi-Game HUB Website',
                image: 'multi-game-hub.PNG',
                shortDescription: 'Online hub for mini-games with interactive design and smooth gameplay.',
                fullDescription: 'An engaging online hub designed to centralize multiple mini-games within a single, interactive portal. This website showcases creative JavaScript-based game development with smooth gameplay and a user-friendly interface. It provides a fun, accessible platform for users to enjoy various casual games without needing to navigate between different sites, demonstrating proficiency in front-end game integration and web design.',
                tools: ['HTML', 'CSS', 'JavaScript'],
                tags: ['web-dev'],
                date: 'August 2024',
                github: 'https://github.com/sOuL2000s/Multi-game-HUB-Website.git',
                livedemo: 'https://multi-game-hub-website.netlify.app/'
            },
            {
                id: 'astromaestro-ai',
                type: 'individual',
                title: 'AstroMaestro AI - Personalized Vedic Astrology',
                image: 'astromaestro.PNG',
                shortDescription: 'AI astrology app for personalized Vedic insights using NLP/ML.',
                fullDescription: 'An innovative AI-powered astrology application that generates personalized Vedic insights based on comprehensive user input. This project uniquely blends traditional astrological wisdom with modern Natural Language Processing (NLP) and Machine Learning (ML) techniques to create a nuanced and digital astrology experience. Users receive tailored readings, predictions, and guidance, making ancient practices accessible through cutting-edge technology.',
                tools: ['Python', 'Streamlit', 'Machine Learning', 'Natural Language Processing (NLP)'],
                tags: ['ai-ml', 'python', 'streamlit', 'web-dev'],
                date: 'August 2024',
                github: 'https://github.com/sOuL2000s/AstroMaestro-AI.git',
                livedemo: 'https://astromaestro-ai.netlify.app/'
            },
            {
                id: 'journal-ai',
                type: 'individual',
                title: 'The Journal AI - Personal AI Journaling App',
                image: 'journal-ai.PNG',
                shortDescription: 'AI journaling app for entry analysis, mood tracking, and self-reflection prompts.',
                fullDescription: 'A personal AI journaling assistant designed to revolutionize self-reflection and mood tracking. This application intelligently analyzes daily journal entries, provides concise summaries of content and themes, tracks mood fluctuations over time, and offers personalized prompts to encourage deeper introspection. Leveraging advanced AI and Large Language Models (LLM), \'The Journal AI\' transforms a simple journaling practice into a powerful tool for personal growth and mental well-being.',
                tools: ['Python', 'Streamlit', 'Natural Language Processing (NLP)', 'Machine Learning', 'AI/LLM'],
                tags: ['ai-ml', 'python', 'streamlit', 'web-dev'],
                date: 'August 2024',
                github: 'https://github.com/sOuL2000s/The-Journal-AI.git',
                livedemo: 'https://the-journal-ai.netlify.app/'
            },
            {
                id: 'meditation-companion',
                type: 'individual',
                title: 'Yogify - Meditation Companion App',
                image: 'meditation-companion-app.png',
                shortDescription: 'Wellness app for guided meditation, mood tracking, and AI practices.',
                fullDescription: 'A comprehensive wellness application, \'Yogify,\' designed to enhance mental health and focus through guided meditation. The app intelligently tracks user moods over time and suggests personalized mindfulness practices using AI personalization. It offers a structured approach to meditation, catering to individual needs and progress, making it an ideal companion for anyone looking to integrate mindfulness into their daily routine.',
                tools: ['Python', 'Streamlit', 'Natural Language Processing (NLP)', 'Machine Learning'],
                tags: ['ai-ml', 'python', 'streamlit', 'web-dev'],
                date: 'August 2024',
                github: 'https://github.com/sOuL2000s/Meditation-Companion-App.git',
                livedemo: 'https://mysticvision-meditation-companion-app.netlify.app/'
            },
            {
                id: 'metier-institute',
                type: 'individual',
                title: 'Metier Institute - Full-Stack Website',
                image: 'metier.PNG',
                shortDescription: 'Full-stack website for an educational institute with CMS and auth.',
                fullDescription: 'A comprehensive, responsive full-stack website developed specifically for an educational institute. It features robust content management capabilities, secure user authentication systems, detailed course listings with flexible categorization, and a suite of administrative functionalities for efficient school management. Built to provide a dynamic online presence and streamline institutional operations, this project ensures an optimal user experience and easy content updates through a scalable architecture designed for growth.',
                tools: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
                tags: ['full-stack', 'react', 'web-dev'],
                date: 'August 2024',
                github: 'https://github.com/sOuL2000s/Metier-Institute-Full-Stack-Website.git',
                livedemo: 'https://metier-institute-your-path-to-success.netlify.app/'
            },
            {
                id: 'mystic-vision-chatbot',
                type: 'individual',
                title: 'Mystic Vision AI Standalone Chatbot',
                image: 'mystic.PNG',
                shortDescription: 'Customizable AI chatbot with NLP, offered in multiple versions.',
                fullDescription: 'A highly customizable AI chatbot offered in multiple deployment versions, including basic, mini, lite, and a standalone full version. This chatbot is built with advanced Natural Language Processing (NLP) capabilities, enabling sophisticated conversational intelligence. Each version is packaged with a sleek and intuitive Streamlit user interface, providing a refined and engaging interaction experience.',
                tools: ['Python', 'Streamlit', 'Natural Language Processing (NLP)', 'Machine Learning'],
                tags: ['ai-ml', 'python', 'streamlit', 'web-dev'],
                date: 'July 2024',
                github: 'https://github.com/sOuL2000s/Mystic-Vision-AI-Standalone-Chatbot.git',
                livedemo: 'https://mystic-vision-ai-standalone-chatbot.netlify.app/'
            },
            {
                id: 'mathematico',
                type: 'individual',
                title: 'MATHEMATICO - Special Mathematics Coaching Website',
                image: 'mathematico.PNG',
                shortDescription: 'Modern coaching site with dynamic courses, blog, and admin CMS.',
                fullDescription: 'A modern and feature-rich website for a mathematics coaching institute. This platform boasts dynamic course management capabilities, allowing for easy updates and scheduling. It includes sections for testimonials, a comprehensive gallery, and an engaging blog system. Integrated with Google Maps for location services and featuring both dark/light themes, the website is built with an admin-controlled Content Management System (CMS) for effortless content updates, providing a seamless experience for students and administrators alike.',
                tools: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Firebase'],
                tags: ['web-dev', 'full-stack'],
                date: 'July 2025', // Consider updating this date to a past or more realistic recent date if it's already built
                github: 'https://github.com/sOuL2000s/mathematico-coaching-website.git',
                livedemo: 'https://mathematico-special-coaching-center.netlify.app/'
            },
            {
                id: 'btc-probo',
                type: 'individual',
                title: 'BTC Probo Predictor (Mobile Friendly)',
                image: 'probo.PNG',
                shortDescription: 'AI Bitcoin price predictor with real-time data & sentiment analysis.',
                fullDescription: 'An AI-driven Bitcoin price prediction application designed with a mobile-friendly interface. This tool actively compares real-time market values from the Binance API with user-defined target prices. It integrates sentiment analysis for a more nuanced prediction and visualizes complex data with interactive Plotly charts, making it an invaluable resource for both cryptocurrency traders and enthusiasts of platforms like Probo.',
                tools: ['Python', 'Streamlit', 'Plotly', 'Pandas', 'Binance API'],
                tags: ['ai-ml', 'python', 'streamlit', 'web-dev'],
                date: 'July 2025', // Consider updating this date to a past or more realistic recent date if it's already built
                github: 'https://github.com/sOuL2000s/html-probo-predictor-website.git',
                livedemo: 'https://probo-crypto-predictor.netlify.app/'
            },
            {
                id: 'smart-agritech',
                type: 'individual',
                title: 'Smart AgriTech Dashboard',
                image: 'agritech.PNG',
                shortDescription: 'AI-powered farming assistant monitoring soil, weather, and crops.',
                fullDescription: 'A sophisticated, next-generation farming assistant implemented as a Streamlit dashboard. It offers real-time monitoring of crucial agricultural data including soil conditions, weather patterns, and crop health. The system employs AI-powered time-series forecasting to predict soil moisture levels and provides farmers with personalized, data-driven crop recommendations, optimizing yield and resource management.',
                tools: ['Python', 'Streamlit', 'TensorFlow', 'Firebase', 'Plotly'],
                tags: ['ai-ml', 'python', 'streamlit', 'web-dev'],
                date: 'June 2025', // Consider updating this date to a past or more realistic recent date if it's already built
                github: 'https://github.com/sOuL2000s/Smart-AgriTech-Streamlit-Dashbard.git',
                livedemo: 'https://smart-agritech-dashbard.netlify.app/'
            },
            {
                id: 'tournament-manager-fullstack',
                type: 'individual',
                title: 'Tournament Manager Full-Stack Web Application',
                image: 'tournament.PNG',
                shortDescription: 'Full-stack app managing tournaments with automated fixtures and live scores.',
                fullDescription: 'A robust full-stack web application designed to efficiently manage cricket and football tournaments. The system automates fixture generation, provides real-time live score updates, and automatically calculates and generates leaderboards. This application significantly streamlines the entire sports event management process for organizers and offers a transparent, engaging experience for players and fans.',
                tools: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
                tags: ['full-stack', 'react', 'web-dev'],
                date: 'May 2025', // Consider updating this date to a past or more realistic recent date if it's already built
                github: 'https://github.com/sOuL2000s/tournament-manager-FULL-STACK.git',
                livedemo: 'https://tournament-manager-website.netlify.app/'
            },
            {
                id: 'i-prompt-you-ai-prompt-engineer',
                type: 'individual',
                title: 'I Prompt You - AI Prompt Engineer',
                image: 'i-prompt-you.png', // Ensure this image exists in your project
                shortDescription: 'AI-powered tool to craft perfect prompts for other AI models from diverse inputs.',
                fullDescription: '\"I Prompt You\" is an intelligent AI Prompt Engineer tool designed to help users craft optimal prompts for other AI models. Users can describe their desired output through text input, voice dictation (Speech Recognition), or by uploading various file types including text and images, enabling multimodal input. The application processes these diverse inputs, leveraging the Gemini API to analyze context and generate a well-structured, clear, and highly effective prompt. It also features a convenient prompt history, allowing users to save, load, and manage their generated prompts, ensuring they can efficiently refine and reuse their best AI instructions. This tool streamlines the prompt engineering process, making advanced AI interactions more accessible and precise.',
                tools: ['JavaScript', 'HTML', 'CSS', 'Gemini API', 'Web Speech API', 'Local Storage'],
                tags: ['ai-ml', 'web-dev', 'full-stack', 'javascript'],
                date: '2025', // Consider updating this date to a past or more realistic recent date if it's already built
                github: 'https://github.com/sOuL2000s/I-Prompt-You-AI-Prompt-Engineer.git',
                livedemo: 'https://i-prompt-you-ai-prompt-engineer.netlify.app/'
            },
            {
                id: 'dream11-ai-predictor',
                type: 'individual',
                title: 'Dream11 AI Team Predictor',
                image: 'dream11.PNG',
                shortDescription: 'AI fantasy cricket assistant for optimal Dream11 team suggestions.',
                fullDescription: 'An intelligent, AI-powered fantasy cricket assistant designed to give users a competitive edge in Dream11. This application utilizes sophisticated machine learning algorithms to analyze extensive match data, evaluate individual player performance statistics, and generate highly optimized team suggestions. It\'s built for fantasy sports enthusiasts seeking data-driven insights for strategic team selection.',
                tools: ['Python', 'Streamlit', 'Pandas', 'Machine Learning'],
                tags: ['ai-ml', 'python', 'streamlit', 'web-dev'],
                date: '2024',
                github: 'https://github.com/sOuL2000s/dream11-team-predictor-ai.git',
                livedemo: 'https://dream11-ai-team-predictor.netlify.app/'
            },
            {
                id: 'portfolio-website',
                type: 'individual',
                title: 'My Personal Portfolio Website',
                image: 'portfolio.PNG',
                shortDescription: 'Showcasing skills, projects, and achievements with responsive design.',
                fullDescription: 'This is my personal portfolio website, a dynamic platform built to showcase my diverse skills, impactful projects, and notable achievements as an AI & Full-Stack Developer. It features a fully responsive design, ensuring optimal viewing across all devices, smooth scroll navigation for an intuitive user experience, and a flexible theme-switching functionality (light/dark mode) to cater to user preferences, all contributing to an engaging and professional online presence.',
                tools: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript'],
                tags: ['web-dev'],
                date: '2024 (Ongoing)',
                github: 'https://github.com/sOuL2000s/My-Portfolio-Website-Streamlit.git',
                livedemo: 'https://souparna-paul-portfolio.netlify.app/'
            },
            {
                id: 'python-syllabus',
                type: 'individual',
                title: 'Python Syllabus Website',
                image: 'python.png',
                shortDescription: 'An interactive Python learning portal from basics to advanced OOP.',
                fullDescription: 'A structured and interactive Python learning portal designed for beginners. It covers everything from fundamental programming concepts to advanced Object-Oriented Programming (OOP) principles. The website features a clean user interface, embedded code examples for hands-on practice, and a clear, syllabus-like roadmap to guide users through self-paced learning, making complex topics accessible and engaging.',
                tools: ['HTML', 'CSS', 'JavaScript', 'Python'],
                tags: ['web-dev', 'python'],
                date: '2024',
                github: 'https://github.com/sOuL2000s/python-syllabus-website.git',
                livedemo: 'https://python-syllabus-website.netlify.app/'
            },
            {
                id: 'ai-shape-shifter',
                type: 'individual',
                title: 'AI Shape Shifter Website',
                image: 'ai-shape-shifter.PNG',
                shortDescription: 'AI-powered website builder with chatbot interaction and real-time customization.',
                fullDescription: 'An innovative AI-powered website builder that redefines web page creation. Users interact with an intelligent chatbot to instantly generate and customize web page elements and layouts. This dynamic platform features local storage capabilities for saving ongoing changes, robust dynamic section management, and real-time style updates, offering a highly interactive and intuitive experience for building and modifying web content on the fly.',
                tools: ['HTML', 'CSS', 'JavaScript', 'Gemini API'],
                tags: ['ai-ml', 'web-dev'],
                date: '2023',
                github: 'https://github.com/sOuL2000s/AI-Shape-Shifter-Website.git',
                livedemo: 'https://ai-shape-shifter-website.netlify.app/'
            },
            {
                id: 'cosmic-chat-ai',
                type: 'individual',
                title: 'Cosmic Chat AI - Simple AI Chatbot',
                image: 'cosmic.png',
                shortDescription: 'Lightweight AI chatbot with Gemini API, file upload, dark/light mode.',
                fullDescription: 'A lightweight and user-friendly AI chatbot, \'Cosmic Chat AI,\' seamlessly integrated with the Gemini API for advanced conversational capabilities. This application features comprehensive file upload support, allowing users to interact with the AI using various document types. It offers both dark and light modes for personalized viewing, all presented within a sleek user interface powered by Tailwind CSS, ensuring a modern and intuitive interaction.',
                tools: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'AI/NLP', 'Gemini API'],
                tags: ['ai-ml', 'web-dev'],
                date: 'December 2023',
                github: 'https://github.com/sOuL2000s/Cosmic-Chat-AI-simple-ai-chatbot-.git',
                livedemo: 'https://cosmic-chat-ai-simple-ai-chatbot.netlify.app/'
            },
            {
                id: 'small-ai-big-vision',
                type: 'individual',
                title: 'Small AI - Big Vision AI Chatbot',
                image: 'small-ai.PNG',
                shortDescription: 'AI chat assistant with Gemini API, markdown, voice input, file attachments.',
                fullDescription: 'An intelligent AI chat assistant, \'Small AI - Big Vision,\' that integrates the powerful Gemini API to provide advanced conversational capabilities. It boasts a clean, highly responsive user interface with comprehensive markdown support for rich text interactions. Key features include dynamic dark/light themes, voice input for hands-free communication, and support for file attachments, creating a versatile and engaging conversational experience.',
                tools: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Gemini API', 'AI/NLP', 'Web Speech API', 'Marked.js'],
                tags: ['ai-ml', 'web-dev'],
                date: 'December 2023',
                github: 'https://github.com/sOuL2000s/SMALL-AI.git',
                livedemo: 'https://small-ai-big-vision.netlify.app/'
            },

            // Team Projects
            {
                id: 'phishing-url-detection',
                type: 'team',
                title: 'Phishing URL Detection Using Machine Learning',
                image: 'phishing.png',
                shortDescription: 'ML model to detect malicious phishing URLs. (Awarded Best Paper)',
                fullDescription: 'A critical machine learning project focused on the detection of malicious phishing URLs. This research involved comprehensive data collection, meticulous feature engineering to extract distinguishing characteristics from URLs, and the training of various ML models (including TensorFlow-based deep learning and Scikit-learn algorithms) to identify and flag potential phishing attempts. The project aims to enhance cybersecurity defenses by providing an automated and intelligent system for real-time threat detection, and it was recognized with a Best Paper Award.',
                tools: ['Python', 'TensorFlow', 'Scikit-learn', 'Machine Learning'],
                tags: ['ai-ml', 'python', 'team'],
                date: '2024',
                github: null, // No GitHub link provided in original
                livedemo: null // No Live Demo link provided in original
            },
            {
                id: 'parkinsons-detection',
                type: 'team',
                title: 'Early Detection of Parkinson’s Disease Using ML',
                image: 'parkinson\'s.png',
                shortDescription: 'ML model for early Parkinson’s disease detection using voice/motion data.',
                fullDescription: 'This research project focuses on developing a machine learning model for the early detection of Parkinson’s disease. Utilizing a dataset of biomedical voice and motion data, the model aims to identify subtle indicators of the disease in its nascent stages. The primary objective is to contribute to medical research by providing a predictive healthcare tool that could facilitate earlier diagnosis and intervention, potentially improving patient outcomes and quality of life.',
                tools: ['Python', 'Scikit-learn', 'Pandas', 'Machine Learning'],
                tags: ['ai-ml', 'python', 'team'],
                date: '2023',
                github: 'https://github.com/sOuL2000s/early-parkinsons-detection-ml.git',
                livedemo: null
            },
            {
                id: 'employee-management-system',
                type: 'team',
                title: 'Employee Management System Website',
                image: 'ems.PNG',
                shortDescription: 'Web-based employee portal with role-based authentication & HR workflows.',
                fullDescription: 'A robust web-based employee management portal designed to streamline human resources workflows. This system features secure role-based authentication, ensuring data integrity and access control. It facilitates various HR operations, from onboarding to performance tracking, with real-time database integration (Firebase Firestore) for immediate data accessibility and updates. The application helps companies efficiently manage their workforce, improving operational efficiency and employee experience.',
                tools: ['Node.js', 'React.js', 'Firebase Firestore', 'HTML', 'CSS'],
                tags: ['full-stack', 'react', 'web-dev', 'team'],
                date: 'Jan 2024 - June 2024',
                github: 'https://github.com/sOuL2000s/simple-employee-management-system.git',
                livedemo: 'https://employee-management-system21.netlify.app/'
            }
        ];

// Set current year in footer
document.addEventListener('DOMContentLoaded', () => {
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
});

// Dark Mode Toggle Logic
const darkModeToggle = document.getElementById('darkModeToggle'); // Desktop header toggle
// Site Assistant (NEW)
const siteAssistantBtn = document.getElementById('siteAssistantBtn');
const siteAssistantModal = document.getElementById('siteAssistantModal');
const siteAssistantModalCloseBtn = document.querySelector('.site-assistant-modal-close-btn');
const siteAssistantProjectList = document.getElementById('site-assistant-project-list');
const mobileDarkModeToggle = document.getElementById('mobileDarkModeToggle'); // Mobile fixed nav toggle

const applyDarkMode = (isDark) => {
    if (isDark) {
        document.body.classList.add('dark-mode');
        if (darkModeToggle) darkModeToggle.classList.add('dark');
    } else {
        document.body.classList.remove('dark-mode');
        if (darkModeToggle) darkModeToggle.classList.remove('dark');
    }
};

// Apply saved dark mode preference on load
document.addEventListener('DOMContentLoaded', () => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    applyDarkMode(savedDarkMode);
    populateSiteAssistantProjects(); // Populate for the site assistant modal
});

// Event listener for desktop dark mode toggle
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        const isCurrentlyDark = document.body.classList.contains('dark-mode');
        applyDarkMode(!isCurrentlyDark);
        localStorage.setItem('darkMode', !isCurrentlyDark);
    });
}

// Event listener for mobile dark mode toggle
if (mobileDarkModeToggle) {
    mobileDarkModeToggle.addEventListener('click', () => {
        const isCurrentlyDark = document.body.classList.contains('dark-mode');
        applyDarkMode(!isCurrentlyDark);
        localStorage.setItem('darkMode', !isCurrentlyDark);
    });
}


// Smooth scrolling for internal anchor links (excluding multi-page navigation)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const currentFileName = window.location.pathname.split("/").pop();
        if (currentFileName === "index.html" || currentFileName === "" || currentFileName === "education-achievements.html") {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = document.querySelector('header').offsetHeight;
                const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerOffset - 20;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Intersection Observer for fade-in effect
const fadeInSections = document.querySelectorAll('.fade-in-section');
const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.01
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // observer.unobserve(entry.target); // Uncomment to animate only once
        } else {
            // entry.target.classList.remove('is-visible'); // Uncomment to re-animate on scroll
        }
    });
}, observerOptions);
fadeInSections.forEach(section => {
    observer.observe(section);
});

// Highlight active navigation link based on current page
const setActiveNav = () => {
    const path = window.location.pathname.split("/").pop(); // Get filename
    const desktopNavLinks = document.querySelectorAll('#navLinksDesktop a');
    const mobileNavItems = document.querySelectorAll('#mobileFixedNav .nav-item'); // New selector for mobile

    [...desktopNavLinks, ...mobileNavItems].forEach(link => {
        link.classList.remove('active'); // For desktop nav links
        link.classList.remove('active-nav-link'); // For mobile nav items

        let linkPath = link.getAttribute('href');
        if (linkPath) { // Check if href exists
            linkPath = linkPath.split("/").pop();

            if (linkPath === path || (path === "" && linkPath === "index.html")) {
                link.classList.add('active'); // Applies to both desktop and mobile for consistent styling
                link.classList.add('active-nav-link'); // Specific for mobile bottom nav
            }
        }
    });
};
document.addEventListener('DOMContentLoaded', setActiveNav); // Run on page load


// Scroll to Top Button functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// --- Site Assistant Functionality (NEW) ---

// Function to populate the project list in the Site Assistant modal
const populateSiteAssistantProjects = () => {
    if (!siteAssistantProjectList) return; // Ensure element exists

    siteAssistantProjectList.innerHTML = ''; // Clear previous list

    // Sort projects by date descending (most recent first)
    const sortedProjects = [...projectsData].sort((a, b) => {
        const dateA = new Date(a.date.replace(/ \(.*\)/, ''));
        const dateB = new Date(b.date.replace(/ \(.*\)/, ''));
        return dateB - dateA;
    });

    sortedProjects.forEach(project => {
        // Only display projects with a live demo link
        if (project.livedemo) {
            const projectItem = document.createElement('a');
            projectItem.href = project.livedemo;
            projectItem.target = '_blank';
            projectItem.className = 'site-assistant-project-item transition-colors-shadow';
            projectItem.innerHTML = `
                <span class="project-title-text">${project.title}</span>
                <i class="fas fa-external-link-alt project-link-icon"></i>
            `;
            projectItem.addEventListener('click', () => {
                closeSiteAssistantModal(); // Close modal when a project is clicked
            });
            siteAssistantProjectList.appendChild(projectItem);
        }
    });
};

// Function to open the Site Assistant modal
const openSiteAssistantModal = () => {
    if (!siteAssistantModal) return;
    populateSiteAssistantProjects(); // Populate list every time it opens
    siteAssistantModal.classList.add('show');
    toggleNoScroll(true);
    siteAssistantModal.focus(); // For accessibility
};

// Function to close the Site Assistant modal
const closeSiteAssistantModal = () => {
    if (!siteAssistantModal) return;
    siteAssistantModal.classList.remove('show');
    toggleNoScroll(false);
};

// Event listeners for Site Assistant
if (siteAssistantBtn) {
    siteAssistantBtn.addEventListener('click', openSiteAssistantModal);
}
if (siteAssistantModalCloseBtn) {
    siteAssistantModalCloseBtn.addEventListener('click', closeSiteAssistantModal);
}
if (siteAssistantModal) {
    siteAssistantModal.addEventListener('click', (e) => {
        if (e.target === siteAssistantModal) { // Close only if clicking on overlay
            closeSiteAssistantModal();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && siteAssistantModal.classList.contains('show')) {
            closeSiteAssistantModal();
        }
    });
}

// Function to manage no-scroll class, handling multiple modals
let openModalCount = 0;
const toggleNoScroll = (add) => {
    if (add) {
        openModalCount++;
        document.body.classList.add('no-scroll');
    } else {
        openModalCount--;
        if (openModalCount <= 0) {
            document.body.classList.remove('no-scroll');
            openModalCount = 0; // Ensure it doesn't go negative
        }
    }
};

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});