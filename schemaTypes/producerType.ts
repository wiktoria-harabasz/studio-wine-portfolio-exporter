import {defineField, defineType} from 'sanity'

export const producerType = defineType({
  name: 'producer',
  title: 'Producer (Main)',
  description: 'To jest główna lista, którą wypełniasz',
  type: 'document',
  fields: [
    defineField({
      name: 'mapImage',
      title: 'Map',
      type: 'image',
    }),
    defineField({
      name: 'producerName',
      title: 'Producer Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isNew',
      title: 'New in Portfolio',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      options: {
        list: [
          {title: 'France', value: 'france'},
          {title: 'Italy', value: 'italy'},
          {title: 'USA', value: 'usa'},
          {title: 'Austria', value: 'austria'},
          {title: 'Germany', value: 'germany'},
          {title: 'Hungary', value: 'hungary'},
        ],
        layout: 'radio',   
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'region',
      title: 'Region',
      type: 'reference',
      to: [{type: 'region'}],
      options: {
        filter: ({document}) => {
          return {
            filter: 'country == $country',
            params: {country: document.country},
          }
        },
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subregion',
      title: 'Subregion',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'subregion'}]}],
    }),
    defineField({
      name: 'producerInfo',
      title: 'Producer Info',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'producerName'},
      validation: (rule) => rule.required(),
    }),
  ],
})