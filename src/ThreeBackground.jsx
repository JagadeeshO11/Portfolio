import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ThreeBackground() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x0f172a, 0.1)
    containerRef.current.appendChild(renderer.domElement)

    camera.position.z = 50

    // Create floating cubes
    const cubes = []
    for (let i = 0; i < 15; i++) {
      const geometry = new THREE.BoxGeometry(2, 2, 2)
      const material = new THREE.MeshPhongMaterial({
        color: Math.random() * 0xffffff,
        emissive: Math.random() * 0x444444
      })
      const cube = new THREE.Mesh(geometry, material)
      cube.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      )
      cube.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)
      cube.velocity = {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5,
        z: (Math.random() - 0.5) * 0.5
      }
      scene.add(cube)
      cubes.push(cube)
    }

    // Create floating spheres
    const spheres = []
    for (let i = 0; i < 10; i++) {
      const geometry = new THREE.IcosahedronGeometry(1.5, 4)
      const material = new THREE.MeshPhongMaterial({
        color: Math.random() * 0xffffff,
        wireframe: Math.random() > 0.5
      })
      const sphere = new THREE.Mesh(geometry, material)
      sphere.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      )
      sphere.velocity = {
        x: (Math.random() - 0.5) * 0.3,
        y: (Math.random() - 0.5) * 0.3,
        z: (Math.random() - 0.5) * 0.3
      }
      scene.add(sphere)
      spheres.push(sphere)
    }

    // Lighting
    const light1 = new THREE.PointLight(0x3b82f6, 1, 100)
    light1.position.set(30, 30, 30)
    scene.add(light1)

    const light2 = new THREE.PointLight(0x10b981, 0.8, 100)
    light2.position.set(-30, -30, 30)
    scene.add(light2)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
    scene.add(ambientLight)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)

      cubes.forEach(cube => {
        cube.rotation.x += 0.005
        cube.rotation.y += 0.005
        cube.position.x += cube.velocity.x
        cube.position.y += cube.velocity.y
        cube.position.z += cube.velocity.z

        if (Math.abs(cube.position.x) > 60) cube.velocity.x *= -1
        if (Math.abs(cube.position.y) > 60) cube.velocity.y *= -1
        if (Math.abs(cube.position.z) > 60) cube.velocity.z *= -1
      })

      spheres.forEach(sphere => {
        sphere.rotation.x += 0.003
        sphere.rotation.y += 0.003
        sphere.position.x += sphere.velocity.x
        sphere.position.y += sphere.velocity.y
        sphere.position.z += sphere.velocity.z

        if (Math.abs(sphere.position.x) > 60) sphere.velocity.x *= -1
        if (Math.abs(sphere.position.y) > 60) sphere.velocity.y *= -1
        if (Math.abs(sphere.position.z) > 60) sphere.velocity.z *= -1
      })

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}
