import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import React from 'react'

//@ts-ignore
export default props => {
    return (
        <NodeViewWrapper as='span'>
            <NodeViewContent className="text-gray-300 select-none !inline" as='span' >
                {props.node.attrs.content}
            </NodeViewContent>
        </NodeViewWrapper>
    )
}