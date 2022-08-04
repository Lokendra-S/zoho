package com.zoho.backend.controllers;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.zoho.backend.models.Movies;
import com.zoho.backend.models.User;
import com.zoho.backend.security.services.AdminService;
import com.zoho.backend.security.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.ArrayList;
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

    @PostMapping("/movies")
    @PreAuthorize("hasRole('ADMIN')")
    public List<Movies> userMovies(@RequestBody String user) {
        JsonObject obj = new Gson().fromJson(user, JsonObject.class);
        String uName = obj.get("user").getAsString();
        return adminService.allUserMovies(uName);
    }

    @PostMapping("/movieslength")
    @PreAuthorize("hasRole('ADMIN')")
    public List<Integer> userMoviesLength(@RequestBody String user) {
        JsonObject obj = new Gson().fromJson(user, JsonObject.class);
        String uName = obj.get("user").getAsString();
        return adminService.allUserMoviesLength(uName);
    }

    @Transactional
    @PostMapping("/deleteuser")
    @PreAuthorize("hasRole('ADMIN')")
    public String deleteUser(@RequestBody String user) {
        JsonObject obj = new Gson().fromJson(user, JsonObject.class);
        String uName = obj.get("user").getAsString();
        return adminService.removeUser(uName);
    }
}
