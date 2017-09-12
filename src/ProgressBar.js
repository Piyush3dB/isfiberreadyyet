import React from 'react';

class ProgressBar extends React.Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    let data = this.props.data;
    return (
      <div className="ProgressBar">
        <div className="ProgressBarFill" style={{width: data.percent + "%"}}>
          NoC Performance Dashboard
        </div>
      </div>
    );
  }
}

export default ProgressBar;
