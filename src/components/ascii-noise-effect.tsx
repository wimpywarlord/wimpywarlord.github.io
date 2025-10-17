"use client";

import { useCallback, useEffect, useRef } from "react";

type Gl = WebGL2RenderingContext;

interface AsciiNoiseEffectProps {
  className?: string;
  noiseStrength?: number;
  noiseScale?: number;
  speed?: number;
  cell?: number;
  bw?: boolean;
  charset?: 0 | 1 | 2;
  tint?: [number, number, number];
  distortAmp?: number;
  frequency?: number;
  zRate?: number;
  brightness?: number;
  contrast?: number;
  seed1?: number;
  seed2?: number;
  hue?: number;
  sat?: number;
  gamma?: number;
  vignette?: number;
  vignetteSoftness?: number;
  glyphSharpness?: number;
  bg?: [number, number, number];
}

const vs = `#version 300 es
layout(location=0) in vec2 aPos;
out vec2 vUV;
void main(){
  vUV=(aPos+1.0)*0.5;
  gl_Position=vec4(aPos,0.0,1.0);
}`;
const fsNoise = `#version 300 es
precision highp float;
out vec4 fragColor;
in vec2 vUV;

uniform vec2 uResolution;
uniform float uTime;
uniform float uNoiseStrength;
uniform float uNoiseScale;
uniform float uSpeed;
uniform vec3 uTint;
uniform float uDistortAmp;
uniform float uFrequency;
uniform float uZRate;
uniform float uBrightness;
uniform float uContrast;
uniform float uSeed1;
uniform float uSeed2;
uniform float uHue; // degrees
uniform float uSaturation; // 0..2
uniform float uGamma; // 0.5..2
uniform float uVignette; // 0..1
uniform float uVignetteSoftness; // 0.1..2
uniform float uGlyphSharpness; // 0.01..0.2
uniform vec3 uBg;

#define TWOPI 6.28318530718

vec3 mod289(vec3 x){return x - floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x - floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+10.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314*r;}

float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);
  const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=vec3(1.0)-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857; vec3 ns=n_*D.wyz - D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy; vec4 h=vec4(1.0)-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0; vec4 s1=floor(b1)*2.0+1.0; vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw + s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 m=max(0.5-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0); m=m*m;
  return 105.0*dot(m*m, vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}

vec3 rgb2hsv(vec3 c){
  vec4 K = vec4(0.0, -1.0/3.0, 2.0/3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y)/(6.0*d + e)), d/(q.x + e), q.x);
}
vec3 hsv2rgb(vec3 c){
  vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main(){
  vec2 fragCoord=vUV*uResolution;
  vec2 r=uResolution;
  vec2 uv0=fragCoord/r;
  float speed=uSpeed;
  float noiseTime=uTime*speed;
  float n=snoise(vec3((fragCoord.x - r.x*0.5)*uNoiseScale,(fragCoord.y - r.y*0.5)*uNoiseScale,noiseTime));
  uv0.x=fract(uv0.x)+uNoiseStrength*sin(n*TWOPI);
  uv0.y=fract(uv0.y)+uNoiseStrength*cos(n*TWOPI);

  vec3 c; float l; float z=uTime;
  vec2 p = uv0;
  for(int i=0;i<3;i++){
    vec2 uv=p; vec2 q=p; q-=0.5; q.x*=r.x/r.y; z+=uZRate; l=length(q);
    uv+=q/l*(sin(z+uSeed1)+1.0)*uDistortAmp*abs(sin(l*uFrequency - z - z + uSeed2));
    c[i]=uGlyphSharpness/length(mod(uv,1.0)-0.5);
  }
  vec3 col = c/l;
  col = (col - 0.5) * uContrast + 0.5;
  col *= uBrightness;
  col *= uTint;

  vec3 hsv = rgb2hsv(max(col, 0.0));
  hsv.x = fract(hsv.x + (uHue/360.0));
  hsv.y = clamp(hsv.y * uSaturation, 0.0, 2.0);
  col = hsv2rgb(hsv);
  col = pow(max(col, 0.0), vec3(uGamma));

  vec2 uvn = vUV - 0.5; uvn.x *= uResolution.x/uResolution.y;
  float vr = length(uvn);
  float vig = pow(1.0 - smoothstep(0.0, uVignetteSoftness, vr), 1.0);
  col *= mix(1.0, vig, clamp(uVignette, 0.0, 1.0));

  col = clamp(uBg + col, 0.0, 1.0);
  fragColor=vec4(col,1.0);
}
`;
const fsAscii = `#version 300 es
precision highp float;
out vec4 fragColor;
in vec2 vUV;

uniform vec2 uResolution;
uniform sampler2D uTexture;
uniform vec2 uSourceResolution;
uniform float uCell; // cell size (px)
uniform int uBW; // 1=BW, 0=color multiply
uniform int uCharset; // 0=full,1=minimal,2=medium
uniform float uBrightness;
uniform float uContrast;
uniform vec3 uTint;
uniform float uTime;
uniform float uDistortAmp;
uniform float uFrequency;
uniform float uZRate;
uniform float uSeed1;
uniform float uSeed2;

float gray(vec3 c){return dot(c, vec3(0.3,0.59,0.11));}

int pickCharFull(float g){
  int n = 4096;
  if (g>0.9535) n=33061407; else if (g>0.9302) n=32045630; else if (g>0.9070) n=33081316; else if (g>0.8837) n=32045617; else if (g>0.8605) n=32032318; else if (g>0.8372) n=15255537; else if (g>0.8140) n=15022414; else if (g>0.7907) n=32575775; else if (g>0.7674) n=16267326; else if (g>0.7442) n=18667121; else if (g>0.7209) n=18732593; else if (g>0.6977) n=32540207; else if (g>0.6744) n=32641183; else if (g>0.6512) n=18415153; else if (g>0.6279) n=16272942; else if (g>0.6047) n=15018318; else if (g>0.5814) n=15022158; else if (g>0.5581) n=18405034; else if (g>0.5349) n=32045584; else if (g>0.5116) n=15255086; else if (g>0.4884) n=33061392; else if (g>0.4651) n=18400814; else if (g>0.4419) n=18444881; else if (g>0.4186) n=16269839; else if (g>0.3953) n=6566222; else if (g>0.3721) n=13177118; else if (g>0.3488) n=14954572; else if (g>0.3256) n=17463428; else if (g>0.3023) n=18157905; else if (g>0.2791) n=18393412; else if (g>0.2558) n=32641156; else if (g>0.2326) n=17318431; else if (g>0.2093) n=15239300; else if (g>0.1860) n=18393220; else if (g>0.1628) n=14749828; else if (g>0.1395) n=12652620; else if (g>0.1163) n=4591748; else if (g>0.0930) n=459200; else if (g>0.0698) n=4329476; else if (g>0.0465) n=131200; else if (g>0.0233) n=4096; else n=4096; return n;
}

int pickCharMinimal(float g){

  if (g>0.8) return 11512810; // '#'
  if (g>0.7) return 13195790; // '@'
  if (g>0.6) return 15252014; // '8'
  if (g>0.5) return 13121101; // '&'
  if (g>0.4) return 15255086; // 'o'
  if (g>0.3) return 163153;   // '*'
  if (g>0.2) return 65600;    // ':'
  return 4096;
}

int pickCharMedium(float g){

  if (g>0.9) return 33061407; // dense
  if (g>0.8) return 32045630;
  if (g>0.7) return 18732593;
  if (g>0.6) return 15022158;
  if (g>0.5) return 15255086;
  if (g>0.4) return 17463428;
  if (g>0.3) return 18157905;
  if (g>0.2) return 131200;
  return 4096;
}

int pickCharSet(float g, int setId){
  if (setId==1) return pickCharMinimal(g);
  if (setId==2) return pickCharMedium(g);
  return pickCharFull(g);
}

float character(int n, vec2 p){
  p=floor(p*vec2(-4.0,4.0)+2.5);
  if (clamp(p.x,0.0,4.0)==p.x){
    if (clamp(p.y,0.0,4.0)==p.y){
      int a=int(round(p.x)+5.0*round(p.y));
      if (((n>>a)&1)==1) return 1.0;
    }
  }
  return 0.0;
}

void main(){
  vec2 fragCoord=vUV*uResolution;
  vec2 cellSize=vec2(uCell);
  vec2 block=floor(fragCoord/cellSize)*cellSize;

  vec2 src = uSourceResolution;
  float srcAspect = src.x/src.y;
  float dstAspect = uResolution.x/uResolution.y;
  vec2 uvBlock = (block+0.5)/uResolution;
  vec2 uvSource;
  if (srcAspect > dstAspect) {

    float scale = dstAspect/srcAspect;
    uvSource = vec2(uvBlock.x*scale + (1.0-scale)*0.5, uvBlock.y);
  } else {

    float scale = srcAspect/dstAspect;
    uvSource = vec2(uvBlock.x, uvBlock.y*scale + (1.0-scale)*0.5);
  }


  vec2 dispP = uvSource - 0.5;
  float l = length(dispP)+1e-5;
  vec2 uvJitter = uvSource + (dispP/l) * (sin(uTime+uSeed1)+1.0) * uDistortAmp * abs(sin(l*uFrequency - uTime - uTime + uSeed2)) * 0.002;
  vec3 col=texture(uTexture, clamp(uvJitter, 0.0, 1.0)).rgb;
  col = (col - 0.5) * uContrast + 0.5;
  col *= uBrightness;
  col *= uTint;
  float g=gray(col);
  int n=pickCharSet(g, uCharset);
  vec2 p = mod(fragCoord/(uCell*0.5), 2.0) - vec2(1.0);
  vec3 outCol = (uBW==1)? vec3(character(n,p)) : col*character(n,p);
  fragColor=vec4(outCol,1.0);
}
`;

const makeShader = (gl: Gl, type: number, src: string) => {
  const sh = gl.createShader(type)!;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(sh) || "shader error");
  }
  return sh;
};
const makeProgram = (gl: Gl, vsSrc: string, fsSrc: string) => {
  const p = gl.createProgram()!;
  const v = makeShader(gl, gl.VERTEX_SHADER, vsSrc);
  const f = makeShader(gl, gl.FRAGMENT_SHADER, fsSrc);
  gl.attachShader(p, v);
  gl.attachShader(p, f);
  gl.linkProgram(p);
  gl.deleteShader(v);
  gl.deleteShader(f);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(p) || "link error");
  }
  return p;
};
const quad = (gl: Gl) => {
  const vao = gl.createVertexArray()!;
  const vbo = gl.createBuffer()!;
  gl.bindVertexArray(vao);
  gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW
  );
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
  gl.bindVertexArray(null);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  return { vao, vbo };
};

export const AsciiNoiseEffect = ({
  noiseStrength = 0.21,
  noiseScale = 0.0009,
  speed = 0.35,
  cell = 10,
  bw = false,
  charset = 1,
  tint = [1, 0.541, 0.314], // Primary orange color: RGB(255, 138, 80) normalized
  distortAmp = 1.67,
  frequency = 4.19,
  zRate = 0.001,
  brightness = 0.65,
  contrast = 0.72,
  seed1 = 3.0366653045872116,
  seed2 = 1.824380620513446,
  hue = 24.6, // Primary orange hue
  sat = 1.29,
  gamma = 1.43,
  vignette = 0.38,
  vignetteSoftness = 1.46,
  glyphSharpness = 0.066,
  bg = [0.06791603697805006, 0.06920046192208859, 0.016292759639548893],
  className
}: AsciiNoiseEffectProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const resRef = useRef<{
    gl: Gl;
    vao: WebGLVertexArrayObject;
    vbo: WebGLBuffer;
    progNoise: WebGLProgram;
    progAscii: WebGLProgram;
    uNoise: Record<string, WebGLUniformLocation>;
    uAscii: Record<string, WebGLUniformLocation>;
    texScene: WebGLTexture;
    fbScene: WebGLFramebuffer;
  } | null>(null);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);

  const init = useCallback((gl: Gl, w: number, h: number) => {
    const progNoise = makeProgram(gl, vs, fsNoise);
    const progAscii = makeProgram(gl, vs, fsAscii);
    const { vao, vbo } = quad(gl);
    const uNoise = {
      uResolution: gl.getUniformLocation(progNoise, "uResolution")!,
      uTime: gl.getUniformLocation(progNoise, "uTime")!,
      uNoiseStrength: gl.getUniformLocation(progNoise, "uNoiseStrength")!,
      uNoiseScale: gl.getUniformLocation(progNoise, "uNoiseScale")!,
      uSpeed: gl.getUniformLocation(progNoise, "uSpeed")!,
      uTint: gl.getUniformLocation(progNoise, "uTint")!,
      uDistortAmp: gl.getUniformLocation(progNoise, "uDistortAmp")!,
      uFrequency: gl.getUniformLocation(progNoise, "uFrequency")!,
      uZRate: gl.getUniformLocation(progNoise, "uZRate")!,
      uBrightness: gl.getUniformLocation(progNoise, "uBrightness")!,
      uContrast: gl.getUniformLocation(progNoise, "uContrast")!,
      uSeed1: gl.getUniformLocation(progNoise, "uSeed1")!,
      uSeed2: gl.getUniformLocation(progNoise, "uSeed2")!,
      uHue: gl.getUniformLocation(progNoise, "uHue")!,
      uSaturation: gl.getUniformLocation(progNoise, "uSaturation")!,
      uGamma: gl.getUniformLocation(progNoise, "uGamma")!,
      uVignette: gl.getUniformLocation(progNoise, "uVignette")!,
      uVignetteSoftness: gl.getUniformLocation(progNoise, "uVignetteSoftness")!,
      uGlyphSharpness: gl.getUniformLocation(progNoise, "uGlyphSharpness")!,
      uBg: gl.getUniformLocation(progNoise, "uBg")!,
    } as const;
    const uAscii = {
      uResolution: gl.getUniformLocation(progAscii, "uResolution")!,
      uTexture: gl.getUniformLocation(progAscii, "uTexture")!,
      uSourceResolution: gl.getUniformLocation(progAscii, "uSourceResolution")!,
      uCell: gl.getUniformLocation(progAscii, "uCell")!,
      uBW: gl.getUniformLocation(progAscii, "uBW")!,
      uCharset: gl.getUniformLocation(progAscii, "uCharset")!,
      uBrightness: gl.getUniformLocation(progAscii, "uBrightness")!,
      uContrast: gl.getUniformLocation(progAscii, "uContrast")!,
      uTint: gl.getUniformLocation(progAscii, "uTint")!,
      uTime: gl.getUniformLocation(progAscii, "uTime")!,
      uDistortAmp: gl.getUniformLocation(progAscii, "uDistortAmp")!,
      uFrequency: gl.getUniformLocation(progAscii, "uFrequency")!,
      uZRate: gl.getUniformLocation(progAscii, "uZRate")!,
      uSeed1: gl.getUniformLocation(progAscii, "uSeed1")!,
      uSeed2: gl.getUniformLocation(progAscii, "uSeed2")!,
    } as const;

    const texScene = gl.createTexture()!;
    gl.bindTexture(gl.TEXTURE_2D, texScene);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

    const fbScene = gl.createFramebuffer()!;
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbScene);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texScene, 0);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.bindTexture(gl.TEXTURE_2D, null);

    return { gl, vao, vbo, progNoise, progAscii, uNoise, uAscii, texScene, fbScene };
  }, []);

  const render = useCallback((tMs: number) => {
    const res = resRef.current; const canvas = canvasRef.current; if (!res || !canvas) return;
    const { gl, vao, progNoise, progAscii, uNoise, uAscii, texScene, fbScene } = res;
    if (startRef.current === 0) startRef.current = tMs; const t = (tMs - startRef.current) / 1000;
    const w = canvas.width, h = canvas.height;
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbScene);
    gl.viewport(0, 0, w, h);
    gl.useProgram(progNoise); gl.bindVertexArray(vao);
    gl.uniform2f(uNoise.uResolution, w, h); gl.uniform1f(uNoise.uTime, t);
    gl.uniform1f(uNoise.uNoiseStrength, noiseStrength); gl.uniform1f(uNoise.uNoiseScale, noiseScale);
    gl.uniform1f(uNoise.uSpeed, speed); gl.uniform3f(uNoise.uTint, tint[0], tint[1], tint[2]);
    gl.uniform1f(uNoise.uDistortAmp, distortAmp); gl.uniform1f(uNoise.uFrequency, frequency);
    gl.uniform1f(uNoise.uZRate, zRate); gl.uniform1f(uNoise.uBrightness, brightness);
    gl.uniform1f(uNoise.uContrast, contrast); gl.uniform1f(uNoise.uSeed1, seed1);
    gl.uniform1f(uNoise.uSeed2, seed2); gl.uniform1f(uNoise.uHue, hue);
    gl.uniform1f(uNoise.uSaturation, sat); gl.uniform1f(uNoise.uGamma, gamma);
    gl.uniform1f(uNoise.uVignette, vignette); gl.uniform1f(uNoise.uVignetteSoftness, vignetteSoftness);
    gl.uniform1f(uNoise.uGlyphSharpness, glyphSharpness); gl.uniform3f(uNoise.uBg, bg[0], bg[1], bg[2]);
    gl.drawArrays(gl.TRIANGLES, 0, 6);

    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    gl.viewport(0, 0, w, h); gl.useProgram(progAscii); gl.bindVertexArray(vao);
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, texScene);
    gl.uniform2f(uAscii.uSourceResolution, w, h); gl.uniform1i(uAscii.uTexture, 0);
    gl.uniform2f(uAscii.uResolution, w, h); gl.uniform1f(uAscii.uCell, cell);
    gl.uniform1i(uAscii.uBW, bw ? 1 : 0); gl.uniform1i(uAscii.uCharset, charset);
    gl.uniform1f(uAscii.uBrightness, brightness); gl.uniform1f(uAscii.uContrast, contrast);
    gl.uniform3f(uAscii.uTint, tint[0], tint[1], tint[2]); gl.uniform1f(uAscii.uTime, t);
    gl.uniform1f(uAscii.uDistortAmp, distortAmp); gl.uniform1f(uAscii.uFrequency, frequency);
    gl.uniform1f(uAscii.uZRate, zRate); gl.uniform1f(uAscii.uSeed1, seed1); gl.uniform1f(uAscii.uSeed2, seed2);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    rafRef.current = window.requestAnimationFrame(render);
  }, [bg, brightness, bw, cell, charset, contrast, distortAmp, frequency, gamma, glyphSharpness, hue, noiseScale, noiseStrength, sat, seed1, seed2, speed, tint, vignette, vignetteSoftness, zRate]);

  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const gl = canvas.getContext("webgl2", { antialias: false, alpha: false }); if (!gl) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = Math.floor(canvas.clientWidth * dpr); canvas.height = Math.floor(canvas.clientHeight * dpr);
    resRef.current = init(gl, canvas.width, canvas.height);
    rafRef.current = window.requestAnimationFrame(render);
    const onResize = () => {
      const c = canvasRef.current; const rr = resRef.current; if (!c || !rr) return;
      const d = Math.min(2, window.devicePixelRatio || 1); const W = Math.floor(c.clientWidth * d), H = Math.floor(c.clientHeight * d);
      if (W === c.width && H === c.height) return; c.width = W; c.height = H; gl.viewport(0, 0, W, H);
      gl.bindTexture(gl.TEXTURE_2D, rr.texScene); gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, W, H, 0, gl.RGBA, gl.UNSIGNED_BYTE, null); gl.bindTexture(gl.TEXTURE_2D, null);
    };
    window.addEventListener("resize", onResize);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); window.removeEventListener("resize", onResize); };
  }, [init, render]);

  return (
    <div className={"relative h-dvh w-full bg-black " + (className ?? "")}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};

// Copyright (c) 0xBalance — https://0xbalance.xyz