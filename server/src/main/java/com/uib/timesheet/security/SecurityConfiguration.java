package com.uib.timesheet.security;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.EnableGlobalAuthentication;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.session.SessionManagementFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import com.uib.timesheet.jwt.JwtTokenVerifier;
import com.uib.timesheet.jwt.JwtUsernameAndPasswordAuthenticationFilter;



@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{
	
	
	private CorsConfigurationSource configSource;
	private PasswordEncoder passwordEncoder;
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	public void ApplicationSecurityConfig(PasswordEncoder passwordEncoder) {
		this.passwordEncoder= passwordEncoder;
	}
	
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception{
		auth.userDetailsService(userDetailsService);
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			.csrf().disable().cors()
			.and()
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
			.and()
			.addFilter(new JwtUsernameAndPasswordAuthenticationFilter(authenticationManager()))
			
			.addFilterAfter(new JwtTokenVerifier(), JwtUsernameAndPasswordAuthenticationFilter.class)
			.authorizeHttpRequests()
			.anyRequest()
			.permitAll()
			.and()
			.authorizeRequests()
			.antMatchers("/admin/**").authenticated()
			//.antMatchers("/admin/**").hasRole(ApplicationUserRole.ADMIN.name())
			//.antMatchers(HttpMethod.POST,"/admin/**").hasAuthority(ApplicationUserPermission.COLLABORATEUR_WRITE.getPermission())
			//.antMatchers("/collaborateur/**").hasRole(ApplicationUserRole.COLLABORATEUR.name())
			.antMatchers("/collaborateur/**").authenticated()
			.anyRequest()
			.authenticated();
		
			// Authorization  Basic aGVsbWlAbGl2ZS5mcjoxMjM0NQ==
			
			/*
			.formLogin().loginProcessingUrl("/login")
				.loginPage("/").permitAll()
				//.defaultSuccessUrl("/acceuil")
				.passwordParameter("password")
				.usernameParameter("email")
			.and()
			.rememberMe() //defaults to 2 weeks
				.rememberMeParameter("remember-me")
			.and()
			.logout()
				.logoutUrl("/logout")
				.logoutRequestMatcher(new AntPathRequestMatcher("/logout","GET")) //post for enabled CSRF
				.clearAuthentication(false)
				.deleteCookies("JSESSIONID","remember-me")
				.logoutSuccessUrl("/")
			.and()
			.httpBasic();*/
	}
	
	@Bean
    CorsConfigurationSource corsConfigurationSource() {
        final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

        CorsConfiguration corsConfiguration = new CorsConfiguration().applyPermitDefaultValues();
        corsConfiguration.setAllowedHeaders(List.of("Authorization", "Cache-Control", "Content-Type","Access-Control-Allow-Origin"));
        corsConfiguration.addAllowedOrigin("/**");
        corsConfiguration.addAllowedMethod("POST");
        corsConfiguration.addAllowedMethod("PATCH");
        corsConfiguration.addAllowedMethod("PUT");
        //corsConfiguration.setAllowCredentials(true);
  
        corsConfiguration.setExposedHeaders(List.of("Authorization","Access-Control-Allow-Origin"));



        source.registerCorsConfiguration("/**", corsConfiguration);

        return source;
    }

	/*
	@Bean
	AuthenticationProvider authentificationProvider() {
		DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
		provider.setUserDetailsService(userDetailsService);
		provider.setPasswordEncoder(passwordEncoder);
		return provider;
	}
	*/
}
