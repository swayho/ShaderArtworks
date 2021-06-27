/*
** https://www.shadertoy.com/view/Wd23DG
** Auther : Canysway
*/ 

#define CENTER(w, h)	 vec2((cos(iTime * w) + 1.) * 0.5, (sin(iTime * h) + 1.)*0.5)
#define F_TIME(a, b)	 a * fract(iTime * b)
#define F_TIME_RE(a, b) 	a - F_TIME(a, b)
#define C_TIME(a, b) 		(cos(iTime * a) + 1.) * b
#define S_TIME(a, b)		(sin(iTime * a) + 1.) * b

vec4 sum(vec4 a, vec4 b){
	return  vec4(min(1., a.r + b.r), min(1., a.g + b.g), min(1., a.b + b.b), min(1., a.a + b.a));
}

vec4 getSpotLightOne(vec2 uv, vec2 center, float intensity, vec3 color){
	float ratio = iResolution.x/iResolution.y; 
    uv.x *= ratio;
    center.x *= ratio;
    float dist = intensity/sqrt(distance(uv, center));
    return vec4(color * dist, dist);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord ){
    vec2 uv = fragCoord/iResolution.xy;
    //vec2((cos(iTime * 0.1) + 1.) * 0.5, (sin(iTime * 2.) + 1.)*0.5)
	vec4 light1 = getSpotLightOne(uv, CENTER(0.5, 3.), F_TIME(0.2, 0.3), vec3(0.,1.,0.));
    vec4 light2 = getSpotLightOne(uv, CENTER(2., 0.5), F_TIME_RE(0.15, .5), vec3(1.,1.,0.));
    vec4 light3 = getSpotLightOne(uv, CENTER(1.5, 0.3), S_TIME(3., .1), vec3(1.,0.,0.));
    vec4 light4 = getSpotLightOne(uv, CENTER(1., 1.3), C_TIME(3., .1), vec3(0.,1.,1.));
    vec4 light5 = getSpotLightOne(uv, CENTER(3., 2.3), F_TIME(.4, 1.1), vec3(0.5,0.5,.5));    
	vec4 light = sum(light1, light2);
    light = sum(light, light3);
    light = sum(light, light4);
    light = sum(light, light5);
	fragColor = mix(vec4(0.), light, light.a);                        
}