import { Link } from "react-router-dom";

export function Dashboard() {
    return (
        <div>
            <p>this is Dashboard</p>
            <Link className='underline' to='/products'>Go to Products</Link>
        </div>
    )
}
