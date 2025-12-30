import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar activePage="home" />

      {/* Hero Section */}
      <section className="mx-4 pb-16 md:pb-0 flex items-center bg-white">
        <div className="w-full mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center">
            {/* Left Section - Phone Mockup */}
            <div
              className="hidden lg:block w-full lg:w-1/2 flex items-center justify-center lg:justify-start relative min-h-[320px] sm:min-h-[400px] lg:min-h-[600px] mb-8 lg:mb-0"
              data-aos="fade-right"
            >
              <div
                className="relative w-[40vw] min-h-[40vw] sm:min-h-[60vw] lg:min-h-[95vh]"
                style={{
                  maskImage: 'url(/left-transparent.svg)',
                  WebkitMaskImage: 'url(/left-transparent.svg)',
                  maskSize: '100% 100%',
                  WebkitMaskSize: '100% 100%',
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskPosition: 'left center',
                  WebkitMaskPosition: 'left center'
                }}
              >
                <Image
                  src="/home/hero.png"
                  alt="beFin"
                  fill
                  className="object-cover rounded-2xl bg-white"
                  priority
                />
              </div>
            </div>
            {/* Right Section - Marketing Content */}
            <div className="my-4 w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-2 px-1 lg:px-4 lg:max-w-full lg:-translate-x-[10vh]" data-aos="fade-left">
              <p className="text-lg lg:text-2xl text-[#2563eb] font-medium">
                BeFin- Learn, Save, Pay & Invest
              </p>
              <h1 className="text-3xl lg:text-5xl font-semibold leading-tight bg-gradient-to-r from-[#30a5fa] to-[#2563eb] text-transparent bg-clip-text">
                Be Financially Independent
              </h1>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg">
                From your first allowance to your first salary, BeFin helps every generation grow smarter with money.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 flex-wrap">
                <button className="bg-[#2563eb] text-white border-none px-8 py-3 lg:py-4 rounded-full text-base font-semibold cursor-pointer transition-all hover:bg-[#1d4ed8] hover:shadow-lg w-full sm:w-auto">
                  Get Early Access
                </button>
                <button className="bg-white text-[#2563eb] border-2 border-[#2563eb] px-8 py-3 lg:py-4 rounded-full text-base font-semibold cursor-pointer transition-all hover:bg-[#1273eb] hover:text-white w-full sm:w-auto">
                  Partner With Us
                </button>
              </div>
              
              {/* Video Section */}
              <div className="mt-4 sm:mt-10">
                <div className="rounded-xl overflow-hidden shadow-lg aspect-video w-full max-w-2xl min-h-[300px]">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/0iRbD5rM5qc?si=WGKNGZcuTrBmjMLt"
                    title="BeFin Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full min-h-[300px]"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finance for Every Age Section */}
      <section className="py-16 bg-[aliceblue] flex items-center min-h-[80vh]">
        <div className="mx-auto px-4 sm:px-8 w-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-left mb-4 md:mb-6" data-aos="fade-up">
            Finance for Every Age. Every Stage.
          </h2>
          <p
            className="text-base md:text-lg lg:text-xl text-gray-700 text-left max-w-2xl md:max-w-3xl mb-7 md:mb-12 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            BeFin isn't just an app - it's your lifelong financial companion. Whether you're learning to manage your first pocket money or optimizing your salary, BeFin grows with you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 sm:p-7 md:p-8 rounded-2xl relative shadow-md transition-all hover:-translate-y-2 hover:shadow-xl text-left flex flex-col justify-center min-h-[220px] md:min-h-[260px]" data-aos="fade-up" data-aos-delay="200">
              {/* Image Top Right */}
              <div className="absolute top-0 right-0 w-48 h-24 pointer-events-none select-none leading-[1]">
                <img
                  src="/home/students.png"
                  alt="Students icon"
                  className="w-full h-full object-cover rounded-bl-full"
                  draggable="false"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4 mt-0 pr-12 md:pr-16">For Students</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Learn smart money habits, manage your allowances, and make confident payments.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-6 sm:p-7 md:p-8 rounded-2xl relative shadow-md transition-all hover:-translate-y-2 hover:shadow-xl text-left flex flex-col justify-center min-h-[220px] md:min-h-[260px]" data-aos="fade-up" data-aos-delay="300">
              {/* Image Top Right */}
              <div className="absolute top-0 right-0 w-48 h-24 pointer-events-none select-none leading-[1]">
                <img
                  src="/home/parents.png"
                  alt="Parents icon"
                  className="w-full h-full object-cover rounded-bl-xl"
                  draggable="false"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4 mt-0 pr-12 md:pr-16">For Parents</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Set allowances, track spending, and guide your child's financial growth.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-6 sm:p-7 md:p-8 rounded-2xl relative shadow-md transition-all hover:-translate-y-2 hover:shadow-xl text-left flex flex-col justify-center min-h-[220px] md:min-h-[260px]" data-aos="fade-up" data-aos-delay="400">
              {/* Image Top Right */}
              <div className="absolute top-0 right-0 w-48 h-24 pointer-events-none select-none leading-[1]">
                <img
                  src="/home/professionals.png"
                  alt="Professionals icon"
                  className="w-full h-full object-contain"
                  draggable="false"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4 mt-0 pr-12 md:pr-16">For Professionals</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Budget better, save consistently, and invest wisely with AI-driven tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Card Section as Banner */}
      <section
        className="relative flex items-center justify-center py-32 md:py-44 overflow-hidden min-h-[420px] sm:min-h-[480px] md:min-h-[540px] bg-[aliceblue]"
        style={{
          // Replace the dark colors with aliceblue and a soft blue gradient for visual unity
          background: "linear-gradient(120deg,#e0f2fe 10%,#dbeafe 100%)"
        }}
      >
        {/* Banner background image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/home/banner.png"
            alt=""
            className="object-cover w-full h-full opacity-30"
            style={{ pointerEvents: "none", userSelect: "none" }}
          />
          {/* Overlay for gentle blue tone */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#e0f2fe] to-[#2563eb22] mix-blend-lighten"></div>
        </div>
        {/* TEXT CONTENT OVER IMAGE */}
        <div className="relative z-10 max-w-2xl w-full mx-auto px-5 sm:px-8 text-center" data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2563eb] drop-shadow-lg mb-5">
            Smart Card
          </h2>
          <p className="text-2xl sm:text-3xl font-semibold text-[#30a5fa] mb-3">Spend smarter. Stay in Control</p>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-4">
            Make everyday payments easy, safe and fun with your own BeFin Smart Card – built for all ages.
          </p>
          <p className="text-base sm:text-lg text-gray-800 font-medium mb-6">Track, tap and manage effortlessly.</p>
          <div className="flex gap-3 items-center text-base sm:text-lg justify-center text-[#2563eb] mb-8">
            <span className="font-medium">Secure</span>
            <span className="opacity-70">|</span>
            <span className="font-medium">Fast</span>
            <span className="opacity-70">|</span>
            <span className="font-medium">Prepaid</span>
          </div>
          <button className="bg-[#2563eb] text-white px-5 py-3 rounded-full text-lg font-semibold transition-transform hover:scale-105 shadow-md border-none">
            Learn more on Services →
          </button>
        </div>
      </section>

      {/* Level Up Game Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center items-center order-2 md:order-1 relative" data-aos="fade-right">
              <div className="relative w-full max-w-md h-[500px]">
                <Image
                  src="/home/banner.png"
                  alt="banner"
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Level Up Game</h2>
              <p className="text-2xl font-semibold text-[#2563eb]">Learn money the fun way.</p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Play interactive challenges, earn rewards, and master real-world financial skills - all in one gamified journey.
              </p>
              <p className="text-lg font-medium text-gray-900">Turn learning into earning.</p>
              <div className="flex gap-2 items-center text-base text-gray-600">
                <span className="font-medium">Fun</span>
                <span>|</span>
                <span className="font-medium">Rewarding</span>
                <span>|</span>
                <span className="font-medium">Educational</span>
              </div>
              <button className="bg-transparent border-none text-[#2563eb] text-lg font-semibold cursor-pointer text-left p-0 transition-colors hover:text-[#1d4ed8] w-fit">
                Discover Level Up →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Simulator Section */}
      <section className="px-20 py-20 bg-white">
        <div className="mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Reverse flex: Description first, then image on md+ screens */}
            <div className="flex flex-col gap-6 order-2 md:order-1" data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Market Simulator</h2>
              <p className="text-2xl font-semibold text-[#2563eb]">Trade. Compete. Learn.</p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Step into a real market experience - build virtual portfolios, join trading contests, and get AI insights.
              </p>
              <p className="text-lg font-medium text-gray-900">Learn to invest before you invest.</p>
              <div className="flex gap-2 items-center text-base text-gray-600">
                <span className="font-medium">Real Data</span>
                <span>|</span>
                <span className="font-medium">Zero Risk</span>
                <span>|</span>
                <span className="font-medium">AI Guided</span>
              </div>
              <button className="bg-transparent border-none text-[#2563eb] text-lg font-semibold cursor-pointer text-left p-0 transition-colors hover:text-[#1d4ed8] w-fit">
                Explore the Simulator →
              </button>
            </div>
            <div className="flex justify-center items-center relative order-1 md:order-2" data-aos="fade-left">
              <div className="relative w-full max-w-md h-[95vh]">
                <Image
                  src="/marketsimilator.png"
                  alt="Market Simulator"
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
          </div>
        </div>
      </section>

      {/* Empowering Campuses Section */}
      <section className="py-20 bg-gray-50 text-center">
        <div className="mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-aos="fade-up">Empowering Campuses & Enterprises</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            BeFin collaborates with schools, universities, and corporates to build financially aware communities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="flex flex-col items-center gap-4" data-aos="fade-up" data-aos-delay="200">
              <div className="text-7xl mb-2">💳</div>
              <p className="text-lg text-gray-700 leading-relaxed">Offer co-branded prepaid cards and wallets</p>
            </div>
            <div className="flex flex-col items-center gap-4" data-aos="fade-up" data-aos-delay="300">
              <div className="text-7xl mb-2">📚</div>
              <p className="text-lg text-gray-700 leading-relaxed">Run financial literacy programs</p>
            </div>
            <div className="flex flex-col items-center gap-4" data-aos="fade-up" data-aos-delay="400">
              <div className="text-7xl mb-2">🔌</div>
              <p className="text-lg text-gray-700 leading-relaxed">Enable secure API & white-label integrations</p>
            </div>
          </div>
          <p className="text-xl md:text-2xl font-semibold text-[#2563eb]" data-aos="fade-up" data-aos-delay="500">
            Join us in shaping the next generation of financially confident individuals.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-16 items-center">
            <div className="flex flex-col gap-6" data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Are you Ready to Transform Your Financial Future?</h2>
              <p className="text-2xl font-semibold text-[#2563eb]">Let's Build Something Extraordinary Together</p>
              <p className="text-lg text-gray-700 leading-relaxed">
                BeFin offers perfect solutions for individuals, institutions, and enterprises seeking financial empowerment and innovation. Join thousands of users and leading financial partners who trust BeFin for exceptional financial education and services.
              </p>
              <div className="flex gap-4 flex-wrap mt-4">
                <button className="bg-[#2563eb] text-white border-none px-8 py-4 rounded-lg text-base font-semibold cursor-pointer transition-all hover:bg-[#1d4ed8] hover:shadow-lg">
                  Schedule a Consultation
                </button>
                <button className="bg-white text-[#2563eb] border-2 border-[#2563eb] px-8 py-4 rounded-lg text-base font-semibold cursor-pointer transition-all hover:bg-[#2563eb] hover:text-white">
                  Request a Demo
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-6" data-aos="fade-left">
              <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-md">
                <div className="text-5xl md:text-6xl font-bold text-[#2563eb] mb-2">50K+</div>
                <div className="text-xl font-semibold text-gray-900">Active Users</div>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-md">
                <div className="text-5xl md:text-6xl font-bold text-[#2563eb] mb-2">200+</div>
                <div className="text-xl font-semibold text-gray-900">Partner Institutions</div>
                <div className="text-base text-gray-600 mt-2">Across India</div>
              </div>
              <div className="text-center p-8 bg-gray-50 rounded-2xl shadow-md">
                <div className="text-5xl md:text-6xl font-bold text-[#2563eb] mb-2">₹100Cr+</div>
                <div className="text-xl font-semibold text-gray-900">Transactions Processed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}