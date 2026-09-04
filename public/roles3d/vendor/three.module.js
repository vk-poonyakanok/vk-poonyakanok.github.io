/*! three.js r184 | Copyright 2010-2026 Three.js Authors | SPDX-License-Identifier: MIT | minified with esbuild, see CLAUDE.md */
import{Matrix3 as Oe,Vector2 as pt,Color as je,Vector3 as Fe,mergeUniforms as mt,CubeUVReflectionMapping as ln,Mesh as Ct,BoxGeometry as xn,ShaderMaterial as Pt,BackSide as _t,cloneUniforms as Wn,Matrix4 as kt,ColorManagement as et,SRGBTransfer as Ye,PlaneGeometry as kn,FrontSide as jt,getUnlitUniformColorSpace as hr,IntType as zn,warn as He,HalfFloatType as Nt,UnsignedByteType as xt,FloatType as yt,RGBAFormat as Lt,Plane as mr,CubeReflectionMapping as en,CubeRefractionMapping as zt,BufferGeometry as cn,OrthographicCamera as Xn,PerspectiveCamera as fn,NoToneMapping as Mt,MeshBasicMaterial as _r,error as qe,NoBlending as Ut,WebGLRenderTarget as Tt,BufferAttribute as dn,LinearSRGBColorSpace as Kn,LinearFilter as gt,CubeTexture as Yn,LinearMipmapLinearFilter as Xt,CubeCamera as gr,EquirectangularReflectionMapping as Mn,EquirectangularRefractionMapping as Tn,warnOnce as vr,Uint32BufferAttribute as Sr,Uint16BufferAttribute as Er,DataArrayTexture as qn,Vector4 as ht,DepthTexture as tn,Float32BufferAttribute as Zn,RawShaderMaterial as xr,CustomToneMapping as $n,NeutralToneMapping as Qn,AgXToneMapping as Jn,ACESFilmicToneMapping as jn,CineonToneMapping as ei,ReinhardToneMapping as ti,LinearToneMapping as ni,Data3DTexture as Mr,GreaterEqualCompare as An,LessEqualCompare as Rn,Texture as Tr,GLSL3 as ii,VSMShadowMap as nn,PCFShadowMap as un,AddOperation as Ar,MixOperation as Rr,MultiplyOperation as br,LinearTransfer as ri,UniformsUtils as Cr,DoubleSide as Dt,NormalBlending as pn,TangentSpaceNormalMap as ai,ObjectSpaceNormalMap as Pr,Layers as Lr,RGFormat as Kt,RG11_EAC_Format as bn,RED_GREEN_RGTC2_Format as Cn,MeshDepthMaterial as Ur,MeshDistanceMaterial as Dr,PCFSoftShadowMap as wr,DepthFormat as Yt,NearestFilter as Gt,CubeDepthTexture as Ir,UnsignedIntType as Ht,Frustum as oi,LessEqualDepth as si,ReverseSubtractEquation as Nr,SubtractEquation as yr,AddEquation as rn,OneMinusConstantAlphaFactor as Fr,ConstantAlphaFactor as Or,OneMinusConstantColorFactor as Br,ConstantColorFactor as Gr,OneMinusDstAlphaFactor as Hr,OneMinusDstColorFactor as Vr,OneMinusSrcAlphaFactor as Wr,OneMinusSrcColorFactor as kr,DstAlphaFactor as zr,DstColorFactor as Xr,SrcAlphaSaturateFactor as Kr,SrcAlphaFactor as Yr,SrcColorFactor as qr,OneFactor as Zr,ZeroFactor as $r,NotEqualDepth as Qr,GreaterDepth as Jr,GreaterEqualDepth as jr,EqualDepth as ea,LessDepth as ta,AlwaysDepth as na,NeverDepth as ia,CullFaceNone as ra,CullFaceBack as li,CullFaceFront as aa,CustomBlending as oa,MultiplyBlending as ci,SubtractiveBlending as fi,AdditiveBlending as di,ReversedDepthFuncs as go,MinEquation as sa,MaxEquation as la,MirroredRepeatWrapping as ca,ClampToEdgeWrapping as Pn,RepeatWrapping as fa,LinearMipmapNearestFilter as Ln,NearestMipmapLinearFilter as hn,NearestMipmapNearestFilter as da,NotEqualCompare as ua,GreaterCompare as pa,EqualCompare as ha,LessCompare as ma,AlwaysCompare as _a,NeverCompare as ga,NoColorSpace as qt,DepthStencilFormat as Zt,getByteLength as va,UnsignedInt248Type as an,UnsignedShortType as mn,createElementNS as vo,UnsignedShort4444Type as ui,UnsignedShort5551Type as pi,UnsignedInt5999Type as Sa,UnsignedInt101111Type as Ea,ByteType as xa,ShortType as Ma,AlphaFormat as Ta,RGBFormat as Aa,RedFormat as Ra,RedIntegerFormat as hi,RGIntegerFormat as mi,RGBAIntegerFormat as _i,RGB_S3TC_DXT1_Format as Un,RGBA_S3TC_DXT1_Format as Dn,RGBA_S3TC_DXT3_Format as wn,RGBA_S3TC_DXT5_Format as In,RGB_PVRTC_4BPPV1_Format as gi,RGB_PVRTC_2BPPV1_Format as vi,RGBA_PVRTC_4BPPV1_Format as Si,RGBA_PVRTC_2BPPV1_Format as Ei,RGB_ETC1_Format as xi,RGB_ETC2_Format as Mi,RGBA_ETC2_EAC_Format as Ti,R11_EAC_Format as Ai,SIGNED_R11_EAC_Format as Ri,SIGNED_RG11_EAC_Format as bi,RGBA_ASTC_4x4_Format as Ci,RGBA_ASTC_5x4_Format as Pi,RGBA_ASTC_5x5_Format as Li,RGBA_ASTC_6x5_Format as Ui,RGBA_ASTC_6x6_Format as Di,RGBA_ASTC_8x5_Format as wi,RGBA_ASTC_8x6_Format as Ii,RGBA_ASTC_8x8_Format as Ni,RGBA_ASTC_10x5_Format as yi,RGBA_ASTC_10x6_Format as Fi,RGBA_ASTC_10x8_Format as Oi,RGBA_ASTC_10x10_Format as Bi,RGBA_ASTC_12x10_Format as Gi,RGBA_ASTC_12x12_Format as Hi,RGBA_BPTC_Format as Vi,RGB_BPTC_SIGNED_Format as Wi,RGB_BPTC_UNSIGNED_Format as ki,RED_RGTC1_Format as zi,SIGNED_RED_RGTC1_Format as Xi,SIGNED_RED_GREEN_RGTC2_Format as Ki,ExternalTexture as Yi,EventDispatcher as ba,ArrayCamera as Ca,WebXRController as Nn,RAD2DEG as So,DataTexture as Pa,createCanvasElement as La,SRGBColorSpace as Ua,REVISION as Da,log as qi,WebGLCoordinateSystem as Zi,probeAsync as Eo}from"./three.core.js";import{AdditiveAnimationBlendMode as Sd,AlwaysStencilFunc as Ed,AmbientLight as xd,AnimationAction as Md,AnimationClip as Td,AnimationLoader as Ad,AnimationMixer as Rd,AnimationObjectGroup as bd,AnimationUtils as Cd,ArcCurve as Pd,ArrowHelper as Ld,AttachedBindMode as Ud,Audio as Dd,AudioAnalyser as wd,AudioContext as Id,AudioListener as Nd,AudioLoader as yd,AxesHelper as Fd,BasicDepthPacking as Od,BasicShadowMap as Bd,BatchedMesh as Gd,BezierInterpolant as Hd,Bone as Vd,BooleanKeyframeTrack as Wd,Box2 as kd,Box3 as zd,Box3Helper as Xd,BoxHelper as Kd,BufferGeometryLoader as Yd,Cache as qd,Camera as Zd,CameraHelper as $d,CanvasTexture as Qd,CapsuleGeometry as Jd,CatmullRomCurve3 as jd,CircleGeometry as eu,Clock as tu,ColorKeyframeTrack as nu,Compatibility as iu,CompressedArrayTexture as ru,CompressedCubeTexture as au,CompressedTexture as ou,CompressedTextureLoader as su,ConeGeometry as lu,Controls as cu,CubeTextureLoader as fu,CubicBezierCurve as du,CubicBezierCurve3 as uu,CubicInterpolant as pu,CullFaceFrontBack as hu,Curve as mu,CurvePath as _u,CylinderGeometry as gu,Cylindrical as vu,DataTextureLoader as Su,DataUtils as Eu,DecrementStencilOp as xu,DecrementWrapStencilOp as Mu,DefaultLoadingManager as Tu,DetachedBindMode as Au,DirectionalLight as Ru,DirectionalLightHelper as bu,DiscreteInterpolant as Cu,DodecahedronGeometry as Pu,DynamicCopyUsage as Lu,DynamicDrawUsage as Uu,DynamicReadUsage as Du,EdgesGeometry as wu,EllipseCurve as Iu,EqualStencilFunc as Nu,Euler as yu,ExtrudeGeometry as Fu,FileLoader as Ou,Float16BufferAttribute as Bu,Fog as Gu,FogExp2 as Hu,FramebufferTexture as Vu,FrustumArray as Wu,GLBufferAttribute as ku,GLSL1 as zu,GreaterEqualStencilFunc as Xu,GreaterStencilFunc as Ku,GridHelper as Yu,Group as qu,HTMLTexture as Zu,HemisphereLight as $u,HemisphereLightHelper as Qu,IcosahedronGeometry as Ju,ImageBitmapLoader as ju,ImageLoader as ep,ImageUtils as tp,IncrementStencilOp as np,IncrementWrapStencilOp as ip,InstancedBufferAttribute as rp,InstancedBufferGeometry as ap,InstancedInterleavedBuffer as op,InstancedMesh as sp,Int16BufferAttribute as lp,Int32BufferAttribute as cp,Int8BufferAttribute as fp,InterleavedBuffer as dp,InterleavedBufferAttribute as up,Interpolant as pp,InterpolateBezier as hp,InterpolateDiscrete as mp,InterpolateLinear as _p,InterpolateSmooth as gp,InterpolationSamplingMode as vp,InterpolationSamplingType as Sp,InvertStencilOp as Ep,KeepStencilOp as xp,KeyframeTrack as Mp,LOD as Tp,LatheGeometry as Ap,LessEqualStencilFunc as Rp,LessStencilFunc as bp,Light as Cp,LightProbe as Pp,Line as Lp,Line3 as Up,LineBasicMaterial as Dp,LineCurve as wp,LineCurve3 as Ip,LineDashedMaterial as Np,LineLoop as yp,LineSegments as Fp,LinearInterpolant as Op,LinearMipMapLinearFilter as Bp,LinearMipMapNearestFilter as Gp,Loader as Hp,LoaderUtils as Vp,LoadingManager as Wp,LoopOnce as kp,LoopPingPong as zp,LoopRepeat as Xp,MOUSE as Kp,Material as Yp,MaterialBlending as qp,MaterialLoader as Zp,MathUtils as $p,Matrix2 as Qp,MeshLambertMaterial as Jp,MeshMatcapMaterial as jp,MeshNormalMaterial as eh,MeshPhongMaterial as th,MeshPhysicalMaterial as nh,MeshStandardMaterial as ih,MeshToonMaterial as rh,NearestMipMapLinearFilter as ah,NearestMipMapNearestFilter as oh,NeverStencilFunc as sh,NoNormalPacking as lh,NormalAnimationBlendMode as ch,NormalGAPacking as fh,NormalRGPacking as dh,NotEqualStencilFunc as uh,NumberKeyframeTrack as ph,Object3D as hh,ObjectLoader as mh,OctahedronGeometry as _h,Path as gh,PlaneHelper as vh,PointLight as Sh,PointLightHelper as Eh,Points as xh,PointsMaterial as Mh,PolarGridHelper as Th,PolyhedronGeometry as Ah,PositionalAudio as Rh,PropertyBinding as bh,PropertyMixer as Ch,QuadraticBezierCurve as Ph,QuadraticBezierCurve3 as Lh,Quaternion as Uh,QuaternionKeyframeTrack as Dh,QuaternionLinearInterpolant as wh,RGBADepthPacking as Ih,RGBDepthPacking as Nh,RGBIntegerFormat as yh,RGDepthPacking as Fh,Ray as Oh,Raycaster as Bh,RectAreaLight as Gh,RenderTarget as Hh,RenderTarget3D as Vh,ReplaceStencilOp as Wh,RingGeometry as kh,Scene as zh,ShadowMaterial as Xh,Shape as Kh,ShapeGeometry as Yh,ShapePath as qh,ShapeUtils as Zh,Skeleton as $h,SkeletonHelper as Qh,SkinnedMesh as Jh,Source as jh,Sphere as em,SphereGeometry as tm,Spherical as nm,SphericalHarmonics3 as im,SplineCurve as rm,SpotLight as am,SpotLightHelper as om,Sprite as sm,SpriteMaterial as lm,StaticCopyUsage as cm,StaticDrawUsage as fm,StaticReadUsage as dm,StereoCamera as um,StreamCopyUsage as pm,StreamDrawUsage as hm,StreamReadUsage as mm,StringKeyframeTrack as _m,TOUCH as gm,TetrahedronGeometry as vm,TextureLoader as Sm,TextureUtils as Em,Timer as xm,TimestampQuery as Mm,TorusGeometry as Tm,TorusKnotGeometry as Am,Triangle as Rm,TriangleFanDrawMode as bm,TriangleStripDrawMode as Cm,TrianglesDrawMode as Pm,TubeGeometry as Lm,UVMapping as Um,Uint8BufferAttribute as Dm,Uint8ClampedBufferAttribute as wm,Uniform as Im,UniformsGroup as Nm,VectorKeyframeTrack as ym,VideoFrameTexture as Fm,VideoTexture as Om,WebGL3DRenderTarget as Bm,WebGLArrayRenderTarget as Gm,WebGPUCoordinateSystem as Hm,WireframeGeometry as Vm,WrapAroundEnding as Wm,ZeroCurvatureEnding as km,ZeroSlopeEnding as zm,ZeroStencilOp as Xm,getConsoleFunction as Km,setConsoleFunction as Ym}from"./three.core.js";function wa(){let e=null,n=!1,t=null,i=null;function l(a,u){t(a,u),i=e.requestAnimationFrame(l)}return{start:function(){n!==!0&&t!==null&&e!==null&&(i=e.requestAnimationFrame(l),n=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(a){t=a},setContext:function(a){e=a}}}function xo(e){const n=new WeakMap;function t(m,C){const R=m.array,W=m.usage,D=R.byteLength,p=e.createBuffer();e.bindBuffer(C,p),e.bufferData(C,R,W),m.onUploadCallback();let E;if(R instanceof Float32Array)E=e.FLOAT;else if(typeof Float16Array<"u"&&R instanceof Float16Array)E=e.HALF_FLOAT;else if(R instanceof Uint16Array)m.isFloat16BufferAttribute?E=e.HALF_FLOAT:E=e.UNSIGNED_SHORT;else if(R instanceof Int16Array)E=e.SHORT;else if(R instanceof Uint32Array)E=e.UNSIGNED_INT;else if(R instanceof Int32Array)E=e.INT;else if(R instanceof Int8Array)E=e.BYTE;else if(R instanceof Uint8Array)E=e.UNSIGNED_BYTE;else if(R instanceof Uint8ClampedArray)E=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+R);return{buffer:p,type:E,bytesPerElement:R.BYTES_PER_ELEMENT,version:m.version,size:D}}function i(m,C,R){const W=C.array,D=C.updateRanges;if(e.bindBuffer(R,m),D.length===0)e.bufferSubData(R,0,W);else{D.sort((E,L)=>E.start-L.start);let p=0;for(let E=1;E<D.length;E++){const L=D[p],H=D[E];H.start<=L.start+L.count+1?L.count=Math.max(L.count,H.start+H.count-L.start):(++p,D[p]=H)}D.length=p+1;for(let E=0,L=D.length;E<L;E++){const H=D[E];e.bufferSubData(R,H.start*W.BYTES_PER_ELEMENT,W,H.start,H.count)}C.clearUpdateRanges()}C.onUploadCallback()}function l(m){return m.isInterleavedBufferAttribute&&(m=m.data),n.get(m)}function a(m){m.isInterleavedBufferAttribute&&(m=m.data);const C=n.get(m);C&&(e.deleteBuffer(C.buffer),n.delete(m))}function u(m,C){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const W=n.get(m);(!W||W.version<m.version)&&n.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const R=n.get(m);if(R===void 0)n.set(m,t(m,C));else if(R.version<m.version){if(R.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(R.buffer,m,C),R.version=m.version}}return{get:l,remove:a,update:u}}var Mo=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,To=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ao=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ro=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bo=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Co=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Po=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lo=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uo=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Do=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wo=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Io=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,No=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yo=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fo=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Oo=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Bo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Go=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ho=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vo=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Wo=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ko=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zo=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Xo=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ko=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Yo=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qo=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zo=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$o=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qo=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jo="gl_FragColor = linearToOutputTexel( gl_FragColor );",jo=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,es=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ts=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ns=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,is=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rs=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,as=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,os=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ss=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ls=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cs=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fs=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ds=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,us=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ps=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,hs=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ms=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_s=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gs=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vs=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ss=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Es=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xs=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ms=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ts=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,As=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Rs=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bs=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cs=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ps=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ls=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Us=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ds=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ws=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Is=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ns=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ys=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fs=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Os=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bs=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gs=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hs=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vs=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ws=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ks=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zs=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xs=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ks=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ys=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qs=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zs=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$s=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qs=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Js=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,js=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,el=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tl=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nl=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,il=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rl=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,al=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ol=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sl=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ll=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cl=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fl=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dl=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ul=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pl=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hl=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ml=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_l=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gl=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,El=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xl=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ml=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tl=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Al=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rl=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cl=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pl=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ll=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ul=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dl=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,wl=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Il=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nl=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yl=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fl=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ol=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bl=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gl=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hl=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vl=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wl=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kl=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zl=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xl=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kl=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yl=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ql=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zl=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$l=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ql=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jl=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jl=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ec=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:Mo,alphahash_pars_fragment:To,alphamap_fragment:Ao,alphamap_pars_fragment:Ro,alphatest_fragment:bo,alphatest_pars_fragment:Co,aomap_fragment:Po,aomap_pars_fragment:Lo,batching_pars_vertex:Uo,batching_vertex:Do,begin_vertex:wo,beginnormal_vertex:Io,bsdfs:No,iridescence_fragment:yo,bumpmap_pars_fragment:Fo,clipping_planes_fragment:Oo,clipping_planes_pars_fragment:Bo,clipping_planes_pars_vertex:Go,clipping_planes_vertex:Ho,color_fragment:Vo,color_pars_fragment:Wo,color_pars_vertex:ko,color_vertex:zo,common:Xo,cube_uv_reflection_fragment:Ko,defaultnormal_vertex:Yo,displacementmap_pars_vertex:qo,displacementmap_vertex:Zo,emissivemap_fragment:$o,emissivemap_pars_fragment:Qo,colorspace_fragment:Jo,colorspace_pars_fragment:jo,envmap_fragment:es,envmap_common_pars_fragment:ts,envmap_pars_fragment:ns,envmap_pars_vertex:is,envmap_physical_pars_fragment:hs,envmap_vertex:rs,fog_vertex:as,fog_pars_vertex:os,fog_fragment:ss,fog_pars_fragment:ls,gradientmap_pars_fragment:cs,lightmap_pars_fragment:fs,lights_lambert_fragment:ds,lights_lambert_pars_fragment:us,lights_pars_begin:ps,lights_toon_fragment:ms,lights_toon_pars_fragment:_s,lights_phong_fragment:gs,lights_phong_pars_fragment:vs,lights_physical_fragment:Ss,lights_physical_pars_fragment:Es,lights_fragment_begin:xs,lights_fragment_maps:Ms,lights_fragment_end:Ts,lightprobes_pars_fragment:As,logdepthbuf_fragment:Rs,logdepthbuf_pars_fragment:bs,logdepthbuf_pars_vertex:Cs,logdepthbuf_vertex:Ps,map_fragment:Ls,map_pars_fragment:Us,map_particle_fragment:Ds,map_particle_pars_fragment:ws,metalnessmap_fragment:Is,metalnessmap_pars_fragment:Ns,morphinstance_vertex:ys,morphcolor_vertex:Fs,morphnormal_vertex:Os,morphtarget_pars_vertex:Bs,morphtarget_vertex:Gs,normal_fragment_begin:Hs,normal_fragment_maps:Vs,normal_pars_fragment:Ws,normal_pars_vertex:ks,normal_vertex:zs,normalmap_pars_fragment:Xs,clearcoat_normal_fragment_begin:Ks,clearcoat_normal_fragment_maps:Ys,clearcoat_pars_fragment:qs,iridescence_pars_fragment:Zs,opaque_fragment:$s,packing:Qs,premultiplied_alpha_fragment:Js,project_vertex:js,dithering_fragment:el,dithering_pars_fragment:tl,roughnessmap_fragment:nl,roughnessmap_pars_fragment:il,shadowmap_pars_fragment:rl,shadowmap_pars_vertex:al,shadowmap_vertex:ol,shadowmask_pars_fragment:sl,skinbase_vertex:ll,skinning_pars_vertex:cl,skinning_vertex:fl,skinnormal_vertex:dl,specularmap_fragment:ul,specularmap_pars_fragment:pl,tonemapping_fragment:hl,tonemapping_pars_fragment:ml,transmission_fragment:_l,transmission_pars_fragment:gl,uv_pars_fragment:vl,uv_pars_vertex:Sl,uv_vertex:El,worldpos_vertex:xl,background_vert:Ml,background_frag:Tl,backgroundCube_vert:Al,backgroundCube_frag:Rl,cube_vert:bl,cube_frag:Cl,depth_vert:Pl,depth_frag:Ll,distance_vert:Ul,distance_frag:Dl,equirect_vert:wl,equirect_frag:Il,linedashed_vert:Nl,linedashed_frag:yl,meshbasic_vert:Fl,meshbasic_frag:Ol,meshlambert_vert:Bl,meshlambert_frag:Gl,meshmatcap_vert:Hl,meshmatcap_frag:Vl,meshnormal_vert:Wl,meshnormal_frag:kl,meshphong_vert:zl,meshphong_frag:Xl,meshphysical_vert:Kl,meshphysical_frag:Yl,meshtoon_vert:ql,meshtoon_frag:Zl,points_vert:$l,points_frag:Ql,shadow_vert:Jl,shadow_frag:jl,sprite_vert:ec,sprite_frag:tc},ae={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Fe},probesMax:{value:new Fe},probesResolution:{value:new Fe}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},At={basic:{uniforms:mt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:mt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:mt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:mt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:mt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new je(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:mt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:mt([ae.points,ae.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:mt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:mt([ae.common,ae.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:mt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:mt([ae.sprite,ae.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:mt([ae.common,ae.displacementmap,{referencePosition:{value:new Fe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:mt([ae.lights,ae.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};At.physical={uniforms:mt([At.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const yn={r:0,b:0,g:0},nc=new kt,Ia=new Oe;Ia.set(-1,0,0,0,1,0,0,0,1);function ic(e,n,t,i,l,a){const u=new je(0);let m=l===!0?0:1,C,R,W=null,D=0,p=null;function E(h){let A=h.isScene===!0?h.background:null;if(A&&A.isTexture){const T=h.backgroundBlurriness>0;A=n.get(A,T)}return A}function L(h){let A=!1;const T=E(h);T===null?c(u,m):T&&T.isColor&&(c(T,1),A=!0);const B=e.xr.getEnvironmentBlendMode();B==="additive"?t.buffers.color.setClear(0,0,0,1,a):B==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(e.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function H(h,A){const T=E(A);T&&(T.isCubeTexture||T.mapping===ln)?(R===void 0&&(R=new Ct(new xn(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:Wn(At.backgroundCube.uniforms),vertexShader:At.backgroundCube.vertexShader,fragmentShader:At.backgroundCube.fragmentShader,side:_t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),R.geometry.deleteAttribute("normal"),R.geometry.deleteAttribute("uv"),R.onBeforeRender=function(B,v,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(R.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(R)),R.material.uniforms.envMap.value=T,R.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,R.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,R.material.uniforms.backgroundRotation.value.setFromMatrix4(nc.makeRotationFromEuler(A.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&R.material.uniforms.backgroundRotation.value.premultiply(Ia),R.material.toneMapped=et.getTransfer(T.colorSpace)!==Ye,(W!==T||D!==T.version||p!==e.toneMapping)&&(R.material.needsUpdate=!0,W=T,D=T.version,p=e.toneMapping),R.layers.enableAll(),h.unshift(R,R.geometry,R.material,0,0,null)):T&&T.isTexture&&(C===void 0&&(C=new Ct(new kn(2,2),new Pt({name:"BackgroundMaterial",uniforms:Wn(At.background.uniforms),vertexShader:At.background.vertexShader,fragmentShader:At.background.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),C.geometry.deleteAttribute("normal"),Object.defineProperty(C.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(C)),C.material.uniforms.t2D.value=T,C.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,C.material.toneMapped=et.getTransfer(T.colorSpace)!==Ye,T.matrixAutoUpdate===!0&&T.updateMatrix(),C.material.uniforms.uvTransform.value.copy(T.matrix),(W!==T||D!==T.version||p!==e.toneMapping)&&(C.material.needsUpdate=!0,W=T,D=T.version,p=e.toneMapping),C.layers.enableAll(),h.unshift(C,C.geometry,C.material,0,0,null))}function c(h,A){h.getRGB(yn,hr(e)),t.buffers.color.setClear(yn.r,yn.g,yn.b,A,a)}function s(){R!==void 0&&(R.geometry.dispose(),R.material.dispose(),R=void 0),C!==void 0&&(C.geometry.dispose(),C.material.dispose(),C=void 0)}return{getClearColor:function(){return u},setClearColor:function(h,A=1){u.set(h),m=A,c(u,m)},getClearAlpha:function(){return m},setClearAlpha:function(h){m=h,c(u,m)},render:L,addToRenderList:H,dispose:s}}function rc(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},l=p(null);let a=l,u=!1;function m(M,O,$,Z,I){let G=!1;const N=D(M,Z,$,O);a!==N&&(a=N,R(a.object)),G=E(M,Z,$,I),G&&L(M,Z,$,I),I!==null&&n.update(I,e.ELEMENT_ARRAY_BUFFER),(G||u)&&(u=!1,T(M,O,$,Z),I!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(I).buffer))}function C(){return e.createVertexArray()}function R(M){return e.bindVertexArray(M)}function W(M){return e.deleteVertexArray(M)}function D(M,O,$,Z){const I=Z.wireframe===!0;let G=i[O.id];G===void 0&&(G={},i[O.id]=G);const N=M.isInstancedMesh===!0?M.id:0;let Q=G[N];Q===void 0&&(Q={},G[N]=Q);let de=Q[$.id];de===void 0&&(de={},Q[$.id]=de);let ve=de[I];return ve===void 0&&(ve=p(C()),de[I]=ve),ve}function p(M){const O=[],$=[],Z=[];for(let I=0;I<t;I++)O[I]=0,$[I]=0,Z[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:$,attributeDivisors:Z,object:M,attributes:{},index:null}}function E(M,O,$,Z){const I=a.attributes,G=O.attributes;let N=0;const Q=$.getAttributes();for(const de in Q)if(Q[de].location>=0){const Ae=I[de];let xe=G[de];if(xe===void 0&&(de==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),de==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor)),Ae===void 0||Ae.attribute!==xe||xe&&Ae.data!==xe.data)return!0;N++}return a.attributesNum!==N||a.index!==Z}function L(M,O,$,Z){const I={},G=O.attributes;let N=0;const Q=$.getAttributes();for(const de in Q)if(Q[de].location>=0){let Ae=G[de];Ae===void 0&&(de==="instanceMatrix"&&M.instanceMatrix&&(Ae=M.instanceMatrix),de==="instanceColor"&&M.instanceColor&&(Ae=M.instanceColor));const xe={};xe.attribute=Ae,Ae&&Ae.data&&(xe.data=Ae.data),I[de]=xe,N++}a.attributes=I,a.attributesNum=N,a.index=Z}function H(){const M=a.newAttributes;for(let O=0,$=M.length;O<$;O++)M[O]=0}function c(M){s(M,0)}function s(M,O){const $=a.newAttributes,Z=a.enabledAttributes,I=a.attributeDivisors;$[M]=1,Z[M]===0&&(e.enableVertexAttribArray(M),Z[M]=1),I[M]!==O&&(e.vertexAttribDivisor(M,O),I[M]=O)}function h(){const M=a.newAttributes,O=a.enabledAttributes;for(let $=0,Z=O.length;$<Z;$++)O[$]!==M[$]&&(e.disableVertexAttribArray($),O[$]=0)}function A(M,O,$,Z,I,G,N){N===!0?e.vertexAttribIPointer(M,O,$,I,G):e.vertexAttribPointer(M,O,$,Z,I,G)}function T(M,O,$,Z){H();const I=Z.attributes,G=$.getAttributes(),N=O.defaultAttributeValues;for(const Q in G){const de=G[Q];if(de.location>=0){let ve=I[Q];if(ve===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),ve!==void 0){const Ae=ve.normalized,xe=ve.itemSize,Ve=n.get(ve);if(Ve===void 0)continue;const Ze=Ve.buffer,we=Ve.type,K=Ve.bytesPerElement,ce=we===e.INT||we===e.UNSIGNED_INT||ve.gpuType===zn;if(ve.isInterleavedBufferAttribute){const te=ve.data,Me=te.stride,be=ve.offset;if(te.isInstancedInterleavedBuffer){for(let Te=0;Te<de.locationSize;Te++)s(de.location+Te,te.meshPerAttribute);M.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Te=0;Te<de.locationSize;Te++)c(de.location+Te);e.bindBuffer(e.ARRAY_BUFFER,Ze);for(let Te=0;Te<de.locationSize;Te++)A(de.location+Te,xe/de.locationSize,we,Ae,Me*K,(be+xe/de.locationSize*Te)*K,ce)}else{if(ve.isInstancedBufferAttribute){for(let te=0;te<de.locationSize;te++)s(de.location+te,ve.meshPerAttribute);M.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let te=0;te<de.locationSize;te++)c(de.location+te);e.bindBuffer(e.ARRAY_BUFFER,Ze);for(let te=0;te<de.locationSize;te++)A(de.location+te,xe/de.locationSize,we,Ae,xe*K,xe/de.locationSize*te*K,ce)}}else if(N!==void 0){const Ae=N[Q];if(Ae!==void 0)switch(Ae.length){case 2:e.vertexAttrib2fv(de.location,Ae);break;case 3:e.vertexAttrib3fv(de.location,Ae);break;case 4:e.vertexAttrib4fv(de.location,Ae);break;default:e.vertexAttrib1fv(de.location,Ae)}}}}h()}function B(){g();for(const M in i){const O=i[M];for(const $ in O){const Z=O[$];for(const I in Z){const G=Z[I];for(const N in G)W(G[N].object),delete G[N];delete Z[I]}}delete i[M]}}function v(M){if(i[M.id]===void 0)return;const O=i[M.id];for(const $ in O){const Z=O[$];for(const I in Z){const G=Z[I];for(const N in G)W(G[N].object),delete G[N];delete Z[I]}}delete i[M.id]}function w(M){for(const O in i){const $=i[O];for(const Z in $){const I=$[Z];if(I[M.id]===void 0)continue;const G=I[M.id];for(const N in G)W(G[N].object),delete G[N];delete I[M.id]}}}function d(M){for(const O in i){const $=i[O],Z=M.isInstancedMesh===!0?M.id:0,I=$[Z];if(I!==void 0){for(const G in I){const N=I[G];for(const Q in N)W(N[Q].object),delete N[Q];delete I[G]}delete $[Z],Object.keys($).length===0&&delete i[O]}}}function g(){F(),u=!0,a!==l&&(a=l,R(a.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:g,resetDefaultState:F,dispose:B,releaseStatesOfGeometry:v,releaseStatesOfObject:d,releaseStatesOfProgram:w,initAttributes:H,enableAttribute:c,disableUnusedAttributes:h}}function ac(e,n,t){let i;function l(C){i=C}function a(C,R){e.drawArrays(i,C,R),t.update(R,i,1)}function u(C,R,W){W!==0&&(e.drawArraysInstanced(i,C,R,W),t.update(R,i,W))}function m(C,R,W){if(W===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,C,0,R,0,W);let p=0;for(let E=0;E<W;E++)p+=R[E];t.update(p,i,1)}this.setMode=l,this.render=a,this.renderInstances=u,this.renderMultiDraw=m}function oc(e,n,t,i){let l;function a(){if(l!==void 0)return l;if(n.has("EXT_texture_filter_anisotropic")===!0){const w=n.get("EXT_texture_filter_anisotropic");l=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function u(w){return!(w!==Lt&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(w){const d=w===Nt&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(w!==xt&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==yt&&!d)}function C(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let R=t.precision!==void 0?t.precision:"highp";const W=C(R);W!==R&&(He("WebGLRenderer:",R,"not supported, using",W,"instead."),R=W);const D=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control");t.reversedDepthBuffer===!0&&p===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),L=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),H=e.getParameter(e.MAX_TEXTURE_SIZE),c=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),s=e.getParameter(e.MAX_VERTEX_ATTRIBS),h=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),A=e.getParameter(e.MAX_VARYING_VECTORS),T=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),B=e.getParameter(e.MAX_SAMPLES),v=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:C,textureFormatReadable:u,textureTypeReadable:m,precision:R,logarithmicDepthBuffer:D,reversedDepthBuffer:p,maxTextures:E,maxVertexTextures:L,maxTextureSize:H,maxCubemapSize:c,maxAttributes:s,maxVertexUniforms:h,maxVaryings:A,maxFragmentUniforms:T,maxSamples:B,samples:v}}function sc(e){const n=this;let t=null,i=0,l=!1,a=!1;const u=new mr,m=new Oe,C={value:null,needsUpdate:!1};this.uniform=C,this.numPlanes=0,this.numIntersection=0,this.init=function(D,p){const E=D.length!==0||p||i!==0||l;return l=p,i=D.length,E},this.beginShadows=function(){a=!0,W(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(D,p){t=W(D,p,0)},this.setState=function(D,p,E){const L=D.clippingPlanes,H=D.clipIntersection,c=D.clipShadows,s=e.get(D);if(!l||L===null||L.length===0||a&&!c)a?W(null):R();else{const h=a?0:i,A=h*4;let T=s.clippingState||null;C.value=T,T=W(L,p,A,E);for(let B=0;B!==A;++B)T[B]=t[B];s.clippingState=T,this.numIntersection=H?this.numPlanes:0,this.numPlanes+=h}};function R(){C.value!==t&&(C.value=t,C.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function W(D,p,E,L){const H=D!==null?D.length:0;let c=null;if(H!==0){if(c=C.value,L!==!0||c===null){const s=E+H*4,h=p.matrixWorldInverse;m.getNormalMatrix(h),(c===null||c.length<s)&&(c=new Float32Array(s));for(let A=0,T=E;A!==H;++A,T+=4)u.copy(D[A]).applyMatrix4(h,m),u.normal.toArray(c,T),c[T+3]=u.constant}C.value=c,C.needsUpdate=!0}return n.numPlanes=H,n.numIntersection=0,c}}const Vt=4,Na=[.125,.215,.35,.446,.526,.582],$t=20,lc=256,_n=new Xn,ya=new je;let $i=null,Qi=0,Ji=0,ji=!1;const cc=new Fe;class er{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(n,t=0,i=.1,l=100,a={}){const{size:u=256,position:m=cc}=a;$i=this._renderer.getRenderTarget(),Qi=this._renderer.getActiveCubeFace(),Ji=this._renderer.getActiveMipmapLevel(),ji=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const C=this._allocateTargets();return C.depthBuffer=!0,this._sceneToCubeUV(n,i,l,C,m),t>0&&this._blur(C,0,0,t),this._applyPMREM(C),this._cleanup(C),C}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodMeshes.length;n++)this._lodMeshes[n].geometry.dispose()}_cleanup(n){this._renderer.setRenderTarget($i,Qi,Ji),this._renderer.xr.enabled=ji,n.scissorTest=!1,on(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===en||n.mapping===zt?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),$i=this._renderer.getRenderTarget(),Qi=this._renderer.getActiveCubeFace(),Ji=this._renderer.getActiveMipmapLevel(),ji=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:gt,minFilter:gt,generateMipmaps:!1,type:Nt,format:Lt,colorSpace:Kn,depthBuffer:!1},l=Fa(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fa(n,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=fc(a)),this._blurMaterial=uc(a,n,t),this._ggxMaterial=dc(a,n,t)}return l}_compileMaterial(n){const t=new Ct(new cn,n);this._renderer.compile(t,_n)}_sceneToCubeUV(n,t,i,l,a){const C=new fn(90,1,t,i),R=[1,-1,1,1,1,1],W=[1,1,1,-1,-1,-1],D=this._renderer,p=D.autoClear,E=D.toneMapping;D.getClearColor(ya),D.toneMapping=Mt,D.autoClear=!1,D.state.buffers.depth.getReversed()&&(D.setRenderTarget(l),D.clearDepth(),D.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ct(new xn,new _r({name:"PMREM.Background",side:_t,depthWrite:!1,depthTest:!1})));const H=this._backgroundBox,c=H.material;let s=!1;const h=n.background;h?h.isColor&&(c.color.copy(h),n.background=null,s=!0):(c.color.copy(ya),s=!0);for(let A=0;A<6;A++){const T=A%3;T===0?(C.up.set(0,R[A],0),C.position.set(a.x,a.y,a.z),C.lookAt(a.x+W[A],a.y,a.z)):T===1?(C.up.set(0,0,R[A]),C.position.set(a.x,a.y,a.z),C.lookAt(a.x,a.y+W[A],a.z)):(C.up.set(0,R[A],0),C.position.set(a.x,a.y,a.z),C.lookAt(a.x,a.y,a.z+W[A]));const B=this._cubeSize;on(l,T*B,A>2?B:0,B,B),D.setRenderTarget(l),s&&D.render(H,C),D.render(n,C)}D.toneMapping=E,D.autoClear=p,n.background=h}_textureToCubeUV(n,t){const i=this._renderer,l=n.mapping===en||n.mapping===zt;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ba()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oa());const a=l?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=a;const m=a.uniforms;m.envMap.value=n;const C=this._cubeSize;on(t,0,0,3*C,2*C),i.setRenderTarget(t),i.render(u,_n)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const l=this._lodMeshes.length;for(let a=1;a<l;a++)this._applyGGXFilter(n,a-1,a);t.autoClear=i}_applyGGXFilter(n,t,i){const l=this._renderer,a=this._pingPongRenderTarget,u=this._ggxMaterial,m=this._lodMeshes[i];m.material=u;const C=u.uniforms,R=i/(this._lodMeshes.length-1),W=t/(this._lodMeshes.length-1),D=Math.sqrt(R*R-W*W),p=0+R*1.25,E=D*p,{_lodMax:L}=this,H=this._sizeLods[i],c=3*H*(i>L-Vt?i-L+Vt:0),s=4*(this._cubeSize-H);C.envMap.value=n.texture,C.roughness.value=E,C.mipInt.value=L-t,on(a,c,s,3*H,2*H),l.setRenderTarget(a),l.render(m,_n),C.envMap.value=a.texture,C.roughness.value=0,C.mipInt.value=L-i,on(n,c,s,3*H,2*H),l.setRenderTarget(n),l.render(m,_n)}_blur(n,t,i,l,a){const u=this._pingPongRenderTarget;this._halfBlur(n,u,t,i,l,"latitudinal",a),this._halfBlur(u,n,i,i,l,"longitudinal",a)}_halfBlur(n,t,i,l,a,u,m){const C=this._renderer,R=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&qe("blur direction must be either latitudinal or longitudinal!");const W=3,D=this._lodMeshes[l];D.material=R;const p=R.uniforms,E=this._sizeLods[i]-1,L=isFinite(a)?Math.PI/(2*E):2*Math.PI/(2*$t-1),H=a/L,c=isFinite(a)?1+Math.floor(W*H):$t;c>$t&&He(`sigmaRadians, ${a}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${$t}`);const s=[];let h=0;for(let w=0;w<$t;++w){const d=w/H,g=Math.exp(-d*d/2);s.push(g),w===0?h+=g:w<c&&(h+=2*g)}for(let w=0;w<s.length;w++)s[w]=s[w]/h;p.envMap.value=n.texture,p.samples.value=c,p.weights.value=s,p.latitudinal.value=u==="latitudinal",m&&(p.poleAxis.value=m);const{_lodMax:A}=this;p.dTheta.value=L,p.mipInt.value=A-i;const T=this._sizeLods[l],B=3*T*(l>A-Vt?l-A+Vt:0),v=4*(this._cubeSize-T);on(t,B,v,3*T,2*T),C.setRenderTarget(t),C.render(D,_n)}}function fc(e){const n=[],t=[],i=[];let l=e;const a=e-Vt+1+Na.length;for(let u=0;u<a;u++){const m=Math.pow(2,l);n.push(m);let C=1/m;u>e-Vt?C=Na[u-e+Vt-1]:u===0&&(C=0),t.push(C);const R=1/(m-2),W=-R,D=1+R,p=[W,W,D,W,D,D,W,W,D,D,W,D],E=6,L=6,H=3,c=2,s=1,h=new Float32Array(H*L*E),A=new Float32Array(c*L*E),T=new Float32Array(s*L*E);for(let v=0;v<E;v++){const w=v%3*2/3-1,d=v>2?0:-1,g=[w,d,0,w+2/3,d,0,w+2/3,d+1,0,w,d,0,w+2/3,d+1,0,w,d+1,0];h.set(g,H*L*v),A.set(p,c*L*v);const F=[v,v,v,v,v,v];T.set(F,s*L*v)}const B=new cn;B.setAttribute("position",new dn(h,H)),B.setAttribute("uv",new dn(A,c)),B.setAttribute("faceIndex",new dn(T,s)),i.push(new Ct(B,null)),l>Vt&&l--}return{lodMeshes:i,sizeLods:n,sigmas:t}}function Fa(e,n,t){const i=new Tt(e,n,t);return i.texture.mapping=ln,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function on(e,n,t,i,l){e.viewport.set(n,t,i,l),e.scissor.set(n,t,i,l)}function dc(e,n,t){return new Pt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lc,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fn(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ut,depthTest:!1,depthWrite:!1})}function uc(e,n,t){const i=new Float32Array($t),l=new Fe(0,1,0);return new Pt({name:"SphericalGaussianBlur",defines:{n:$t,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Fn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ut,depthTest:!1,depthWrite:!1})}function Oa(){return new Pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ut,depthTest:!1,depthWrite:!1})}function Ba(){return new Pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ut,depthTest:!1,depthWrite:!1})}function Fn(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class tr extends Tt{constructor(n=1,t={}){super(n,n,t),this.isWebGLCubeRenderTarget=!0;const i={width:n,height:n,depth:1},l=[i,i,i,i,i,i];this.texture=new Yn(l),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(n,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new xn(5,5,5),a=new Pt({name:"CubemapFromEquirect",uniforms:Wn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_t,blending:Ut});a.uniforms.tEquirect.value=t;const u=new Ct(l,a),m=t.minFilter;return t.minFilter===Xt&&(t.minFilter=gt),new gr(1,10,this).update(n,u),t.minFilter=m,u.geometry.dispose(),u.material.dispose(),this}clear(n,t=!0,i=!0,l=!0){const a=n.getRenderTarget();for(let u=0;u<6;u++)n.setRenderTarget(this,u),n.clear(t,i,l);n.setRenderTarget(a)}}function pc(e){let n=new WeakMap,t=new WeakMap,i=null;function l(p,E=!1){return p==null?null:E?u(p):a(p)}function a(p){if(p&&p.isTexture){const E=p.mapping;if(E===Mn||E===Tn)if(n.has(p)){const L=n.get(p).texture;return m(L,p.mapping)}else{const L=p.image;if(L&&L.height>0){const H=new tr(L.height);return H.fromEquirectangularTexture(e,p),n.set(p,H),p.addEventListener("dispose",R),m(H.texture,p.mapping)}else return null}}return p}function u(p){if(p&&p.isTexture){const E=p.mapping,L=E===Mn||E===Tn,H=E===en||E===zt;if(L||H){let c=t.get(p);const s=c!==void 0?c.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==s)return i===null&&(i=new er(e)),c=L?i.fromEquirectangular(p,c):i.fromCubemap(p,c),c.texture.pmremVersion=p.pmremVersion,t.set(p,c),c.texture;if(c!==void 0)return c.texture;{const h=p.image;return L&&h&&h.height>0||H&&h&&C(h)?(i===null&&(i=new er(e)),c=L?i.fromEquirectangular(p):i.fromCubemap(p),c.texture.pmremVersion=p.pmremVersion,t.set(p,c),p.addEventListener("dispose",W),c.texture):null}}}return p}function m(p,E){return E===Mn?p.mapping=en:E===Tn&&(p.mapping=zt),p}function C(p){let E=0;const L=6;for(let H=0;H<L;H++)p[H]!==void 0&&E++;return E===L}function R(p){const E=p.target;E.removeEventListener("dispose",R);const L=n.get(E);L!==void 0&&(n.delete(E),L.dispose())}function W(p){const E=p.target;E.removeEventListener("dispose",W);const L=t.get(E);L!==void 0&&(t.delete(E),L.dispose())}function D(){n=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:l,dispose:D}}function hc(e){const n={};function t(i){if(n[i]!==void 0)return n[i];const l=e.getExtension(i);return n[i]=l,l}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const l=t(i);return l===null&&vr("WebGLRenderer: "+i+" extension not supported."),l}}}function mc(e,n,t,i){const l={},a=new WeakMap;function u(D){const p=D.target;p.index!==null&&n.remove(p.index);for(const L in p.attributes)n.remove(p.attributes[L]);p.removeEventListener("dispose",u),delete l[p.id];const E=a.get(p);E&&(n.remove(E),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function m(D,p){return l[p.id]===!0||(p.addEventListener("dispose",u),l[p.id]=!0,t.memory.geometries++),p}function C(D){const p=D.attributes;for(const E in p)n.update(p[E],e.ARRAY_BUFFER)}function R(D){const p=[],E=D.index,L=D.attributes.position;let H=0;if(L===void 0)return;if(E!==null){const h=E.array;H=E.version;for(let A=0,T=h.length;A<T;A+=3){const B=h[A+0],v=h[A+1],w=h[A+2];p.push(B,v,v,w,w,B)}}else{const h=L.array;H=L.version;for(let A=0,T=h.length/3-1;A<T;A+=3){const B=A+0,v=A+1,w=A+2;p.push(B,v,v,w,w,B)}}const c=new(L.count>=65535?Sr:Er)(p,1);c.version=H;const s=a.get(D);s&&n.remove(s),a.set(D,c)}function W(D){const p=a.get(D);if(p){const E=D.index;E!==null&&p.version<E.version&&R(D)}else R(D);return a.get(D)}return{get:m,update:C,getWireframeAttribute:W}}function _c(e,n,t){let i;function l(D){i=D}let a,u;function m(D){a=D.type,u=D.bytesPerElement}function C(D,p){e.drawElements(i,p,a,D*u),t.update(p,i,1)}function R(D,p,E){E!==0&&(e.drawElementsInstanced(i,p,a,D*u,E),t.update(p,i,E))}function W(D,p,E){if(E===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,D,0,E);let H=0;for(let c=0;c<E;c++)H+=p[c];t.update(H,i,1)}this.setMode=l,this.setIndex=m,this.render=C,this.renderInstances=R,this.renderMultiDraw=W}function gc(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,u,m){switch(t.calls++,u){case e.TRIANGLES:t.triangles+=m*(a/3);break;case e.LINES:t.lines+=m*(a/2);break;case e.LINE_STRIP:t.lines+=m*(a-1);break;case e.LINE_LOOP:t.lines+=m*a;break;case e.POINTS:t.points+=m*a;break;default:qe("WebGLInfo: Unknown draw mode:",u);break}}function l(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:l,update:i}}function vc(e,n,t){const i=new WeakMap,l=new ht;function a(u,m,C){const R=u.morphTargetInfluences,W=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,D=W!==void 0?W.length:0;let p=i.get(m);if(p===void 0||p.count!==D){let F=function(){d.dispose(),i.delete(m),m.removeEventListener("dispose",F)};var E=F;p!==void 0&&p.texture.dispose();const L=m.morphAttributes.position!==void 0,H=m.morphAttributes.normal!==void 0,c=m.morphAttributes.color!==void 0,s=m.morphAttributes.position||[],h=m.morphAttributes.normal||[],A=m.morphAttributes.color||[];let T=0;L===!0&&(T=1),H===!0&&(T=2),c===!0&&(T=3);let B=m.attributes.position.count*T,v=1;B>n.maxTextureSize&&(v=Math.ceil(B/n.maxTextureSize),B=n.maxTextureSize);const w=new Float32Array(B*v*4*D),d=new qn(w,B,v,D);d.type=yt,d.needsUpdate=!0;const g=T*4;for(let M=0;M<D;M++){const O=s[M],$=h[M],Z=A[M],I=B*v*4*M;for(let G=0;G<O.count;G++){const N=G*g;L===!0&&(l.fromBufferAttribute(O,G),w[I+N+0]=l.x,w[I+N+1]=l.y,w[I+N+2]=l.z,w[I+N+3]=0),H===!0&&(l.fromBufferAttribute($,G),w[I+N+4]=l.x,w[I+N+5]=l.y,w[I+N+6]=l.z,w[I+N+7]=0),c===!0&&(l.fromBufferAttribute(Z,G),w[I+N+8]=l.x,w[I+N+9]=l.y,w[I+N+10]=l.z,w[I+N+11]=Z.itemSize===4?l.w:1)}}p={count:D,texture:d,size:new pt(B,v)},i.set(m,p),m.addEventListener("dispose",F)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)C.getUniforms().setValue(e,"morphTexture",u.morphTexture,t);else{let L=0;for(let c=0;c<R.length;c++)L+=R[c];const H=m.morphTargetsRelative?1:1-L;C.getUniforms().setValue(e,"morphTargetBaseInfluence",H),C.getUniforms().setValue(e,"morphTargetInfluences",R)}C.getUniforms().setValue(e,"morphTargetsTexture",p.texture,t),C.getUniforms().setValue(e,"morphTargetsTextureSize",p.size)}return{update:a}}function Sc(e,n,t,i,l){let a=new WeakMap;function u(R){const W=l.render.frame,D=R.geometry,p=n.get(R,D);if(a.get(p)!==W&&(n.update(p),a.set(p,W)),R.isInstancedMesh&&(R.hasEventListener("dispose",C)===!1&&R.addEventListener("dispose",C),a.get(R)!==W&&(t.update(R.instanceMatrix,e.ARRAY_BUFFER),R.instanceColor!==null&&t.update(R.instanceColor,e.ARRAY_BUFFER),a.set(R,W))),R.isSkinnedMesh){const E=R.skeleton;a.get(E)!==W&&(E.update(),a.set(E,W))}return p}function m(){a=new WeakMap}function C(R){const W=R.target;W.removeEventListener("dispose",C),i.releaseStatesOfObject(W),t.remove(W.instanceMatrix),W.instanceColor!==null&&t.remove(W.instanceColor)}return{update:u,dispose:m}}const Ec={[ni]:"LINEAR_TONE_MAPPING",[ti]:"REINHARD_TONE_MAPPING",[ei]:"CINEON_TONE_MAPPING",[jn]:"ACES_FILMIC_TONE_MAPPING",[Jn]:"AGX_TONE_MAPPING",[Qn]:"NEUTRAL_TONE_MAPPING",[$n]:"CUSTOM_TONE_MAPPING"};function xc(e,n,t,i,l){const a=new Tt(n,t,{type:e,depthBuffer:i,stencilBuffer:l,depthTexture:i?new tn(n,t):void 0}),u=new Tt(n,t,{type:Nt,depthBuffer:!1,stencilBuffer:!1}),m=new cn;m.setAttribute("position",new Zn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Zn([0,2,0,0,2,0],2));const C=new xr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),R=new Ct(m,C),W=new Xn(-1,1,1,-1,0,1);let D=null,p=null,E=!1,L,H=null,c=[],s=!1;this.setSize=function(h,A){a.setSize(h,A),u.setSize(h,A);for(let T=0;T<c.length;T++){const B=c[T];B.setSize&&B.setSize(h,A)}},this.setEffects=function(h){c=h,s=c.length>0&&c[0].isRenderPass===!0;const A=a.width,T=a.height;for(let B=0;B<c.length;B++){const v=c[B];v.setSize&&v.setSize(A,T)}},this.begin=function(h,A){if(E||h.toneMapping===Mt&&c.length===0)return!1;if(H=A,A!==null){const T=A.width,B=A.height;(a.width!==T||a.height!==B)&&this.setSize(T,B)}return s===!1&&h.setRenderTarget(a),L=h.toneMapping,h.toneMapping=Mt,!0},this.hasRenderPass=function(){return s},this.end=function(h,A){h.toneMapping=L,E=!0;let T=a,B=u;for(let v=0;v<c.length;v++){const w=c[v];if(w.enabled!==!1&&(w.render(h,B,T,A),w.needsSwap!==!1)){const d=T;T=B,B=d}}if(D!==h.outputColorSpace||p!==h.toneMapping){D=h.outputColorSpace,p=h.toneMapping,C.defines={},et.getTransfer(D)===Ye&&(C.defines.SRGB_TRANSFER="");const v=Ec[p];v&&(C.defines[v]=""),C.needsUpdate=!0}C.uniforms.tDiffuse.value=T.texture,h.setRenderTarget(H),h.render(R,W),H=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),u.dispose(),m.dispose(),C.dispose()}}const Ga=new Tr,nr=new tn(1,1),Ha=new qn,Va=new Mr,Wa=new Yn,ka=[],za=[],Xa=new Float32Array(16),Ka=new Float32Array(9),Ya=new Float32Array(4);function sn(e,n,t){const i=e[0];if(i<=0||i>0)return e;const l=n*t;let a=ka[l];if(a===void 0&&(a=new Float32Array(l),ka[l]=a),n!==0){i.toArray(a,0);for(let u=1,m=0;u!==n;++u)m+=t,e[u].toArray(a,m)}return a}function ft(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function dt(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function On(e,n){let t=za[n];t===void 0&&(t=new Int32Array(n),za[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Mc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function Tc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ft(t,n))return;e.uniform2fv(this.addr,n),dt(t,n)}}function Ac(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(ft(t,n))return;e.uniform3fv(this.addr,n),dt(t,n)}}function Rc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ft(t,n))return;e.uniform4fv(this.addr,n),dt(t,n)}}function bc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ft(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),dt(t,n)}else{if(ft(t,i))return;Ya.set(i),e.uniformMatrix2fv(this.addr,!1,Ya),dt(t,i)}}function Cc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ft(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),dt(t,n)}else{if(ft(t,i))return;Ka.set(i),e.uniformMatrix3fv(this.addr,!1,Ka),dt(t,i)}}function Pc(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(ft(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),dt(t,n)}else{if(ft(t,i))return;Xa.set(i),e.uniformMatrix4fv(this.addr,!1,Xa),dt(t,i)}}function Lc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Uc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ft(t,n))return;e.uniform2iv(this.addr,n),dt(t,n)}}function Dc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ft(t,n))return;e.uniform3iv(this.addr,n),dt(t,n)}}function wc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ft(t,n))return;e.uniform4iv(this.addr,n),dt(t,n)}}function Ic(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function Nc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(ft(t,n))return;e.uniform2uiv(this.addr,n),dt(t,n)}}function yc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(ft(t,n))return;e.uniform3uiv(this.addr,n),dt(t,n)}}function Fc(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(ft(t,n))return;e.uniform4uiv(this.addr,n),dt(t,n)}}function Oc(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l);let a;this.type===e.SAMPLER_2D_SHADOW?(nr.compareFunction=t.isReversedDepthBuffer()?An:Rn,a=nr):a=Ga,t.setTexture2D(n||a,l)}function Bc(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),t.setTexture3D(n||Va,l)}function Gc(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),t.setTextureCube(n||Wa,l)}function Hc(e,n,t){const i=this.cache,l=t.allocateTextureUnit();i[0]!==l&&(e.uniform1i(this.addr,l),i[0]=l),t.setTexture2DArray(n||Ha,l)}function Vc(e){switch(e){case 5126:return Mc;case 35664:return Tc;case 35665:return Ac;case 35666:return Rc;case 35674:return bc;case 35675:return Cc;case 35676:return Pc;case 5124:case 35670:return Lc;case 35667:case 35671:return Uc;case 35668:case 35672:return Dc;case 35669:case 35673:return wc;case 5125:return Ic;case 36294:return Nc;case 36295:return yc;case 36296:return Fc;case 35678:case 36198:case 36298:case 36306:case 35682:return Oc;case 35679:case 36299:case 36307:return Bc;case 35680:case 36300:case 36308:case 36293:return Gc;case 36289:case 36303:case 36311:case 36292:return Hc}}function Wc(e,n){e.uniform1fv(this.addr,n)}function kc(e,n){const t=sn(n,this.size,2);e.uniform2fv(this.addr,t)}function zc(e,n){const t=sn(n,this.size,3);e.uniform3fv(this.addr,t)}function Xc(e,n){const t=sn(n,this.size,4);e.uniform4fv(this.addr,t)}function Kc(e,n){const t=sn(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function Yc(e,n){const t=sn(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function qc(e,n){const t=sn(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Zc(e,n){e.uniform1iv(this.addr,n)}function $c(e,n){e.uniform2iv(this.addr,n)}function Qc(e,n){e.uniform3iv(this.addr,n)}function Jc(e,n){e.uniform4iv(this.addr,n)}function jc(e,n){e.uniform1uiv(this.addr,n)}function ef(e,n){e.uniform2uiv(this.addr,n)}function tf(e,n){e.uniform3uiv(this.addr,n)}function nf(e,n){e.uniform4uiv(this.addr,n)}function rf(e,n,t){const i=this.cache,l=n.length,a=On(t,l);ft(i,a)||(e.uniform1iv(this.addr,a),dt(i,a));let u;this.type===e.SAMPLER_2D_SHADOW?u=nr:u=Ga;for(let m=0;m!==l;++m)t.setTexture2D(n[m]||u,a[m])}function af(e,n,t){const i=this.cache,l=n.length,a=On(t,l);ft(i,a)||(e.uniform1iv(this.addr,a),dt(i,a));for(let u=0;u!==l;++u)t.setTexture3D(n[u]||Va,a[u])}function of(e,n,t){const i=this.cache,l=n.length,a=On(t,l);ft(i,a)||(e.uniform1iv(this.addr,a),dt(i,a));for(let u=0;u!==l;++u)t.setTextureCube(n[u]||Wa,a[u])}function sf(e,n,t){const i=this.cache,l=n.length,a=On(t,l);ft(i,a)||(e.uniform1iv(this.addr,a),dt(i,a));for(let u=0;u!==l;++u)t.setTexture2DArray(n[u]||Ha,a[u])}function lf(e){switch(e){case 5126:return Wc;case 35664:return kc;case 35665:return zc;case 35666:return Xc;case 35674:return Kc;case 35675:return Yc;case 35676:return qc;case 5124:case 35670:return Zc;case 35667:case 35671:return $c;case 35668:case 35672:return Qc;case 35669:case 35673:return Jc;case 5125:return jc;case 36294:return ef;case 36295:return tf;case 36296:return nf;case 35678:case 36198:case 36298:case 36306:case 35682:return rf;case 35679:case 36299:case 36307:return af;case 35680:case 36300:case 36308:case 36293:return of;case 36289:case 36303:case 36311:case 36292:return sf}}class cf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Vc(t.type)}}class ff{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lf(t.type)}}class df{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const l=this.seq;for(let a=0,u=l.length;a!==u;++a){const m=l[a];m.setValue(n,t[m.id],i)}}}const ir=/(\w+)(\])?(\[|\.)?/g;function qa(e,n){e.seq.push(n),e.map[n.id]=n}function uf(e,n,t){const i=e.name,l=i.length;for(ir.lastIndex=0;;){const a=ir.exec(i),u=ir.lastIndex;let m=a[1];const C=a[2]==="]",R=a[3];if(C&&(m=m|0),R===void 0||R==="["&&u+2===l){qa(t,R===void 0?new cf(m,e,n):new ff(m,e,n));break}else{let D=t.map[m];D===void 0&&(D=new df(m),qa(t,D)),t=D}}}class Bn{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let u=0;u<i;++u){const m=n.getActiveUniform(t,u),C=n.getUniformLocation(t,m.name);uf(m,C,this)}const l=[],a=[];for(const u of this.seq)u.type===n.SAMPLER_2D_SHADOW||u.type===n.SAMPLER_CUBE_SHADOW||u.type===n.SAMPLER_2D_ARRAY_SHADOW?l.push(u):a.push(u);l.length>0&&(this.seq=l.concat(a))}setValue(n,t,i,l){const a=this.map[t];a!==void 0&&a.setValue(n,i,l)}setOptional(n,t,i){const l=t[i];l!==void 0&&this.setValue(n,i,l)}static upload(n,t,i,l){for(let a=0,u=t.length;a!==u;++a){const m=t[a],C=i[m.id];C.needsUpdate!==!1&&m.setValue(n,C.value,l)}}static seqWithValue(n,t){const i=[];for(let l=0,a=n.length;l!==a;++l){const u=n[l];u.id in t&&i.push(u)}return i}}function Za(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const pf=37297;let hf=0;function mf(e,n){const t=e.split(`
`),i=[],l=Math.max(n-6,0),a=Math.min(n+6,t.length);for(let u=l;u<a;u++){const m=u+1;i.push(`${m===n?">":" "} ${m}: ${t[u]}`)}return i.join(`
`)}const $a=new Oe;function _f(e){et._getMatrix($a,et.workingColorSpace,e);const n=`mat3( ${$a.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(e)){case ri:return[n,"LinearTransferOETF"];case Ye:return[n,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function Qa(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),a=(e.getShaderInfoLog(n)||"").trim();if(i&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const m=parseInt(u[1]);return t.toUpperCase()+`

`+a+`

`+mf(e.getShaderSource(n),m)}else return a}function gf(e,n){const t=_f(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const vf={[ni]:"Linear",[ti]:"Reinhard",[ei]:"Cineon",[jn]:"ACESFilmic",[Jn]:"AgX",[Qn]:"Neutral",[$n]:"Custom"};function Sf(e,n){const t=vf[n];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",n),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gn=new Fe;function Ef(){et.getLuminanceCoefficients(Gn);const e=Gn.x.toFixed(4),n=Gn.y.toFixed(4),t=Gn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gn).join(`
`)}function Mf(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Tf(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let l=0;l<i;l++){const a=e.getActiveAttrib(n,l),u=a.name;let m=1;a.type===e.FLOAT_MAT2&&(m=2),a.type===e.FLOAT_MAT3&&(m=3),a.type===e.FLOAT_MAT4&&(m=4),t[u]={type:a.type,location:e.getAttribLocation(n,u),locationSize:m}}return t}function gn(e){return e!==""}function Ja(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function ja(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Af=/^[ \t]*#include +<([\w\d./]+)>/gm;function rr(e){return e.replace(Af,bf)}const Rf=new Map;function bf(e,n){let t=Ue[n];if(t===void 0){const i=Rf.get(n);if(i!==void 0)t=Ue[i],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return rr(t)}const Cf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eo(e){return e.replace(Cf,Pf)}function Pf(e,n,t,i){let l="";for(let a=parseInt(n);a<parseInt(t);a++)l+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return l}function to(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}const Lf={[un]:"SHADOWMAP_TYPE_PCF",[nn]:"SHADOWMAP_TYPE_VSM"};function Uf(e){return Lf[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Df={[en]:"ENVMAP_TYPE_CUBE",[zt]:"ENVMAP_TYPE_CUBE",[ln]:"ENVMAP_TYPE_CUBE_UV"};function wf(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":Df[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const If={[zt]:"ENVMAP_MODE_REFRACTION"};function Nf(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":If[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yf={[br]:"ENVMAP_BLENDING_MULTIPLY",[Rr]:"ENVMAP_BLENDING_MIX",[Ar]:"ENVMAP_BLENDING_ADD"};function Ff(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":yf[e.combine]||"ENVMAP_BLENDING_NONE"}function Of(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Bf(e,n,t,i){const l=e.getContext(),a=t.defines;let u=t.vertexShader,m=t.fragmentShader;const C=Uf(t),R=wf(t),W=Nf(t),D=Ff(t),p=Of(t),E=xf(t),L=Mf(a),H=l.createProgram();let c,s,h=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(c=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,L].filter(gn).join(`
`),c.length>0&&(c+=`
`),s=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,L].filter(gn).join(`
`),s.length>0&&(s+=`
`)):(c=[to(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,L,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+W:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+C:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gn).join(`
`),s=[to(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,L,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+R:"",t.envMap?"#define "+W:"",t.envMap?"#define "+D:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+C:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mt?"#define TONE_MAPPING":"",t.toneMapping!==Mt?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Mt?Sf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,gf("linearToOutputTexel",t.outputColorSpace),Ef(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gn).join(`
`)),u=rr(u),u=Ja(u,t),u=ja(u,t),m=rr(m),m=Ja(m,t),m=ja(m,t),u=eo(u),m=eo(m),t.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,c=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,s=["#define varying in",t.glslVersion===ii?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ii?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+s);const A=h+c+u,T=h+s+m,B=Za(l,l.VERTEX_SHADER,A),v=Za(l,l.FRAGMENT_SHADER,T);l.attachShader(H,B),l.attachShader(H,v),t.index0AttributeName!==void 0?l.bindAttribLocation(H,0,t.index0AttributeName):t.morphTargets===!0&&l.bindAttribLocation(H,0,"position"),l.linkProgram(H);function w(M){if(e.debug.checkShaderErrors){const O=l.getProgramInfoLog(H)||"",$=l.getShaderInfoLog(B)||"",Z=l.getShaderInfoLog(v)||"",I=O.trim(),G=$.trim(),N=Z.trim();let Q=!0,de=!0;if(l.getProgramParameter(H,l.LINK_STATUS)===!1)if(Q=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(l,H,B,v);else{const ve=Qa(l,B,"vertex"),Ae=Qa(l,v,"fragment");qe("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(H,l.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+I+`
`+ve+`
`+Ae)}else I!==""?He("WebGLProgram: Program Info Log:",I):(G===""||N==="")&&(de=!1);de&&(M.diagnostics={runnable:Q,programLog:I,vertexShader:{log:G,prefix:c},fragmentShader:{log:N,prefix:s}})}l.deleteShader(B),l.deleteShader(v),d=new Bn(l,H),g=Tf(l,H)}let d;this.getUniforms=function(){return d===void 0&&w(this),d};let g;this.getAttributes=function(){return g===void 0&&w(this),g};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=l.getProgramParameter(H,pf)),F},this.destroy=function(){i.releaseStatesOfProgram(this),l.deleteProgram(H),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hf++,this.cacheKey=n,this.usedTimes=1,this.program=H,this.vertexShader=B,this.fragmentShader=v,this}let Gf=0;class Hf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,l=this._getShaderStage(t),a=this._getShaderStage(i),u=this._getShaderCacheForMaterial(n);return u.has(l)===!1&&(u.add(l),l.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new Vf(n),t.set(n,i)),i}}class Vf{constructor(n){this.id=Gf++,this.code=n,this.usedTimes=0}}function Wf(e){return e===Kt||e===bn||e===Cn}function kf(e,n,t,i,l,a){const u=new Lr,m=new Hf,C=new Set,R=[],W=new Map,D=i.logarithmicDepthBuffer;let p=i.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function L(d){return C.add(d),d===0?"uv":`uv${d}`}function H(d,g,F,M,O,$){const Z=M.fog,I=O.geometry,G=d.isMeshStandardMaterial||d.isMeshLambertMaterial||d.isMeshPhongMaterial?M.environment:null,N=d.isMeshStandardMaterial||d.isMeshLambertMaterial&&!d.envMap||d.isMeshPhongMaterial&&!d.envMap,Q=n.get(d.envMap||G,N),de=Q&&Q.mapping===ln?Q.image.height:null,ve=E[d.type];d.precision!==null&&(p=i.getMaxPrecision(d.precision),p!==d.precision&&He("WebGLProgram.getParameters:",d.precision,"not supported, using",p,"instead."));const Ae=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,xe=Ae!==void 0?Ae.length:0;let Ve=0;I.morphAttributes.position!==void 0&&(Ve=1),I.morphAttributes.normal!==void 0&&(Ve=2),I.morphAttributes.color!==void 0&&(Ve=3);let Ze,we,K,ce;if(ve){const Ce=At[ve];Ze=Ce.vertexShader,we=Ce.fragmentShader}else Ze=d.vertexShader,we=d.fragmentShader,m.update(d),K=m.getVertexShaderID(d),ce=m.getFragmentShaderID(d);const te=e.getRenderTarget(),Me=e.state.buffers.depth.getReversed(),be=O.isInstancedMesh===!0,Te=O.isBatchedMesh===!0,tt=!!d.map,Ne=!!d.matcap,We=!!Q,Je=!!d.aoMap,Ie=!!d.lightMap,lt=!!d.bumpMap,nt=!!d.normalMap,vt=!!d.displacementMap,S=!!d.emissiveMap,ct=!!d.metalnessMap,ye=!!d.roughnessMap,$e=d.anisotropy>0,oe=d.clearcoat>0,it=d.dispersion>0,f=d.iridescence>0,r=d.sheen>0,b=d.transmission>0,z=$e&&!!d.anisotropyMap,q=oe&&!!d.clearcoatMap,J=oe&&!!d.clearcoatNormalMap,re=oe&&!!d.clearcoatRoughnessMap,V=f&&!!d.iridescenceMap,X=f&&!!d.iridescenceThicknessMap,fe=r&&!!d.sheenColorMap,he=r&&!!d.sheenRoughnessMap,ne=!!d.specularMap,j=!!d.specularColorMap,Re=!!d.specularIntensityMap,Le=b&&!!d.transmissionMap,Ge=b&&!!d.thicknessMap,_=!!d.gradientMap,ee=!!d.alphaMap,k=d.alphaTest>0,ue=!!d.alphaHash,ie=!!d.extensions;let Y=Mt;d.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Y=e.toneMapping);const ge={shaderID:ve,shaderType:d.type,shaderName:d.name,vertexShader:Ze,fragmentShader:we,defines:d.defines,customVertexShaderID:K,customFragmentShaderID:ce,isRawShaderMaterial:d.isRawShaderMaterial===!0,glslVersion:d.glslVersion,precision:p,batching:Te,batchingColor:Te&&O._colorsTexture!==null,instancing:be,instancingColor:be&&O.instanceColor!==null,instancingMorph:be&&O.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!d.alphaToCoverage,map:tt,matcap:Ne,envMap:We,envMapMode:We&&Q.mapping,envMapCubeUVHeight:de,aoMap:Je,lightMap:Ie,bumpMap:lt,normalMap:nt,displacementMap:vt,emissiveMap:S,normalMapObjectSpace:nt&&d.normalMapType===Pr,normalMapTangentSpace:nt&&d.normalMapType===ai,packedNormalMap:nt&&d.normalMapType===ai&&Wf(d.normalMap.format),metalnessMap:ct,roughnessMap:ye,anisotropy:$e,anisotropyMap:z,clearcoat:oe,clearcoatMap:q,clearcoatNormalMap:J,clearcoatRoughnessMap:re,dispersion:it,iridescence:f,iridescenceMap:V,iridescenceThicknessMap:X,sheen:r,sheenColorMap:fe,sheenRoughnessMap:he,specularMap:ne,specularColorMap:j,specularIntensityMap:Re,transmission:b,transmissionMap:Le,thicknessMap:Ge,gradientMap:_,opaque:d.transparent===!1&&d.blending===pn&&d.alphaToCoverage===!1,alphaMap:ee,alphaTest:k,alphaHash:ue,combine:d.combine,mapUv:tt&&L(d.map.channel),aoMapUv:Je&&L(d.aoMap.channel),lightMapUv:Ie&&L(d.lightMap.channel),bumpMapUv:lt&&L(d.bumpMap.channel),normalMapUv:nt&&L(d.normalMap.channel),displacementMapUv:vt&&L(d.displacementMap.channel),emissiveMapUv:S&&L(d.emissiveMap.channel),metalnessMapUv:ct&&L(d.metalnessMap.channel),roughnessMapUv:ye&&L(d.roughnessMap.channel),anisotropyMapUv:z&&L(d.anisotropyMap.channel),clearcoatMapUv:q&&L(d.clearcoatMap.channel),clearcoatNormalMapUv:J&&L(d.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&L(d.clearcoatRoughnessMap.channel),iridescenceMapUv:V&&L(d.iridescenceMap.channel),iridescenceThicknessMapUv:X&&L(d.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&L(d.sheenColorMap.channel),sheenRoughnessMapUv:he&&L(d.sheenRoughnessMap.channel),specularMapUv:ne&&L(d.specularMap.channel),specularColorMapUv:j&&L(d.specularColorMap.channel),specularIntensityMapUv:Re&&L(d.specularIntensityMap.channel),transmissionMapUv:Le&&L(d.transmissionMap.channel),thicknessMapUv:Ge&&L(d.thicknessMap.channel),alphaMapUv:ee&&L(d.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(nt||$e),vertexNormals:!!I.attributes.normal,vertexColors:d.vertexColors,vertexAlphas:d.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!I.attributes.uv&&(tt||ee),fog:!!Z,useFog:d.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:d.wireframe===!1&&(d.flatShading===!0||I.attributes.normal===void 0&&nt===!1&&(d.isMeshLambertMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isMeshPhysicalMaterial)),sizeAttenuation:d.sizeAttenuation===!0,logarithmicDepthBuffer:D,reversedDepthBuffer:Me,skinning:O.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ve,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:d.dithering,shadowMapEnabled:e.shadowMap.enabled&&F.length>0,shadowMapType:e.shadowMap.type,toneMapping:Y,decodeVideoTexture:tt&&d.map.isVideoTexture===!0&&et.getTransfer(d.map.colorSpace)===Ye,decodeVideoTextureEmissive:S&&d.emissiveMap.isVideoTexture===!0&&et.getTransfer(d.emissiveMap.colorSpace)===Ye,premultipliedAlpha:d.premultipliedAlpha,doubleSided:d.side===Dt,flipSided:d.side===_t,useDepthPacking:d.depthPacking>=0,depthPacking:d.depthPacking||0,index0AttributeName:d.index0AttributeName,extensionClipCullDistance:ie&&d.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&d.extensions.multiDraw===!0||Te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:d.customProgramCacheKey()};return ge.vertexUv1s=C.has(1),ge.vertexUv2s=C.has(2),ge.vertexUv3s=C.has(3),C.clear(),ge}function c(d){const g=[];if(d.shaderID?g.push(d.shaderID):(g.push(d.customVertexShaderID),g.push(d.customFragmentShaderID)),d.defines!==void 0)for(const F in d.defines)g.push(F),g.push(d.defines[F]);return d.isRawShaderMaterial===!1&&(s(g,d),h(g,d),g.push(e.outputColorSpace)),g.push(d.customProgramCacheKey),g.join()}function s(d,g){d.push(g.precision),d.push(g.outputColorSpace),d.push(g.envMapMode),d.push(g.envMapCubeUVHeight),d.push(g.mapUv),d.push(g.alphaMapUv),d.push(g.lightMapUv),d.push(g.aoMapUv),d.push(g.bumpMapUv),d.push(g.normalMapUv),d.push(g.displacementMapUv),d.push(g.emissiveMapUv),d.push(g.metalnessMapUv),d.push(g.roughnessMapUv),d.push(g.anisotropyMapUv),d.push(g.clearcoatMapUv),d.push(g.clearcoatNormalMapUv),d.push(g.clearcoatRoughnessMapUv),d.push(g.iridescenceMapUv),d.push(g.iridescenceThicknessMapUv),d.push(g.sheenColorMapUv),d.push(g.sheenRoughnessMapUv),d.push(g.specularMapUv),d.push(g.specularColorMapUv),d.push(g.specularIntensityMapUv),d.push(g.transmissionMapUv),d.push(g.thicknessMapUv),d.push(g.combine),d.push(g.fogExp2),d.push(g.sizeAttenuation),d.push(g.morphTargetsCount),d.push(g.morphAttributeCount),d.push(g.numDirLights),d.push(g.numPointLights),d.push(g.numSpotLights),d.push(g.numSpotLightMaps),d.push(g.numHemiLights),d.push(g.numRectAreaLights),d.push(g.numDirLightShadows),d.push(g.numPointLightShadows),d.push(g.numSpotLightShadows),d.push(g.numSpotLightShadowsWithMaps),d.push(g.numLightProbes),d.push(g.shadowMapType),d.push(g.toneMapping),d.push(g.numClippingPlanes),d.push(g.numClipIntersection),d.push(g.depthPacking)}function h(d,g){u.disableAll(),g.instancing&&u.enable(0),g.instancingColor&&u.enable(1),g.instancingMorph&&u.enable(2),g.matcap&&u.enable(3),g.envMap&&u.enable(4),g.normalMapObjectSpace&&u.enable(5),g.normalMapTangentSpace&&u.enable(6),g.clearcoat&&u.enable(7),g.iridescence&&u.enable(8),g.alphaTest&&u.enable(9),g.vertexColors&&u.enable(10),g.vertexAlphas&&u.enable(11),g.vertexUv1s&&u.enable(12),g.vertexUv2s&&u.enable(13),g.vertexUv3s&&u.enable(14),g.vertexTangents&&u.enable(15),g.anisotropy&&u.enable(16),g.alphaHash&&u.enable(17),g.batching&&u.enable(18),g.dispersion&&u.enable(19),g.batchingColor&&u.enable(20),g.gradientMap&&u.enable(21),g.packedNormalMap&&u.enable(22),g.vertexNormals&&u.enable(23),d.push(u.mask),u.disableAll(),g.fog&&u.enable(0),g.useFog&&u.enable(1),g.flatShading&&u.enable(2),g.logarithmicDepthBuffer&&u.enable(3),g.reversedDepthBuffer&&u.enable(4),g.skinning&&u.enable(5),g.morphTargets&&u.enable(6),g.morphNormals&&u.enable(7),g.morphColors&&u.enable(8),g.premultipliedAlpha&&u.enable(9),g.shadowMapEnabled&&u.enable(10),g.doubleSided&&u.enable(11),g.flipSided&&u.enable(12),g.useDepthPacking&&u.enable(13),g.dithering&&u.enable(14),g.transmission&&u.enable(15),g.sheen&&u.enable(16),g.opaque&&u.enable(17),g.pointsUvs&&u.enable(18),g.decodeVideoTexture&&u.enable(19),g.decodeVideoTextureEmissive&&u.enable(20),g.alphaToCoverage&&u.enable(21),g.numLightProbeGrids>0&&u.enable(22),d.push(u.mask)}function A(d){const g=E[d.type];let F;if(g){const M=At[g];F=Cr.clone(M.uniforms)}else F=d.uniforms;return F}function T(d,g){let F=W.get(g);return F!==void 0?++F.usedTimes:(F=new Bf(e,g,d,l),R.push(F),W.set(g,F)),F}function B(d){if(--d.usedTimes===0){const g=R.indexOf(d);R[g]=R[R.length-1],R.pop(),W.delete(d.cacheKey),d.destroy()}}function v(d){m.remove(d)}function w(){m.dispose()}return{getParameters:H,getProgramCacheKey:c,getUniforms:A,acquireProgram:T,releaseProgram:B,releaseShaderCache:v,programs:R,dispose:w}}function zf(){let e=new WeakMap;function n(u){return e.has(u)}function t(u){let m=e.get(u);return m===void 0&&(m={},e.set(u,m)),m}function i(u){e.delete(u)}function l(u,m,C){e.get(u)[m]=C}function a(){e=new WeakMap}return{has:n,get:t,remove:i,update:l,dispose:a}}function Xf(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.materialVariant!==n.materialVariant?e.materialVariant-n.materialVariant:e.z!==n.z?e.z-n.z:e.id-n.id}function no(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function io(){const e=[];let n=0;const t=[],i=[],l=[];function a(){n=0,t.length=0,i.length=0,l.length=0}function u(p){let E=0;return p.isInstancedMesh&&(E+=2),p.isSkinnedMesh&&(E+=1),E}function m(p,E,L,H,c,s){let h=e[n];return h===void 0?(h={id:p.id,object:p,geometry:E,material:L,materialVariant:u(p),groupOrder:H,renderOrder:p.renderOrder,z:c,group:s},e[n]=h):(h.id=p.id,h.object=p,h.geometry=E,h.material=L,h.materialVariant=u(p),h.groupOrder=H,h.renderOrder=p.renderOrder,h.z=c,h.group=s),n++,h}function C(p,E,L,H,c,s){const h=m(p,E,L,H,c,s);L.transmission>0?i.push(h):L.transparent===!0?l.push(h):t.push(h)}function R(p,E,L,H,c,s){const h=m(p,E,L,H,c,s);L.transmission>0?i.unshift(h):L.transparent===!0?l.unshift(h):t.unshift(h)}function W(p,E){t.length>1&&t.sort(p||Xf),i.length>1&&i.sort(E||no),l.length>1&&l.sort(E||no)}function D(){for(let p=n,E=e.length;p<E;p++){const L=e[p];if(L.id===null)break;L.id=null,L.object=null,L.geometry=null,L.material=null,L.group=null}}return{opaque:t,transmissive:i,transparent:l,init:a,push:C,unshift:R,finish:D,sort:W}}function Kf(){let e=new WeakMap;function n(i,l){const a=e.get(i);let u;return a===void 0?(u=new io,e.set(i,[u])):l>=a.length?(u=new io,a.push(u)):u=a[l],u}function t(){e=new WeakMap}return{get:n,dispose:t}}function Yf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new Fe,color:new je};break;case"SpotLight":t={position:new Fe,direction:new Fe,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Fe,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Fe,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new Fe,halfWidth:new Fe,halfHeight:new Fe};break}return e[n.id]=t,t}}}function qf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let Zf=0;function $f(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function Qf(e){const n=new Yf,t=qf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let R=0;R<9;R++)i.probe.push(new Fe);const l=new Fe,a=new kt,u=new kt;function m(R){let W=0,D=0,p=0;for(let g=0;g<9;g++)i.probe[g].set(0,0,0);let E=0,L=0,H=0,c=0,s=0,h=0,A=0,T=0,B=0,v=0,w=0;R.sort($f);for(let g=0,F=R.length;g<F;g++){const M=R[g],O=M.color,$=M.intensity,Z=M.distance;let I=null;if(M.shadow&&M.shadow.map&&(M.shadow.map.texture.format===Kt?I=M.shadow.map.texture:I=M.shadow.map.depthTexture||M.shadow.map.texture),M.isAmbientLight)W+=O.r*$,D+=O.g*$,p+=O.b*$;else if(M.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(M.sh.coefficients[G],$);w++}else if(M.isDirectionalLight){const G=n.get(M);if(G.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const N=M.shadow,Q=t.get(M);Q.shadowIntensity=N.intensity,Q.shadowBias=N.bias,Q.shadowNormalBias=N.normalBias,Q.shadowRadius=N.radius,Q.shadowMapSize=N.mapSize,i.directionalShadow[E]=Q,i.directionalShadowMap[E]=I,i.directionalShadowMatrix[E]=M.shadow.matrix,h++}i.directional[E]=G,E++}else if(M.isSpotLight){const G=n.get(M);G.position.setFromMatrixPosition(M.matrixWorld),G.color.copy(O).multiplyScalar($),G.distance=Z,G.coneCos=Math.cos(M.angle),G.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),G.decay=M.decay,i.spot[H]=G;const N=M.shadow;if(M.map&&(i.spotLightMap[B]=M.map,B++,N.updateMatrices(M),M.castShadow&&v++),i.spotLightMatrix[H]=N.matrix,M.castShadow){const Q=t.get(M);Q.shadowIntensity=N.intensity,Q.shadowBias=N.bias,Q.shadowNormalBias=N.normalBias,Q.shadowRadius=N.radius,Q.shadowMapSize=N.mapSize,i.spotShadow[H]=Q,i.spotShadowMap[H]=I,T++}H++}else if(M.isRectAreaLight){const G=n.get(M);G.color.copy(O).multiplyScalar($),G.halfWidth.set(M.width*.5,0,0),G.halfHeight.set(0,M.height*.5,0),i.rectArea[c]=G,c++}else if(M.isPointLight){const G=n.get(M);if(G.color.copy(M.color).multiplyScalar(M.intensity),G.distance=M.distance,G.decay=M.decay,M.castShadow){const N=M.shadow,Q=t.get(M);Q.shadowIntensity=N.intensity,Q.shadowBias=N.bias,Q.shadowNormalBias=N.normalBias,Q.shadowRadius=N.radius,Q.shadowMapSize=N.mapSize,Q.shadowCameraNear=N.camera.near,Q.shadowCameraFar=N.camera.far,i.pointShadow[L]=Q,i.pointShadowMap[L]=I,i.pointShadowMatrix[L]=M.shadow.matrix,A++}i.point[L]=G,L++}else if(M.isHemisphereLight){const G=n.get(M);G.skyColor.copy(M.color).multiplyScalar($),G.groundColor.copy(M.groundColor).multiplyScalar($),i.hemi[s]=G,s++}}c>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=W,i.ambient[1]=D,i.ambient[2]=p;const d=i.hash;(d.directionalLength!==E||d.pointLength!==L||d.spotLength!==H||d.rectAreaLength!==c||d.hemiLength!==s||d.numDirectionalShadows!==h||d.numPointShadows!==A||d.numSpotShadows!==T||d.numSpotMaps!==B||d.numLightProbes!==w)&&(i.directional.length=E,i.spot.length=H,i.rectArea.length=c,i.point.length=L,i.hemi.length=s,i.directionalShadow.length=h,i.directionalShadowMap.length=h,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=h,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=T+B-v,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=v,i.numLightProbes=w,d.directionalLength=E,d.pointLength=L,d.spotLength=H,d.rectAreaLength=c,d.hemiLength=s,d.numDirectionalShadows=h,d.numPointShadows=A,d.numSpotShadows=T,d.numSpotMaps=B,d.numLightProbes=w,i.version=Zf++)}function C(R,W){let D=0,p=0,E=0,L=0,H=0;const c=W.matrixWorldInverse;for(let s=0,h=R.length;s<h;s++){const A=R[s];if(A.isDirectionalLight){const T=i.directional[D];T.direction.setFromMatrixPosition(A.matrixWorld),l.setFromMatrixPosition(A.target.matrixWorld),T.direction.sub(l),T.direction.transformDirection(c),D++}else if(A.isSpotLight){const T=i.spot[E];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(c),T.direction.setFromMatrixPosition(A.matrixWorld),l.setFromMatrixPosition(A.target.matrixWorld),T.direction.sub(l),T.direction.transformDirection(c),E++}else if(A.isRectAreaLight){const T=i.rectArea[L];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(c),u.identity(),a.copy(A.matrixWorld),a.premultiply(c),u.extractRotation(a),T.halfWidth.set(A.width*.5,0,0),T.halfHeight.set(0,A.height*.5,0),T.halfWidth.applyMatrix4(u),T.halfHeight.applyMatrix4(u),L++}else if(A.isPointLight){const T=i.point[p];T.position.setFromMatrixPosition(A.matrixWorld),T.position.applyMatrix4(c),p++}else if(A.isHemisphereLight){const T=i.hemi[H];T.direction.setFromMatrixPosition(A.matrixWorld),T.direction.transformDirection(c),H++}}}return{setup:m,setupView:C,state:i}}function ro(e){const n=new Qf(e),t=[],i=[],l=[];function a(p){D.camera=p,t.length=0,i.length=0,l.length=0}function u(p){t.push(p)}function m(p){i.push(p)}function C(p){l.push(p)}function R(){n.setup(t)}function W(p){n.setupView(t,p)}const D={lightsArray:t,shadowsArray:i,lightProbeGridArray:l,camera:null,lights:n,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:D,setupLights:R,setupLightsView:W,pushLight:u,pushShadow:m,pushLightProbeGrid:C}}function Jf(e){let n=new WeakMap;function t(l,a=0){const u=n.get(l);let m;return u===void 0?(m=new ro(e),n.set(l,[m])):a>=u.length?(m=new ro(e),u.push(m)):m=u[a],m}function i(){n=new WeakMap}return{get:t,dispose:i}}const jf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ed=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,td=[new Fe(1,0,0),new Fe(-1,0,0),new Fe(0,1,0),new Fe(0,-1,0),new Fe(0,0,1),new Fe(0,0,-1)],nd=[new Fe(0,-1,0),new Fe(0,-1,0),new Fe(0,0,1),new Fe(0,0,-1),new Fe(0,-1,0),new Fe(0,-1,0)],ao=new kt,vn=new Fe,ar=new Fe;function id(e,n,t){let i=new oi;const l=new pt,a=new pt,u=new ht,m=new Ur,C=new Dr,R={},W=t.maxTextureSize,D={[jt]:_t,[_t]:jt,[Dt]:Dt},p=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:jf,fragmentShader:ed}),E=p.clone();E.defines.HORIZONTAL_PASS=1;const L=new cn;L.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const H=new Ct(L,p),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=un;let s=this.type;this.render=function(v,w,d){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||v.length===0)return;this.type===wr&&(He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=un);const g=e.getRenderTarget(),F=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),O=e.state;O.setBlending(Ut),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const $=s!==this.type;$&&w.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(I=>I.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,I=v.length;Z<I;Z++){const G=v[Z],N=G.shadow;if(N===void 0){He("WebGLShadowMap:",G,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;l.copy(N.mapSize);const Q=N.getFrameExtents();l.multiply(Q),a.copy(N.mapSize),(l.x>W||l.y>W)&&(l.x>W&&(a.x=Math.floor(W/Q.x),l.x=a.x*Q.x,N.mapSize.x=a.x),l.y>W&&(a.y=Math.floor(W/Q.y),l.y=a.y*Q.y,N.mapSize.y=a.y));const de=e.state.buffers.depth.getReversed();if(N.camera._reversedDepth=de,N.map===null||$===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===nn){if(G.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Tt(l.x,l.y,{format:Kt,type:Nt,minFilter:gt,magFilter:gt,generateMipmaps:!1}),N.map.texture.name=G.name+".shadowMap",N.map.depthTexture=new tn(l.x,l.y,yt),N.map.depthTexture.name=G.name+".shadowMapDepth",N.map.depthTexture.format=Yt,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Gt,N.map.depthTexture.magFilter=Gt}else G.isPointLight?(N.map=new tr(l.x),N.map.depthTexture=new Ir(l.x,Ht)):(N.map=new Tt(l.x,l.y),N.map.depthTexture=new tn(l.x,l.y,Ht)),N.map.depthTexture.name=G.name+".shadowMap",N.map.depthTexture.format=Yt,this.type===un?(N.map.depthTexture.compareFunction=de?An:Rn,N.map.depthTexture.minFilter=gt,N.map.depthTexture.magFilter=gt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Gt,N.map.depthTexture.magFilter=Gt);N.camera.updateProjectionMatrix()}const ve=N.map.isWebGLCubeRenderTarget?6:1;for(let Ae=0;Ae<ve;Ae++){if(N.map.isWebGLCubeRenderTarget)e.setRenderTarget(N.map,Ae),e.clear();else{Ae===0&&(e.setRenderTarget(N.map),e.clear());const xe=N.getViewport(Ae);u.set(a.x*xe.x,a.y*xe.y,a.x*xe.z,a.y*xe.w),O.viewport(u)}if(G.isPointLight){const xe=N.camera,Ve=N.matrix,Ze=G.distance||xe.far;Ze!==xe.far&&(xe.far=Ze,xe.updateProjectionMatrix()),vn.setFromMatrixPosition(G.matrixWorld),xe.position.copy(vn),ar.copy(xe.position),ar.add(td[Ae]),xe.up.copy(nd[Ae]),xe.lookAt(ar),xe.updateMatrixWorld(),Ve.makeTranslation(-vn.x,-vn.y,-vn.z),ao.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),N._frustum.setFromProjectionMatrix(ao,xe.coordinateSystem,xe.reversedDepth)}else N.updateMatrices(G);i=N.getFrustum(),T(w,d,N.camera,G,this.type)}N.isPointLightShadow!==!0&&this.type===nn&&h(N,d),N.needsUpdate=!1}s=this.type,c.needsUpdate=!1,e.setRenderTarget(g,F,M)};function h(v,w){const d=n.update(H);p.defines.VSM_SAMPLES!==v.blurSamples&&(p.defines.VSM_SAMPLES=v.blurSamples,E.defines.VSM_SAMPLES=v.blurSamples,p.needsUpdate=!0,E.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Tt(l.x,l.y,{format:Kt,type:Nt})),p.uniforms.shadow_pass.value=v.map.depthTexture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,e.setRenderTarget(v.mapPass),e.clear(),e.renderBufferDirect(w,null,d,p,H,null),E.uniforms.shadow_pass.value=v.mapPass.texture,E.uniforms.resolution.value=v.mapSize,E.uniforms.radius.value=v.radius,e.setRenderTarget(v.map),e.clear(),e.renderBufferDirect(w,null,d,E,H,null)}function A(v,w,d,g){let F=null;const M=d.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(M!==void 0)F=M;else if(F=d.isPointLight===!0?C:m,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const O=F.uuid,$=w.uuid;let Z=R[O];Z===void 0&&(Z={},R[O]=Z);let I=Z[$];I===void 0&&(I=F.clone(),Z[$]=I,w.addEventListener("dispose",B)),F=I}if(F.visible=w.visible,F.wireframe=w.wireframe,g===nn?F.side=w.shadowSide!==null?w.shadowSide:w.side:F.side=w.shadowSide!==null?w.shadowSide:D[w.side],F.alphaMap=w.alphaMap,F.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,F.map=w.map,F.clipShadows=w.clipShadows,F.clippingPlanes=w.clippingPlanes,F.clipIntersection=w.clipIntersection,F.displacementMap=w.displacementMap,F.displacementScale=w.displacementScale,F.displacementBias=w.displacementBias,F.wireframeLinewidth=w.wireframeLinewidth,F.linewidth=w.linewidth,d.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const O=e.properties.get(F);O.light=d}return F}function T(v,w,d,g,F){if(v.visible===!1)return;if(v.layers.test(w.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&F===nn)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,v.matrixWorld);const $=n.update(v),Z=v.material;if(Array.isArray(Z)){const I=$.groups;for(let G=0,N=I.length;G<N;G++){const Q=I[G],de=Z[Q.materialIndex];if(de&&de.visible){const ve=A(v,de,g,F);v.onBeforeShadow(e,v,w,d,$,ve,Q),e.renderBufferDirect(d,null,$,ve,v,Q),v.onAfterShadow(e,v,w,d,$,ve,Q)}}}else if(Z.visible){const I=A(v,Z,g,F);v.onBeforeShadow(e,v,w,d,$,I,null),e.renderBufferDirect(d,null,$,I,v,null),v.onAfterShadow(e,v,w,d,$,I,null)}}const O=v.children;for(let $=0,Z=O.length;$<Z;$++)T(O[$],w,d,g,F)}function B(v){v.target.removeEventListener("dispose",B);for(const d in R){const g=R[d],F=v.target.uuid;F in g&&(g[F].dispose(),delete g[F])}}}function rd(e,n){function t(){let _=!1;const ee=new ht;let k=null;const ue=new ht(0,0,0,0);return{setMask:function(ie){k!==ie&&!_&&(e.colorMask(ie,ie,ie,ie),k=ie)},setLocked:function(ie){_=ie},setClear:function(ie,Y,ge,Ce,at){at===!0&&(ie*=Ce,Y*=Ce,ge*=Ce),ee.set(ie,Y,ge,Ce),ue.equals(ee)===!1&&(e.clearColor(ie,Y,ge,Ce),ue.copy(ee))},reset:function(){_=!1,k=null,ue.set(-1,0,0,0)}}}function i(){let _=!1,ee=!1,k=null,ue=null,ie=null;return{setReversed:function(Y){if(ee!==Y){const ge=n.get("EXT_clip_control");Y?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),ee=Y;const Ce=ie;ie=null,this.setClear(Ce)}},getReversed:function(){return ee},setTest:function(Y){Y?te(e.DEPTH_TEST):Me(e.DEPTH_TEST)},setMask:function(Y){k!==Y&&!_&&(e.depthMask(Y),k=Y)},setFunc:function(Y){if(ee&&(Y=go[Y]),ue!==Y){switch(Y){case ia:e.depthFunc(e.NEVER);break;case na:e.depthFunc(e.ALWAYS);break;case ta:e.depthFunc(e.LESS);break;case si:e.depthFunc(e.LEQUAL);break;case ea:e.depthFunc(e.EQUAL);break;case jr:e.depthFunc(e.GEQUAL);break;case Jr:e.depthFunc(e.GREATER);break;case Qr:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ue=Y}},setLocked:function(Y){_=Y},setClear:function(Y){ie!==Y&&(ie=Y,ee&&(Y=1-Y),e.clearDepth(Y))},reset:function(){_=!1,k=null,ue=null,ie=null,ee=!1}}}function l(){let _=!1,ee=null,k=null,ue=null,ie=null,Y=null,ge=null,Ce=null,at=null;return{setTest:function(ke){_||(ke?te(e.STENCIL_TEST):Me(e.STENCIL_TEST))},setMask:function(ke){ee!==ke&&!_&&(e.stencilMask(ke),ee=ke)},setFunc:function(ke,It,Rt){(k!==ke||ue!==It||ie!==Rt)&&(e.stencilFunc(ke,It,Rt),k=ke,ue=It,ie=Rt)},setOp:function(ke,It,Rt){(Y!==ke||ge!==It||Ce!==Rt)&&(e.stencilOp(ke,It,Rt),Y=ke,ge=It,Ce=Rt)},setLocked:function(ke){_=ke},setClear:function(ke){at!==ke&&(e.clearStencil(ke),at=ke)},reset:function(){_=!1,ee=null,k=null,ue=null,ie=null,Y=null,ge=null,Ce=null,at=null}}}const a=new t,u=new i,m=new l,C=new WeakMap,R=new WeakMap;let W={},D={},p={},E=new WeakMap,L=[],H=null,c=!1,s=null,h=null,A=null,T=null,B=null,v=null,w=null,d=new je(0,0,0),g=0,F=!1,M=null,O=null,$=null,Z=null,I=null;const G=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,Q=0;const de=e.getParameter(e.VERSION);de.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(de)[1]),N=Q>=1):de.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),N=Q>=2);let ve=null,Ae={};const xe=e.getParameter(e.SCISSOR_BOX),Ve=e.getParameter(e.VIEWPORT),Ze=new ht().fromArray(xe),we=new ht().fromArray(Ve);function K(_,ee,k,ue){const ie=new Uint8Array(4),Y=e.createTexture();e.bindTexture(_,Y),e.texParameteri(_,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(_,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ge=0;ge<k;ge++)_===e.TEXTURE_3D||_===e.TEXTURE_2D_ARRAY?e.texImage3D(ee,0,e.RGBA,1,1,ue,0,e.RGBA,e.UNSIGNED_BYTE,ie):e.texImage2D(ee+ge,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ie);return Y}const ce={};ce[e.TEXTURE_2D]=K(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=K(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=K(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=K(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),m.setClear(0),te(e.DEPTH_TEST),u.setFunc(si),lt(!1),nt(li),te(e.CULL_FACE),Je(Ut);function te(_){W[_]!==!0&&(e.enable(_),W[_]=!0)}function Me(_){W[_]!==!1&&(e.disable(_),W[_]=!1)}function be(_,ee){return p[_]!==ee?(e.bindFramebuffer(_,ee),p[_]=ee,_===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=ee),_===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=ee),!0):!1}function Te(_,ee){let k=L,ue=!1;if(_){k=E.get(ee),k===void 0&&(k=[],E.set(ee,k));const ie=_.textures;if(k.length!==ie.length||k[0]!==e.COLOR_ATTACHMENT0){for(let Y=0,ge=ie.length;Y<ge;Y++)k[Y]=e.COLOR_ATTACHMENT0+Y;k.length=ie.length,ue=!0}}else k[0]!==e.BACK&&(k[0]=e.BACK,ue=!0);ue&&e.drawBuffers(k)}function tt(_){return H!==_?(e.useProgram(_),H=_,!0):!1}const Ne={[rn]:e.FUNC_ADD,[yr]:e.FUNC_SUBTRACT,[Nr]:e.FUNC_REVERSE_SUBTRACT};Ne[sa]=e.MIN,Ne[la]=e.MAX;const We={[$r]:e.ZERO,[Zr]:e.ONE,[qr]:e.SRC_COLOR,[Yr]:e.SRC_ALPHA,[Kr]:e.SRC_ALPHA_SATURATE,[Xr]:e.DST_COLOR,[zr]:e.DST_ALPHA,[kr]:e.ONE_MINUS_SRC_COLOR,[Wr]:e.ONE_MINUS_SRC_ALPHA,[Vr]:e.ONE_MINUS_DST_COLOR,[Hr]:e.ONE_MINUS_DST_ALPHA,[Gr]:e.CONSTANT_COLOR,[Br]:e.ONE_MINUS_CONSTANT_COLOR,[Or]:e.CONSTANT_ALPHA,[Fr]:e.ONE_MINUS_CONSTANT_ALPHA};function Je(_,ee,k,ue,ie,Y,ge,Ce,at,ke){if(_===Ut){c===!0&&(Me(e.BLEND),c=!1);return}if(c===!1&&(te(e.BLEND),c=!0),_!==oa){if(_!==s||ke!==F){if((h!==rn||B!==rn)&&(e.blendEquation(e.FUNC_ADD),h=rn,B=rn),ke)switch(_){case pn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case di:e.blendFunc(e.ONE,e.ONE);break;case fi:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ci:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:qe("WebGLState: Invalid blending: ",_);break}else switch(_){case pn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case di:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case fi:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ci:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",_);break}A=null,T=null,v=null,w=null,d.set(0,0,0),g=0,s=_,F=ke}return}ie=ie||ee,Y=Y||k,ge=ge||ue,(ee!==h||ie!==B)&&(e.blendEquationSeparate(Ne[ee],Ne[ie]),h=ee,B=ie),(k!==A||ue!==T||Y!==v||ge!==w)&&(e.blendFuncSeparate(We[k],We[ue],We[Y],We[ge]),A=k,T=ue,v=Y,w=ge),(Ce.equals(d)===!1||at!==g)&&(e.blendColor(Ce.r,Ce.g,Ce.b,at),d.copy(Ce),g=at),s=_,F=!1}function Ie(_,ee){_.side===Dt?Me(e.CULL_FACE):te(e.CULL_FACE);let k=_.side===_t;ee&&(k=!k),lt(k),_.blending===pn&&_.transparent===!1?Je(Ut):Je(_.blending,_.blendEquation,_.blendSrc,_.blendDst,_.blendEquationAlpha,_.blendSrcAlpha,_.blendDstAlpha,_.blendColor,_.blendAlpha,_.premultipliedAlpha),u.setFunc(_.depthFunc),u.setTest(_.depthTest),u.setMask(_.depthWrite),a.setMask(_.colorWrite);const ue=_.stencilWrite;m.setTest(ue),ue&&(m.setMask(_.stencilWriteMask),m.setFunc(_.stencilFunc,_.stencilRef,_.stencilFuncMask),m.setOp(_.stencilFail,_.stencilZFail,_.stencilZPass)),S(_.polygonOffset,_.polygonOffsetFactor,_.polygonOffsetUnits),_.alphaToCoverage===!0?te(e.SAMPLE_ALPHA_TO_COVERAGE):Me(e.SAMPLE_ALPHA_TO_COVERAGE)}function lt(_){M!==_&&(_?e.frontFace(e.CW):e.frontFace(e.CCW),M=_)}function nt(_){_!==ra?(te(e.CULL_FACE),_!==O&&(_===li?e.cullFace(e.BACK):_===aa?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Me(e.CULL_FACE),O=_}function vt(_){_!==$&&(N&&e.lineWidth(_),$=_)}function S(_,ee,k){_?(te(e.POLYGON_OFFSET_FILL),(Z!==ee||I!==k)&&(Z=ee,I=k,u.getReversed()&&(ee=-ee),e.polygonOffset(ee,k))):Me(e.POLYGON_OFFSET_FILL)}function ct(_){_?te(e.SCISSOR_TEST):Me(e.SCISSOR_TEST)}function ye(_){_===void 0&&(_=e.TEXTURE0+G-1),ve!==_&&(e.activeTexture(_),ve=_)}function $e(_,ee,k){k===void 0&&(ve===null?k=e.TEXTURE0+G-1:k=ve);let ue=Ae[k];ue===void 0&&(ue={type:void 0,texture:void 0},Ae[k]=ue),(ue.type!==_||ue.texture!==ee)&&(ve!==k&&(e.activeTexture(k),ve=k),e.bindTexture(_,ee||ce[_]),ue.type=_,ue.texture=ee)}function oe(){const _=Ae[ve];_!==void 0&&_.type!==void 0&&(e.bindTexture(_.type,null),_.type=void 0,_.texture=void 0)}function it(){try{e.compressedTexImage2D(...arguments)}catch(_){qe("WebGLState:",_)}}function f(){try{e.compressedTexImage3D(...arguments)}catch(_){qe("WebGLState:",_)}}function r(){try{e.texSubImage2D(...arguments)}catch(_){qe("WebGLState:",_)}}function b(){try{e.texSubImage3D(...arguments)}catch(_){qe("WebGLState:",_)}}function z(){try{e.compressedTexSubImage2D(...arguments)}catch(_){qe("WebGLState:",_)}}function q(){try{e.compressedTexSubImage3D(...arguments)}catch(_){qe("WebGLState:",_)}}function J(){try{e.texStorage2D(...arguments)}catch(_){qe("WebGLState:",_)}}function re(){try{e.texStorage3D(...arguments)}catch(_){qe("WebGLState:",_)}}function V(){try{e.texImage2D(...arguments)}catch(_){qe("WebGLState:",_)}}function X(){try{e.texImage3D(...arguments)}catch(_){qe("WebGLState:",_)}}function fe(_){return D[_]!==void 0?D[_]:e.getParameter(_)}function he(_,ee){D[_]!==ee&&(e.pixelStorei(_,ee),D[_]=ee)}function ne(_){Ze.equals(_)===!1&&(e.scissor(_.x,_.y,_.z,_.w),Ze.copy(_))}function j(_){we.equals(_)===!1&&(e.viewport(_.x,_.y,_.z,_.w),we.copy(_))}function Re(_,ee){let k=R.get(ee);k===void 0&&(k=new WeakMap,R.set(ee,k));let ue=k.get(_);ue===void 0&&(ue=e.getUniformBlockIndex(ee,_.name),k.set(_,ue))}function Le(_,ee){const ue=R.get(ee).get(_);C.get(ee)!==ue&&(e.uniformBlockBinding(ee,ue,_.__bindingPointIndex),C.set(ee,ue))}function Ge(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),u.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),W={},D={},ve=null,Ae={},p={},E=new WeakMap,L=[],H=null,c=!1,s=null,h=null,A=null,T=null,B=null,v=null,w=null,d=new je(0,0,0),g=0,F=!1,M=null,O=null,$=null,Z=null,I=null,Ze.set(0,0,e.canvas.width,e.canvas.height),we.set(0,0,e.canvas.width,e.canvas.height),a.reset(),u.reset(),m.reset()}return{buffers:{color:a,depth:u,stencil:m},enable:te,disable:Me,bindFramebuffer:be,drawBuffers:Te,useProgram:tt,setBlending:Je,setMaterial:Ie,setFlipSided:lt,setCullFace:nt,setLineWidth:vt,setPolygonOffset:S,setScissorTest:ct,activeTexture:ye,bindTexture:$e,unbindTexture:oe,compressedTexImage2D:it,compressedTexImage3D:f,texImage2D:V,texImage3D:X,pixelStorei:he,getParameter:fe,updateUBOMapping:Re,uniformBlockBinding:Le,texStorage2D:J,texStorage3D:re,texSubImage2D:r,texSubImage3D:b,compressedTexSubImage2D:z,compressedTexSubImage3D:q,scissor:ne,viewport:j,reset:Ge}}function ad(e,n,t,i,l,a,u){const m=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,C=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),R=new pt,W=new WeakMap,D=new Set;let p;const E=new WeakMap;let L=!1;try{L=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function H(f,r){return L?new OffscreenCanvas(f,r):vo("canvas")}function c(f,r,b){let z=1;const q=it(f);if((q.width>b||q.height>b)&&(z=b/Math.max(q.width,q.height)),z<1)if(typeof HTMLImageElement<"u"&&f instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&f instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&f instanceof ImageBitmap||typeof VideoFrame<"u"&&f instanceof VideoFrame){const J=Math.floor(z*q.width),re=Math.floor(z*q.height);p===void 0&&(p=H(J,re));const V=r?H(J,re):p;return V.width=J,V.height=re,V.getContext("2d").drawImage(f,0,0,J,re),He("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+J+"x"+re+")."),V}else return"data"in f&&He("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),f;return f}function s(f){return f.generateMipmaps}function h(f){e.generateMipmap(f)}function A(f){return f.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:f.isWebGL3DRenderTarget?e.TEXTURE_3D:f.isWebGLArrayRenderTarget||f.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function T(f,r,b,z,q,J=!1){if(f!==null){if(e[f]!==void 0)return e[f];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+f+"'")}let re;z&&(re=n.get("EXT_texture_norm16"),re||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let V=r;if(r===e.RED&&(b===e.FLOAT&&(V=e.R32F),b===e.HALF_FLOAT&&(V=e.R16F),b===e.UNSIGNED_BYTE&&(V=e.R8),b===e.UNSIGNED_SHORT&&re&&(V=re.R16_EXT),b===e.SHORT&&re&&(V=re.R16_SNORM_EXT)),r===e.RED_INTEGER&&(b===e.UNSIGNED_BYTE&&(V=e.R8UI),b===e.UNSIGNED_SHORT&&(V=e.R16UI),b===e.UNSIGNED_INT&&(V=e.R32UI),b===e.BYTE&&(V=e.R8I),b===e.SHORT&&(V=e.R16I),b===e.INT&&(V=e.R32I)),r===e.RG&&(b===e.FLOAT&&(V=e.RG32F),b===e.HALF_FLOAT&&(V=e.RG16F),b===e.UNSIGNED_BYTE&&(V=e.RG8),b===e.UNSIGNED_SHORT&&re&&(V=re.RG16_EXT),b===e.SHORT&&re&&(V=re.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(b===e.UNSIGNED_BYTE&&(V=e.RG8UI),b===e.UNSIGNED_SHORT&&(V=e.RG16UI),b===e.UNSIGNED_INT&&(V=e.RG32UI),b===e.BYTE&&(V=e.RG8I),b===e.SHORT&&(V=e.RG16I),b===e.INT&&(V=e.RG32I)),r===e.RGB_INTEGER&&(b===e.UNSIGNED_BYTE&&(V=e.RGB8UI),b===e.UNSIGNED_SHORT&&(V=e.RGB16UI),b===e.UNSIGNED_INT&&(V=e.RGB32UI),b===e.BYTE&&(V=e.RGB8I),b===e.SHORT&&(V=e.RGB16I),b===e.INT&&(V=e.RGB32I)),r===e.RGBA_INTEGER&&(b===e.UNSIGNED_BYTE&&(V=e.RGBA8UI),b===e.UNSIGNED_SHORT&&(V=e.RGBA16UI),b===e.UNSIGNED_INT&&(V=e.RGBA32UI),b===e.BYTE&&(V=e.RGBA8I),b===e.SHORT&&(V=e.RGBA16I),b===e.INT&&(V=e.RGBA32I)),r===e.RGB&&(b===e.UNSIGNED_SHORT&&re&&(V=re.RGB16_EXT),b===e.SHORT&&re&&(V=re.RGB16_SNORM_EXT),b===e.UNSIGNED_INT_5_9_9_9_REV&&(V=e.RGB9_E5),b===e.UNSIGNED_INT_10F_11F_11F_REV&&(V=e.R11F_G11F_B10F)),r===e.RGBA){const X=J?ri:et.getTransfer(q);b===e.FLOAT&&(V=e.RGBA32F),b===e.HALF_FLOAT&&(V=e.RGBA16F),b===e.UNSIGNED_BYTE&&(V=X===Ye?e.SRGB8_ALPHA8:e.RGBA8),b===e.UNSIGNED_SHORT&&re&&(V=re.RGBA16_EXT),b===e.SHORT&&re&&(V=re.RGBA16_SNORM_EXT),b===e.UNSIGNED_SHORT_4_4_4_4&&(V=e.RGBA4),b===e.UNSIGNED_SHORT_5_5_5_1&&(V=e.RGB5_A1)}return(V===e.R16F||V===e.R32F||V===e.RG16F||V===e.RG32F||V===e.RGBA16F||V===e.RGBA32F)&&n.get("EXT_color_buffer_float"),V}function B(f,r){let b;return f?r===null||r===Ht||r===an?b=e.DEPTH24_STENCIL8:r===yt?b=e.DEPTH32F_STENCIL8:r===mn&&(b=e.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):r===null||r===Ht||r===an?b=e.DEPTH_COMPONENT24:r===yt?b=e.DEPTH_COMPONENT32F:r===mn&&(b=e.DEPTH_COMPONENT16),b}function v(f,r){return s(f)===!0||f.isFramebufferTexture&&f.minFilter!==Gt&&f.minFilter!==gt?Math.log2(Math.max(r.width,r.height))+1:f.mipmaps!==void 0&&f.mipmaps.length>0?f.mipmaps.length:f.isCompressedTexture&&Array.isArray(f.image)?r.mipmaps.length:1}function w(f){const r=f.target;r.removeEventListener("dispose",w),g(r),r.isVideoTexture&&W.delete(r),r.isHTMLTexture&&D.delete(r)}function d(f){const r=f.target;r.removeEventListener("dispose",d),M(r)}function g(f){const r=i.get(f);if(r.__webglInit===void 0)return;const b=f.source,z=E.get(b);if(z){const q=z[r.__cacheKey];q.usedTimes--,q.usedTimes===0&&F(f),Object.keys(z).length===0&&E.delete(b)}i.remove(f)}function F(f){const r=i.get(f);e.deleteTexture(r.__webglTexture);const b=f.source,z=E.get(b);delete z[r.__cacheKey],u.memory.textures--}function M(f){const r=i.get(f);if(f.depthTexture&&(f.depthTexture.dispose(),i.remove(f.depthTexture)),f.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(r.__webglFramebuffer[z]))for(let q=0;q<r.__webglFramebuffer[z].length;q++)e.deleteFramebuffer(r.__webglFramebuffer[z][q]);else e.deleteFramebuffer(r.__webglFramebuffer[z]);r.__webglDepthbuffer&&e.deleteRenderbuffer(r.__webglDepthbuffer[z])}else{if(Array.isArray(r.__webglFramebuffer))for(let z=0;z<r.__webglFramebuffer.length;z++)e.deleteFramebuffer(r.__webglFramebuffer[z]);else e.deleteFramebuffer(r.__webglFramebuffer);if(r.__webglDepthbuffer&&e.deleteRenderbuffer(r.__webglDepthbuffer),r.__webglMultisampledFramebuffer&&e.deleteFramebuffer(r.__webglMultisampledFramebuffer),r.__webglColorRenderbuffer)for(let z=0;z<r.__webglColorRenderbuffer.length;z++)r.__webglColorRenderbuffer[z]&&e.deleteRenderbuffer(r.__webglColorRenderbuffer[z]);r.__webglDepthRenderbuffer&&e.deleteRenderbuffer(r.__webglDepthRenderbuffer)}const b=f.textures;for(let z=0,q=b.length;z<q;z++){const J=i.get(b[z]);J.__webglTexture&&(e.deleteTexture(J.__webglTexture),u.memory.textures--),i.remove(b[z])}i.remove(f)}let O=0;function $(){O=0}function Z(){return O}function I(f){O=f}function G(){const f=O;return f>=l.maxTextures&&He("WebGLTextures: Trying to use "+f+" texture units while this GPU supports only "+l.maxTextures),O+=1,f}function N(f){const r=[];return r.push(f.wrapS),r.push(f.wrapT),r.push(f.wrapR||0),r.push(f.magFilter),r.push(f.minFilter),r.push(f.anisotropy),r.push(f.internalFormat),r.push(f.format),r.push(f.type),r.push(f.generateMipmaps),r.push(f.premultiplyAlpha),r.push(f.flipY),r.push(f.unpackAlignment),r.push(f.colorSpace),r.join()}function Q(f,r){const b=i.get(f);if(f.isVideoTexture&&$e(f),f.isRenderTargetTexture===!1&&f.isExternalTexture!==!0&&f.version>0&&b.__version!==f.version){const z=f.image;if(z===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(b,f,r);return}}else f.isExternalTexture&&(b.__webglTexture=f.sourceTexture?f.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,b.__webglTexture,e.TEXTURE0+r)}function de(f,r){const b=i.get(f);if(f.isRenderTargetTexture===!1&&f.version>0&&b.__version!==f.version){Me(b,f,r);return}else f.isExternalTexture&&(b.__webglTexture=f.sourceTexture?f.sourceTexture:null);t.bindTexture(e.TEXTURE_2D_ARRAY,b.__webglTexture,e.TEXTURE0+r)}function ve(f,r){const b=i.get(f);if(f.isRenderTargetTexture===!1&&f.version>0&&b.__version!==f.version){Me(b,f,r);return}t.bindTexture(e.TEXTURE_3D,b.__webglTexture,e.TEXTURE0+r)}function Ae(f,r){const b=i.get(f);if(f.isCubeDepthTexture!==!0&&f.version>0&&b.__version!==f.version){be(b,f,r);return}t.bindTexture(e.TEXTURE_CUBE_MAP,b.__webglTexture,e.TEXTURE0+r)}const xe={[fa]:e.REPEAT,[Pn]:e.CLAMP_TO_EDGE,[ca]:e.MIRRORED_REPEAT},Ve={[Gt]:e.NEAREST,[da]:e.NEAREST_MIPMAP_NEAREST,[hn]:e.NEAREST_MIPMAP_LINEAR,[gt]:e.LINEAR,[Ln]:e.LINEAR_MIPMAP_NEAREST,[Xt]:e.LINEAR_MIPMAP_LINEAR},Ze={[ga]:e.NEVER,[_a]:e.ALWAYS,[ma]:e.LESS,[Rn]:e.LEQUAL,[ha]:e.EQUAL,[An]:e.GEQUAL,[pa]:e.GREATER,[ua]:e.NOTEQUAL};function we(f,r){if(r.type===yt&&n.has("OES_texture_float_linear")===!1&&(r.magFilter===gt||r.magFilter===Ln||r.magFilter===hn||r.magFilter===Xt||r.minFilter===gt||r.minFilter===Ln||r.minFilter===hn||r.minFilter===Xt)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(f,e.TEXTURE_WRAP_S,xe[r.wrapS]),e.texParameteri(f,e.TEXTURE_WRAP_T,xe[r.wrapT]),(f===e.TEXTURE_3D||f===e.TEXTURE_2D_ARRAY)&&e.texParameteri(f,e.TEXTURE_WRAP_R,xe[r.wrapR]),e.texParameteri(f,e.TEXTURE_MAG_FILTER,Ve[r.magFilter]),e.texParameteri(f,e.TEXTURE_MIN_FILTER,Ve[r.minFilter]),r.compareFunction&&(e.texParameteri(f,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(f,e.TEXTURE_COMPARE_FUNC,Ze[r.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(r.magFilter===Gt||r.minFilter!==hn&&r.minFilter!==Xt||r.type===yt&&n.has("OES_texture_float_linear")===!1)return;if(r.anisotropy>1||i.get(r).__currentAnisotropy){const b=n.get("EXT_texture_filter_anisotropic");e.texParameterf(f,b.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,l.getMaxAnisotropy())),i.get(r).__currentAnisotropy=r.anisotropy}}}function K(f,r){let b=!1;f.__webglInit===void 0&&(f.__webglInit=!0,r.addEventListener("dispose",w));const z=r.source;let q=E.get(z);q===void 0&&(q={},E.set(z,q));const J=N(r);if(J!==f.__cacheKey){q[J]===void 0&&(q[J]={texture:e.createTexture(),usedTimes:0},u.memory.textures++,b=!0),q[J].usedTimes++;const re=q[f.__cacheKey];re!==void 0&&(q[f.__cacheKey].usedTimes--,re.usedTimes===0&&F(r)),f.__cacheKey=J,f.__webglTexture=q[J].texture}return b}function ce(f,r,b){return Math.floor(Math.floor(f/b)/r)}function te(f,r,b,z){const J=f.updateRanges;if(J.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,b,z,r.data);else{J.sort((he,ne)=>he.start-ne.start);let re=0;for(let he=1;he<J.length;he++){const ne=J[re],j=J[he],Re=ne.start+ne.count,Le=ce(j.start,r.width,4),Ge=ce(ne.start,r.width,4);j.start<=Re+1&&Le===Ge&&ce(j.start+j.count-1,r.width,4)===Le?ne.count=Math.max(ne.count,j.start+j.count-ne.start):(++re,J[re]=j)}J.length=re+1;const V=t.getParameter(e.UNPACK_ROW_LENGTH),X=t.getParameter(e.UNPACK_SKIP_PIXELS),fe=t.getParameter(e.UNPACK_SKIP_ROWS);t.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let he=0,ne=J.length;he<ne;he++){const j=J[he],Re=Math.floor(j.start/4),Le=Math.ceil(j.count/4),Ge=Re%r.width,_=Math.floor(Re/r.width),ee=Le,k=1;t.pixelStorei(e.UNPACK_SKIP_PIXELS,Ge),t.pixelStorei(e.UNPACK_SKIP_ROWS,_),t.texSubImage2D(e.TEXTURE_2D,0,Ge,_,ee,k,b,z,r.data)}f.clearUpdateRanges(),t.pixelStorei(e.UNPACK_ROW_LENGTH,V),t.pixelStorei(e.UNPACK_SKIP_PIXELS,X),t.pixelStorei(e.UNPACK_SKIP_ROWS,fe)}}function Me(f,r,b){let z=e.TEXTURE_2D;(r.isDataArrayTexture||r.isCompressedArrayTexture)&&(z=e.TEXTURE_2D_ARRAY),r.isData3DTexture&&(z=e.TEXTURE_3D);const q=K(f,r),J=r.source;t.bindTexture(z,f.__webglTexture,e.TEXTURE0+b);const re=i.get(J);if(J.version!==re.__version||q===!0){if(t.activeTexture(e.TEXTURE0+b),(typeof ImageBitmap<"u"&&r.image instanceof ImageBitmap)===!1){const k=et.getPrimaries(et.workingColorSpace),ue=r.colorSpace===qt?null:et.getPrimaries(r.colorSpace),ie=r.colorSpace===qt||k===ue?e.NONE:e.BROWSER_DEFAULT_WEBGL;t.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),t.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),t.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie)}t.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment);let X=c(r.image,!1,l.maxTextureSize);X=oe(r,X);const fe=a.convert(r.format,r.colorSpace),he=a.convert(r.type);let ne=T(r.internalFormat,fe,he,r.normalized,r.colorSpace,r.isVideoTexture);we(z,r);let j;const Re=r.mipmaps,Le=r.isVideoTexture!==!0,Ge=re.__version===void 0||q===!0,_=J.dataReady,ee=v(r,X);if(r.isDepthTexture)ne=B(r.format===Zt,r.type),Ge&&(Le?t.texStorage2D(e.TEXTURE_2D,1,ne,X.width,X.height):t.texImage2D(e.TEXTURE_2D,0,ne,X.width,X.height,0,fe,he,null));else if(r.isDataTexture)if(Re.length>0){Le&&Ge&&t.texStorage2D(e.TEXTURE_2D,ee,ne,Re[0].width,Re[0].height);for(let k=0,ue=Re.length;k<ue;k++)j=Re[k],Le?_&&t.texSubImage2D(e.TEXTURE_2D,k,0,0,j.width,j.height,fe,he,j.data):t.texImage2D(e.TEXTURE_2D,k,ne,j.width,j.height,0,fe,he,j.data);r.generateMipmaps=!1}else Le?(Ge&&t.texStorage2D(e.TEXTURE_2D,ee,ne,X.width,X.height),_&&te(r,X,fe,he)):t.texImage2D(e.TEXTURE_2D,0,ne,X.width,X.height,0,fe,he,X.data);else if(r.isCompressedTexture)if(r.isCompressedArrayTexture){Le&&Ge&&t.texStorage3D(e.TEXTURE_2D_ARRAY,ee,ne,Re[0].width,Re[0].height,X.depth);for(let k=0,ue=Re.length;k<ue;k++)if(j=Re[k],r.format!==Lt)if(fe!==null)if(Le){if(_)if(r.layerUpdates.size>0){const ie=va(j.width,j.height,r.format,r.type);for(const Y of r.layerUpdates){const ge=j.data.subarray(Y*ie/j.data.BYTES_PER_ELEMENT,(Y+1)*ie/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,k,0,0,Y,j.width,j.height,1,fe,ge)}r.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,k,0,0,0,j.width,j.height,X.depth,fe,j.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,k,ne,j.width,j.height,X.depth,0,j.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?_&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,k,0,0,0,j.width,j.height,X.depth,fe,he,j.data):t.texImage3D(e.TEXTURE_2D_ARRAY,k,ne,j.width,j.height,X.depth,0,fe,he,j.data)}else{Le&&Ge&&t.texStorage2D(e.TEXTURE_2D,ee,ne,Re[0].width,Re[0].height);for(let k=0,ue=Re.length;k<ue;k++)j=Re[k],r.format!==Lt?fe!==null?Le?_&&t.compressedTexSubImage2D(e.TEXTURE_2D,k,0,0,j.width,j.height,fe,j.data):t.compressedTexImage2D(e.TEXTURE_2D,k,ne,j.width,j.height,0,j.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?_&&t.texSubImage2D(e.TEXTURE_2D,k,0,0,j.width,j.height,fe,he,j.data):t.texImage2D(e.TEXTURE_2D,k,ne,j.width,j.height,0,fe,he,j.data)}else if(r.isDataArrayTexture)if(Le){if(Ge&&t.texStorage3D(e.TEXTURE_2D_ARRAY,ee,ne,X.width,X.height,X.depth),_)if(r.layerUpdates.size>0){const k=va(X.width,X.height,r.format,r.type);for(const ue of r.layerUpdates){const ie=X.data.subarray(ue*k/X.data.BYTES_PER_ELEMENT,(ue+1)*k/X.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ue,X.width,X.height,1,fe,he,ie)}r.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,fe,he,X.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,ne,X.width,X.height,X.depth,0,fe,he,X.data);else if(r.isData3DTexture)Le?(Ge&&t.texStorage3D(e.TEXTURE_3D,ee,ne,X.width,X.height,X.depth),_&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,fe,he,X.data)):t.texImage3D(e.TEXTURE_3D,0,ne,X.width,X.height,X.depth,0,fe,he,X.data);else if(r.isFramebufferTexture){if(Ge)if(Le)t.texStorage2D(e.TEXTURE_2D,ee,ne,X.width,X.height);else{let k=X.width,ue=X.height;for(let ie=0;ie<ee;ie++)t.texImage2D(e.TEXTURE_2D,ie,ne,k,ue,0,fe,he,null),k>>=1,ue>>=1}}else if(r.isHTMLTexture){if("texElementImage2D"in e){const k=e.canvas;if(k.hasAttribute("layoutsubtree")||k.setAttribute("layoutsubtree","true"),X.parentNode!==k){k.appendChild(X),D.add(r),k.onpaint=Ce=>{const at=Ce.changedElements;for(const ke of D)at.includes(ke.image)&&(ke.needsUpdate=!0)},k.requestPaint();return}const ue=0,ie=e.RGBA,Y=e.RGBA,ge=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,ue,ie,Y,ge,X),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Le&&Ge){const k=it(Re[0]);t.texStorage2D(e.TEXTURE_2D,ee,ne,k.width,k.height)}for(let k=0,ue=Re.length;k<ue;k++)j=Re[k],Le?_&&t.texSubImage2D(e.TEXTURE_2D,k,0,0,fe,he,j):t.texImage2D(e.TEXTURE_2D,k,ne,fe,he,j);r.generateMipmaps=!1}else if(Le){if(Ge){const k=it(X);t.texStorage2D(e.TEXTURE_2D,ee,ne,k.width,k.height)}_&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,fe,he,X)}else t.texImage2D(e.TEXTURE_2D,0,ne,fe,he,X);s(r)&&h(z),re.__version=J.version,r.onUpdate&&r.onUpdate(r)}f.__version=r.version}function be(f,r,b){if(r.image.length!==6)return;const z=K(f,r),q=r.source;t.bindTexture(e.TEXTURE_CUBE_MAP,f.__webglTexture,e.TEXTURE0+b);const J=i.get(q);if(q.version!==J.__version||z===!0){t.activeTexture(e.TEXTURE0+b);const re=et.getPrimaries(et.workingColorSpace),V=r.colorSpace===qt?null:et.getPrimaries(r.colorSpace),X=r.colorSpace===qt||re===V?e.NONE:e.BROWSER_DEFAULT_WEBGL;t.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),t.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),t.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment),t.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);const fe=r.isCompressedTexture||r.image[0].isCompressedTexture,he=r.image[0]&&r.image[0].isDataTexture,ne=[];for(let Y=0;Y<6;Y++)!fe&&!he?ne[Y]=c(r.image[Y],!0,l.maxCubemapSize):ne[Y]=he?r.image[Y].image:r.image[Y],ne[Y]=oe(r,ne[Y]);const j=ne[0],Re=a.convert(r.format,r.colorSpace),Le=a.convert(r.type),Ge=T(r.internalFormat,Re,Le,r.normalized,r.colorSpace),_=r.isVideoTexture!==!0,ee=J.__version===void 0||z===!0,k=q.dataReady;let ue=v(r,j);we(e.TEXTURE_CUBE_MAP,r);let ie;if(fe){_&&ee&&t.texStorage2D(e.TEXTURE_CUBE_MAP,ue,Ge,j.width,j.height);for(let Y=0;Y<6;Y++){ie=ne[Y].mipmaps;for(let ge=0;ge<ie.length;ge++){const Ce=ie[ge];r.format!==Lt?Re!==null?_?k&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ge,0,0,Ce.width,Ce.height,Re,Ce.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ge,Ge,Ce.width,Ce.height,0,Ce.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_?k&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ge,0,0,Ce.width,Ce.height,Re,Le,Ce.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ge,Ge,Ce.width,Ce.height,0,Re,Le,Ce.data)}}}else{if(ie=r.mipmaps,_&&ee){ie.length>0&&ue++;const Y=it(ne[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,ue,Ge,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(he){_?k&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ne[Y].width,ne[Y].height,Re,Le,ne[Y].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ge,ne[Y].width,ne[Y].height,0,Re,Le,ne[Y].data);for(let ge=0;ge<ie.length;ge++){const at=ie[ge].image[Y].image;_?k&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ge+1,0,0,at.width,at.height,Re,Le,at.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ge+1,Ge,at.width,at.height,0,Re,Le,at.data)}}else{_?k&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Re,Le,ne[Y]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ge,Re,Le,ne[Y]);for(let ge=0;ge<ie.length;ge++){const Ce=ie[ge];_?k&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ge+1,0,0,Re,Le,Ce.image[Y]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ge+1,Ge,Re,Le,Ce.image[Y])}}}s(r)&&h(e.TEXTURE_CUBE_MAP),J.__version=q.version,r.onUpdate&&r.onUpdate(r)}f.__version=r.version}function Te(f,r,b,z,q,J){const re=a.convert(b.format,b.colorSpace),V=a.convert(b.type),X=T(b.internalFormat,re,V,b.normalized,b.colorSpace),fe=i.get(r),he=i.get(b);if(he.__renderTarget=r,!fe.__hasExternalTextures){const ne=Math.max(1,r.width>>J),j=Math.max(1,r.height>>J);q===e.TEXTURE_3D||q===e.TEXTURE_2D_ARRAY?t.texImage3D(q,J,X,ne,j,r.depth,0,re,V,null):t.texImage2D(q,J,X,ne,j,0,re,V,null)}t.bindFramebuffer(e.FRAMEBUFFER,f),ye(r)?m.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,z,q,he.__webglTexture,0,ct(r)):(q===e.TEXTURE_2D||q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,z,q,he.__webglTexture,J),t.bindFramebuffer(e.FRAMEBUFFER,null)}function tt(f,r,b){if(e.bindRenderbuffer(e.RENDERBUFFER,f),r.depthBuffer){const z=r.depthTexture,q=z&&z.isDepthTexture?z.type:null,J=B(r.stencilBuffer,q),re=r.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;ye(r)?m.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ct(r),J,r.width,r.height):b?e.renderbufferStorageMultisample(e.RENDERBUFFER,ct(r),J,r.width,r.height):e.renderbufferStorage(e.RENDERBUFFER,J,r.width,r.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,re,e.RENDERBUFFER,f)}else{const z=r.textures;for(let q=0;q<z.length;q++){const J=z[q],re=a.convert(J.format,J.colorSpace),V=a.convert(J.type),X=T(J.internalFormat,re,V,J.normalized,J.colorSpace);ye(r)?m.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ct(r),X,r.width,r.height):b?e.renderbufferStorageMultisample(e.RENDERBUFFER,ct(r),X,r.width,r.height):e.renderbufferStorage(e.RENDERBUFFER,X,r.width,r.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ne(f,r,b){const z=r.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(e.FRAMEBUFFER,f),!(r.depthTexture&&r.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(r.depthTexture);if(q.__renderTarget=r,(!q.__webglTexture||r.depthTexture.image.width!==r.width||r.depthTexture.image.height!==r.height)&&(r.depthTexture.image.width=r.width,r.depthTexture.image.height=r.height,r.depthTexture.needsUpdate=!0),z){if(q.__webglInit===void 0&&(q.__webglInit=!0,r.depthTexture.addEventListener("dispose",w)),q.__webglTexture===void 0){q.__webglTexture=e.createTexture(),t.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),we(e.TEXTURE_CUBE_MAP,r.depthTexture);const fe=a.convert(r.depthTexture.format),he=a.convert(r.depthTexture.type);let ne;r.depthTexture.format===Yt?ne=e.DEPTH_COMPONENT24:r.depthTexture.format===Zt&&(ne=e.DEPTH24_STENCIL8);for(let j=0;j<6;j++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ne,r.width,r.height,0,fe,he,null)}}else Q(r.depthTexture,0);const J=q.__webglTexture,re=ct(r),V=z?e.TEXTURE_CUBE_MAP_POSITIVE_X+b:e.TEXTURE_2D,X=r.depthTexture.format===Zt?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(r.depthTexture.format===Yt)ye(r)?m.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,X,V,J,0,re):e.framebufferTexture2D(e.FRAMEBUFFER,X,V,J,0);else if(r.depthTexture.format===Zt)ye(r)?m.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,X,V,J,0,re):e.framebufferTexture2D(e.FRAMEBUFFER,X,V,J,0);else throw new Error("Unknown depthTexture format")}function We(f){const r=i.get(f),b=f.isWebGLCubeRenderTarget===!0;if(r.__boundDepthTexture!==f.depthTexture){const z=f.depthTexture;if(r.__depthDisposeCallback&&r.__depthDisposeCallback(),z){const q=()=>{delete r.__boundDepthTexture,delete r.__depthDisposeCallback,z.removeEventListener("dispose",q)};z.addEventListener("dispose",q),r.__depthDisposeCallback=q}r.__boundDepthTexture=z}if(f.depthTexture&&!r.__autoAllocateDepthBuffer)if(b)for(let z=0;z<6;z++)Ne(r.__webglFramebuffer[z],f,z);else{const z=f.texture.mipmaps;z&&z.length>0?Ne(r.__webglFramebuffer[0],f,0):Ne(r.__webglFramebuffer,f,0)}else if(b){r.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[z]),r.__webglDepthbuffer[z]===void 0)r.__webglDepthbuffer[z]=e.createRenderbuffer(),tt(r.__webglDepthbuffer[z],f,!1);else{const q=f.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,J=r.__webglDepthbuffer[z];e.bindRenderbuffer(e.RENDERBUFFER,J),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,J)}}else{const z=f.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer),r.__webglDepthbuffer===void 0)r.__webglDepthbuffer=e.createRenderbuffer(),tt(r.__webglDepthbuffer,f,!1);else{const q=f.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,J=r.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,J),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,J)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function Je(f,r,b){const z=i.get(f);r!==void 0&&Te(z.__webglFramebuffer,f,f.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),b!==void 0&&We(f)}function Ie(f){const r=f.texture,b=i.get(f),z=i.get(r);f.addEventListener("dispose",d);const q=f.textures,J=f.isWebGLCubeRenderTarget===!0,re=q.length>1;if(re||(z.__webglTexture===void 0&&(z.__webglTexture=e.createTexture()),z.__version=r.version,u.memory.textures++),J){b.__webglFramebuffer=[];for(let V=0;V<6;V++)if(r.mipmaps&&r.mipmaps.length>0){b.__webglFramebuffer[V]=[];for(let X=0;X<r.mipmaps.length;X++)b.__webglFramebuffer[V][X]=e.createFramebuffer()}else b.__webglFramebuffer[V]=e.createFramebuffer()}else{if(r.mipmaps&&r.mipmaps.length>0){b.__webglFramebuffer=[];for(let V=0;V<r.mipmaps.length;V++)b.__webglFramebuffer[V]=e.createFramebuffer()}else b.__webglFramebuffer=e.createFramebuffer();if(re)for(let V=0,X=q.length;V<X;V++){const fe=i.get(q[V]);fe.__webglTexture===void 0&&(fe.__webglTexture=e.createTexture(),u.memory.textures++)}if(f.samples>0&&ye(f)===!1){b.__webglMultisampledFramebuffer=e.createFramebuffer(),b.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let V=0;V<q.length;V++){const X=q[V];b.__webglColorRenderbuffer[V]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,b.__webglColorRenderbuffer[V]);const fe=a.convert(X.format,X.colorSpace),he=a.convert(X.type),ne=T(X.internalFormat,fe,he,X.normalized,X.colorSpace,f.isXRRenderTarget===!0),j=ct(f);e.renderbufferStorageMultisample(e.RENDERBUFFER,j,ne,f.width,f.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+V,e.RENDERBUFFER,b.__webglColorRenderbuffer[V])}e.bindRenderbuffer(e.RENDERBUFFER,null),f.depthBuffer&&(b.__webglDepthRenderbuffer=e.createRenderbuffer(),tt(b.__webglDepthRenderbuffer,f,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(J){t.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture),we(e.TEXTURE_CUBE_MAP,r);for(let V=0;V<6;V++)if(r.mipmaps&&r.mipmaps.length>0)for(let X=0;X<r.mipmaps.length;X++)Te(b.__webglFramebuffer[V][X],f,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+V,X);else Te(b.__webglFramebuffer[V],f,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);s(r)&&h(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let V=0,X=q.length;V<X;V++){const fe=q[V],he=i.get(fe);let ne=e.TEXTURE_2D;(f.isWebGL3DRenderTarget||f.isWebGLArrayRenderTarget)&&(ne=f.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ne,he.__webglTexture),we(ne,fe),Te(b.__webglFramebuffer,f,fe,e.COLOR_ATTACHMENT0+V,ne,0),s(fe)&&h(ne)}t.unbindTexture()}else{let V=e.TEXTURE_2D;if((f.isWebGL3DRenderTarget||f.isWebGLArrayRenderTarget)&&(V=f.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(V,z.__webglTexture),we(V,r),r.mipmaps&&r.mipmaps.length>0)for(let X=0;X<r.mipmaps.length;X++)Te(b.__webglFramebuffer[X],f,r,e.COLOR_ATTACHMENT0,V,X);else Te(b.__webglFramebuffer,f,r,e.COLOR_ATTACHMENT0,V,0);s(r)&&h(V),t.unbindTexture()}f.depthBuffer&&We(f)}function lt(f){const r=f.textures;for(let b=0,z=r.length;b<z;b++){const q=r[b];if(s(q)){const J=A(f),re=i.get(q).__webglTexture;t.bindTexture(J,re),h(J),t.unbindTexture()}}}const nt=[],vt=[];function S(f){if(f.samples>0){if(ye(f)===!1){const r=f.textures,b=f.width,z=f.height;let q=e.COLOR_BUFFER_BIT;const J=f.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,re=i.get(f),V=r.length>1;if(V)for(let fe=0;fe<r.length;fe++)t.bindFramebuffer(e.FRAMEBUFFER,re.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+fe,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,re.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+fe,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);const X=f.texture.mipmaps;X&&X.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let fe=0;fe<r.length;fe++){if(f.resolveDepthBuffer&&(f.depthBuffer&&(q|=e.DEPTH_BUFFER_BIT),f.stencilBuffer&&f.resolveStencilBuffer&&(q|=e.STENCIL_BUFFER_BIT)),V){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,re.__webglColorRenderbuffer[fe]);const he=i.get(r[fe]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,he,0)}e.blitFramebuffer(0,0,b,z,0,0,b,z,q,e.NEAREST),C===!0&&(nt.length=0,vt.length=0,nt.push(e.COLOR_ATTACHMENT0+fe),f.depthBuffer&&f.resolveDepthBuffer===!1&&(nt.push(J),vt.push(J),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,vt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,nt))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),V)for(let fe=0;fe<r.length;fe++){t.bindFramebuffer(e.FRAMEBUFFER,re.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+fe,e.RENDERBUFFER,re.__webglColorRenderbuffer[fe]);const he=i.get(r[fe]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,re.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+fe,e.TEXTURE_2D,he,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(f.depthBuffer&&f.resolveDepthBuffer===!1&&C){const r=f.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[r])}}}function ct(f){return Math.min(l.maxSamples,f.samples)}function ye(f){const r=i.get(f);return f.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&r.__useRenderToTexture!==!1}function $e(f){const r=u.render.frame;W.get(f)!==r&&(W.set(f,r),f.update())}function oe(f,r){const b=f.colorSpace,z=f.format,q=f.type;return f.isCompressedTexture===!0||f.isVideoTexture===!0||b!==Kn&&b!==qt&&(et.getTransfer(b)===Ye?(z!==Lt||q!==xt)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",b)),r}function it(f){return typeof HTMLImageElement<"u"&&f instanceof HTMLImageElement?(R.width=f.naturalWidth||f.width,R.height=f.naturalHeight||f.height):typeof VideoFrame<"u"&&f instanceof VideoFrame?(R.width=f.displayWidth,R.height=f.displayHeight):(R.width=f.width,R.height=f.height),R}this.allocateTextureUnit=G,this.resetTextureUnits=$,this.getTextureUnits=Z,this.setTextureUnits=I,this.setTexture2D=Q,this.setTexture2DArray=de,this.setTexture3D=ve,this.setTextureCube=Ae,this.rebindTextures=Je,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=S,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=ye,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function oo(e,n){function t(i,l=qt){let a;const u=et.getTransfer(l);if(i===xt)return e.UNSIGNED_BYTE;if(i===ui)return e.UNSIGNED_SHORT_4_4_4_4;if(i===pi)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Sa)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Ea)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===xa)return e.BYTE;if(i===Ma)return e.SHORT;if(i===mn)return e.UNSIGNED_SHORT;if(i===zn)return e.INT;if(i===Ht)return e.UNSIGNED_INT;if(i===yt)return e.FLOAT;if(i===Nt)return e.HALF_FLOAT;if(i===Ta)return e.ALPHA;if(i===Aa)return e.RGB;if(i===Lt)return e.RGBA;if(i===Yt)return e.DEPTH_COMPONENT;if(i===Zt)return e.DEPTH_STENCIL;if(i===Ra)return e.RED;if(i===hi)return e.RED_INTEGER;if(i===Kt)return e.RG;if(i===mi)return e.RG_INTEGER;if(i===_i)return e.RGBA_INTEGER;if(i===Un||i===Dn||i===wn||i===In)if(u===Ye)if(a=n.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Un)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Dn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wn)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===In)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=n.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Un)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Dn)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wn)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===In)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gi||i===vi||i===Si||i===Ei)if(a=n.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===gi)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vi)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Si)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ei)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xi||i===Mi||i===Ti||i===Ai||i===Ri||i===bn||i===bi)if(a=n.get("WEBGL_compressed_texture_etc"),a!==null){if(i===xi||i===Mi)return u===Ye?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Ti)return u===Ye?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ai)return a.COMPRESSED_R11_EAC;if(i===Ri)return a.COMPRESSED_SIGNED_R11_EAC;if(i===bn)return a.COMPRESSED_RG11_EAC;if(i===bi)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ci||i===Pi||i===Li||i===Ui||i===Di||i===wi||i===Ii||i===Ni||i===yi||i===Fi||i===Oi||i===Bi||i===Gi||i===Hi)if(a=n.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Ci)return u===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pi)return u===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Li)return u===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ui)return u===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Di)return u===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wi)return u===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ii)return u===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ni)return u===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yi)return u===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fi)return u===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oi)return u===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bi)return u===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gi)return u===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hi)return u===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vi||i===Wi||i===ki)if(a=n.get("EXT_texture_compression_bptc"),a!==null){if(i===Vi)return u===Ye?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wi)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ki)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zi||i===Xi||i===Cn||i===Ki)if(a=n.get("EXT_texture_compression_rgtc"),a!==null){if(i===zi)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Xi)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cn)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ki)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===an?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const od=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sd=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ld{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new Yi(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Pt({vertexShader:od,fragmentShader:sd,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ct(new kn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cd extends ba{constructor(n,t){super();const i=this;let l=null,a=1,u=null,m="local-floor",C=1,R=null,W=null,D=null,p=null,E=null,L=null;const H=typeof XRWebGLBinding<"u",c=new ld,s={},h=t.getContextAttributes();let A=null,T=null;const B=[],v=[],w=new pt;let d=null;const g=new fn;g.viewport=new ht;const F=new fn;F.viewport=new ht;const M=[g,F],O=new Ca;let $=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ce=B[K];return ce===void 0&&(ce=new Nn,B[K]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(K){let ce=B[K];return ce===void 0&&(ce=new Nn,B[K]=ce),ce.getGripSpace()},this.getHand=function(K){let ce=B[K];return ce===void 0&&(ce=new Nn,B[K]=ce),ce.getHandSpace()};function I(K){const ce=v.indexOf(K.inputSource);if(ce===-1)return;const te=B[ce];te!==void 0&&(te.update(K.inputSource,K.frame,R||u),te.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){l.removeEventListener("select",I),l.removeEventListener("selectstart",I),l.removeEventListener("selectend",I),l.removeEventListener("squeeze",I),l.removeEventListener("squeezestart",I),l.removeEventListener("squeezeend",I),l.removeEventListener("end",G),l.removeEventListener("inputsourceschange",N);for(let K=0;K<B.length;K++){const ce=v[K];ce!==null&&(v[K]=null,B[K].disconnect(ce))}$=null,Z=null,c.reset();for(const K in s)delete s[K];n.setRenderTarget(A),E=null,p=null,D=null,l=null,T=null,we.stop(),i.isPresenting=!1,n.setPixelRatio(d),n.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){m=K,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return R||u},this.setReferenceSpace=function(K){R=K},this.getBaseLayer=function(){return p!==null?p:E},this.getBinding=function(){return D===null&&H&&(D=new XRWebGLBinding(l,t)),D},this.getFrame=function(){return L},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(A=n.getRenderTarget(),l.addEventListener("select",I),l.addEventListener("selectstart",I),l.addEventListener("selectend",I),l.addEventListener("squeeze",I),l.addEventListener("squeezestart",I),l.addEventListener("squeezeend",I),l.addEventListener("end",G),l.addEventListener("inputsourceschange",N),h.xrCompatible!==!0&&await t.makeXRCompatible(),d=n.getPixelRatio(),n.getSize(w),H&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Me=null,be=null;h.depth&&(be=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=h.stencil?Zt:Yt,Me=h.stencil?an:Ht);const Te={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:a};D=this.getBinding(),p=D.createProjectionLayer(Te),l.updateRenderState({layers:[p]}),n.setPixelRatio(1),n.setSize(p.textureWidth,p.textureHeight,!1),T=new Tt(p.textureWidth,p.textureHeight,{format:Lt,type:xt,depthTexture:new tn(p.textureWidth,p.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:h.stencil,colorSpace:n.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const te={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:a};E=new XRWebGLLayer(l,t,te),l.updateRenderState({baseLayer:E}),n.setPixelRatio(1),n.setSize(E.framebufferWidth,E.framebufferHeight,!1),T=new Tt(E.framebufferWidth,E.framebufferHeight,{format:Lt,type:xt,colorSpace:n.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(C),R=null,u=await l.requestReferenceSpace(m),we.setContext(l),we.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return c.getDepthTexture()};function N(K){for(let ce=0;ce<K.removed.length;ce++){const te=K.removed[ce],Me=v.indexOf(te);Me>=0&&(v[Me]=null,B[Me].disconnect(te))}for(let ce=0;ce<K.added.length;ce++){const te=K.added[ce];let Me=v.indexOf(te);if(Me===-1){for(let Te=0;Te<B.length;Te++)if(Te>=v.length){v.push(te),Me=Te;break}else if(v[Te]===null){v[Te]=te,Me=Te;break}if(Me===-1)break}const be=B[Me];be&&be.connect(te)}}const Q=new Fe,de=new Fe;function ve(K,ce,te){Q.setFromMatrixPosition(ce.matrixWorld),de.setFromMatrixPosition(te.matrixWorld);const Me=Q.distanceTo(de),be=ce.projectionMatrix.elements,Te=te.projectionMatrix.elements,tt=be[14]/(be[10]-1),Ne=be[14]/(be[10]+1),We=(be[9]+1)/be[5],Je=(be[9]-1)/be[5],Ie=(be[8]-1)/be[0],lt=(Te[8]+1)/Te[0],nt=tt*Ie,vt=tt*lt,S=Me/(-Ie+lt),ct=S*-Ie;if(ce.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ct),K.translateZ(S),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),be[10]===-1)K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const ye=tt+S,$e=Ne+S,oe=nt-ct,it=vt+(Me-ct),f=We*Ne/$e*ye,r=Je*Ne/$e*ye;K.projectionMatrix.makePerspective(oe,it,f,r,ye,$e),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ae(K,ce){ce===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ce.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;let ce=K.near,te=K.far;c.texture!==null&&(c.depthNear>0&&(ce=c.depthNear),c.depthFar>0&&(te=c.depthFar)),O.near=F.near=g.near=ce,O.far=F.far=g.far=te,($!==O.near||Z!==O.far)&&(l.updateRenderState({depthNear:O.near,depthFar:O.far}),$=O.near,Z=O.far),O.layers.mask=K.layers.mask|6,g.layers.mask=O.layers.mask&-5,F.layers.mask=O.layers.mask&-3;const Me=K.parent,be=O.cameras;Ae(O,Me);for(let Te=0;Te<be.length;Te++)Ae(be[Te],Me);be.length===2?ve(O,g,F):O.projectionMatrix.copy(g.projectionMatrix),xe(K,O,Me)};function xe(K,ce,te){te===null?K.matrix.copy(ce.matrixWorld):(K.matrix.copy(te.matrixWorld),K.matrix.invert(),K.matrix.multiply(ce.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=So*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(p===null&&E===null))return C},this.setFoveation=function(K){C=K,p!==null&&(p.fixedFoveation=K),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=K)},this.hasDepthSensing=function(){return c.texture!==null},this.getDepthSensingMesh=function(){return c.getMesh(O)},this.getCameraTexture=function(K){return s[K]};let Ve=null;function Ze(K,ce){if(W=ce.getViewerPose(R||u),L=ce,W!==null){const te=W.views;E!==null&&(n.setRenderTargetFramebuffer(T,E.framebuffer),n.setRenderTarget(T));let Me=!1;te.length!==O.cameras.length&&(O.cameras.length=0,Me=!0);for(let Ne=0;Ne<te.length;Ne++){const We=te[Ne];let Je=null;if(E!==null)Je=E.getViewport(We);else{const lt=D.getViewSubImage(p,We);Je=lt.viewport,Ne===0&&(n.setRenderTargetTextures(T,lt.colorTexture,lt.depthStencilTexture),n.setRenderTarget(T))}let Ie=M[Ne];Ie===void 0&&(Ie=new fn,Ie.layers.enable(Ne),Ie.viewport=new ht,M[Ne]=Ie),Ie.matrix.fromArray(We.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(We.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Je.x,Je.y,Je.width,Je.height),Ne===0&&(O.matrix.copy(Ie.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Me===!0&&O.cameras.push(Ie)}const be=l.enabledFeatures;if(be&&be.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&H){D=i.getBinding();const Ne=D.getDepthInformation(te[0]);Ne&&Ne.isValid&&Ne.texture&&c.init(Ne,l.renderState)}if(be&&be.includes("camera-access")&&H){n.state.unbindTexture(),D=i.getBinding();for(let Ne=0;Ne<te.length;Ne++){const We=te[Ne].camera;if(We){let Je=s[We];Je||(Je=new Yi,s[We]=Je);const Ie=D.getCameraImage(We);Je.sourceTexture=Ie}}}}for(let te=0;te<B.length;te++){const Me=v[te],be=B[te];Me!==null&&be!==void 0&&be.update(Me,ce,R||u)}Ve&&Ve(K,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),L=null}const we=new wa;we.setAnimationLoop(Ze),this.setAnimationLoop=function(K){Ve=K},this.dispose=function(){}}}const fd=new kt,so=new Oe;so.set(-1,0,0,0,1,0,0,0,1);function dd(e,n){function t(c,s){c.matrixAutoUpdate===!0&&c.updateMatrix(),s.value.copy(c.matrix)}function i(c,s){s.color.getRGB(c.fogColor.value,hr(e)),s.isFog?(c.fogNear.value=s.near,c.fogFar.value=s.far):s.isFogExp2&&(c.fogDensity.value=s.density)}function l(c,s,h,A,T){s.isNodeMaterial?s.uniformsNeedUpdate=!1:s.isMeshBasicMaterial?a(c,s):s.isMeshLambertMaterial?(a(c,s),s.envMap&&(c.envMapIntensity.value=s.envMapIntensity)):s.isMeshToonMaterial?(a(c,s),D(c,s)):s.isMeshPhongMaterial?(a(c,s),W(c,s),s.envMap&&(c.envMapIntensity.value=s.envMapIntensity)):s.isMeshStandardMaterial?(a(c,s),p(c,s),s.isMeshPhysicalMaterial&&E(c,s,T)):s.isMeshMatcapMaterial?(a(c,s),L(c,s)):s.isMeshDepthMaterial?a(c,s):s.isMeshDistanceMaterial?(a(c,s),H(c,s)):s.isMeshNormalMaterial?a(c,s):s.isLineBasicMaterial?(u(c,s),s.isLineDashedMaterial&&m(c,s)):s.isPointsMaterial?C(c,s,h,A):s.isSpriteMaterial?R(c,s):s.isShadowMaterial?(c.color.value.copy(s.color),c.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}function a(c,s){c.opacity.value=s.opacity,s.color&&c.diffuse.value.copy(s.color),s.emissive&&c.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(c.map.value=s.map,t(s.map,c.mapTransform)),s.alphaMap&&(c.alphaMap.value=s.alphaMap,t(s.alphaMap,c.alphaMapTransform)),s.bumpMap&&(c.bumpMap.value=s.bumpMap,t(s.bumpMap,c.bumpMapTransform),c.bumpScale.value=s.bumpScale,s.side===_t&&(c.bumpScale.value*=-1)),s.normalMap&&(c.normalMap.value=s.normalMap,t(s.normalMap,c.normalMapTransform),c.normalScale.value.copy(s.normalScale),s.side===_t&&c.normalScale.value.negate()),s.displacementMap&&(c.displacementMap.value=s.displacementMap,t(s.displacementMap,c.displacementMapTransform),c.displacementScale.value=s.displacementScale,c.displacementBias.value=s.displacementBias),s.emissiveMap&&(c.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,c.emissiveMapTransform)),s.specularMap&&(c.specularMap.value=s.specularMap,t(s.specularMap,c.specularMapTransform)),s.alphaTest>0&&(c.alphaTest.value=s.alphaTest);const h=n.get(s),A=h.envMap,T=h.envMapRotation;A&&(c.envMap.value=A,c.envMapRotation.value.setFromMatrix4(fd.makeRotationFromEuler(T)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&c.envMapRotation.value.premultiply(so),c.reflectivity.value=s.reflectivity,c.ior.value=s.ior,c.refractionRatio.value=s.refractionRatio),s.lightMap&&(c.lightMap.value=s.lightMap,c.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,c.lightMapTransform)),s.aoMap&&(c.aoMap.value=s.aoMap,c.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,c.aoMapTransform))}function u(c,s){c.diffuse.value.copy(s.color),c.opacity.value=s.opacity,s.map&&(c.map.value=s.map,t(s.map,c.mapTransform))}function m(c,s){c.dashSize.value=s.dashSize,c.totalSize.value=s.dashSize+s.gapSize,c.scale.value=s.scale}function C(c,s,h,A){c.diffuse.value.copy(s.color),c.opacity.value=s.opacity,c.size.value=s.size*h,c.scale.value=A*.5,s.map&&(c.map.value=s.map,t(s.map,c.uvTransform)),s.alphaMap&&(c.alphaMap.value=s.alphaMap,t(s.alphaMap,c.alphaMapTransform)),s.alphaTest>0&&(c.alphaTest.value=s.alphaTest)}function R(c,s){c.diffuse.value.copy(s.color),c.opacity.value=s.opacity,c.rotation.value=s.rotation,s.map&&(c.map.value=s.map,t(s.map,c.mapTransform)),s.alphaMap&&(c.alphaMap.value=s.alphaMap,t(s.alphaMap,c.alphaMapTransform)),s.alphaTest>0&&(c.alphaTest.value=s.alphaTest)}function W(c,s){c.specular.value.copy(s.specular),c.shininess.value=Math.max(s.shininess,1e-4)}function D(c,s){s.gradientMap&&(c.gradientMap.value=s.gradientMap)}function p(c,s){c.metalness.value=s.metalness,s.metalnessMap&&(c.metalnessMap.value=s.metalnessMap,t(s.metalnessMap,c.metalnessMapTransform)),c.roughness.value=s.roughness,s.roughnessMap&&(c.roughnessMap.value=s.roughnessMap,t(s.roughnessMap,c.roughnessMapTransform)),s.envMap&&(c.envMapIntensity.value=s.envMapIntensity)}function E(c,s,h){c.ior.value=s.ior,s.sheen>0&&(c.sheenColor.value.copy(s.sheenColor).multiplyScalar(s.sheen),c.sheenRoughness.value=s.sheenRoughness,s.sheenColorMap&&(c.sheenColorMap.value=s.sheenColorMap,t(s.sheenColorMap,c.sheenColorMapTransform)),s.sheenRoughnessMap&&(c.sheenRoughnessMap.value=s.sheenRoughnessMap,t(s.sheenRoughnessMap,c.sheenRoughnessMapTransform))),s.clearcoat>0&&(c.clearcoat.value=s.clearcoat,c.clearcoatRoughness.value=s.clearcoatRoughness,s.clearcoatMap&&(c.clearcoatMap.value=s.clearcoatMap,t(s.clearcoatMap,c.clearcoatMapTransform)),s.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=s.clearcoatRoughnessMap,t(s.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),s.clearcoatNormalMap&&(c.clearcoatNormalMap.value=s.clearcoatNormalMap,t(s.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(s.clearcoatNormalScale),s.side===_t&&c.clearcoatNormalScale.value.negate())),s.dispersion>0&&(c.dispersion.value=s.dispersion),s.iridescence>0&&(c.iridescence.value=s.iridescence,c.iridescenceIOR.value=s.iridescenceIOR,c.iridescenceThicknessMinimum.value=s.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=s.iridescenceThicknessRange[1],s.iridescenceMap&&(c.iridescenceMap.value=s.iridescenceMap,t(s.iridescenceMap,c.iridescenceMapTransform)),s.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=s.iridescenceThicknessMap,t(s.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),s.transmission>0&&(c.transmission.value=s.transmission,c.transmissionSamplerMap.value=h.texture,c.transmissionSamplerSize.value.set(h.width,h.height),s.transmissionMap&&(c.transmissionMap.value=s.transmissionMap,t(s.transmissionMap,c.transmissionMapTransform)),c.thickness.value=s.thickness,s.thicknessMap&&(c.thicknessMap.value=s.thicknessMap,t(s.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=s.attenuationDistance,c.attenuationColor.value.copy(s.attenuationColor)),s.anisotropy>0&&(c.anisotropyVector.value.set(s.anisotropy*Math.cos(s.anisotropyRotation),s.anisotropy*Math.sin(s.anisotropyRotation)),s.anisotropyMap&&(c.anisotropyMap.value=s.anisotropyMap,t(s.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=s.specularIntensity,c.specularColor.value.copy(s.specularColor),s.specularColorMap&&(c.specularColorMap.value=s.specularColorMap,t(s.specularColorMap,c.specularColorMapTransform)),s.specularIntensityMap&&(c.specularIntensityMap.value=s.specularIntensityMap,t(s.specularIntensityMap,c.specularIntensityMapTransform))}function L(c,s){s.matcap&&(c.matcap.value=s.matcap)}function H(c,s){const h=n.get(s).light;c.referencePosition.value.setFromMatrixPosition(h.matrixWorld),c.nearDistance.value=h.shadow.camera.near,c.farDistance.value=h.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:l}}function ud(e,n,t,i){let l={},a={},u=[];const m=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function C(h,A){const T=A.program;i.uniformBlockBinding(h,T)}function R(h,A){let T=l[h.id];T===void 0&&(L(h),T=W(h),l[h.id]=T,h.addEventListener("dispose",c));const B=A.program;i.updateUBOMapping(h,B);const v=n.render.frame;a[h.id]!==v&&(p(h),a[h.id]=v)}function W(h){const A=D();h.__bindingPointIndex=A;const T=e.createBuffer(),B=h.__size,v=h.usage;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,B,v),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,A,T),T}function D(){for(let h=0;h<m;h++)if(u.indexOf(h)===-1)return u.push(h),h;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(h){const A=l[h.id],T=h.uniforms,B=h.__cache;e.bindBuffer(e.UNIFORM_BUFFER,A);for(let v=0,w=T.length;v<w;v++){const d=Array.isArray(T[v])?T[v]:[T[v]];for(let g=0,F=d.length;g<F;g++){const M=d[g];if(E(M,v,g,B)===!0){const O=M.__offset,$=Array.isArray(M.value)?M.value:[M.value];let Z=0;for(let I=0;I<$.length;I++){const G=$[I],N=H(G);typeof G=="number"||typeof G=="boolean"?(M.__data[0]=G,e.bufferSubData(e.UNIFORM_BUFFER,O+Z,M.__data)):G.isMatrix3?(M.__data[0]=G.elements[0],M.__data[1]=G.elements[1],M.__data[2]=G.elements[2],M.__data[3]=0,M.__data[4]=G.elements[3],M.__data[5]=G.elements[4],M.__data[6]=G.elements[5],M.__data[7]=0,M.__data[8]=G.elements[6],M.__data[9]=G.elements[7],M.__data[10]=G.elements[8],M.__data[11]=0):ArrayBuffer.isView(G)?M.__data.set(new G.constructor(G.buffer,G.byteOffset,M.__data.length)):(G.toArray(M.__data,Z),Z+=N.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,O,M.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function E(h,A,T,B){const v=h.value,w=A+"_"+T;if(B[w]===void 0)return typeof v=="number"||typeof v=="boolean"?B[w]=v:ArrayBuffer.isView(v)?B[w]=v.slice():B[w]=v.clone(),!0;{const d=B[w];if(typeof v=="number"||typeof v=="boolean"){if(d!==v)return B[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(d.equals(v)===!1)return d.copy(v),!0}}return!1}function L(h){const A=h.uniforms;let T=0;const B=16;for(let w=0,d=A.length;w<d;w++){const g=Array.isArray(A[w])?A[w]:[A[w]];for(let F=0,M=g.length;F<M;F++){const O=g[F],$=Array.isArray(O.value)?O.value:[O.value];for(let Z=0,I=$.length;Z<I;Z++){const G=$[Z],N=H(G),Q=T%B,de=Q%N.boundary,ve=Q+de;T+=de,ve!==0&&B-ve<N.storage&&(T+=B-ve),O.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=T,T+=N.storage}}}const v=T%B;return v>0&&(T+=B-v),h.__size=T,h.__cache={},this}function H(h){const A={boundary:0,storage:0};return typeof h=="number"||typeof h=="boolean"?(A.boundary=4,A.storage=4):h.isVector2?(A.boundary=8,A.storage=8):h.isVector3||h.isColor?(A.boundary=16,A.storage=12):h.isVector4?(A.boundary=16,A.storage=16):h.isMatrix3?(A.boundary=48,A.storage=48):h.isMatrix4?(A.boundary=64,A.storage=64):h.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(h)?(A.boundary=16,A.storage=h.byteLength):He("WebGLRenderer: Unsupported uniform value type.",h),A}function c(h){const A=h.target;A.removeEventListener("dispose",c);const T=u.indexOf(A.__bindingPointIndex);u.splice(T,1),e.deleteBuffer(l[A.id]),delete l[A.id],delete a[A.id]}function s(){for(const h in l)e.deleteBuffer(l[h]);u=[],l={},a={}}return{bind:C,update:R,dispose:s}}const pd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wt=null;function hd(){return wt===null&&(wt=new Pa(pd,16,16,Kt,Nt),wt.name="DFG_LUT",wt.minFilter=gt,wt.magFilter=gt,wt.wrapS=Pn,wt.wrapT=Pn,wt.generateMipmaps=!1,wt.needsUpdate=!0),wt}class md{constructor(n={}){const{canvas:t=La(),context:i=null,depth:l=!0,stencil:a=!1,alpha:u=!1,antialias:m=!1,premultipliedAlpha:C=!0,preserveDrawingBuffer:R=!1,powerPreference:W="default",failIfMajorPerformanceCaveat:D=!1,reversedDepthBuffer:p=!1,outputBufferType:E=xt}=n;this.isWebGLRenderer=!0;let L;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");L=i.getContextAttributes().alpha}else L=u;const H=E,c=new Set([_i,mi,hi]),s=new Set([xt,Ht,mn,an,ui,pi]),h=new Uint32Array(4),A=new Int32Array(4),T=new Fe;let B=null,v=null;const w=[],d=[];let g=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const F=this;let M=!1,O=null;this._outputColorSpace=Ua;let $=0,Z=0,I=null,G=-1,N=null;const Q=new ht,de=new ht;let ve=null;const Ae=new je(0);let xe=0,Ve=t.width,Ze=t.height,we=1,K=null,ce=null;const te=new ht(0,0,Ve,Ze),Me=new ht(0,0,Ve,Ze);let be=!1;const Te=new oi;let tt=!1,Ne=!1;const We=new kt,Je=new Fe,Ie=new ht,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function vt(){return I===null?we:1}let S=i;function ct(o,x){return t.getContext(o,x)}try{const o={alpha:!0,depth:l,stencil:a,antialias:m,premultipliedAlpha:C,preserveDrawingBuffer:R,powerPreference:W,failIfMajorPerformanceCaveat:D};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Da}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),S===null){const x="webgl2";if(S=ct(x,o),S===null)throw ct(x)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(o){throw qe("WebGLRenderer: "+o.message),o}let ye,$e,oe,it,f,r,b,z,q,J,re,V,X,fe,he,ne,j,Re,Le,Ge,_,ee,k;function ue(){ye=new hc(S),ye.init(),_=new oo(S,ye),$e=new oc(S,ye,n,_),oe=new rd(S,ye),$e.reversedDepthBuffer&&p&&oe.buffers.depth.setReversed(!0),it=new gc(S),f=new zf,r=new ad(S,ye,oe,f,$e,_,it),b=new pc(F),z=new xo(S),ee=new rc(S,z),q=new mc(S,z,it,ee),J=new Sc(S,q,z,ee,it),Re=new vc(S,$e,r),he=new sc(f),re=new kf(F,b,ye,$e,ee,he),V=new dd(F,f),X=new Kf,fe=new Jf(ye),j=new ic(F,b,oe,J,L,C),ne=new id(F,J,$e),k=new ud(S,it,$e,oe),Le=new ac(S,ye,it),Ge=new _c(S,ye,it),it.programs=re.programs,F.capabilities=$e,F.extensions=ye,F.properties=f,F.renderLists=X,F.shadowMap=ne,F.state=oe,F.info=it}ue(),H!==xt&&(g=new xc(H,t.width,t.height,l,a));const ie=new cd(F,S);this.xr=ie,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const o=ye.get("WEBGL_lose_context");o&&o.loseContext()},this.forceContextRestore=function(){const o=ye.get("WEBGL_lose_context");o&&o.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(o){o!==void 0&&(we=o,this.setSize(Ve,Ze,!1))},this.getSize=function(o){return o.set(Ve,Ze)},this.setSize=function(o,x,y=!0){if(ie.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}Ve=o,Ze=x,t.width=Math.floor(o*we),t.height=Math.floor(x*we),y===!0&&(t.style.width=o+"px",t.style.height=x+"px"),g!==null&&g.setSize(t.width,t.height),this.setViewport(0,0,o,x)},this.getDrawingBufferSize=function(o){return o.set(Ve*we,Ze*we).floor()},this.setDrawingBufferSize=function(o,x,y){Ve=o,Ze=x,we=y,t.width=Math.floor(o*y),t.height=Math.floor(x*y),this.setViewport(0,0,o,x)},this.setEffects=function(o){if(H===xt){qe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(o){for(let x=0;x<o.length;x++)if(o[x].isOutputPass===!0){He("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}g.setEffects(o||[])},this.getCurrentViewport=function(o){return o.copy(Q)},this.getViewport=function(o){return o.copy(te)},this.setViewport=function(o,x,y,P){o.isVector4?te.set(o.x,o.y,o.z,o.w):te.set(o,x,y,P),oe.viewport(Q.copy(te).multiplyScalar(we).round())},this.getScissor=function(o){return o.copy(Me)},this.setScissor=function(o,x,y,P){o.isVector4?Me.set(o.x,o.y,o.z,o.w):Me.set(o,x,y,P),oe.scissor(de.copy(Me).multiplyScalar(we).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(o){oe.setScissorTest(be=o)},this.setOpaqueSort=function(o){K=o},this.setTransparentSort=function(o){ce=o},this.getClearColor=function(o){return o.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor(...arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha(...arguments)},this.clear=function(o=!0,x=!0,y=!0){let P=0;if(o){let U=!1;if(I!==null){const le=I.texture.format;U=c.has(le)}if(U){const le=I.texture.type,me=s.has(le),se=j.getClearColor(),_e=j.getClearAlpha(),Se=se.r,Pe=se.g,De=se.b;me?(h[0]=Se,h[1]=Pe,h[2]=De,h[3]=_e,S.clearBufferuiv(S.COLOR,0,h)):(A[0]=Se,A[1]=Pe,A[2]=De,A[3]=_e,S.clearBufferiv(S.COLOR,0,A))}else P|=S.COLOR_BUFFER_BIT}x&&(P|=S.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),y&&(P|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P!==0&&S.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(o){o.setRenderer(this),O=o},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),j.dispose(),X.dispose(),fe.dispose(),f.dispose(),b.dispose(),J.dispose(),ee.dispose(),k.dispose(),re.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",or),ie.removeEventListener("sessionend",sr),Wt.stop()};function Y(o){o.preventDefault(),qi("WebGLRenderer: Context Lost."),M=!0}function ge(){qi("WebGLRenderer: Context Restored."),M=!1;const o=it.autoReset,x=ne.enabled,y=ne.autoUpdate,P=ne.needsUpdate,U=ne.type;ue(),it.autoReset=o,ne.enabled=x,ne.autoUpdate=y,ne.needsUpdate=P,ne.type=U}function Ce(o){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",o.statusMessage)}function at(o){const x=o.target;x.removeEventListener("dispose",at),ke(x)}function ke(o){It(o),f.remove(o)}function It(o){const x=f.get(o).programs;x!==void 0&&(x.forEach(function(y){re.releaseProgram(y)}),o.isShaderMaterial&&re.releaseShaderCache(o))}this.renderBufferDirect=function(o,x,y,P,U,le){x===null&&(x=lt);const me=U.isMesh&&U.matrixWorld.determinant()<0,se=fo(o,x,y,P,U);oe.setMaterial(P,me);let _e=y.index,Se=1;if(P.wireframe===!0){if(_e=q.getWireframeAttribute(y),_e===void 0)return;Se=2}const Pe=y.drawRange,De=y.attributes.position;let Ee=Pe.start*Se,ze=(Pe.start+Pe.count)*Se;le!==null&&(Ee=Math.max(Ee,le.start*Se),ze=Math.min(ze,(le.start+le.count)*Se)),_e!==null?(Ee=Math.max(Ee,0),ze=Math.min(ze,_e.count)):De!=null&&(Ee=Math.max(Ee,0),ze=Math.min(ze,De.count));const ot=ze-Ee;if(ot<0||ot===1/0)return;ee.setup(U,P,se,y,_e);let rt,Xe=Le;if(_e!==null&&(rt=z.get(_e),Xe=Ge,Xe.setIndex(rt)),U.isMesh)P.wireframe===!0?(oe.setLineWidth(P.wireframeLinewidth*vt()),Xe.setMode(S.LINES)):Xe.setMode(S.TRIANGLES);else if(U.isLine){let ut=P.linewidth;ut===void 0&&(ut=1),oe.setLineWidth(ut*vt()),U.isLineSegments?Xe.setMode(S.LINES):U.isLineLoop?Xe.setMode(S.LINE_LOOP):Xe.setMode(S.LINE_STRIP)}else U.isPoints?Xe.setMode(S.POINTS):U.isSprite&&Xe.setMode(S.TRIANGLES);if(U.isBatchedMesh)if(ye.get("WEBGL_multi_draw"))Xe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const ut=U._multiDrawStarts,pe=U._multiDrawCounts,St=U._multiDrawCount,Be=_e?z.get(_e).bytesPerElement:1,Et=f.get(P).currentProgram.getUniforms();for(let bt=0;bt<St;bt++)Et.setValue(S,"_gl_DrawID",bt),Xe.render(ut[bt]/Be,pe[bt])}else if(U.isInstancedMesh)Xe.renderInstances(Ee,ot,U.count);else if(y.isInstancedBufferGeometry){const ut=y._maxInstanceCount!==void 0?y._maxInstanceCount:1/0,pe=Math.min(y.instanceCount,ut);Xe.renderInstances(Ee,ot,pe)}else Xe.render(Ee,ot)};function Rt(o,x,y){o.transparent===!0&&o.side===Dt&&o.forceSinglePass===!1?(o.side=_t,o.needsUpdate=!0,En(o,x,y),o.side=jt,o.needsUpdate=!0,En(o,x,y),o.side=Dt):En(o,x,y)}this.compile=function(o,x,y=null){y===null&&(y=o),v=fe.get(y),v.init(x),d.push(v),y.traverseVisible(function(U){U.isLight&&U.layers.test(x.layers)&&(v.pushLight(U),U.castShadow&&v.pushShadow(U))}),o!==y&&o.traverseVisible(function(U){U.isLight&&U.layers.test(x.layers)&&(v.pushLight(U),U.castShadow&&v.pushShadow(U))}),v.setupLights();const P=new Set;return o.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const le=U.material;if(le)if(Array.isArray(le))for(let me=0;me<le.length;me++){const se=le[me];Rt(se,y,U),P.add(se)}else Rt(le,y,U),P.add(le)}),v=d.pop(),P},this.compileAsync=function(o,x,y=null){const P=this.compile(o,x,y);return new Promise(U=>{function le(){if(P.forEach(function(me){f.get(me).currentProgram.isReady()&&P.delete(me)}),P.size===0){U(o);return}setTimeout(le,10)}ye.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Hn=null;function lo(o){Hn&&Hn(o)}function or(){Wt.stop()}function sr(){Wt.start()}const Wt=new wa;Wt.setAnimationLoop(lo),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(o){Hn=o,ie.setAnimationLoop(o),o===null?Wt.stop():Wt.start()},ie.addEventListener("sessionstart",or),ie.addEventListener("sessionend",sr),this.render=function(o,x){if(x!==void 0&&x.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;O!==null&&O.renderStart(o,x);const y=ie.enabled===!0&&ie.isPresenting===!0,P=g!==null&&(I===null||y)&&g.begin(F,I);if(o.matrixWorldAutoUpdate===!0&&o.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(g===null||g.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(x),x=ie.getCamera()),o.isScene===!0&&o.onBeforeRender(F,o,x,I),v=fe.get(o,d.length),v.init(x),v.state.textureUnits=r.getTextureUnits(),d.push(v),We.multiplyMatrices(x.projectionMatrix,x.matrixWorldInverse),Te.setFromProjectionMatrix(We,Zi,x.reversedDepth),Ne=this.localClippingEnabled,tt=he.init(this.clippingPlanes,Ne),B=X.get(o,w.length),B.init(),w.push(B),ie.enabled===!0&&ie.isPresenting===!0){const me=F.xr.getDepthSensingMesh();me!==null&&Vn(me,x,-1/0,F.sortObjects)}Vn(o,x,0,F.sortObjects),B.finish(),F.sortObjects===!0&&B.sort(K,ce),nt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,nt&&j.addToRenderList(B,o),this.info.render.frame++,tt===!0&&he.beginShadows();const U=v.state.shadowsArray;if(ne.render(U,o,x),tt===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset(),(P&&g.hasRenderPass())===!1){const me=B.opaque,se=B.transmissive;if(v.setupLights(),x.isArrayCamera){const _e=x.cameras;if(se.length>0)for(let Se=0,Pe=_e.length;Se<Pe;Se++){const De=_e[Se];cr(me,se,o,De)}nt&&j.render(o);for(let Se=0,Pe=_e.length;Se<Pe;Se++){const De=_e[Se];lr(B,o,De,De.viewport)}}else se.length>0&&cr(me,se,o,x),nt&&j.render(o),lr(B,o,x)}I!==null&&Z===0&&(r.updateMultisampleRenderTarget(I),r.updateRenderTargetMipmap(I)),P&&g.end(F),o.isScene===!0&&o.onAfterRender(F,o,x),ee.resetDefaultState(),G=-1,N=null,d.pop(),d.length>0?(v=d[d.length-1],r.setTextureUnits(v.state.textureUnits),tt===!0&&he.setGlobalState(F.clippingPlanes,v.state.camera)):v=null,w.pop(),w.length>0?B=w[w.length-1]:B=null,O!==null&&O.renderEnd()};function Vn(o,x,y,P){if(o.visible===!1)return;if(o.layers.test(x.layers)){if(o.isGroup)y=o.renderOrder;else if(o.isLOD)o.autoUpdate===!0&&o.update(x);else if(o.isLightProbeGrid)v.pushLightProbeGrid(o);else if(o.isLight)v.pushLight(o),o.castShadow&&v.pushShadow(o);else if(o.isSprite){if(!o.frustumCulled||Te.intersectsSprite(o)){P&&Ie.setFromMatrixPosition(o.matrixWorld).applyMatrix4(We);const me=J.update(o),se=o.material;se.visible&&B.push(o,me,se,y,Ie.z,null)}}else if((o.isMesh||o.isLine||o.isPoints)&&(!o.frustumCulled||Te.intersectsObject(o))){const me=J.update(o),se=o.material;if(P&&(o.boundingSphere!==void 0?(o.boundingSphere===null&&o.computeBoundingSphere(),Ie.copy(o.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ie.copy(me.boundingSphere.center)),Ie.applyMatrix4(o.matrixWorld).applyMatrix4(We)),Array.isArray(se)){const _e=me.groups;for(let Se=0,Pe=_e.length;Se<Pe;Se++){const De=_e[Se],Ee=se[De.materialIndex];Ee&&Ee.visible&&B.push(o,me,Ee,y,Ie.z,De)}}else se.visible&&B.push(o,me,se,y,Ie.z,null)}}const le=o.children;for(let me=0,se=le.length;me<se;me++)Vn(le[me],x,y,P)}function lr(o,x,y,P){const{opaque:U,transmissive:le,transparent:me}=o;v.setupLightsView(y),tt===!0&&he.setGlobalState(F.clippingPlanes,y),P&&oe.viewport(Q.copy(P)),U.length>0&&Sn(U,x,y),le.length>0&&Sn(le,x,y),me.length>0&&Sn(me,x,y),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function cr(o,x,y,P){if((y.isScene===!0?y.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[P.id]===void 0){const Ee=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[P.id]=new Tt(1,1,{generateMipmaps:!0,type:Ee?Nt:xt,minFilter:Xt,samples:Math.max(4,$e.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace})}const le=v.state.transmissionRenderTarget[P.id],me=P.viewport||Q;le.setSize(me.z*F.transmissionResolutionScale,me.w*F.transmissionResolutionScale);const se=F.getRenderTarget(),_e=F.getActiveCubeFace(),Se=F.getActiveMipmapLevel();F.setRenderTarget(le),F.getClearColor(Ae),xe=F.getClearAlpha(),xe<1&&F.setClearColor(16777215,.5),F.clear(),nt&&j.render(y);const Pe=F.toneMapping;F.toneMapping=Mt;const De=P.viewport;if(P.viewport!==void 0&&(P.viewport=void 0),v.setupLightsView(P),tt===!0&&he.setGlobalState(F.clippingPlanes,P),Sn(o,y,P),r.updateMultisampleRenderTarget(le),r.updateRenderTargetMipmap(le),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let ze=0,ot=x.length;ze<ot;ze++){const rt=x[ze],{object:Xe,geometry:ut,material:pe,group:St}=rt;if(pe.side===Dt&&Xe.layers.test(P.layers)){const Be=pe.side;pe.side=_t,pe.needsUpdate=!0,fr(Xe,y,P,ut,pe,St),pe.side=Be,pe.needsUpdate=!0,Ee=!0}}Ee===!0&&(r.updateMultisampleRenderTarget(le),r.updateRenderTargetMipmap(le))}F.setRenderTarget(se,_e,Se),F.setClearColor(Ae,xe),De!==void 0&&(P.viewport=De),F.toneMapping=Pe}function Sn(o,x,y){const P=x.isScene===!0?x.overrideMaterial:null;for(let U=0,le=o.length;U<le;U++){const me=o[U],{object:se,geometry:_e,group:Se}=me;let Pe=me.material;Pe.allowOverride===!0&&P!==null&&(Pe=P),se.layers.test(y.layers)&&fr(se,x,y,_e,Pe,Se)}}function fr(o,x,y,P,U,le){o.onBeforeRender(F,x,y,P,U,le),o.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,o.matrixWorld),o.normalMatrix.getNormalMatrix(o.modelViewMatrix),U.onBeforeRender(F,x,y,P,o,le),U.transparent===!0&&U.side===Dt&&U.forceSinglePass===!1?(U.side=_t,U.needsUpdate=!0,F.renderBufferDirect(y,x,P,U,o,le),U.side=jt,U.needsUpdate=!0,F.renderBufferDirect(y,x,P,U,o,le),U.side=Dt):F.renderBufferDirect(y,x,P,U,o,le),o.onAfterRender(F,x,y,P,U,le)}function En(o,x,y){x.isScene!==!0&&(x=lt);const P=f.get(o),U=v.state.lights,le=v.state.shadowsArray,me=U.state.version,se=re.getParameters(o,U.state,le,x,y,v.state.lightProbeGridArray),_e=re.getProgramCacheKey(se);let Se=P.programs;P.environment=o.isMeshStandardMaterial||o.isMeshLambertMaterial||o.isMeshPhongMaterial?x.environment:null,P.fog=x.fog;const Pe=o.isMeshStandardMaterial||o.isMeshLambertMaterial&&!o.envMap||o.isMeshPhongMaterial&&!o.envMap;P.envMap=b.get(o.envMap||P.environment,Pe),P.envMapRotation=P.environment!==null&&o.envMap===null?x.environmentRotation:o.envMapRotation,Se===void 0&&(o.addEventListener("dispose",at),Se=new Map,P.programs=Se);let De=Se.get(_e);if(De!==void 0){if(P.currentProgram===De&&P.lightsStateVersion===me)return ur(o,se),De}else se.uniforms=re.getUniforms(o),O!==null&&o.isNodeMaterial&&O.build(o,y,se),o.onBeforeCompile(se,F),De=re.acquireProgram(se,_e),Se.set(_e,De),P.uniforms=se.uniforms;const Ee=P.uniforms;return(!o.isShaderMaterial&&!o.isRawShaderMaterial||o.clipping===!0)&&(Ee.clippingPlanes=he.uniform),ur(o,se),P.needsLights=po(o),P.lightsStateVersion=me,P.needsLights&&(Ee.ambientLightColor.value=U.state.ambient,Ee.lightProbe.value=U.state.probe,Ee.directionalLights.value=U.state.directional,Ee.directionalLightShadows.value=U.state.directionalShadow,Ee.spotLights.value=U.state.spot,Ee.spotLightShadows.value=U.state.spotShadow,Ee.rectAreaLights.value=U.state.rectArea,Ee.ltc_1.value=U.state.rectAreaLTC1,Ee.ltc_2.value=U.state.rectAreaLTC2,Ee.pointLights.value=U.state.point,Ee.pointLightShadows.value=U.state.pointShadow,Ee.hemisphereLights.value=U.state.hemi,Ee.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ee.spotLightMatrix.value=U.state.spotLightMatrix,Ee.spotLightMap.value=U.state.spotLightMap,Ee.pointShadowMatrix.value=U.state.pointShadowMatrix),P.lightProbeGrid=v.state.lightProbeGridArray.length>0,P.currentProgram=De,P.uniformsList=null,De}function dr(o){if(o.uniformsList===null){const x=o.currentProgram.getUniforms();o.uniformsList=Bn.seqWithValue(x.seq,o.uniforms)}return o.uniformsList}function ur(o,x){const y=f.get(o);y.outputColorSpace=x.outputColorSpace,y.batching=x.batching,y.batchingColor=x.batchingColor,y.instancing=x.instancing,y.instancingColor=x.instancingColor,y.instancingMorph=x.instancingMorph,y.skinning=x.skinning,y.morphTargets=x.morphTargets,y.morphNormals=x.morphNormals,y.morphColors=x.morphColors,y.morphTargetsCount=x.morphTargetsCount,y.numClippingPlanes=x.numClippingPlanes,y.numIntersection=x.numClipIntersection,y.vertexAlphas=x.vertexAlphas,y.vertexTangents=x.vertexTangents,y.toneMapping=x.toneMapping}function co(o,x){if(o.length===0)return null;if(o.length===1)return o[0].texture!==null?o[0]:null;T.setFromMatrixPosition(x.matrixWorld);for(let y=0,P=o.length;y<P;y++){const U=o[y];if(U.texture!==null&&U.boundingBox.containsPoint(T))return U}return null}function fo(o,x,y,P,U){x.isScene!==!0&&(x=lt),r.resetTextureUnits();const le=x.fog,me=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?x.environment:null,se=I===null?F.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:et.workingColorSpace,_e=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap,Se=b.get(P.envMap||me,_e),Pe=P.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,De=!!y.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),Ee=!!y.morphAttributes.position,ze=!!y.morphAttributes.normal,ot=!!y.morphAttributes.color;let rt=Mt;P.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(rt=F.toneMapping);const Xe=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,ut=Xe!==void 0?Xe.length:0,pe=f.get(P),St=v.state.lights;if(tt===!0&&(Ne===!0||o!==N)){const Qe=o===N&&P.id===G;he.setState(P,o,Qe)}let Be=!1;P.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==St.state.version||pe.outputColorSpace!==se||U.isBatchedMesh&&pe.batching===!1||!U.isBatchedMesh&&pe.batching===!0||U.isBatchedMesh&&pe.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&pe.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&pe.instancing===!1||!U.isInstancedMesh&&pe.instancing===!0||U.isSkinnedMesh&&pe.skinning===!1||!U.isSkinnedMesh&&pe.skinning===!0||U.isInstancedMesh&&pe.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&pe.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&pe.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&pe.instancingMorph===!1&&U.morphTexture!==null||pe.envMap!==Se||P.fog===!0&&pe.fog!==le||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==he.numPlanes||pe.numIntersection!==he.numIntersection)||pe.vertexAlphas!==Pe||pe.vertexTangents!==De||pe.morphTargets!==Ee||pe.morphNormals!==ze||pe.morphColors!==ot||pe.toneMapping!==rt||pe.morphTargetsCount!==ut||!!pe.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(Be=!0):(Be=!0,pe.__version=P.version);let Et=pe.currentProgram;Be===!0&&(Et=En(P,x,U),O&&P.isNodeMaterial&&O.onUpdateProgram(P,Et,pe));let bt=!1,Ft=!1,Qt=!1;const Ke=Et.getUniforms(),st=pe.uniforms;if(oe.useProgram(Et.program)&&(bt=!0,Ft=!0,Qt=!0),P.id!==G&&(G=P.id,Ft=!0),pe.needsLights){const Qe=co(v.state.lightProbeGridArray,U);pe.lightProbeGrid!==Qe&&(pe.lightProbeGrid=Qe,Ft=!0)}if(bt||N!==o){oe.buffers.depth.getReversed()&&o.reversedDepth!==!0&&(o._reversedDepth=!0,o.updateProjectionMatrix()),Ke.setValue(S,"projectionMatrix",o.projectionMatrix),Ke.setValue(S,"viewMatrix",o.matrixWorldInverse);const Bt=Ke.map.cameraPosition;Bt!==void 0&&Bt.setValue(S,Je.setFromMatrixPosition(o.matrixWorld)),$e.logarithmicDepthBuffer&&Ke.setValue(S,"logDepthBufFC",2/(Math.log(o.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&Ke.setValue(S,"isOrthographic",o.isOrthographicCamera===!0),N!==o&&(N=o,Ft=!0,Qt=!0)}if(pe.needsLights&&(St.state.directionalShadowMap.length>0&&Ke.setValue(S,"directionalShadowMap",St.state.directionalShadowMap,r),St.state.spotShadowMap.length>0&&Ke.setValue(S,"spotShadowMap",St.state.spotShadowMap,r),St.state.pointShadowMap.length>0&&Ke.setValue(S,"pointShadowMap",St.state.pointShadowMap,r)),U.isSkinnedMesh){Ke.setOptional(S,U,"bindMatrix"),Ke.setOptional(S,U,"bindMatrixInverse");const Qe=U.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),Ke.setValue(S,"boneTexture",Qe.boneTexture,r))}U.isBatchedMesh&&(Ke.setOptional(S,U,"batchingTexture"),Ke.setValue(S,"batchingTexture",U._matricesTexture,r),Ke.setOptional(S,U,"batchingIdTexture"),Ke.setValue(S,"batchingIdTexture",U._indirectTexture,r),Ke.setOptional(S,U,"batchingColorTexture"),U._colorsTexture!==null&&Ke.setValue(S,"batchingColorTexture",U._colorsTexture,r));const Ot=y.morphAttributes;if((Ot.position!==void 0||Ot.normal!==void 0||Ot.color!==void 0)&&Re.update(U,y,Et),(Ft||pe.receiveShadow!==U.receiveShadow)&&(pe.receiveShadow=U.receiveShadow,Ke.setValue(S,"receiveShadow",U.receiveShadow)),(P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial)&&P.envMap===null&&x.environment!==null&&(st.envMapIntensity.value=x.environmentIntensity),st.dfgLUT!==void 0&&(st.dfgLUT.value=hd()),Ft){if(Ke.setValue(S,"toneMappingExposure",F.toneMappingExposure),pe.needsLights&&uo(st,Qt),le&&P.fog===!0&&V.refreshFogUniforms(st,le),V.refreshMaterialUniforms(st,P,we,Ze,v.state.transmissionRenderTarget[o.id]),pe.needsLights&&pe.lightProbeGrid){const Qe=pe.lightProbeGrid;st.probesSH.value=Qe.texture,st.probesMin.value.copy(Qe.boundingBox.min),st.probesMax.value.copy(Qe.boundingBox.max),st.probesResolution.value.copy(Qe.resolution)}Bn.upload(S,dr(pe),st,r)}if(P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(Bn.upload(S,dr(pe),st,r),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&Ke.setValue(S,"center",U.center),Ke.setValue(S,"modelViewMatrix",U.modelViewMatrix),Ke.setValue(S,"normalMatrix",U.normalMatrix),Ke.setValue(S,"modelMatrix",U.matrixWorld),P.uniformsGroups!==void 0){const Qe=P.uniformsGroups;for(let Bt=0,Jt=Qe.length;Bt<Jt;Bt++){const pr=Qe[Bt];k.update(pr,Et),k.bind(pr,Et)}}return Et}function uo(o,x){o.ambientLightColor.needsUpdate=x,o.lightProbe.needsUpdate=x,o.directionalLights.needsUpdate=x,o.directionalLightShadows.needsUpdate=x,o.pointLights.needsUpdate=x,o.pointLightShadows.needsUpdate=x,o.spotLights.needsUpdate=x,o.spotLightShadows.needsUpdate=x,o.rectAreaLights.needsUpdate=x,o.hemisphereLights.needsUpdate=x}function po(o){return o.isMeshLambertMaterial||o.isMeshToonMaterial||o.isMeshPhongMaterial||o.isMeshStandardMaterial||o.isShadowMaterial||o.isShaderMaterial&&o.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(o,x,y){const P=f.get(o);P.__autoAllocateDepthBuffer=o.resolveDepthBuffer===!1,P.__autoAllocateDepthBuffer===!1&&(P.__useRenderToTexture=!1),f.get(o.texture).__webglTexture=x,f.get(o.depthTexture).__webglTexture=P.__autoAllocateDepthBuffer?void 0:y,P.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(o,x){const y=f.get(o);y.__webglFramebuffer=x,y.__useDefaultFramebuffer=x===void 0};const ho=S.createFramebuffer();this.setRenderTarget=function(o,x=0,y=0){I=o,$=x,Z=y;let P=null,U=!1,le=!1;if(o){const se=f.get(o);if(se.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(S.FRAMEBUFFER,se.__webglFramebuffer),Q.copy(o.viewport),de.copy(o.scissor),ve=o.scissorTest,oe.viewport(Q),oe.scissor(de),oe.setScissorTest(ve),G=-1;return}else if(se.__webglFramebuffer===void 0)r.setupRenderTarget(o);else if(se.__hasExternalTextures)r.rebindTextures(o,f.get(o.texture).__webglTexture,f.get(o.depthTexture).__webglTexture);else if(o.depthBuffer){const Pe=o.depthTexture;if(se.__boundDepthTexture!==Pe){if(Pe!==null&&f.has(Pe)&&(o.width!==Pe.image.width||o.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");r.setupDepthRenderbuffer(o)}}const _e=o.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(le=!0);const Se=f.get(o).__webglFramebuffer;o.isWebGLCubeRenderTarget?(Array.isArray(Se[x])?P=Se[x][y]:P=Se[x],U=!0):o.samples>0&&r.useMultisampledRTT(o)===!1?P=f.get(o).__webglMultisampledFramebuffer:Array.isArray(Se)?P=Se[y]:P=Se,Q.copy(o.viewport),de.copy(o.scissor),ve=o.scissorTest}else Q.copy(te).multiplyScalar(we).floor(),de.copy(Me).multiplyScalar(we).floor(),ve=be;if(y!==0&&(P=ho),oe.bindFramebuffer(S.FRAMEBUFFER,P)&&oe.drawBuffers(o,P),oe.viewport(Q),oe.scissor(de),oe.setScissorTest(ve),U){const se=f.get(o.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+x,se.__webglTexture,y)}else if(le){const se=x;for(let _e=0;_e<o.textures.length;_e++){const Se=f.get(o.textures[_e]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+_e,Se.__webglTexture,y,se)}}else if(o!==null&&y!==0){const se=f.get(o.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,se.__webglTexture,y)}G=-1},this.readRenderTargetPixels=function(o,x,y,P,U,le,me,se=0){if(!(o&&o.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=f.get(o).__webglFramebuffer;if(o.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e){oe.bindFramebuffer(S.FRAMEBUFFER,_e);try{const Se=o.textures[se],Pe=Se.format,De=Se.type;if(o.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+se),!$e.textureFormatReadable(Pe)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(De)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}x>=0&&x<=o.width-P&&y>=0&&y<=o.height-U&&S.readPixels(x,y,P,U,_.convert(Pe),_.convert(De),le)}finally{const Se=I!==null?f.get(I).__webglFramebuffer:null;oe.bindFramebuffer(S.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(o,x,y,P,U,le,me,se=0){if(!(o&&o.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=f.get(o).__webglFramebuffer;if(o.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e)if(x>=0&&x<=o.width-P&&y>=0&&y<=o.height-U){oe.bindFramebuffer(S.FRAMEBUFFER,_e);const Se=o.textures[se],Pe=Se.format,De=Se.type;if(o.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+se),!$e.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ee=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Ee),S.bufferData(S.PIXEL_PACK_BUFFER,le.byteLength,S.STREAM_READ),S.readPixels(x,y,P,U,_.convert(Pe),_.convert(De),0);const ze=I!==null?f.get(I).__webglFramebuffer:null;oe.bindFramebuffer(S.FRAMEBUFFER,ze);const ot=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await Eo(S,ot,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Ee),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,le),S.deleteBuffer(Ee),S.deleteSync(ot),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(o,x=null,y=0){const P=Math.pow(2,-y),U=Math.floor(o.image.width*P),le=Math.floor(o.image.height*P),me=x!==null?x.x:0,se=x!==null?x.y:0;r.setTexture2D(o,0),S.copyTexSubImage2D(S.TEXTURE_2D,y,0,0,me,se,U,le),oe.unbindTexture()};const mo=S.createFramebuffer(),_o=S.createFramebuffer();this.copyTextureToTexture=function(o,x,y=null,P=null,U=0,le=0){let me,se,_e,Se,Pe,De,Ee,ze,ot;const rt=o.isCompressedTexture?o.mipmaps[le]:o.image;if(y!==null)me=y.max.x-y.min.x,se=y.max.y-y.min.y,_e=y.isBox3?y.max.z-y.min.z:1,Se=y.min.x,Pe=y.min.y,De=y.isBox3?y.min.z:0;else{const st=Math.pow(2,-U);me=Math.floor(rt.width*st),se=Math.floor(rt.height*st),o.isDataArrayTexture?_e=rt.depth:o.isData3DTexture?_e=Math.floor(rt.depth*st):_e=1,Se=0,Pe=0,De=0}P!==null?(Ee=P.x,ze=P.y,ot=P.z):(Ee=0,ze=0,ot=0);const Xe=_.convert(x.format),ut=_.convert(x.type);let pe;x.isData3DTexture?(r.setTexture3D(x,0),pe=S.TEXTURE_3D):x.isDataArrayTexture||x.isCompressedArrayTexture?(r.setTexture2DArray(x,0),pe=S.TEXTURE_2D_ARRAY):(r.setTexture2D(x,0),pe=S.TEXTURE_2D),oe.activeTexture(S.TEXTURE0),oe.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,x.flipY),oe.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),oe.pixelStorei(S.UNPACK_ALIGNMENT,x.unpackAlignment);const St=oe.getParameter(S.UNPACK_ROW_LENGTH),Be=oe.getParameter(S.UNPACK_IMAGE_HEIGHT),Et=oe.getParameter(S.UNPACK_SKIP_PIXELS),bt=oe.getParameter(S.UNPACK_SKIP_ROWS),Ft=oe.getParameter(S.UNPACK_SKIP_IMAGES);oe.pixelStorei(S.UNPACK_ROW_LENGTH,rt.width),oe.pixelStorei(S.UNPACK_IMAGE_HEIGHT,rt.height),oe.pixelStorei(S.UNPACK_SKIP_PIXELS,Se),oe.pixelStorei(S.UNPACK_SKIP_ROWS,Pe),oe.pixelStorei(S.UNPACK_SKIP_IMAGES,De);const Qt=o.isDataArrayTexture||o.isData3DTexture,Ke=x.isDataArrayTexture||x.isData3DTexture;if(o.isDepthTexture){const st=f.get(o),Ot=f.get(x),Qe=f.get(st.__renderTarget),Bt=f.get(Ot.__renderTarget);oe.bindFramebuffer(S.READ_FRAMEBUFFER,Qe.__webglFramebuffer),oe.bindFramebuffer(S.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let Jt=0;Jt<_e;Jt++)Qt&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,f.get(o).__webglTexture,U,De+Jt),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,f.get(x).__webglTexture,le,ot+Jt)),S.blitFramebuffer(Se,Pe,me,se,Ee,ze,me,se,S.DEPTH_BUFFER_BIT,S.NEAREST);oe.bindFramebuffer(S.READ_FRAMEBUFFER,null),oe.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(U!==0||o.isRenderTargetTexture||f.has(o)){const st=f.get(o),Ot=f.get(x);oe.bindFramebuffer(S.READ_FRAMEBUFFER,mo),oe.bindFramebuffer(S.DRAW_FRAMEBUFFER,_o);for(let Qe=0;Qe<_e;Qe++)Qt?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,st.__webglTexture,U,De+Qe):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,st.__webglTexture,U),Ke?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Ot.__webglTexture,le,ot+Qe):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Ot.__webglTexture,le),U!==0?S.blitFramebuffer(Se,Pe,me,se,Ee,ze,me,se,S.COLOR_BUFFER_BIT,S.NEAREST):Ke?S.copyTexSubImage3D(pe,le,Ee,ze,ot+Qe,Se,Pe,me,se):S.copyTexSubImage2D(pe,le,Ee,ze,Se,Pe,me,se);oe.bindFramebuffer(S.READ_FRAMEBUFFER,null),oe.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else Ke?o.isDataTexture||o.isData3DTexture?S.texSubImage3D(pe,le,Ee,ze,ot,me,se,_e,Xe,ut,rt.data):x.isCompressedArrayTexture?S.compressedTexSubImage3D(pe,le,Ee,ze,ot,me,se,_e,Xe,rt.data):S.texSubImage3D(pe,le,Ee,ze,ot,me,se,_e,Xe,ut,rt):o.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,le,Ee,ze,me,se,Xe,ut,rt.data):o.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,le,Ee,ze,rt.width,rt.height,Xe,rt.data):S.texSubImage2D(S.TEXTURE_2D,le,Ee,ze,me,se,Xe,ut,rt);oe.pixelStorei(S.UNPACK_ROW_LENGTH,St),oe.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Be),oe.pixelStorei(S.UNPACK_SKIP_PIXELS,Et),oe.pixelStorei(S.UNPACK_SKIP_ROWS,bt),oe.pixelStorei(S.UNPACK_SKIP_IMAGES,Ft),le===0&&x.generateMipmaps&&S.generateMipmap(pe),oe.unbindTexture()},this.initRenderTarget=function(o){f.get(o).__webglFramebuffer===void 0&&r.setupRenderTarget(o)},this.initTexture=function(o){o.isCubeTexture?r.setTextureCube(o,0):o.isData3DTexture?r.setTexture3D(o,0):o.isDataArrayTexture||o.isCompressedArrayTexture?r.setTexture2DArray(o,0):r.setTexture2D(o,0),oe.unbindTexture()},this.resetState=function(){$=0,Z=0,I=null,oe.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(n),t.unpackColorSpace=et._getUnpackColorSpace()}}export{jn as ACESFilmicToneMapping,rn as AddEquation,Ar as AddOperation,Sd as AdditiveAnimationBlendMode,di as AdditiveBlending,Jn as AgXToneMapping,Ta as AlphaFormat,_a as AlwaysCompare,na as AlwaysDepth,Ed as AlwaysStencilFunc,xd as AmbientLight,Md as AnimationAction,Td as AnimationClip,Ad as AnimationLoader,Rd as AnimationMixer,bd as AnimationObjectGroup,Cd as AnimationUtils,Pd as ArcCurve,Ca as ArrayCamera,Ld as ArrowHelper,Ud as AttachedBindMode,Dd as Audio,wd as AudioAnalyser,Id as AudioContext,Nd as AudioListener,yd as AudioLoader,Fd as AxesHelper,_t as BackSide,Od as BasicDepthPacking,Bd as BasicShadowMap,Gd as BatchedMesh,Hd as BezierInterpolant,Vd as Bone,Wd as BooleanKeyframeTrack,kd as Box2,zd as Box3,Xd as Box3Helper,xn as BoxGeometry,Kd as BoxHelper,dn as BufferAttribute,cn as BufferGeometry,Yd as BufferGeometryLoader,xa as ByteType,qd as Cache,Zd as Camera,$d as CameraHelper,Qd as CanvasTexture,Jd as CapsuleGeometry,jd as CatmullRomCurve3,ei as CineonToneMapping,eu as CircleGeometry,Pn as ClampToEdgeWrapping,tu as Clock,je as Color,nu as ColorKeyframeTrack,et as ColorManagement,iu as Compatibility,ru as CompressedArrayTexture,au as CompressedCubeTexture,ou as CompressedTexture,su as CompressedTextureLoader,lu as ConeGeometry,Or as ConstantAlphaFactor,Gr as ConstantColorFactor,cu as Controls,gr as CubeCamera,Ir as CubeDepthTexture,en as CubeReflectionMapping,zt as CubeRefractionMapping,Yn as CubeTexture,fu as CubeTextureLoader,ln as CubeUVReflectionMapping,du as CubicBezierCurve,uu as CubicBezierCurve3,pu as CubicInterpolant,li as CullFaceBack,aa as CullFaceFront,hu as CullFaceFrontBack,ra as CullFaceNone,mu as Curve,_u as CurvePath,oa as CustomBlending,$n as CustomToneMapping,gu as CylinderGeometry,vu as Cylindrical,Mr as Data3DTexture,qn as DataArrayTexture,Pa as DataTexture,Su as DataTextureLoader,Eu as DataUtils,xu as DecrementStencilOp,Mu as DecrementWrapStencilOp,Tu as DefaultLoadingManager,Yt as DepthFormat,Zt as DepthStencilFormat,tn as DepthTexture,Au as DetachedBindMode,Ru as DirectionalLight,bu as DirectionalLightHelper,Cu as DiscreteInterpolant,Pu as DodecahedronGeometry,Dt as DoubleSide,zr as DstAlphaFactor,Xr as DstColorFactor,Lu as DynamicCopyUsage,Uu as DynamicDrawUsage,Du as DynamicReadUsage,wu as EdgesGeometry,Iu as EllipseCurve,ha as EqualCompare,ea as EqualDepth,Nu as EqualStencilFunc,Mn as EquirectangularReflectionMapping,Tn as EquirectangularRefractionMapping,yu as Euler,ba as EventDispatcher,Yi as ExternalTexture,Fu as ExtrudeGeometry,Ou as FileLoader,Bu as Float16BufferAttribute,Zn as Float32BufferAttribute,yt as FloatType,Gu as Fog,Hu as FogExp2,Vu as FramebufferTexture,jt as FrontSide,oi as Frustum,Wu as FrustumArray,ku as GLBufferAttribute,zu as GLSL1,ii as GLSL3,pa as GreaterCompare,Jr as GreaterDepth,An as GreaterEqualCompare,jr as GreaterEqualDepth,Xu as GreaterEqualStencilFunc,Ku as GreaterStencilFunc,Yu as GridHelper,qu as Group,Zu as HTMLTexture,Nt as HalfFloatType,$u as HemisphereLight,Qu as HemisphereLightHelper,Ju as IcosahedronGeometry,ju as ImageBitmapLoader,ep as ImageLoader,tp as ImageUtils,np as IncrementStencilOp,ip as IncrementWrapStencilOp,rp as InstancedBufferAttribute,ap as InstancedBufferGeometry,op as InstancedInterleavedBuffer,sp as InstancedMesh,lp as Int16BufferAttribute,cp as Int32BufferAttribute,fp as Int8BufferAttribute,zn as IntType,dp as InterleavedBuffer,up as InterleavedBufferAttribute,pp as Interpolant,hp as InterpolateBezier,mp as InterpolateDiscrete,_p as InterpolateLinear,gp as InterpolateSmooth,vp as InterpolationSamplingMode,Sp as InterpolationSamplingType,Ep as InvertStencilOp,xp as KeepStencilOp,Mp as KeyframeTrack,Tp as LOD,Ap as LatheGeometry,Lr as Layers,ma as LessCompare,ta as LessDepth,Rn as LessEqualCompare,si as LessEqualDepth,Rp as LessEqualStencilFunc,bp as LessStencilFunc,Cp as Light,Pp as LightProbe,Lp as Line,Up as Line3,Dp as LineBasicMaterial,wp as LineCurve,Ip as LineCurve3,Np as LineDashedMaterial,yp as LineLoop,Fp as LineSegments,gt as LinearFilter,Op as LinearInterpolant,Bp as LinearMipMapLinearFilter,Gp as LinearMipMapNearestFilter,Xt as LinearMipmapLinearFilter,Ln as LinearMipmapNearestFilter,Kn as LinearSRGBColorSpace,ni as LinearToneMapping,ri as LinearTransfer,Hp as Loader,Vp as LoaderUtils,Wp as LoadingManager,kp as LoopOnce,zp as LoopPingPong,Xp as LoopRepeat,Kp as MOUSE,Yp as Material,qp as MaterialBlending,Zp as MaterialLoader,$p as MathUtils,Qp as Matrix2,Oe as Matrix3,kt as Matrix4,la as MaxEquation,Ct as Mesh,_r as MeshBasicMaterial,Ur as MeshDepthMaterial,Dr as MeshDistanceMaterial,Jp as MeshLambertMaterial,jp as MeshMatcapMaterial,eh as MeshNormalMaterial,th as MeshPhongMaterial,nh as MeshPhysicalMaterial,ih as MeshStandardMaterial,rh as MeshToonMaterial,sa as MinEquation,ca as MirroredRepeatWrapping,Rr as MixOperation,ci as MultiplyBlending,br as MultiplyOperation,Gt as NearestFilter,ah as NearestMipMapLinearFilter,oh as NearestMipMapNearestFilter,hn as NearestMipmapLinearFilter,da as NearestMipmapNearestFilter,Qn as NeutralToneMapping,ga as NeverCompare,ia as NeverDepth,sh as NeverStencilFunc,Ut as NoBlending,qt as NoColorSpace,lh as NoNormalPacking,Mt as NoToneMapping,ch as NormalAnimationBlendMode,pn as NormalBlending,fh as NormalGAPacking,dh as NormalRGPacking,ua as NotEqualCompare,Qr as NotEqualDepth,uh as NotEqualStencilFunc,ph as NumberKeyframeTrack,hh as Object3D,mh as ObjectLoader,Pr as ObjectSpaceNormalMap,_h as OctahedronGeometry,Zr as OneFactor,Fr as OneMinusConstantAlphaFactor,Br as OneMinusConstantColorFactor,Hr as OneMinusDstAlphaFactor,Vr as OneMinusDstColorFactor,Wr as OneMinusSrcAlphaFactor,kr as OneMinusSrcColorFactor,Xn as OrthographicCamera,un as PCFShadowMap,wr as PCFSoftShadowMap,er as PMREMGenerator,gh as Path,fn as PerspectiveCamera,mr as Plane,kn as PlaneGeometry,vh as PlaneHelper,Sh as PointLight,Eh as PointLightHelper,xh as Points,Mh as PointsMaterial,Th as PolarGridHelper,Ah as PolyhedronGeometry,Rh as PositionalAudio,bh as PropertyBinding,Ch as PropertyMixer,Ph as QuadraticBezierCurve,Lh as QuadraticBezierCurve3,Uh as Quaternion,Dh as QuaternionKeyframeTrack,wh as QuaternionLinearInterpolant,Ai as R11_EAC_Format,Cn as RED_GREEN_RGTC2_Format,zi as RED_RGTC1_Format,Da as REVISION,bn as RG11_EAC_Format,Ih as RGBADepthPacking,Lt as RGBAFormat,_i as RGBAIntegerFormat,Bi as RGBA_ASTC_10x10_Format,yi as RGBA_ASTC_10x5_Format,Fi as RGBA_ASTC_10x6_Format,Oi as RGBA_ASTC_10x8_Format,Gi as RGBA_ASTC_12x10_Format,Hi as RGBA_ASTC_12x12_Format,Ci as RGBA_ASTC_4x4_Format,Pi as RGBA_ASTC_5x4_Format,Li as RGBA_ASTC_5x5_Format,Ui as RGBA_ASTC_6x5_Format,Di as RGBA_ASTC_6x6_Format,wi as RGBA_ASTC_8x5_Format,Ii as RGBA_ASTC_8x6_Format,Ni as RGBA_ASTC_8x8_Format,Vi as RGBA_BPTC_Format,Ti as RGBA_ETC2_EAC_Format,Ei as RGBA_PVRTC_2BPPV1_Format,Si as RGBA_PVRTC_4BPPV1_Format,Dn as RGBA_S3TC_DXT1_Format,wn as RGBA_S3TC_DXT3_Format,In as RGBA_S3TC_DXT5_Format,Nh as RGBDepthPacking,Aa as RGBFormat,yh as RGBIntegerFormat,Wi as RGB_BPTC_SIGNED_Format,ki as RGB_BPTC_UNSIGNED_Format,xi as RGB_ETC1_Format,Mi as RGB_ETC2_Format,vi as RGB_PVRTC_2BPPV1_Format,gi as RGB_PVRTC_4BPPV1_Format,Un as RGB_S3TC_DXT1_Format,Fh as RGDepthPacking,Kt as RGFormat,mi as RGIntegerFormat,xr as RawShaderMaterial,Oh as Ray,Bh as Raycaster,Gh as RectAreaLight,Ra as RedFormat,hi as RedIntegerFormat,ti as ReinhardToneMapping,Hh as RenderTarget,Vh as RenderTarget3D,fa as RepeatWrapping,Wh as ReplaceStencilOp,Nr as ReverseSubtractEquation,kh as RingGeometry,Ri as SIGNED_R11_EAC_Format,Ki as SIGNED_RED_GREEN_RGTC2_Format,Xi as SIGNED_RED_RGTC1_Format,bi as SIGNED_RG11_EAC_Format,Ua as SRGBColorSpace,Ye as SRGBTransfer,zh as Scene,Ue as ShaderChunk,At as ShaderLib,Pt as ShaderMaterial,Xh as ShadowMaterial,Kh as Shape,Yh as ShapeGeometry,qh as ShapePath,Zh as ShapeUtils,Ma as ShortType,$h as Skeleton,Qh as SkeletonHelper,Jh as SkinnedMesh,jh as Source,em as Sphere,tm as SphereGeometry,nm as Spherical,im as SphericalHarmonics3,rm as SplineCurve,am as SpotLight,om as SpotLightHelper,sm as Sprite,lm as SpriteMaterial,Yr as SrcAlphaFactor,Kr as SrcAlphaSaturateFactor,qr as SrcColorFactor,cm as StaticCopyUsage,fm as StaticDrawUsage,dm as StaticReadUsage,um as StereoCamera,pm as StreamCopyUsage,hm as StreamDrawUsage,mm as StreamReadUsage,_m as StringKeyframeTrack,yr as SubtractEquation,fi as SubtractiveBlending,gm as TOUCH,ai as TangentSpaceNormalMap,vm as TetrahedronGeometry,Tr as Texture,Sm as TextureLoader,Em as TextureUtils,xm as Timer,Mm as TimestampQuery,Tm as TorusGeometry,Am as TorusKnotGeometry,Rm as Triangle,bm as TriangleFanDrawMode,Cm as TriangleStripDrawMode,Pm as TrianglesDrawMode,Lm as TubeGeometry,Um as UVMapping,Er as Uint16BufferAttribute,Sr as Uint32BufferAttribute,Dm as Uint8BufferAttribute,wm as Uint8ClampedBufferAttribute,Im as Uniform,Nm as UniformsGroup,ae as UniformsLib,Cr as UniformsUtils,xt as UnsignedByteType,Ea as UnsignedInt101111Type,an as UnsignedInt248Type,Sa as UnsignedInt5999Type,Ht as UnsignedIntType,ui as UnsignedShort4444Type,pi as UnsignedShort5551Type,mn as UnsignedShortType,nn as VSMShadowMap,pt as Vector2,Fe as Vector3,ht as Vector4,ym as VectorKeyframeTrack,Fm as VideoFrameTexture,Om as VideoTexture,Bm as WebGL3DRenderTarget,Gm as WebGLArrayRenderTarget,Zi as WebGLCoordinateSystem,tr as WebGLCubeRenderTarget,Tt as WebGLRenderTarget,md as WebGLRenderer,oo as WebGLUtils,Hm as WebGPUCoordinateSystem,Nn as WebXRController,Vm as WireframeGeometry,Wm as WrapAroundEnding,km as ZeroCurvatureEnding,$r as ZeroFactor,zm as ZeroSlopeEnding,Xm as ZeroStencilOp,La as createCanvasElement,qe as error,Km as getConsoleFunction,qi as log,Ym as setConsoleFunction,He as warn,vr as warnOnce};
