import React from 'react';
import getFormattedDate from '../utils/date';

function Preview(props) {
  return (
    <div className="preview">
      <ul className={props.style} onClick={props.onClick.bind(this, props.data)}>
        <li>
          <img
            alt="empty"
            className="previewImg"
            style={{ height: '150px' }}
            src={`/app/images/weather-icons/${props.data.weather[0].icon}.svg`}
          />
        </li>
        <li className="previewText">
          {getFormattedDate(props.data.dt)}
        </li>
        {props.children}
      </ul>
    </div>
  );
}

export default Preview;
