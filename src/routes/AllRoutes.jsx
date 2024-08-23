import { Route, Routes } from "react-router-dom";
import { About, Contact, Gallery, Home, FaqCard } from "../pages";

export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FaqCard />} />
            </Routes>
        </div>
    )
}
