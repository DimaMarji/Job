# TotpInput Component

The `TotpInput` component is a customizable Time-based One-Time Password (TOTP) input field that allows users to enter a
fixed number of digits. It can be used to implement TOTP-based two-factor authentication in your React applications.

## Installation

Before using the `TotpInput` component, ensure that you have the required dependencies installed:

```bash
npm install antd # Install Ant Design components if not already installed
```

Next, you can import and use the `TotpInput` component in your React application.

## Usage

Here's an example of how to use the `TotpInput` component:

```jsx
import React, {useState} from 'react';
import TotpInput from './TotpInput'; // Replace './TotpInput' with the correct path to your TotpInput component

const MyComponent = () => {
    const [totpError, setTotpError] = useState(false);

    const handleSubmit = (totpValue) => {
        
    };

    return (
        <div>
            <TotpInput
                digitCount={6}
                groupItems={3}
                separator={<div style={{width: "20px", display: "inline-flex"}}/>}
                onSubmit={handleSubmit}
                withButton
                isError={totpError}
                setIsError={setTotpError}
                customItemRender={(totpValue, digitLeft) => {
                    return (
                        <Space>
                            <Title>{totpValue}</Title>
                            ----<Title>{digitLeft} digits left</Title>
                        </Space>
                    );
                }}
            />
        </div>
    );
};

export default MyComponent;
```

## Props

The `TotpInput` component accepts the following props:

- `digitCount` (number, required): The total number of digits to be entered.
- `separator` (ReactNode): An optional JSX element that acts as a separator between groups of digits.
- `groupItems` (number): The number of digits in each group. For example, if `groupItems` is set to `3`, the input will
  be formatted as "123-456" (with `separator` provided).
- `withButton` (boolean): If `true`, a submit button will be displayed alongside the input. If `false`, the input will
  submit the value automatically when all digits are entered.
- `onSubmit` (function, required): A callback function that will be called with the entered TOTP value when the input is
  submitted.
- `isError` (boolean): A flag indicating whether an error occurred. If `true`, the input will display an error style.
- `errorMessage` (string): An optional custom error message to display when `isError` is `true`.
- `setIsError` (function): A callback function to update the `isError` state from the parent component.
- `customItemRender` (function): A function that can be used to customize the rendering of the input items. It receives
  two arguments: `totpValue` (string) and `digitLeft` (number) indicating the number of digits left to be entered.

## Styling

You can apply custom styles to the `TotpInput` component by targeting the provided CSS classes:

- `.totp-input-container`: The container div that wraps the entire input component.
- `.totp-digit-input`: The individual digit input fields.
- `.empty`: A class applied to the digit input fields when they have no value.

Feel free to customize the styles as per your application's design requirements.
