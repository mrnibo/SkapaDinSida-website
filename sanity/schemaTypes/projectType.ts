import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'clientName',
      type: 'string',
    }),
    defineField({
      name: 'clientLogo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ]
    }),
    defineField({
        name: 'projectImages',
        type: 'array',
        title: 'Project Images',
        of: [
          {
            type: 'image',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative text',
              },
            ],
          },
        ],
        options: {
          sortable: true,
        },
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'url',
      type: 'url',
    }),
    defineField({
      name: 'date',
      type: 'datetime',
    }),
    defineField({
        name: 'body',
        type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      client: 'clientName',
      media: 'projectImage',
    },
    prepare(selection) {
      const {client} = selection
      return {...selection, subtitle: client && `for ${client}`}
    },
  },
})
