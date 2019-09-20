export const colors = {
  action: '#ac0022',
  background: 'rgb(255, 255, 255)',
  boxShadow: 'rgba(196, 196, 196, 0.4)',
  contentBackground: 'rgb(255, 255, 255)',
  fontBase: 'rgb(0,0,0)',
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
    margin-top: 0;
  }
`

export const link = `
  color: ${colors.action};
  text-decoration: none;
`

export const gradients: Record<string, string> = {
  aquaMarine: 'linear-gradient(to right bottom, #26D0CE, #1A2980)',
  dusk: 'linear-gradient(to right bottom, #19547b, #ffd89b)',
  hazel: 'linear-gradient(to right bottom, #77a1d3, #79cbca, #e684ae)',
  loveCouple: 'linear-gradient(to right bottom, #3a6186, #89253e)',
  nightDay: 'linear-gradient(to right bottom, #2c3e50, #3498db)',
  noonToDusk: 'linear-gradient(to right bottom, #bfe9ff, #ff6e7f)',
  visionsGrandeur: 'linear-gradient(to right bottom, #1CB5E0, #000046)',
}

export const getRandomGradient = () => {
  const keys = Object.keys(gradients)
  const randomKey: string = keys[Math.floor(Math.random() * keys.length)]
  return gradients[randomKey]
}
