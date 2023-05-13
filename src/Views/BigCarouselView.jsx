import BigCarousel from '../app/components/BigCarousel/BigCarouselComponent'
export default () => {
    const imagesList = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"]
    const preffix = "/src/assets/c1/"
    return (
        <div className="big-carousel-view">
            big-carousel-view
            <BigCarousel list={imagesList} preffix={preffix} />
            /big-carousel-view
        </div>
    )
}