import PropTypes from 'prop-types';
function Card({ children, reverse }) {
  return <div className={`card ${reverse && 'reverse'}  `}> {children}</div>;
}
export default Card;

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
