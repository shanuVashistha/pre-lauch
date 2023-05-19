import React, { useEffect, useRef } from 'react';

interface EditorInterface {
    setEditorData: (data: any) => void;
    body: any;
}

const EditorComponent: React.FC<EditorInterface> = (props) => {
    const editorInstance = useRef<any | null>(null);
    const editorContainerRef = useRef<any>(null);
    const { setEditorData, body } = props;

    useEffect(() => {
        if (typeof window === 'undefined') {
            return; // Exit early if running on server-side
        }

        import('@editorjs/editorjs').then((EditorJS) => {
            import('@editorjs/list').then((List) => {
                import('@editorjs/paragraph').then((Paragraph) => {
                    import('@editorjs/embed').then((Embed) => {
                        import('@editorjs/header').then((Header) => {
                            const parsedBody = typeof body === 'string' ? JSON.parse(body) : body;

                            if (editorContainerRef.current) {
                                editorContainerRef.current.innerHTML = '';
                            }

                            editorInstance.current = new EditorJS.default({
                                holder: editorContainerRef.current,
                                autofocus: true,
                                tools: {
                                    header: Header.default,
                                    list: List.default,
                                    paragraph: Paragraph.default,
                                    embed: Embed.default,
                                },
                                data: parsedBody,
                                onChange (api: any, event: CustomEvent) {
                                    api.saver.save().then((outputData: any) => {
                                        setEditorData(outputData);
                                    });
                                },
                            });
                        });
                    });
                });
            });
        });

        return () => {
            if (editorInstance.current) {
                editorInstance.current.destroy();
            }
        };
    }, [body, setEditorData]);

    return <div id="editorjs" className="custom-blog" ref={editorContainerRef}/>;
};

export default EditorComponent;
