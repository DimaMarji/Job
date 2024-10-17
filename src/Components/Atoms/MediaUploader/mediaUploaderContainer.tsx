import {message, Upload} from "antd";
import {IMediaUploaderProps} from "./interfaces";
import {MakeCustomRequest} from "./helper";
import {useState} from "react";
import {documentTypes} from "../../../Constants/Files/filesTypes";

export default function MediaUploaderContainer({
                                                   getController,
                                                   onChange,
                                                   beforeUpload,
                                                   fileSizeLimit,
                                                   onSizeExceed,
                                                   ...restProps
                                               }: IMediaUploaderProps) {
    const [sizeExceed, setSizeExceed] = useState<boolean>(false)
    const [uploadError, setUploadError] = useState<boolean>(false)
    const [typeError, setTypeError] = useState<boolean>(false)

    const handleChange = (info: any) => {
        if (!sizeExceed && !typeError) {
            setUploadError(false)
            onChange && onChange(info)
            if (info?.event?.percent == 100) {
                info.file.status = 'done'
            } else if (info.file.status === 'error') {
                setUploadError(true)
                message.error({
                    content: "Something went wrong while uploading.",
                    key: "upload-error",
                    duration: 0.8
                });
            }
        }
        else {
            setUploadError(true)
        }

    }


    const handleBeforeUpload = (file: File) => {
        if (!documentTypes.includes(file.type)) {
            setTypeError(true)
            message.error(`${file.name} is not a pdf, doc or docx file`);
            return false;
        } else {
            setTypeError(false)
            if (fileSizeLimit && file.size > fileSizeLimit) {
                const fileSizeInMB = (file.size / (1024 * 1024)).toFixed(2);
                setSizeExceed(true);

                onSizeExceed ? onSizeExceed() : message.error({
                    content: `File size exceeds the limit (${fileSizeInMB} MB).`,
                    key: "upload-error",
                    duration: 0.8,
                });
                return false; // Prevent file upload
            }
            setSizeExceed(false);
            return true; // Allow file upload
        }
    };


    return <Upload
        onChange={handleChange}
        beforeUpload={handleBeforeUpload}
        showUploadList={(sizeExceed || uploadError) ? false : {
            showRemoveIcon: false,
            showPreviewIcon: false,
        }}
        customRequest={(props) => {
            MakeCustomRequest({
                ...props,
                getController: getController,
            })
        }
        }
        {...restProps}
    >
        {restProps.children}
    </Upload>


}