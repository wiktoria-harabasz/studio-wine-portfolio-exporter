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
            {title: 'France', value: 'france'},
            {title: 'Italy', value: 'italy'},
            {title: 'USA', value: 'usa'},
            {title: 'Austria', value: 'austria'},
            {title: 'Hungary', value: 'hungary'},
          ],
        },
        validation: (rule) => rule.required(),
      }),
  ],
})