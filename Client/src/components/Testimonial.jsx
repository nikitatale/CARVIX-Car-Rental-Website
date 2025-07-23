import React from 'react'
import Title from './Title';
import { assets} from '../assets/assets'
import {motion} from 'motion/react'

const Testimonial = () => {
    
     const testimonials = [
       {
          name: "Ankita Sharma", 
          location: "Mumbai, India", 
          image: assets.testimonial_image_1, 
          testimonial: "Booking a car was super easy and hassle-free. The vehicle was clean, well-maintained, and the support team was always responsive. Will definitely rent again!" 
        },

        { 
            name: "Priya Mehta", 
            location: "Bengaluru, India", 
            image: assets.testimonial_image_2, 
            testimonial: "I needed a car for a weekend road trip, and I was impressed with the quick service and flexible pickup options. Great value for money!" 
        },

        {  name: "Neha Kulkarni", 
           location: "Pune, India", 
           image: assets.testimonial_image_1, 
           testimonial: "The booking process was seamless, and the car looked exactly as shown. Transparent pricing and no hidden charges. Loved it!" 
        }

    ];



  return (
    <div
    
    className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
        <Title title= "What Our Customers Say" subTitle="Real experiences from happy riders who trusted us for their journey."/>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial, index) => (

                    <motion.div
                    initial={{opacity:0, y:40}}
                    whileInView={{opacity: 1, y:0}}
                    transition={{duration: 0.6, delay: index*0.2, ease:"easeOut"}}
                    viewport={{once: true, amount: 0.3}}
                    key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src={assets.star_icon} alt="star icon" />
            
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </motion.div>
                ))}
            </div>
        </div>
 
  )
}

export default Testimonial




        