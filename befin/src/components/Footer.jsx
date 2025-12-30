import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col items-center gap-8">
          <div>
            <Image
              src="/logo.png"
              alt="BeFin Logo"
              width={40}
              height={40}
              className="rounded-[8px]"
              priority
            />
          </div>
          <div className="flex gap-8 flex-wrap justify-center">
            <a href="/" className="no-underline text-gray-900 text-base transition-colors hover:text-[#2563eb]">Home</a>
            <a href="/about" className="no-underline text-gray-900 text-base transition-colors hover:text-[#2563eb]">About us</a>
            <a href="/services" className="no-underline text-gray-900 text-base transition-colors hover:text-[#2563eb]">Services</a>
            <a href="/contact" className="no-underline text-gray-900 text-base transition-colors hover:text-[#2563eb]">Contact Us</a>
          </div>
          <div className="text-gray-600 text-sm">
            <p>&copy; 2025 BeFin. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
