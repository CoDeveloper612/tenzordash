import GradButton from "./GradButton";
import MainImg from "../../../assets/images/main-image.png";

const MainContainer = () => {
    return (
        <div className="px-2 md:px-24 lg:px-38 xl:px-48 2xl:px-58">
            <div className="text-center special-line-height text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold inter-bold-font capitalize leading-snug mt-16">
                Buy And Sell Crypto With Cash In a Decentralized<br />
                <span className='gradient-font mr-2'>Multi-Chain</span>
                P2P Marketplace
            </div>
            <div className="w-full md:w-6/12 m-auto text-center my-8 text-second-theme">
                "A fully decentralized P2P platform where you can buy and sell crypto with cash using your preffered payment methods.
            </div>
            <div className="my-12">
                <GradButton size="lg" title="Start Trading" />
            </div>
            <img className="w-full md:w-10/12 mx-auto border-2 rounded-lg border-first-theme" src={MainImg} alt="home" />
        </div>
    );
}

export default MainContainer;