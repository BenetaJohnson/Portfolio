import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function AvatarScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const { clientWidth, clientHeight } = mountRef.current;

    let scene, renderer, camera;
    let animationFrameId = null;
    let avatar = null;

    // Drag state
    let isDragging = false;
    let lastX = 0;
    let rotationY = 0;

    const init = () => {
      scene = new THREE.Scene();
      scene.background = null;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(clientWidth, clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      mountRef.current.appendChild(renderer.domElement);

      camera = new THREE.PerspectiveCamera(75, clientWidth / clientHeight, 0.1, 1000);
      camera.position.set(0, 0.5, 2.5);

      scene.add(new THREE.AmbientLight(0xffffff, 1.2));
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(2, 5, 5);
      scene.add(directionalLight);

      const loader = new GLTFLoader();
      loader.load("/Avatar/avatar.glb", (gltf) => {
        avatar = gltf.scene;
        avatar.scale.set(1.85, 1.85, 1.85);
        avatar.position.set(0, -1.5, 0);
        scene.add(avatar);
        animate();
      });
    };

    // Mouse event handlers
    const onMouseDown = (e) => {
      isDragging = true;
      lastX = e.clientX;
      mountRef.current.style.cursor = "grabbing";
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - lastX;
      lastX = e.clientX;
      // Adjust the sensitivity as needed
      rotationY -= deltaX * 0.01;
    };

    const onMouseUp = () => {
      isDragging = false;
      mountRef.current.style.cursor = "grab";
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      // Autorotate if not dragging
      if (!isDragging) {
        rotationY -= 0.003; // Adjust speed as needed
      }
      // Rotate camera around Y axis
      camera.position.x = Math.sin(rotationY) * 2.5;
      camera.position.z = Math.cos(rotationY) * 2.5;
      camera.lookAt(0, 0.5, 0);
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      if (!mountRef.current) return;
      const { clientWidth, clientHeight } = mountRef.current;
      if (renderer) renderer.setSize(clientWidth, clientHeight);
      if (camera) {
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
      }
    };

    init();
    window.addEventListener("resize", handleResize);
    mountRef.current.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current) {
        mountRef.current.removeEventListener("mousedown", onMouseDown);
        if (renderer && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
      }
      if (renderer) renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full cursor-grab active:cursor-grabbing z-50"
    />
  );
}