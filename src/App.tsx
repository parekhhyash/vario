import React, { useState } from 'react';
import { ExternalLink, MessageCircle, Send, Hash, Zap, Shield, TrendingUp, Plus, Minus } from 'lucide-react';

const ComicButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseClasses = "font-bold border-4 border-black transition-all duration-200 hover:scale-105 hover:-translate-y-1 active:scale-95";
  
  const variants = {
    primary: "bg-lime-400 text-black hover:bg-lime-300",
    secondary: "bg-white text-black hover:bg-gray-100",
    purple: "bg-purple-400 text-white hover:bg-purple-300",
    pink: "bg-pink-400 text-white hover:bg-pink-300", 
    orange: "bg-orange-400 text-white hover:bg-orange-300"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm rounded",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-lg"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const FeatureCard = ({ icon: Icon, title, description, color = 'lime' }) => {
  const colorClasses = {
    lime: 'bg-lime-400 text-black',
    purple: 'bg-purple-400 text-white',
    pink: 'bg-pink-400 text-white',
    orange: 'bg-orange-400 text-white'
  };
  
  return (
    <div className="bg-white rounded-xl p-6 border-4 border-black transform hover:scale-105 transition-all duration-300 hover:-rotate-1">
      <div className={`inline-flex p-3 rounded-lg ${colorClasses[color]} mb-4`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-white rounded-lg border-4 border-black mb-4 overflow-hidden">
      <button
        className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-lg">{question}</span>
        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Comic Grid Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl mx-auto px-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl border-4 border-black px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-2xl text-black">Vario</div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-gray-100 px-4 py-2 rounded-full border-2 border-black font-bold text-sm">
              Current Yield: ~15%
            </div>
            <ComicButton variant="purple">Earn Now</ComicButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-32 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Earn <span className="text-purple-600">~15%</span> yield on your{' '}
            <span className="text-lime-500">STABLES</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Vario is a yield-bearing stablecoin protocol that makes your money work for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <ComicButton variant="primary" size="lg">
              Start Earning
            </ComicButton>
            <ComicButton variant="secondary" size="lg">
              Learn More
            </ComicButton>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-lime-100 rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300">
              <div className="bg-lime-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-black">
                <span className="font-bold text-2xl">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Deposit</h3>
              <p className="text-gray-700">Deposit your stablecoins into the Vario protocol to start earning yield immediately.</p>
            </div>
            
            <div className="bg-purple-100 rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300">
              <div className="bg-purple-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-black">
                <span className="font-bold text-2xl text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Yield</h3>
              <p className="text-gray-700">Your funds automatically earn ~15% APY through our optimized DeFi strategies.</p>
            </div>
            
            <div className="bg-pink-100 rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300">
              <div className="bg-pink-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-black">
                <span className="font-bold text-2xl text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Withdraw</h3>
              <p className="text-gray-700">Withdraw your principal and earned yield anytime with no lockup periods.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vario */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Why Vario?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Shield}
              title="Stability"
              description="Your funds are protected by multi-layered security protocols and audited smart contracts."
              color="lime"
            />
            <FeatureCard 
              icon={TrendingUp}
              title="High Yield"
              description="Earn industry-leading ~15% APY on your stablecoin holdings with automated optimization."
              color="purple"
            />
            <FeatureCard 
              icon={Zap}
              title="Transparency"
              description="Full on-chain transparency with real-time tracking of all protocol activities and yields."
              color="pink"
            />
          </div>
        </div>
      </section>

      {/* Supported Assets */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Supported Assets</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['USDC', 'USDT', 'DAI', 'FRAX'].map((asset) => (
              <div key={asset} className="bg-white rounded-2xl p-8 text-center border-2 border-gray-200 hover:border-black transition-colors">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-black">
                  <span className="font-bold">{asset.slice(0, 2)}</span>
                </div>
                <h3 className="font-bold text-lg">{asset}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Governance */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Join Our Community</h2>
          <p className="text-xl text-gray-700 mb-12">Connect with the Vario community across all platforms.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border-4 border-black transform hover:scale-105 transition-all duration-300">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-black">
                <Hash className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">Discord</h3>
              <p className="text-gray-600 mb-6">Join our community for real-time discussions and support</p>
              <ComicButton variant="purple" size="sm" className="w-full">
                Join Discord
              </ComicButton>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border-4 border-black transform hover:scale-105 transition-all duration-300">
              <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-black">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">Twitter</h3>
              <p className="text-gray-600 mb-6">Follow us for the latest updates and announcements</p>
              <ComicButton variant="pink" size="sm" className="w-full">
                Follow Us
              </ComicButton>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border-4 border-black transform hover:scale-105 transition-all duration-300">
              <div className="bg-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-black">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">Telegram</h3>
              <p className="text-gray-600 mb-6">Get instant updates and chat with the community</p>
              <ComicButton variant="orange" size="sm" className="w-full">
                Join Telegram
              </ComicButton>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <FAQItem 
              question="How does Vario generate yield?"
              answer="Vario uses a combination of optimized DeFi strategies including lending protocols, liquidity provision, and yield farming to generate consistent returns on deposited stablecoins."
            />
            <FAQItem 
              question="Is there a minimum deposit amount?"
              answer="No, there's no minimum deposit requirement. You can start earning yield with any amount of supported stablecoins."
            />
            <FAQItem 
              question="How often is yield distributed?"
              answer="Yield is accrued continuously and compounds automatically. You can see your earnings update in real-time in your dashboard."
            />
            <FAQItem 
              question="Are there any fees?"
              answer="Vario charges a small performance fee on earned yield to sustain protocol development and security. There are no deposit or withdrawal fees."
            />
            <FAQItem 
              question="How secure is my deposit?"
              answer="Your funds are secured by audited smart contracts, multi-signature controls, and diversified across multiple proven DeFi protocols to minimize risk."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-12 border-6 border-black transform hover:scale-105 transition-all duration-300">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Earn Yield on Your Stables?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Start earning ~15% APY today with no lockups or minimum deposits.
            </p>
            <ComicButton variant="primary" size="lg" className="text-2xl px-12 py-6">
              Earn Now
            </ComicButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="font-bold text-3xl mb-4">Vario</div>
          <p className="text-gray-400 mb-8">Making stablecoins work harder for you.</p>
          <div className="flex justify-center space-x-8 text-sm">
            <a href="#" className="hover:text-lime-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-lime-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-lime-400 transition-colors">Security</a>
            <a href="#" className="hover:text-lime-400 transition-colors">Docs</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;