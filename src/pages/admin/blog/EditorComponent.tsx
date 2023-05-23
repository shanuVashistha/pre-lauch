import React from 'react';
import debounce from 'lodash/debounce';

interface EditorComponentProps {
    setEditorData: (data: any) => void;
    body: any;
}

class EditorComponent extends React.Component<EditorComponentProps> {
    editorInstance: any;
    editorContainerRef: any;
    debouncedUpdateEditorData: any;

    constructor (props: any) {
        super(props);
        this.editorInstance = null;
        this.editorContainerRef = React.createRef();
        this.debouncedUpdateEditorData = debounce(this.updateEditorData, 500);
    }

    componentDidMount () {
        if (typeof window === 'undefined') {
            return; // Exit early if running on server-side
        }

        import('@editorjs/editorjs').then((EditorJS) => {
            import('@editorjs/list').then((List) => {
                import('@editorjs/paragraph').then((Paragraph) => {
                    import('@editorjs/embed').then((Embed) => {
                        import('@editorjs/header').then((Header) => {
                            const { setEditorData, body } = this.props;
                            const parsedBody = typeof body === 'string' ? JSON.parse(body) : body;

                            if (this.editorContainerRef.current) {
                                this.editorContainerRef.current.innerHTML = '';
                            }

                            this.editorInstance = new EditorJS.default({
                                holder: this.editorContainerRef.current,
                                autofocus: true,
                                tools: {
                                    header: Header.default,
                                    list: List.default,
                                    paragraph: Paragraph.default,
                                    embed: Embed.default,
                                },
                                data: parsedBody,
                                onChange: this.handleEditorChange, // Update to use the debounced function
                            });
                        });
                    });
                });
            });
        });
    }

    componentDidUpdate (prevProps: any) {
        if (prevProps.body !== this.props.body && this.editorInstance) {
            const parsedBody = typeof this.props.body === 'string' ? JSON.parse(this.props.body) : this.props.body;
            this.editorInstance.render(parsedBody);
        }
    }

    componentWillUnmount () {
        if (this.editorInstance) {
            this.editorInstance.clear();
            this.editorInstance = null;
        }
        this.debouncedUpdateEditorData.cancel();
    }

    updateEditorData = () => {
        const { setEditorData } = this.props;
        this.editorInstance.saver.save().then((outputData: any) => {
            setEditorData(outputData);
        });
        console.log('Saving...')
    };

    handleEditorChange = () => {
        this.debouncedUpdateEditorData(); // Call the debounced function instead of updating the editor data directly
    };

    render () {
        return <div id="editorjs" className="custom-blog" ref={this.editorContainerRef}/>;
    }
}

export default EditorComponent;
