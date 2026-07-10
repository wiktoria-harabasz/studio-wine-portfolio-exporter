import {defineField, defineType} from 'sanity'

export const producerType = defineType({
  name: 'producer',
  title: 'Producer (Main)',
  description: 'To jest główna lista, którą wypełniasz',
  type: 'document',
  fields: [
    defineField({
      name: 'map',
      title: 'Map',
      type: 'image',
    }),
    defineField({
      name: 'title',
      title: 'Producer Name',
      type: 'string',
      validation: (rule) => rule.required(),
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
      name: 'wineName',
      title: 'Wine Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'wineStyle',
      title: 'Wine Type',
      type: 'string',
      options: {
        list: [
          {title: 'Red', value: 'red'},
          {title: 'White', value: 'white'},
          {title: 'Rosé', value: 'rose'},
          {title: 'Orange', value: 'orange'},
        ],
        layout: 'radio', 
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'isSparkling',
      title: 'Sparkling',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isFortified',
      title: 'Fortified',
      type: 'boolean',
    }),
    defineField({
      name: 'isSmallBottle',
      title: '0.375 l bottle',
      type: 'boolean',
    }),
    defineField({
      name: 'isMagnumBottle',
      title: 'Magnum Bottle',
      type: 'boolean',
    }),
    defineField({
      name: 'Vintage',
      title: 'Vintage',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'grapeVariety',
      title: 'Grape Variety',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'grapeVariety'}]}],
    }),
    defineField({
      name: 'dosage',
      title: 'Dosage',
      type: 'string',
    }),
    defineField({
      name: 'sugar',
      title: 'Sugar',
      type: 'string',
    }),
    defineField({
      name: 'degorgement',
      title: 'Degorgement',
      type: 'string',
    }),
    defineField({
      name: 'base',
      title: 'Base',
      type: 'number',
    }),
    defineField({
      name: 'classification',
      title: 'Classification',
      type: 'string',
    }),
    defineField({
      name: 'bottled',
      title: 'Bottled',
      type: 'number',
    }),
    defineField({
      name: 'isNew',
      title: 'New',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isSoldOut',
      title: 'Sold Out',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isAllocationOnly',
      title: 'Allocation Only',
      type: 'boolean',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
  ],
})