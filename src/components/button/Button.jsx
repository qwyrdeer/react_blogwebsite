function Button ({handleClick, buttonName, type}) {
    return (
        <>
            <button
                type={type}
                onClick={handleClick}
            >
                {buttonName}
            </button>
        </>
    );
}

export default Button;