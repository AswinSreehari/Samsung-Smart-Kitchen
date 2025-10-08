import { Canvas, useThree, useFrame } from '@react-three/fiber'
import React, { useState, useRef, useEffect } from 'react'
import { Model } from './Model'
import ThreeDNavbar from './3d-Navbar'
import ApplianceModal from './ApplianceModal'
import applianceData from '../Data/Appliances.json'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

// Responsive camera positions
const getCameraPositions = (isSmall, isMedium) => ({
  'Idle': isSmall ? [10, 3, 16] : isMedium ? [9, 2.5, 13] : [8, 2, 12],
  'Fridge': isSmall ? [7, 2.5, 4.5] : isMedium ? [6, 2.5, 3] : [6, 2.5, 2],
  'Chimney': isSmall ? [4, 1, 5] : isMedium ? [4, 1, 4] : [4, 0, 3],
  'StoveOven': isSmall ? [6, 2, 4.5] : isMedium ? [6, 2, 3.5] : [6, 2, 3],
  'WashM': isSmall ? [-2, 2, 6] : isMedium ? [-2, 2, 5] : [-2, 2, 4],
  'Vaccum': isSmall ? [8, 2, 16] : isMedium ? [8, 2, 13] : [8, 2, 12]
});

// Hook to detect device size
function useResponsive() {
  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);
  useEffect(() => {
    const handleResize = () => setWindowSize([window.innerWidth, window.innerHeight]);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [w] = windowSize;
  return {
    isSmall: w < 700,
    isMedium: w < 1024 && w >= 700
  };
}

// Camera controller
function CameraZoomController({ selectedKey, cameraPositions }) {
  const { camera } = useThree()
  const targetRef = useRef(camera.position.clone())
  useEffect(() => {
    if (cameraPositions[selectedKey]) {
      targetRef.current = new THREE.Vector3(...cameraPositions[selectedKey])
    }
  }, [selectedKey, cameraPositions])
  useFrame(() => {
    camera.position.lerp(targetRef.current, 0.09)
    camera.lookAt(0, 1, 0)
    camera.updateProjectionMatrix()
  })
  return null
}

const ThreeDScene = () => {
  const { isSmall, isMedium } = useResponsive()
  const cameraPositions = getCameraPositions(isSmall, isMedium)

  const [selectedAnimation, setSelectedAnimation] = useState(['Idle'])
  const [selectedAppliance, setSelectedAppliance] = useState(
    applianceData.appliances.find(a => a.title === "BeSpoke Appliances") || null
  )

  const handleSelect = (animationName) => {
    setSelectedAnimation(animationName)
    const label = Array.isArray(animationName) ? animationName[0] : animationName
    const navMap = {
      'Idle': 'BeSpoke Appliances',
      'Fridge': 'Fridge',
      'Chimney': 'Hood',
      'StoveOven': 'Microwave Oven',
      'WashM': 'Washing Machine',
      'Vaccum': 'Jet Bot AI',
    }
    const mapped = navMap[label]
    if (mapped) {
      const appliance = applianceData.appliances.find(a => a.title === mapped)
      setSelectedAppliance(appliance || null)
    } else {
      setSelectedAppliance(null)
    }
  }

  const cameraKey = Array.isArray(selectedAnimation)
    ? selectedAnimation[0]
    : selectedAnimation || 'Idle'

  // Tailwind widths for responsive canvas
  const canvasClassName = isSmall
    ? "w-full h-[56vw] min-h-[350px] max-h-[75vh]"  // smaller height on phones
    : isMedium
    ? "w-full h-[60vw] min-h-[400px] max-h-[80vh]"
    : "w-full h-[80vh] min-h-[500px] max-h-[85vh]"

  return (
    <div className={isSmall ? "pt-2" : "pt-8"}>
      {/* Responsive Navbar: stack on mobile, row on larger screens */}
      <div className={isSmall ? "mb-2" : "mb-6"}>
        <ThreeDNavbar onSelect={handleSelect} className={isSmall ? "flex-col gap-1" : "flex-row gap-8"} />
      </div>
      <div className={canvasClassName}>
        <Canvas
          style={{ width: '100%', height: '100%' }}
          camera={{ position: cameraPositions.Idle, fov: isSmall ? 70 : 50 }}
        >
          <OrbitControls
            enableDamping
            dampingFactor={0.05}
            minDistance={0}
            maxDistance={25}
            maxPolarAngle={Math.PI / 2}
          />
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 10, 7]} intensity={1} castShadow />
          <Model selectedAnimation={selectedAnimation} />
          <CameraZoomController selectedKey={cameraKey} cameraPositions={cameraPositions} />
        </Canvas>
      </div>
      {selectedAppliance &&
        <ApplianceModal
          data={selectedAppliance}
          onClose={() => setSelectedAppliance(null)}
          // Pass in isSmall or isMedium for responsive modal styling if needed
        />
      }
    </div>
  )
}

export default ThreeDScene
