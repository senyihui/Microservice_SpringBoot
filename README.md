*src: http://blog.didispace.com/spring-cloud-learning/*

## Spring Cloud Eureka

首先，我们来尝试使用Spring Cloud Eureka来实现服务治理。

Spring Cloud Eureka是Spring Cloud Netflix项目下的服务治理模块。而Spring Cloud Netflix项目是Spring Cloud的子项目之一，主要内容是对Netflix公司一系列开源产品的包装，它为Spring Boot应用提供了自配置的Netflix OSS整合。通过一些简单的注解，开发者就可以快速的在应用中配置一下常用模块并构建庞大的分布式系统。它主要提供的模块包括：服务发现（Eureka），断路器（Hystrix），智能路由（Zuul），客户端负载均衡（Ribbon）等。

`EurekaServer`：服务注册中心

`EurekaClient`：服务提供方

`EurekaConsumer`：服务消费者，访问服务提供方的接口*（即`Client`的接口不对外部开放，需要通过`Consumer`来进行调用）*， 其中使用`Spring Cloud Ribbon`进行负载均衡，它是一个基于HTTP和TCP的客户端负载均衡器。它可以通过在客户端中配置ribbonServerList来设置服务端列表去轮询访问以达到均衡负载的作用。 

