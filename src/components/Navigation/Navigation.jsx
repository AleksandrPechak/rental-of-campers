import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';
import logo from '../../img/logo.png';

const Navigation = () => {
  return (
    <header className={css.header}>
      <img src={logo} alt="Logo" className={css.logo} />
      <nav className={css.nav}>
        <NavLink
          className={({ isActive }) =>
            clsx(css.navLink, { [css.navLinkActive]: isActive })
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.navLink, { [css.navLinkActive]: isActive })
          }
          to="/catalog"
        >
          Catalog
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.navLink, { [css.navLinkActive]: isActive })
          }
          to="/favorites"
        >
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;

// import { NavLink } from 'react-router-dom';
// import css from './Navigation.module.css';
// import clsx from 'clsx';

// const Navigation = () => {
//   return (
//     <header className={css.header}>
//       <NavLink
//         className={({ isActive }) =>
//           clsx(css.navLink, { [css.navLinkActive]: isActive })
//         }
//         to="/"
//       >
//         Home
//       </NavLink>
//       <NavLink
//         className={({ isActive }) =>
//           clsx(css.navLink, { [css.navLinkActive]: isActive })
//         }
//         to="/catalog"
//       >
//         Catalog
//       </NavLink>
//       <NavLink
//         className={({ isActive }) =>
//           clsx(css.navLink, { [css.navLinkActive]: isActive })
//         }
//         to="/favorites"
//       >
//         Favorites
//       </NavLink>
//     </header>
//   );
// };

// export default Navigation;
