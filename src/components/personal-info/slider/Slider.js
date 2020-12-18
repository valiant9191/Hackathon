import Carousel from 'react-elastic-carousel'

const Item = () => {
    return (
        <div>
            <img src="https://media.timeout.com/images/103166737/750/422/image.jpg" alt="lala"/>
        </div>
    )
}

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
            <img src="https://media.timeout.com/images/103166739/750/422/image.jpg" alt="lala"/>
        </div>
    )
}

const Item3 = () => {
    return (
        <div>
            <img src="https://media.timeout.com/images/105293264/750/422/image.jpg" alt="lala"/>
        </div>
    )
}
const Item4 = () => {
    return (
        <div>
            <img src="https://media.timeout.com/images/103166750/750/422/image.jpg" alt="lala"/>
        </div>
    )
}
const Item5 = () => {
    return (
        <div>
            <img src="https://media.timeout.com/images/105222673/750/422/image.jpg" alt="lala"/>
        </div>
    )
}

const Slider = () => {
    return (
        <Carousel itemsToShow={1}>
            <Item>1</Item>
            <Item1>2</Item1>
            <Item2>3</Item2>
            <Item3>4</Item3>
            <Item4>5</Item4>
            <Item5>6</Item5>
        </Carousel>
    )
}

export default Slider;