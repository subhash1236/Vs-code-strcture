/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

// eslint-disable-next-line react/prop-types
const Folder = ({files}) => {
    const [expand, setExpand] = useState(false);
  return (
    <div>
        <div onClick={()=>setExpand(!expand)}>
            {
                files.isFolder ? (
                    <button className={expand ? 'expand' :''}>
                        {">"}
                    </button>
                ):null
            }
            {files.name}
        </div>
        {
            files.isFolder && expand &&
            files.children.map((exp)=>(
                <div key={exp} style={{padding:"20px"}}>
                    <Folder files={exp}/>

                </div>
            ))
        }
    </div>
  )
}

export default Folder