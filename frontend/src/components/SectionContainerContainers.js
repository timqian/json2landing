import React, { useState } from 'react';
import groupBy from 'lodash.groupby';
import sectionObj from '../sections';
import SectionContainer from './SectionContainer';
import './SectionContainerContainers.scss';

const sectionArr = Object.keys(sectionObj).map(sectionName => sectionObj[sectionName]);

const sectionCollectionMap = groupBy(sectionArr, section => section.type);

const SectionCollectionEl = ({ sectionCollection, collectionType }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="card is-fullwidth section-container-container-div">
      <header className="card-header" onClick={() => setIsCollapsed(!isCollapsed)}>
        <p className="card-header-title">
          {isCollapsed ? '▼' : '▲'}
          {' '}
          {collectionType}
        </p>
      </header>
      <div className={`card-content ${isCollapsed ? 'is-hidden' : ''}`}>
        <div className="content">
          {
            sectionCollection.map(section => (
              <SectionContainer
                sectionJson={section.sampleJson}
                sectionHeight={section.sampleHeight}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

const containerContainers = Object.keys(sectionCollectionMap).map(type => (
  <SectionCollectionEl
    sectionCollection={sectionCollectionMap[type]}
    collectionType={type}
  />
));

const El = () => (
  <div>
    {containerContainers}
  </div>
);

export default El;
