import Carousel from 'react-elastic-carousel'

const Item = () => {
    return (
        <div>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="lala"/>
        </div>
    )
}

const Slider = () => {
    return (
        <Carousel itemsToShow={1}>
            <Item>1</Item>
            <Item>2</Item>
            <Item>3</Item>
            <Item>4</Item>
            <Item>5</Item>
            <Item>6</Item>
        </Carousel>
    )
}

export default Slider;