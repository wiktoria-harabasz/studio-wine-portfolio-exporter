import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
// import {createBulkActionsTable} from 'sanity-plugin-bulk-actions-table'

export default defineConfig({
  name: 'default',
  title: 'Nowofalowi Wine Portfolio Exporter',

  projectId: 'no8d843p',
  dataset: 'production',

  plugins: [structureTool({
    structure: (S) =>
      S.list()
        .title('Content')
        .items([
          S.documentTypeListItem('producer').title('Producers'),
          S.documentTypeListItem('wine')
            .title('Wines')
            .child(
              S.documentTypeList('wine')
                .title('Wines')
                .defaultOrdering([{field: 'wineName', direction: 'asc'}])
            ),
          S.divider(),
          S.documentTypeListItem('region').title('Regions'),
          S.documentTypeListItem('subregion').title('Subregions'),
          S.documentTypeListItem('grapeVariety').title('Grape Varieties'),
        ]),
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
