import { Typography } from "@mui/material";
import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>quote</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80" alt="Abhi" className="aboutAvatar" />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            Himanshu Verma
          </Typography>

          <Typography>title</Typography>

          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
           subtitle
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
           description
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
