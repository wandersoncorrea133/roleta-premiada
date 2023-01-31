/* Typings for `render-runtime` */
declare module 'vtex.render-runtime' {
  import { Component, ComponentType, ReactElement, ReactType } from 'react'

  export interface NavigationOptions {
    page: string
    params?: any
  }

  export interface RenderContextProps {
    runtime: {
      navigate: (options: NavigationOptions) => void
    }
  }

  interface ExtensionPointProps {
    id: string
    [key: string]: any
  }

  export const ExtensionPoint: ComponentType<ExtensionPointProps>

  interface ChildBlockProps {
    id: string
  }

  export const ChildBlock: ComponentType<ChildBlockProps>
  export const useChildBlock = ({ id: string }) => GenericObject


  interface Runtime {
    account: string
    rootPath: string
    query: Record<string, string>
    navigate: (args: NavigateArgs) => void
    getSettings(id: string): StoreSettings
    route: {
      routeId: string
    }
  }

  interface RuntimeWithRoute extends Runtime {
    route: {
      routeId: string
      title?: string
      metaTags?: MetaTagsParams
      canonicalPath?: string
    }
  }

  export function useRuntime(): Runtime

  export const Helmet: ReactElement
  export const Link: ReactType
  export const NoSSR: ReactElement
  export const RenderContextConsumer: ReactElement
  export const canUseDOM: boolean
  export const withRuntimeContext: <TOriginalProps extends GenericObject>(
    Component: ComponentType<TOriginalProps & RenderContextProps>
  ) => ComponentType<TOriginalProps>
}
