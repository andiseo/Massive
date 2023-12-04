import React from 'react'
import Card from './Card'
const Carousel = () => {
  return (
    <div>
        <div className='flex items-center justify-center my-6 text-2xl font-bold font-Poppins' style={{color:'#1D3063'}}>Our Partner</div>
        <div className="flex items-center carousel carousel-vertical rounded-box gap-10 pb-12">
            <div className="carousel-item h-full">
                <Card/>
                <Card/>
                <Card/>
            </div> 
            <div className="carousel-item h-full">
                <Card/>
                <Card/>
                <Card/>
            </div> 
            <div className="carousel-item h-full">
                <Card/>
                <Card/>
                <Card/>
            </div> 
            <div className="carousel-item h-full">
                 <Card/>
                 <Card/>
                 <Card/>
            </div> 
            <div className="carousel-item h-full">
                <Card/>
                <Card/>
                <Card/>
            </div> 
            <div className="carousel-item h-full">
                <Card/>
                <Card/>
                <Card/>
            </div> 
            <div className="carousel-item h-full">
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    </div>
  )
}

export default Carousel
