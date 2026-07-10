import {defineField, defineType} from 'sanity'

export const grapeType = defineType({
  name: 'grapeVariety',
  title: 'Grape Variety',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Grape Variety Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})