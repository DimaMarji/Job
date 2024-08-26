export const replaceSlashNWithNewLine = (str: string): string | any => {
    return str.replace(/(?:\r\n|\r|\n)/g, '<br>');
};

export const replaceSpacesWithDashes = (str: string): string | any => {
    return str && str.replace(/ +/g, "-");
};

export const replaceDashesWithSpaces = (str: string): string | any => {
    return str.split("-").join(" ")
};

export const checkIfTwoWordsAreTheSame = (word1: string, word2: string): boolean => {
    return word1.toLowerCase() === word2.toLowerCase();
}

export const checkIfWordIncludeInParagraph = (word: string, paragraph: string): boolean => {
    return paragraph.toLowerCase().includes(word.toLowerCase());
}

export const checkIfStringIsEmpty = (word: string): boolean => {
    return word === "";
}
export const checkIfTypeIsString = (word: string): boolean => {
    return typeof word === 'string';
}
export const trimString = (string: string, characters: number): any => {
    return string.substring(0, characters);
}

