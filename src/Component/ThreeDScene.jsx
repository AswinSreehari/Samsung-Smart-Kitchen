import { Canvas } from '@react-three/fiber'
import React, { useState } from 'react'
import { Model } from './Model'
import ThreeDNavbar from './3d-Navbar'
import ApplianceModal from './ApplianceModal'
import applianceData from '../Data/Appliances.json'
import { OrbitControls, Environment } from '@react-three/drei'

const navMap = {
  'Idle': 'BeSpoke Appliances',
  'Fridge': 'Fridge',
  'Chimney': 'Hood',
  'StoveOven': 'Microwave Oven',
  'WashM': 'Washing Machine',
  'Vaccum': 'Jet Bot AI',
}

const ThreeDScene = () => {
  const [selectedAnimation, setSelectedAnimation] = useState(null)
  const [selectedAppliance, setSelectedAppliance] = useState(
      applianceData.appliances.find(a => a.title === "BeSpoke Appliances") || null
  )

  const handleSelect = (animationName) => {
    setSelectedAnimation(animationName)

    // Find appliance based on the nav selection
    // animationName may be an array or string, normalize accordingly
    const label = Array.isArray(animationName) ? animationName[0] : animationName
    const mapped = navMap[label]
    if (mapped) {
      const appliance = applianceData.appliances.find(a => a.title === mapped)
      setSelectedAppliance(appliance || null)
    } else {
      setSelectedAppliance(null)
    }
  }

  return (
    <div>
      <ThreeDNavbar onSelect={handleSelect} />
      <Canvas 
        style={{
          height: "100vh",
          width: "100vw",
        }}
        camera={{ 
          position: [8, 2, 12],
          fov: 50
        }}
      >
        <OrbitControls 
          enableDamping
          dampingFactor={0.05}
          minDistance={0 }
          maxDistance={25}
          maxPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 7]} intensity={1} castShadow />
        {/* <Environment files="/studio1.hdr" background /> */}
        <Model selectedAnimation={selectedAnimation} />
      </Canvas>

      {/* Appliance modal, shown only if appliance selected */}
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
