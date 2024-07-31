// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerdata} = props
  const {headerText, description, className} = bannerdata
  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button type="button" className="show-more-btn">
          show more
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
