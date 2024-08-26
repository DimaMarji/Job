import {IParamA} from "./interfaces/paramAInterface";
import {IReturnedValue} from "./interfaces/returnedValueInterface";

/**
 * Reds all the cookies using the vanilla browser api
 * @returns An object with the name as a key and the value
 */
export const readCookies = (x: IParamA): IReturnedValue | any => {
    // console.log(x)
};

//The best way to introduce code-splitting into your app is through the dynamic import() syntax.
import("../Mappers/selectMapper").then((Mapper) => {
    Mapper.selectMapper("");
});
