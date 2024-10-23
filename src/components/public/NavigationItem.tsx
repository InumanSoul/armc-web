import { NavLink } from "react-router-dom"

interface NavigationItemProps {
  item: string
  to: string
}

const NavigationItem = ({ item, to }: NavigationItemProps) => {
  const activeClass = 'opacity-100 px-2 py-2 inline-flex';
	const inactiveClass = 'opacity-60 px-2 py-2 inline-flex';
  
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? activeClass : inactiveClass
        }>
        {item}
      </NavLink>
    </li>
  )
}

export default NavigationItem;