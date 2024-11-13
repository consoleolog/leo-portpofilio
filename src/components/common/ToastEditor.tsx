"use client";

import dynamic from 'next/dynamic';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { useRef } from 'react';
import { useImageUpload } from '@/hooks/useImageUpload';

const Editor = dynamic(() => import('@toast-ui/react-editor').then((mod) => mod.Editor), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});


export default function ToastEditor() {
    const editorRef = useRef(null);
    const addImageBlobHook = useImageUpload();

    const toolbarItems = [
        ['heading', 'bold', 'italic', 'strike'],
        ['hr'],
        ['ul', 'ol', 'task'],
        ['table', 'link'],
        ['image'],
        ['code'],
    ];

    return (
        <div style={{ width: '800px' }}>
            <Editor
                ref={editorRef}
                initialValue=""
                initialEditType="markdown"
                previewStyle="vertical"
                hideModeSwitch={true}
                height="500px"
                theme={"dark"}
                usageStatistics={false}
                toolbarItems={toolbarItems}
                useCommandShortcut={true}
                previewHighlight={false}
                hooks={{
                    addImageBlobHook,
                }}
                language={"ko-KR"}
            />
        </div>
    );
}