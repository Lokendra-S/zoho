package com.zoho.backend.models.Movie;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.zoho.backend.models.Movies;
import com.zoho.backend.security.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

//https://imdb-api.com/en/API/MostPopularMovies/k_obrvl9xd
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/movie")
public class tmdb {

    @Value("${tmdb_api_key}")
    public String apiKey;

    @Autowired
    MovieService movieService;

    RestTemplate restTemplate = new RestTemplate();

    @GetMapping(
            value = "/toprated",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public String TopIMDB() {
        String url1 ="https://imdb-api.com/en/API/Top250Movies/%s";
        String url = String.format(url1, apiKey);
            return restTemplate.getForObject(url,String.class);
    }

    @GetMapping(
            value = "/popular",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public String PopularIMDB() {
        String url1 ="https://imdb-api.com/en/API/MostPopularMovies/%s";
        String url = String.format(url1, apiKey);
        return restTemplate.getForObject(url,String.class);
    }

    @GetMapping(
            value = "/upcoming",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public String Upcoming() {
        String url1 ="https://imdb-api.com/en/API/ComingSoon/%s";
        int page = 1;
        String url = String.format(url1, apiKey);
        return restTemplate.getForObject(url,String.class);
    }

    @GetMapping(
            value = "/nowplaying",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public String NowPlaying() {
        String url1 ="https://imdb-api.com/en/API/InTheaters/%s";
        int page = 1;
        String url = String.format(url1, apiKey, page);
        return restTemplate.getForObject(url,String.class);
    }

    /*
    * Single Movie Details Start
    * */

    @PostMapping(
            value = "/searchAll",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            headers = {"content-type=application/json"}
    )
    public String SearchAll(@RequestBody String movieName) {
        JsonObject obj = new Gson().fromJson(movieName, JsonObject.class);
        String mName = obj.get("movieName").getAsString();
        String url1 ="https://imdb-api.com/en/API/Search/%s/%s";
        String url = String.format(url1,apiKey,mName);
        return restTemplate.getForObject(url,String.class);
    }

    @PostMapping(
            value = "/searchMovie",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            headers = {"content-type=application/json"}
    )
    public String SearchMovie(@RequestBody String movieName) {
        JsonObject obj = new Gson().fromJson(movieName, JsonObject.class);
        String mName = obj.get("movieName").getAsString();
        String url1 ="https://imdb-api.com/en/API/SearchMovie/%s/%s";
        String url = String.format(url1,apiKey,mName);
        return restTemplate.getForObject(url,String.class);
    }

    @PostMapping(
            value = "/searchTv",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            headers = {"content-type=application/json"}
    )
    public String SearchTv(@RequestBody String movieName) {
        JsonObject obj = new Gson().fromJson(movieName, JsonObject.class);
        String mName = obj.get("movieName").getAsString();
        String url1 ="https://imdb-api.com/en/API/SearchSeries/%s/%s";
        String url = String.format(url1,apiKey,mName);
        return restTemplate.getForObject(url,String.class);
    }

    @PostMapping(
            value = "/searchName",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            headers = {"content-type=application/json"}
    )
    public String SearchName(@RequestBody String movieName) {
        JsonObject obj = new Gson().fromJson(movieName, JsonObject.class);
        String mName = obj.get("movieName").getAsString();
        String url1 ="https://imdb-api.com/en/API/SearchName/%s/%s";
        String url = String.format(url1,apiKey,mName);
        return restTemplate.getForObject(url,String.class);
    }

    @PostMapping(
            value = "/searchCompany",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            headers = {"content-type=application/json"}
    )
    public String SearchCompany(@RequestBody String movieName) {
        JsonObject obj = new Gson().fromJson(movieName, JsonObject.class);
        String mName = obj.get("movieName").getAsString();
        String url1 ="https://imdb-api.com/en/API/SearchCompany/%s/%s";
        String url = String.format(url1,apiKey,mName);
        return restTemplate.getForObject(url,String.class);
    }

    @PostMapping(
            value = "/movieCrew",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            headers = {"content-type=application/json"}
    )
    public String MovieCrew(@RequestBody String movieId) {
        JsonObject obj = new Gson().fromJson(movieId, JsonObject.class);
        String mName = obj.get("movieId").getAsString();
        String url1 ="https://imdb-api.com/en/API/FullCast/%s/%s";
        String url = String.format(url1,apiKey,mName);
        return restTemplate.getForObject(url,String.class);
    }

    @PostMapping(
            value = "/moviePosters",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            headers = {"content-type=application/json"}
    )
    public String MoviePosters(@RequestBody String movieId) {
        JsonObject obj = new Gson().fromJson(movieId, JsonObject.class);
        String mName = obj.get("movieId").getAsString();
        System.out.println(mName);
        String url1 ="https://imdb-api.com/en/API/Posters/%s/%s";
        String url = String.format(url1,apiKey,mName);
        return restTemplate.getForObject(url,String.class);
    }

    @PostMapping(
            value = "/movieImages",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            headers = {"content-type=application/json"}
    )
    public String MovieImages(@RequestBody String movieId) {
        JsonObject obj = new Gson().fromJson(movieId, JsonObject.class);
        String mName = obj.get("movieId").getAsString();
        System.out.println(mName);
        String url1 ="https://imdb-api.com/en/API/Images/%s/%s";
        String url = String.format(url1,apiKey,mName);
        return restTemplate.getForObject(url,String.class);
    }

    @CrossOrigin
    @PostMapping(
            value = "/movieMedia",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            headers = {"content-type=application/json"}
    )
    public String MovieMedia(@RequestBody String movieId) {
        JsonObject obj = new Gson().fromJson(movieId, JsonObject.class);
        String mName = obj.get("movieId").getAsString();
        System.out.println(mName);
        String url1 ="https://imdb-api.com/en/API/Trailer/%s/%s";
        String url = String.format(url1,apiKey,mName);
        return restTemplate.getForObject(url,String.class);
    }

    @PostMapping(
            value = "/movieRatings",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            headers = {"content-type=application/json"}
    )
    public String MovieRatings(@RequestBody String movieId) {
        JsonObject obj = new Gson().fromJson(movieId, JsonObject.class);
        String mName = obj.get("movieId").getAsString();
        System.out.println(mName);
        String url1 ="https://imdb-api.com/en/API/Ratings/%s/%s";
        String url = String.format(url1,apiKey,mName);
        return restTemplate.getForObject(url,String.class);
    }

    @PostMapping(
            value = "/movieUserRatings",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            headers = {"content-type=application/json"}
    )
    public String MovieUserRatings(@RequestBody String movieId) {
        JsonObject obj = new Gson().fromJson(movieId, JsonObject.class);
        String mName = obj.get("movieId").getAsString();
        System.out.println(mName);
        String url1 ="https://imdb-api.com/en/API/UserRatings/%s/%s";
        String url = String.format(url1,apiKey,mName);
        return restTemplate.getForObject(url,String.class);
    }

    @PostMapping(
            value = "/movieReviews",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            headers = {"content-type=application/json"}
    )
    public String MovieReviews(@RequestBody String movieId) {
        JsonObject obj = new Gson().fromJson(movieId, JsonObject.class);
        String mName = obj.get("movieId").getAsString();
        System.out.println(mName);
        String url1 ="https://imdb-api.com/en/API/Reviews/%s/%s";
        String url = String.format(url1,apiKey,mName);
        return restTemplate.getForObject(url,String.class);
    }

    @PostMapping(
            value = "/movieAwards",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            headers = {"content-type=application/json"}
    )
    public String MovieAwards(@RequestBody String movieId) {
        JsonObject obj = new Gson().fromJson(movieId, JsonObject.class);
        String mName = obj.get("movieId").getAsString();
        System.out.println(mName);
        String url1 ="https://imdb-api.com/en/API/Awards/%s/%s";
        String url = String.format(url1,apiKey,mName);
        return restTemplate.getForObject(url,String.class);
    }

    @PostMapping(
            value = "/movieExt",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            headers = {"content-type=application/json"}
    )
    public String MovieExt(@RequestBody String movieId) {
        JsonObject obj = new Gson().fromJson(movieId, JsonObject.class);
        String mName = obj.get("movieId").getAsString();
        System.out.println(mName);
        String url1 ="https://imdb-api.com/en/API/ExternalSites/%s/%s"; 
        String url = String.format(url1,apiKey,mName);
        return restTemplate.getForObject(url,String.class);
    }

    @PostMapping(
            value = "/movieWiki",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            headers = {"content-type=application/json"}
    )
    public String MovieWiki(@RequestBody String movieId) {
        JsonObject obj = new Gson().fromJson(movieId, JsonObject.class);
        String mName = obj.get("movieId").getAsString();
        System.out.println(mName);
        String url1 ="https://imdb-api.com/en/API/Wikipedia/%s/%s";
        String url = String.format(url1,apiKey,mName);
        return restTemplate.getForObject(url,String.class);
    }


    @PostMapping(
            value = "/movielist",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            headers = {"content-type=application/json"}
    )
    public String MovieList(@RequestBody String movieId) {
        JsonObject obj = new Gson().fromJson(movieId, JsonObject.class);
        String mName = obj.get("movieId").getAsString();
        System.out.println(mName);
        String url1 ="https://api.themoviedb.org/3/movie/%s/lists?api_key=%s";
        String url = String.format(url1,mName, apiKey);
        String res = restTemplate.getForObject(url,String.class);
        return res;
    }

    /*
     * Single Movie Details end
     * */

}
