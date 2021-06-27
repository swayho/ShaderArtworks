/*
** https://www.shadertoy.com/view/3lKyRz
** Auther : Canysway
*/ 

#define NOISE(tex, uv, speed, str)       texture(tex, uv - vec2(0., fract(iTime * speed))).r * str
#define SEG_ALPHA(color)            step(.95, step(.5, color.g) * (1. - step(.3, color.r)) * (1. - step(.3, color.b)))
#define SEG(color)                  clamp(mix(vec4(1.), vec4(vec3(0.), 1.), SEG_ALPHA(color)), vec4(0.), vec4(1.))


#define SPEED      .25
#define STRENGTH   .06
#define COLOR      vec4(4., .2, .2, 1.)

#define SPEED2      .15
#define STRENGTH2   .03
#define COLOR2      vec4(.3, .3, .2, 1.)

void mainImage( out vec4 fragColor, in vec2 fragCoord ){
    vec2 uv = fragCoord.xy/iResolution.xy;
    vec2 uv2 = uv;
    vec2 o_uv = uv;
    uv.y -= (NOISE(iChannel2, uv, SPEED, STRENGTH) + .003);
    uv2.y -= (NOISE(iChannel3, uv, SPEED2, STRENGTH2) + .003);
    
    vec4 color1 = texture(iChannel0, uv) * COLOR;
    vec4 color2 = texture(iChannel0, uv2) * COLOR2;
    vec4 origin = texture(iChannel1, o_uv);
    vec4 seg = SEG(origin);
    fragColor = mix(clamp(color1 + color2 + origin, vec4(0.), vec4(1.)), origin, seg.r);
}