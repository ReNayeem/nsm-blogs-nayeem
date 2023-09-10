import ThemeToggle from '@/components/global/ThemeToggle';
import './../css/page.css';

export default function Home() {
  return (
    <div>
      <div className='flex items-center gap-2'>
        Click the button to change the theme
        <ThemeToggle />
      </div>

      <button className="border-solid border-2 border-black pb-1 px-2 rounded hover:bg-black hover:text-white ease-in-out duration-300">Save Changes</button>
      <button className="btn-testing">Save Changes</button>
    </div>
  );
}
