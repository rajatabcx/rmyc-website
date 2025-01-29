import Link from 'next/link';

export function Footer() {
  return (
    <footer className='bg-slate-800 text-white'>
      <div className='max-w-[1170px] mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* About Us Section */}
          <div className='space-y-4'>
            <h2 className='font-semibold text-lg'>ABOUT US</h2>
            <p className='text-sm leading-relaxed text-justify'>
              The Royal Madras Yacht Club (RMYC), South India&apos;s oldest
              sailing club, blends a rich legacy with modern sailing
              experiences. Open to all ages, RMYC offers expert training,
              leisure sailing, and a vibrant community for sea enthusiasts.
            </p>
          </div>

          {/* Site Links Section */}
          <div className='space-y-4'>
            <h2 className='font-semibold text-lg'>SITE LINKS</h2>
            <nav className='flex flex-col space-y-2'>
              <Link href='/' className='hover:underline'>
                Home
              </Link>
              <Link href='/about' className='hover:underline'>
                About the Club
              </Link>
              <Link href='/leisure' className='hover:underline'>
                Leisure Sailing
              </Link>
            </nav>
          </div>

          {/* Quick Links Section */}
          <div className='space-y-4'>
            <h2 className='font-semibold text-lg'>QUICK LINKS</h2>
            <nav className='flex flex-col space-y-2'>
              <Link href='/learning' className='hover:underline'>
                Learning Programs
              </Link>
              <Link href='/membership' className='hover:underline'>
                Membership
              </Link>
              <Link href='/contact' className='hover:underline'>
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Us Section */}
          <div className='space-y-4'>
            <h2 className='font-semibold text-lg'>CONTACT US</h2>
            <div className='space-y-2 text-sm'>
              <a href='tel:+919841030880' className='hover:underline block'>
                +91 98410 30880
              </a>
              <a
                href='mailto:info@royalmadrasayachtclub.com'
                className='hover:underline block'
              >
                info@royalmadrasayachtclub.com
              </a>
              <div>
                <p>Capt. Vivek Shanbhag</p>
                <p>Honorary Secretary</p>
                <p>Royal Madras Yacht Club</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className='mt-12 pt-4 border-t border-white/10 text-sm text-center'>
          <p>
            © 2025 | All Rights Reserved. Developed by{' '}
            <a
              href='https://rajat-mondal-portfolio.vercel.app'
              target='_blank'
              className='hover:underline'
            >
              Rajat Mondal
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
