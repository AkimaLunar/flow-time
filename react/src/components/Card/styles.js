import { css } from 'react-emotion'
import { Layout } from 'Styles'

export default {
    root: css`
        border-radius: 1.2rem;
        box-shadow: 0 0.6rem 1.6rem 0 rgba(0, 0, 0, 0.35);
        overflow: hidden;
    `,
    timer: css`
        background-color: #4c2e9a;
        display: flex;
        flex-direction: column;
        height: ${Layout.calcSpace(40)};
        justify-content: space-between;
        p {
            text-align: center;
            font-size: 4rem;
            align-self: center;
            color: rgba(255, 255, 255, 0.8);
        }
        h3 {
            font-size: ${Layout.calcSpace(2)};
            color: rgba(255, 255, 255, 0.4);
            text-transform: uppercase;
            letter-spacing: 2px;
            text-align: center;
        }
    `,
    line: css`
        color: rgba(255, 255, 255, 0.6);
        align-self: flex-end;
        width: 90%;
        margin: ${Layout.calcSpace(2)} 0 0 0;
    `,
    portal: css({
        height: '100%',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        button: {
            width: '100%'
        },
        p: {
            textAlign: 'center',
            fontSize: '4rem',
            alignSelf: 'center'
        }
    }),
    buttonGroupCss: css({
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridGap: '1rem'
    })
}
