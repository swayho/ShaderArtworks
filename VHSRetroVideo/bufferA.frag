#define PI 3.1415923693
#define SINE(x) sin(.5 * PI * (x - .5)) + 1.
#define COSINE(x) 1. - cos(.5 * PI * x)

void mainImage( out vec4 fragColor, in vec2 fragCoord ){
    vec2 uv = fragCoord/iResolution.xy;
    vec4 colorR = texture(iChannel0, uv);
    vec4 colorG = texture(iChannel0, uv + vec2(0.01, 0.));
    vec4 colorB = texture(iChannel0, uv - vec2(0.01, 0.));
    colorR.r = COSINE(colorR.r);
    colorG.g = COSINE(colorG.g);
    colorB.b = COSINE(colorB.b);
    fragColor = vec4(colorR.r, colorG.g, colorB.b, 1.);
}