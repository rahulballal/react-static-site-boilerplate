import React from 'react'
import { render } from 'react-testing-library'
import { ButtonBase } from '.'

test('<ButtonBase/> :: Useless test', () => {
  const testId = 'test-btn-1'
  const { getByTestId } = render(<ButtonBase testId={testId}>Hello</ButtonBase>)
  expect(getByTestId(testId).textContent).toBe('Hello')
})
