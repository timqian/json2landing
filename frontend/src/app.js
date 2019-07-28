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

function App() {
  const [isDragging, setIsDragging] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  const [pageJson, setPageJson] = useState({
    head: {
      title: 'wewe',
      description: 'Open group chat to the world',
      faviconUrl: 'https://t9t.io/favicon.ico',
    },
    sections: [
      {
        type: 'nav1',
        info: {
          iconUrl: 'https://t9t.io/favicon.ico',
          iconHref: 'https://wewe.t9t.io/',
          leftLinks: [
            {
              text: 'Groups',
              href: 'https://wewe.t9t.io/groups',
            },
            {
              text: 'Join wewe',
              href: 'https://wewe.t9t.io/join',
            },
          ],
          rightLinks: [
            {
              text: 'About',
              href: 'https://wewe.t9t.io/about',
            },
            {
              text: 'GitHub',
              href: 'https://github.com/t9tio/wewe',
            },
          ],
        },
      },
      {
        type: 'hero1',
        info: {
          title: 'wewe',
          description: 'Open group chat to the world',
          img: {
            src: 'https://raw.githubusercontent.com/timqian/images/master/20190723115805.png',
            alt: 'wewe',
            imgLinkTo: 'https://wewe.t9t.io',
          },
          buttonLeftText: 'View groups',
          buttonLeftLink: 'https://wewe.t9t.io/groups',
          buttonRightText: 'Join wewe',
          buttonRightLink: 'https://wewe.t9t.io/join',
        },
      },
      {
        type: 'features1',
        info: {
          title: 'Why open group chat',
          items: [
            {
              title: 'Bring valuable disscussions to the open internet',
            },
            {
              title: 'Grow influence of your group chat',
            },
            {
              title: 'Backup chat history',
            },
          ],
        },
      },
      {
        type: 'features2',
        info: {
          background: 'white',
          content: {
            title: 'Save chat history',
            description: 'never lose chat messages',
          },
          img: {
            src: 'https://raw.githubusercontent.com/timqian/images/master/20190723123506.png',
            alt: 'groups',
            imgLinkTo: 'https://wewe.t9t.io/groups',
          },
        },
      },
      {
        type: 'features2',
        info: {
          background: 'black',
          content: {
            title: 'Extract topics by hand or automatically',
            description: '',
          },
          img: {
            src: 'https://raw.githubusercontent.com/timqian/images/master/20190723113817.png',
            alt: 'groups',
            imgLinkTo: 'https://wewe.t9t.io/groups',
          },
        },
      },
      {
        type: 'features2',
        info: {
          background: 'white',
          content: {
            title: 'Content accessable to search engine',
            description: '',
          },
          img: {
            src: 'https://raw.githubusercontent.com/timqian/images/master/20190723115409.png',
            alt: 'groups',
            imgLinkTo: 'https://wewe.t9t.io/groups',
          },
        },
      },
      {
        type: 'features2',
        info: {
          background: 'black',
          content: {
            title: 'Support different kinds of chat tools like slack, wechat, and more to come',
            description: '',
          },
          img: {
            src: 'https://raw.githubusercontent.com/timqian/images/master/20190720212424.png',
            alt: 'groups',
            imgLinkTo: 'https://wewe.t9t.io/groups',
          },
        },
      },
      {
        type: 'features2',
        info: {
          background: 'white',
          content: {
            title: 'Trusted by many open minded communities',
            description: '',
          },
          img: {
            src: 'https://raw.githubusercontent.com/timqian/images/master/20190723093421.png',
            alt: 'groups',
            imgLinkTo: 'https://wewe.t9t.io/groups',
          },
        },
      },
      {
        type: 'buttons1',
        info: {
          buttonLeftText: 'View groups',
          buttonLeftLink: 'https://wewe.t9t.io/groups',
          buttonRightText: 'Join wewe',
          buttonRightLink: 'https://wewe.t9t.io/join',
        },
      },
      {
        type: 'footer1',
        info: {
          slogan: 'A [t9t](https://t9t.io) project build by [timqian](https://twitter.com/tim_qian).',
          githubLink: 'https://github.com/timqian',
          twitterLink: 'https://twitter.com/tim_qian',
          slackLink: 'https://join.slack.com/t/t9tio/shared_invite/enQtNjgzMzkwMDM0NTE3LTE5ZTUzYjU4Y2I0YzRiZjNkYTkzMzE1ZmM0NDdmYzRlZmMxNGY1MzZlN2EwYjYyNWVlMWY0Nzk2MDBhNWZlY2I',
          wechatLink: 'https://raw.githubusercontent.com/timqian/images/master/3811553342733_.pic.jpg',
          emailLink: 'mailto:timqian92@qq.com',
        },
      },
    ],
  });

  const reslutHtml = jsonToHtml(pageJson);

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
            <a className="button is-outlined is-white">Sign in with GitHub</a>
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
