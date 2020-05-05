import React from 'react'
import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { faToggleOff } from '@fortawesome/free-solid-svg-icons'



function DoneImg(props) {


    if (props.done) {
        return (
            <FontAwesomeIcon  size="2x" icon={faToggleOn} />
        )
    }
    else {
        return (
            <FontAwesomeIcon size="2x" icon={faToggleOff} />
        )
    }
}

function ListItem(props) {
    return (<li>
                    <Card className={props.item.done ? "done item" : "item"}>
                        {props.item.text}
                        <div>
                            <button onClick={() => { props.onDone(props.item) }}> <DoneImg done={props.item.done} /> </button>
                            <button onClick={() => { props.onItemDeleted(props.item) }}><FontAwesomeIcon size="2x" icon={faTrashAlt} /></button>
                        </div>
                    </Card>
                </li>)
  
}


export default ListItem;