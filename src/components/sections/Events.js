import React from "react";
import Event from "../../images/event.webp";
import One from "../../images/1.png";
import Two from "../../images/2.png";
import Three from "../../images/3.png";
import Four from "../../images/4.png";
import Five from "../../images/5.png";
import Six from "../../images/6.png";
import Seven from "../../images/7.png";
import Eight from "../../images/8.png";

const Events = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-col xl:flex-row">
        <div className="">
          <img style={{ objectFit: "cover" }} src={Event} />
        </div>
        <div
          className="flex justify-center items-center flex-col"
          style={{
            background:
              "linear-gradient(90deg,        rgba(255, 0, 0, 1) 0%,        rgba(255, 154, 0, 1) 10%,        rgba(208, 222, 33, 1) 20%,        rgba(79, 220, 74, 1) 30%,        rgba(63, 218, 216, 1) 40%,        rgba(47, 201, 226, 1) 50%,        rgba(28, 127, 238, 1) 60%,        rgba(95, 21, 242, 1) 70%,        rgba(186, 12, 248, 1) 80%,        rgba(251, 7, 217, 1) 90%,        rgba(255, 0, 0, 1) 100%  )",
          }}
        >
          <p
            style={{ textShadow: "1px 1px 1px black" }}
            className="text-4xl md:text-9xl text-white font-black text-center p-4"
          >
            Jockey Club &amp; Friends host Mardi Gras Boat Party
          </p>
          <p
            style={{ textShadow: "1px 1px 1px black" }}
            className="text-2xl text-white md:text-9xl font-black text-center p-4"
          >
            Sunday 7th March
          </p>
          <p
            style={{ textShadow: "1px 1px 1px black" }}
            className="text-white text-2xl md:text-9xl font-black text-center p-4"
          >
            2:00 - 7:00pm
          </p>
          <a
            href="https://www.eventbrite.com.au/e/jockeyclub-friends-seaduction-mardi-gras-recovery-boat-party-tickets-142074144591"
            className="text-center mt-4 border-4 font-bold border-white text-white focus:outline-none hover:text-gray-600 hover:shadow-2xl hover:bg-green-100 text-4xl md:text-6xl p-4 m-4 rounded-xl  "
          >
            Buy Tickets
          </a>
        </div>
      </div>
      <div className="flex flex-row flex-wrap">
        <div className="w-1/3">
          <img src={Seven} />
        </div>
        <div className="w-1/3">
          <img src={Five} />
        </div>
        <div className="w-1/3">
          <img src={Six} />
        </div>
        <div className="w-1/3">
          <img src={Four} />
        </div>
        <div className="w-1/3">
          <img src={Two} />
        </div>
        <div className="w-1/3">
          <img src={Three} />
        </div>

        <div className="w-1/2 flex justify-center items-center">
          <img src={Eight} />
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img src={One} />
        </div>
      </div>
    </div>
  );
};

export default Events;
