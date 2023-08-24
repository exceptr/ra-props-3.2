function choiceСurrencyCode(currency_code, price) {
    if (currency_code === 'USD') return `$${price}`
    else if (currency_code === 'EUR') return `€${price}`
    else if (currency_code === 'GBP') return `${price} GBP`
}

function choiceLevelClass(quantity) {
    if (quantity <= 10) return 'level-low'
    else if (quantity > 10 && quantity <= 20) return 'level-medium'
    else if (quantity > 20) return 'level-high'
}

function maxDescriptionLength(title) {
    if (title.length > 50) return title.slice(0, 50) + '...'
    else return title
}

export default function Item({item}) {
    return (item.MainImage ? (
        <div className="item-list">
          <div className="item">
            <div className="item-image">
              <a href={item.url}>
                <img src={item.MainImage.url_570xN} alt={item.title}></img>
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{maxDescriptionLength(item.title)}</p>
              <p className="item-price">{choiceСurrencyCode(item.currency_code, item.price)}</p>
              <p className={`item-quantity ${choiceLevelClass(item.quantity)}`}>{item.quantity} left</p>
            </div>
          </div>
        </div>
    ):null
    )
}