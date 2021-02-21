import React from 'react'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { BaseProvider } from 'baseui'

const engine = new Styletron()

const StyleProvider = ({ children, theme }) => (
  <StyletronProvider value={engine}>
    <BaseProvider theme={theme}>
      {children}
    </BaseProvider>
  </StyletronProvider>
)

export default StyleProvider

