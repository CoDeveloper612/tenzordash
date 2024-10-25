import FaqComponent from "./FaqComponent";

const FaqContainer = () => {
    return (
        <div className="px-2 md:px-24 lg:px-38 xl:px-48 2xl:px-58 flex flex-col mb-32">
            <div className='font-bold text-4xl mb-8'>Frequently Asked Questions</div>
            <div className='text-second-theme mb-10'>See what others are also asking about</div>
            <FaqComponent />
        </div>
    );
}

export default FaqContainer;