import React from 'react'
import '../Styles/list.css'

class OptionsList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    }
  }

  render() {
    const { options } = this.props;

    return (
      <div className="list-container">
        <ul className="list">
            {
                options.map(item => (
                    <li className="list-item" key={ item.id } onClick={() => this.props.selectItem(item.code)} > {item.code} </li>
                ))
            }
        </ul>
      </div>
    )
  }
}

export default OptionsList;

 /*onClick={() => this.toggleItem(item.title, item.id, item.key)}*/