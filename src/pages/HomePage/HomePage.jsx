import css from './HomePage.module.css';
import heroImage from '../../img/Hero image.png';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={css.container}>
      <div className={css.imageContainer}>
        <img className={css.img} src={heroImage} alt="hero image" />
        <div className={css.textContainer}>
          <h1 className={css.text}>
            Campers of your dreams
          </h1>
          <h2 className={css.title}>
           You can find everything you want in our catalog
          </h2>
          <NavLink className={css.navLink} to="/catalog">
          View Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// import css from './HomePage.module.css';
// import heroImage from '../../img/Hero image.png';
// import { NavLink } from 'react-router-dom';

// const HomePage = () => {
//   return (
//     <div className={css.container}>
//       <div className={css.wrapper}>
//         <h1 className={css.text}>
//           Adventure Awaits: Book Your Perfect Camper Van Today!
//         </h1>
//         <img className={css.img} src={heroImage} alt="hero image" />
//       </div>
//       <NavLink className={css.navLink} to="/catalog">
//         Find my Camper
//       </NavLink>
//     </div>
//   );
// };

// export default HomePage;