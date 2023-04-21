import Carousel from "../app/components/Carousel/CarouselComponent"
export default () => {
    const data = [
        {head:["0 Real-time", "updates"], text: ["text 1"], url: "/src/assets/c2/3_4-1-1.jpg"},
        
        {head:["1 SaaS", "solution"], 
        text: [`Online system > qualitative data > quick updates > flexible setting > customization`, `All-in-one service with easy-to-use ergonomics.`],
        url: "/src/assets/c2/3_5-1-1.jpg"},
    
        {head:["2 Powerful", "API"],
        text: [`Anything in the system is available via API, so it’s nice to apply the settings online and get the clear result in your systems. Just choose what kind of data is needed.`], 
        url: "/src/assets/c2/c1.jpg"},
    
        {head:["3 All-Around", "News Digest"],
        text: [`We are collecting up to 80 news per day on automotive industry topics, then informing our clients via digest. All the history data for several years is just 1 click away!`], 
        url: "/src/assets/c2/3_News-1-1.jpg"},
    
        {head:["4 Comparison", " of specs"],
        text: [`Compare any cars, use semi-automatic tools to define direct competitors, add options/packages, apply value sets, see the differences etc — we made it ergonomic.`], 
        url: "/src/assets/c2/3_Comparsion-specs.jpg"},
        
        {head:["5 Multi-tool", "solutions"],
        text: [`Car spec matching is accompanied by demanded tools like equipment search, price-ladder, price history and other. We also offer to use Export or API for any section.`], 
        url: "/src/assets/c2/Multi-tool.jpg"},
    
        {head:["6 Product tools", "for dealers"],
        text: [`We’ve specific solutions for dealers, aimed at improving product knowledge and efficiency of sales persons, easening of car ordering process, and many more.`], 
        url: "/src/assets/c2/Dealership-product.jpg"},

        {head:["7 Real-time", "updates"],
        text: [`We’ve specific solutions for dealers, aimed at improving product knowledge and efficiency of sales persons, easening of car ordering process, and many more.`], 
        url: "/src/assets/c2/Dealers-product.jpg"}        
      ]
    return (
        <div className='carousel-page'>
            <h1>Carousel</h1>
            <Carousel data={data} />
        </div>
    )
}