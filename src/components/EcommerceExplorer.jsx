
import React, { useState, useEffect } from 'react';
import SellerVisibilityBarGraph from './BarGraph';
import PieGraph from './PieGraph';
import ComparisonBar from './ComparisonBar';
import img from "../assets/WhatsApp Image 2025-05-04 at 15.14.02.jpeg"
import img1 from "../assets/Screenshot 2025-05-04 at 3.22.10 PM.png"


const EcommerceExplorer = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [mounted, setMounted] = useState(false);

  // Data for visualizations
  const platformDominanceData = [
    { name: 'Amazon', value: 38 },
    { name: 'Flipkart', value: 32 },
    { name: 'Meesho', value: 12 },
    { name: 'Others', value: 18 },
  ];


  const profitMarginData = [
    { name: 'Large Sellers', value: 11 },
    { name: 'Small Sellers', value: 3.5 },
  ];

  const digitalLiteracyData = [
    { name: 'Lack Adequate Knowledge', value: 60 },
    { name: 'Have Adequate Knowledge', value: 40 },
  ];

  const paymentMethodData = [
    { name: 'Cash', value: 49 },
    { name: 'Checks', value: 29 },
    { name: 'Digital Payments', value: 22 },
  ];

  const CPCComparisonData = [
    { name: 'India', value: 0.8 },
    { name: 'Indonesia', value: 0.21 },
    { name: 'Global Average', value: 0.45 },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset animations when tab changes
  useEffect(() => {
    if (mounted) {
      const elements = document.querySelectorAll('.animate-fade-in, .animate-slide-in');
      elements.forEach(el => {
        el.style.opacity = '0';
        void el.offsetWidth; // Force reflow
        el.style.opacity = null;
      });
    }
  }, [activeTab, mounted]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">India's E-commerce Ecosystem</h1>
          <p className="text-lg md:text-xl opacity-90">Challenges, Insights, and Solutions for Small Sellers</p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto space-x-4 py-4">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 font-medium rounded-md whitespace-nowrap transition-colors duration-300 ${activeTab === 'overview' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('challenges')}
              className={`px-4 py-2 font-medium rounded-md whitespace-nowrap transition-colors duration-300 ${activeTab === 'challenges' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Key Challenges
            </button>
            <button
              onClick={() => setActiveTab('solutions')}
              className={`px-4 py-2 font-medium rounded-md whitespace-nowrap transition-colors duration-300 ${activeTab === 'solutions' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Solutions
            </button>
            <button
              onClick={() => setActiveTab('cld')}
              className={`px-4 py-2 font-medium rounded-md whitespace-nowrap transition-colors duration-300 ${activeTab === 'cld' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              CLD & Feedback Loops
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-8 px-4">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md opacity-0 animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">India's E-commerce Landscape</h2>
              <p className="text-gray-600 mb-4">
                India's e-commerce sector has grown exponentially over the last decade, boasting over 190 million digital shoppers as of 2024. With platforms like Amazon, Flipkart, and Meesho claiming to democratize access, millions of small and local sellers have onboarded in hopes of reaching a broader market.
              </p>
              <p className="text-gray-600">
                However, the promise of digital inclusion often falls short. These sellers face persistent structural barriers—low visibility, inadequate digital literacy, aggressive competition from large sellers, and inflexible platform rules. Their journey is defined more by survival than growth, revealing a deep imbalance in the platform economy.
              </p>
            </div>

            <div className="bg-white p-6 h-[550px] rounded-lg shadow-md opacity-0 animate-fade-in">
            <iframe
        src="https://drive.google.com/file/d/1fzeJ__l5CI_0hD2NH2E4ZFItk1G7GAPQ/preview"
        width="100%"
        height="100%"
        allow="autoplay"
        allowFullScreen
        title="Google Drive Video"
      ></iframe>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PieGraph
                data={platformDominanceData}
                title="Market Share of Major E-Commerce Platforms"
              />
              <PieGraph
                data={paymentMethodData}
                title="Supplier Payment Methods Used by Micro-Merchants"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SellerVisibilityBarGraph />
              <ComparisonBar
                data={profitMarginData}
                title="Average Profit Margins (%)"
                unit="%"
              />
            </div>
          </div>
        )}

        {/* Challenges Tab */}
        {activeTab === 'challenges' && (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md opacity-0 animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Key Challenges Facing Small Sellers</h2>
              <p className="text-gray-600 mb-4">
                The data reveals several systemic challenges that prevent small sellers from thriving in India's e-commerce ecosystem. These challenges create reinforcing feedback loops that further marginalize those with fewer resources.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md opacity-0 animate-slide-in" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Limited Visibility & Algorithmic Bias</h3>
                <p className="text-gray-600 mb-3">
                  70% of small sellers appear only in the bottom 30% of search results on major e-commerce platforms. Algorithms prioritize engagement and historical performance, making it difficult for new or underperforming sellers to gain momentum.
                </p>
                <div className="py-2 px-3 bg-blue-50 border-l-4 border-blue-500 text-blue-700">
                  <p className="font-medium">Impact:</p>
                  <p>Self-reinforcing cycle of obscurity and underperformance</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md opacity-0 animate-slide-in" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Price Competition & Thin Margins</h3>
                <p className="text-gray-600 mb-3">
                  Major platforms give high-volume sellers preferential access to warehouse space and discounted commissions. This reduces their operational costs and allows them to offer prices that small sellers cannot match.
                </p>
                <div className="py-2 px-3 bg-blue-50 border-l-4 border-blue-500 text-blue-700">
                  <p className="font-medium">Impact:</p>
                  <p>Small sellers' average profit margin per order is only 3-4%, compared to 10-12% for large sellers.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PieGraph
                data={digitalLiteracyData}
                title="Digital Literacy Among MSMEs (%)"
              />
              <ComparisonBar
                data={CPCComparisonData}
                title="Facebook Ads Cost Per Click (USD)"
                unit="$"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md opacity-0 animate-slide-in" style={{ animationDelay: '0.5s' }}>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Digital Literacy Divide</h3>
                <p className="text-gray-600 mb-3">
                  Over 60% of MSMEs selling online lack adequate knowledge of digital tools like SEO, performance marketing, and CRM systems. Many are first-generation internet users, unfamiliar with how platforms operate or how to read analytics dashboards.
                </p>
                <div className="py-2 px-3 bg-blue-50 border-l-4 border-blue-500 text-blue-700">
                  <p className="font-medium">Impact:</p>
                  <p>Poor listing quality and missed promotional opportunities</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md opacity-0 animate-slide-in" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Operational & Logistical Challenges</h3>
                <p className="text-gray-600 mb-3">
                  40% of e-commerce grievances pertain to logistics delays, complex return processes, and payment issues. Small sellers often rely on third-party logistics that don't integrate well with e-commerce APIs.
                </p>
                <div className="py-2 px-3 bg-blue-50 border-l-4 border-blue-500 text-blue-700">
                  <p className="font-medium">Impact:</p>
                  <p>Frequent cancellations and refund claims, harming seller ratings</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Solutions Tab */}
        {activeTab === 'solutions' && (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md opacity-0 animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Proposed Solutions</h2>
              <p className="text-gray-600 mb-4">
                To break the negative feedback loops and activate positive change, a multi-faceted approach is required. The following solutions target key leverage points in the system:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Regulatory & Policy</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start opacity-0 animate-slide-in" style={{ animationDelay: '0.5s' }}>
                    <span className="text-green-500 mr-2">•</span>
                    <span>Enforce algorithm transparency on major platforms</span>
                  </li>
                  <li className="flex items-start opacity-0 animate-slide-in" style={{ animationDelay: '0.6s' }}>
                    <span className="text-green-500 mr-2">•</span>
                    <span>Implement tiered commission structure favoring MSMEs</span>
                  </li>
                  <li className="flex items-start opacity-0 animate-slide-in" style={{ animationDelay: '0.7s' }}>
                    <span className="text-green-500 mr-2">•</span>
                    <span>Develop e-commerce specific grievance redressal forums</span>
                  </li>
                  <li className="flex items-start opacity-0 animate-slide-in" style={{ animationDelay: '0.8s' }}>
                    <span className="text-green-500 mr-2">•</span>
                    <span>Create a 'Digital Seller Protection Charter'</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Digital Capacity Building</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start opacity-0 animate-slide-in" style={{ animationDelay: '0.6s' }}>
                    <span className="text-green-500 mr-2">•</span>
                    <span>National-level training campaigns under MeitY & NSDC</span>
                  </li>
                  <li className="flex items-start opacity-0 animate-slide-in" style={{ animationDelay: '0.7s' }}>
                    <span className="text-green-500 mr-2">•</span>
                    <span>Digital credits for SEO tools and ad campaigns</span>
                  </li>
                  <li className="flex items-start opacity-0 animate-slide-in" style={{ animationDelay: '0.8s' }}>
                    <span className="text-green-500 mr-2">•</span>
                    <span>Mentorship programs with tech-savvy entrepreneurs</span>
                  </li>
                  <li className="flex items-start opacity-0 animate-slide-in" style={{ animationDelay: '0.9s' }}>
                    <span className="text-green-500 mr-2">•</span>
                    <span>Simplified analytics tools specifically for small sellers</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Alternative Models</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start opacity-0 animate-slide-in" style={{ animationDelay: '0.7s' }}>
                    <span className="text-green-500 mr-2">•</span>
                    <span>Support development of D2C portals using Shopify, Dukaan, etc.</span>
                  </li>
                  <li className="flex items-start opacity-0 animate-slide-in" style={{ animationDelay: '0.8s' }}>
                    <span className="text-green-500 mr-2">•</span>
                    <span>Facilitate social commerce via WhatsApp, Instagram</span>
                  </li>
                  <li className="flex items-start opacity-0 animate-slide-in" style={{ animationDelay: '0.9s' }}>
                    <span className="text-green-500 mr-2">•</span>
                    <span>Promote ONDC as a public alternative to existing platforms</span>
                  </li>
                  <li className="flex items-start opacity-0 animate-slide-in" style={{ animationDelay: '1s' }}>
                    <span className="text-green-500 mr-2">•</span>
                    <span>MSME-run cooperative warehouses and packaging hubs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* CLD Tab */}
        {activeTab === 'cld' && (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md opacity-0 animate-fade-in">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Causal Loop Diagram & Feedback Loops</h2>
              <p className="text-gray-600 mb-4">
                This space is reserved for your Causal Loop Diagram (CLD) and the visualization of reinforcing and balancing feedback loops in the e-commerce ecosystem.
              </p>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center flex justify-center items-center">
                <img
                  src={img}
                  alt="E-commerce Seller Dynamics"
                  className=" object-cover h-[600px]"
                />
              </div>
            </div>

            

            <div className="bg-white p-6 rounded-lg shadow-md opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Stock and Flow Dynamics in E-Commerce</h3>

              <div className="space-y-6">
                <div className="p-4 border-l-4 border-blue-500 bg-blue-50 opacity-0 animate-slide-in" style={{ animationDelay: '0.4s' }}>
                  <h4 className="font-semibold text-blue-800">R1: Digital Literacy Feedback Loop (Reinforcing)</h4>
                  <p className="text-gray-600 mt-2">
                    Sellers with strong digital literacy skills improve listing quality and ad optimization. This increases revenue, enabling reinvestment in optimization efforts. Better operations and visibility further improve customer experience, reinforcing seller success.
                  </p>
                </div>

                <div className="p-4 border-l-4 border-red-500 bg-red-50 opacity-0 animate-slide-in" style={{ animationDelay: '0.5s' }}>
                  <h4 className="font-semibold text-red-800">B1: Operational Burden Loop (Balancing)</h4>
                  <p className="text-gray-600 mt-2">
                    As sellers improve their digital presence, operational demands like logistics and compliance also rise. This increases burden, which may reduce service quality and impact customer experience, balancing the positive effects of optimization.
                  </p>
                </div>

                <div className="p-4 border-l-4 border-red-500 bg-red-50 opacity-0 animate-slide-in" style={{ animationDelay: '0.6s' }}>
                  <h4 className="font-semibold text-red-800">B2: Competition and Pricing Pressure (Balancing)</h4>
                  <p className="text-gray-600 mt-2">
                    Large sellers offer lower prices and discounts, drawing away customers from small sellers. This decreases their revenue and limits pricing flexibility, making it hard to sustain competitive customer experiences.
                  </p>
                </div>

                <div className="p-4 border-l-4 border-blue-500 bg-blue-50 opacity-0 animate-slide-in" style={{ animationDelay: '0.7s' }}>
                  <h4 className="font-semibold text-blue-800">R2: Visibility-Experience Loop (Reinforcing)</h4>
                  <p className="text-gray-600 mt-2">
                    Enhanced visibility (driven by advertising and listing quality) improves customer experience and ratings. These in turn increase revenue and seller visibility even more, creating a reinforcing growth cycle for high-performing sellers.
                  </p>
                </div>

                <div className="p-4 border-l-4 border-red-500 bg-red-50 opacity-0 animate-slide-in" style={{ animationDelay: '0.8s' }}>
                  <h4 className="font-semibold text-red-800">B3: Rating Impact Loop (Balancing)</h4>
                  <p className="text-gray-600 mt-2">
                    A drop in customer experience reduces ratings, leading to lower visibility and fewer sales. This loop checks unsustainable growth and maintains a balance by rewarding consistently high service and penalizing poor performance.
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}
      </main>

      {/* Footer with Sources */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Data Sources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Government & Industry Reports</h3>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Ministry of Commerce and Industry, India</li>
                <li>• MeitY (Digital India)</li>
                <li>• Competition Commission of India (CCI)</li>
                <li>• Bain & Company: E-commerce in India Report</li>
                <li>• IBEF.org: Indian Retail Sector</li>
                <li>• NASSCOM: MSME Digital Adoption Survey</li>
                <li>• InvestIndia.gov.in</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Team 83 :</h3>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Adarsh Vashistha  :  (Video)</li>
                <li>• Arun              :  (Website)</li>
                <li>• Pranjal Shukla    :  (Content)</li>
                <li>• Ritik             :  (Content)</li>
                <li>• Siddharth         :  (CLD)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Academic & News Sources</h3>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• News Outlets: The Ken, Mint, Business Standard, YourStory</li>
                <li>• Google Scholar: Digital Marginalization in E-Commerce</li>
                <li>• ResearchGate: MSME Case Studies in Indian Retail</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
            ©️ 2025 India E-commerce Ecosystem Analysis
          </div>

        </div>
      </footer>
    </div>
  );
};

export default EcommerceExplorer;
