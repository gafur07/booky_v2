import { FC, ReactNode } from "react"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "src/config"

const ReactQueryProvider:FC<{children: ReactNode}> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}

export { ReactQueryProvider }