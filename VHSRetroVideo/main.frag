/*
** https://www.shadertoy.com/view/WtB3zd
** Auther : Canysway
*/ 

void mainImage( out vec4 fragColor, in vec2 fragCoord ){
    vec2 uv = fragCoord/iResolution.xy;
    uv *= vec2(iResolution.x/2., iResolution.y/2.);
    uv = floor(uv);
    uv /= vec2(iResolution.x/2., iResolution.y/2.);
    uv.x -= (step(fract(iTime * .4), uv.y) * .015);
    uv.x -= (texture(iChannel1, uv).b * .01);
    fragColor = texture(iChannel0, uv);
}