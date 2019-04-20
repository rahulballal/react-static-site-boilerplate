import React from 'react'

export const ButtonBase = ({ testId, children, ...others }) => (
  <button data-testid={testId} {...others}>
    {children}
  </button>
)
