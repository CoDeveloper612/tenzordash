import { useState } from "react";
import FirstImg from "../../../assets/images/first.png";
import SecondImg from "../../../assets/images/second.png";
import ThirdImg from "../../../assets/images/third.png";

const GuideComponent = () => {
    const [index, setIndex] = useState(0);
    return (
        <div className="px-2 md:px-24 lg:px-38 xl:px-48 2xl:px-58 mb-32 text-white">
            <div className="text-4xl font-bold mb-8">HOW P2P WORKS</div>
            <div className="text-second-theme mb-8">Your step by step guide to using our P2P platform</div>
            <div className="flex justify-center mb-8">
                <div className={`py-2 px-4 border-b-2 cursor-pointer ${index === 0 ? "green-border" : "border-first-theme"}`} onClick={() => setIndex(0)}>Buy Crypto</div>
                <div className={`py-2 px-4 border-b-2 cursor-pointer ${index === 1 ? "green-border" : "border-first-theme"}`} onClick={() => setIndex(1)}>Sell Crypto</div>
            </div>
            <div className="">
                {
                    index === 0 &&
                        <div className="flex justify-between flex-col md:flex-row">
                            <div className="third-one-part p-4 flex flex-col items-center border-2 border-first-theme rounded-lg mb-2">
                                <img className="w-10 h-10" src={FirstImg} alt="first" />
                                <div className="mb-2">Create an Offer</div>
                                <div className="text-sm text-second-theme">Create a Buy offer, then wait for users to engage with your created offer.</div>
                            </div>
                            <div className="third-one-part p-4 flex flex-col items-center border-2 border-first-theme rounded-lg mb-2 mx-1">
                                <img className="w-10 h-10" src={SecondImg} alt="second" />
                                <div className="mb-2">Pay the seller</div>
                                <div className="text-sm text-second-theme">Send money to the seller via the listed payment methods. Complete the fiat transaction and click \"Payment done\" to notify seller.</div>
                            </div>
                            <div className="third-one-part p-4 flex flex-col items-center border-2 border-first-theme rounded-lg mb-2">
                                <img className="w-10 h-10" src={ThirdImg} alt="third" />
                                <div className="mb-2">Get your Crypto</div>
                                <div className="text-sm text-second-theme">Once the seller confirms receipt of money, the escrowed crypto will be released to you immediately.</div>
                            </div>
                        </div>
                }
                {
                    index === 1 &&
                        <div className="flex justify-between flex-col md:flex-row">
                            <div className="third-part p-4 flex flex-col items-center border-2 border-first-theme rounded-lg mb-2">
                                <img className="w-10 h-10" src={FirstImg} alt="first" />
                                <div className="mb-2">Place an Order</div>
                                <div className="text-sm text-second-theme">After you place an order from the offer list, your crypto will be escrowed by our smart contract.</div>
                            </div>
                            <div className="third-part p-4 flex flex-col items-center border-2 border-first-theme rounded-lg mb-2">
                                <img className="w-10 h-10" src={SecondImg} alt="second" />
                                <div className="mb-2">Confirm the Payment</div>
                                <div className="text-sm text-second-theme">Check your receiving account for payment confirmation by the buyer. Make sure its the exact amount as stated on the trade.</div>
                            </div>
                            <div className="third-part p-4 flex flex-col items-center border-2 border-first-theme rounded-lg mb-2">
                                <img className="w-10 h-10" src={ThirdImg} alt="third" />
                                <div className="mb-2">Release Crypto</div>
                                <div className="text-sm text-second-theme">Once you confirm the receipt of money, release crypto to the buyer.</div>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
}

export default GuideComponent;