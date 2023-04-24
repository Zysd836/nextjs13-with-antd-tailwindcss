import React from 'react'

type Props = {
	children: React.ReactNode;
};
const DemoLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div>Lyout demo</div>
      {children}
    </div>
  )
}

export default DemoLayout
