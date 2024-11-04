import { SchemaTypeDefinition } from 'sanity'
import { postType } from './postType'
import { authorType } from './authorType'
import { categoryType } from './categoryType'
import { blockContentType } from './blockContentType'

export const schemaTypes: SchemaTypeDefinition[] = [
  postType,
  authorType,
  categoryType,
  blockContentType
]
