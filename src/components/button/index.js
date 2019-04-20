import React from 'react'
import styled from '@emotion/styled'

const StyledButton = styled.button`
  color: blue;
  height: 50px;
`

export const ButtonBase = ({ testId, children, ...others }) => (
  <StyledButton data-testid={testId} {...others}>
    {children}
  </StyledButton>
)
