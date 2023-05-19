import React, { useEffect, useRef } from 'react';
import EditorJS, { API, OutputData } from '@editorjs/editorjs';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import Embed from '@editorjs/embed';
import Header from '@editorjs/header';

interface EditorInterface {
    setEditorData: (data: OutputData) => void;
    body: any;
}

const EditorComponent: React.FC<EditorInterface> = (props) => {
    const editorInstance = useRef<EditorJS | null>(null);
    const editorContainerRef = useRef<HTMLDivElement>(null);
    const { setEditorData, body } = props;

    useEffect(() => {
        const parsedBody = typeof body === 'string' ? JSON.parse(body) : body;
        
        if (editorContainerRef.current) {
            editorContainerRef.current.innerHTML = '';
        }

        if (editorContainerRef.current) {
            editorInstance.current = new EditorJS({
                holder: editorContainerRef.current,
                autofocus: true,
                tools: {
                    header: Header,
                    list: List,
                    paragraph: Paragraph,
                    embed: Embed
                },
                data: parsedBody,
                onChange (api: API, event: CustomEvent) {
                    api.saver.save().then((outputData) => {
                        setEditorData(outputData);
                    })
                },
            });
        }

        return () => {
            if (editorInstance.current) {
                editorInstance.current = null;
            }
        };
    }, [body]);

    return <div id="editorjs" className="custom-blog" ref={editorContainerRef}/>;
};

export default EditorComponent;
