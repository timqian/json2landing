import React, { useState } from 'react';
import './UserQuickView.scss';
import exampleJsons from '../exampleJsons';

const QuickView = ({ isQuickViewVisible, setIsQuickViewVisible, setPageJson }) => (
  <div className={`user-quick-view ${isQuickViewVisible ? '' : 'is-hidden'}`}>
    <nav className="navbar is-black">
      <div className="navbar-brand">
        <a className="navbar-item" href onClick={() => setIsQuickViewVisible(false)}>
          <button type="button" className="delete is-large" aria-label="close" />
        </a>
        <a className="navbar-item" href onClick={() => setIsQuickViewVisible(false)}>Examples</a>
      </div>
    </nav>

    <aside className="menu">
      <p className="menu-label">
        Click to load
      </p>
      <ul className="menu-list">

        {exampleJsons.map(json => (
          <li>
            <a href onClick={() => setPageJson(json)}>
              👈
              {' '}
              {json.head.title}
            </a>

          </li>
        ))}
      </ul>
    </aside>
  </div>
);

export default QuickView;
