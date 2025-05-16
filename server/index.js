import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body

  // Vérification basique
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Champs manquants' })
  }

  // Création du transporteur SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail', // ou 'outlook', 'mailjet', 'sendinblue'
    auth: {
      user: process.env.SMTP_USER, // noreply@mybizxo.com
      pass: process.env.SMTP_PASS  // mot de passe application
    }
  })

  try {
    // 1️⃣ Email vers l'équipe BizXO
    await transporter.sendMail({
      from: email,
      to: 'ginette@mybizxo.com',
      subject: `📬 Nouveau message de ${name}`,
      text: `
Nom : ${name}
Email : ${email}
Message :
${message}
      `
    })

    // 2️⃣ Email de confirmation vers le client
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: "🧾 Confirmation - Nous avons bien reçu votre message",
      text: `Bonjour ${name},

Nous avons bien reçu votre message :
"${message}"

L’équipe BizXO vous répondra sous peu.

Cordialement,
BizXO Team`
    })

    res.status(200).json({ success: true })

  } catch (err) {
    console.error("❌ Erreur lors de l’envoi :", err)
    res.status(500).json({ success: false, error: "Erreur serveur" })
  }
})

app.listen(PORT, () => {
  console.log(`✅ Backend opérationnel sur http://localhost:${PORT}`)
})
