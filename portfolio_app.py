import streamlit as st
from PIL import Image

# --- PAGE CONFIGURATION ---
st.set_page_config(
    page_title="Souparna Paul - Portfolio", # Updated title
    page_icon="✨",
    layout="centered", # Can also be 'wide'
    initial_sidebar_state="expanded"
)

# Initialize session state for dark mode if it doesn't exist
if 'dark_mode' not in st.session_state:
    st.session_state.dark_mode = False # Default to light mode

# --- CUSTOM CSS FOR STYLING ---
# Using an embedded style block for simplicity.
st.markdown(f"""
    <style>
    /* Global Variables for Colors (Light Mode) */
    :root {{
        --background-color: #f4f7f6; /* Very light gray/off-white */
        --main-background-color: #ffffff; /* White */
        --text-color: #34495e; /* Slightly darker blue-gray */
        --heading-color: #2c3e50; /* Dark blue-gray */
        --link-color: #3498db; /* Blue */
        --button-bg-color: #3498db; /* Blue */
        --button-hover-bg-color: #2980b9; /* Darker blue */
        --skill-tag-bg: #ecf0f1; /* Light gray */
        --skill-tag-border: #dcdcdc; /* Subtle border */
        --expander-header-bg: #ecf0f1; /* Light gray */
        --expander-border-left: #3498db; /* Blue */
        --form-input-bg: #ecf0f1;
        --form-input-border: #dcdcdc;
        --form-input-text: #34495e; /* Text color for input fields */
        --form-placeholder-text: #7f8c8d; /* Placeholder color for input fields */
        --form-submit-bg: #28a745; /* Green */
        --form-submit-hover-bg: #218838; /* Darker green */
        --sidebar-bg: #2c3e50; /* Dark blue-gray */
        --sidebar-text: #ecf0f1; /* Light gray */
        --sidebar-active-link-bg: rgba(52, 152, 219, 0.2); /* Semi-transparent blue */
        --sidebar-active-link-color: #3498db; /* Blue */
        --sidebar-hover-bg: rgba(236, 240, 241, 0.1); /* Light gray transparent hover */
    }}

    /* Dark Mode Styles */
    body.dark-mode {{
        --background-color: #1a1a2e; /* Dark background */
        --main-background-color: #16213e; /* Slightly lighter dark */
        --text-color: #e0e0e0; /* Light gray text */
        --heading-color: #f0f0f0; /* White headings */
        --link-color: #8be9fd; /* Light blue/cyan */
        --button-bg-color: #6272a4; /* Gray-blue button */
        --button-hover-bg-color: #44475a; /* Darker gray-blue */
        --skill-tag-bg: #44475a; /* Darker skill tag */
        --skill-tag-border: #6272a4; /* Matching border */
        --expander-header-bg: #44475a; /* Darker expander header */
        --expander-border-left: #8be9fd; /* Light blue/cyan */
        --form-input-bg: #44475a;
        --form-input-border: #6272a4;
        --form-input-text: #f0f0f0; /* Light text for input fields */
        --form-placeholder-text: #b0b0b0; /* Lighter placeholder */
        --form-submit-bg: #50fa7b; /* Green-ish */
        --form-submit-hover-bg: #28a745; /* Darker green */
        --sidebar-bg: #0f0f1a; /* Even darker sidebar */
        --sidebar-text: #f0f0f0; /* Lighter sidebar text */
        --sidebar-active-link-bg: rgba(80, 250, 123, 0.2); /* Semi-transparent green-ish */
        --sidebar-active-link-color: #50fa7b; /* Green-ish active link */
        --sidebar-hover-bg: rgba(240, 240, 240, 0.1); /* White transparent hover */
    }}

    /* Apply variables to Streamlit elements */
    html, body, .stApp {{ /* Ensure body also gets the background */
        background-color: var(--background-color);
        color: var(--text-color);
        transition: background-color 0.3s ease, color 0.3s ease;
    }}
    .main .block-container {{
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }}
    .main {{
        background-color: var(--main-background-color);
        border-radius: 12px;
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.08);
        margin-top: 20px;
        margin-bottom: 20px;
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
    }}

    /* Headings */
    h1, h2, h3, h4, h5, h6, .stMarkdown h1, .stMarkdown h2, .stMarkdown h3 {{
        color: var(--heading-color);
        font-family: 'Inter', sans-serif;
        margin-top: 1.5em;
        margin-bottom: 0.8em;
        transition: color 0.3s ease;
    }}

    /* Paragraph Text */
    .stMarkdown p, .stMarkdown li, label {{
        color: var(--text-color);
        line-height: 1.7;
        font-size: 1.05em;
        transition: color 0.3s ease;
    }}

    /* Buttons */
    .stButton>button {{
        background-color: var(--button-bg-color);
        color: white; /* Always white text for buttons */
        border-radius: 8px;
        border: none;
        padding: 12px 25px;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
        font-weight: bold;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }}
    .stButton>button:hover {{
        background-color: var(--button-hover-bg-color);
        transform: translateY(-2px);
    }}

    /* Profile Image */
    .profile-img img {{
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid var(--main-background-color);
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }}

    /* Social Icons */
    a {{
        color: var(--link-color);
        text-decoration: none;
        transition: color 0.3s ease;
    }}
    a:hover {{
        color: var(--link-color);
        text-decoration: underline;
    }}

    /* Skill Tags */
    .skill-tag {{
        display: inline-block;
        background-color: var(--skill-tag-bg);
        color: var(--heading-color);
        padding: 6px 12px;
        margin: 5px 7px 5px 0;
        border-radius: 5px;
        font-size: 0.95em;
        font-weight: 500;
        border: 1px solid var(--skill-tag-border);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    }}

    /* Expander styling for projects */
    .streamlit-expanderHeader {{
        background-color: var(--expander-header-bg);
        border-radius: 8px;
        padding: 10px 15px;
        font-weight: bold;
        color: var(--heading-color);
        transition: background-color 0.3s ease, color 0.3s ease;
    }}
    .streamlit-expanderContent {{
        background-color: var(--main-background-color);
        border-left: 3px solid var(--expander-border-left);
        padding: 15px;
        margin-top: 5px;
        border-radius: 0 0 8px 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
        transition: background-color 0.3s ease, border-color 0.3s ease;
    }}

    /* Contact Form Styling */
    form input[type="text"],
    form input[type="email"],
    form textarea {{
        background-color: var(--form-input-bg);
        border: 1px solid var(--form-input-border);
        color: var(--form-input-text); /* Ensure text color changes */
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
        width: 100%;
        transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
    }}
    /* Placeholder styling */
    form input::placeholder,
    form textarea::placeholder {{
        color: var(--form-placeholder-text);
        opacity: 1; /* Firefox default is lower opacity */
        transition: color 0.3s ease;
    }}

    form button[type="submit"] {{
        background-color: var(--form-submit-bg);
        color: white;
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }}
    form button[type="submit"]:hover {{
        background-color: var(--form-submit-hover-bg);
    }}

    /* Sidebar Styling */
    .css-1d391kg {{ /* Target for the sidebar background */
        background-color: var(--sidebar-bg) !important;
        transition: background-color 0.3s ease;
    }}
    .css-1oe5zti {{ /* Target for sidebar text/links */
        color: var(--sidebar-text) !important;
        transition: color 0.3s ease;
    }}
    .css-1oe5zti > label > div > p {{ /* Target sidebar radio button text */
        color: var(--sidebar-text) !important;
        transition: color 0.3s ease;
    }}
    .css-1oe5zti > label.st-dg {{ /* Target for active sidebar radio button */
        background-color: var(--sidebar-active-link-bg) !important;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    }}
    .css-1oe5zti > label.st-dg > div > p {{
        color: var(--sidebar-active-link-color) !important;
        font-weight: bold;
        transition: color 0.3s ease;
    }}
    .css-1oe5zti > label:hover {{ /* Sidebar item hover */
        background-color: var(--sidebar-hover-bg) !important;
        border-radius: 5px;
    }}

    /* Specific Streamlit internal elements for better control */
    .stHeading {{ /* Target Streamlit's h1/h2/h3 rendered text */
        color: var(--heading-color) !important;
    }}
    .stText {{ /* Target Streamlit's st.write rendered text */
        color: var(--text-color) !important;
    }}

    </style>

    <script>
    // Function to apply/remove dark mode class
    const applyDarkMode = (isDark) => {{
        if (isDark) {{
            document.body.classList.add('dark-mode');
        }} else {{
            document.body.classList.remove('dark-mode');
        }}
    }};

    // Check session storage on page load and apply theme
    window.addEventListener('load', () => {{
        const savedDarkMode = sessionStorage.getItem('darkMode');
        if (savedDarkMode !== null) {{
            applyDarkMode(savedDarkMode === 'true');
        }} else {{
            // If no preference saved, default to light mode and save it
            sessionStorage.setItem('darkMode', 'false');
            applyDarkMode(false);
        }}
    }});

    // Listen for messages from Streamlit to toggle dark mode
    window.parent.addEventListener('message', (event) => {{
        if (event.data.type === 'streamlit:setComponentValue' && event.data.value.key === 'dark_mode_toggle_state') {{
            applyDarkMode(event.data.value.value);
            sessionStorage.setItem('darkMode', event.data.value.value);
        }}
    }});
    </script>
    """, unsafe_allow_html=True)


# --- DARK MODE TOGGLE ---
# Add a toggle button for dark mode in the sidebar
with st.sidebar:
    st.markdown("---")
    st.header("Theme")
    # Use a checkbox or a button that updates session state
    if st.button("Toggle Dark Mode"):
        st.session_state.dark_mode = not st.session_state.dark_mode
        # Send a message to the JS to update the body class
        st.components.v1.html(
            f"""
            <script>
                window.parent.postMessage({{
                    type: 'streamlit:setComponentValue',
                    value: {{ key: 'dark_mode_toggle_state', value: {st.session_state.dark_mode} }}
                }}, '*');
            </script>
            """,
            height=0,
        )

# --- NAVIGATION (Sidebar) ---
st.sidebar.title("Navigation")
sections = ["Home", "About Me", "Skills", "Projects", "Education", "Achievements", "Contact"] # Removed "Experience"
choice = st.sidebar.radio("Go to", sections)


# --- SECTION CONTENT ---
if choice == "Home":
    # --- HEADER SECTION ---
    with st.container():
        col1, col2 = st.columns([1, 2])
        with col1:
            # Load your profile image here. Replace 'profile.png' with your image file name.
            # Make sure the image file is in the same directory as your script.
            try:
                profile_image = Image.open("profile.png") # Assuming this is your uploaded image
                # Removed the caption parameter to remove the "Your Photo" text
                st.image(profile_image, width=180, use_container_width=False, output_format="JPEG", clamp=True)
                st.markdown('<div class="profile-img"></div>', unsafe_allow_html=True) # Apply CSS class
            except FileNotFoundError:
                st.error("Profile image not found. Please upload your image or update the path.")
                st.image("https://placehold.co/180x180/007bff/ffffff?text=Your+Photo", width=180, use_container_width=False)


        with col2:
            st.title("Hi, I'm Souparna Paul 👋") # Updated Name
            st.subheader("A Creatively Passionate Python Based Software and Web Developer | Kolkata, India") # Updated Profession/Role and Field
            st.write("""
                I'm a Tech Enthusiast and Innovator from Madhyamgram, West Bengal.
                I specialize in Python development, AI/ML, and full-stack web development using tools like Streamlit, Firebase, and React.
                My strengths lie in building real-time, data-driven applications—as seen in projects like Crypto Prediction Maker Pro++, Smart Agritech Streamlit Dashboard, and my Tournament Manager WebApp.
                I’m also passionate about applying machine learning to real-world problems like Phishing URL Detection, for which I won a Best Paper Award.
                Use the sidebar to navigate through my portfolio!
            """)
            st.markdown(
                """
                <p>
                    <a href="https://www.linkedin.com/in/souparno-paul-28a75524b/" target="_blank" style="margin-right: 15px;">
                        <img src="https://img.icons8.com/color/48/000000/linkedin.png" style="width: 25px; height: 25px; vertical-align: middle;"> LinkedIn
                    </a>
                    <a href="https://github.com/sOuL2000s" target="_blank">
                        <img src="https://img.icons8.com/material-outlined/48/000000/github.png" style="width: 25px; height: 25px; vertical-align: middle;"> GitHub
                    </a>
                </p>
                """,
                unsafe_allow_html=True
            )

elif choice == "About Me":
    # --- ABOUT ME ---
    with st.container():
        st.header("About Me")
        st.write(
            """
            I have completed my B.Tech CSE student from Narula Institute of Technology, Kolkata.
            My journey in technology began with a strong interest in programming and problem-solving.
            Since then, I've honed my skills in various areas, including:

            * **Python Development:** Proficient in various Python libraries and frameworks for data science and web development.
            * **AI/Machine Learning:** Experienced in developing and deploying machine learning models for real-world applications.
            * **Full-Stack Web Development:** Skilled in building interactive web applications using Streamlit, Firebase, and React.
            * **Real-time Data-Driven Applications:** Demonstrated ability to create applications that process and visualize real-time data effectively.

            I thrive in environments that challenge me to learn and grow, and I am always eager to contribute to innovative projects.
            My work includes projects like **Crypto Prediction Maker Pro++**, **Smart Agritech Streamlit Dashboard**, and a **Tournament Manager WebApp**.
            Additionally, my passion for applying machine learning to real-world problems led to a **Best Paper Award for Phishing URL Detection**.
            Outside of academics, I enjoy **Writing Stories** and **Songs**, **Singing**, and **Meditating**.
            """
        )

elif choice == "Skills":
    # --- SKILLS ---
    with st.container():
        st.header("Skills")
        skills = {
            "Programming Languages": ["Python", "JavaScript", "SQL", "C", "Java", "C++"],
            "Web Development": ["Streamlit", "React", "HTML", "CSS", "Render", "Django"],
            "Data Science & ML": ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Data Visualization", "Statistical Analysis"],
            "Databases": ["Firebase-FireStore", "MongoDB", "MySQL", "SQLite"],
            "Tools & Platforms": ["Jupyter Notebooks", "VS Code", "Colab", "Power BI", "Excel", "GitHub"], # Added GitHub here as it's a tool
            "Soft Skills": ["Problem-solving", "Teamwork", "Communication", "Adaptability", "Leadership", "Ability To Learn"] # Added Ability To Learn
        }

        for category, skill_list in skills.items():
            st.subheader(category)
            # Display skills as styled tags
            skill_tags_html = "".join([f'<span class="skill-tag">{skill}</span>' for skill in skill_list])
            st.markdown(f'<div style="margin-bottom: 15px;">{skill_tags_html}</div>', unsafe_allow_html=True)

elif choice == "Projects":
    # --- PROJECTS ---
    with st.container():
        st.header("My Projects")
        st.subheader("Individual Projects")

        # Project 1: Crypto Prediction Maker Pro++
        with st.expander("Crypto Prediction Maker Pro++"):
            st.markdown(
                """
                **Description:** Built a real-time, mobile-optimized crypto forecasting dashboard with multi-tab navigation using Streamlit and Plotly.
                Integrated Binance API to fetch high-frequency 1-minute OHLCV data, with auto-refresh and adjustable lookback (1–7 days).
                Engineered 40+ technical features using TA-Lib, including RSI, MACD, ADX, Bollinger Bands, and lagged price/volume indicators.
                Enabled XGBoost and Linear Regression model selection with live training, scaled inputs, and R²/MAE performance tracking.
                Added real-time AI predictions for any future time (1–240 mins), complete with dynamic error-based confidence intervals.
                Included mock sentiment scores, Probo-aligned forecasting, custom time prediction, and intelligent UI scaling for mobile.
                Designed a modular, user-friendly UI with tabs: Live Price, Prediction, Accuracy, Charts, Forecasting, and Export.
                """, unsafe_allow_html=True
            )
            st.markdown("**Tools:**", unsafe_allow_html=True) # Separated tools heading
            skill_list_project1 = ["Python", "Streamlit", "Binance API", "XGBoost", "Linear Regression", "Plotly", "TA-Lib"]
            skill_tags_html_project1 = "".join([f'<span class="skill-tag">{skill}</span>' for skill in skill_list_project1])
            st.markdown(skill_tags_html_project1, unsafe_allow_html=True)
            st.markdown(
                """
                **Date:** June 2025

                [GitHub Repository](https://github.com/sOuL2000s/bitcoin-predictor-app.git) | [Live Demo](https://bitcoin-predictor-app.onrender.com/)
                """, unsafe_allow_html=True
            )

        # Project 2: Smart AgriTech Dashboard
        with st.expander("Smart AgriTech Dashboard"):
            st.markdown(
                """
                **Description:** Built a unified AI-powered AgriTech dashboard for real-time crop monitoring, sensor visualization, and crop advisory.
                Integrated Firebase Realtime Database to fetch and display live farm sensor data (moisture, pH, NPK, temperature, etc.).
                Trained a TimeDistributed ANN (TDANN) for soil moisture prediction using recent sensor trends and crop-type embeddings.
                Enabled AI-based growth forecasts and actionable crop care tips tailored to 20+ Indian crops like Wheat, Rice, Maize, Mango, etc.
                Designed multi-tab responsive UI with Plotly trend charts, prediction widgets, and condition-based crop suggestions.
                Secured Firebase credentials using base64-encoded keys for Render compatibility and seamless cloud deployment.
                Included fallback handling for missing data, intelligent sensor parsing, and advice logic for sustainable farming.
                """, unsafe_allow_html=True
            )
            st.markdown("**Tools:**", unsafe_allow_html=True) # Separated tools heading
            skill_list_project2 = ["Python", "Streamlit", "TensorFlow", "Firebase", "Plotly", "Pandas", "NumPy"]
            skill_tags_html_project2 = "".join([f'<span class="skill-tag">{skill}</span>' for skill in skill_list_project2])
            st.markdown(skill_tags_html_project2, unsafe_allow_html=True)
            st.markdown(
                """
                **Date:** June 2025

                [GitHub Repository](https://github.com/sOuL2000s/Smart-AgriTech-Streamlit-Dashbard.git) | [Live Demo](https://smart-agritech-streamlit-dashbard.onrender.com/)
                """, unsafe_allow_html=True
            )

        # Project 3: Tournament Manager App (Streamlit)
        with st.expander("Tournament Manager App (Streamlit)"):
            st.markdown(
                """
                **Description:** Built a real-time multi-sport tournament manager with a tabbed dashboard interface using Streamlit and Firestore.
                Supported multiple formats: Round Robin, Knockout, and Group + Knockout combinations across Football, Cricket, Badminton, etc.
                Enabled match generation, dynamic score updates, player stat tracking (goals, assists, runs, wickets, sets), and auto-leaderboard computation.
                Integrated Firestore document structure with per-team player mappings, match rounds, timestamps, and calculated metrics.
                Used environment-secured Firebase key injection (via base64) for deployment on Render and cloud platforms.
                Implemented caching, real-time sync, and robust UI rerenders via Streamlit session state and Firestore triggers.
                Designed modular architecture with scalable team/player/match CRUD operations and tournament-type-specific logic.
                """, unsafe_allow_html=True
            )
            st.markdown("**Tools:**", unsafe_allow_html=True) # Separated tools heading
            skill_list_project3 = ["Python", "Streamlit", "Firebase Firestore", "Pandas"]
            skill_tags_html_project3 = "".join([f'<span class="skill-tag">{skill}</span>' for skill in skill_list_project3])
            st.markdown(skill_tags_html_project3, unsafe_allow_html=True)
            st.markdown(
                """
                **Date:** June 2025

                [GitHub Repository](https://github.com/sOuL2000s/Tournament-Maker-Manager-Streamlit-WebApp.git) | [Live Demo](https://tournament-maker-manager-streamlit-webapp.onrender.com/)
                """, unsafe_allow_html=True
            )

        # Project 4: Smart Calculator Pro++ (Updated title)
        with st.expander("Smart Calculator Pro++"):
            st.markdown(
                """
                **Description:** Developed an all-in-one smart calculator for Math, Stats, Algebra, Finance, and Calculus using Streamlit.
                Supported 14+ operations including matrix ops, date difference, graph plotting, and unit conversions.
                Integrated symbolic computation with SymPy to support equation solving, differentiation, integration, and graphing expressions.
                Enabled dynamic matrix evaluation (determinants, inverses), simple interest finance calculations, probability, and unit conversions.
                Built a user-friendly Streamlit interface with syntax hints and real-time validation for 14 different operation types.
                Designed robust parser logic and intuitive expression-based input across domains (e.g., diff(x**2,x), 1000 g kg, [[1,2],[3,4]]).
                Used Matplotlib to visualize algebraic/trig functions dynamically from text input with adjustable domain.
                Supports domain-specific parsing for finance, stats, date delta, and basic scientific functions in a unified app.
                Optimized for minimal input, error handling, and syntax hints in a clean, dynamic UI.
                """, unsafe_allow_html=True
            )
            st.markdown("**Tools:**", unsafe_allow_html=True) # Separated tools heading
            skill_list_project4 = ["Python", "Streamlit", "NumPy", "SymPy", "Matplotlib", "Pandas"]
            skill_tags_html_project4 = "".join([f'<span class="skill-tag">{skill}</span>' for skill in skill_list_project4])
            st.markdown(skill_tags_html_project4, unsafe_allow_html=True)
            st.markdown(
                """
                **Date:** June 2025

                [GitHub Repository](https://github.com/sOuL2000s/smart-calculator-streamlit-app.git) | [Live Demo](https://smart-calculator-streamlit-app.onrender.com/)
                """, unsafe_allow_html=True
            )

        # Project 5: Tournament Manager Full-Stack Web Application (New Project)
        with st.expander("Tournament Manager Full-Stack Web Application"):
            st.markdown(
                """
                **Description:** Developed a comprehensive full-stack web application for managing tournaments, including features for team registration, match scheduling, score updates, and leaderboard tracking.
                Designed a user-friendly interface for seamless navigation and data input.
                Implemented robust backend logic for data persistence and real-time updates.
                Provided live demos for various tournament types to showcase functionality.
                """, unsafe_allow_html=True
            )
            st.markdown("**Tools:**", unsafe_allow_html=True) # Separated tools heading
            skill_list_project5 = ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML", "CSS"] # Example tools, adjust as needed
            skill_tags_html_project5 = "".join([f'<span class="skill-tag">{skill}</span>' for skill in skill_list_project5])
            st.markdown(skill_tags_html_project5, unsafe_allow_html=True)
            st.markdown(
                """
                **Date:** May 2025

                [GitHub Repository](https://github.com/sOuL2000s/tournament-manager-FULL-STACK.git) | [Live Demo](https://tournament-manager-website.netlify.app/)
                """, unsafe_allow_html=True
            )
                # Project: BTC Probo Predictor (Mobile Friendly)
        with st.expander("BTC Probo Predictor (Mobile Friendly)"):
            st.markdown(
                """
                **Description:** This AI-powered application provides predictions for Probo BTC events, optimized for mobile use. It leverages real-time market data and technical analysis to recommend a "vote" (Yes/No) on Bitcoin price movements against a target price at a specific future time.

                **Key Features:**
                * **Real-time Data Fetching:** Gathers OHLCV (Open, High, Low, Close, Volume) data for BTCUSDT from the Binance API, with data refreshed on an hourly interval.
                * **Technical Indicator Analysis:** Calculates and displays key technical indicators such as RSI (14-period window) and EMA (20-period and 50-period windows). Provides insights into market trend (Uptrend/Downtrend) and RSI zone (Overbought, Oversold, Neutral).
                * **Sentiment Analysis Integration:** Incorporates Bitcoin sentiment scores to provide a more holistic market view.
                * **AI-Powered Prediction Engine:** Recommends a Probo vote (Yes/No) based on the target price, target time, current price, average delta per hour, projected price, and sentiment score.
                * **Interactive Charting:** Visualizes BTC price data with candlestick charts, including EMA overlays, using Plotly for a clear and interactive user experience.
                * **Telegram Notifications:** Sends automated Telegram alerts with prediction summaries, including target time, target price, current price, projected price, sentiment, and the recommended vote.
                * **Mobile-Friendly Design:** Utilizes Streamlit with custom CSS to ensure a responsive and optimized user interface across various screen sizes.
                """, unsafe_allow_html=True
            )
            st.markdown("**Tools:**", unsafe_allow_html=True) # Separated tools heading
            skill_list_btc_probo = ["Python", "Streamlit", "Plotly", "Pandas", "Requests", "TA-Lib", "TextBlob", "Telegram Bot API"]
            skill_tags_html_btc_probo = "".join([f'<span class="skill-tag">{skill}</span>' for skill in skill_list_btc_probo])
            st.markdown(skill_tags_html_btc_probo, unsafe_allow_html=True)
            st.markdown(
                """
                **Date:** July 2025

                [GitHub Repository](https://github.com/sOuL2000s/simple-bitcoin-probo-predictor.git) | [Live Demo](https://simple-bitcoin-probo-predictor.netlify.app/)
                """, unsafe_allow_html=True
            )


        st.subheader("Team Projects")

        # Team Project 1: Early Detection of Parkinson’s Disease Using ML
        with st.expander("Early Detection of Parkinson’s Disease Using ML"):
            st.markdown(
                """
                **Description:** This team project focused on the early detection of Parkinson's Disease using machine learning techniques. It involved the collaborative effort of a 6-member team.
                Organized and gathered essential resources for the project. Contributed to writing and developing the programming code. Managed a team of 6 members, ensuring smooth collaboration and task delegation. Assisted in the creation and design of the project presentation. Played a significant role in writing the research paper for the project.
                """, unsafe_allow_html=True
            )
            st.markdown("**Tools:**", unsafe_allow_html=True) # Separated tools heading
            skill_list_team_project1 = ["Python", "Scikit-learn", "Pandas", "Machine Learning"]
            skill_tags_html_team_project1 = "".join([f'<span class="skill-tag">{skill}</span>' for skill in skill_list_team_project1])
            st.markdown(skill_tags_html_team_project1, unsafe_allow_html=True)
            st.markdown(
                """
                **Date:** 2023

                [GitHub Repository](https://github.com/sOuL2000s/early-parkinsons-detection-ml.git)
                """, unsafe_allow_html=True
            )

        # Team Project 2: Employee Management System Website
        with st.expander("Employee Management System Website"):
            st.markdown(
                """
                **Description:** Developed a comprehensive Employee Management System Website with a team of 6 members.
                Gathered and organized resources for the project. Conducted research on website development best practices. Developed front-end and back-end code using Node.js, React.js, and Firebase Firestore. Deployed the website, ensuring functionality and accessibility. Managed a team of 6 members, coordinating tasks and facilitating collaboration.
                """, unsafe_allow_html=True
            )
            st.markdown("**Tools:**", unsafe_allow_html=True) # Separated tools heading
            skill_list_team_project2 = ["Node.js", "React.js", "Firebase Firestore", "HTML", "CSS"]
            skill_tags_html_team_project2 = "".join([f'<span class="skill-tag">{skill}</span>' for skill in skill_list_team_project2])
            st.markdown(skill_tags_html_team_project2, unsafe_allow_html=True)
            st.markdown(
                """
                **Date:** January 2024 - June 2024

                [GitHub Repository](https://github.com/sOuL2000s/simple-employee-management-system.git) | [Live Demo](https://employee-management-system21.netlify.app/)
                """, unsafe_allow_html=True
            )

        # Team Project 3: Phishing URL Detection Using Machine Learning
        with st.expander("Phishing URL Detection Using Machine Learning"):
            st.markdown(
                """
                **Description:** This team project focused on applying machine learning to real-world problems for phishing URL detection. This project was recognized with a **Best Paper Award** (2nd National Conference, RAICCIT 2025).
                """, unsafe_allow_html=True
            )
            st.markdown("**Tools:**", unsafe_allow_html=True) # Separated tools heading
            skill_list_team_project3 = ["Python", "TensorFlow", "Scikit-learn", "Data Analysis", "Machine Learning"]
            skill_tags_html_team_project3 = "".join([f'<span class="skill-tag">{skill}</span>' for skill in skill_list_team_project3])
            st.markdown(skill_tags_html_team_project3, unsafe_allow_html=True)
            st.markdown(
                """
                **Date:** 2024
                """, unsafe_allow_html=True # Removed the empty Live Demo link
            )

elif choice == "Education":
    # --- EDUCATION ---
    with st.container():
        st.header("Education")
        # Updated to reflect 2025 graduation
        st.markdown("### B.Tech CSE | Narula Institute of Technology, Kolkata | 2021-2025") # Added start year
        st.markdown("- Relevant coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Machine Learning, Web Technologies")
        st.markdown("- Thesis/Capstone Project: Phishing URL Detection (Awarded Best Paper)")
        st.markdown("---")
        # Added other education entries from resume
        st.markdown("### Higher Secondary | Madhyamgram High School, Madhyamgram | 2019")
        st.markdown("### Secondary | Barasat Mahatma Gandhi Memorial High School, Barasat | 2017")


elif choice == "Achievements": # New Achievements section
    with st.container():
        st.header("Achievements")
        st.markdown(
            """
            * **Research Paper, Best Paper Award:** Recognized for "Phishing URL Detection Using ML" at the 2nd National Conference, RAICCIT 2025.
            * **SIH Internal 2023:** Participated in the Smart India Hackathon (SIH) Internal competition 2023 at Narula Institute of Technology, Kolkata, on "Real-Time Vehicle Tracking System."
            * **Singing Contest:** Secured 2nd place in a college singing contest, NiT Jewels, in April 2022.
            """
        )

elif choice == "Contact":
    # --- CONTACT ---
    with st.container():
        st.header("Get In Touch!")
        st.write("Feel free to reach out to me for collaborations, job opportunities, or just a chat! I'm always open to new connections.")

        # Contact Form (using FormSubmit.co for easy setup without backend)
        # IMPORTANT: Replace 'souparnopaulreborn@gmail.com' with your actual email address.
        contact_form = """
        <form action="https://formsubmit.co/souparnopaulreborn@gmail.com" method="POST">
            <input type="hidden" name="_captcha" value="false">
            <input type="text" name="name" placeholder="Your Name" required>
            <input type="email" name="email" placeholder="Your Email" required>
            <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
            <button type="submit">Send Message</button>
        </form>
        """
        st.markdown(contact_form, unsafe_allow_html=True)
        st.write("Alternatively, you can email me directly at: `souparnopaulreborn@gmail.com`") # Updated email


# --- FOOTER ---
st.markdown("---")
st.write("© 2025 Souparna Paul. All rights reserved.")
st.write("Built with ❤️ using Streamlit.")