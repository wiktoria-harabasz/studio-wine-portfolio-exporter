import {defineField, defineType} from 'sanity'

export const regionType = defineType({
  name: 'region',
  title: 'Region',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Region Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'country',
        title: 'Country',
        type: 'string',
        options: {
          list: [
            {title: 'France', value: 'France'},
            {title: 'Italy', value: 'Italy'},
            {title: 'USA', value: 'Usa'},
            {title: 'Austria', value: 'Austria'},
            {title: 'Germany', value: 'Germany'},
            {title: 'Hungary', value: 'Hungary'},
          ],
        },
        validation: (rule) => rule.required(),
      }),
  ],
})