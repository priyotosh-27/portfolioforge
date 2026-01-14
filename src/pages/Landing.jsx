import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 text-white flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold mb-4">PortfolioForge</h1>
            <p className="mb-8 text-lg text-slate-300">
                Build your professional portfolio with AI
            </p>
            <Link
                to="/builder"
                className="px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-700"
            >
                Launch Builder
            </Link>
        </div>
    );
}
