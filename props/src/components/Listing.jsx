import Item from "./Item"

export default function Listing({items}) {
    return (
        <div className="container">
            {items.map(i => <Item item={i}/>)}
        </div>
    )
}