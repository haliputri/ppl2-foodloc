import React from 'react';
import { Button, Card, Checkbox, Footer, Label, TextInput, Textarea, Modal, Pagination } from 'flowbite-react';
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
import menu from '../assets/menu.png';
import { useState } from 'react';

const RestaurantDetail = () => {
  const [isShown, setIsShown] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 1;
  const imageList = [menu, menu, menu];

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = imageList.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(imageList.length / imagesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClick = event => {
    setIsShown(current => !current);
  };

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
                maxWidth: '80%',
                height: 'auto',
                marginLeft: 'auto',
                marginRight: 'auto',
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
                onClick={() => setOpenModal(true)}
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
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>Menu</Modal.Header>
            <Modal.Body>
              <div className="flex flex-col items-center">
                {currentImages.map((image, index) => (
                  <img key={index} src={image} style={{ margin: 'auto' }} />
                ))}
                <span>{`${currentPage} of ${totalPages}`}</span>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div className="flex items-center justify-center" style={{ width: '100%' }}>
                <Button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  style={{
                    borderColor: "#FFA90A",
                    borderRadius: "8px"
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffa90a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </Button>
                <Button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  style={{
                    borderColor: "#FFA90A",
                    borderRadius: "8px"
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffa90a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </Button>
              </div>
            </Modal.Footer>

          </Modal>
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
        <div className="flex items-center justify-between mb-8">
          <h2 className="mt-20 ml-20 text-orange-FFA90A md:text-3xl lg:text-4xl dark:text-white font-bold font-['Lato']"> Reviews </h2>
          <Button onClick={handleClick}>
            <img
              src={pencil}
              className="w-8 h-8 mr-20 items-end"
            />
          </Button>
        </div>
        {isShown && (
          <div className="mx-16 relative">
            <textarea
              className="inset-0 w-full mx-4 mb-4 text-gray-900 bg-white border border-yellow-300 font-['Lato'] rounded-lg" rows={7}
            >
            </textarea>
            <Button
              className="absolute mb-6 bottom-4 right-4 rounded-md"
              style={{
                backgroundColor: "#FFA90A",
                borderRadius: "50px"
              }}
              onClick={() => {
              }}
            >
              Submit Review
            </Button>
          </div>
        )}
        <div className="ml-20 mb-4 justify-start items-start inline-flex">
          <img src={ava1}
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
          <img src={ava2}
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
          <img src={ava2}
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
            <img src={arrow} />
          </div>
        </div>
      </div>
      <div className='mt-16 ml-20'>
        <h2 className="pb-8 text-orange-FFA90A md:text-3xl lg:text-4xl dark:text-white font-bold font-['Lato']"> Locations </h2>
        <div className="Maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253492.9684735126!2d107.53117671354208!3d-6.911203057753583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c532e567b41b%3A0xace4df8df0c30c3!2sHeyHo*21%20Eatery!5e0!3m2!1sen!2sid!4v1699849948074!5m2!1sen!2sid"
            width="800px"
            height="300px"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className='mt-56'>
        <FooterResto />
      </div>
    </div>
  );
};

export default RestaurantDetail;
