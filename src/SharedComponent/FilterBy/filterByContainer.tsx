import { Checkbox } from "antd";
import { useState } from "react";
import {Title} from "../../Components/Atoms/Typography/Title";
import {Text} from "../../Components/Atoms/Typography/Text";

const FilterBy = ({ label, options, onChange }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleChange = (checkedValues) => {
        setSelectedOptions(checkedValues);
        if (onChange) {
            onChange(checkedValues);
        }
    };

    return (
        <div style={{ marginBottom: "20px" }}>
            <Title level={5}>{label}</Title>
            <Checkbox.Group
                options={options.map(option => ({
                    label: (
                        <>
                            {option.label}
                            <Text type="secondary" style={{ marginLeft: "10px" }}>
                                {option.count}
                            </Text>
                        </>
                    ),
                    value: option.value
                }))}
                value={selectedOptions}
                onChange={handleChange}
                style={{ display: "flex", flexDirection: "column" }}
            />
        </div>
    );
};

export default FilterBy;
