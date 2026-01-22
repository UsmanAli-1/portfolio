'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

function Skull() {
    const { scene } = useGLTF('/models/skull/scene.gltf')

    scene.rotation.y = Math.PI

    const box = new THREE.Box3().setFromObject(scene)
    const center = box.getCenter(new THREE.Vector3())
    scene.position.sub(center)

    scene.position.y += 0.3

    return <primitive object={scene} scale={2.8} />
}

export default function SkullInCircle() {
    return (
        <div className="absolute inset-[-25%] pointer-events-none">
            <Canvas camera={{ position: [0, 0.5, 5], fov: 70 }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} intensity={1.2} />
                <Skull />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.8}
                />
            </Canvas>
        </div>
    )
}
