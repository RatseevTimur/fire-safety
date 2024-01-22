import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import styled from "styled-components";

import Licenses1 from "../../assets/img/Лицензия_Ямпольский-1.png"
import Licenses2 from "../../assets/img/Лицензия_Ямпольский-2.png"     
import Certificates from "../../assets/img/Аттестация_Ямпольский.png"

const DocViewer = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    Licenses1,
    Licenses2,
    Certificates];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    
    <div style={{display: "flex", justifyContent: 'center', textAlign: 'center' }}>
      <Docs>
        {images.map((src, index) => (
          <img
            src={src}
            onClick={() => openImageViewer(index)}
            width="300"
            key={index}
            style={{ margin: "10px" }}
            alt=""
          />
        ))}

        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            onClose={closeImageViewer}
            disableScroll={false}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.9)"
            }}
            closeOnClickOutside={true}
          />
        )}
      </Docs>
    </div>
    
  );
}

export default DocViewer;

const Docs = styled.div`
  display: flex; 
  justifyContent: center;
  text-aline: center;
  aline-items: center;

  @media (max-width: 960px) {
    display: block;
  }
`;