<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Owam Duna - Portfolio</title>
  
  <!-- Import Poppins font from Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500&display=swap');
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --primary-color: #3a86ff;
      --secondary-color: #8338ec;
      --accent-color: #ff006e;
      --code-green: #4cd137;
      --code-blue: #00a8ff;
      --gradient-1: linear-gradient(to right, #3a86ff, #8338ec);
      --gradient-2: linear-gradient(to right, #ff006e, #fb5607);
      --gradient-3: linear-gradient(135deg, #3a86ff, #8338ec, #ff006e);
      --light-bg: rgba(15, 15, 25, 0.95);
      --dark-text: #e2e2e2;
      --light-text: #f8f9fa;
      --card-bg: rgba(20, 20, 35, 0.8);
      --card-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    }

    body {
      font-family: 'Poppins', sans-serif;
      background-color: #0a0a15;
      color: var(--dark-text);
      line-height: 1.6;
      min-height: 100vh; 
      display: flex;
      flex-direction: column;
      position: relative;
      overflow-x: hidden;
    }

    /* Code rain background */
    #code-background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      overflow: hidden;
    }

    .code-column {
      position: absolute;
      top: -1000px;
      color: var(--code-green);
      font-family: 'Fira Code', monospace;
      font-size: 14px;
      text-shadow: 0 0 5px var(--code-green);
      white-space: nowrap;
      opacity: 0.7;
      user-select: none;
    }
    
    header {
      background: rgba(10, 10, 25, 0.9);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      padding: 20px 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      position: sticky;
      top: 0;
      z-index: 100;
      border-bottom: 1px solid rgba(58, 134, 255, 0.3);
    }

    header h1 {
      font-size: 1.8rem;
      color: var(--light-text);
      font-weight: 700;
      letter-spacing: 1.2px;
      text-shadow: 0 0 10px var(--primary-color);
    }

    nav a {
      margin-left: 25px;
      color: var(--light-text);
      text-decoration: none;
      font-weight: 500;
      font-size: 1rem;
      transition: all 0.3s ease;
      letter-spacing: 0.8px;
      position: relative;
      padding: 6px 0;
    }

    nav a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--accent-color);
      transition: width 0.3s ease;
    }

    nav a:hover::after {
      width: 100%;
    }

    .intro {
      padding: 100px 40px 70px;
      text-align: center;
      background: rgba(10, 10, 25, 0.7);
      position: relative;
      overflow: hidden;
      border-bottom: 1px solid rgba(131, 56, 236, 0.3);
    }

    .intro h2 {
      font-size: 3.5rem;
      margin-bottom: 15px;
      color: var(--light-text);
      font-weight: 700;
      letter-spacing: 1.5px;
      position: relative;
      z-index: 1;
      text-shadow: 0 0 15px var(--primary-color);
    }

    .intro p {
      font-size: 1.3rem;
      color: var(--light-text);
      font-weight: 400;
      letter-spacing: 0.5px;
      position: relative;
      z-index: 1;
      text-shadow: 0 0 8px var(--secondary-color);
    }

    .typed-text {
      color: var(--code-green);
      font-family: 'Fira Code', monospace;
      position: relative;
      display: inline-block;
    }

    .typed-text::after {
      content: '|';
      position: absolute;
      right: -12px;
      animation: blink 0.7s infinite;
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    section {
      padding: 60px 40px;
      max-width: 1000px;
      margin: auto;
      position: relative;
      background-color: var(--card-bg);
      border-radius: 12px;
      box-shadow: var(--card-shadow);
      margin-top: 40px;
      margin-bottom: 40px;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(58, 134, 255, 0.2);
    }

    section::before {
      content: "";
      position: absolute;
      top: -2px;
      right: -2px;
      bottom: -2px;
      left: -2px;
      background: var(--gradient-3);
      border-radius: 14px;
      z-index: -1;
      opacity: 0.4;
    }

    section h2 {
      color: var(--primary-color);
      font-size: 2.4rem;
      margin-bottom: 25px;
      border-bottom: 2px solid var(--secondary-color);
      padding-bottom: 12px;
      font-weight: 700;
      letter-spacing: 1px;
      display: inline-block;
      text-shadow: 0 0 10px rgba(58, 134, 255, 0.5);
    }

    section h3 {
      color: var(--secondary-color);
      font-size: 1.8rem;
      margin: 30px 0 15px;
      font-weight: 600;
      letter-spacing: 0.8px;
      text-shadow: 0 0 8px rgba(131, 56, 236, 0.5);
    }

    section p, li {
      font-size: 1.1rem;
      color: var(--dark-text);
      font-weight: 400;
      line-height: 1.7;
      letter-spacing: 0.3px;
      margin-bottom: 15px;
    }

    ul {
      list-style-type: none;
      padding-left: 25px;
      margin: 10px 0 20px;
    }

    ul li {
      position: relative;
      padding-left: 20px;
    }

    ul li::before {
      content: ">";
      color: var(--accent-color);
      font-family: 'Fira Code', monospace;
      font-size: 1.2rem;
      position: absolute;
      left: 0;
      top: -2px;
    }

    .number-tag {
      display: inline-block;
      background: var(--gradient-2);
      color: var(--light-text);
      font-weight: bold;
      padding: 8px 16px;
      border-radius: 30px;
      margin-bottom: 15px;
      font-size: 1.1rem;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    .vision-container {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      margin-top: 30px;
    }

    .vision-card {
      flex: 1 1 400px;
      background-color: rgba(25, 25, 40, 0.9);
      border-radius: 12px;
      padding: 30px;
      margin-bottom: 20px;
      box-shadow: var(--card-shadow);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border-top: 5px solid var(--accent-color);
      position: relative;
      overflow: hidden;
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    }

    .vision-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    }

    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 30px;
    }

    .contact-item {
      background-color: rgba(25, 25, 40, 0.8);
      border-radius: 12px;
      padding: 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      box-shadow: var(--card-shadow);
      transition: transform 0.3s ease;
      position: relative;
      overflow: hidden;
      z-index: 1;
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
    }

    .contact-item::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 5px;
      background: var(--gradient-1);
      z-index: -1;
    }

    .contact-item:hover {
      transform: translateY(-5px);
    }

    .contact-item h3 {
      position: relative;
      z-index: 1;
    }

    .contact-item p {
      margin: 10px 0;
      position: relative;
      z-index: 1;
    }

    .contact-item a {
      color: var(--primary-color);
      text-decoration: none;
      transition: color 0.3s ease;
      position: relative;
      z-index: 1;
    }

    .contact-item a:hover {
      color: var(--accent-color);
      text-decoration: underline;
    }

    footer {
      text-align: center;
      padding: 20px;
      background: rgba(10, 10, 25, 0.9);
      color: var(--light-text);
      margin-top: auto;
      border-top: 1px solid rgba(131, 56, 236, 0.3);
      text-shadow: 0 0 5px var(--primary-color);
    }

    /* Chatbot */
    df-messenger {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 10000;
      --df-messenger-button-titlebar-color: var(--secondary-color);
      --df-messenger-button-titlebar-font-color: var(--light-text);
      --df-messenger-button-titlebar-font-family: 'Poppins', sans-serif;
      --df-messenger-chat-background-color: rgba(15, 15, 25, 0.95);
      --df-messenger-font-family: 'Poppins', sans-serif;
      --df-messenger-font-color: var(--card-bg);/*welcome message*/
      --df-messenger-send-icon-fill-color: var(--accent-color);
      --df-messenger-user-message-background-color: var(--primary-color);
      --df-messenger-agent-message-background-color: rgba(25, 25, 40, 0.8);
      --df-messenger-agent-message-font-color: var(--dark-text);
      --df-messenger-input-font-color: var(--dark-text);
      --df-messenger-input-placeholder-font-color: #888;
      --df-messenger-input-background-color: rgba(30, 30, 45, 0.9);
      --df-messenger-chat-header-font-color: var(--light-text);
    }
  </style>

  <!-- Dialogflow Messenger -->
  <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
</head>
<body>
  <!-- Code Background -->
  <div id="code-background"></div>

  <header>
    <h1>Owam Duna</h1>
    <nav>
      <a href="#introduction">Introduction</a>
      <a href="#about">About Me</a>
      <a href="#vision">My Vision</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <!-- Introduction -->
  <div class="intro">
    <h2>Hello, I'm Owam 👋</h2>
    <p>Python Developer | Creative Thinker | <span class="typed-text">Capacity@APACITI Student</span></p>
  </div>

  <!-- Introduction Section -->
  <section id="introduction">
    <h2>Introduction</h2>
    <p>
      Before diving into my journey and work, here's a brief look at who I am and why this portfolio matters. 
      It's a glimpse into my background, my passion for technology, and the path I'm carving for myself in the digital world.
    </p>
    <p>
      Hello, my name is Owam Duna, and I'm a passionate and curious individual from Qamata Basin (Enyongwane), 
      a rural area in Cofimvaba, Eastern Cape. I started my schooling at Inkqwiliso J.S.S and completed high school at Cofimvaba S.S.S.
    </p>
    <p>
      My interest in technology grew when I moved to George, where I studied System Development for one year through the Isivande Projects. 
      That's where I was introduced to programming and started creating digital solutions to solve real-world challenges.
    </p>
    <p>
      Currently, I am part of the Capacity@APACITI Demand Academy 2 program in Cape Town, under the April 2025 intake. 
      This experience is expanding my skills in both digital literacy and professional readiness.
    </p>
  </section>

  <!-- About Me -->
  <section id="about">
    <h2>About Me</h2>
    <p>
      I'm a motivated and passionate aspiring developer from Qamata Basin, currently based in Cape Town. 
      I enjoy solving real-world problems using technology. I have experience working with Python, 
      building systems like student tracking tools, and I'm currently exploring AI tools like chatbots.
    </p>
    <p>
      This portfolio is a reflection of my growth, learning journey, and hands-on experience in the field of technology.
    </p>
    <p>Inside, you'll find:</p>
    <ul>
      <li>Projects I've worked on</li>
      <li>My technical skills and tools I've used</li>
      <li>Personal reflections and development</li>
      <li>My goals and where I see myself going next</li>
    </ul>
    <p>
      It's more than just a collection of work — it's a story of where I come from, what I've learned, and how I'm building a future in tech.
    </p>
    <p>
      I envision building my own tech lab in my home village of Qamata Basin in the Eastern Cape. Growing up in a rural area, 
      I witnessed the daily struggles of limited access to digital tools, resources, and opportunities. After finishing Grade 12 and being 
      exposed to a completely different environment—one with accessible technology and learning spaces—I realized the massive gap between 
      rural and urban opportunities.
    </p>
    <p>
      My dream is to close that gap by creating a space where young people from my community can learn, experiment, 
      and grow in the world of technology—right at home. I believe real change starts where you are, and I'm committed to being that change.
    </p>
  </section>

  <!-- Vision and Mission -->
  <section id="vision">
    <h2>My Vision & Mission</h2>
    
    <h3>My Mission</h3>
    <p>
      My mission is to grow my digital and IT skills by immersing myself in various tech industries and gaining hands-on experience 
      across different fields. I believe that true understanding comes from doing, and my goal is to become equipped with practical 
      knowledge that I can take back to my village in Qamata Basin.
    </p>
    <p>
      I am also committed to building strong relationships with experienced tech professionals—mentors, collaborators, and peers—who 
      can support me on this journey. With their guidance and my dedication, I aim to one day empower the youth in my community by 
      teaching them valuable tech skills and creating opportunities they currently don't have access to.
    </p>
    
    <h3>My Vision</h3>
    <div class="vision-container">
      <div class="vision-card">
        <div class="number-tag">01.</div>
        <h3>Building a Tech Lab in My Rural Hometown</h3>
        <p>
          I envision establishing a fully equipped tech lab in my home village of Qamata Basin, Cofimvaba. Growing up in a rural area, 
          I experienced the lack of access to digital resources and educational tools. My dream is to bring those tools closer to 
          young people in my community—to empower them with the same opportunities I've discovered beyond my hometown.
        </p>
      </div>
      
      <div class="vision-card">
        <div class="number-tag">02.</div>
        <h3>Bridging the Digital Divide Through Empowerment</h3>
        <p>
          I want to create a space where innovation, creativity, and learning thrive. My goal is to not only teach digital skills but 
          to inspire a new generation of thinkers, coders, and builders who believe in their potential. By creating this lab, 
          I aim to bridge the gap between rural and urban opportunities in the tech space.
        </p>
      </div>
    </div>
  </section>

  <!-- Projects -->
  <section id="projects">
    <h2>My Projects</h2>
    <ul>
      <li><strong>2-Rand System:</strong> A Python-based app to track late and absent students.</li>
      <li><strong>AI Chatbot:</strong> An interactive chatbot built using Dialogflow to help users learn about AI fundamentals.</li>
      <li><strong>Presentation Tools:</strong> Created educational content using Canva, PowerPoint, and Miro to reflect and present learning outcomes.</li>
    </ul>
  </section>

  <!-- Contact -->
  <section id="contact">
    <h2>Contact Me</h2>
    <p>
      I'm always open to new opportunities, collaborations, and conversations. Whether you want to discuss tech, share ideas, 
      or explore ways we can work together, feel free to reach out. I look forward to connecting with like-minded people and growing together.
    </p>
    
    <div class="contact-grid">
      <div class="contact-item">
        <h3>Email</h3>
        <p><a href="mailto:owam.duna@capaciti.org.za">owam.duna@capaciti.org.za</a></p>
        <p><a href="mailto:owamduna14@gmail.com">owamduna14@gmail.com</a></p>
      </div>
      
      <div class="contact-item">
        <h3>Phone</h3>
        <p>069 827 6762</p>
      </div>
      
      <div class="contact-item">
        <h3>Address</h3>
        <p>5592 Crescent Umnga street, Langa, Cape Town</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    © 2025 Owam Duna. All rights reserved.
  </footer>

  <!-- Chatbot -->
  <df-messenger
    intent="WELCOME"
    chat-title="Duna's Textbot"
    agent-id="28597d02-f7a8-48a5-8da2-b78d00ce85f8"
    language-code="en">
  </df-messenger>

  <!-- Code Rain Script -->
  <script>
    // Code snippets for the animation
    const codeSnippets = [
      "def greet_user():",
      "    name = input('Enter your name: ')",
      "    print(f'Hello, {name}!')",
      "    return name",
      "",
      "class Student:",
      "    def __init__(self, name, id):",
      "        self.name = name",
      "        self.id = id",
      "        self.attendance = []",
      "",
      "    def mark_present(self, date):",
      "        self.attendance.append({'date': date, 'status': 'present'})",
      "",
      "def calculate_fine(days_late):",
      "    return days_late * 2  # 2 Rand per day",
      "",
      "import datetime",
      "import random",
      "import pandas as pd",
      "import numpy as np",
      "import matplotlib.pyplot as plt",
      "",
      "# 2-Rand System",
      "def track_attendance(students):",
      "    today = datetime.date.today()",
      "    for student in students:",
      "        status = check_status(student)",
      "        if status == 'late':",
      "            fine = calculate_fine(1)",
      "            print(f'{student.name} is late. Fine: R{fine}')",
      "",
      "def analyze_data(data):",
      "    df = pd.DataFrame(data)",
      "    return df.describe()",
      "",
      "# AI Chatbot functions",
      "def process_message(message):",
      "    keywords = extract_keywords(message)",
      "    intent = determine_intent(keywords)",
      "    return generate_response(intent)",
      "",
      "# Portfolio website",
      "document.addEventListener('DOMContentLoaded', function() {",
      "    const sections = document.querySelectorAll('section');",
      "    sections.forEach(section => {",
      "        section.addEventListener('mouseenter', () => {",
      "            section.style.transform = 'scale(1.01)';",
      "        })",
      "    })",
      "})",
      "",
      "# Qamata Basin Tech Lab",
      "class TechLab:",
      "    def __init__(self, location, capacity):",
      "        self.location = location",
      "        self.capacity = capacity",
      "        self.computers = []",
      "        self.students = []",
      "",
      "    def add_computer(self, specs):",
      "        self.computers.append(specs)",
      "        print(f'Added new computer: {specs}')",
      "",
      "    def register_student(self, student):",
      "        self.students.append(student)",
      "        print(f'Welcome {student.name} to the tech lab!')",
      "",
      "# Data visualization",
      "def create_chart(data, chart_type='bar'):",
      "    plt.figure(figsize=(10, 6))",
      "    if chart_type == 'bar':",
      "        plt.bar(data.keys(), data.values())",
      "    elif chart_type == 'pie':",
      "        plt.pie(data.values(), labels=data.keys())",
      "    plt.title('Data Analysis')",
      "    plt.savefig('chart.png')"
    ];

    // Initialize the code rain
    function initCodeRain() {
      const background = document.getElementById('code-background');
      const windowWidth = window.innerWidth;
      const numColumns = Math.floor(windowWidth / 20); // Adjust for density
      
      for (let i = 0; i < numColumns; i++) {
        createCodeColumn(background, i * 20, Math.random() * 2000);
      }
    }

    // Create a single column of falling code
    function createCodeColumn(parent, xPos, delay) {
      const column = document.createElement('div');
      column.className = 'code-column';
      column.style.left = `${xPos}px`;
      
      // Randomly choose between blue and green text for variety
      column.style.color = Math.random() > 0.7 ? 'var(--code-blue)' : 'var(--code-green)';
      column.style.opacity = 0.1 + Math.random() * 0.6; // Random opacity
      column.style.fontSize = `${12 + Math.floor(Math.random() * 4)}px`; // Random size
      
      // Set text content - a random snippet from our code collection
      column.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      
      parent.appendChild(column);
      
      // Set animation
      setTimeout(() => {
        const duration = 10000 + Math.random() * 15000; // Random duration between 10 and 25 seconds
        column.style.transition = `top ${duration}ms linear`;
        column.style.top = '100%';
        
        // When this animation completes, reset and start again
        setTimeout(() => {
          column.style.transition = 'none';
          column.style.top = '-1000px';
          column.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
          
          // Use requestAnimationFrame to ensure smooth animation restart
          requestAnimationFrame(() => {
            setTimeout(() => {
              column.style.transition = `top ${duration}ms linear`;
              column.style.top = '100%';
            }, 50);
          });
        }, duration);
      }, delay);
    }

    // Typing effect for intro text
    function setupTypingEffect() {
      const typedElements = document.querySelectorAll('.typed-text');
      
      typedElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        let i = 0;
        
        function typeNextChar() {
          if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typeNextChar, 100);
          }
        }
        
        setTimeout(typeNextChar, 1000);
      });
    }

    // Handle window resize
    function handleResize() {
      const background = document.getElementById('code-background');
      background.innerHTML = ''; // Clear existing columns
      initCodeRain(); // Recreate columns based on new window size
    }

    // Initialize everything when the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', function() {
      initCodeRain();
      setupTypingEffect();
      window.addEventListener('resize', handleResize);
    });
  </script>
</body>
</html>
