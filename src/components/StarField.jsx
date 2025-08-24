// components/StarField.jsx
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function StarField() {
  const mountRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const stars = [];

    const createStar = () => {
      const geo = new THREE.PlaneGeometry(1, 0.1);
      const mat = new THREE.MeshBasicMaterial({
        color: 0xbfefff,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const star = new THREE.Group();
      const arm1 = new THREE.Mesh(geo, mat);
      const arm2 = new THREE.Mesh(geo, mat);
      arm2.rotation.z = Math.PI / 2;
      star.add(arm1);
      star.add(arm2);

      const scale = 0.3 + Math.random() * 3;
      star.scale.set(scale, scale, scale);
      return star;
    };

    const spreadPos = (range) =>
      (Math.random() < 0.5 ? -1 : 1) * Math.pow(Math.random(), 0.5) * range;

    for (let i = 0; i < 100; i++) {
      const star = createStar();
      star.position.set(spreadPos(100), spreadPos(60), spreadPos(75));
      stars.push(star);
      scene.add(star);
    }

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      stars.forEach((star, i) => {
        star.rotation.x += 0.001 * (i + 1);
        star.rotation.y += 0.0015 * (i + 1);
        const pulse = 0.6 + 0.2 * Math.sin(elapsed * 2 + i);
        star.children.forEach((arm) => {
          arm.material.opacity = pulse;
        });
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }} />;
}
