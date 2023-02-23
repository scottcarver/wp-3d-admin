import * as React from 'react'

import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF, Sparkles, Stars, RoundedBox } from '@react-three/drei'

export default function Experience()
{
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    
    // const sizes = React.useMemo(() => {
    //     return new Float32Array(Array.from({ length: amount }, () => Math.random() * size))
    // }, [size, amount]);

    return <>




        <color args={ [ '#241a1a' ] } attach="background" />
     
        <Environment preset="city" />
       


        <PresentationControls
            global
            rotation={ [ 0.13, 0.1, 0 ] }
            polar={ [ - 0.4, 0.2 ] }
            azimuth={ [ - 1, 0.75 ] }
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 4, tension: 100 } }
        >
                

            <Float rotationIntensity={ 0.4 } >  
                <Stars radius={100} depth={20} count={5000} factor={4} saturation={0} speed={0} />
          

                <rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 65 }
                    color={ '#487cff' }
                    rotation={ [ - 0.1, Math.PI, 0 ] }
                    position={ [ 0, 0.55, - 1.15 ] }
                />

                <RoundedBox
                    args={[1, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
                    radius={0.05} // Radius of the rounded corners. Default is 0.05
                    smoothness={4} // The number of curve segments. Default is 4
                    // {...meshProps} // All THREE.Mesh props are valid
                    >
                    <meshPhongMaterial color="red"  />
                </RoundedBox>

                {/* <primitive
                    object={ computer.scene }
                    position-y={ - 1.2 }
                    // rotation-x={ 0.13 }
                >
                    <Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={ 1.17 }
                        position={ [ 0, 1.56, - 1.4 ] }
                        rotation-x={ - 0.256 }
                    >
                        <iframe src="http://localhost/pointoforegon.com/city/salem/" />
                    </Html>
                </primitive> */}


                <Text
                    // font="./bangers-v20-latin-regular.woff"
                    font="./figtree-v2-latin/figtree-v2-latin-800.woff"
                    fontSize={ .5 }
                    position={ [ 2, 0.75, 0.75 ] }
                    rotation-y={ - 1.25 }
                    maxWidth={ 2 }
                >
                   Trivia!
                </Text>
            </Float>

            <Sparkles size="200" color="yellow" opacity="1" scale="2" speed=".08" count="200" position={ [ 2, 0.56,  1 ] }/>

        </PresentationControls>

        <ContactShadows
            position-y={ - 1.4 }
            opacity={ 0.8 }
            scale={ 4 }
            blur={ 4.4 }
        />

    </>
}