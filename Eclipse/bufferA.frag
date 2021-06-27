#define PI 3.14159265359
#define TWO_PI 6.28318530718

void mainImage( out vec4 fragColor, in vec2 fragCoord ){
    vec2 uv = fragCoord/iResolution.xy;
    float ratio = iResolution.x/iResolution.y;
    uv.x *= ratio;
    float dist1 = distance(vec2(0.5 * ratio, 0.5), uv);
    float dist = .55/sqrt(dist1 * 3.1);
    
    vec2 ray_uv = uv;
    ray_uv -= vec2(0.5 * ratio, 0.5);
    float angle = atan(ray_uv.x, ray_uv.y);
    float r = (cos(angle * 100.) + 1.) * 0.5 + 1.;
    ray_uv *= r;
    float dist2 = .27/sqrt(length(ray_uv) * 3.1);
    
    vec4 spot_color = vec4(1.- step(0.05, dist1));
    vec4 ray_color = vec4(dist2);
    vec4 light_color = vec4(dist);
    ray_color = mix(vec4(0., 0.,0.,1.), ray_color, ray_color.a);
    ray_color = mix(vec4(0., 0.,0.,1.), ray_color, ray_color.a);
    ray_color = mix(vec4(0., 0.,0.,1.), ray_color, ray_color.a);
    ray_color.a *= 0.22;
    ray_color.a = min(1., ray_color.a);
    
    light_color = mix(vec4(0., 0.,0.,1.), light_color, light_color.a);
    light_color = mix(vec4(0., 0.,0.,1.), light_color, light_color.a);
    light_color = mix(vec4(0., 0.,0.,1.), light_color, light_color.a);
    light_color.a = min(1., light_color.a);    
    fragColor = mix(light_color, ray_color, ray_color.a);
}