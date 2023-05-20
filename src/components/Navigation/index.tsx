import { NavLink } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation() {
  return (
    <div className="NavigationContainer">
      <div className="NavigationContainerInner">
        <NavLink
          to="/"
          className={({isActive}) => isActive ? 'active' : ''}
        >
          Applications
        </NavLink>
        <NavLink
          to="/resources"
          className={({isActive}) => isActive ? 'active' : ''}
        >
          Resources
        </NavLink>
      </div>
    </div>
  );
};
