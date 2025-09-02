// src/pages/quiz/Leaderboard3D.jsx
import React, { useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import { OrbitControls, Html } from "@react-three/drei";
import { QuizContext } from "../../pages/quiz/QuizContext";

function Bar({ position, height, username }) {
  const [ref] = useBox(() => ({
    mass: 1,
    position,
    args: [1, height, 1],
  }));
  // Aquí está el useContext para obtener userScores del contexto
  const { userScores } = useContext(QuizContext);

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <boxGeometry args={[1, height, 1]} />
      <meshStandardMaterial color="orange" />
      <Html position={[0, height / 2 + 0.3, 0]} center>
        {username}
      </Html>
    </mesh>
  );
}

function Ground() {
  const [ref] = usePlane(() => ({
    mass: 0,
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0, 0],
  }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial color="#228B22" />
    </mesh>
  );
}

export default function Leaderboard3D() {
  const { userScores } = useContext(QuizContext);

  return (
    <Canvas shadows camera={{ position: [0, 10, 15], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight
        position={[15, 20, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <Physics gravity={[0, -9.81, 0]}>
        {userScores.map((user, i) => (
          <Bar
            key={i}
            position={[i * 2 - userScores.length, user.score / 2, 0]}
            height={user.score}
            username={user.username}
          />
        ))}
        <Ground />
      </Physics>
      <OrbitControls />
    </Canvas>
  );
}
