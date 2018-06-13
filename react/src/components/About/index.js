import React from 'react'
import Main from '../Main'
import Card from '../Card'

import styles from './styles'

const About = () => (
    <div className={styles.root}>
        <Main>
            <h1 className={styles.title}>About</h1>
            <p>
                FlowTime is built with&ensp;❤️&ensp;by{' '}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://riacarmin.com/"
                >
                    Ria Carmin
                </a>. Code is on{' '}
                <a
                    href="https://github.com/AkimaLunar/flow-time"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>.
            </p>
            <h3>Starring:</h3>
            <ul>
                <li>React</li>
                <li>Emotion.sh</li>
                <li>Sanity CMS</li>
                <li>Webpack</li>
                <li>…and other lovely packages</li>
            </ul>
        </Main>
    </div>
)

export default About
