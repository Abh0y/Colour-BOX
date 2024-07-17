import PropTypes from 'prop-types';
import style from "./Container.module.css"

const Container = (props)=> {
  return (
    <div className={`${style.container} card text-bg-dark`}>
      <img
        src="../assets/BG-image.jpg"
        className={`${style.cardimg} card-img`}
        alt="..."
      ></img>
      <div className="card-img-overlay">
        <h5 className={`${style.cardtitle}`}>Colour BOX</h5>
        <div className={style.textcontain}>
        <ul>
          <li className={`${style.cardtxt} `}> When you click on a box color changes to green.</li>
          <li className={`${style.cardtxt} `}>When you click on the last box, all colors changes to orange in sequence
          of their clicks.</li>
        </ul>
        </div>
        <p>{props.children}</p>
      </div>
    </div>
  );

}
Container.propTypes = {
  children: PropTypes.node,
};

export default Container;