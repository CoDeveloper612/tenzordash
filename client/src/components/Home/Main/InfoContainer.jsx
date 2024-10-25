import MoneyImg from "../../../assets/images/money.png";
import WalletImg from "../../../assets/images/wallet.png";
import ClockImg from "../../../assets/images/clock.png";

const InfoContainer = () => {
    return (
        <div className="my-8 md:my-16 lg:my-32 flex flex-col lg:flex-row justify-between px-2 md:px-24 lg:px-38 xl:px-48 2xl:px-58">
            <div className="third-one-part mb-2 p-8 bg-first-theme flex items-center rounded-xl">
                <img className="mr-6" src={MoneyImg} alt="money" />
                <div className="flex flex-col text-left">
                    <span className=" text-xl xl:text-3xl font-bold mb-4">
                        1263.32
                    </span>
                    <span className="text-second-theme">Total Volume</span>
                </div>
            </div>
            <div className="third-one-part mb-2 p-8 bg-first-theme flex items-center rounded-xl">
                <img className="mr-6" src={ClockImg} alt="clock" />
                <div className="flex flex-col text-left">
                    <span className="text-xl xl:text-3xl font-bold mb-4">
                        10
                    </span>
                    <span className="text-second-theme">Transactions</span>
                </div>
            </div>
            <div className="third-one-part mb-2 p-8 bg-first-theme flex items-center rounded-xl">
                <img className="mr-6" src={WalletImg} alt="wallet" />
                <div className="flex flex-col text-left">
                    <span className="text-xl xl:text-3xl font-bold mb-4">
                        14
                    </span>
                    <span className="text-second-theme">Active Wallets</span>
                </div>
            </div>
        </div>
    );
}

export default InfoContainer;