// Typed.js
var typed = new Typed("#typed", {
    strings: ["Tervist!", "7-tunni töö"],
    typeSpeed: 33,
    backSpeed: 20,
    loop: true
});

// Chart.js
const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['E', 'T', 'K', 'N', 'R'],
        datasets: [{
            label: 'Temperatuur',
            data: [18, 17, 21, 21, 22],
            borderWidth: 2
        }]
    }
});

// Anime.js
anime({
    targets: '#box',
    translateX: 200,
    rotate: 360,
    duration: 2000,
    loop: true
});

// Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 450/300, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(450, 300);
document.getElementById("three-container").appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
