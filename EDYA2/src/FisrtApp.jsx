import React from 'react'
import ReactDOM from 'react-dom/client'


function FirstApp(){
    return (
    <>
    <span>
        <h1>10</h1>
    </span>
    </>
    )
  }

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <FirtsApp/>
    </React.StrictMode>
  )

export default FirtApp