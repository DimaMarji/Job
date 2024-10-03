import {UploadProps} from "antd";
import {UploadRequestOption as RcCustomRequestOptions} from "rc-upload/lib/interface";

export interface IMediaUploaderProps extends UploadProps {

    onProgress?: (event: { percent: number }) => void
    onError?: (event: Error, body?: Object) => void
    onSuccess?: (body: Object, file?: any) => void
    getController?: (abortController: IAbortController) => void
    fileSizeLimit?: number
    onSizeExceed?: () => void


}

export interface IRcCustomRequestOptions extends RcCustomRequestOptions {

    getController?: (abortController: IAbortController) => void
    onSuccess?: (response: any, file: any) => void;
}


export interface IAbortController {
    controller: AbortController,
    file: any
}
