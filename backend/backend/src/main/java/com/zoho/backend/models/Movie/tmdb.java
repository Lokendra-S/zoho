package com.zoho.backend.models.Movie;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/movie")
public class tmdb {
    @Value("${tmdb_api_key}")
    public String apiKey;

    RestTemplate restTemplate = new RestTemplate();

    @PostMapping(
            value = "/popular",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            headers = {"content-type=application/json"}
    )
    public String PopularMovies(@RequestBody String pageNo) {
        JsonObject obj = new Gson().fromJson(pageNo, JsonObject.class);
        String page = obj.get("pageNo").getAsString();
//        System.out.println(mName);
        String url1 ="https://api.themoviedb.org/3/movie/popular?api_key=%s&page=%s";
        String url = String.format(url1, apiKey, page);
        String res = restTemplate.getForObject(url,String.class);
        return res;
    }

    @PostMapping(
            value = "/toprated",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            headers = {"content-type=application/json"}
    )
    public String TopRated(@RequestBody String pageNo) {
        JsonObject obj = new Gson().fromJson(pageNo, JsonObject.class);
        String page = obj.get("pageNo").getAsString();
        String url1 ="https://api.themoviedb.org/3/movie/top_rated?api_key=%s&page=%s";
        String url = String.format(url1, apiKey, page);
        String res = restTemplate.getForObject(url,String.class);
        return res;
    }

    @GetMapping(
            value = "/upcoming",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public String Upcoming() {
        String url1 ="https://api.themoviedb.org/3/movie/upcoming?api_key=%s&page=%d";
        int page = 1;
        String url = String.format(url1, apiKey, page);
        String res = restTemplate.getForObject(url,String.class);
        return res;
    }

    @GetMapping(
            value = "/nowplaying",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public String NowPlaying() {
        String url1 ="https://api.themoviedb.org/3/movie/now_playing?api_key=%s&page=%d";
        int page = 1;
        String url = String.format(url1, apiKey, page);
        String res = restTemplate.getForObject(url,String.class);
        return res;
    }

    /*
    * Single Movie Details Start
    * */

    @PostMapping(
            value = "/moviecrew",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            headers = {"content-type=application/json"}
    )
    public String MovieCrew(@RequestBody String movieId) {
        JsonObject obj = new Gson().fromJson(movieId, JsonObject.class);
        String mName = obj.get("movieId").getAsString();
        System.out.println(mName);
        String url1 ="https://api.themoviedb.org/3/movie/%s/credits?api_key=%s";
        String url = String.format(url1,mName, apiKey);
        String res = restTemplate.getForObject(url,String.class);
        return res;
    }

    @PostMapping(
            value = "/movieimages",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            headers = {"content-type=application/json"}
    )
    public String MovieImages(@RequestBody String movieId) {
        JsonObject obj = new Gson().fromJson(movieId, JsonObject.class);
        String mName = obj.get("movieId").getAsString();
        System.out.println(mName);
        String url1 ="https://api.themoviedb.org/3/movie/%s/images?api_key=%s";
        String url = String.format(url1,mName, apiKey);
        String res = restTemplate.getForObject(url,String.class);
        return res;
    }

    @PostMapping(
            value = "/moviemedia",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            headers = {"content-type=application/json"}
    )
    public String MovieMedia(@RequestBody String movieId) {
        JsonObject obj = new Gson().fromJson(movieId, JsonObject.class);
        String mName = obj.get("movieId").getAsString();
        System.out.println(mName);
        String url1 ="https://api.themoviedb.org/3/movie/%s/videos?api_key=%s";
        String url = String.format(url1,mName, apiKey);
        String res = restTemplate.getForObject(url,String.class);
        return res;
    }

    @PostMapping(
            value = "/moviereviews",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            headers = {"content-type=application/json"}
    )
    public String MovieReviews(@RequestBody String movieId) {
        JsonObject obj = new Gson().fromJson(movieId, JsonObject.class);
        String mName = obj.get("movieId").getAsString();
        System.out.println(mName);
        String url1 ="https://api.themoviedb.org/3/movie/%s/reviews?api_key=%s";
        String url = String.format(url1,mName, apiKey);
        String res = restTemplate.getForObject(url,String.class);
        return res;
    }

    @PostMapping(
            value = "/movieproviders",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            headers = {"content-type=application/json"}
    )
    public String MovieProviders(@RequestBody String movieId) {
        JsonObject obj = new Gson().fromJson(movieId, JsonObject.class);
        String mName = obj.get("movieId").getAsString();
        System.out.println(mName);
        String url1 ="https://api.themoviedb.org/3/movie/%s/watch/providers?api_key=%s";
        String url = String.format(url1,mName, apiKey);
        String res = restTemplate.getForObject(url,String.class);
        return res;
    }


    @PostMapping(
            value = "/movieextids",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            headers = {"content-type=application/json"}
    )
    public String MovieExtIds(@RequestBody String movieId) {
        JsonObject obj = new Gson().fromJson(movieId, JsonObject.class);
        String mName = obj.get("movieId").getAsString();
        System.out.println(mName);
        String url1 ="https://api.themoviedb.org/3/movie/%s/external_ids?api_key=%s";
        String url = String.format(url1,mName, apiKey);
        String res = restTemplate.getForObject(url,String.class);
        return res;
    }

    @PostMapping(
            value = "/movierecom",
            produces = MediaType.APPLICATION_JSON_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE,
            headers = {"content-type=application/json"}
    )
    public String MovieRecommendation(@RequestBody String movieId) {
        JsonObject obj = new Gson().fromJson(movieId, JsonObject.class);
        String mName = obj.get("movieId").getAsString();
        System.out.println(mName);
        String url1 ="https://api.themoviedb.org/3/movie/%s/recommendations?api_key=%s";
        String url = String.format(url1,mName, apiKey);
        String res = restTemplate.getForObject(url,String.class);
        return res;
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
