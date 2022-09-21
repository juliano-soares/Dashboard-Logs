import styled from 'styled-components'

export const Container = styled.div`
  width: 220px;
  height: 100vh;
  background-color: ${props => props.theme.colors.black};
  display: flex;
  flex-direction: column;

  padding: 24px 0px;
  gap: 24px;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 0px 24px;
`

export const OrganizationContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const DividerHorizontal = styled.div`
  display: flex;
  height: 2px;
  width: 100%;
  background: ${props => props.theme.colors.green};
`

export const ItensSidebar = styled.div`
  width: 100%;
`

export const ItemSidebar = styled.div`
  display: flex;
  gap: 12px;

  align-items: center;
  padding: 12px 24px;
  color: ${props => props.theme.colors.text};
  &:hover {
    background-color: ${props => props.theme.colors.blue};
    animation: zoom-in-zoom-out 0.5s ease forwards;
  }

  @keyframes zoom-in-zoom-out {
    100% {
      transform: scale(1.05, 1.05);
    }
  }
`
