export const InputRules = {
    greaterThanEight: {
        pattern: new RegExp("^(?=.*).{8,}$"),
        message: "8 characters length or more",
    },
    containsNumber: {pattern: new RegExp("[0-9]+"), message: "1 digit or more"},
    containsSymbol: {
        pattern: new RegExp("[^a-zA-Z0-9 ]"),
        message: "1 symbol or more",
    },
    ContainsUppercase: {
        pattern: new RegExp("(.*[A-Z].*)"),
        message: "1 uppercase letter or more",
    },
    ContainsLowercase: {
        pattern: new RegExp("(.*[a-z].*)"),
        message: "1 lowercase letter or more",
    },
    email:  {
        type: 'email',
        message: 'Please enter a valid email address.',
    },
    required: {required: true, message: "`${label}` is required!"},

    NumbersOnly: {
        pattern: new RegExp(/^[0-9]*$/),
        message: "Input numbers only",
    },
    decimalOnly: {
        pattern: new RegExp(/^(?!0+\.00)(?=.{1,9}(\.|$))\d{1,3}(,\d{3})*(\.\d+)?$/),
        message: "Input numbers only",
    },
    EnglishOnly: {
        pattern: new RegExp(/^[~ `!@#$%^?&*()_+=[\]{}|;':",.\\/<a-zA-Z0-9-/\n]+$/),
        message: "English characters only",
    },
    ArabicOnly: {
        pattern: new RegExp(
            /^(?=.*?\p{Script_Extensions=Arabic})[0-9 -().!@"#$%^&*'؟_\-+=/:;|\\<>,\p{Script_Extensions=Arabic}]+$/u
        ),
        message: "محارف عربية فقط",
    },
    URL: {
        pattern: /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(:\d{2,5})?([/?].*)?$/i,
        message: "Enter a valid URL",
    },
    facebook: {
        pattern:
            /^(?:https?:\/\/)?(?:www\.)?facebook\.com\/?(?!.*\.\.)(?:\/[^\/]*)?$/,
        message: "Enter a valid Facebook link",
    },
    linkedin: {
        pattern:
            /^(?:https?:\/\/)?(?:www\.)?linkedin\.com\/?(?!.*\.\.)(?:\/[^\/]*)?$/,
        message: "Enter a valid linkedin link",
    },
    twitter: {
        pattern:
            /^(?:https?:\/\/)?(?:www\.)?twitter\.com\/?(?!.*\.\.)(?:\/[^\/]*)?$/,
        message: "Enter a valid twitter link",
    },
    atMost30Characters: {
        pattern: new RegExp(/^.{1,30}$/),
        message: "30 characters length at most",
    },
    letterOnly: {
        pattern: new RegExp(/^[a-zA-Z\s]+$/),
        message: 'Please enter a valid name',
    },
    containOneSpaceAtLeast: {
        pattern: new RegExp(".+\\s.+"),
        message: 'this field should contains at least one space in between characters',
    }
};
