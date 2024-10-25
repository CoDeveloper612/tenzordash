import CashImg from "../../../assets/images/cash.png";

const CashContainer = () => {
    return (
        <div className="flex flex-col md:flex-row my-8 md:my-16 lg:my-32 px-2 md:px-24 lg:px-38 xl:px-48 2xl:px-58">
            <div className="flex-1 py-16 flex flex-col justify-center items-start pr-0 lg:pr-32">
                <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-left mb-8 md:mb-16 capitalize special-line-height">
                    looking for ways to trade your cryptocurrency into cash?
                </p>
                <p className="text-second-theme text-left mb-8 md:mb-16">
                Get paid in your fiat account in minutes with our list of payment option to choose from
                </p>
                <button className="bg-first-theme px-12 py-4 rounded-lg" >Start Trading</button>
            </div>
            <div className="flex w-full md:w-5/12 p-18 flex-col justify-center items-center bg-first-theme rounded-xl">
                <img className="" src={CashImg} alt="cash" />
            </div>
        </div>
    );
}

export default CashContainer