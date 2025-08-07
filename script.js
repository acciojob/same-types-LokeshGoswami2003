function isSameType(value1, value2) {
  //you
    value1 = parseValue(value1);
    value2 = parseValue(value2);
	 if (Number.isNaN(value1) && Number.isNaN(value2)) {
        return true;
    }

    // General case: compare types directly
    return typeof value1 === typeof value2;
}
function parseValue(val) {
    if (val === "NaN") return NaN;

    // Convert to string to safely use .trim()
    const str = String(val);

    // If it's a number string, convert to number
    if (!isNaN(str) && str.trim() !== "") return Number(str);

    return val;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
