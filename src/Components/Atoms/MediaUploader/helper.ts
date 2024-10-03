import axios from "axios";
import {IRcCustomRequestOptions} from "./interfaces";
import {message} from "antd";

export const MakeCustomRequest = ({
                                      data = {},
                                      onProgress,
                                      method = "post",
                                      headers ,
                                      action,
                                      onError,
                                      onSuccess,
                                      filename = "file",
                                      file,
                                      getController,
                                  }: IRcCustomRequestOptions): void => {

    const controller = new AbortController();
    getController && getController({
        file: file,
        controller: controller
    })


    // data of body request
    const dataSend = {
        ...data,
    }
    dataSend[filename] = file

    if(!!action) {
        axios({
            method: method,
            url: action,
            data: {
                ...dataSend,
            },
            headers: {
                ...headers,
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: (progressEvent: any) => {
                const percent = ((progressEvent.loaded / progressEvent.total) * 100) as number
                onProgress && onProgress(
                    {
                        percent: Math.round(percent)
                    }
                )
            },
            signal: controller.signal
        }).then((response) => {
            message.success({
                content: `${(file as any)?.name} uploaded successfully`,
                key: "upload-success",
                duration: 0.8
            });
            onSuccess && onSuccess(response, file)

        }).catch((error) => {
            onError && onError(error)
        })
    }
    else {
        message.success({
            content: `${(file as any)?.name} uploaded successfully`,
            key: "upload-success",
            duration: 0.8
        });

        onSuccess && onSuccess({}, file)
    }
}