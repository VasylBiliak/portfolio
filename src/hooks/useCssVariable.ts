import { useEffect, useState } from "react";

const useCssVariable = (variableName: string) => {
    const [value, setValue] = useState("");

    useEffect(() => {
        if (typeof window === "undefined") return;

        const updateValue = () => {
            const val = getComputedStyle(document.documentElement)
                .getPropertyValue(variableName)
                .trim();

            setValue(val);
        };

        updateValue();

        const observer = new MutationObserver(updateValue);

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["data-theme", "class"],
        });

        return () => observer.disconnect();
    }, [variableName]);

    return value;
};

export default useCssVariable;