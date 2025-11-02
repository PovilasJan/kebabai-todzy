import { useState } from 'react'
import Link from 'next/link'

export default function Account() {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState({
    name: 'Jonas',
    surname: 'Jonaitis',
    email: 'jonas@example.com',
    address: 'Vilniaus g. 5, Vilnius',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData((prev) => ({ ...prev, [name]: value }))
  }

  const handleEditToggle = () => {
    if (isEditing) {
      alert('Paskyros duomenys išsaugoti!')
      // optionally: send updated data to backend here
    }
    setIsEditing(!isEditing)
  }

  return (
    <main style={{ padding: 20, maxWidth: 400 }}>
      <h1>Paskyros langas</h1>

      <form style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <label>
          Vardas:
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            disabled={!isEditing}
            style={{ width: '100%' }}
          />
        </label>

        <label>
          Pavardė:
          <input
            type="text"
            name="surname"
            value={userData.surname}
            onChange={handleChange}
            disabled={!isEditing}
            style={{ width: '100%' }}
          />
        </label>

        <label>
          El. paštas:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            disabled={!isEditing}
            style={{ width: '100%' }}
          />
        </label>

        <label>
          Adresas:
          <input
            type="text"
            name="address"
            value={userData.address}
            onChange={handleChange}
            disabled={!isEditing}
            style={{ width: '100%' }}
          />
        </label>

        <button
          type="button"
          onClick={handleEditToggle}
          style={{
            marginTop: 10,
            padding: '8px 12px',
            backgroundColor: isEditing ? '#4caf50' : '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
          }}
        >
          {isEditing ? 'Išsaugoti' : 'Redaguoti'}
        </button>
      </form>

      <hr style={{ margin: '20px 0' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Link href="/account/change-password">
          <button style={{ padding: '8px 12px' }}>Keisti slaptažodį</button>
        </Link>

        <Link href="/account/delete">
          <button style={{ padding: '8px 12px' }}>Šalinti paskyrą</button>
        </Link>

        <Link href="/account/discount-code">
          <button style={{ padding: '8px 12px' }}>Gauti nuolaidos kodą</button>
        </Link>
      </div>

      <p style={{ marginTop: 20 }}>
        <Link href="/">Atgal į pagrindinį</Link>
      </p>
    </main>
  )
}
