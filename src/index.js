import React from 'react';
import * as styles from './index.css';
class ReactDemo extends React.Component{
  render() {
    return (
      <div className={styles.wrapper}>
        <h2>Hello World</h2>
        <span className={styles.spantext}>这是我搭建的第一个npm React Component脚手架</span>
      </div>
    )
  }
} 

export default ReactDemo;