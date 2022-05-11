package com.uib.timesheet.security;

public enum ApplicationUserPermission {
	COLLABORATEUR_READ("collaborateur:read"),
	COLLABORATEUR_WRITE("collaborateur:write"),
	TACHE_READ("tache:read"),
	TACHE_WRITE("tache:write");
	
	private final String permission;

	private ApplicationUserPermission(String permission) {
		this.permission = permission;
	}
	
	public String getPermission() {
		return permission;
	}
}
