'use client';

/**
* Error component
* 
* Renders error state when something goes wrong.
* 
* Parameters:
* - reset: Function to reset state and try again
* 
* Returns:
* - Heading with error message
* - Button to trigger reset function on click
* 
* Styled with Tailwind CSS classes.
*/
export default function Error({ reset }: { reset: () => void }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        type='button'
        className='mr-2 mt-5 mb-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 
        focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
