import ModeToggle from '@/components/mode-toggle';
import AppProvider from './app-provider';

const Component = () => {
  return (
    <div className="bg-background text-foreground text-xl flex flex-col items-center justify-center h-screen">
      <div className="flex items-center gap-2 justify-between">
        <span>Theme</span> <ModeToggle />
      </div>
      <h1>SHADCN + TAILWIND + REACT BOILERPLATE</h1>
    </div>
  );
};

const App = () => {
  return (
    <AppProvider>
      <Component />
    </AppProvider>
  );
};

export default App;
