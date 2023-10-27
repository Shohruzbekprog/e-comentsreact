
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div id='header'>
      <ul>
        <Link to='/'>
        <li>Home</li>
        </Link>
        <Link to='/about'>
        <li>About</li>
        </Link>
        <Link to='/contact'>
        <li>Contact</li>
        </Link>
        <Link to='/servise'>
        <li>Servise</li>
        </Link>
        <Link to='/signin'>
        <li>Sign in</li>
        </Link>
      </ul>
    </div>
  )
}
