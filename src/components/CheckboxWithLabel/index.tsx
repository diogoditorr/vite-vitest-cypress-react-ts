import { useState } from "react";

interface CheckboxWithLabelProps {
    labelOn: string;
    labelOff: string;
}

export function CheckboxWithLabel({
    labelOn,
    labelOff,
}: CheckboxWithLabelProps) {
    const [isChecked, setIsChecked] = useState(false);

    function handleOnChange() {
        setIsChecked(!isChecked);
    }

    return (
        <label>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleOnChange}
            />
            {isChecked ? labelOn : labelOff}
        </label>
    );
}
