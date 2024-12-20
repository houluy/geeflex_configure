export const parser = (schema: any, data: any) => {
  const resTable = []
  const basicColumn = [
    { title: '字段', dataIndex: 'key', width: '30%' },
    { title: '值', dataIndex: 'value' },
  ]

  Object.entries(data).forEach(([key, value]) => {
    const currentSchema = schema[key]
    if (!currentSchema) return

    const res: any = {
      key,
      field: key,
      type: currentSchema.type,
      tooltipTitle: `${key}-tooltip`,
    }

    if ('description' in currentSchema) {
      res.description = currentSchema.description
    }

    if (Array.isArray(value)) {
      res.hasChildren = true
      res.child = true

      if (
        currentSchema.items.type === 'number' ||
        currentSchema.items.type === 'string' ||
        currentSchema.items.type === 'boolean'
      ) {
        res.type = 'simple_array'
        res.value = value
      } else {
        res.type = 'array'
        res.childrenColumn = basicColumn
        res.childColumn = basicColumn
        res.childrenTable = value.map((item, index) => {
          const arrayItem = parser(currentSchema.items.properties, item)[0]
          arrayItem.key = `${key}-${index}`
          return arrayItem
        })
      }
    } else if (currentSchema.type === 'object') {
      res.hasChildren = true
      res.child = true
      res.type = 'object'
      res.childrenColumn = basicColumn
      res.childColumn = basicColumn
      res.childrenTable = parser(currentSchema.properties, value)
    } else {
      res.hasChildren = false
      res.child = false
      res.value = value
    }

    resTable.push(res)
  })

  return resTable
}
