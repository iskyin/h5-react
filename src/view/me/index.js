import React ,{ Component } from 'react';
import './index.scss'

import HeaderBack from '@/component/public/headerBack';

const titleObj={
  title:'这是标题'
}


class Me extends Component {
  render() {
    return (
      <div className="me">
        <HeaderBack titleObj={titleObj}/>

        <div className="title">
          <span>我的事件</span>
          <span>更多事件</span>
        </div>

      </div>
    );
  }
}

export default Me;
