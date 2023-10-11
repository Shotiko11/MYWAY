const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(0.85, 0.85, 0.85);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
cube.position.x = 6;
cube.position.y = 2.7;
scene.add(cube);

let isDragging = false;
let previousMouseX = 0;

document.addEventListener('mousedown', (event) => {
  isDragging = true;
  previousMouseX = event.clientX;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mousemove', (event) => {
  if (isDragging) {
    const mouseX = event.clientX;
    const deltaX = mouseX - previousMouseX;
    previousMouseX = mouseX;

    cube.rotation.y += (deltaX * 0.01); 
  }
});

const animate = () => {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
};

animate();
