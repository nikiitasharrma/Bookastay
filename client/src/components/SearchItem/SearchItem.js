import "./searchitem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450056.jpeg?k=251e2507d43a24a4c58bb961b8d157147d56efbf91b49f9606bc768c58f581e4&o=" alt="" className="siImg"/>
        <div className="siDesc">
            <h1 className="siTitle">Name</h1>
            <span className="siDistance">500m</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Studio Apartment with air conditioning</span>
            <span className="siFeatures">Entire studio | 1 bathroom | king-sized bed </span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">₹3000</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem 