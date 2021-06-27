
void mainImage( out vec4 fragColor, in vec2 fragCoord ){
    vec2 uv = fragCoord/iResolution.xy;
    float ratio = iResolution.x/iResolution.y;
    uv.x *= ratio;
    
    float dist = distance(vec2(0.5 * ratio, 0.5), uv);
    dist = smoothstep(0.085, 0.085 + 0.015, dist);
    fragColor = vec4(dist);
}