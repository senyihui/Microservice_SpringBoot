package com.example.demo.Interface;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient("eureka-client-2")
public interface DcClient {

    @GetMapping("/dc")
    String consumer();

}
