import React, { useEffect, useState } from "react";
import "./BA.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import numberOfBAImg from "../data/ba-pic-list";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const BA = () => {
  const list = numberOfBAImg();
  const [baPic, setbaPic] = useState("");
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleForwardClick();
    }
    if (isRightSwipe) {
      handlePrevClick();
    }
  };

  useEffect(() => {
    setbaPic(list[0]);
  }, []);

  const handleChangePageNumber = (event) => {
    let num = event.target.value;
    if (num > 0 && num <= list.length) {
      setbaPic(list[num - 1]);
    } else if (num === "") {
      setbaPic(list[0]);
    }
  };

  const handlePrevClick = () => {
    let currentPageNumber = list.indexOf(baPic);
    if (currentPageNumber > 0) {
      setbaPic(list[currentPageNumber - 1]);
    }
  };

  const handleForwardClick = () => {
    let currentPageNumber = list.indexOf(baPic);
    if (currentPageNumber >= 0 && currentPageNumber < list.length - 1) {
      setbaPic(list[currentPageNumber + 1]);
    }
  };

  return (
    <div className="container">
      <p className="pagination">
        Page {list.indexOf(baPic) + 1} of {list.length}
      </p>
      <div>
        <label className="input-label">Page number: </label>
        <input
          className="input"
          onChange={handleChangePageNumber}
          placeholder="Enter a number..."
          type="search"
        ></input>
      </div>
      <div className="swiper">
        <div className="left-button" onClick={handlePrevClick}>
          <ArrowBackIosIcon sx={{ fontSize: 50 }}></ArrowBackIosIcon>
        </div>

        <img
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="swiperslide"
          src={baPic}
          alt={baPic}
        ></img>

        <div className="right-button" onClick={handleForwardClick}>
          <ArrowForwardIosIcon sx={{ fontSize: 50 }}></ArrowForwardIosIcon>
        </div>
      </div>
    </div>
  );
};

export default BA;
