export default {
  name: 'presentation',
  title: 'Presentation',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'link', type: 'url', title: 'Slide Link' },
    { name: 'date', type: 'date', title: 'Date' },
    { name: 'cover', type: 'image', title: 'Cover Image', options: { hotspot: true } },
  ]
} as const;
