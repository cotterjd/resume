import PropTypes from 'prop-types'

function BulletPoints(props) {
  return (
    <ul class="project-list">
      { props.list.map(x => <li>{x}</li>) }
    </ul>
  );
}

BulletPoints.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
}

export default BulletPoints;
