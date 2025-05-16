import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

// Route POST pour traiter les messages du formulaire
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Champs manquants' })
  }

  // Transporteur SMTP pour Hostinger / GoDaddy / IONOS, etc.
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true', // true si port 465, false si 587
    auth: {
      user: process.env.SMTP_USER, // noreply@mybizxo.com
      pass: process.env.SMTP_PASS  // mot de passe de la boîte noreply
    }
  })

  try {
    // 1️⃣ Envoi du message à l'équipe BizXO
    await transporter.sendMail({
      from: `"BizXO Form" <${process.env.SMTP_USER}>`,
      to: 'ginette@mybizxo.com',
      subject: `📬 Nouveau message de ${name}`,
      text: `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`
    })

    // 2️⃣ Accusé de réception envoyé au client
    await transporter.sendMail({
      from: `"BizXO" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "🧾 Confirmation - Votre message a bien été reçu",
      text: `Bonjour ${name},\n\nNous avons bien reçu votre message :\n\n"${message}"\n\nNotre équipe vous contactera sous peu.\n\n— L’équipe BizXO`
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
