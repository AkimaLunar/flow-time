import React from 'react'

const AppContext = React.createContext({
    // Default Value ===========================================================
    site: {
        title: '',
        description: ''
    },
    timers: [],
    updateSite: () => {},
    updateTimers: () => {}
    // Default Value ===========================================================
})

export const withApp = Component => {
    const WithApp = props => {
        return (
            <AppContext.Consumer>
                {app => <Component {...props} {...app} />}
            </AppContext.Consumer>
        )
    }
    WithApp.displayName = `withApp(${Component.displayName || Component.name})`
    return WithApp
}

export const Provider = AppContext.Provider
