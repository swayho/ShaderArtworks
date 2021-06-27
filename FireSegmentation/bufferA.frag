#define SEG_ALPHA(color)            step(.95, step(.5, color.g) * (1. - step(.3, color.r)) * (1. - step(.3, color.b)))
#define SEG(color)                  clamp(mix(vec4(1.), vec4(vec3(0.), 1.), SEG_ALPHA(color)), vec4(0.), vec4(1.))

void mainImage( out vec4 fragColor, in vec2 fragCoord ){
    vec2 uv = fragCoord.xy/iResolution.xy;
    fragColor =  SEG(texture(iChannel0, uv));
}