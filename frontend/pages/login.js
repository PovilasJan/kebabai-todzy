import { useState } from 'react'
import Link from 'next/link'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.email || !formData.password) {
      alert('Įveskite el. paštą ir slaptažodį!')
      return
    }

    // Demo login check
    if (formData.email === 'test@example.com' && formData.password === '1234') {
      alert('Prisijungimas sėkmingas! 🎉')
      // Optionally: save session info to localStorage here
    } else {
      alert('Neteisingi prisijungimo duomenys!')
    }
  }

  return (
    <main style={{ padding: 20, maxWidth: 400 }}>
      <h1>Prisijungimo langas</h1>

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
            required
            style={{ width: '100%' }}
          />
        </label>

        <label>
          Slaptažodis:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: '100%' }}
          />
        </label>

        <button
          type="submit"
          style={{
            padding: '10px 16px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Prisijungti
        </button>
      </form>

      <div style={{ marginTop: 15 }}>
        <p>Neturite paskyros?</p>
        <Link href="/register">
          <button
            style={{
              padding: '8px 12px',
              backgroundColor: '#4caf50',
              color: 'white',
              border: 'none',
              borderRadius: 6,
              cursor: 'pointer',
            }}
          >
            Registruotis
          </button>
        </Link>
      </div>

      <p style={{ marginTop: 20 }}>
        <Link href="/">Atgal į pagrindinį</Link>
      </p>
    </main>
  )
}
