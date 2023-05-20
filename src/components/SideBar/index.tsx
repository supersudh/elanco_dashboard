import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

import './SideBar.scss';

export default function SideBar() {
  return (
    <div className="SideBarContainer">
      <div className="SideBarContainerInner">
        <div className="brandSection">
          <FontAwesomeIcon icon={faBarsStaggered} />
          <span className="brandText">Elanco</span>
        </div>
      </div>
    </div>
  );
}