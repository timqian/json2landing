import 'bulma-quickview';

import React, { useState, useEffect } from 'react';

const QuickView = () => {
  console.log('');
  return (
    <div id="quickviewDefault" className="quickview">
      <header className="quickview-header">
        <p className="title">Quickview title</p>
        <span className="delete" data-dismiss="quickview" />
      </header>

      <div className="quickview-body">
        <div className="quickview-block">
            ...
        </div>
      </div>

      <footer className="quickview-footer" />
    </div>
  );
};

export default QuickView;
