'use client'

import { Spin } from 'antd'
import React from 'react'

const Loading = () => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden flex justify-center items-center">
      <Spin />
    </div>
  )
}

export default Loading
