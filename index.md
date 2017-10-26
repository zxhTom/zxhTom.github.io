**<center>一张图带你了解log4j2使用</center>**

 ----------------------

  -  环境准备
    
    -  log4j-api-2.3.jar
    -  log4j-core-2.3.jar
    -  log4j-web-2.3.jar  (在web项目中需要引入的jar包。这里做了数据的初始化)  

  -  数据初始化

     我们知道在web项目的入口在web.xml中。所以我们得加入log4j的监听器和过滤器

     ```
        <listener>
            <listener-class>org.apache.logging.log4j.web.Log4jServletContextListener</listener-class>
        </listener>
        <filter>
            <filter-name>log4jServletFilter</filter-name>
            <filter-class>org.apache.logging.log4j.web.Log4jServletFilter</filter-class>
        </filter>
        <filter-mapping>
            <filter-name>log4jServletFilter</filter-name>
            <url-pattern>/*</url-pattern>
            <dispatcher>REQUEST</dispatcher>
            <dispatcher>FORWARD</dispatcher>
            <dispatcher>INCLUDE</dispatcher>
            <dispatcher>ERROR</dispatcher>
        </filter-mapping>
     ```

    到这里我们log4j就已经配置成功了。但是在实际开发中发现没有上面的监听器和过滤器也是可以的。由于时间问题没有研究原因。大概网上查阅了一下好像是log4j源码中有默认的配置。我们上面没有指定具体的配置文件的地址在哪，log4j就会读取jar中默认的配置。系统中选择的默认配置文件有以下几种：

      -  classpath下的名为log4j2-test.json 或者log4j2-test.jsn的文件.  
      -  classpath下的名为log4j2-test.xml的文件.
      -  classpath下名为log4j2.json 或者log4j2.jsn的文件.
      -  classpath下名为log4j2.xml的文件.
      

  -  log4j2配置详解
      +  ![](http://img.blog.csdn.net/20171026154033576?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdTAxMzEzMjA1MQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

  -  logger等级
    
      +  共有8个等级 按照从低到高为：All < Trace < Debug < Info < Warn < Error < Fatal < OFF.
      +  All:最低等级的，用于打开所有日志记录.
      +  Trace:是追踪，就是程序推进以下，你就可以写个trace输出，所以trace应该会特别多，不过没关系，我们可以设置最低日志级别不让他输出.
      +  Debug:指出细粒度信息事件对调试应用程序是非常有帮助的.
      +  Info:消息在粗粒度级别上突出强调应用程序的运行过程.
      +  Warn:输出警告及warn以下级别的日志.
      +  Error:输出错误信息日志.
      +  Fatal:输出每个严重的错误事件将会导致应用程序的退出的日志.
      +  OFF:最高等级的，用于关闭所有日志记录.
　　　

  -  举例

    ![](http://img.blog.csdn.net/20171026153948683?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdTAxMzEzMjA1MQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

    像上面那样我们已经配置了很多Logger了。每个Logger都有自己的名字。我们在代码中这样使用
    `private static final Logger bossRequestTeletextLogger = LogManager.getLogger("bossRequestTeletextLogger");`
    意思就是bossRequestTeletxtLogger将使用我们最后一个Logger，该Logger等级是info等级的。存储采用的是`teletextLoggerFile`存储到文件中的。
