import sanityClient from '@sanity/client'

const sanity = sanityClient({
    // Find your project ID and dataset in `sanity.json` in your studio project
    projectId: 'wujq2qlw',
    dataset: 'production',
    useCdn: true
    // useCdn == true gives fast, cheap responses using a globally distributed cache.
    // Set this to false if your application require the freshest possible
    // data always (potentially slightly slower and a bit more expensive).
})

const queries = {
    getAppData: `*[_type in ["site", "timer"]]`,
    getSite: `
        *[_type == "site"] {
            title,
            description
        }
    `,
    getTimers: `
        *[_type == "timer"] {
            name,
            duration,
            background,
            imageCreditName,
            imageCreditUrl
        }
    `
}

export const getSite = () => sanity.fetch(queries.getSite)
export const getTimers = () => sanity.fetch(queries.getTimers)
export const getAppData = () => sanity.fetch(queries.getAppData)

export const parseAppData = data => {
    let appData = { site: {}, timers: [], other: [] }
    data.map(o => {
        switch (o._type) {
            case 'site':
                appData.site = o
                break
            case 'timer':
                appData.timers = [...appData.timers, o]
                break
            default:
                appData.other = [...appData.other, o]
        }
    })
    return appData
}
