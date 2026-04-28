import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { MapPin, Wifi } from 'lucide-react';

const GlobeCanvas = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;
    if (width === 0 || height === 0) return;

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // --- Scene & Camera ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.z = 2.6;

    // --- Globe ---
    const globeGeo = new THREE.SphereGeometry(1, 64, 64);
    const globeMat = new THREE.MeshPhongMaterial({
      color: 0x0a1628,
      shininess: 60,
      specular: new THREE.Color(0x2dd4bf),
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    scene.add(globe);

    // Wireframe overlay
    const wireGeo = new THREE.SphereGeometry(1.002, 28, 28);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x14b8a6,
      wireframe: true,
      transparent: true,
      opacity: 0.07,
    });
    scene.add(new THREE.Mesh(wireGeo, wireMat));

    // Atmosphere
    const atmosGeo = new THREE.SphereGeometry(1.10, 64, 64);
    const atmosMat = new THREE.MeshPhongMaterial({
      color: 0x0d9488,
      transparent: true,
      opacity: 0.07,
      side: THREE.FrontSide,
    });
    scene.add(new THREE.Mesh(atmosGeo, atmosMat));

    // Glow shell
    const glowGeo = new THREE.SphereGeometry(1.16, 64, 64);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x2dd4bf,
      transparent: true,
      opacity: 0.025,
      side: THREE.BackSide,
    });
    scene.add(new THREE.Mesh(glowGeo, glowMat));

    // --- Stars ---
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(900 * 3);
    for (let i = 0; i < 900 * 3; i++) starPos[i] = (Math.random() - 0.5) * 50;
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.05, transparent: true, opacity: 0.4 })));

    // --- Helper: lat/lon → 3D point ---
    const latLonToVec = (lat: number, lon: number, r = 1.02) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta),
      );
    };

    // --- Pulsing Pin ---
    const addPin = (lat: number, lon: number) => {
      const pos = latLonToVec(lat, lon);
      const ringGeo = new THREE.RingGeometry(0.04, 0.065, 32);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x2dd4bf, transparent: true, opacity: 0.8, side: THREE.DoubleSide });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(pos);
      ring.lookAt(pos.clone().multiplyScalar(2));
      scene.add(ring);

      const dotGeo = new THREE.SphereGeometry(0.025, 16, 16);
      const dotMat = new THREE.MeshBasicMaterial({ color: 0x2dd4bf });
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.copy(pos.clone().multiplyScalar(1.01));
      scene.add(dot);

      return ring;
    };

    const indiaRing = addPin(22.3, 72.6); // Gujarat

    // Subtle secondary dots
    const addDot = (lat: number, lon: number) => {
      const pos = latLonToVec(lat, lon);
      const d = new THREE.Mesh(
        new THREE.SphereGeometry(0.012, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.5 })
      );
      d.position.copy(pos);
      scene.add(d);
    };
    addDot(37.7, -122.4); // SF
    addDot(51.5, -0.12);  // London
    addDot(35.6, 139.7);  // Tokyo
    addDot(1.3, 103.8);   // Singapore

    // --- Lights ---
    scene.add(new THREE.AmbientLight(0xffffff, 0.3));
    const sun = new THREE.DirectionalLight(0x7dd3fc, 1.1);
    sun.position.set(3, 2, 3);
    scene.add(sun);
    const fill = new THREE.DirectionalLight(0x2dd4bf, 0.35);
    fill.position.set(-3, -1, -2);
    scene.add(fill);

    // --- Drag rotation ---
    let dragging = false;
    let prev = { x: 0, y: 0 };
    let rotY = 0.4, rotX = 0.15;
    let velX = 0.0015, velY = 0;

    const onDown = (e: MouseEvent) => { dragging = true; prev = { x: e.clientX, y: e.clientY }; velX = velY = 0; };
    const onMove = (e: MouseEvent) => {
      if (!dragging) return;
      velX = (e.clientX - prev.x) * 0.005;
      velY = (e.clientY - prev.y) * 0.005;
      rotY += velX;
      rotX += velY;
      rotX = Math.max(-0.6, Math.min(0.6, rotX));
      prev = { x: e.clientX, y: e.clientY };
    };
    const onUp = () => { dragging = false; };

    mount.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);

    // --- Animate ---
    let frameId: number;
    let t = 0;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      t += 0.016;
      if (!dragging) {
        velX = 0.0012;
        rotY += velX;
      }
      globe.rotation.y = rotY;
      globe.rotation.x = rotX;

      const pulse = 1 + 0.35 * Math.sin(t * 2.8);
      indiaRing.scale.set(pulse, pulse, pulse);
      (indiaRing.material as THREE.MeshBasicMaterial).opacity = 0.4 + 0.4 * Math.sin(t * 2.8);

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const w = mount.clientWidth, h = mount.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameId);
      mount.removeEventListener('mousedown', onDown);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('resize', onResize);
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col items-center">
      {/* Header badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex items-center gap-2 mb-4 bg-gray-900/70 dark:bg-gray-800/80 backdrop-blur-md border border-teal-500/25 rounded-full px-4 py-1.5"
      >
        <Wifi className="w-3.5 h-3.5 text-teal-400" />
        <span className="text-xs text-teal-300 font-semibold tracking-widest uppercase">Open to Remote Work</span>
      </motion.div>

      {/* Globe canvas container — strictly bounded */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative w-full flex-1 min-h-0 overflow-hidden rounded-2xl"
      >
        <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" style={{ minHeight: 280, maxHeight: 360 }} />
      </motion.div>

      {/* Footer badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-2 mt-4 bg-gray-900/70 dark:bg-gray-800/80 backdrop-blur-md border border-teal-500/25 rounded-full px-4 py-1.5"
      >
        <MapPin className="w-3.5 h-3.5 text-teal-400" />
        <span className="text-xs text-teal-300 font-semibold tracking-widest uppercase">Gujarat, India</span>
        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse ml-1" />
      </motion.div>

      {/* Drag hint */}
      <p className="text-xs text-gray-400 dark:text-gray-600 mt-2">Drag to rotate</p>
    </div>
  );
};

export default GlobeCanvas;
