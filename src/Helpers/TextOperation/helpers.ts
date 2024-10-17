export const copyToClipboard = (string:string, onSuccess?:()=>void, onError?:(error:any)=>void) => {
    if (navigator?.clipboard && navigator?.clipboard.writeText) {
        navigator.clipboard
            .writeText(string)
            .then(() => {
                if (onSuccess) {
                    onSuccess();
                }
            })
            .catch((error) => {
                if (onError) {
                    onError(error);
                }
            });
    } else {
        // for old browsers
        const textarea = document?.createElement('textarea');
        textarea.value = string;
        textarea.style.position = 'fixed';
        document.body.appendChild(textarea);
        textarea?.focus();
        textarea?.select();

        try {
            const result = document.execCommand('copy');
            if (result) {
                if (onSuccess) {
                    onSuccess();
                }
            } else {
                throw new Error('Copy to clipboard failed');
            }
        } catch (error) {
            if (onError) {
                onError(error);
            }
        } finally {
            document.body.removeChild(textarea);
        }
    }
};