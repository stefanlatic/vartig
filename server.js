import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Resend } from 'resend'

dotenv.config()

const app = express()

app.use(cors({
      origin: 'http://localhost:5173'
}))
app.use(express.json())

const resend = new Resend(process.env.RESEND_API_KEY)

app.post('/api/contact', async (req, res) => {
  try {
    const { name, company, email, phone, message } = req.body

    await resend.emails.send({
      from: 'Vartig Website <onboarding@resend.dev>',
      to: 'vartig_nis@yahoo.com',
      subject: `Nova poruka od ${name}`,
      reply_to: email,

      html: `
        <h2>Nova kontakt poruka</h2>

        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Kompanija:</strong> ${company || '-'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || '-'}</p>

        <hr />

        <p>${message}</p>
      `,
    })

    res.status(200).json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false })
  }
})

app.listen(3001, () => {
  console.log('Server running on port 3001')
})