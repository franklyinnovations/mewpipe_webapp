angular.module('mewpipe')
	   .constant("Config", {
	   		domain : "mewpipe.ang",
	   		server : {
		   		url  : "http://10.0.0.102",
		   		port : 8000,
	   		},
	   		requests : {
	   			defaultLimit : 10
	   		},
	   		regex : {
	   			email    : new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i'),
	   			password : new RegExp('^(?=.{6,}$)(?=.*[a-z])(?=.*[0-9]).*'),
	   			video    : new RegExp('^video\/')
	   		},
	   		video : {
	   			titleMaxLength : 40,
	   			maxSize        : 524288000,
	   			policies       : {
	   				"public"       : "Public (Available to anybody)",
	   				"private_link" : "Private Link (Available to anybody unauthenticated with the link)",
	   				"private"      : "Private (Available only to authenticated users)"
	   			}
	   		}
	   });