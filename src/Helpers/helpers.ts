export const getFirstLetterOfFirstAndLastWord = (word: string) => {
    let firstLetters = word
        .split(" ")
        .map((i) => i.charAt(0))
        .join("")
        .toUpperCase();
    let result =firstLetters?.length>1? firstLetters[0]?.concat(firstLetters[firstLetters.length - 1]):firstLetters[0];
    return result;
};

export const getUserAvatarColor = (userId?: any) => {
    const AvatarColors = ["blue", "yellow", "magenta"]
    const firstNumberMatch = userId ? `${userId}`.match(/\d/) : ["1"];
    const firstNumber = firstNumberMatch ? parseInt(firstNumberMatch[0]) : 1;
    return AvatarColors[firstNumber % AvatarColors.length];
}