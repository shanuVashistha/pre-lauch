import { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import ImageTool from '@editorjs/image';
import Embed from '@editorjs/embed';
import { CustomList } from "@/pages/admin/blog/components/CustomList";
import { CustomHeader } from "@/pages/admin/blog/components/CustomHeading";

const EditorComponent = () => {
    const editorRef = useRef(null);

    useEffect(() => {
        if (editorRef.current) {
            new EditorJS({
                holder: editorRef.current,
                autofocus: true,
                tools: {
                    header: {
                        class: CustomHeader,
                        shortcut: 'CMD+SHIFT+H'
                    },
                    list: List,
                    paragraph: Paragraph,
                    image: {
                        class: ImageTool,
                        config: {
                            endpoints: {
                                byFile: '/api/uploadFile',
                                byUrl: '/api/uploadFileByUrl',
                            }
                        }
                    },
                    embed: Embed,
                    customList: CustomList,
                },
                data: {}
            });
        }
    }, []);

    return <div id="editorjs" ref={editorRef}/>;
};

export default EditorComponent;
