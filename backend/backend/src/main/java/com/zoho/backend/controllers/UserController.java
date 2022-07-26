package com.zoho.backend.controllers;

import com.zoho.backend.models.Movies;
import com.zoho.backend.security.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000",
        allowCredentials = "true",
        maxAge = 3600,
        allowedHeaders = "*")
@RestController
@RequestMapping("/api/user")
public class UserController {

  @Autowired
  MovieService movieService;
  @GetMapping("/all")
  public String allAccess() {
    return "Public Content.";
  }

  @PreAuthorize("hasRole('ROLE_USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
  @PostMapping(
          value = "/addmovie",
          produces = MediaType.APPLICATION_JSON_VALUE,
          consumes = MediaType.APPLICATION_JSON_VALUE,
          headers = {"content-type=application/json"}
  )
  public String addMovie(@RequestBody Movies movies){
    movieService.newMovie(movies);
    return "Success";
  }

  @PreAuthorize("hasRole('ROLE_USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
  @GetMapping(
          value = "/allMovies"
  )
  public List<Movies> getAllMovies(){
    return movieService.getAllMovies();
//    return "Success";
  }

  @GetMapping("/mod")
  @PreAuthorize("hasRole('MODERATOR')")
  public String moderatorAccess() {
    return "Moderator Board.";
  }

  @GetMapping("/admin")
  @PreAuthorize("hasRole('ADMIN')")
  public String adminAccess() {
    return "Admin Board.";
  }
}
