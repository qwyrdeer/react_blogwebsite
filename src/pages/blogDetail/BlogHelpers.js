
export function DateConverter(createdDate) {
    const date = new Date(createdDate);
    return date.toLocaleDateString("nl-NL", {day: "numeric", month: "long", year: "numeric",});
}

export function ReadTimeConverter(text) {
    if (typeof text !== "string" || text.trim() === "") return 0;

    const averagePerMinute = 275;
    const amountOfWords = text.trim().split(" ").length;

    return Math.max(1, Math.ceil(amountOfWords / averagePerMinute));
}

export default DateConverter;