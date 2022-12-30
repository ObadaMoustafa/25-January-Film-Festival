import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './style.css';

function BroadcastingAndScreening() {
  return (
    <div className="broadcasting-container">
      <div className="page-introduction">
        <h2>
          After you submit your films you can choose between just submitting to
          the festival or also give us the right to one or none or all the
          options:
        </h2>
      </div>
      <div className="broadcasting-conditions-container">
        <div className="title">
          <span className="broadcast-double-overlay">
            <ChevronRightIcon className="double-arrow-1" />
            <ChevronRightIcon className="double-arrow-2" />
          </span>
          <p>
            Broadcast the film on a Dutch TV channel, or international TV
            channel.
          </p>
        </div>
        <div className="title">
          <span className="broadcast-double-overlay">
            <ChevronRightIcon className="double-arrow-1" />
            <ChevronRightIcon className="double-arrow-2" />
          </span>
          <p>
            Stream your film on our website and make an analysing night to
            stream the film and analyse it by filmmakers.
          </p>
        </div>
        <div className="title">
          <span className="broadcast-double-overlay">
            <ChevronRightIcon className="double-arrow-1" />
            <ChevronRightIcon className="double-arrow-2" />
          </span>
          <p>
            Screen the film in some small theater in Leiden during the days of
            the festival, we can screen the films even those which couldn't make
            it to the finals. Or those which made it to the final and didn't win
            the prizes.
          </p>
        </div>
      </div>
      <div className='broadcast-extra-information'>
        <p>
          All these steps are applicable after the acceptance of the filmmaker
          on one or all the previous terms.
        </p>
      </div>
    </div>
  );
}

export default BroadcastingAndScreening;
