package com.example.demo.Controller;

import com.example.demo.Model.Complex;
import com.example.demo.Model.FFT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

@RestController
@CrossOrigin
public class DcController {
    @Autowired
    DiscoveryClient  discoveryClient;

    @GetMapping("/dc")
    public String dc() {
        String services = "Services: " + discoveryClient.getServices();
        System.out.println(services);
        return services;
    }

    @PostMapping("/fft")
    public Complex[] fft(@RequestBody Complex[] complexes) {
        System.out.println("Input: " + Arrays.toString(complexes));
        System.out.println("Output: " + Arrays.toString(FFT.fft(complexes)));
        return FFT.fft(complexes);
    }


}
