const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(0.7, 0.7, 0.7);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
cube.position.x = 0; 
cube.position.y = 0;
scene.add(cube);


const minX = -6;
const maxX = 6;
const minY = -2;
const maxY = 3; 

let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };

const animate = () => {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();

document.addEventListener('mousedown', (event) => {
  isDragging = true;
  previousMousePosition = {
    x: event.clientX,
    y: event.clientY,
  };
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mousemove', (event) => {
  if (isDragging) {
    const deltaMove = {
      x: event.clientX - previousMousePosition.x,
      y: event.clientY - previousMousePosition.y,
    };

    const newX = cube.position.x + deltaMove.x * 0.01;
    const newY = cube.position.y - deltaMove.y * 0.01;

    if (newX >= minX && newX <= maxX && newY >= minY && newY <= maxY) {
      cube.position.x = newX;
      cube.position.y = newY;
    }

    previousMousePosition = {
      x: event.clientX,
      y: event.clientY,
    };
  }
});
