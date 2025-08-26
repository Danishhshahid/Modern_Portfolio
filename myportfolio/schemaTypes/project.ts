export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'category', type: 'string', title: 'Category', options: { list: [
      { title: 'Web Development', value: 'web' },
      { title: 'Agentic AI', value: 'ai' },
      { title: 'Others', value: 'other' },
    ]}},
    { name: 'cover', type: 'image', title: 'Cover Image', options: { hotspot: true } },
    { name: 'technologies', type: 'array', title: 'Technologies', of: [{ type: 'string' }] },
    { name: 'liveUrl', type: 'url', title: 'Live URL' },
    { name: 'githubUrl', type: 'url', title: 'GitHub URL' },
    { name: 'order', type: 'number', title: 'Order' },
  ]
} as const
