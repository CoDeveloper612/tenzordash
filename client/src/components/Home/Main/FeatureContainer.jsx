import IDImg from "../../../assets/images/id.png";
import { Icon } from '@iconify/react';

const FeatureContainer = () => {
    return (
        <div className="flex flex-col mb-32 px-2 md:px-24 lg:px-38 xl:px-48 2xl:px-58">
            <div className="text-4xl font-bold mb-8">Our Features</div>
            <div className="text-second-theme mb-16">Here is what makes us different from others</div>
            <div className="flex flex-wrap justify-between">
                <div className="third-part p-4 flex flex-col items-center bg-first-theme rounded-lg mb-8">
                    <div className="w-28 h-28 custom-gradient rounded-full flex items-center justify-center ">
                        <img src={IDImg} alt="id" />
                    </div>
                    <div className="my-4">No Verification Needed</div>
                    <div className="text-second-theme">
                    Get started in minutes. Connect your wallet, no need for personal information.
                    </div>
                </div>
                <div className="third-part p-4 flex flex-col items-center bg-first-theme rounded-lg mb-8">
                    <div className="w-28 h-28 custom-gradient rounded-full flex items-center justify-center ">
                        <Icon icon="eos-icons:blockchain" style={{ fontSize: '48px' }} />
                    </div>
                    <div className="my-4">Fully Decentralized</div>
                    <div className="text-second-theme">
                    Trading takes place among a global P2P network of annonymous users using MansaTrade.
                    </div>
                </div>
                <div className="third-part p-4 flex flex-col items-center bg-first-theme rounded-lg mb-8">
                    <div className="w-28 h-28 custom-gradient rounded-full flex items-center justify-center ">
                        <Icon icon="fluent:lock-shield-24-regular" style={{ fontSize: '48px' }} />
                    </div>
                    <div className="my-4">Safe</div>
                    <div className="text-second-theme">
                    We don’t have access to your funds. Transfers held in-between trades are stored in a smart contract to protect both buyers and sellers
                    </div>
                </div>
                <div className="third-part p-4 flex flex-col items-center bg-first-theme rounded-lg mb-8">
                    <div className="w-28 h-28 custom-gradient rounded-full flex items-center justify-center ">
                        <Icon icon="fluent:payment-16-regular" style={{ fontSize: '48px' }} />
                    </div>
                    <div className="my-4">Flexible Payment Methods</div>
                    <div className="text-second-theme">
                    We have a wide range of payment method available for you to receive cash
                    </div>
                </div>
                <div className="third-part p-4 flex flex-col items-center bg-first-theme rounded-lg mb-8">
                    <div className="w-28 h-28 custom-gradient rounded-full flex items-center justify-center ">
                        <Icon icon="bx:message-square-dots" style={{ fontSize: '48px' }} />
                    </div>
                    <div className="my-4">Wallet to Wallet Chat</div>
                    <div className="text-second-theme">
                    Buyers and Sellers can communicate via our smart wallet-to-wallet chat during trade
                    </div>
                </div>
                <div className="third-part p-4 flex flex-col items-center bg-first-theme rounded-lg mb-8">
                    <div className="w-28 h-28 custom-gradient rounded-full flex items-center justify-center ">
                        <Icon icon="ic:round-currency-exchange" style={{ fontSize: '48px' }} />
                    </div>
                    <div className="my-4">Easy to Use</div>
                    <div className="text-second-theme">
                    Getting started on your first trade is just a few clicks away.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureContainer;