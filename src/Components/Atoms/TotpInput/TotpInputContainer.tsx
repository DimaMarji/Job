import React, {useEffect, useRef, useState} from 'react';
import {Input} from 'antd';
import {Button} from "../Button";
import {ITotpInputProps} from "./interface";


const TotpInput: React.FC<ITotpInputProps> = ({
                                                  digitCount,
                                                  separator,
                                                  groupItems,
                                                  withButton,
                                                  onSubmit,
                                                  isError,
                                                  customItemRender,
                                                  errorMessage,
                                                  setIsError,
                                                  isLoading,
                                                  containerClassName = ""
                                              }) => {
    const inputRefs = useRef<any>([]);


    const [totpValue, setTotpValue] = useState<string[]>(new Array(digitCount).fill(undefined));
    useEffect(() => {
        let isAllElementsFilled = totpValue.every((element) => element !== undefined);
        if (isAllElementsFilled) {
            inputRefs?.current?.map((item: any, index: number) => {
                inputRefs.current[index].blur();
            })
        }
    }, [totpValue]);

    const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
        const key = event.key;
        if (key === 'Backspace') {
            setTotpValue((prev: any) => {
                return [...prev.slice(0, index), undefined, ...prev.slice(index + 1)];
            });
            if (index > 0) inputRefs.current[index - 1].focus();
        } else if (key === 'ArrowLeft' && index > 0) {
            inputRefs.current[index - 1].focus();
        } else if (key === 'ArrowRight' && index < digitCount - 1) {
            inputRefs.current[index + 1].focus();
        } else if (key.match(/[0-9]/)) {
            setTotpValue((prev: any) => {
                return [...prev.slice(0, index), key, ...prev.slice(index + 1)];
            });
            event.preventDefault();
            const nextIndex = index === digitCount - 1 ? index : index + 1;
            inputRefs.current[nextIndex].focus();
        } else {

            event.preventDefault();
        }
    };

    const inputs = [];
    for (let i = 0; i < digitCount; i++) {
        inputs.push(
            <Input
                className={`totp-digit-input ${!totpValue[i] ? "empty" : ""}`}
                value={totpValue[i]}
                placeholder={"-"}
                maxLength={1}
                key={i}
                onKeyDown={(event) => handleKeyDown(i, event)}
                ref={(input) => (inputRefs.current[i] = input!)}
            />
        );
        if ((i + 1) % groupItems === 0 && i < digitCount - 1)
            inputs.push(separator);

    }

    const nonUndefinedValues = totpValue?.filter((value) => !!value);
    const isComplete = nonUndefinedValues?.length === digitCount;

    const digitLeft = digitCount - nonUndefinedValues?.length

    //if no trigger button and the trigger is when totp digits are complete
    useEffect(() => {
        if (isComplete && !withButton)
            onSubmit(totpValue.join(''))

    }, [isComplete, totpValue])


    useEffect(() => {
        setIsError && setIsError(false)
    }, [totpValue])

    //initial focus on first digit
    useEffect(() => {
        inputRefs.current[0].focus();
    }, []);

    return <div className={`${containerClassName} totp-input-container`}>
        <div>{inputs}</div>

        {withButton && <Button disabled={(!isComplete || isError)} type={"primary"}
                               className={`totp-submit-btn ${isError ? "totp-submit-btn-error" : ""}`}
                               onClick={() => onSubmit(totpValue.join(''))}
                               loading={isLoading}
        >
            {isError ? errorMessage ?? "Wrong code!"
                : isComplete ? "Let's go" :
                    `${digitLeft} ${(digitLeft == 1) ?
                        "Digit left" :
                        "Digits left"}`}
        </Button>}
        {!!customItemRender && customItemRender(totpValue.join(''), digitLeft)}
    </div>;
};

export default TotpInput;