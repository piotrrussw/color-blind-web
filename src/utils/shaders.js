const VertexShader = `
            varying vec2 vUv;

            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
            }
        `;

const FragmentShader = `
            varying vec2 vUv;
            uniform sampler2D map;
            uniform vec3 r;
            uniform vec3 g;
            uniform vec3 b;

            void main() {
                vec4 c = texture2D(map, vUv);
                c = mapTexelToLinear(c);

                // colour blind calculation
                vec4 cb = vec4(
                    c.r * r[0] + c.g * r[1] + c.b * r[2],
                    c.r * g[0] + c.g * g[1] + c.b * g[2],
                    c.r * b[0] + c.g * b[1] + c.b * b[2],
                    c.a
                );

                gl_FragColor = cb;
            }
        `;

export { VertexShader, FragmentShader };
