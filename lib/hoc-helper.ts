import {
  compose,
  branch,
  renderNothing,
  withHandlers,
  withState,
  mapper,
} from 'recompose'

const hideIfNoData = (hasNoData: mapper<any, boolean>) => branch(hasNoData, renderNothing)

const hasNoChildren = (props: { children: React.ReactNode}) => Boolean(props.children) === false

const hideIfNoChildren = hideIfNoData(hasNoChildren)

const toggleLength = compose(
  withState('isExpanded', 'toggleExp', false),
  withHandlers({
    toggleExpanded: ({ toggleExp }: any) => () =>
      toggleExp((isExpanded: boolean) => !isExpanded),
  })
)

export { hasNoChildren, hideIfNoChildren, hideIfNoData, toggleLength }
