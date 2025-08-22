import project1Thumb from '../assets/images/projects/project1-thumb.png';
import project3Thumb from '../assets/images/projects/project3-thumb.png';
import project4Thumb from '../assets/images/projects/project4-thumb.png';
import project5Thumb from '../assets/images/projects/project5-thumb.png';

import project1Screen1 from '../assets/images/projects/project1-screen1.png';
import project1Screen2 from '../assets/images/projects/project1-screen2.png';


import project3Screen1 from '../assets/images/projects/project3-screen1.png';
import project3Screen2 from '../assets/images/projects/project3-screen2.png';
import project3Screen3 from '../assets/images/projects/project3-screen3.png';
import project3Screen4 from '../assets/images/projects/project3-screen4.png';
import project3Screen5 from '../assets/images/projects/project3-screen5.png';
import project3Screen6 from '../assets/images/projects/project3-screen6.png';
import project3Screen7 from '../assets/images/projects/project3-screen7.png';
import project3Screen8 from '../assets/images/projects/project3-screen8.png';
import project3Screen9 from '../assets/images/projects/project3-screen9.png';
import project3Screen10 from '../assets/images/projects/project3-screen10.png';


export const projectsData = [
    {
        id: 1,
        projectName: 'Fynder.AI',
        projectDesc: 'Fynder AI is an AI-powered search engine for finding flights, hotels, rentals, jobs, and more.',
        projectDetailedDesc: 'Fynder.AI is a next-generation AI-powered search and discovery platform that blends generative intelligence with vertical, localized search across many domains. It enables users to search for flights, hotels, car rentals, jobs, homes for sale or rent, products, and services, while also offering advanced research tools and a resume analyzer for job seekers. Built as an "AI of Everything", Fynder delivers both deep research capabilities and precise, actionable search results.\n\nAt the heart of the platform is Pearl, a proprietary large language model that I personally helped develop from the ground up. I worked on its mixture-of-experts architecture, optimized for custom tool calling and contextual reasoning, and designed intricate, niche benchmarks to rigorously compare its performance against both open-source and closed-source LLMs. This benchmarking process ensured Pearl delivers domain-specific accuracy, efficiency, and reliability.',
        tags: ['Transformers', 'PyTorch', 'Huggingface', 'Python'],
        demo: 'https://fynder.ai/',
        image: project1Thumb, 
        screenshots: [
            { 
                image: project1Screen1, 
                caption: 'Homepage with main features'
            },
            { 
                image: project1Screen2, 
                caption: 'User dashboard view'
            }
        ]
    },
    {
        id: 3,
        projectName: 'StaffSync.AI',
        projectDesc: 'StaffSync.AI is a lightweight HR assistant for leave management and HR policy search, powered by local or OpenAI models.',
        projectDetailedDesc: 'StaffSync.AI is a pragmatic, small-footprint HR copilot built around three everyday workflows: checking leave balances, filing leave requests, and answering HR policy questions. It ships as a single-page Flask app with an OTP-based auth flow for privileged actions. Behind the scenes, the assistant uses function-calling tools to read/write Google Sheets (Balances, Directory, Logs), and a ChromaDB-backed vector index to search your own PDFs/TXTs for policy answers (RAG).\n\nLeave approvals are simple: when an authenticated employee submits a request, the team lead receives an email and approves or rejects by replying with Y or N. A separate IMAP watcher picks up the decision, updates the Logs sheet, adjusts balances on approval, and notifies the employee.\n\nYou can run StaffSync.AI fully locally, just point it at a quantized Llama 3.1 8B Instruct on modest GPU hardware, or fall back to OpenAI by omitting the local model ID. The local model will use a tool/validation pipeline and includes a repair/retry loop (Pydantic-validated schemas) to keep tool calls robust even when model outputs are imperfect. Optional ngrok support makes quick external demos easy.\n\nThe codebase is intentionally small and clear: Flask endpoints for chat and OTP verification, a lightweight front end (HTML/CSS/JS), utilities for Sheets and email, a RAG loader/query module, and explicit validation/guardrails. It is designed to be forkable and extensible. Add more tools, fine-tune smaller models, wire in RBAC, or expand the RAG sources as your HR knowledge grows.',
        tags: [
            "Python",
            "Flask",
            "HTML/CSS/JS",
            "SMTP OTP",
            "IMAP",
            "ChromaDB",
            "Hugging Face",
            "OpenAI",
            "Pydantic",
            "Ngrok",
            ],
        code: 'https://github.com/SameedHusayn/staffsync-ai',
        image: project3Thumb,
        screenshots: [
            {
                image: project3Screen1,
                caption: 'Chat View'
            },
            {
                image: project3Screen2,
                caption: 'OTP Modal'
            },
            {
                image: project3Screen3,
                caption: 'OTP Email'
            },
            {
                image: project3Screen4,
                caption: 'Function Calling'
            },
            {
                image: project3Screen5,
                caption: 'Email to Lead about Leave Request'
            },
            {
                image: project3Screen6,
                caption: 'Leave Approved'
            },
            {
                image: project3Screen7,
                caption: 'Leaves Logs'
            },
            {
                image: project3Screen8,
                caption: 'Leaves Balance'
            },
            {
                image: project3Screen9,
                caption: 'Employee Directory'
            },
            {
                image: project3Screen10,
                caption: 'Leave Change Reflected'
            }
        ]
    },
    {
        id: 4,
        projectName: 'ResumeRadar',
        projectDesc: 'An automated resume screening workflow using n8n, Gmail, Gemini AI, Airtable, Google Drive, and Google Sheets.',
        projectDetailedDesc: 'ResumeRadar is an automation workflow for recruiters that streamlines the process of handling job applications. Built on n8n and running in Docker, it continuously monitors a Gmail inbox for incoming resumes, extracts and stores them in Google Drive, and uses Gemini to analyze the resume content against job descriptions stored in Airtable. Each candidate is automatically scored and matched to open positions, with results organized in Google Sheets for easy review and collaboration.\n\nThe workflow is modular and includes Gmail triggers, attachment processors, job matchers, AI-powered analysis nodes, and integrations with Google Drive, Airtable, and Google Sheets. Recruiters can see at a glance candidate details, AI scores, and resume links in a centralized dashboard, while the original files are safely archived.\n\nConfiguration is handled through environment variables and OAuth credentials for the Google APIs, plus an Airtable token and Gemini API key. Deployment is flexible, supporting local Docker setups, self-hosted servers with SSL, or n8n Cloud. The design makes it easy to extend with features like automated candidate replies, interview scheduling, or analytics dashboards.',
        tags: [
            "n8n",
            "Docker",
            "Gemini",
            "Gmail",
            "Drive",
            "Sheets",
            "Airtable"
            ],
        code: 'https://github.com/SameedHusayn/ResumeRadar',
        demo: 'https://n8n.io/workflows/7469/',
        image: project4Thumb,
        screenshots: []
    },
    {
        id: 5,
        projectName: 'Voice Assistant',
        projectDesc: 'A real-time voice assistant that transcribes speech, detects silence (for turn), replies with GPT, and speaks back via TTS.',
        projectDetailedDesc: 'This project is a Python-based, low-latency voice assistant designed for natural, back-and-forth conversation. It captures your microphone audio, detects speech/silence, streams the audio to a highly optimized Whisper implementation (Faster-Whisper) for near real-time transcription, sends the running transcript and conversation history to a GPT model for context-aware responses, and then converts the models reply to speech so you hear the answer immediately. You can use it either from the command line or through a Gradio web interface that provides a big "record" button, live transcripts, and the assistants spoken/text replies.\n\nUnder the hood, a modular pipeline coordinates audio I/O, streaming STT, LLM token streaming, and TTS so each stage overlaps for minimal delay. Configurable settings (models, language, silence thresholds, TTS rate) live in config.py, and the system tracks timing for each stage to surface performance metrics. Each session can be saved to conversation.json with the full transcript and timing stats, making it easy to review interactions or profile latency. The TTS layer ships with Windows support and is structured to be easily extended (e.g., espeak on Linux or say on macOS).',
        tags: [
            "Whisper",
            "TTS",
            "SoundDevice",
            "NumPy",
            "Gradio",
            "GPT"
        ],
        code: 'https://github.com/SameedHusayn/AI-Calling',
        image: project5Thumb,
        screenshots: []
    }
]