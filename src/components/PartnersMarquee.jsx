import React, { useEffect, useState } from 'react'
import './PartnersMarquee.css'

const partners = [
  {
    id: 1,
    name: 'Lemon Tree Hotels',
    logo: '/partners/lemontree.png',
    info: 'Hospitality Partner',
  },
  {
    id: 2,
    name: 'Philips India',
    logo: '/partners/philips.png',
    info: 'Marketing',
  },
  { id: 3, name: 'Skoda',
    logo: '/partners/skoda.png',
    info: 'Digital Partner' },
  {
    id: 4,
    name: 'Mahindra & Mahindra',
    logo: '/partners/mahindra.png',
    info: 'Research & Development',
  },
  {
    id: 5,
    name: 'Mamaearth',
    logo: '/partners/mamaearth.png',
    info: ' Website Branding',
  },
  { 
    id: 6, 
    name: 'Kbeauty',
     logo: '/partners/k_beauty.png', 
     info: 'Branding' },
  { 
    id: 7, 
    name: 'Nykaa', 
    logo: '/partners/nykaa.png', 
    info: 'E-Commerce sales' },
  {
    id: 8,
    name: 'BlueStone',
    logo: '/partners/bluestone.png',
    info: 'Affliate Partner',
  },
  {
    id: 9,
    name: 'Dot & Key',
    logo: '/partners/dot&key skincare.png',
    info: 'Branding',
  },
  {
    id: 10,
    name: 'prana',
    logo: '/partners/prana.png',
    info: 'Development & Marketing',
  },
  {
    id: 11,
    name: 'Demac Dubai',
    logo: '/partners/damac.png',
    info: 'Channel Partner',
  },
  { 
    id: 12, 
    name: 'Sketchers', 
    logo: '/partners/skechers.png', 
    info: 'Branding',
   },
  {
    id: 11,
    name: 'Playbox',
    logo: '/partners/PlayBox.png',
    info: 'Digital Partner',
  },
  {
    id: 12,
    name: 'Bonn',
    logo: '/partners/skechers.png',
    info: 'Marketing Partner',
  },
  { id: 13, name: 'Alp', logo: '/partners/ALP.png', info: 'Digital Partner' },
]

const PartnersMarquee = () => {
  const [activeTooltip, setActiveTooltip] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleClick = (id) => {
    if (isMobile) {
      setActiveTooltip((prev) => (prev === id ? null : id))
    }
  }

  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="marquee-container">
          <div className="marquee-track">
            {[...partners, ...partners].map((partner, index) => {
              const uniqueId = `${partner.id}-${index}`
              return (
                <div
                  key={uniqueId}
                  className={`partner-item ${activeTooltip === uniqueId ? 'active' : ''}`}
                  onClick={() => handleClick(uniqueId)}
                >
                  <div className="partner-logo">
                    <img src={partner.logo} alt={partner.name} />
                    <div
                      className={`partner-tooltip ${activeTooltip === uniqueId ? 'visible' : ''}`}
                    >
                      {partner.info}
                    </div>
                  </div>
                  {/* <span className="partner-name">{partner.name}</span> */}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersMarquee