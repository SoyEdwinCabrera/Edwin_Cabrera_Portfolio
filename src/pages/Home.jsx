import {Suspense, useState, useEffect, useRef} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import Island from '../models/Island'; 
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';

import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons';

// Componente para el mensaje de instrucción
const SwipeInstruction = ({ isVisible, isRotating }) => {
  // Determinar el mensaje según el tipo de dispositivo y la acción
  const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  
  const message = isTouchDevice 
    ? "Swipe Right to Explore" 
    : "Click and Drag to Explore";
  
  const icon = isTouchDevice
    ? (
      // Icono de deslizar para móviles
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    ) 
    : (
      // Icono de arrastrar para desktop
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    );
  
  if (!isVisible) return null;
  
  return (
    <div className={`instruction absolute bottom-12 left-0 right-0 flex items-center justify-center z-20 pointer-events-none transition-opacity duration-500 ${isRotating ? 'opacity-0' : 'opacity-100 animate-pulse'}`}>
      <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-full flex items-center">
        {icon}
        <span>{message}</span>
      </div>
    </div>
  );
};

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.2;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [showInstruction, setShowInstruction] = useState(true);
  const instructionTimerRef = useRef(null);
  const lastInteractionRef = useRef(Date.now());
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  
  useEffect(() =>{
    if(isPlayingMusic){
      audioRef.current.play();
    }
    
    return ()=>{
      audioRef.current.pause();
    }
  }, [isPlayingMusic])

  // Función para gestionar la visualización del mensaje
  const handleInstructionVisibility = () => {
    // Limpiar cualquier temporizador existente
    if (instructionTimerRef.current) {
      clearTimeout(instructionTimerRef.current);
    }
    
    if (isRotating) {
      // Si está rotando, ocultar inmediatamente
      setShowInstruction(false);
      lastInteractionRef.current = Date.now();
    } else {
      // Si no está rotando, mostrar el mensaje después de 2 segundos de inactividad
      instructionTimerRef.current = setTimeout(() => {
        const timeSinceLastInteraction = Date.now() - lastInteractionRef.current;
        if (timeSinceLastInteraction > 2000) { // 2 segundos de inactividad
          setShowInstruction(true);
          
          // Configurar temporizador para ocultar después de 5 segundos
          instructionTimerRef.current = setTimeout(() => {
            setShowInstruction(false);
          }, 5000);
        }
      }, 2000);
    }
  };

  // Efecto para manejar cambios en el estado de rotación
  useEffect(() => {
    handleInstructionVisibility();
  }, [isRotating]);
  
  // Efecto para la configuración inicial
  useEffect(() => {
    // Mostrar inicialmente, luego ocultar después de 5 segundos
    setShowInstruction(true);
    
    instructionTimerRef.current = setTimeout(() => {
      if (!isRotating) {
        setShowInstruction(false);
      }
    }, 5000);
    
    // Limpiar al desmontar
    return () => {
      if (instructionTimerRef.current) {
        clearTimeout(instructionTimerRef.current);
      }
    };
  }, []);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    }
    else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    }
    else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      
      {/* Mensaje de instrucción */}
      <SwipeInstruction isVisible={showInstruction} isRotating={isRotating} />
      
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={0.4} />
                
          <Bird />
                
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img 
        src={!isPlayingMusic? soundoff: soundon}
        alt='sound'
        className='w-10 h-10 cursor-pointer object-contain'
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
};

export default Home;