interface NamespacesProps {
  account: {
    accountName: {
      value: string
    }
    id: {
      keepAlive: boolean
      value: string
    }
  }
  authentication: {
    storeUserEmail: {
      value: string
    }
    storeUserId: {
      value: string
    }
  }
  profile: {
    document: {
      value: string
    }
    email: {
      value: string
    }
    firstName: {
      value: string
    }
    id: {
      value: string
    }
    isAuthenticated: {
      value: string
    }
    lastName: {
      value: string
    }
    phone: {
      value: string
    }
  }
}

export interface UserAuthenticatorProps {
  response: {
    id: string
    namespaces: NamespacesProps
  }
}
