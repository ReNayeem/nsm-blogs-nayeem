
import './../css/page.css';

export default function Home() {
  return (
    <div>
      <div className='flex items-center gap-2'>
        Click the button to change the theme
      </div>
      <button className="btn-testing">Save Changes</button>
    </div>
  );
}
