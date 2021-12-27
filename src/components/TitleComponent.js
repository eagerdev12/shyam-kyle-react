const Title = ({ item }) => {
    return (
        <div className="title">
            <img style={{ width: "150px" }} src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
        </div>
    )
}

export default Title;