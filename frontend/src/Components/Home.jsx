import React, { useEffect } from "react";
import "../styles/Home.css";
import * as THREE from "three";
import moonimg from "../Images/moon.jpg";
import venusimg from "../Images/venus.jpg";
import spaceimg from "../Images/space.jpg";
import { Typography } from "@mui/material";
import TimeLine from "../Components/TimeLine";
import img from "../Images/img.png"
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import YoutubeCard from "./YoutubeCard";

export const Home = ({ timelines, youtubes, skills }) => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const moonTexture = textureLoader.load(moonimg);
    const venusTexture = textureLoader.load(venusimg);
    // const spaceTexture = textureLoader.load(spaceimg);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      80,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const canvas = document.querySelector(".homeCanvas");

    const renderer = new THREE.WebGLRenderer({ canvas });

    const moongeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonmaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const moon = new THREE.Mesh(moongeometry, moonmaterial);

    const venusgeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusmaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const venus = new THREE.Mesh(venusgeometry, venusmaterial);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    const pointLight2 = new THREE.PointLight(0xffffff, 5);

    pointLight.position.set(8, 8, 5);
    pointLight2.position.set(2, 2, 5);

    // const lightHelper = new THREE.PointLightHelper(pointLight);
    // const lightHelper2 = new THREE.PointLightHelper(pointLight2);

    scene.add(moon);
    // scene.add(lightHelper);
    // scene.add(lightHelper2);

    scene.add(venus);
    scene.add(pointLight);

    scene.add(pointLight2);

    venus.position.set(8, 5, 4);
    camera.position.set(4, 4, 8);

    const constSpeed = 0.01;

    window.addEventListener("mousemove", (e) => {
      if (e.clientX <= window.innerWidth / 2) {
        moon.rotation.x += constSpeed + 0.01;
        moon.rotation.y -= constSpeed + 0.01;

        venus.rotation.x += constSpeed + 0.01;
        venus.rotation.y -= constSpeed + 0.01;
      }

      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed + 0.01;
        moon.rotation.y -= constSpeed + 0.01;

        venus.rotation.x -= constSpeed + 0.01;
        venus.rotation.y -= constSpeed + 0.01;
      }

      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x += constSpeed + 0.01;
        moon.rotation.y -= constSpeed + 0.01;

        venus.rotation.x += constSpeed + 0.01;
        venus.rotation.y -= constSpeed + 0.01;
      }

      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= constSpeed + 0.01;
        moon.rotation.y -= constSpeed + 0.01;

        venus.rotation.x -= constSpeed + 0.01;
        venus.rotation.y -= constSpeed + 0.01;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.01;
      venus.rotation.x += 0.01;

      renderer.setSize(window.innerWidth, window.innerHeight);

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>

      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <TimeLine timelines={[1,2,3,4]} />
      </div>

    
      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={img} alt="Face1" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src={img} alt="Face2" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src={img} alt="Face3" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src={img} alt="Face4" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src={img} alt="Face5" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src={img} alt="Face6" />
          </div>
        </div>

        <div className="cubeShadow"></div>

        <div className="homeskillsBox" id="homeskillsBox">
          <SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
        </div>
      </div>



      <div className="homeYoutube">
        <Typography variant="h3"> YOUTUBE VIDEOS</Typography>

        <div className="homeYoutubeWrapper">
          {/* {youtubes.map((item) => (
            <YoutubeCard
              image={item.image.url}
              title={item.title}
              url={item.url}
              id={item._id}
              key={item._id}
            />
          ))} */}


          <YoutubeCard image="https://plus.unsplash.com/premium_photo-1664391847942-f9c4562ad692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1532&q=80" title="Sample video"/>
        </div>
      </div>




    </div>
  );
};
