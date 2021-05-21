## KULLANILACAK TEKNOLOJİLER

- Styled-Component
- Context-API
- Github API
- Fusion Charts
- Axios
- React Dom
- React Icons
- React Scripts
- Auth0 (auth0/auth0-react)

# [Project Demo](https://c-github.netlify.app/)

## Styled Components

[Styled-Components](https://styled-components.com/)

```jsx
import styled from "styled-components";

const ReactComponent = () => {
 // logic here
 return <Wrapper>
 {some content}
 </Wrapper>
}


const Wrapper = styled.htmlElement`
write your styles here
`
export default ReactComponent
```

## React Icons

[React Icons - Main Docs](https://react-icons.github.io/react-icons/)

```jsx
import { FiUsers, FiUserPlus } from 'react-icons/fi';
<FiUsers className='nameOfTheClass'> </FiUsers>;
```

## React Router Dom

- [react-router-dom - Main Docs](https://reactrouter.com/web/guides/quick-start)

- <Switch> renders the first child <Route> that matches
- A <Route path="*"> always matches

## Github API

- [Kullanici](https://api.github.com/users/ckymn)
- [Projeler](https://api.github.com/users/ckymn/repos?per_page=100)
- [Takipçiler](https://api.github.com/users/ckymn/followers)
- [Sınırlı Takipçiler](https://api.github.com/users/ckymn/followers?per_page=100)
- [Oran Sınırı](https://api.github.com/rate_limit)

## Auth0

- [Auth0 - Main Docs](https://auth0.com/)

- Create Application
- Choose : Single Page Web Applications
- Choose : React
- Go to Settings Tab
- Copy/Paste Domain, ClientID - can be public (or use .env)
- Add Domain -
  for now http://localhost:3000 (DON'T COPY PASTE FROM URL BAR)

  - Allowed Callback URLs
  - Allowed Logout URLs
  - Allowed Web Origins
  - SAVE CHANGES!!!!!!!!!!!!!!!

- Connections Login Sırasında seçilecek sosyal hesaplar
  email,social
- Projeye auth0 dahil etme yolları
- [React SDK Docs](https://auth0.com/docs/libraries/auth0-react)
- [REACT SDK API Docs](https://auth0.github.io/auth0-react/)
