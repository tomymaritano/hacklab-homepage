import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'

const draco = new DRACOLoader();
draco.setDecoderConfig({ type: 'js' });
draco.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/')

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true },
  onProgress = null
) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    loader.setDRACOLoader( draco );

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene
        obj.name = 'pc'
        obj.position.y = 0
        obj.position.x = 0
        obj.position.z = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        
        // Scale adjustment for PC model - make it bigger
        obj.scale.setScalar(3.5)
        
        scene.add(obj)

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })
        resolve(obj)
      },
      progress => {
        const progressPercent = (progress.loaded / progress.total * 100)
        console.log('Loading progress:', progressPercent + '%')
        if (onProgress) {
          onProgress(progressPercent)
        }
      },
      function (error) {
        console.error('GLB loading error:', error)
        reject(error)
      }
    )
  })
}
