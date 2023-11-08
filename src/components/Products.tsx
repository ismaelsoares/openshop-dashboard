import { Link } from "react-router-dom";

export function Products() {
    return (
        <div>
            <p>this is products</p>
            <Link to='/' className='underline'>Go to Dashboard</Link>
        </div>
    )
}