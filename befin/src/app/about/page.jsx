import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutUs() {
  return (
    <>
      <Navbar activePage="about" />
      
      {/* Hero Section - About Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Illustration */}
            <div className="relative" data-aos="fade-right">
              <div 
                className="w-full h-[500px] rounded-2xl relative overflow-hidden shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
                }}
              >
                {/* Wiggle right edge overlay - creates wavy edge on right side */}
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
                {/* Background Elements */}
                <div className="absolute inset-0 p-8">
                  {/* BeFin Branding */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2">
                    <h1 className="text-6xl font-bold text-white">Befin</h1>
                  </div>
                  
                  {/* People Illustrations */}
                  <div className="absolute bottom-20 left-8">
                    <div className="text-6xl">👨‍💼</div>
                  </div>
                  <div className="absolute bottom-20 right-8">
                    <div className="text-6xl">👩‍💼</div>
                  </div>
                  
                  {/* Children with devices */}
                  <div className="absolute top-32 left-12">
                    <div className="bg-white rounded-lg p-2 shadow-lg">
                      <div className="text-3xl">📱</div>
                      <div className="text-xs text-gray-600 mt-1">888</div>
                    </div>
                  </div>
                  <div className="absolute top-40 right-16">
                    <div className="bg-white rounded-lg p-2 shadow-lg">
                      <div className="text-3xl">📱</div>
                    </div>
                  </div>
                  
                  {/* Laptop with chart */}
                  <div className="absolute bottom-32 left-1/2 -translate-x-1/2">
                    <div className="bg-white rounded-lg p-3 shadow-lg w-32">
                      <div className="h-16 bg-gradient-to-t from-green-400 to-blue-500 rounded flex items-end justify-center">
                        <div className="w-full h-3/4 bg-blue-600 rounded-t"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating text elements */}
                  <div className="absolute top-48 left-20 text-white text-sm font-semibold opacity-80">Learn • Save</div>
                  <div className="absolute top-56 right-24 text-white text-sm font-semibold opacity-80">Pay • Invest</div>
                </div>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="flex flex-col gap-6" data-aos="fade-left">
              <h1 className="text-5xl md:text-6xl font-bold text-[#2563eb]">About Us</h1>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  At BeFin, we believe that financial independence is not a destination, but a journey that begins with the first step towards understanding money. Founded by <strong>CommHawk Technologies Pvt. Ltd.</strong>, BeFin was born from a vision to bridge the financial literacy gap in India and empower every individual, regardless of age or background.
                </p>
                <p className="text-lg">
                  Our mission is simple yet powerful: to make financial education accessible, engaging, and practical for everyone. We understand that traditional financial education can be intimidating and disconnected from real-world needs. That's why we've built BeFin as a comprehensive platform that combines <strong>smart tools, gamified learning, and real-world financial experiences</strong>.
                </p>
                <p className="text-lg">
                  Through BeFin, users can <strong>Learn • Save • Pay • Invest</strong> - all in one integrated ecosystem designed to grow with them from their first allowance to their first salary and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Helping India Understand Money Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background text effect */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <span className="text-[200px] font-bold text-gray-400">HERE</span>
        </div>
        
        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2563eb] text-center mb-6" data-aos="fade-up">Helping India Understand Money</h2>
          <p className="text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            We're on a mission to transform how India learns about money. Through innovative technology, engaging content, and real-world applications, BeFin is making financial literacy accessible to millions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Our Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-md" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-bold text-[#2563eb] mb-6">Our Vision</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#2563eb] mt-1">•</span>
                  <span>To create a financially empowered India where every individual has the knowledge and tools to make informed financial decisions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#2563eb] mt-1">•</span>
                  <span>To bridge the financial literacy gap and make financial education accessible to all, regardless of age, background, or economic status.</span>
                </li>
              </ul>
            </div>

            {/* Our Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-md relative" data-aos="fade-up" data-aos-delay="300">
              <div className="absolute -top-3 -right-3 bg-white rounded-lg px-3 py-1 shadow-md text-xs text-gray-600 flex items-center gap-1">
                Made with GAMMA
                <span className="text-[#2563eb]">↓</span>
              </div>
              <h3 className="text-2xl font-bold text-[#2563eb] mb-6">Our Mission</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#2563eb] mt-1">•</span>
                  <span>To provide comprehensive financial education through innovative, gamified learning experiences.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#2563eb] mt-1">•</span>
                  <span>To empower users with practical tools for saving, spending, and investing wisely.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#2563eb] mt-1">•</span>
                  <span>To collaborate with educational institutions and financial partners to build financially aware communities.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#2563eb] mt-1">•</span>
                  <span>To continuously innovate and adapt to the evolving needs of our users and the financial landscape.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team & Trusted Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2563eb] text-center mb-12" data-aos="fade-up">Our Team & Trusted Partners</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Founder & CEO */}
            <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg border-4 border-white" style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                <div className="w-full h-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
                  <div className="text-6xl">👩‍💼</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Founder & CEO</h3>
              <p className="text-lg font-semibold text-gray-700 mb-1">Surbhi Kansal</p>
              <p className="text-sm text-gray-600">CommHawk Technologies Pvt. Ltd.</p>
            </div>

            {/* Advisory Board */}
            <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg border-4 border-white" style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <div className="text-6xl">👥</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Advisory Board</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Industry leaders from the Fintech & Education ecosystem guiding our vision.</p>
            </div>

            {/* Our Team */}
            <div className="flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg border-4 border-white" style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
                  <div className="text-6xl">👨‍👩‍👧‍👦</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Team</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Passionate innovators, educators, and fintech professionals united by one goal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Financial & Educational Partners Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="max-w-[1200px] mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2563eb] text-center mb-12" data-aos="fade-up">Trusted Financial & Educational Partners</h2>
          
          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center items-center gap-12 mb-8" data-aos="fade-up" data-aos-delay="100">
            {/* Logo 1 - Stylized W */}
            <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-5xl font-bold text-white">W</span>
            </div>
            
            {/* Logo 2 - NPCI */}
            <div className="w-32 h-32 bg-white rounded-xl flex items-center justify-center shadow-lg border-2 border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2563eb]">NPCI</div>
                <div className="text-xs text-gray-600 mt-1">National Payments</div>
                <div className="text-xs text-gray-600">Corporation of India</div>
              </div>
            </div>
            
            {/* Logo 3 - Building/Institution */}
            <div className="w-32 h-32 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl flex items-center justify-center shadow-lg">
              <div className="text-5xl">🏛️</div>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
            We are proud to collaborate with leading financial institutions and educational organizations across India. These partnerships enable us to deliver comprehensive financial education and innovative payment solutions to millions of users nationwide.
          </p>
        </div>
        
        {/* Small logo in bottom left */}
        <div className="absolute bottom-8 left-8">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#2563eb"/>
            <text x="20" y="28" fontSize="24" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="system-ui">B</text>
            <circle cx="12" cy="10" r="2" fill="white"/>
            <circle cx="20" cy="10" r="2" fill="white"/>
            <circle cx="28" cy="10" r="2" fill="white"/>
          </svg>
        </div>
      </section>

      <Footer />
    </>
  );
}

