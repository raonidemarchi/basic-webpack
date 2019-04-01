import React from 'react';
import style from './styles.scss';

console.log(style)

class Welcome extends React.Component {
  render() {
    return <h1 className={style.green}>Hello, {this.props.name}</h1>;
  }
}

export default Welcome;