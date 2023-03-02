import * as React from 'react'

import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF, Sparkles, Stars, RoundedBox } from '@react-three/drei'

export default function Experience()
{
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    
    // const sizes = React.useMemo(() => {
    //     return new Float32Array(Array.from({ length: amount }, () => Math.random() * size))
    // }, [size, amount]);

    return <>
           <RoundedBox
                    // ref={ref}
                    // args={[25, 25, 25]}
                    args={[1, 1 , 1]}
                    position={ [ 1.25, -1.35, 0 ] }
                    rotation-y={ 1.13 }
                >
                    <meshPhongMaterial color="red" opacity={0.2} />
                </RoundedBox>
        <color args={ [ '#2c3338' ] } attach="background" />
     
        <Environment preset="city" />
  

{/* 
        <PresentationControls
            global
            rotation={ [ 0.13, 0.1, 0 ] }
            polar={ [ - 0.4, 0.2 ] }
            azimuth={ [ - 1, 0.75 ] }
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 4, tension: 100 } }
        >
                 */}

            <Float rotationIntensity={ 0.05 } >  
                <Stars color="#000000" radius={100} depth={30} count={5000} factor={4} saturation={1} speed={0} />

                <RoundedBox
                    // ref={ref}
                    // args={[25, 25, 25]}
                    args={[1, 1 , 1]}
                    position={ [ -1, -1.35, 0 ] }
                >
                    <meshNormalMaterial />
                </RoundedBox>

     

                <rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 65 }
                    color={ '#487cff' }
                    rotation={ [ - 0.1, Math.PI, 0 ] }
                    position={ [ 0, 0.55, - 1.15 ] }
                />

                <primitive
                    object={ computer.scene }
                    position-y={ - 1 }
                    scale={.6}
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
                </primitive>

    
                <Text
                    font="./bangers-v20-latin-regular.woff"
                    // font="./figtree-v2-latin/figtree-v2-latin-800.woff"
                    fontSize={ .25 }
                    position={ [ 1, 0.25, 1 ] }
                    rotation-y={ - 1.25 }
                    rotation-x={ - 0.25 }
                    // rotation-z={ - 0 }
                    maxWidth={ 4 }
                >
                   Running WordPress 6.2
                </Text>
            </Float>

            {/* <Sparkles size="200" color="yellow" opacity="1" scale="2" speed=".08" count="200" position={ [ 2, 0.56,  1 ] }/> */}
{/* 
        </PresentationControls> */}

        <ContactShadows
            // position-y={ - 0.4 }
            opacity={ 0.4 }
            scale={ 2 }
            blur={ 4.4 }
        />

    </>
}