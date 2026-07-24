import {defineField, defineType} from 'sanity'

export const wineType = defineType({
    name: 'wine',
    title: "Wine",
    type: 'document',
    preview: {
        select: {
          title: 'wineName',
          producer: 'producer.producerName',
          price: 'price',
          soldOut: 'isSoldOut',
          vintage: 'vintage',
            wineType: 'wineType',
            isSparkling: 'isSparkling',
            isFortified: 'isFortified',
            isBackInStock: 'isBackInStock',
            isNew: 'isNew',
            isNewVintage: 'isNewVintage',
            isSoldOut: 'isSoldOut',
            isAllocationOnly: 'isAllocationOnly',
        },
        prepare({title, producer, price, vintage, wineType, isSparkling, isFortified, isNew, isNewVintage, isBackInStock, isSoldOut, isAllocationOnly}) {
            const labels = []
    if (isNew) labels.push('New')
    if (isNewVintage) labels.push('New Vintage')
    if (isSoldOut) labels.push('Sold Out')
    if (isBackInStock) labels.push('Back in stock')
    if (isAllocationOnly) labels.push('Allocation Only')
    if (isSparkling) labels.push('Sparkling')
    if (isFortified) labels.push('Fortified')

    const labelText = labels.length ? ` · ${labels.join(', ')}` : ''

    return {
      title: `${title}${vintage ? ' ' + vintage : ''}`,
      subtitle: `${producer} — ${wineType} — ${price} PLN${labelText}`,
    }
          },
        },
    fields: [
        defineField({
            name: 'producer',
            title: 'Producer',
            type: 'reference',
            to: [{type: 'producer'}],
            validation: (rule) => rule.required(),
          }),
        defineField({
            name: 'wineName',
            title: 'Wine Name',
            type: 'string',
            validation: (rule) => rule.required(),
          }),
          defineField({
            name: 'wineSubName',
            title: 'Wine Sub-name',
            type: 'string',
          }),
          defineField({
            name: 'wineType',
            title: 'Wine Type',
            type: 'string',
            options: {
              list: [
                {title: 'Red', value: 'red'},
                {title: 'White', value: 'white'},
                {title: 'Rosé', value: 'rose'},
                {title: 'Macerated', value: 'macerated'},
              ],
              layout: 'radio', 
            },
            
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
            name: 'vintage',
            title: 'Vintage',
            type: 'string',
          }),
          defineField({
            name: 'pricePrivate',
            title: 'Price (b2c)',
            type: 'number',
          }),
          defineField({
            name: 'priceHoreca',
            title: 'Price (HoReCa)',
            type: 'number',
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
            type: 'number',
          }),
          defineField({
            name: 'degorgement',
            title: 'Degorgement',
            type: 'string',
          }),
          defineField({
            name: 'base',
            title: 'Base',
            type: 'string',
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
            name: 'isNewVintage',
            title: 'New Vintage',
            type: 'boolean',
            initialValue: false,
          }),
          defineField({
            name: 'isBackInStock',
            title: 'Back in stock!',
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
    ]
})