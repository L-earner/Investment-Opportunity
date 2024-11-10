import type { Company } from '../types';

const companyDatabase: Company[] = [
  {
    id: '1',
    name: 'CyberGuard Technologies',
    ticker: 'CGRD',
    description: 'Leading provider of enterprise cybersecurity solutions and cloud security infrastructure.',
    sector: 'Technology',
    marketCap: 45.2,
    trend: 2.8,
    matchReason: 'Strong position in cloud security and remote work infrastructure protection.'
  },
  {
    id: '2',
    name: 'GreenTech Solutions',
    ticker: 'GRTS',
    description: 'Innovative clean energy solutions and sustainable technology development.',
    sector: 'Clean Energy',
    marketCap: 28.6,
    trend: 4.2,
    matchReason: 'Leading the transition to renewable energy with breakthrough battery technology.'
  },
  {
    id: '3',
    name: 'HealthTech Innovations',
    ticker: 'HTIV',
    description: 'Digital health platform providing telemedicine and AI-driven diagnostics.',
    sector: 'Healthcare',
    marketCap: 32.1,
    trend: -1.4,
    matchReason: 'Revolutionary AI-powered diagnostic tools and virtual health solutions.'
  }
];

export const mockAnalyzeInput = async (input: string): Promise<Company[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // In a real implementation, this would use AI to analyze the input
  // and match it against a real company database
  return companyDatabase;
};