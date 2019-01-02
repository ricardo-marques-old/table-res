import database from "./index"
import querySnapshotToData from "./QuerySnapshotToData"

export interface Reservation {
  id: string
  name: string
  people: number
  date: { nanoseconds: number; seconds: number }
}

async function getReservationsCollection() {
  return await database.collection("reservations")
}

export default {
  getAll: async () => {
    const collection = await getReservationsCollection()

    return querySnapshotToData<Reservation>(await collection.get())
  }
}
