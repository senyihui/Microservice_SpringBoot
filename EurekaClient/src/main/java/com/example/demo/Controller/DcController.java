package com.example.demo.Controller;

import com.example.demo.Model.Complex;
import com.example.demo.Model.FFT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

@RestController
public class DcController {
    @Autowired
    DiscoveryClient  discoveryClient;

    @GetMapping("/dc")
    public String dc() {
        String services = "Services: " + discoveryClient.getServices();
        System.out.println(services);
        return services;
    }

    @GetMapping("/fft")
    public Complex[] fft(@RequestBody Complex[] complexes) {
        System.out.println("输入：" + Arrays.toString(complexes));
        System.out.println("输出：" + Arrays.toString(FFT.fft(complexes)));
        return FFT.fft(complexes);
    }


}
