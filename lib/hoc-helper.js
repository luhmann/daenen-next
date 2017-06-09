import {
  compose,
  branch,
  renderNothing,
  withHandlers,
  withState,
} from 'recompose'

const hideIfNoData = hasNoData => branch(hasNoData, renderNothing)

const hasNoChildren = props => Boolean(props.children) === false

const hideIfNoChildren = hideIfNoData(hasNoChildren)

const toggleLength = compose(
  withState('isExpanded', 'toggleExp', false),
  withHandlers({
    toggleExpanded: ({ toggleExp }) => () =>
      toggleExp(isExpanded => !isExpanded),
  })
)

export { hasNoChildren, hideIfNoChildren, hideIfNoData, toggleLength }
