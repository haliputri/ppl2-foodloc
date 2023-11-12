import React from 'react';
import { Button, Card, Checkbox, Footer, Label, TextInput } from 'flowbite-react';
import Navigation from '../components/Navigation';
import logo from '../assets/kfc.png';
import star from '../assets/star.svg';
import starabu from '../assets/starabu.svg';
import money from '../assets/money.svg';
import grab from '../assets/grab.png';
import gojek from '../assets/gojek.png';
import pencil from '../assets/pencil.svg';
import ava1 from '../assets/ava-1.svg';
import ava2 from '../assets/ava2.svg';
import ellipse from '../assets/ellipse.svg';
import ellipseabu from '../assets/ellipseabu.svg';
import arrow from '../assets/arrowright-yellow.svg';
import FooterResto from '../components/FooterResto';

const RestaurantDetail = () => {
  return (
    <div>
      <Navigation />
      <div>
        <h2 className="m-20 text-gray-D9D9D9 md:text-3xl lg:text-4xl dark:text-white font-bold font-['Lato']">
          Restaurants / <span className="text-orange-FFA90A"> KFC </span>
        </h2>
        <div className="container mx-auto flex">
          <div className="w-1/3">
            <img
              src={logo}
              alt="KFC Logo"
              style={{
                position: 'absolute',
                width: '450px',
                height: '450px',
                marginLeft: '20px',
              }}
            />
          </div>
          <div className="w-1/3 flex flex-col items-start">
            <h4 className="text-orange-FFA90A md:text-2xl lg:text-4xl dark:text-white ml-4 font-bold font-['Lato']">
              KFC
            </h4>
            <div className="flex items-center mt-4 ml-4">
              <img
                src={star}
                alt="Star"
                className="w-6 h-6"
              />
              <span className="ml-2 text-2xl">4.5</span>
            </div>
            <div className="flex items-center mt-4 ml-4">
              <img
                src={money}
                className="w-6 h-6"
              />
              <span className="ml-2 text-2xl">Rp50.000-Rp100.000</span>
            </div>
            <div className="flex items-center mt-4 ml-4">
              <Button
                className="mt-8"
                style={{
                  backgroundColor: "#FFA90A",
                  color: "#FFF",
                  borderRadius: "50px",
                  width: "300px",
                  height: "50px",
                }}
              >
                Lihat Menu
              </Button>
            </div>
          </div>
          <div className="w-1/3 flex flex-col items-end">
            <img 
              src={grab}
              className="rounded-full mt-4"
            />
            <img 
              src={gojek}
              className="mt-8"
              style={{
                width: "56px",
                height: "45px",
              }}
            />
          </div>
        </div>
      </div>
      <div>
      <div className="flex items-center justify-between mt-44 mb-8">
        <h2 className="mt-20 ml-20 text-orange-FFA90A md:text-3xl lg:text-4xl dark:text-white font-bold font-['Lato']"> Reviews </h2>
        <img 
          src={pencil}
          className="w-8 h-8 mr-20 items-end"
        />
      </div>
      <div className="ml-20 mb-4 justify-start items-start inline-flex">
        <img  src={ava1}
              className="rounded-full"
              />
        <div className="flex-col justify-start items-start inline-flex">
          <h5 className="text-black text-xl font-semibold font-['Lato'] m-0.5 ml-2">R. Rowan</h5>
          <div className="flex items-center ml-1.5">
          <img 
          src={starabu}
          className='w-6 h-6'
          />
          <h5 className="text-zinc-300 text-xl font-medium font-['Lato'] ml-2">4.6</h5>
          </div>
         <p className="ml-3 text-black text-xl font-['Lato']">
          Lorem ipsum dolor sit amet consectetur. Et id urna vitae aliquam facilisis vestibulum ac non. Felis id nunc aliquam tortor nunc. Sit velit fames donec maecenas massa leo eu dui. Malesuada diam enim non feugiat scelerisque eu etiam nulla.</p>
          <div className="border border-zinc-300 w-full">
          </div>
        </div>
        </div>
        <div className="ml-20 mb-4 justify-start items-start inline-flex">
        <img  src={ava2}
              className="rounded-full"
              />
        <div className="flex-col justify-start items-start inline-flex">
          <h5 className="text-black text-xl font-semibold font-['Lato'] m-0.5 ml-2">Gerry Lezatos</h5>
          <div className="flex items-center ml-1.5">
          <img 
          src={starabu}
          className='w-6 h-6'
          />
          <h5 className="text-zinc-300 text-xl font-medium font-['Lato'] ml-2">5</h5>
          </div>
         <p className="ml-3 text-black text-xl font-['Lato']">
          Lorem ipsum dolor sit amet consectetur. Et id urna vitae aliquam facilisis vestibulum ac non. Felis id nunc aliquam tortor nunc. Sit velit fames donec maecenas massa leo eu dui. Malesuada diam enim non feugiat scelerisque eu etiam nulla.Sit velit fames donec maecenas massa leo eu dui. Malesuada diam enim non feugiat scelerisque eu etiam nulla.</p>
          <div className="border border-zinc-300 w-full">
          </div>
        </div>
        </div>
        <div className="ml-20 mb-4 justify-start items-start inline-flex">
        <img  src={ava2}
              className="rounded-full"
              />
        <div className="flex-col justify-start items-start inline-flex">
          <h5 className="text-black text-xl font-semibold font-['Lato'] m-0.5 ml-2">Gerry Lezatos</h5>
          <div className="flex items-center ml-1.5">
          <img 
          src={starabu}
          className='w-6 h-6'
          />
          <h5 className="text-zinc-300 text-xl font-medium font-['Lato'] ml-2">5</h5>
          </div>
         <p className="ml-3 text-black text-xl font-['Lato']">
          Lorem ipsum dolor sit amet consectetur. Et id urna vitae aliquam facilisis vestibulum ac non. Felis id nunc aliquam tortor nunc. Sit velit fames donec maecenas massa leo eu dui. Malesuada diam enim non feugiat scelerisque eu etiam nulla.Sit velit fames donec maecenas massa leo eu dui. Malesuada diam enim non feugiat scelerisque eu etiam nulla.</p>
          <div className="border border-zinc-300 w-full">
          </div>
        </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <div className="gap-3 inline-flex">
            <img src={ellipse} className="w-4 h-4 rounded-full" />
            <img src={ellipseabu} className="w-4 h-4 rounded-full" />
            <img src={ellipseabu} className="w-4 h-4 rounded-full" />
            <img src={arrow}/>
          </div>
        </div>
      </div>
      <div>
      <h2 className="mt-20 ml-20 text-orange-FFA90A md:text-3xl lg:text-4xl dark:text-white font-bold font-['Lato']"> Locations </h2>
      </div>
      <div className='mt-56'>
      <FooterResto/>
      </div>
    </div>
  );
};

export default RestaurantDetail;
