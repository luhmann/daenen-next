export const colors = {
  boxShadow: 'rgba(#c4c4c4, 0.4)',
  contentBackground: 'rgb(255, 255, 255)'
}

export const fonts = {
  base: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  headline: 'Helvetica Neue, Helvetica, Arial, sans-serif'
}

export const sizes = {
  fontBase: '0.8125em',
  fontHeadline: '1.25em'
}

export const breakpoints = {
  mobile: '59em'
}

export const glowingBoxShadow = (
  `
    box-shadow: 4px 4px 20px 3px ${colors.boxShadow};
  `
)

export const contentBox = `
    background: ${colors.contentBackground};
    margin-top: 1.46154em;
    overflow: hidden;
    position: relative;
  `

export const section = `
  margin-top: 1.46153846153846em;
  margin-bottom: 1.46153846153846em;
  max-width: 500px;

  &:first-child {
    margin-top: 0
  }
`
