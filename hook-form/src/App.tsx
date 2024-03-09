import { FC, useState } from 'react'

import { DeliveryForm } from './deliveryForm'
import { loginContext, LoginForm, LoginInfo, TOKEN } from './login'

export const App: FC = () => {
  const [token, setToken] = useState<TOKEN>(undefined)
  const loginInfo: LoginInfo = {
    token, setToken
  }

  return (
    <main className="App">
      <loginContext.Provider value={loginInfo}>
        {!token && <LoginForm />}
        {token && <DeliveryForm />}
      </loginContext.Provider>
    </main>
  )
}
