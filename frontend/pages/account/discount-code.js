'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function GetCode() {
  const [skaitiklis, setSkaitiklis] = useState(2) // change this to simulate DB value
  const [code, setCode] = useState(null)

  const handleGenerateCode = () => {
    if (skaitiklis < 5) return
    const newCode = 'NUOL-' + Math.random().toString(36).substring(2, 8).toUpperCase()
    setCode(newCode)
    alert(`Sėkmė! Sukurtas nuolaidos kodas: ${newCode}`)
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Nuolaidos kodo generavimo langas</h1>

      <p>Skaitiklis = <strong>{skaitiklis}</strong></p>

      <button
        onClick={handleGenerateCode}
        disabled={skaitiklis < 5}
        style={{
          padding: '10px 18px',
          backgroundColor: skaitiklis >= 5 ? '#1976d2' : '#b0bec5',
          color: 'white',
          border: 'none',
          borderRadius: 6,
          cursor: skaitiklis >= 5 ? 'pointer' : 'not-allowed',
          fontSize: '16px',
        }}
      >
        {skaitiklis >= 5 ? 'Generuoti nuolaidos kodą' : 'Generuoti nuolaidos kodą'}
      </button>

      <p style={{ marginTop: 20 }}>
        <Link href="/account">Atgal į paskyros langą</Link>
      </p>
    </main>
  )
}
