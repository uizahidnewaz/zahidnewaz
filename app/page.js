import * as motion from 'motion/react-client'
import React from 'react'

const page = () => {
  return (
    <motion.div 
    initial={{y:20, opacity: 0 }}
    animate={{y:0, opacity: 1 }}
    >
      <h1>Hello, Zahid Newaz!</h1>
      <p>Welcome to my portfolio website.</p>
    </motion.div>
  )
}

export default page
