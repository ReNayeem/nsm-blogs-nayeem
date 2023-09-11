import { ModeToggle } from '@/components/global/ModeToggle';
import './../css/page.css';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <div className='flex items-center gap-2'>
        Click the button to change the theme
        <ModeToggle />
      </div>

      {/* Example of using ShadcnUI */}
      <Button variant='destructive'>Click me</Button>
      <button className="border-solid border-2 border-black pb-1 px-2 rounded hover:bg-black hover:text-white ease-in-out duration-300 hover:dark:text-black hover:dark:bg-white dark:border-white">Save Changes</button>
    </div>
  );
}
