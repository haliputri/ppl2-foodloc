import React from "react";
import { Button, Modal } from "flowbite-react";
import { Link, useParams } from "react-router-dom";
import Navigation2 from "../../components/Navigation2";
import logo from "../../assets/kfc.png";
import star from "../../assets/star.svg";
import starabu from "../../assets/starabu.svg";
import money from "../../assets/money.svg";
import grab from "../../assets/grab.png";
import gojek from "../../assets/gojek.png";
import ava2 from "../../assets/ava2.svg";
import FooterResto from "../../components/FooterResto";
import menu from "../../assets/menu.png";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const UserRestaurantDetail = () => {
  const [restaurant, setRestaurant] = useState({});
  const [user, setUser] = useState({});
  const { username } = useParams();
  const [avgRating, setAvgRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [expanded, setExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openHour, setOpenHour] = useState("");
  const [closeHour, setCloseHour] = useState("");
  const [arrowPath, setArrowPath] = useState("M6 9l6 6 6-6");

  const days = [
    { day: "Monday", open: "11:00", close: "22:00" },
    { day: "Saturday", open: "11:00", close: "22:00" },
    { day: "Tuesday", open: "11:00", close: "22:00" },
  ];

  useEffect(() => {
    const now = new Date();
    const currentDay = now.toLocaleDateString("en-US", { weekday: "long" });
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    const today = days.find((item) => item.day === currentDay);

    if (today) {
      const openTime = parseInt(today.open.split(":")[0]);
      const closeTime = parseInt(today.close.split(":")[0]);

      setOpenHour(today.open);
      setCloseHour(today.close);

      if (currentHour > openTime && currentHour < closeTime) {
        setIsOpen(true);
      } else if (currentHour === openTime && currentMinute >= 0) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    } else {
      const sortedDays = days.sort((a, b) => {
        const aIndex = days.findIndex((item) => item.day === a.day);
        const bIndex = days.findIndex((item) => item.day === b.day);
        const currentDayIndex = days.findIndex(
          (item) => item.day === currentDay
        );

        return (
          Math.abs(currentDayIndex - aIndex) -
          Math.abs(currentDayIndex - bIndex)
        );
      });

      const nearestDay = sortedDays[0];
      setOpenHour(nearestDay.open);
      setCloseHour(nearestDay.close);
      setIsOpen(false);
    }

    setLoading(true);

    axios
      .get(`${API_BASE_URL}/restaurants/${id}`)
      .then((restaurantResponse) => {
        const restaurantData = restaurantResponse.data.data;

        setRestaurant(restaurantData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    axios
      .get(`${API_BASE_URL}/users/login/find/${username}`)
      .then((userResponse) => {
        const userData = userResponse.data.data;

        setUser(userData);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    axios
      .get(`${API_BASE_URL}/reviews/average-rating/${id}`)
      .then((avgRatingResponse) => {
        setAvgRating(avgRatingResponse.data.averageRating);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id, username]);

  const [openModal, setOpenModal] = useState(false);
  const [currentPageImage, setcurrentPageImage] = useState(1);
  const [rating, setRating] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const imagesPerPage = 1;
  const imageList = [menu, menu, menu];

  const indexOfLastImage = currentPageImage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = imageList.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(imageList.length / imagesPerPage);
  // const reviews = [
  //   {
  //     avatar: ava2,
  //     id: 8,
  //     author: "Gerry Lezatos",
  //     rating: 5,
  //     content: "ini 4 des",
  //     date: "2023-12-04"
  //   },
  //   {
  //     avatar: ava2,
  //     id: 9,
  //     author: "Gerry Lezatos",
  //     rating: 5,
  //     content: "ini 2 des",
  //     date: "2023-12-02"
  //   },
  //   {
  //     avatar: ava2,
  //     id: 10,
  //     author: "Gerry Lezatos",
  //     rating: 5,
  //     content: "ini 1 des",
  //     date: "2023-12-01"
  //   },
  //   {
  //     avatar: ava2,
  //     id: 2,
  //     author: "Gerry Lezatos",
  //     rating: 5,
  //     content: "ini 11 nov",
  //     date: "2023-11-11"
  //   },
  //   {
  //     avatar: ava2,
  //     id: 16,
  //     author: "Gerry Lezatos",
  //     rating: 5,
  //     content: "ini 3 des",
  //     date: "2023-12-03"
  //   }
  // ];

  // const sortedReviews = reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
  const [currentPageReview, setCurrentPageReview] = useState(1);
  const [review, setReview] = useState("");
  const reviewsPerPage = 3;
  const indexOfLastReview = currentPageReview * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  // const currentReviews = sortedReviews.slice(indexOfFirstReview, indexOfLastReview);
  const [newReviews, setNewReviews] = useState([]);

  useEffect(() => {
    setLoading(true);

    Promise.all([axios.get(`${API_BASE_URL}/reviews/restaurant/${id}`)])
      .then(([reviewResponse]) => {
        setNewReviews(reviewResponse.data.data);
        console.log(reviewResponse);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [username, id]);

  const submitReview = async () => {
    try{
      await axios
      .post(`${API_BASE_URL}/reviews`, {
        restaurantName: restaurant.name,
        restaurantId: restaurant._id,
        rating: rating,
        authorName: user.username,
        content: review,
        image: "",
        authorId: user._id,
      })
      .then((e) => {
        const newReview = e.data.data;
        setNewReviews([newReview, ...newReviews]);
        setReview("");
        setRating(0);

        setIsShown(false);
        window.location.reload();
      });
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPageReview(pageNumber);
  };

  const handleClick = () => {
    setIsShown(!isShown);
  };

  const handleNextPageImage = () => {
    if (currentPageImage < totalPages) {
      setcurrentPageImage(currentPageImage + 1);
    }
  };

  const handlePrevPageImage = () => {
    if (currentPageImage > 1) {
      setcurrentPageImage(currentPageImage - 1);
    }
  };

  const handleStarHover = (index) => {
    if (!isHovered) {
      setRating(index + 1);
    }
  };

  const handleStarClick = (index) => {
    setIsHovered(true);
    setRating(index + 1);
  };

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`cursor-pointer text-2xl ml-2 ${
            isHovered ? (i < rating ? "text-yellow-300" : "text-gray-300") : ""
          }`}
          onMouseEnter={() => handleStarHover(i)}
          onClick={() => handleStarClick(i)}
        />
      );
    }

    return (
      <div className="flex items-center">
        <span className="mr-2 text-xl font='[Lato]'">Rating:</span>
        <span className="mr-2 text-xl  font-['Lato'] text-yellow-300">
          {rating}
        </span>
        {stars}
      </div>
    );
  };

  const contentStyle = {
    display: expanded ? "block" : "none",
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
    setArrowPath(
      arrowPath === "M6 9l6 6 6-6" ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"
    );
  };

  return (
    <div>
      <Navigation2 />
      <div>
        <div className="m-20 flex items-center">
          <Link to={`/${username}/restaurant`} className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D9D9D9"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H6M12 5l-7 7 7 7" />
            </svg>
          </Link>
          <span className="ml-2 text-gray-D9D9D9 md:text-3xl lg:text-3xl dark:text-white font-bold font-['Lato']">
            Restaurants /
            <span className="text-orange-FFA90A"> {restaurant.name} </span>
          </span>
        </div>
        <div className="flex relative">
          <div className="w-1/3 left-0 pl-20">
            <img
              src={restaurant.logo || logo}
              alt="Logo"
              style={{
                width: "80%",
                height: "auto",
              }}
            />
          </div>
          <div className="w1/3 flex-col">
            <h4 className="text-orange-FFA90A md:text-xl lg:text-3xl dark:text-white ml-4 font-bold font-['Lato']">
              {restaurant.name}
            </h4>
            <div className="flex items-center mt-4 ml-4">
              <img src={star} alt="Star" className="w-6 h-6" />
              <span className="ml-2 text-2xl">
                {avgRating || restaurant.rating}
              </span>
            </div>
            <div className="flex items-center mt-4 ml-4">
              <img src={money} className="w-6 h-6" />
              <span className="ml-2 text-xl">Rp50.000-Rp100.000</span>
            </div>
            <div className="flex items-center mt-4 ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFA90A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <button onClick={handleExpandClick} className="flex items-center">
                <span className="ml-2 text-xl font-bold text-orange-FFA90A font-Lato">
                  {isOpen ? "Open" : "Closed"}{" "}
                </span>
                <span className="ml-2 text-xl font-Lato">
                  {" "}
                  - {isOpen
                    ? `Closes at ${closeHour}`
                    : `Opens at ${openHour}`}{" "}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFA90A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d={arrowPath} />
                </svg>
              </button>
            </div>
            <div className="flex items-center ml-12 mt-2" style={contentStyle}>
              <table className="text-xl font-Lato">
                <tbody>
                  {days.map((item, index) => (
                    <tr key={index}>
                      <td>{item.day}</td>
                      <td className="pl-1">
                        {item.open} - {item.close}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                  <img key={index} src={image} style={{ margin: "auto" }} />
                ))}
                <span>{`${currentPageImage} of ${totalPages}`}</span>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div
                className="flex items-center justify-center"
                style={{ width: "100%" }}
              >
                <Button
                  onClick={handlePrevPageImage}
                  disabled={currentPageImage === 1}
                  style={{
                    borderColor: "#FFA90A",
                    borderRadius: "8px",
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
                  onClick={handleNextPageImage}
                  disabled={currentPageImage === totalPages}
                  style={{
                    borderColor: "#FFA90A",
                    borderRadius: "8px",
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
          <div className="w1/3 px-20 absolute right-0 top-0 flex flex-col items-center">
            <a href={restaurant.grab_link}>
              <img src={grab} className="rounded-full mt-4" />
            </a>
            <a href={restaurant.gojek_link}>
              <img
                src={gojek}
                className="mt-8"
                style={{
                  width: "56px",
                  height: "45px",
                }}
              />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-8 mt-20 mx-20">
          <h2 className="text-orange-FFA90A md:text-3xl lg:text-3xl dark:text-white font-bold font-['Lato']">
            {" "}
            Reviews{" "}
          </h2>
          <div style={{ cursor: "pointer" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFA90A"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={handleClick}
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </div>
        {isShown && (
          <div className="mx-16 relative">
            <textarea
              className="inset-0 w-full mb-4 text-gray-900 bg-white border border-yellow-300 font-['Lato'] rounded-lg"
              rows={7}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
            <div className="flex space-x-2 absolute mb-6 bottom-4 left-4">
              {renderStars()}
            </div>
            <Button
              className="absolute mb-6 bottom-4 right-6 rounded-md"
              style={{
                backgroundColor: "#FFA90A",
                borderRadius: "50px",
              }}
              onClick={submitReview}
            >
              Submit Review
            </Button>
            <div className="flex items-center"></div>
          </div>
        )}
        <div className="mx-20 mb-4">
          {[...newReviews].map((review, index) => (
            <div key={index} className="my-3">
              <div className="inline-flex justify-start items-start">
                <img
                  src={`https://ui-avatars.com/api/?name=${review.author_name}`}
                  className="rounded-full"
                  alt={`Avatar of ${review.author_name}`}
                />
                <div
                  className="flex-col justify-start items-start ml-2"
                  style={{ width: "calc(100% - 8px)" }}
                >
                  <h5 className="text-black text-xl font-semibold font-['Lato'] m-0.5 ml-2">
                    {review.author_name}
                  </h5>
                  <div className="flex items-center ml-1.5">
                    <img src={starabu} className="w-6 h-6" alt="Star Icon" />
                    <h5 className="text-zinc-300 text-xl font-medium font-['Lato'] ml-2">
                      {review.review_rating}
                    </h5>
                  </div>
                  <p className="ml-3 mb-2 text-black text-xl font-['Lato']">
                    {review.review_text}
                  </p>
                </div>
              </div>
              <div
                className="border border-zinc-300"
                style={{ width: "100%" }}
              ></div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-4">
          {/* <svg xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke= {currentPageReview > 1 ? "#FFA90A" : "#D9D9D9"}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer"
            onClick={() => paginate(currentPageReview > 1 ? currentPageReview - 1 : 1)}><path d="M19 12H6M12 5l-7 7 7 7" /></svg> */}
          <div className="gap-3 inline-flex mx-2">
            {/* {Array.from({ length: Math.min(3, Math.ceil(reviews.length / reviewsPerPage)) }).map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            className={`rounded-full ${currentPageReview > 3 ? (i === 0 ? 'text-orange-FFA90A' : 'text-gray-D9D9D9') : (i === currentPageReview - 1 ? 'text-orange-FFA90A' : 'text-gray-D9D9D9')}`}
          >
            <circle cx="8" cy="8" r="8" fill="currentColor" />
          </svg>
        ))} */}
          </div>
          {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke={currentPageReview < Math.ceil(reviews.length / reviewsPerPage) ? "#FFA90A" : "#D9D9D9"}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer"
              onClick={() => paginate(currentPageReview < Math.ceil(reviews.length / reviewsPerPage) ? currentPageReview + 1 : currentPageReview)}
            >
              <path d="M5 12h13M12 5l7 7-7 7" />
            </svg> */}
        </div>
      </div>
      <div className="mt-16 mx-20">
        <h2 className="pb-8 text-orange-FFA90A md:text-3xl lg:text-3xl dark:text-white font-bold font-['Lato']">
          {" "}
          Locations{" "}
        </h2>
        {Object.keys(restaurant).length > 0 && (
          <div className="Maps flex items-center justify-center ">
            <iframe
              src={`https://maps.google.com/maps?q=${restaurant.latitude.replace(
                ",",
                "."
              )},${restaurant.longitude.replace(
                ",",
                "."
              )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              width="800px"
              height="300px"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        )}
      </div>
      <div className="mt-56">
        <FooterResto />
      </div>
    </div>
  );
};

export default UserRestaurantDetail;
