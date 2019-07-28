import React, { useState } from 'react';
import 'bulma-switch';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import JSONInput from 'react-json-editor-ajrm/es';
import copy from 'copy-to-clipboard';
import cogoToast from 'cogo-toast';


import jsonToHtml from '../utils/jsonToHtml';
import './SectionContainer.scss';

const SectionContainer = ({ sectionJson, sectionHeight }) => {
  const [isPreviewMode, setIsPreviewMode] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  const onCopyJSON = () => {
    copy(JSON.stringify(sectionJson, null, 2));
    cogoToast.success(
      <div>
        <b>JSON of this section is copied!</b>
      </div>, { position: 'top-left' },
    );
  };

  const IframeDiv = () => (
    <div className="section-container-iframe-div">
      {isDragging ? <div className="section-container-iframe-overlay" /> : ''}
      <iframe
        className="section-container-frame"
        src={`data:text/html,${jsonToHtml({
          sections: [
            sectionJson,
          ],
        })}`}
        title="preview"
      />
    </div>
  );

  return (
    <div className="section-container">
      <div className="level">
        <div className="level-left">
          <div className="level-item">
            <a href className="button is-dark is-outlined is-rounded" onClick={onCopyJSON}>Copy JSON</a>
          </div>
          <div className="level-item">
            <div className="field">
              <input
                onChange={() => setIsPreviewMode(!isPreviewMode)}
                id={`switchRoundedOutlinedSuccess-${sectionJson.type}`}
                type="checkbox"
                name="switchRoundedOutlinedSuccess"
                className="switch is-rtl is-rounded is-outlined is-success"
                checked={isPreviewMode}
              />
              <label htmlFor={`switchRoundedOutlinedSuccess-${sectionJson.type}`}>Preview</label>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        height: sectionHeight, marginBottom: '2rem', boxShadow: '0 0 8px 10px gray', position: 'relative',
      }}
      >
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
                    placeholder={sectionJson}
                    viewOnly
                    width="100%"
                    height="100%"
                  />
                </div>
                <IframeDiv />
              </SplitterLayout>
            )
        }
      </div>
    </div>
  );
};
export default SectionContainer;
