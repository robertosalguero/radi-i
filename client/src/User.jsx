import React, {PureComponent} from 'react';

const ICON = `M14,7.5c0,3.5899-2.9101,6.5-6.5,6.5S1,11.0899,1,7.5S3.9101,1,7.5,1S14,3.9101,14,7.5z`;

const pinStyle = {
  cursor: 'pointer',
  fill: '#ff0000',
  stroke: 'none'
};

export default class UserLoc extends PureComponent {

  render() {
    const {size = 20, onClick} = this.props;

    return (
      <svg height={size} viewBox='0 0 24 24'
        style={{...pinStyle, transform: `translate(${-size/2}px,${-size}px)`}}
        onClick={onClick} >
        <path d={ICON}/>
      </svg>
    );
  }
}
