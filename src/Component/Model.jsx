import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export function Model({selectedAnimation, ...props}) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/modelB.glb')
  const { actions, mixer  } = useAnimations(animations, group)
    const [rotationY, setRotationY] = useState(Math.PI / 3);  

  const startY = Math.PI;        // or your desired start angle
 
useEffect(() => {
  if (group.current) {
    group.current.rotation.y = startY;  // initial side view angle
  }
}, []);

const targetY = -0.98;  

useFrame(() => {
  if (!group.current) return;
  const currentY = group.current.rotation.y;
  if (Math.abs(currentY - targetY) > 0.01) {
    group.current.rotation.y += (targetY - currentY) * 0.1;
  } else {
    group.current.rotation.y = targetY;
  }
});


// useEffect(() => {
//   Object.values(actions).forEach(action => {
//     action.stop();
//     action.reset();
//     action.setLoop(THREE.LoopOnce);
//     action.clampWhenFinished = true;
//   });

//   if (selectedAnimation && actions[selectedAnimation]) {
//     actions[selectedAnimation].reset().play();
//   }
// }, [selectedAnimation, actions]);

useEffect(() => {
  Object.values(actions).forEach(action => {
    action.stop();
    action.reset();
    action.setLoop(THREE.LoopOnce);
    action.clampWhenFinished = true;
  });

  if (Array.isArray(selectedAnimation)) {
    let currentIndex = 0;

    const playNext = () => {
      if (currentIndex >= selectedAnimation.length) return;
      const animName = selectedAnimation[currentIndex];
      const action = actions[animName];
      if (!action) {
        currentIndex++;
        playNext();
        return;
      }

      action.reset();
      action.play();

      const onFinished = (event) => {
        if (event.action === action) {
          mixer.removeEventListener('finished', onFinished);
          currentIndex++;
          playNext();
        }
      };

      mixer.addEventListener('finished', onFinished);
    };

    playNext();

  } else if (typeof selectedAnimation === 'string' && actions[selectedAnimation]) {
    actions[selectedAnimation].reset().play();
  }
}, [selectedAnimation, actions, mixer]);
 
  const centerOffset = {
    x: -2,
    y: -1.25,
    z: 8.25
  }
 
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[centerOffset.x, centerOffset.y, centerOffset.z]}
      // rotation={[0, Math.PI / 2, 0]}
      scale={[2, 2, 2]} 
      >
        <group   name="Scene">
          <mesh
            name="Cube003"
            castShadow
            receiveShadow
            geometry={nodes.Cube003.geometry}
            material={nodes.Cube003.material}
            position={[0, 0, -1.5]}
          />
          <mesh
            name="Cube004"
            castShadow
            receiveShadow
            geometry={nodes.Cube004.geometry}
            material={materials.Black}
            position={[0, 0, -3]}
          />
          <mesh
            name="Cube005"
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={nodes.Cube005.material}
            position={[0, 0, -4]}
          />
          <mesh
            name="Cube006"
            castShadow
            receiveShadow
            geometry={nodes.Cube006.geometry}
            material={nodes.Cube006.material}
            position={[0, 2, -4]}
          />
          <mesh
            name="Cube007"
            castShadow
            receiveShadow
            geometry={nodes.Cube007.geometry}
            material={nodes.Cube007.material}
            position={[0, 2, -1.5]}
          />
          <mesh
            name="Cube008"
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={nodes.Cube008.material}
            position={[0, 2, -3]}
          />
          <group name="Cube001" position={[0, 0, -0.286]}>
            <mesh
              name="Cube010_2"
              castShadow
              receiveShadow
              geometry={nodes.Cube010_2.geometry}
              material={materials.Black}
            />
            <mesh
              name="Cube010_3"
              castShadow
              receiveShadow
              geometry={nodes.Cube010_3.geometry}
              material={materials['White.001']}
            />
            <mesh
              name="Cube010_4"
              castShadow
              receiveShadow
              geometry={nodes.Cube010_4.geometry}
              material={materials['GlassA.001']}
            />
            <group name="Cube032" position={[0, 0, -1.214]}>
              <mesh
                name="Cube001_2"
                castShadow
                receiveShadow
                geometry={nodes.Cube001_2.geometry}
                material={materials.Fridge}
              />
              <mesh
                name="Cube001_3"
                castShadow
                receiveShadow
                geometry={nodes.Cube001_3.geometry}
                material={materials['White.001']}
              />
              <mesh
                name="Cube001_4"
                castShadow
                receiveShadow
                geometry={nodes.Cube001_4.geometry}
                material={materials.Black}
              />
            </group>
            <group name="Cube033">
              <mesh
                name="Cube039_1"
                castShadow
                receiveShadow
                geometry={nodes.Cube039_1.geometry}
                material={materials.Fridge}
              />
              <mesh
                name="Cube039_2"
                castShadow
                receiveShadow
                geometry={nodes.Cube039_2.geometry}
                material={materials['White.001']}
              />
              <mesh
                name="Cube039_3"
                castShadow
                receiveShadow
                geometry={nodes.Cube039_3.geometry}
                material={materials.Black}
              />
            </group>
          </group>
          <mesh
            name="Cube002"
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={nodes.Cube002.material}
            position={[0, 2, 0]}
          />
          <mesh
            name="Cube009"
            castShadow
            receiveShadow
            geometry={nodes.Cube009.geometry}
            material={materials.Black}
            position={[0, 0, -7.493]}
          />
          <group name="Plane" position={[0, 0, -1.5]}>
            <mesh
              name="Plane002_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane002_1.geometry}
              material={materials.White}
            />
            <mesh
              name="Plane002_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane002_2.geometry}
              material={materials.paleGreen}
            />
          </group>
          <mesh
            name="Cube010"
            castShadow
            receiveShadow
            geometry={nodes.Cube010.geometry}
            material={nodes.Cube010.material}
            position={[0, 0, -5.993]}
          />
          <mesh
            name="Cube011"
            castShadow
            receiveShadow
            geometry={nodes.Cube011.geometry}
            material={nodes.Cube011.material}
            position={[0, 2, -5.5]}
          />
          <mesh
            name="Cube012"
            castShadow
            receiveShadow
            geometry={nodes.Cube012.geometry}
            material={nodes.Cube012.material}
            position={[0, 2, -7]}
          />
          <mesh
            name="Cube013"
            castShadow
            receiveShadow
            geometry={nodes.Cube013.geometry}
            material={materials.White_02}
            position={[0, 0, -4.875]}
          />
          <mesh
            name="Cube014"
            castShadow
            receiveShadow
            geometry={nodes.Cube014.geometry}
            material={materials.Black}
            position={[0, 2, -3]}
          />
          <mesh
            name="Cube015"
            castShadow
            receiveShadow
            geometry={nodes.Cube015.geometry}
            material={materials.White}
            position={[0.007, 2.5, -4.75]}
          />
          <mesh
            name="Cube016"
            castShadow
            receiveShadow
            geometry={nodes.Cube016.geometry}
            material={materials.paleGreen}
            position={[0.007, 2.5, -6.249]}
          />
          <mesh
            name="Cube017"
            castShadow
            receiveShadow
            geometry={nodes.Cube017.geometry}
            material={materials.White}
            position={[0.007, 2.5, -7.752]}
          />
          <mesh
            name="Cube018"
            castShadow
            receiveShadow
            geometry={nodes.Cube018.geometry}
            material={materials.White}
            position={[0.007, 2.5, -2.25]}
          />
          <mesh
            name="Cube019"
            castShadow
            receiveShadow
            geometry={nodes.Cube019.geometry}
            material={materials.paleGreen}
            position={[0.007, 2.5, -0.754]}
          />
          <mesh
            name="Cube020"
            castShadow
            receiveShadow
            geometry={nodes.Cube020.geometry}
            material={materials.White_02}
            position={[-0.5, 1.017, -2.25]}
          />
          <mesh
            name="Cube021"
            castShadow
            receiveShadow
            geometry={nodes.Cube021.geometry}
            material={materials.White_02}
            position={[-0.5, 1.017, -4.75]}
          />
          <mesh
            name="Cube022"
            castShadow
            receiveShadow
            geometry={nodes.Cube022.geometry}
            material={materials.White_02}
            position={[-0.5, 1.017, -6.742]}
          />
          <mesh
            name="Cube023"
            castShadow
            receiveShadow
            geometry={nodes.Cube023.geometry}
            material={materials.paleGreen}
            position={[0.007, 0.5, -2.25]}
          />
          <mesh
            name="Cube024"
            castShadow
            receiveShadow
            geometry={nodes.Cube024.geometry}
            material={materials.paleGreen}
            position={[0.007, 0.5, -4.75]}
          />
          <mesh
            name="Cube025"
            castShadow
            receiveShadow
            geometry={nodes.Cube025.geometry}
            material={materials.White_02}
            position={[0.007, 0.819, -6.058]}
          />
          <mesh
            name="Cube026"
            castShadow
            receiveShadow
            geometry={nodes.Cube026.geometry}
            material={materials.White_02}
            position={[0.007, 0.5, -6.75]}
          />
          <mesh
            name="Cube027"
            castShadow
            receiveShadow
            geometry={nodes.Cube027.geometry}
            material={materials.paleGreen}
            position={[0.007, 2.5, -3.322]}
          />
          <mesh
            name="Plane001"
            castShadow
            receiveShadow
            geometry={nodes.Plane001.geometry}
            material={materials.Marble_01}
            position={[0, 0, -1.5]}
          />
          <mesh
            name="Plane002"
            castShadow
            receiveShadow
            geometry={nodes.Plane002.geometry}
            material={materials.Marble}
            position={[0, 0, -1.5]}
          />
          <mesh
            name="Plane003"
            castShadow
            receiveShadow
            geometry={nodes.Plane003.geometry}
            material={materials.White}
            position={[0, 0, -1.5]}
          />
          <mesh
            name="Plane004"
            castShadow
            receiveShadow
            geometry={nodes.Plane004.geometry}
            material={materials.paleGreen}
            position={[0, 0, -1.5]}
          />
          <mesh
            name="Plane005"
            castShadow
            receiveShadow
            geometry={nodes.Plane005.geometry}
            material={materials.GlassA}
            position={[1.586, 1.638, 0.055]}
          />
          <mesh
            name="Cube028"
            castShadow
            receiveShadow
            geometry={nodes.Cube028.geometry}
            material={materials['Material.001']}
            position={[0.007, 0.5, -6.75]}
          />
          <mesh
            name="Cube029"
            castShadow
            receiveShadow
            geometry={nodes.Cube029.geometry}
            material={materials['Material.017']}
            position={[0, 0, -4.875]}
          />
          <mesh
            name="Cube030"
            castShadow
            receiveShadow
            geometry={nodes.Cube030.geometry}
            material={materials.White_02}
            position={[0.007, 0.45, -5.869]}
          />
          <group name="Cube031" position={[2.451, 0, -8.168]} scale={0.696}>
            <mesh
              name="Cube035_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube035_1.geometry}
              material={materials.White_01}
            />
            <mesh
              name="Cube035_2"
              castShadow
              receiveShadow
              geometry={nodes.Cube035_2.geometry}
              material={materials['Material.001']}
            />
          </group>
          <group
            name="Cylinder"
            position={[2.216, 0.089, -8.201]}
            rotation={[0.049, 0, 0]}
            scale={0.696}>
            <mesh
              name="Cylinder_1"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_1.geometry}
              material={materials.White_01}
            />
            <mesh
              name="Cylinder_2"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_2.geometry}
              material={materials['Black.003']}
            />
            <mesh
              name="Cylinder_3"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_3.geometry}
              material={materials['Black.001']}
            />
            <mesh
              name="Cylinder_4"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_4.geometry}
              material={materials['Black.002']}
            />
          </group>
          <mesh
            name="Plane006"
            castShadow
            receiveShadow
            geometry={nodes.Plane006.geometry}
            material={materials.Black}
            position={[2.451, 0, -8.131]}
            scale={0.696}
          />
          <mesh
            name="Cube034"
            castShadow
            receiveShadow
            geometry={nodes.Cube034.geometry}
            material={materials.GasRange}
            position={[0, 0, -3]}
          />
          <mesh
            name="Cube035"
            castShadow
            receiveShadow
            geometry={nodes.Cube035.geometry}
            material={materials.GasTop}
            position={[0, 0, -3]}
          />
          <mesh
            name="Cube036"
            castShadow
            receiveShadow
            geometry={nodes.Cube036.geometry}
            material={materials.WashMach}
            position={[0, 0, -7.493]}
          />
          <mesh
            name="Cube037"
            castShadow
            receiveShadow
            geometry={nodes.Cube037.geometry}
            material={materials.GasRange}
            position={[0.007, 0.5, -6.75]}
          />
          <mesh
            name="Cube038"
            castShadow
            receiveShadow
            geometry={nodes.Cube038.geometry}
            material={materials.paleGreen}
            position={[0.007, 0.5, -6.75]}
          />
          <mesh
            name="Cube039"
            castShadow
            receiveShadow
            geometry={nodes.Cube039.geometry}
            material={materials.paleGreen}
            position={[0.007, 0.5, -6.75]}
          />
          <mesh
            name="Cube040"
            castShadow
            receiveShadow
            geometry={nodes.Cube040.geometry}
            material={materials['Material.017']}
            position={[-0.809, 1.305, -6.153]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.085}
          />
          <mesh
            name="Plane007"
            castShadow
            receiveShadow
            geometry={nodes.Plane007.geometry}
            material={materials.Deco3}
            position={[1.292, 1.565, -8.499]}
          />
          <group name="Cube060" position={[0, 2, -3]}>
            <mesh
              name="Cube051_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube051_1.geometry}
              material={materials['Black.001']}
            />
            <mesh
              name="Cube051_2"
              castShadow
              receiveShadow
              geometry={nodes.Cube051_2.geometry}
              material={materials.White_02}
            />
          </group>
          <mesh
            name="Cube041"
            castShadow
            receiveShadow
            geometry={nodes.Cube041.geometry}
            material={materials.Deco2}
            position={[-0.99, 1.495, -4.746]}
            rotation={[0, 1.571, 0]}
          />
          <mesh
            name="Cube042"
            castShadow
            receiveShadow
            geometry={nodes.Cube042.geometry}
            material={materials.Deco1}
            position={[-0.99, 1.51, -2.277]}
            rotation={[0, 1.571, 0]}
          />
          <mesh
            name="Cube043"
            castShadow
            receiveShadow
            geometry={nodes.Cube043.geometry}
            material={materials['Material.017']}
            position={[0.078, 2.22, -7.854]}
            scale={0.232}
          />
          <mesh
            name="Cube044"
            castShadow
            receiveShadow
            geometry={nodes.Cube044.geometry}
            material={materials['Material.017']}
            position={[0.078, 2.22, -7.65]}
            scale={0.232}
          />
          <mesh
            name="Cube045"
            castShadow
            receiveShadow
            geometry={nodes.Cube045.geometry}
            material={materials['Material.017']}
            position={[0.078, 2.22, -6.352]}
            scale={0.232}
          />
          <mesh
            name="Cube046"
            castShadow
            receiveShadow
            geometry={nodes.Cube046.geometry}
            material={materials['Material.017']}
            position={[0.078, 2.22, -6.148]}
            scale={0.232}
          />
          <mesh
            name="Cube047"
            castShadow
            receiveShadow
            geometry={nodes.Cube047.geometry}
            material={materials['Material.017']}
            position={[0.078, 2.22, -4.852]}
            scale={0.232}
          />
          <mesh
            name="Cube048"
            castShadow
            receiveShadow
            geometry={nodes.Cube048.geometry}
            material={materials['Material.017']}
            position={[0.078, 2.22, -4.647]}
            scale={0.232}
          />
          <mesh
            name="Cube049"
            castShadow
            receiveShadow
            geometry={nodes.Cube049.geometry}
            material={materials['Material.017']}
            position={[0.078, 2.22, -2.353]}
            scale={0.232}
          />
          <mesh
            name="Cube050"
            castShadow
            receiveShadow
            geometry={nodes.Cube050.geometry}
            material={materials['Material.017']}
            position={[0.078, 2.22, -2.148]}
            scale={0.232}
          />
          <mesh
            name="Cube051"
            castShadow
            receiveShadow
            geometry={nodes.Cube051.geometry}
            material={materials['Material.017']}
            position={[0.078, 2.22, -0.856]}
            scale={0.232}
          />
          <mesh
            name="Cube052"
            castShadow
            receiveShadow
            geometry={nodes.Cube052.geometry}
            material={materials['Material.017']}
            position={[0.078, 2.22, -0.652]}
            scale={0.232}
          />
          <mesh
            name="Cube053"
            castShadow
            receiveShadow
            geometry={nodes.Cube053.geometry}
            material={materials['Material.017']}
            position={[0.078, 0.849, -2.352]}
            scale={0.232}
          />
          <mesh
            name="Cube054"
            castShadow
            receiveShadow
            geometry={nodes.Cube054.geometry}
            material={materials['Material.017']}
            position={[0.078, 0.849, -2.147]}
            scale={0.232}
          />
          <mesh
            name="Cube055"
            castShadow
            receiveShadow
            geometry={nodes.Cube055.geometry}
            material={materials['Material.017']}
            position={[0.078, 0.849, -4.852]}
            scale={0.232}
          />
          <mesh
            name="Cube056"
            castShadow
            receiveShadow
            geometry={nodes.Cube056.geometry}
            material={materials['Material.017']}
            position={[0.078, 0.849, -4.648]}
            scale={0.232}
          />
          <mesh
            name="Cube057"
            castShadow
            receiveShadow
            geometry={nodes.Cube057.geometry}
            material={materials['Material.017']}
            position={[0.078, 0.535, -6.059]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.232}
          />
          <mesh
            name="Cube058"
            castShadow
            receiveShadow
            geometry={nodes.Cube058.geometry}
            material={materials['Material.017']}
            position={[0.078, 2.569, -3.497]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.232}
          />
          <mesh
            name="Cube059"
            castShadow
            receiveShadow
            geometry={nodes.Cube059.geometry}
            material={materials['Material.017']}
            position={[0.078, 0.194, -7.055]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.232}
          />
          <mesh
            name="Plane008"
            castShadow
            receiveShadow
            geometry={nodes.Plane008.geometry}
            material={materials.White}
            position={[0, 0, -1.5]}
          />
          <mesh
            name="Idle"
            castShadow
            receiveShadow
            geometry={nodes.Idle.geometry}
            material={nodes.Idle.material}
            position={[-0.405, 0.747, -2.583]}
            scale={0.379}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/modelB.glb')