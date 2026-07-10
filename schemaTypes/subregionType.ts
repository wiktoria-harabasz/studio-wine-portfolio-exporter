import {defineField, defineType} from 'sanity'

export const subregionType = defineType({
  name: 'subregion',
  title: 'Subregion',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Subregion Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
   
  ],
})