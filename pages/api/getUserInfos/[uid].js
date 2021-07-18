

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios"

export default async function handler(req, res) {

        const { uid } = req.query

        const response = await axios(
        {
            method: 'GET',
            url: `https://us-central1-firetest-mvp.cloudfunctions.net/getUserInfos/${uid}`,
        }
        )

        res.status(200).json(response.data.userPoints)
    }

