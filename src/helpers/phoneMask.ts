export const phoneMask = (value: string) => {
    if (!value) {
        return value;
    }

    const onlyNumbers = value.replace(/[^\d]/g, "");

    if (onlyNumbers.length <= 2) {
        return `(${onlyNumbers})`;
    }

    if (onlyNumbers.length <= 7) {
        return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2)}`;
    }

    if (onlyNumbers.length <= 10) {
        return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2, 6)}-${onlyNumbers.slice(6)}`;
    }

    return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2, 7)}-${onlyNumbers.slice(7)}`;
};
