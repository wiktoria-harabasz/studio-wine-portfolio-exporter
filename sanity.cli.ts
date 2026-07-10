import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'no8d843p',
    dataset: 'production'
  },
  deployment: {
    appId: 't6o26v5auphyyatks0hbhqns',
    autoUpdates: true,
  },
})
