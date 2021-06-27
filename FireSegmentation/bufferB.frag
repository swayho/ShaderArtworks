void mainImage( out vec4 fragColor, in vec2 fragCoord ){
    vec2 uv = fragCoord.xy/iResolution.xy;
    vec4 delay = texture(iChannel0, uv);
    vec4 tex = texture(iChannel1, uv);
    fragColor = mix(delay, tex, 0.2);
}