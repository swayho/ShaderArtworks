/*
** https://www.shadertoy.com/view/WdtSzX
** Auther : Canysway
*/ 


#define DIV 320.


void mainImage( out vec4 fragColor, in vec2 fragCoord ){
	vec2 uv = fragCoord.xy/iResolution.xy;
    vec2 f_uv = uv;
    float ratio = iResolution.x/iResolution.y;
    f_uv.x *= (DIV * ratio);
    f_uv.x = floor(f_uv.x);
    f_uv.x /= (DIV * ratio);
    
    f_uv.y *= DIV;
    f_uv.y = floor(f_uv.y);
    f_uv.y /= DIV;
    
    uv.x *= (DIV * ratio);
    uv.x = fract(uv.x);
	
    uv.y *= DIV;
    uv.y = fract(uv.y);
    
    vec4 mos_c = texture(iChannel0, f_uv);
    float gray = (mos_c.r + mos_c.g + mos_c.b)/3.;
   	float in_lum = 1. - min(0.9, gray);
    float thres = step(in_lum * .6, distance(vec2(0.5), vec2(uv.x, uv.y)));
    fragColor = vec4(thres);
}