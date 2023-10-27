import React from 'react'
import "../styles/Projects.css"
import { Button, Typography } from "@mui/material";
import {AiOutlineProject} from "react-icons/ai"
import { Delete } from "@mui/icons-material";
import {FaRegSmileWink} from "react-icons/fa"

import img from "../Images/img.png"


const ProjectCard = ({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false,
    id,
  }) => {

      return (
      <>
        <a href={url} className="projectCard" target="black">
          <div>
            <img src={projectImage} alt="Project" />
            <Typography variant="h5">{projectTitle}</Typography>
          </div>
          <div>
            <Typography variant="h4"> About Project</Typography>
            <Typography>{description}</Typography>
            <Typography variant="h6">Tech Stack: {technologies}</Typography>
          </div>
        </a>
  
        {isAdmin && (
          <Button
            style={{ color: "rgba(40,40,40,0.7)" }}
          >
            <Delete />
          </Button>
        )}
      </>
    );
  };









const Projects = () => {

    const projects=[1,2,3];

  return (
    <div className='projects'>


       <Typography variant="h3">
        Projects <AiOutlineProject />
      </Typography>

       

      <div className="projectsWrapper">


      {projects.map(()=>{

return(

    <ProjectCard
                url=""
                projectImage={img}
                projectTitle="Web dev"
                description="This is a sample project"
                technologies="Mongodb, react native, react js, node.js, express.js"
            />


)

          
      })}


       
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
 



    </div>





  )
}

export default Projects
