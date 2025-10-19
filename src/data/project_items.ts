import type {WorkItem} from "./work_items";


export const PROJECT_ITEMS: WorkItem[] = [
    {
        id: "caic",
        title: "CAIC Forecast Data",
        role: "ML Classification Project",
        subtext: "ML/AI full stack app that ingests avalanche forecast summaries and presents model‑driven danger levels by elevation band.",
        tech: [{"name": "FastAPI", "badge": "secondary"}, {"name": "pytorch", "badge": "warning"}, {"name": "React", "badge": "success"}, {"name": "Typescript", "badge": "accent"}, {"name": "Docker", "badge": "neutral"}, {"name": "GCP", "badge": "warning"}, {"name": "scikit-learn", "badge": "success"}],
        period: "2025",
        img: "projects/caic-project.png",
        link: "https://caic.uelski.dev/",
        github: "https://github.com/uelski/caic-skier-brief"
    },
    {
        id: "rag-server",
        title: "PDF RAG Server",
        role: "AI/RAG with VectorDB",
        subtext: "The FastAPI backend for a PDF RAG application that uses a vector database to store and query PDF documents.",
        tech: [{"name": "FastAPI", "badge": "secondary"}, {"name": "Pinecone", "badge": "warning"}, {"name": "OpenAI Embeddings", "badge": "primary"}, {"name": "Docker", "badge": "neutral"}, {"name": "GCP", "badge": "warning"}],
        period: "2025",
        img: "projects/rag-project.png",
        link: "https://rag.uelski.dev/",
        github: "https://github.com/uelski/rag-context-server"
    },
    {
        id: "rag-client",
        title: "PDF RAG Client",
        role: "Vite/React frontend for the PDF RAG Server",
        subtext: "The frontend for the PDF RAG application that allows users to upload PDFs and query them.",
        tech: [{"name": "Vite", "badge": "secondary"}, {"name": "React", "badge": "success"}, {"name": "Typescript", "badge": "accent"}, {"name": "Mantine UI", "badge": "info"}, {"name": "Cloudflare Workers", "badge": "warning"}],
        period: "2025",
        img: "projects/rag-project.png",
        link: "https://rag.uelski.dev/",
        github: "https://github.com/uelski/rag-context-client"
    },
    {
        id: "mcp",
        title: "MCP POC",
        role: "MCP Client and Server",
        subtext: "A NestJS server that implements the MCP protocol with an MCP client and MCP server that connects to appliance data to provide context to LLM prompts.",
        tech: [{"name": "NestJS", "badge": "secondary"}, {"name": "MCP", "badge": "warning"}, {"name": "Typescript", "badge": "accent"}, {"name": "Gemini", "badge": "warning"}, {"name": "LLMs", "badge": "error"}],
        period: "2025",
        img: "projects/mcp-default.png",
    },
]