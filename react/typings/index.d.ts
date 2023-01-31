/* eslint-disable @typescript-eslint/no-explicit-any */

export {}


declare global {
  interface Window {
    SizebayPrescript: () => Promise
    Sizebay: any
  }
}

interface Runtime {
  rootPath?: string
  account: string
  workspace: string
}
declare global {
  namespace NodeJS {
    interface Global extends Global {
      __hostname__: string
      __pathname__: string
      __RUNTIME__: Runtime
    }
  }

  interface Window extends Window {
    __RENDER_8_SESSION__: RenderSession
    __RUNTIME__: Runtime
    dataLayer: any[]
  }

  interface RenderSession {
    patchSession: (data: any) => Promise<void>
    sessionPromise: Promise<UserAuthenticatorProps>
  }
}
