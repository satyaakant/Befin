import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Services() {
  return (
    <>
      <Navbar activePage="services" />
      
      {/* Empowering Financial Futures Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6" data-aos="fade-right">
              <h1 className="text-4xl md:text-5xl font-bold text-[#2563eb] leading-tight">
                Empowering Financial Futures Through Innovation
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                At BeFin, we're on a mission to make financial education simple, accessible, and engaging. Whether you're an individual looking to build better money habits, a school aiming to teach financial literacy, or an enterprise seeking innovative payment solutions, BeFin provides the tools you need to thrive in a digital financial future.
              </p>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="relative w-full h-[500px]">
                {/* Illustration placeholder - diverse people with smartphones */}
                <div 
                  className="w-full h-full rounded-2xl relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 50%, #7dd3fc 100%)'
                  }}
                >
                  {/* People illustrations */}
                  <div className="absolute inset-0 p-8 flex items-center justify-center">
                    <div className="relative w-64 h-96">
                      {/* Central phone with wallet app */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-56 bg-white rounded-xl shadow-2xl p-3 z-10">
                        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-2">
                          <div className="text-white text-xs font-semibold mb-2">WALLET</div>
                          <div className="bg-white rounded-lg p-2 mb-2">
                            <div className="w-full h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded"></div>
                          </div>
                          <div className="flex gap-2">
                            <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                            <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                            <div className="w-8 h-8 bg-purple-400 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      {/* People around */}
                      <div className="absolute top-4 left-4 text-4xl">👨‍💼</div>
                      <div className="absolute top-8 right-8 text-4xl">👩‍💼</div>
                      <div className="absolute bottom-8 left-8 text-4xl">👨‍💼</div>
                      <div className="absolute bottom-4 right-4 text-4xl">👩‍💼</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Complete Financial Companion Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background graph elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-6xl font-bold text-gray-400">93 ↗</div>
          <div className="absolute top-32 right-20 text-5xl font-bold text-gray-400">101.60 ↗</div>
          <div className="absolute bottom-32 left-20 text-5xl font-bold text-gray-400">175.93 ↗</div>
          <div className="absolute bottom-20 right-10 text-6xl font-bold text-gray-400">152.03 ↗</div>
        </div>
        
        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2563eb] text-center mb-6" data-aos="fade-up">
            Your Complete Financial Companion
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
            BeFin makes managing money simple, fun, and empowering. Whether you're a student learning the basics, a parent teaching your children, or a professional optimizing your finances, we've got you covered.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Student */}
            <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-md" data-aos="fade-up" data-aos-delay="200">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center mb-6 relative">
                <div className="text-6xl">👩‍🎓</div>
                <div className="absolute -bottom-2 -right-2 w-16 h-24 bg-white rounded-lg shadow-lg p-2">
                  <div className="w-full h-full bg-green-500 rounded flex items-center justify-center">
                    <div className="text-2xl">💳</div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Student</h3>
            </div>

            {/* Parent */}
            <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-md" data-aos="fade-up" data-aos-delay="300">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-6 relative">
                <div className="text-6xl">👨‍👩‍👧</div>
                <div className="absolute -bottom-2 -right-2 w-16 h-24 bg-white rounded-lg shadow-lg p-2">
                  <div className="w-full h-full bg-blue-500 rounded flex items-center justify-center">
                    <div className="text-2xl">💵</div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Parent</h3>
            </div>

            {/* Professional */}
            <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-md" data-aos="fade-up" data-aos-delay="400">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center mb-6 relative">
                <div className="text-6xl">👔</div>
                <div className="absolute -bottom-2 -right-2 w-20 h-28 bg-white rounded-lg shadow-lg p-2">
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded flex items-center justify-center">
                    <div className="text-2xl">📊</div>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
            </div>
          </div>

          {/* Made with GAMMA badge */}
          <div className="flex justify-end mt-8">
            <div className="bg-white rounded-lg px-4 py-2 shadow-md text-sm text-gray-600 flex items-center gap-2">
              Made with GAMMA
              <span className="text-[#2563eb]">↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* The BeFin Smart Card Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6" data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-bold text-[#2563eb]">
                The BeFin Smart Card — Your Money. Your Rules.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The BeFin Smart Card is a secure prepaid card linked to your BeFin wallet, designed to give you complete control over your finances while keeping your money safe and accessible.
              </p>
              
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#2563eb]">
                  <h4 className="font-semibold text-gray-900 mb-1">No repeated OTPs</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#2563eb]">
                  <h4 className="font-semibold text-gray-900 mb-1">Real-time parental visibility</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#2563eb]">
                  <h4 className="font-semibold text-gray-900 mb-1">Manage monthly allowances</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#2563eb]">
                  <h4 className="font-semibold text-gray-900 mb-1">Instant, secure payments</h4>
                </div>
              </div>
            </div>

            {/* Smart Card Illustration */}
            <div className="flex justify-center items-center" data-aos="fade-left">
              <div className="relative w-full max-w-md">
                <div 
                  className="w-full h-64 rounded-2xl p-6 shadow-2xl relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1e40af 100%)'
                  }}
                >
                  {/* Card design */}
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">B</span>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-white text-sm mb-2">5432 1098 7654 3210</div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-white text-xs opacity-80">EXPIRES</div>
                        <div className="text-white text-sm font-semibold">12/26</div>
                      </div>
                      <div className="text-white text-xs">PREPAID USER</div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <div className="w-10 h-10 bg-red-500 rounded-full"></div>
                      <div className="w-10 h-10 bg-orange-500 rounded-full"></div>
                    </div>
                  </div>
                  {/* Wavy design element */}
                  <div className="absolute top-0 right-0 w-32 h-full opacity-20">
                    <svg viewBox="0 0 100 200" className="w-full h-full">
                      <path d="M0,0 Q50,50 0,100 T0,200" stroke="white" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn • Save • Pay • Invest Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2563eb] text-center mb-6" data-aos="fade-up">
            Learn • Save • Pay • Invest
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
            BeFin makes money management fun through interactive education and powerful tools. Master the fundamentals and build lasting financial habits.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Learn */}
            <div className="bg-white p-8 rounded-2xl text-center shadow-md" data-aos="fade-up" data-aos-delay="200">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                <div className="text-5xl">🏙️</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Learn</h3>
              <p className="text-gray-600 leading-relaxed">
                Interactive lessons, fun quizzes and real-world money challenges
              </p>
            </div>

            {/* Save */}
            <div className="bg-white p-8 rounded-2xl text-center shadow-md" data-aos="fade-up" data-aos-delay="300">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                <div className="text-5xl">🐷</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Save</h3>
              <p className="text-gray-600 leading-relaxed">
                Set goals, track progress, and earn rewards
              </p>
            </div>

            {/* Pay */}
            <div className="bg-white p-8 rounded-2xl text-center shadow-md" data-aos="fade-up" data-aos-delay="400">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center">
                <div className="text-5xl">💳</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pay</h3>
              <p className="text-gray-600 leading-relaxed">
                Seamless payments using your BeFin Smart Card
              </p>
            </div>

            {/* Invest */}
            <div className="bg-white p-8 rounded-2xl text-center shadow-md" data-aos="fade-up" data-aos-delay="500">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center">
                <div className="text-5xl">📈</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Invest</h3>
              <p className="text-gray-600 leading-relaxed">
                Start exploring stock market investments with our risk-free simulator
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Level Up Game Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center items-center order-2 md:order-1 relative" data-aos="fade-right">
              <div className="relative w-full max-w-md h-[500px]">
                <Image
                  src="/levelupgame.png"
                  alt="Level Up Game"
                  fill
                  className="object-contain"
                />
                {/* Wiggle right edge overlay */}
                <div 
                  className="absolute right-0 top-0 bottom-0 w-20 pointer-events-none"
                  style={{
                    background: 'white',
                    maskImage: 'url(/wiggle-right.svg)',
                    WebkitMaskImage: 'url(/wiggle-right.svg)',
                    maskSize: '100% 100%',
                    WebkitMaskSize: '100% 100%',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'left center',
                    WebkitMaskPosition: 'left center'
                  }}
                ></div>
              </div>
            </div>
            
            <div className="flex flex-col gap-6 order-1 md:order-2" data-aos="fade-left">
              <h2 className="text-4xl md:text-5xl font-bold text-[#2563eb]">
                Level Up – The Game That Teaches You Money
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Play, learn, and earn BeFinCoins as you master lifelong money skills. Level Up turns financial education into an engaging adventure where every challenge brings you closer to financial independence.
              </p>
              
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#2563eb]">
                  <h4 className="font-semibold text-gray-900 mb-1">Engaging challenges & real-life scenarios</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#2563eb]">
                  <h4 className="font-semibold text-gray-900 mb-1">Learn budgeting, saving, and investing</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#2563eb]">
                  <h4 className="font-semibold text-gray-900 mb-1">Earn badges, climb ranks, and redeem rewards</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#2563eb]">
                  <h4 className="font-semibold text-gray-900 mb-1">Built with fintech & education experts</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stock Market Simulation Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center items-center relative" data-aos="fade-right">
              <div className="relative w-full max-w-md h-[500px]">
                <Image
                  src="/marketsimilator.png"
                  alt="Stock Market Simulator"
                  fill
                  className="object-contain"
                />
                {/* Wiggle left edge overlay */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-20 pointer-events-none"
                  style={{
                    background: 'white',
                    maskImage: 'url(/wiggle-left.svg)',
                    WebkitMaskImage: 'url(/wiggle-left.svg)',
                    maskSize: '100% 100%',
                    WebkitMaskSize: '100% 100%',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'right center',
                    WebkitMaskPosition: 'right center'
                  }}
                ></div>
              </div>
            </div>
            
            <div className="flex flex-col gap-6" data-aos="fade-left">
              <h2 className="text-4xl md:text-5xl font-bold text-[#2563eb]">
                Stock Market Simulation – Learn by Doing
              </h2>
              <p className="text-xl italic text-[#2563eb] font-medium">
                Experience the Market. Risk-Free.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                BeFin's Stock Market Simulator is a hands-on, risk-free platform that mirrors global markets. Practice trading, build portfolios, and learn investment strategies without risking real money. Perfect for students, beginners, and anyone looking to understand how markets work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

