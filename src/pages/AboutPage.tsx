import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <h1>Information Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ea
        temporibus distinctio quam odit suscipit quisquam officia. Laborum
        exercitationem assumenda dicta unde praesentium veniam corrupti
        cupiditate necessitatibus similique magni mollitia numquam amet
        voluptatem aliquam quae voluptas accusantium ex obcaecati explicabo quis
        cum, illum placeat! Dolore sint alias suscipit porro nihil!
      </p>
      <button className="btn" onClick={() => history.push('/')}>
        Back To List
      </button>
    </>
  )
}
