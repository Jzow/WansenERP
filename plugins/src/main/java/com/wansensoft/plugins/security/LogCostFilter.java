package com.wansensoft.plugins.security;

import com.wansensoft.utils.constants.BusinessConstants;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.annotation.WebInitParam;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.util.StringUtils;

import jakarta.annotation.Resource;
import jakarta.servlet.*;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

@WebFilter(filterName = "LogCostFilter", urlPatterns = {"/*"},
        initParams = {@WebInitParam(name = "filterPath",
                      value = "/wansenerp/user/login#/wansenerp/user/weixinLogin#/wansenerp/user/weixinBind#" +
                              "/wansenerp/user/registerUser#/wansenerp/user/randomImage#" +
                              "/wansenerp/platformConfig/getPlatform#/wansenerp/v2/api-docs#/wansenerp/webjars#" +
                              "/wansenerp/systemConfig/static#/wansenerp/api/plugin/wechat/weChat/share")})
public class LogCostFilter implements Filter {

    private static final String FILTER_PATH = "filterPath";

    public static final String ACCESS_TOKEN = "X-Access-Token";

    private String[] allowUrls;
    @Resource
    public RedisTemplate redisTemplate;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        String filterPath = filterConfig.getInitParameter(FILTER_PATH);
        if (!StringUtils.isEmpty(filterPath)) {
            allowUrls = filterPath.contains("#") ? filterPath.split("#") : new String[]{filterPath};
        }
    }

    public Object getObjectFromSessionByKey(HttpServletRequest request, String key){
        Object obj=null;
        if(request==null){
            return null;
        }
        String token = request.getHeader(ACCESS_TOKEN);
        if(token!=null) {
            //开启redis，用户数据放在redis中，从redis中获取
            if(redisTemplate.opsForHash().hasKey(token,key)){
                //redis中存在，拿出来使用
                obj=redisTemplate.opsForHash().get(token,key);
                redisTemplate.expire(token, BusinessConstants.MAX_SESSION_IN_SECONDS, TimeUnit.SECONDS);
            }
        }
        return obj;
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {
        HttpServletRequest servletRequest = (HttpServletRequest) request;
        HttpServletResponse servletResponse = (HttpServletResponse) response;
        String requestUrl = servletRequest.getRequestURI();
        //具体，比如：处理若用户未登录，则跳转到登录页
        String userId = String.valueOf(getObjectFromSessionByKey(servletRequest,"userId"));

        System.err.println("userId: " + userId);

        if(StringUtils.hasLength(userId)) { //如果已登录，不阻止
            chain.doFilter(request, response);
            return;
        }
        if (requestUrl != null && (requestUrl.contains("/doc.html") ||
            requestUrl.contains("/user/login") || requestUrl.contains("/user/register"))) {
            chain.doFilter(request, response);
            return;
        }
        if (null != allowUrls && allowUrls.length > 0) {
            for (String url : allowUrls) {
                if (requestUrl.startsWith(url)) {
                    chain.doFilter(request, response);
                    return;
                }
            }
        }
        servletResponse.setStatus(500);
        if(requestUrl != null && !requestUrl.contains("/user/logout") && !requestUrl.contains("/function/findMenuByPNumber")) {
            servletResponse.getWriter().write("loginOut");
        }
    }

    @Override
    public void destroy() {

    }
}