import { IoCloseCircleSharp } from "react-icons/io5";
import "./index.css";
import React, { ReactElement, useEffect, useState } from "react";
import Icon from "../Icon";

type InputProps = {
    id: string;
    value: string;
    onValueChange: (value: string) => void;
    type: string;
}

type DetailedInputProps = {
    clear: boolean;
    onClear: (state: boolean) => void;
} & InputProps;

const classes = {
    inputCloseIcon: "input-close-icon",
};

enum InputTypes {
    TEXT = "text",
    SEARCH = "search",
}

/**
 * Create an InputField from customizable props with callbacks
 * @param {InputProps} props - instance properties for Input
 * @returns {ReactElement} an Input element
 */
const InputField = ({ id, onValueChange, clear, onClear, type }: DetailedInputProps): ReactElement => {
    const [input, setInput] = useState<string>("");
    const inputElement = document.getElementById(id) as HTMLInputElement;

    // type manipulation
    type = morphType(type);

    // callback - onValueChange
    useEffect(() => {
        onValueChange(input);
    }, [input]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    useEffect(() => {
        if (clear) {
            handleClear();
            onClear(false);
        }
    }, [clear])

    // clear input fields according to the type
    const handleClear = () => {
        switch (type) {
            case InputTypes.TEXT:
                setInput("");
                inputElement.value = "";
        }
    }
        

    return <input id={id} type={type} onChange={handleChange} />;
};

/**
 * Create an Input from customizable props with callbacks
 * @param {InputProps} props - instance properties for Input
 * @returns {ReactElement} a clustered Input component
 */
const Input = ({ id, value, onValueChange, type = InputTypes.TEXT }: InputProps): ReactElement => {

    const [clear, setClear] = useState(false);

    const setIsCloseIconHidden = () => {
        return value.length === 0;
    }

    const handleCloseIconClick = () => {
        setClear(true);
    }

    return (
        <>
            <InputField id={id} value={value} onValueChange={onValueChange} clear={clear} onClear={setClear} type={type} />
            {type === InputTypes.SEARCH && (
                <Icon isHidden={setIsCloseIconHidden()} onClick={handleCloseIconClick}>
                    <IoCloseCircleSharp
                        className={classes.inputCloseIcon}
                    />
                </Icon>
            )}
        </>
    );
};

/**
 * Morph the input type to display the input UI correctly
 * (some types like "search" has ugly close icon)
 * @param {String} type - the prop type of Input
 * @returns a morgh input type
 */
const morphType = (type: string) => {
    if (type === InputTypes.SEARCH) return InputTypes.TEXT;

    return type;
};

export default Input;
