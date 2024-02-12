// Write your code here
import {Component} from 'react'
import './index.css'

class AppItem extends Component {
  render() {
    const {appDetails} = this.props
    const {appName, imageUrl} = appDetails

    return (
      <>
        <li className="app-item-container">
          <img className="app-item-image" src={imageUrl} alt={appName} />
          <p className="app-item-name">{appName}</p>
        </li>
      </>
    )
  }
}

export default AppItem
