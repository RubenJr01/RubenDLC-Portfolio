import { ThemeToggle } from "@/components/ThemeToggle.jsx";
import { StartBackground } from "@/components/StartBackground.jsx";
import { NavigationBar } from "@/components/NavigationBar.jsx";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StartBackground />
      {/* Navigation Bar */}
      <NavigationBar />
      {/* Main Content */}

      {/* Footer */}
    </div>
  );
};
