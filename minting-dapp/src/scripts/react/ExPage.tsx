import {Link} from 'react-router-dom';

export default function ExPage() {
  return (
    <div>
      <h1>This is an example page</h1>
      <Link to='/'>Go to Main Page</Link>
    </div>
  );
}