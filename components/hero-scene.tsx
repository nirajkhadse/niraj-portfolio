"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Float, Environment } from "@react-three/drei"
import * as THREE from "three"

// Subtle dot field — like particles but tighter and cooler than the original
function Particles({ count = 400 }) {
  const mesh = useRef<THREE.Points>(null)
  const { viewport } = useThree()

  const positions = useMemo(() => {
    const p = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * viewport.width * 2
      p[i * 3 + 1] = (Math.random() - 0.5) * viewport.height * 2
      p[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return p
  }, [count, viewport])

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.y = state.clock.elapsedTime * 0.02
    mesh.current.rotation.x = state.clock.elapsedTime * 0.01
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#B0723C" transparent opacity={0.7} sizeAttenuation />
    </points>
  )
}

// A circuit "trace" — a polyline made of right-angle segments, like PCB routing.
function Trace({
  points,
  color = "#B0723C",
  opacity = 0.45,
  speed = 0.5,
  depth = -3,
}: {
  points: [number, number][]
  color?: string
  opacity?: number
  speed?: number
  depth?: number
}) {
  const ref = useRef<THREE.Line>(null)

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry()
    const pts: number[] = []
    for (const [x, y] of points) pts.push(x, y, depth)
    g.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3))
    return g
  }, [points, depth])

  useFrame((state) => {
    if (!ref.current) return
    // Gentle breathing opacity, slightly desynced per trace via the `speed` prop
    const m = ref.current.material as THREE.LineBasicMaterial
    m.opacity = opacity * (0.65 + 0.35 * Math.sin(state.clock.elapsedTime * speed))
  })

  return (
    <primitive
      object={
        new THREE.Line(
          geometry,
          new THREE.LineBasicMaterial({ color, transparent: true, opacity, linewidth: 1 }),
        )
      }
      ref={ref}
    />
  )
}

// A small "via" — a glowing copper dot at a PCB junction.
function Via({ position, size = 0.04, color = "#B0723C" }: {
  position: [number, number, number]; size?: number; color?: string
}) {
  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <mesh position={position}>
        <circleGeometry args={[size, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.85} />
      </mesh>
    </Float>
  )
}

function Scene() {
  const { pointer } = useThree()
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y, pointer.x * 0.12, 0.05,
    )
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x, pointer.y * 0.08, 0.05,
    )
  })

  // Several stylised PCB traces routed across the scene.
  // Each trace is a polyline of [x, y] coords; right-angles read as circuit routing.
  const traces: Array<Parameters<typeof Trace>[0]> = [
    {
      points: [[-4, 1.5], [-2.2, 1.5], [-2.2, 0.5], [0.6, 0.5], [0.6, -0.4], [3.5, -0.4]],
      color: "#B0723C", opacity: 0.5, speed: 0.4, depth: -3,
    },
    {
      points: [[-4, -1.2], [-1.4, -1.2], [-1.4, -0.2], [1.8, -0.2], [1.8, 1.1], [4, 1.1]],
      color: "#5B7965", opacity: 0.4, speed: 0.55, depth: -3.5,
    },
    {
      points: [[-3.5, 2.2], [-0.8, 2.2], [-0.8, 1.3], [2.4, 1.3], [2.4, 2], [4, 2]],
      color: "#B0723C", opacity: 0.35, speed: 0.6, depth: -4,
    },
    {
      points: [[-4, -2], [-2.6, -2], [-2.6, -1.2], [0, -1.2], [0, -2.2], [3.8, -2.2]],
      color: "#5B7965", opacity: 0.3, speed: 0.45, depth: -3.8,
    },
    {
      points: [[-3, 0.8], [-3, -0.5], [-0.4, -0.5], [-0.4, 0.4], [2.6, 0.4], [2.6, -1], [4, -1]],
      color: "#B0723C", opacity: 0.35, speed: 0.5, depth: -2.6,
    },
  ]

  // Vias at trace junctions for a richer circuit look
  const vias: Array<{ position: [number, number, number]; color?: string }> = [
    { position: [-2.2, 0.5, -3] },
    { position: [0.6, -0.4, -3] },
    { position: [-1.4, -0.2, -3.5], color: "#5B7965" },
    { position: [1.8, 1.1, -3.5], color: "#5B7965" },
    { position: [-0.8, 1.3, -4] },
    { position: [2.4, 2, -4] },
    { position: [-2.6, -1.2, -3.8], color: "#5B7965" },
    { position: [0, -1.2, -3.8], color: "#5B7965" },
    { position: [-0.4, 0.4, -2.6] },
    { position: [2.6, -1, -2.6] },
  ]

  return (
    <group ref={groupRef}>
      <Particles count={250} />
      {traces.map((t, i) => <Trace key={i} {...t} />)}
      {vias.map((v, i) => <Via key={i} {...v} />)}

      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#B0723C" />
      <pointLight position={[-5, -5, 5]} intensity={0.25} color="#5B7965" />
    </group>
  )
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
        <Environment preset="night" />
      </Canvas>
    </div>
  )
}
