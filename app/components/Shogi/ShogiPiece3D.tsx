'use client';
import * as THREE from 'three';
import { useEffect } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { TextureLoader } from "three";

type ShogiPiece3DProps = {
    modelFileName: string;
};

export const ShogiPiece3D: React.FC<ShogiPiece3DProps> = ({
    modelFileName,
}: ShogiPiece3DProps) => {
    useEffect(() => {
        // canvasをDOMから取得
        const canvas = document.getElementById('canvas') as HTMLCanvasElement | null;
        // canvasがnullの場合、処理を中断して早期リターン
        if (!canvas) return;

        // シーンの作成
        const scene = new THREE.Scene();

        // テクスチャのロード
        // const textureLoader = new THREE.TextureLoader();
        // const texture = textureLoader.load("/home_imgs/travel_lufy.jpeg");
        // const material = new THREE.MeshPhongMaterial({ map: texture });

        // サイズ
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight,
        };

        // カメラの設定
        const camera = new THREE.PerspectiveCamera(
            75,
            sizes.width / sizes.height,
            1,
            1000,
        );
        camera.position.set(0, -1, 6); // カメラの位置

        // レンダラーの設定
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true,
        });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(window.devicePixelRatio);

        // ライトの設定
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffffff, 0.2);
        pointLight.position.set(1, 2, 3);
        scene.add(pointLight);

        // **軸ヘルパーを追加**
        // const axesHelper = new THREE.AxesHelper(5); // 引数は軸の長さ（任意）
        // scene.add(axesHelper);

        // 3Dモデルの読み込み
        const loader = new GLTFLoader();
        loader.load(
            modelFileName,
            (gltf) => {
                gltf.scene.traverse((child) => {
                    if (child.isObject3D) {
                        child.scale.set(1, 1, 0.8); // スケールの調整
                        child.rotation.set(0, 0, 0); // 回転の初期化
                    }
                });

                // シーンに3Dモデルを追加
                scene.add(gltf.scene);

                // アニメーションで回転
                const clock = new THREE.Clock();
                const tick = () => {
                    const elapsedTime = clock.getElapsedTime();
                    gltf.scene.rotation.y = elapsedTime * 1;
                    gltf.scene.rotation.x = elapsedTime * 0.5;
                    window.requestAnimationFrame(tick);
                    renderer.render(scene, camera);
                };
                tick();
            },
            undefined,
            (error) => {
                console.error('GLTFLoader Error:', error);
            },
        );

        // ウィンドウのリサイズ処理
        window.addEventListener('resize', () => {
            // サイズを取得
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;

            // レンダラーのサイズを調整する
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(sizes.width, sizes.height);

            // カメラへのアスペクト比を正す
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();
        });
    }, [modelFileName]);

    return (
        <div className='overflow-hidden'>
            <canvas id='canvas'></canvas>
        </div>
    );
};
