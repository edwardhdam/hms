import PropTypes from 'prop-types'
import { compose, setPropTypes, onlyUpdateForPropTypes, withStateHandlers, defaultProps } from 'recompose'
import TextBox from './TextBox';

export default compose(
  onlyUpdateForPropTypes,
  setPropTypes({
    caption: PropTypes.string,
    value: PropTypes.string,
    required: PropTypes.bool,
    placeHolder: PropTypes.string,
    maxLength: PropTypes.number,
    onChanged: PropTypes.func,
  }),
  defaultProps({
    value: '',
  }),
  withStateHandlers(
    // map props to states
    ({ value, required }) => ({ value, required }),
    {
      // handler text changed events
      onTextChanged: (state, props) => (e) => {
        if (props.onChanged) {
          props.onChanged(e.target.value)
        }
        if (state.required === false || state.required === true) {
          return {
            ...state,
            value: e.target.value,
            required: (e.target.value || '').trim().length === 0,
          }
        }
        return { ...state, value: e.target.value }
      },
      // handler text cleare events
      onTextCleared: (state, props) => () => {
        if (props.onChanged) {
          props.onChanged('')
        }
        if (state.required === false || state.required === true) {
          return { ...state, value: '', required: true }
        }
        return { ...state, value: '' }
      },
    }
  ),
)(TextBox)
