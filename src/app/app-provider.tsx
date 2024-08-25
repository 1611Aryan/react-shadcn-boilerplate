import ThemeProvider from '@/providers/theme-provider';

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppProvider;
