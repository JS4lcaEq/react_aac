import { createBrowserRouter } from "react-router-dom"

import App from './App'
import Page from './Views/Page'
import Carousel from './Views/Carousel'
import CarouselMaket from './Views/CarouselMaket/CouselMaketView'
import SliceView from './Views/SliceView'

export default createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <div>root</div>,
        },
        {
          path: "page",
          element: <Page />,
        },
        {
          path: "carousel",
          element: <Carousel />,
        },
        {
          path: "carouselMaket",
          element: <CarouselMaket />,
        },
        {
          path: "slice",
          element: <SliceView />,
        },
      ],
    }
  ]);