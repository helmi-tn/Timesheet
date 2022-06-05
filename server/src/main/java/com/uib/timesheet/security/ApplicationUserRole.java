package com.uib.timesheet.security;

import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.google.common.collect.Sets;

public enum ApplicationUserRole {
	COLLABORATEUR(Sets.newHashSet())
	,ADMIN(Sets.newHashSet(ApplicationUserPermission.TACHE_READ,
			ApplicationUserPermission.TACHE_WRITE,
			ApplicationUserPermission.COLLABORATEUR_READ,
			ApplicationUserPermission.COLLABORATEUR_WRITE));
	
	private final Set<ApplicationUserPermission> permissions;

	
	private ApplicationUserRole(Set<ApplicationUserPermission> permissions) {
		this.permissions = permissions;
	}
	
	public Set<ApplicationUserPermission> getPermissions(){
		return permissions;
	}
	
	public Set<SimpleGrantedAuthority> getGrantedAuthorities(){
		Set<SimpleGrantedAuthority> permissions = getPermissions().stream()
		.map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
		.collect(Collectors.toSet());
		permissions.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
		return permissions;
	}
}
