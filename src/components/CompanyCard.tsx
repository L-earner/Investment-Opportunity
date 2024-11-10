import React from 'react';
import { ExternalLink, TrendingUp, TrendingDown } from 'lucide-react';
import type { Company } from '../types';

interface CompanyCardProps {
  company: Company;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-1">{company.name}</h3>
          <span className="text-sm text-slate-400">{company.ticker}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-sm ${company.trend >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {company.trend >= 0 ? '+' : ''}{company.trend}%
          </span>
          {company.trend >= 0 ? 
            <TrendingUp className="w-4 h-4 text-emerald-400" /> : 
            <TrendingDown className="w-4 h-4 text-red-400" />
          }
        </div>
      </div>
      
      <p className="text-slate-300 text-sm mb-4">{company.description}</p>
      
      <div className="space-y-2">
        <div className="text-sm">
          <span className="text-slate-400">Market Cap: </span>
          <span className="text-white">${company.marketCap}B</span>
        </div>
        <div className="text-sm">
          <span className="text-slate-400">Sector: </span>
          <span className="text-white">{company.sector}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-700">
        <h4 className="text-sm font-semibold text-emerald-400 mb-2">Why it matches:</h4>
        <p className="text-sm text-slate-300">{company.matchReason}</p>
      </div>

      <a
        href={`https://finance.yahoo.com/quote/${company.ticker}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1 text-sm text-emerald-400 hover:text-emerald-300"
      >
        View Details <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
}

export default CompanyCard;