import { Canvas, useThree, useFrame } from '@react-three/fiber'
import React, { useState, useRef, useEffect } from 'react'
import { Model } from './Model'
import ThreeDNavbar from './3d-Navbar'
import ApplianceModal from './ApplianceModal'
import applianceData from '../Data/Appliances.json'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

 const cameraPositions = {
  'Idle': [8, 2, 12],
'Fridge': [6, 2.5, 2],
  'Chimney': [4, 0, 3],
  'StoveOven': [6, 2, 3],
  'WashM': [-2, 2, 4],
  'Vaccum': [8, 2, 12]
}

const navMap = {
  'Idle': 'BeSpoke Appliances',
  'Fridge': 'Fridge',
  'Chimney': 'Hood',
  'StoveOven': 'Microwave Oven',
  'WashM': 'Washing Machine',
  'Vaccum': 'Jet Bot AI',
}

// Camera controller
function CameraZoomController({ selectedKey }) {
  const { camera } = useThree()
  const targetRef = useRef(camera.position.clone())

  useEffect(() => {
    if (cameraPositions[selectedKey]) {
      targetRef.current = new THREE.Vector3(...cameraPositions[selectedKey])
    }
  }, [selectedKey])

  useFrame(() => {
    camera.position.lerp(targetRef.current, 0.09)
    camera.lookAt(0, 1, 0)
    camera.updateProjectionMatrix()
  })

  return null
}

const ThreeDScene = () => {
  const [selectedAnimation, setSelectedAnimation] = useState(['Idle'])
  const [selectedAppliance, setSelectedAppliance] = useState(
    applianceData.appliances.find(a => a.title === "BeSpoke Appliances") || null
  )

  const handleSelect = (animationName) => {
    setSelectedAnimation(animationName)

    const label = Array.isArray(animationName) ? animationName[0] : animationName
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

  return (
    <div>
      <ThreeDNavbar onSelect={handleSelect} />
      <Canvas
        style={{ height: "100vh", width: "100vw" }}
        camera={{ position: cameraPositions.Idle, fov: 50 }}
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
        <CameraZoomController selectedKey={cameraKey} />
      </Canvas>

      {selectedAppliance &&
        <ApplianceModal
          data={selectedAppliance}
          onClose={() => setSelectedAppliance(null)}
        />
      }
    </div>
  )
}

export default ThreeDScene
