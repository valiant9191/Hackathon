import Carousel from 'react-elastic-carousel'

const Item = ({img}) => {
    return (
        <div>
            <img src={img} alt="lala"/>
        </div>
    )
}

const array = ["https://media.timeout.com/images/103166737/750/422/image.jpg", "https://www.bocadolobo.com/blog/wp-content/uploads/2020/10/Some-of-The-Most-Famous-Artists-Of-All-Time-13.jpg", "https://www.bocadolobo.com/blog/wp-content/uploads/2020/10/Some-of-The-Most-Famous-Artists-Of-All-Time-13.jpg" ]

const Item1 = () => {
    return (
        <div>
            <img src="https://www.bocadolobo.com/blog/wp-content/uploads/2020/10/Some-of-The-Most-Famous-Artists-Of-All-Time-13.jpg" alt="lala"/>
        </div>
    )
}

const Item2 = () => {
    return (
        <div>
            <img src="https://www.bocadolobo.com/blog/wp-content/uploads/2020/10/Some-of-The-Most-Famous-Artists-Of-All-Time-13.jpg" alt="lala"/>
        </div>
    )
}

const Slider = () => {
    return (
        <Carousel itemsToShow={1}>
            <Item>1</Item>
            <Item1>2</Item1>
            <Item>3</Item>
            <Item>4</Item>
            <Item>5</Item>
            <Item>6</Item>
        </Carousel>
    )
}

export default Slider;