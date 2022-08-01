// Write your code here

/* import './index.css'

const AppItem=props=>{
    const{appDetails}=props

    const{appName,imageUrl}=appDetails


return (

<li className="each-app-item">
<img className="image" src={imageUrl} alt={appName}/>
<p className="app-name">{appName}</p>
</li>
)
}

import default AppItem

*/
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-item">
      <img className="app-image" src={imageUrl} alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
