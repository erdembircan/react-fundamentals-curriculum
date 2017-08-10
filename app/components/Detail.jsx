import React from 'react';
import Preview from './Preview';

class Detail extends React.Component {
  render() {
    const props = this.props.location.state;
    console.log(props);
    return (
      <div className="detailContainer">
        <Preview onClick={() => {}} data={props}>
          <li>
            {props.city}
          </li>
          <li>
            Min. temperate: {props.temp.min}
          </li>
          <li>
            Max. temperate: {props.temp.max}
          </li>
          <li>
            Humidity: {props.humidity}%
          </li>
        </Preview>
      </div>
    );
  }
}

export default Detail;
