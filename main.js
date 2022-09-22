console.log("hi")
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
let x;
let y;
let butup = false;
const renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const gltfloader = new THREE.GLTFLoader();


gltfloader.load( './cv.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
//const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const geometry = new THREE.BoxGeometry( 1, 1, 1);
const geo2 = new THREE.BoxGeometry(2,2,1);
const light = new THREE.AmbientLight( 0xffffff ); // soft white light
scene.add( light );
const material = new THREE.MeshBasicMaterial( { color: 0x20ff30 });
//const material = new THREE.MeshBasicMaterial( { vertexColors: true } );
var controls = new THREE.OrbitControls(camera, renderer.domElement)
const cube = new THREE.Mesh( geo2, material );
cube.castShadow =true;
//scene.add( cube );


camera.position.z = 3;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera, controls );
}
animate();

function turn(){
    document.getElementById("bodyid").style.cursor ="grabbing"
}

function rel(){
    document.getElementById("bodyid").style.cursor ="grab"

}



//setInterval(()=>{cube.rotation.x += 0.01;
  //  cube.rotation.y += 0.01;},200)

/*

bdy = document.getElementById("bodyid")
bdy.addEventListener("mousemove", (er) => {
    if (!butup) return;
    er.preventDefault();

    let e = window.event;
    let tempx = er.clientX
    let tempy = er.clientY

    let resX = x - tempx;
    let resY = y - tempy; 
    for(let bla = 0; bla <= resX; bla++){
        cube.rotation.x += bla
        setTimeout(()=>{console.log("bla1"+bla)},5)
    }
    for(let bla = 0; bla <= resY; bla++){
        cube.rotation.y += bla
        setTimeout(()=>{console.log("bla2"+bla)},5)
    }
    console.log("X:"+resX)
    console.log("Y:"+resY)
    butup = false;


  });
*/