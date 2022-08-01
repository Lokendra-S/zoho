package com.zoho.backend.controllers;

import com.zoho.backend.models.Movies;
import com.zoho.backend.models.User;
import com.zoho.backend.security.services.AdminService;
import com.zoho.backend.security.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.transaction.Transactional;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000",
        allowCredentials = "true",
        maxAge = 3600,
        allowedHeaders = "*")
@RestController
@RequestMapping("/api/admin")
public class AdminController {
    @Autowired
    AdminService adminService;

    @GetMapping("/home")
    @PreAuthorize("hasRole('ADMIN')")
    public List<User> adminAccess() {
        return adminService.allMovies();
    }

    @GetMapping("/movies")
    @PreAuthorize("hasRole('ADMIN')")
    public List<Movies> userMovies() {
        return adminService.allUserMovies();
    }

    @GetMapping("/movieslength")
    @PreAuthorize("hasRole('ADMIN')")
    public int userMoviesLength() {
        return adminService.allUserMoviesLength();
    }

//    @Transactional
    @GetMapping("/deleteuser")
    @PreAuthorize("hasRole('ADMIN')")
    public String deleteUser() {
        return adminService.removeUser();
    }
}
