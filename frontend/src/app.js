import './app.scss';
import 'bulma';
import 'bulma-tooltip';
import 'bulma-switch';

import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import React, { useState, useEffect } from 'react';
import fileDownload from 'js-file-download';
import JSONInput from 'react-json-editor-ajrm/es';

import jsonToHtml from './utils/jsonToHtml';
import Modal from './components/Modal';
import QuickView from './components/UserQuickView';

function App() {
  const [isDragging, setIsDragging] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [isQuickViewVisible, setIsQuickViewVisible] = useState(false);

  const [pageJson, setPageJson] = useState({
    sections: [],
  });

  const reslutHtml = jsonToHtml(pageJson);

  console.log(reslutHtml)
  const frameSrc = `data:text/html,${reslutHtml}`;

  const IframeDiv = () => (
    <div className="iframe-div">
      {isDragging ? <div className="iframe-overlay" /> : ''}
      <iframe
        className="the-frame"
        src={frameSrc}
        title="preview"
      />
    </div>
  );

  return (
    <div>
      <Modal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} pageJson={pageJson} setPageJson={setPageJson} />
      <QuickView isQuickViewVisible={isQuickViewVisible} setIsQuickViewVisible={setIsQuickViewVisible} setPageJson={setPageJson}/>
      <nav className="navbar is-black">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="https://t9t.io/favicon.ico" width="28" height="28" alt="t9t" />
          </a>
          <div className="navbar-item">
            <a
              className="button is-dark"
              href
              onClick={() => setIsModalVisible(true)}
            >
              Add a section
            </a>

          </div>
          <div className="navbar-item">
            {/* <a href="https://www.patreon.com/timqian" className="button is-danger is-rounded">Become a Patron!</a> */}
            <div className="field">
              <input
                onChange={() => {
                  console.log(isPreviewMode);
                  setIsPreviewMode(!isPreviewMode);
                }}
                id="switchRoundedOutlinedSuccess"
                type="checkbox"
                name="switchRoundedOutlinedSuccess"
                className="switch is-rtl is-rounded is-outlined is-success"
                checked={isPreviewMode}
              />

              <label htmlFor="switchRoundedOutlinedSuccess">Preview</label>
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item" href>
            <a
              href
              className="button is-dark"
              onClick={() => fileDownload(reslutHtml, 'index.html')}
            >
              Download HTML
            </a>
          </div>
          <div className="navbar-item" href>
            <a className="button is-dark tooltip is-tooltip-bottom" data-tooltip="Sign in to save">Save</a>
          </div>
          <div className="navbar-item">
            <a className="button is-outlined is-white" href onClick={() => setIsQuickViewVisible(true)}>Examples ➤</a>
          </div>
        </div>
      </nav>

      {
        isPreviewMode ? (
          <IframeDiv />
        )
          : (
            <SplitterLayout
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
            >
              <div>
                <JSONInput
                  className="json-editor"
                  placeholder={pageJson}
                  onChange={(obj) => {
                    if (obj.jsObject) setPageJson(obj.jsObject);
                  }}
                  width="100%"
                  height="100%"
                />
              </div>
              <IframeDiv />
            </SplitterLayout>
          )
      }

    </div>
  );
}

export default App;
