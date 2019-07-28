import React, { useState, useEffect } from 'react';
import sections from '../sections/index';
import './SectionModal.scss';
import SectionContainerContainers from './SectionContainerContainers';
import SectionContainer from './SectionContainer';

const Modal = ({
  isModalVisible, setIsModalVisible, pageJson, setPageJson,
}) => {
  const addSection = (section) => {
    setPageJson(pageJson.sections.push(section));
  };

  // useEffect(() => {
  //   function resizeIFrameToFitContent(iFrame) {
  //     // iFrame.style.width = iFrame.contentWindow.document.body.scrollWidth;
  //     iFrame.style.height = iFrame.contentWindow.document.body.scrollHeight;
  //     console.log(iFrame.contentWindow.document, 'iframe body');
  //   }

  //   setTimeout(() => {
  //     // var iFrame = document.getElementById( 'iFrame1' );
  //     // resizeIFrameToFitContent( iFrame );

  //     // or, to resize all iframes:
  //     const iframes = document.querySelectorAll('iframe');
  //     for (let i = 0; i < iframes.length; i++) {
  //       resizeIFrameToFitContent(iframes[i]);
  //     }
  //   }, 1000);
  // }, []);

  return (
    <div className={`modal ${isModalVisible ? 'is-active' : ''}`}>
      <div className="modal-background" role="presentation" onClick={() => setIsModalVisible(false)} />
      <div className="modal-card section-modal">
        <header className="modal-card-head">
          <p className="modal-card-title">Sections</p>
          <button type="button" className="delete" aria-label="close" onClick={() => setIsModalVisible(false)} />
        </header>
        <section className="modal-card-body">
          <SectionContainerContainers />
        </section>
      </div>
    </div>
  );
};

export default Modal;
