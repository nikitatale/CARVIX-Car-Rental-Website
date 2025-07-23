import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'motion/react'

const Footer = () => {
  return (
    <motion.div 
    initial={{opacity:0, y:30}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.6}}
    className='px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500'>

            <motion.div
            initial={{opacity:0, y:20}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration:0.6, delay: 0.2}}
            className='flex flex-wrap justify-between gap-8 items-start pb-6 border-borderColor border-b'>

                <div>

                    <motion.img 
                     initial={{opacity:0}}
            whileInView={{opacity: 1}}
            transition={{duration:0.5, delay: 0.3}}
                    src={assets.logo} alt="logo" className='h-13 md:h-15' />

                    <motion.p 
                     initial={{opacity:0}}
            whileInView={{opacity: 1}}
            transition={{duration:0.5, delay: 0.4}}
                    className='max-w-80 mt-3'>

                        Your trusted car rental partner for safe, affordable, and hassle-free travel. Whether it's a quick ride or a long road trip — we've got you covered.


                    </motion.p>

                    <motion.div
                       initial={{opacity:0}}
            whileInView={{opacity: 1}}
            transition={{duration:0.5, delay: 0.5}}
                    className='flex items-center gap-3 mt-6'>
                     <a href="#"> <img src={assets.facebook_logo} alt="facebook logo" className='w-5 h-5'/> </a>
                     <a href="#"> <img src={assets.instagram_logo} alt="instagram logo" className='w-5 h-5'/> </a>
                     <a href="#"> <img src={assets.twitter_logo} alt="twitter logo" className='w-5 h-5'/> </a>
                     <a href="#"> <img src={assets.gmail_logo} alt="gmail logo" className='w-5 h-5'/> </a>                       

                    </motion.div>

                </div>


                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Quick Links</h2>
                    <ul className='mt-3 flex flex-col gap-1.5 '>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Browse Cars</a></li>
                        <li><a href="#">All Models</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Resources</h2>
                    <ul className='mt-3 flex flex-col gap-1.5 '>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Terms of Services</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Insurance</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Contact</h2>
                    <ul className='mt-3 flex flex-col gap-1.5 '>
                        <li>CARVIX</li>
                        <li>Location: Mumbai, India</li>
                        <li>Phone: +91 98765 43210</li>
                        <li>Email: support@yourcarbooking.com</li>
                    </ul>
                </div>
        </motion.div>

           

            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>

                <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>

                <ul className='flex items-center gap-4'>

                    <li><a href="#">Privacy</a></li>
                    <li>|</li>
                    <li><a href="#">Terms</a></li>
                    <li>|</li>
                    <li><a href="#">Cookies</a> </li>
                    <li>|</li>

                </ul>

            </div>

        </motion.div>
  )
}

export default Footer
