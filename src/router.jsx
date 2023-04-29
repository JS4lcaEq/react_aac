import { createBrowserRouter } from "react-router-dom"

import App from './App'
import Page from './Views/Page'
import Carousel from './Views/Carousel'
import CarouselMaket from './Views/CouselMaketView'
import SliceView from './Views/SliceView'

import TestView from './Views/TestView'

import CarouselView from "./Views/CarouselView"
import BigCarouselView from "./Views/BigCarouselView"

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
        {
          path: "test",
          element: <TestView />
        },
        {
          path: "carousel-view",
          element: <CarouselView />
        },
        {
          path: "big-carousel-view",
          element: <BigCarouselView />
        }
      ],
    }
  ]);