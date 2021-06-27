/*
** https://www.shadertoy.com/view/WdBGR3
** Auther : Canysway
*/ 


void mainImage( out vec4 fragColor, in vec2 fragCoord ){
    vec2 uv_s = fragCoord/iResolution.xy;
    vec2 uv_m = fragCoord/iResolution.xy;
    float time_m = (fract(iTime * 0.1)  -1.) * 0.15;
    float interval = floor(iTime);
    time_m = mod(interval, 10.) <= 1. ? 0. : time_m;
    uv_m.x -= time_m;
    vec4 color_s = texture(iChannel0, uv_s);
    vec4 color_m = texture(iChannel1, uv_m);
    fragColor = color_s * color_m;
}