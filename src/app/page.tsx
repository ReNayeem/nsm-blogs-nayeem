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
    </div>
  );
}
