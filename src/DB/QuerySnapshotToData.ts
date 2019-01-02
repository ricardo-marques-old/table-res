import * as firebase from "firebase"

export default async function querySnapshotToData<DataType>(
  querySnapshot: firebase.firestore.QuerySnapshot
) {
  let data: Array<DataType> = []

  querySnapshot.forEach(document => {
    data.push(document.data() as DataType)
  })

  return data
}
