import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AllAdds from "../components/AllAdds";
import CustomAIAvtar from "../components/CustomAIAvtar";
import BrandEditoral from "../components/BrandEditoral";
import Educational from "../components/Educational";
import Podcast from "../components/Podcast";
import Events from "../components/Events";
import Drone from "../components/Drone";

const router = createBrowserRouter([
    {
        path : "/",
        element: <App/>,
        children : [
            {
                path : "",
                element : <Home/>,
                children : [
                    {
                        path : "/alladds",
                        element : <AllAdds/>
                    },
                    {
                        path : "/cutomaiavtar",
                        element : <CustomAIAvtar/>
                    },
                    {
                        path : "/brandeditoral",
                        element : <BrandEditoral/>
                    },
                    {
                        path : "/educational",
                        element : <Educational/>
                    },
                    {
                        path : "/podcast",
                        element : <Podcast/>
                    },
                    {
                        path : "/events",
                        element : <Events/>
                    },
                    {
                        path : "/drone",
                        element : <Drone/>
                    },
                ]
            }
        ]
    }
])

export default router