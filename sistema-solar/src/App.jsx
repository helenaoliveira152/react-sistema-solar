import {Canvas} from '@react-three/fiber';

function App(){
  return (
    <Canvas>
      <ambientLight intensity={0.3}/>
      <directionalLight position={[5, 5, 5]} intensity={1.5}/>
     <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="orange" />
     </mesh>
    </Canvas>
  );
}

export default App;