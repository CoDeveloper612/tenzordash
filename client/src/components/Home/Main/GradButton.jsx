const GradButton = (props) => {
    const { title, size, cssClass, onClick } = props;
    return (
        <button 
            className={`${size === "lg" ? "px-12 py-4" : "px-6 py-2"} ${cssClass} custom-gradient text-white rounded-lg`}
            onClick={onClick}
        >
            {title}
        </button>
    );
}

export default GradButton;