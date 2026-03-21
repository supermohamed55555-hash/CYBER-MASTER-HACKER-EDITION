// Cyber Master JavaScript and Matrix Effect

// Modules Data extracted from the reference site
const modules = [
    {
        id: "CH-1",
        title: "Introduction to Computers & Networks",
        description: "What is a computer? IPO Cycle, Hardware vs Software, History & Future, plus an ultimate guide to Computer Networks and Topologies.",
        link: "chapter1.html"
    },
    {
        id: "SEC-1",
        title: "Basics of Encryption",
        description: "Dive into Cybersecurity! What is Encryption? Caesar Cipher, Columnar Transposition, and how to protect data from Sniffing.",
        link: "section1.html"
    },
    {
        id: "CH-2",
        title: "Cybersecurity Basics (The CIA Triad)",
        description: "Understand the core of Information Security. CIA Triad, Attack Surfaces, Malware vs Phishing, and historic Technical Breaches.",
        link: "chapter2.html"
    },
    {
        id: "SEC-2",
        title: "Advanced Classical Ciphers",
        description: "Continue the Crypto journey. Learn ROT13 and the genius of the 5x5 Matrix in the Playfair Cipher. Master encryption rules.",
        link: "section2.html"
    },
    {
        id: "SEC-3",
        title: "Advanced Classical Encryption",
        description: "Multi-shift Vigenère Cipher vs Zigzag Rail Fence. Learn how keywords break patterns, Transposition techniques, and encryption formulas.",
        link: "section3.html"
    },
    {
        id: "CH-3",
        title: "Advanced Cyberattacks & Vulnerabilities",
        description: "Deep dive into DoS, DDoS, MITM, SYN Floods, and Buffer Overflows. Understand how vulnerabilities turn into full-scale attacks.",
        link: "chapter3.html"
    },
    {
        id: "CH-4",
        title: "Cryptography Basics Part I",
        description: "The core pillars of encryption. Discover the differences between Symmetric and Asymmetric algorithms, and the unbreakable One-Time Pad.",
        link: "chapter4.html"
    },
    {
        id: "CH-5",
        title: "Cryptography Basics Part II",
        description: "Master the art of Cryptanalysis. Learn Alice, Bob, and Oscar attack mechanics, Brute-Force limits, Substitution Ciphers, and Rail Fence reconstruction.",
        link: "chapter5.html"
    },
    {
        id: "DICT",
        title: "Cyber Dictionary & Glossary",
        description: "A comprehensive dual-language (English/Arabic) dictionary of every term taught. Search, filter, and study hardware, networking, and cryptography concepts.",
        link: "chapter_glossary.html",
        special: true
    },
    {
        id: "QUIZ",
        title: "The Ultimate Cyber Exam Arena",
        description: "Test your theoretical knowledge with an extensive 31-question interactive MCQ exam, and crack 20 practical cryptanalysis missions.",
        link: "chapter_quiz.html",
        special: true
    }
];

// Matrix Background Effect
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrix() {
    ctx.fillStyle = "rgba(11, 15, 25, 0.07)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00e5ff"; // Cyan color
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 33);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Populate Cyber Roadmap instead of Cards
const container = document.getElementById('modules-container');
container.className = 'roadmap-container'; // Override old grid class
container.innerHTML = ''; // Clear just in case

// Inject Roadmap specific CSS
const roadmapStyle = document.createElement('style');
roadmapStyle.textContent = `
    .roadmap-container {
        display: flex;
        flex-direction: column;
        position: relative;
        max-width: 1000px;
        margin: 60px auto;
        padding: 0 20px;
    }
    
    /* Central Glowing Line */
    .roadmap-container::before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        width: 4px;
        background: var(--primary-color);
        box-shadow: 0 0 15px var(--primary-color);
        transform: translateX(-50%);
        border-radius: 2px;
    }

    .roadmap-item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        margin-bottom: 60px;
        position: relative;
    }

    /* Alternate Sides */
    .roadmap-item:nth-child(even) {
        justify-content: flex-end;
    }

    .roadmap-card {
        width: 45%; /* leaves 10% gap in middle */
        background: rgba(10, 15, 20, 0.9);
        border: 1px solid var(--secondary-color);
        padding: 30px;
        border-radius: 8px;
        text-decoration: none;
        color: white;
        transition: 0.4s;
        position: relative;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    }

    .roadmap-card:hover {
        border-color: var(--primary-color);
        box-shadow: inset 0 0 15px rgba(0, 229, 255, 0.1), 0 0 25px rgba(0, 229, 255, 0.4);
        transform: translateY(-5px);
    }

    /* The Glowing Dot */
    .roadmap-dot {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 24px;
        height: 24px;
        background: #000;
        border: 4px solid var(--primary-color);
        border-radius: 50%;
        box-shadow: 0 0 15px var(--primary-color), 0 0 30px var(--primary-color);
        z-index: 2;
    }

    /* Connecting Lines from card to center */
    .roadmap-item:nth-child(odd) .roadmap-card::after {
        content: '';
        position: absolute;
        top: 50%;
        right: -11.11%; /* Connects the 45% width card across the 5% gap to the 50% center */
        width: 11.11%;
        height: 2px;
        background: var(--primary-color);
        box-shadow: 0 0 10px var(--primary-color);
        transform: translateY(-50%);
        z-index: 1;
    }

    .roadmap-item:nth-child(even) .roadmap-card::after {
        content: '';
        position: absolute;
        top: 50%;
        left: -11.11%;
        width: 11.11%;
        height: 2px;
        background: var(--primary-color);
        box-shadow: 0 0 10px var(--primary-color);
        transform: translateY(-50%);
        z-index: 1;
    }

    .roadmap-id {
        color: var(--primary-color);
        font-family: var(--font-code);
        font-size: 1.2rem;
        margin-bottom: 15px;
        display: block;
        letter-spacing: 2px;
    }

    .roadmap-item:nth-child(odd) .roadmap-id { text-align: left; }
    .roadmap-item:nth-child(even) .roadmap-id { text-align: right; }

    .roadmap-title {
        color: #fff;
        font-size: 1.5rem;
        margin-bottom: 15px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .roadmap-desc {
        color: #94a3b8;
        line-height: 1.6;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    /* Animation */
    @keyframes slideInLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
    @keyframes slideInRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }

    /* Mobile Responsive Roadmap */
    @media (max-width: 768px) {
        .roadmap-container::before {
            left: 20px; /* move line to the extreme left */
        }
        .roadmap-dot {
            left: 20px;
        }
        .roadmap-card {
            width: calc(100% - 60px);
            margin-left: 60px;
        }
        .roadmap-item:nth-child(odd), .roadmap-item:nth-child(even) {
            justify-content: flex-end; /* All cards snap to the right */
        }
        .roadmap-item:nth-child(odd) .roadmap-card::after,
        .roadmap-item:nth-child(even) .roadmap-card::after {
            left: -60px; /* Line width to connect card to the vertical line */
            right: auto;
            width: 60px;
        }
        .roadmap-item:nth-child(odd) .roadmap-id,
        .roadmap-item:nth-child(even) .roadmap-id {
            text-align: left;
        }
    }
`;
document.head.appendChild(roadmapStyle);

modules.forEach((module, index) => {
    let animationName = index % 2 === 0 ? 'slideInLeft' : 'slideInRight';
    const delay = index * 0.2;
    
    // Create the HTML structure for the roadmap item
    const roadmapHtml = `
        <div class="roadmap-item">
            <div class="roadmap-dot"></div>
            <a href="${module.link}" class="roadmap-card" style="animation: ${animationName} 0.6s ${delay}s ease forwards; opacity: 0;">
                <span class="roadmap-id">[${module.id}]</span>
                <h2 class="roadmap-title">${module.title}</h2>
                <p class="roadmap-desc" ${/[\u0600-\u06FF]/.test(module.description) ? 'dir="rtl" style="text-align:right;"' : ''}>${module.description}</p>
                <div style="margin-top: 20px; color: #0f0; font-family: var(--font-code); font-size: 0.9rem;">
                    [ CLICK TO INITIALIZE NODE ]
                </div>
            </a>
        </div>
    `;
    container.innerHTML += roadmapHtml;
});

// Terminal Typing Effect
const terminalText = "./initiate_learning_protocol.sh -verbose --bypass-firewall";
const typingEl = document.querySelector('.typing-text');
typingEl.innerHTML = '';
let charIndex = 0;

function typeTerminal() {
    if (charIndex < terminalText.length) {
        typingEl.innerHTML += terminalText.charAt(charIndex);
        charIndex++;
        setTimeout(typeTerminal, Math.random() * 50 + 30);
    }
}

setTimeout(typeTerminal, 1000);
