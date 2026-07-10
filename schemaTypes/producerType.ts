import {defineField, defineType} from 'sanity'

export const producerType = defineType({
  name: 'producer',
  title: 'Producer',
  type: 'document',
  fields: [
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'region',
      title: 'Region',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subregion',
      title: 'Subregion',
      type: 'string',
      description: 'e.g. Douro, Priorat, Mosel — leave blank if not applicable',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})