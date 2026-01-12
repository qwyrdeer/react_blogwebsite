import './InputField.css'

function Inputfield({fieldName, fieldData, fieldType, textValue, setTextValue}) {

    return (
        <>
            <div className="inputField">
                <label htmlFor={fieldData}>
                    {fieldName}
                </label>
                <input
                    id={fieldData}
                    type={fieldType}
                    value={textValue}
                    onChange={(e) => setTextValue(e.target.value)}
                />
            </div>
        </>

    );
}
export default Inputfield;