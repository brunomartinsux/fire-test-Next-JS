import axios from "axios"

export default async function handler(req, res) {
  const response = await axios({
    method: 'GET',
    url: 'https://us-central1-firetest-mvp.cloudfunctions.net/allSubjects',
  })

  res.status(200).json(response.data.subjects)
}