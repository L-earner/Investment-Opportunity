import React, { useState } from 'react';
import { Search, TrendingUp, Building2, ArrowRight } from 'lucide-react';
import CompanyCard from './components/CompanyCard';
import { mockAnalyzeInput } from './utils/mockAnalysis';
import type { Company } from './types';

function App() {
  const [userInput, setUserInput] = useState('');
  const [results, setResults] = useState<Company[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalysis = async () => {
    setIsAnalyzing(true);
    // Simulating API call with mock data
    const companies = await mockAnalyzeInput(userInput);
    setResults(companies);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="w-8 h-8 text-emerald-400" />
            <h1 className="text-4xl font-bold">Market Insight Engine</h1>
          </div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Share your observations about recent events, trends, or future predictions. 
            Our AI will analyze your input and suggest companies positioned to benefit.
          </p>
        </header>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-slate-800/50 p-6 rounded-xl shadow-xl backdrop-blur-sm">
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Example: I believe remote work will continue to grow, and cybersecurity concerns are increasing..."
              className="w-full h-32 bg-slate-700/50 text-white placeholder-slate-400 rounded-lg p-4 mb-4 focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            />
            <button
              onClick={handleAnalysis}
              disabled={!userInput.trim() || isAnalyzing}
              className="flex items-center justify-center gap-2 w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              {isAnalyzing ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Analyzing...
                </div>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  Analyze Opportunities
                </>
              )}
            </button>
          </div>
        </div>

        {results.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xl font-semibold text-emerald-400 mb-6">
              <Building2 className="w-6 h-6" />
              <h2>Suggested Companies</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((company) => (
                <CompanyCard key={company.id} company={company} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;