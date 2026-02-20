import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const menuItems = [
    { title: 'Главная', link: '#' },
    {
      title: 'Услуги',
      submenu: ['Веб-разработка', 'Мобильные приложения', 'Дизайн']
    },
    {
      title: 'Продукты',
      submenu: ['CRM', 'ERP', 'Аналитика']
    },
    { title: 'О нас', link: '#' },
    { title: 'Контакты', link: '#' }
  ]

  return (
    <header className="header">
      <div className="logo">Laba</div>
      
      <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        {menuItems.map((item, i) => (
          <div key={i} className="nav-item">
            {item.submenu ? (
              <>
                <button 
                  className="nav-link"
                  onClick={() => setOpenDropdown(openDropdown === i ? null : i)}
                >
                  {item.title} ▾
                </button>
                <div className={`dropdown ${openDropdown === i ? 'show' : ''}`}>
                  {item.submenu.map((sub, j) => (
                    <a key={j} href="#">{sub}</a>
                  ))}
                </div>
              </>
            ) : (
              <a href={item.link} className="nav-link">{item.title}</a>
            )}
          </div>
        ))}
      </nav>
    </header>
  )
}

export default App
