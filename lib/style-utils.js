export const colors = {
  background: 'rgb(255, 255, 255)',
  boxShadow: 'rgba(196, 196, 196, 0.4)',
  contentBackground: 'rgb(255, 255, 255)',
  fontBase: 'rgb(0,0,0)',
  action: '#ac0022',
}

export const fonts = {
  base: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  headline: 'Helvetica Neue, Helvetica, Arial, sans-serif',
}

export const sizes = {
  fontBase: '0.8125rem',
  fontHeadline: '1.25em',
  headerHeight: '248px',
  lineHeightBase: '1.5',
  lineHeightHeadline: '1.2',
  listIndentWidth: '1.5em',
  standardPadding: '1.46154em',
  tiny: '.375em',
}

export const breakpoints = {
  mobile: '59em',
}

export const glowingBoxShadow = `
    box-shadow: 4px 4px 20px 3px ${colors.boxShadow};
  `

export const contentBox = `
    ${glowingBoxShadow}
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

export const link = `
  color: ${colors.action};
  text-decoration: none;
`
