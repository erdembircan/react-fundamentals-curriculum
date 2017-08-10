import React from 'react';
import ZipForm from './ZipForm';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homeContainer" style={{ backgroundImage: "url('/app/images/pattern.svg')" }}>
        <h1 className="header">Enter a City and State</h1>
        <ZipForm style={{ flexDirection: 'column' }} />
      </div>
    );
  }
}

export default Home;
