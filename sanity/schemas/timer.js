export default {
  name: 'timer',
  title: 'Timer',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'number'
    },
    {
      name: 'background',
      title: 'Background',
      type: 'image'
    },
    {
      name: 'imageCreditName',
      title: 'Image credit name',
      type: 'string'
    },
    {
      name: 'imageCreditUrl',
      title: 'Image credit URL',
      type: 'url'
    }
  ]
}
