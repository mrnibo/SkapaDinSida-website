import { DocumentTextIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const navbarType = defineType({
  name: 'navbarItem',
  title: 'Navbar Item',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'linkAlt',
      title: 'Link Alternative Text',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title,
        media,
      };
    },
  },
});