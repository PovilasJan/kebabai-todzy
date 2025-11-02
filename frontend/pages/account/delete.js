import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function DeleteAccount() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [showConfirm, setShowConfirm] = useState(false)
  const router = useRouter()

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
    setShowConfirm(true)
  }

  const handleConfirmDelete = () => {
    alert('Paskyra sėkmingai ištrinta!')
    // Here you could call a backend endpoint to delete the account
    router.push('/') // redirect to main page
  }

  const handleCancel = () => {
    setShowConfirm(false)
  }

  return (
    <main style={{ padding: 20, maxWidth: 400 }}>
      <h1>Paskyros šalinimo langas</h1>

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
            backgroundColor: '#d32f2f',
            color: 'white',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Ištrinti paskyrą
        </button>
      </form>

      <p style={{ marginTop: 20 }}>
        <Link href="/account">Atgal į paskyros langą</Link>
      </p>

      {/* ✅ Confirmation popup */}
      {showConfirm && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 8,
              boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
              textAlign: 'center',
            }}
          >
            <h3>Ar tikrai norite ištrinti paskyrą?</h3>
            <p>Tai veiksmas, kurio negalima atšaukti.</p>

            <div style={{ marginTop: 20, display: 'flex', gap: 10, justifyContent: 'center' }}>
              <button
                onClick={handleConfirmDelete}
                style={{
                  padding: '8px 14px',
                  backgroundColor: '#d32f2f',
                  color: 'white',
                  border: 'none',
                  borderRadius: 6,
                  cursor: 'pointer',
                }}
              >
                Ištrinti
              </button>
              <button
                onClick={handleCancel}
                style={{
                  padding: '8px 14px',
                  backgroundColor: '#9e9e9e',
                  color: 'white',
                  border: 'none',
                  borderRadius: 6,
                  cursor: 'pointer',
                }}
              >
                Atšaukti
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
