import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";

const Layout = () => {
    return (
        <Container>
            <Header />
            <Outlet />
            <Footer />
        </Container>
    );
};

export default Layout;