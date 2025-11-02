import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  const handleLogout = (e) => {
    e.preventDefault()
    alert('You have been logged out!')
    // Optionally, clear user data or auth tokens here
    // localStorage.removeItem('user')
    router.push('/') // stays on main page (this just reloads it)
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Pagrindinis langas</h1>

      <h2>Navigacija</h2>
      <ul>
        <li><Link href="/kebabine/list">Kebabinių sąrašas</Link></li>
        <li><Link href="/kebabine/nearby">Artimiausios kebabinės</Link></li>
        <li><Link href="/kebabine/info">Kebabinės informacija</Link></li>
        <li><Link href="/order">Užsakymo langas</Link></li>
        <li><Link href="/cart">Krepšelis</Link></li>
        <li><Link href="/admin/kebab-management">Kebabu valdymas (admin)</Link></li>
        <li><Link href="/admin/add-kebab">Kebabo pridėjimas (admin)</Link></li>
        <li><Link href="/account">Paskyros langas</Link></li>
        <li><Link href="/orders/review">Užsakymų peržiūra</Link></li>
        <li><Link href="/login">Prisijungimo langas</Link></li>
        <li>
          <a href="#" onClick={handleLogout}>Atsijungimo langas</a>
        </li>
      </ul>
    </main>
  )
}
