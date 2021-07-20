import axios from "axios"

export default async function handler(req, res) {

  const { uid, data } = req.body

  await axios({
    method: 'PATCH',
    url: 'https://us-central1-firetest-mvp.cloudfunctions.net/patchUserInfo',
    data: 
      {
        uid: uid,
        data: data
      }
    }
  )

  res.status(200).json({ name: 'John Doe' })
}