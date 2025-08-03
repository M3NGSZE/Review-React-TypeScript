import { Button } from "flowbite-react";
import { Card } from "flowbite-react";
import { Badge } from "flowbite-react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl border mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Flowbite React Demo
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Welcome to Flowbite React!
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              This is a demo showing that Flowbite React is properly configured
              in your project.
            </p>
            <div className="flex gap-2 mt-4">
              <Button>Get started</Button>
              <Button color="gray">Learn more</Button>
            </div>
          </Card>

          <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Components Available
            </h5>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge color="info">Buttons</Badge>
              <Badge color="success">Cards</Badge>
              <Badge color="warning">Badges</Badge>
              <Badge color="purple">And more!</Badge>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Flowbite React provides 100+ components built with React and
              Tailwind CSS.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
