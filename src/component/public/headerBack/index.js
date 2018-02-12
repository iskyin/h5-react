import React ,{Component} from 'react';
import './index.scss';

class HeaderBack extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className='back'>
          《
        </div>
        <div className='tit'>{this.props.titleObj.title}</div>
        <div className='menu'>···</div>
      </div>
    );
  }

}

export default HeaderBack;
