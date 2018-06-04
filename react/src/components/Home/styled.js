import styled, { css } from 'react-emotion'
import Home from './Home'
import { Colors, Typography } from '../../styles'
import facepaint from 'facepaint'

const mq = facepaint([
    '@media(min-width: 420px)',
    '@media(min-width: 920px)',
    '@media(min-width: 1120px)'
])

export const gridCss = css(
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
)

export const paragraphCss = css({
    color: Colors.grey.medium
})

export default styled(Home)`
    h1 {
        ${Typography.title};
    }
`
