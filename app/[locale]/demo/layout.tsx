import React from 'react'

type Props = {
	children: React.ReactNode;
};
const DemoLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div>dasda</div>
      {children}
    </div>
  )
}

export default DemoLayout
