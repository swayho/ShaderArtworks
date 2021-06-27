/*
** https://www.shadertoy.com/view/3sSGRK
** Auther : Canysway
*/ 


#define PI 3.14159

vec2 mouse = vec2(0.35, 0.2);

float getLightColor(vec2 uv, float p_ratio, float plus, float minus){
    float color = 0.;
    float angle = atan(uv.x, uv.y);
    float alpha_r = smoothstep(1./p_ratio *PI - 0.1, 1./p_ratio *PI , angle);
    float alpha_l = smoothstep(-1./p_ratio *PI, -1./p_ratio *PI + 0.1, angle);
    float alpha = alpha_l * (1. - alpha_r);
    if (alpha == 0.) {alpha = 0.03;}
    
    float circle = plus/sqrt(minus * length(uv));
    color = circle * circle * alpha + 0.05;
    return color;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord ){
    vec2 uv = fragCoord.xy/iResolution.xy;
    uv.x = uv.x * iResolution.x/iResolution.y * 0.75;
    uv -= mouse;
    float p_ratio = (sin(iTime) + 1.)* 2. + 3.5;
    float outColorA = getLightColor(uv, p_ratio, 0.2, 0.25);
    float insideColorA = getLightColor(uv, p_ratio + 1.5, 0.15, 0.25);
 	float colorA = outColorA + insideColorA;
    
    float outColorB = getLightColor(vec2(uv.x - 0.6, uv.y), p_ratio, 0.2, 0.25);
    float insideColorB = getLightColor(vec2(uv.x - 0.6, uv.y), p_ratio + 1.5, 0.15, 0.25);
 	float colorB = outColorB + insideColorB;
   	
    vec4 r_light = vec4(vec3(0.7, 0.,0.6), 1.0);
    r_light *= colorA;
    
    vec4 w_light = vec4(vec3(0., 0.,0.6),1.);
    w_light *= colorB;
    
    fragColor = mix(r_light, w_light, colorB);
}