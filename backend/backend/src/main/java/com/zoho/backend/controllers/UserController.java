package com.zoho.backend.controllers;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.zoho.backend.models.Movies;
import com.zoho.backend.security.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Set;

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

//  @PreAuthorize("hasRole('ROLE_USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
//  @PostMapping(
//          value = "/checkmovie",
//          produces = MediaType.APPLICATION_JSON_VALUE,
//          consumes = MediaType.APPLICATION_JSON_VALUE,
//          headers = {"content-type=application/json"}
//  )
//  public Boolean checkMovie(@RequestBody Movies movies){
//    return movieService.checkMovie(movies);
//  }
  @PreAuthorize("hasRole('ROLE_USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
  @PostMapping(
          value = "/addmovie",
          produces = MediaType.APPLICATION_JSON_VALUE,
          consumes = MediaType.APPLICATION_JSON_VALUE,
          headers = {"content-type=application/json"}
  )
  public String addMovie(@RequestBody Movies movies){
    return movieService.newMovie(movies);
  }

  @PreAuthorize("hasRole('ROLE_USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
  @PostMapping(
          value = "/addfavmovie",
          produces = MediaType.APPLICATION_JSON_VALUE,
          consumes = MediaType.APPLICATION_JSON_VALUE,
          headers = {"content-type=application/json"}
  )
  public String addFavMovie(@RequestBody Movies movies){
    return movieService.newFavouriteMovie(movies);
  }

  @PreAuthorize("hasRole('ROLE_USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
  @PostMapping(
          value = "/addplaymovie",
          produces = MediaType.APPLICATION_JSON_VALUE,
          consumes = MediaType.APPLICATION_JSON_VALUE,
          headers = {"content-type=application/json"}
  )
  public String addPlayMovie(@RequestBody Movies movies){
    return movieService.newWatchingMovie(movies);
  }

  @PreAuthorize("hasRole('ROLE_USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
  @PostMapping(
          value = "/deletewatchmovie",
          produces = MediaType.APPLICATION_JSON_VALUE,
          consumes = MediaType.APPLICATION_JSON_VALUE,
          headers = {"content-type=application/json"}
  )
  public String deleteWatchMovie(@RequestBody String movies){
    JsonObject obj = new Gson().fromJson(movies, JsonObject.class);
    String mName = obj.get("movies").getAsString();
    return movieService.deleteWatchlistMovie(mName);
  }

  @PreAuthorize("hasRole('ROLE_USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
  @PostMapping(
          value = "/deletefavmovie",
          produces = MediaType.APPLICATION_JSON_VALUE,
          consumes = MediaType.APPLICATION_JSON_VALUE,
          headers = {"content-type=application/json"}
  )
  public String deleteFavMovie(@RequestBody String movies){
    JsonObject obj = new Gson().fromJson(movies, JsonObject.class);
    String mName = obj.get("movies").getAsString();
    return movieService.deleteFavouriteMovie(mName);
  }

  @PreAuthorize("hasRole('ROLE_USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
  @PostMapping(
          value = "/deleteplaymovie",
          produces = MediaType.APPLICATION_JSON_VALUE,
          consumes = MediaType.APPLICATION_JSON_VALUE,
          headers = {"content-type=application/json"}
  )
  public String deletePlayMovie(@RequestBody String movies){
    JsonObject obj = new Gson().fromJson(movies, JsonObject.class);
    String mName = obj.get("movies").getAsString();
    return movieService.deleteWatchingMovie(mName);
  }

  @PreAuthorize("hasRole('ROLE_USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
  @PostMapping(
          value = "/deletemovie",
          produces = MediaType.APPLICATION_JSON_VALUE,
          consumes = MediaType.APPLICATION_JSON_VALUE,
          headers = {"content-type=application/json"}
  )
  public String deleteMovie(@RequestBody String movies){
    JsonObject obj = new Gson().fromJson(movies, JsonObject.class);
    String mName = obj.get("movies").getAsString();
    return movieService.deleteAllMovie(mName);
  }

  @PreAuthorize("hasRole('ROLE_USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
  @GetMapping(
          value = "/allMovies"
  )
  public List<Movies> getAllMovies(){
    return movieService.getAllMovies();
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
