import React, {useState, useEffect} from 'react'
import grapesjs from "grapesjs"
import GpresetWebpage from "grapesjs-preset-webpage"


function reactComponent({title}) {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}


export default function Grapesjs() {
    const [editor, setEditor] = useState(null);
    const [content, setContent] = useState('');

    useEffect(() => {
        const ed = grapesjs.init({
            container: "#editor",
            plugins: [GpresetWebpage],
            pluginsOpts: {
                GpresetWebpage : {}
            }
        });
        setEditor(ed);

    }, [content])

    const createMarkup = () => {
        return { __html : content }
    }

    return (
        <>
            <div id="editor" />
            <div dangerouslySetInnerHTML={createMarkup()} />
        </>
    )
}
