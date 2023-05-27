import React, { useState, useEffect } from 'react';
import AWS from 'aws-sdk';
import CustomModal from './CustomModal.js';
import './styles/Gallery.css';

const S3Bucket = () => {
  const [projectImages, setProjectImages] = useState([]);
  const [show, setShow] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);

  const handleShow = (id) => {
    setCurrentProjectId(id);
    setShow(true);
  };

  const handleClose = (id) => {
    setCurrentProjectId(id);
    setShow(false);
  };

  useEffect(() => {
    const getImages = "AKIAZJ7XN6M6UNBRKVYV";
    const getImagesMyst = "2v49fYw4jwYfMThMABqj0TCCfkX4XXOSGAp4fnVj";
  
    AWS.config.update({
      accessKeyId: getImages,
      secretAccessKey: getImagesMyst,
    });
  
    const s3 = new AWS.S3();
  
    const getImagesFromProject = async () => {
      const projects = [];
      for (let i = 1; i <= 15; i++) {
        const projectFolder = `Portfolio/Project${i}/FullSize/`;
        const params = {
          Bucket: 'greenviewsolutionsimages',
          Prefix: projectFolder,
        };
  
        try {
          const data = await s3.listObjectsV2(params).promise();
          const images = data.Contents
            .filter(item => item.Key.endsWith('.webp') || item.Key.endsWith('.jpeg') || item.Key.endsWith('.JPG'))
            .map(item => ({
              id: i,
              url: `https://ik.imagekit.io/greenviewsolutions/${item.Key}?tr=w-700,h-700`,
            }));
          projects.push(images);
        } catch (err) {
          console.log(err);
        }
      }
      setProjectImages(projects);
    };
    getImagesFromProject();
  }, []);
  
  return (
    <div>
      <ul>
        <div id="primaryBox">
          <div className="portfolioTitle">
            <h1>Portfolio</h1>
          </div>
          <div className="portfolioBlock">
            {projectImages.map((project) => (
              <div key={project[0].id}>
                <div className="portfolioProjects">
                  <img src={project[0].url} className="portfolioImage" alt="" />
                  <div className="portfolioBody">
                    <div onClick={() => handleShow(project[0].id)}>
                      <div className="btn2 from-left2">View Project</div>
                    </div>
                    {project.length > 0 && (
                      <CustomModal
                        show={show}
                        handleClose={handleClose}
                        currentProjectId={currentProjectId}
                        projectNumber={project[0].id}
                        images={project.map((image) => image.url)}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ul>
    </div>
  );
};

export default S3Bucket;
