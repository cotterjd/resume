import PropTypes from 'prop-types'
import styled from 'styled-components'
import { A } from '../App.js'

const Desc = styled.div`
  padding: 10px 0 0 10px;
`

function Project({ url, name, stack, desc, list }) {
  return (
    <div class="project">
      <div class="project-title">
        { url ? <A href={url}>{name}</A> : <u>{name}</u> } ({stack})
      </div>
      { desc && <Desc>
        { desc }
      </Desc> }
      <ul class="project-list">
        { list.map(x => <li>{x}</li>) }
      </ul>
    </div>
  );
}

Project.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  desc: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
}

export default Project;
