import Image from 'next/image'
import React from 'react'



export default function Footer() {
  return (
    <footer className=" text-[#686868]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
          <div className="space-y-6">
            <div className="w-40">
              <Image src={"/Casalogo.png"} alt="Company logo" width={150} height={44} />
            </div>

            <p className=" leading-relaxed text-lg">
              CASA provides fast, reliable, and transparent factoring services, helping
              business owners turn credit card transactions into instant cash flow.
            </p>

            <div>
              <h4 className=" font-bold text-2xl text-black font-roboto mb-3">Follow us on</h4>
              <div className="flex items-center gap-3">
            
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-[#184d25] inline-flex items-center justify-center shadow-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 4.99 3.66 9.12 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v7.03C18.34 21.19 22 17.06 22 12.07z" fill="#fff"/>
                  </svg>
                </a>

               
                <a
                  href="#"
                  aria-label="X/Twitter"
                  className="w-10 h-10 rounded-full bg-[#eef6ef] inline-flex items-center justify-center shadow-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M22 5.92c-.63.28-1.3.47-2.01.56.72-.43 1.27-1.11 1.53-1.92-.67.4-1.41.69-2.2.85A3.49 3.49 0 0016.15 5c-1.92 0-3.48 1.56-3.48 3.48 0 .27.03.54.09.8C9.83 9.14 7.06 7.73 5.04 5.18c-.3.51-.47 1.11-.47 1.75 0 1.21.62 2.28 1.56 2.9-.58-.02-1.13-.18-1.61-.44v.04c0 1.68 1.19 3.08 2.77 3.4-.29.08-.6.12-.92.12-.22 0-.44-.02-.65-.06.44 1.36 1.71 2.35 3.21 2.38A7 7 0 014 19.54a9.86 9.86 0 005.33 1.56c6.4 0 9.9-5.3 9.9-9.9v-.45c.68-.48 1.27-1.08 1.74-1.77-.63.28-1.3.47-2.01.56z" fill="#0F4E23"/>
                  </svg>
                </a>

                
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-[#eef6ef] inline-flex items-center justify-center shadow-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M6.94 21H3V8.98h3.94V21zM5 7.6A2.28 2.28 0 015 3.04 2.28 2.28 0 015 7.6zM21 21h-3.94v-5.5c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.46-2.15 2.97V21H8.03V8.98H12v1.59h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.66 4.78 6.12V21z" fill="#0F4E23"/>
                  </svg>
                </a>

             
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-[#eef6ef] inline-flex items-center justify-center shadow-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.6A4.4 4.4 0 1016.4 13 4.4 4.4 0 0012 8.6zM18.5 6.2a1 1 0 11-1-1 1 1 0 011 1z" fill="#0F4E23"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

         
          <div>
            <h4 className=" font-bold text-2xl text-black font-roboto mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Procedure of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Why CASA is Different
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className=" font-bold text-2xl text-black font-roboto mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Support center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

        
          <div>
            <h4 className=" font-bold text-2xl text-black font-roboto mb-6">Get in touch</h4>

            <address className="not-italic space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#eef6ef]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5 2.5 2.5 0 0112 11.5z" fill="#0F4E23"/>
                  </svg>
                </span>
                <div>
                  <h5 className="font-semibold ">Address</h5>
                  <p className="text-sm">123 Business Street, Suite 500, New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#eef6ef]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 01.9-.3 11.1 11.1 0 003.5.6 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h2.5a1 1 0 011 1 11.1 11.1 0 00.1 3.8 1 1 0 01-.1.9L6.6 10.8z" fill="#0F4E23"/>
                  </svg>
                </span>
                <div>
                  <h5 className="font-semibold ">Phone</h5>
                  <p className="text-sm">1 (800) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#eef6ef]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#0F4E23"/>
                  </svg>
                </span>
                <div>
                  <h5 className="font-semibold ">Email</h5>
                  <p className="text-sm">support@casa.finance</p>
                </div>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <p className="text-gray-500">Copyright © 2025 all rights Reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-6">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Security
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
