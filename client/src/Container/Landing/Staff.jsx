import React from "react";
import "./Staff.css";
import cafe from '../../assets/images/review/cafe.jpg'
import staff from '../../assets/images/review/staff.jpg'

const Staff = () => {
  return (
    <div id="staff">
      <div className="first">
        <div className="text">
          <h2>Our Ambience</h2>
          <p>
            "Discover a haven of cozy charm and inviting vibes at our cafe,
            where the soothing ambience complements every sip and bite, making
            moments truly memorable."
          </p>
        </div>
        <div className="image">
        <img src={cafe}/>
        </div>
      </div>
      <div className="line"></div>
      <div className="second">
        <div className="text">
          <h2>Our Staff</h2>
          <p>
            "Our dedicated staff, with their warm smiles and expert service,
            embody the heart of our cafe, ensuring your experience is always
            exceptional and welcoming."
          </p>
        </div>
        <div className="image">
          <img src={staff}/>
        </div>
      </div>
    </div>
  );
};

export default Staff;
