import { Checkbox, Divider, Tag } from "antd";
import { useState } from "react";
import { Title } from "../../Components/Atoms/Typography/Title";
import { Text } from "../../Components/Atoms/Typography/Text";
import "./styles.scss";

const FilterBy = ({ label, options, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (checkedValues) => {
    setSelectedOptions(checkedValues);
    if (onChange) {
      onChange(checkedValues);
    }
  };

  return (
    <div className="filter-by-container" style={{ marginBottom: "20px" }}>
      <Title
        typographyFontColor="#05264E"
        typographyType={{
          size: "14px-14px-14px",
          type: "semi-bold-semi-bold-semi-bold",
        }}
        level={5}
      >
        {label}
      </Title>
      <Checkbox.Group
        options={options?.map((option) => ({
          label: (
            <>
              <Text
                typographyFontColor="#4F5E64"
                typographyType={{
                  size: "14px-14px-14px",
                  type: "regular-regular-regular",
                }}
                style={{ marginLeft: "10px" }}
              >
                {option.label}
              </Text>
              <Tag style={{ marginLeft: "auto" }}>{option.count}</Tag>
            </>
          ),
          value: option.value,
        }))}
        value={selectedOptions}
        onChange={handleChange}
        style={{ display: "flex", flexDirection: "column" }}
      />
      <Divider/>
    </div>
  );
};

export default FilterBy;
