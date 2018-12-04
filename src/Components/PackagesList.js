import React from 'react'
import '../Styles/list.css'
 class PackagesList extends React.Component {
 
  render() {
    const { packages } = this.props;

    return (
      <div className="list-container">
         <ul className="list">
            {
                packages.map(item => (
                    <li className="list-item" key={ item.id } onClick={() => this.props.selectItem(item.value)}>FaleMais { item.value }</li>
                ))
            }
        </ul>
      </div>
    )
  }
}

export default PackagesList;