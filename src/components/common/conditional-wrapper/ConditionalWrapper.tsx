import React from 'react'

interface LinkWrapperProps {
    condition: boolean;
    wrapper: ((children: JSX.Element[]) => JSX.Element);
    children: JSX.Element[];
}

function ConditionalWrapper({ condition, wrapper, children }: LinkWrapperProps) {
  return (<>{condition ? wrapper(children) : children}</>);
}

export default ConditionalWrapper