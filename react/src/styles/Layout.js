import { css } from 'emotion'
import facepaint from 'facepaint'

const mq = facepaint([
    '@media(min-width: 420px)',
    '@media(min-width: 920px)',
    '@media(min-width: 1120px)'
])

const maxWidth = '74rem'
const rootFontSize = '12px'
const step = 0.5

export default {
    rootFontSize,
    maxWidth,
    container: css({
        maxWidth,
        margin: '0 auto'
    }),
    grid: css(
        {
            display: 'grid',
            gridGap: '2rem'
        },
        mq({
            gridTemplateColumns: [
                'repeat(1, 1fr)',
                'repeat(2, 1fr)',
                'repeat(4, 1fr)'
            ]
        })
    ),
    calcSpace: units => `${units * step}rem`
}
