import {defineField, defineType} from 'sanity'

export const portfolioSettingsType = defineType({
  name: 'portfolioSettings',
  title: 'Portfolio Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'coverLabel',
      title: 'Cover Month/Year Label',
      type: 'string',
      description: 'Shown on the cover page, e.g. "Lipiec 2026". Set this manually each export cycle.',
      validation: (rule) => rule.required(),
    }),
  ],
})