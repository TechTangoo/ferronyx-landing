import Button from '@/components/Button'
import React from 'react'

function Home() {
  return (
    <div>
        <Button className="mt-4" variant={'primary'} onClick={() => alert('Button clicked!')}>
          Request demo
        </Button>
         <Button className="mt-4" variant={'secondary'} onClick={() => alert('Button clicked!')}>
          Send Feedback
        </Button>
    </div>
  )
}

export default Home
