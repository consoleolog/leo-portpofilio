import {useCallback} from 'react';

export const useImageUpload = () => {
    return useCallback((blob: Blob, callback: any) => {
        console.log(blob)
        console.log(callback)
        // const formData = new FormData();
        // formData.append('image', blob);
        //
        // fetch('/images', {
        //     method: 'POST',
        //     body: formData,
        // })
        //     .then((response) => {
        //         if (!response.ok) {
        //             throw new Error(response.statusText);
        //         }
        //         return response.json();
        //     })
        //     .then((data) => {
        //         const imageUrl = data.url;
        //         callback(imageUrl, 'alt text');
        //     })
        //     .catch((error) => {
        //         console.error('Image upload failed:', error);
        //     });
    }, []);
};
