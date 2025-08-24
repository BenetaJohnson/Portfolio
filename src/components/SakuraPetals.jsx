// SakuraPetals.jsx
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SakuraPetals() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // === Setup scene, camera, renderer ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // === Load petal textures ===
    const textureLoader = new THREE.TextureLoader();
    const textures = [
      textureLoader.load("/Petal/Sakura1.webp"),
      textureLoader.load("/Petal/Sakura2.webp"),
    ];

    // === Create petals ===
    const petals = [];
    const petalCount = 120;

    for (let i = 0; i < petalCount; i++) {
      const texture = textures[Math.floor(Math.random() * textures.length)];
      const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.85,
        depthWrite: false,
      });

      const sprite = new THREE.Sprite(material);
      const scale = 0.2 + Math.random() * 1.5;
      sprite.scale.set(scale, scale, 1);
      sprite.position.set(
        (Math.random() - 0.5) * 40,
        Math.random() * 20 + 5,
        (Math.random() - 0.5) * 10
      );

      sprite.userData = {
        velocity: {
          y: -0.01 - Math.random() * 0.008,
          x: (Math.random() - 0.5) * 0.001,
        },
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      };

      petals.push(sprite);
      scene.add(sprite);
    }

    // === Animation loop ===
    const animate = () => {
      requestAnimationFrame(animate);
      petals.forEach((petal) => {
        petal.position.y += petal.userData.velocity.y;
        petal.position.x += petal.userData.velocity.x;
        petal.material.rotation += petal.userData.rotationSpeed;

        if (petal.position.y < -5) {
          petal.position.y = Math.random() * 10 + 15;
          petal.position.x = (Math.random() - 0.5) * 40;
        }
      });
      renderer.render(scene, camera);
    };
    animate();

    // === Handle window resize ===
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // === Cleanup ===
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  // ✅ Must return a div so canvas attaches
  return (
    <div className="fixed inset-0 z-10 pointer-events-none">
      <div ref={mountRef} className="petals-canvas w-full h-full" />
    </div>
  );
}
