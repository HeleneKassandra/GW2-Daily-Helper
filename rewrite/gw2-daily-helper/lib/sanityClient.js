// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production', // or the name you chose in step 1,
    apiVersion: '2021-10-21',
    useCdn: true // `false` if you want to ensure fresh data
})