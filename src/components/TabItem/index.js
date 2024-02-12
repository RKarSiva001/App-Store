// Write your code here
import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  render() {
    const {tabDetails, clickTabItem, isActive} = this.props
    const {tabId, displayText} = tabDetails

    const onClickTabItem = () => {
      clickTabItem(tabId)
    }

    const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

    return (
      <li className="tab-item-container ">
        <button
          type="button"
          className={`tab-btn ${activeTabBtnClassName}`}
          onClick={onClickTabItem}
        >
          {displayText}
        </button>
      </li>
    )
  }
}

export default TabItem
