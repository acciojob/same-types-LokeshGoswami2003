function parseValue(val) {
    // Convert input to string if needed
    const str = String(val).trim();

    // If it's exactly "NaN", return NaN
    if (str === "NaN") return NaN;

    // If it’s a number string, convert it
    if (!isNaN(str) && str !== "") return Number(str);

    // Otherwise, keep it as original string
    return str;
}

function isSameType(value1, value2) {
    value1 = parseValue(value1);
    value2 = parseValue(value2);

    // Only true if both are NaN
    if (Number.isNaN(value1) && Number.isNaN(value2)) return true;

    // General type comparison
    return typeof value1 === typeof value2;
}

// Do not change below
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
