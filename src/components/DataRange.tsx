import { useState } from "react";
import { Link } from "react-router-dom"

type Props = {
    range: string,
    active: boolean,
    handleRangeClick: any
}

export const DataRange = ({ range, active, handleRangeClick }: Props) => {
    return <li >
        <Link onClick={handleRangeClick} className={`${active ? 'bg-[#913fe2]' : ''} p-0.5 pl-7 pr-7 rounded`} to='/'>{range}</Link>
    </li>
}