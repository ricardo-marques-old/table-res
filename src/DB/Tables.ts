import database from "./index"

interface Table {
  id: string
  capacity: number
}

export default {
  getAll: async () => {
    const collection = await database.collection("tables").get()

    let tables: Array<Table> = []

    collection.forEach(table => {
      tables.push(table.data() as Table)
    })

    return tables
  }
}
