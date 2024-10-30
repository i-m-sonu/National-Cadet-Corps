import React from "react";
import "../css/homepage.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <>
    <Link to="/timeline" className="un">
      <div className="bg">
        <div className="con">
          <h1>National Cadet Corps</h1>
          <br />
          <p>
            The National Cadet Corps (NCC) is the youth wing of the Indian Armed
            Forces, offering young cadets opportunities to develop discipline,
            leadership, and a sense of civic duty. Established in 1948, NCC
            provides structured training in physical fitness, survival skills,
            and military drills. It encourages teamwork, patriotism, and
            personal growth through its camps, including Thal Sainik, Air Force,
            and Naval camps, where cadets compete in various skill areas. NCC
            cadets also participate in community service and disaster relief
            efforts, fostering a strong commitment to social service. Upon
            completion, cadets earn certifications that are highly respected,
            especially for careers in the defense services.
          </p>
          <br />
          <Link to="/timeline">
            <Button variant="contained">Timeline</Button>
          </Link>
        </div>
      </div>
      </Link>
    </>
  );
};

export default Homepage;
