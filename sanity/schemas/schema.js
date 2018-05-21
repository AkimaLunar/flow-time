import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import site from './site'
import home from './home'
import timer from './timer'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([site, home, timer])
})
