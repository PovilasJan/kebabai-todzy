import { useState } from 'react'
import Link from 'next/link'

export default function ChangePassword() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // simple validation
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      alert('Failed! Užpildykite visus laukus.')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      alert('Failed! Slaptažodžiai nesutampa.')
      return
    }

    // success simulation
    alert('Success! Slaptažodžio keitimo nuoroda išsiųsta į el. paštą.')
    // optionally clear form
    setFormData({ email: '', password: '', confirmPassword: '' })
  }

  return (
    <main style={{ padding: 20, maxWidth: 400 }}>
      <h1>Slaptažodžio keitimo langas</h1>

      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
      >
        <label>
          El. paštas:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%' }}
            required
          />
        </label>

        <label>
          Naujas slaptažodis:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '100%' }}
            required
          />
        </label>

        <label>
          Pakartokite slaptažodį:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={{ width: '100%' }}
            required
          />
        </label>

        <button
          type="submit"
          style={{
            marginTop: 15,
            padding: '10px 16px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Keisti slaptažodį
        </button>
      </form>

      <p style={{ marginTop: 20 }}>
        <Link href="/account">Atgal į paskyros langą</Link>
      </p>
    </main>
  )
}
