// Write your code here

import './index.css'

const AppointmentItem = props => {
  const {eachItem, toggleIsFavorite} = props
  const {id, title, date, isStar} = eachItem

  const toggleIsFavoriteitem = () => {
    toggleIsFavorite(id)
  }

  return (
    <li className="eachCard" key={id}>
      <div className="rowli">
        <p>{title}</p>
        {isStar ? (
          <button
            type="button"
            data-testid="star"
            onClick={toggleIsFavoriteitem}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
              alt="star"
            />
          </button>
        ) : (
          <button
            type="button"
            id="btn"
            data-testid="star"
            onClick={toggleIsFavoriteitem}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
              alt="star"
            />
          </button>
        )}
      </div>
      <p>Date:{date}</p>
    </li>
  )
}

export default AppointmentItem
