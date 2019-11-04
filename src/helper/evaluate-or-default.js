export default function evaluateOrDefault(currentValue, defaultValue) {
    return typeof currentValue === "undefined" ? defaultValue : currentValue;
}