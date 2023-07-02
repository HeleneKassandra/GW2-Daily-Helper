// client.js
import {createClient} from '@sanity/client'

export default createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: 'production', // or the name you chose in step 1,
    apiVersion: '2021-10-21',
})