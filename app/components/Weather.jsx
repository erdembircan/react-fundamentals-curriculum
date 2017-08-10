import React from 'react';
import QueryString from 'query-string';
import func from '../utils/api';
import Preview from './Preview';

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      data: null,
      loading: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const city = QueryString.parse(this.props.location.search);
    func.getForecast(city.city).then((e) => {
      console.log(e);
      this.setState({ city: city.city, data: e, loading: false });
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ loading: true });
    const city = QueryString.parse(nextProps.location.search);
    func.getForecast(city.city).then((e) => {
      console.log(e);
      this.setState({ city: city.city, data: e, loading: false });
    });
  }

  handleClick(e) {
    console.log(e);
    e.city = this.state.city;
    this.props.history.push({
      pathname: `/detail/${this.state.city}`,
      state: e,
    });
  }

  render() {
    return (
      <div>
        <h1 className="cityHeader">
          {this.state.city}
        </h1>
        <div className="forecastContainer">
          {this.state.loading === false &&
            this.state.data.list.map(obj =>
              <Preview style="clickableUl" onClick={this.handleClick} key={obj.dt} data={obj} />,
            )}
        </div>
      </div>
    );
  }
}

export default Weather;
