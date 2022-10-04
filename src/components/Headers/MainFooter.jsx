import { Footer } from "flowbite-react";

const MainFooter = () => {
    return (
        <Footer container={true}>
            <Footer.Copyright
                href="#"
                by="ZA.Engineering™ - made by Ibrahim Ghasia"
                year={2022}
            />
            <Footer.LinkGroup>
                <Footer.Link href="#">Licensing</Footer.Link>
                <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    );
};

export default MainFooter;
