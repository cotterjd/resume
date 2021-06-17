import PropTypes from 'prop-types'
import styled from 'styled-components'
import { A } from '../App.js'

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

export default Project;
