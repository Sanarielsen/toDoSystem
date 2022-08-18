import { Trash } from 'phosphor-react'

export function Task() {

    return (
        <>
        <div>
            <input type="checkbox" id="scales" name="scales"
            checked/>
            <label>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
        </div>
        <div>
            <Trash size={20}/>
        </div>
        </>
    )
}