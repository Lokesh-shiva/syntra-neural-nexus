import React from 'react';
import { Button } from './ui/button';

interface SimulationControlsProps {
  isSimulating: boolean;
  isComplete: boolean;
  startSimulation: () => void;
  resetSimulation: () => void;
}

const SimulationControls: React.FC<SimulationControlsProps> = ({
  isSimulating,
  isComplete,
  startSimulation,
  resetSimulation
}: SimulationControlsProps) => {
  return (
    <div className="simulation-controls">
      {!isSimulating && !isComplete && (
        <Button
          onClick={startSimulation}
          className="btn btn-ripple"
          variant="default"
          size="lg"
        >
          Start Simulation
        </Button>
      )}
      {isComplete && (
        <Button
          onClick={resetSimulation}
          className="btn btn-ripple"
          variant="outline"
          size="lg"
        >
          Reset Simulation
        </Button>
      )}
    </div>
  );
};

export default SimulationControls; 