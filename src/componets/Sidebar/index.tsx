import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  RiDashboardLine,
  RiDatabaseFill,
  RiListSettingsFill,
  RiLogoutBoxFill,
  RiMenu2Line
} from 'react-icons/ri'

import {
  Container,
  LogoContainer,
  OrganizationContainer,
  DividerHorizontal,
  ItensSidebar,
  ItemSidebar
} from './styles'

export const Sidebar = () => {
  const [open, setOpen] = useState(true)
  const router = useRouter()

  const Menus = [
    { title: 'Dashboard', path: '/', src: <RiDashboardLine /> },
    { title: 'Logs', path: '/logs', src: <RiDatabaseFill /> },
    { title: 'Settings', path: '/settings', src: <RiListSettingsFill /> },
    { title: 'Signout', path: '/signout', src: <RiLogoutBoxFill /> }
  ]

  const handleRouter = path => {
    router.push(path)
  }

  return (
    <Container style={{ width: open ? '220px' : '70px' }}>
      <LogoContainer>
        {open ? (
          <Image
            style={{ display: open ? 'block' : 'none' }}
            src="/Logo.png"
            width={200}
            height={50}
            onClick={() => setOpen(!open)}
          />
        ) : (
          <RiMenu2Line width={24} onClick={() => setOpen(!open)} />
        )}
      </LogoContainer>
      <OrganizationContainer>
        <span style={{ display: open ? 'block' : 'none' }}>Juliano Soares</span>
      </OrganizationContainer>
      <DividerHorizontal />
      <ItensSidebar>
        {Menus.map((menu, index) => (
          <ItemSidebar key={index} onClick={() => handleRouter(menu.path)}>
            <span>{menu.src}</span>
            <span style={{ display: open ? 'block' : 'none' }}>
              {menu.title}
            </span>
          </ItemSidebar>
        ))}
      </ItensSidebar>
    </Container>
  )
}
