package com.zoho.backend.security.services;

import com.zoho.backend.models.Movies;
import com.zoho.backend.models.User;
import com.zoho.backend.repository.MovieRepository;
import com.zoho.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MovieService {

    @Autowired
    MovieRepository movieRepository;
    @Autowired
    UserRepository userRepository;

    public String newMovie(Movies movies) {

        try{
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            String username = auth.getName();

            User user = userRepository.findByUsername(username)
                    .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
            Optional<Movies> movies1 = movieRepository.findById(movies.getId());
            if(movies1.isEmpty()){
                System.out.println("yes");
                movies.setUser(user);
                movieRepository.save(movies);
                return "No";
            }else{
                movies1.get().setWatchlist(1);
                movieRepository.save(movies1.get());
                return "Yes";
            }
        }catch (Exception e){
            System.out.println(e);
            return "error";
        }
    }
    public String newFavouriteMovie(Movies movies) {
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            String username = auth.getName();

            User user = userRepository.findByUsername(username)
                    .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
            Optional<Movies> movies1 = movieRepository.findById(movies.getId());
            if(movies1.isEmpty()){
                System.out.println("yes");
                movies.setUser(user);
                movieRepository.save(movies);
            }else{
                movies1.get().setFavourite(1);
                movieRepository.save(movies1.get());
            }
            return "success";
    }
    public String newWatchingMovie(Movies movies) {

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
        Optional<Movies> movies1 = movieRepository.findById(movies.getId());
        if(movies1.isEmpty()){
            System.out.println("yes");
            movies.setUser(user);
            movieRepository.save(movies);
        }else{
            movies1.get().setPlaying(1);
            movieRepository.save(movies1.get());
        }
        return "success";
    }
    public String deleteWatchlistMovie(Long mId) {

        try{
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            String username = auth.getName();

            User user = userRepository.findByUsername(username)
                    .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
            Optional<Movies> movies1 = movieRepository.findById(mId);
            if(movies1.isPresent()){
                movies1.get().setWatchlist(0);
                movieRepository.save(movies1.get());
                return "Yes";
            }
            return "error";
        }catch (Exception e){
            System.out.println(e);
            return "error";
        }
    }
    public String deleteFavouriteMovie(Long mId) {
        try{
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            String username = auth.getName();

            User user = userRepository.findByUsername(username)
                    .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
            Optional<Movies> movies1 = movieRepository.findById(mId);
            if(movies1.isPresent()){
                movies1.get().setFavourite(0);
                movieRepository.save(movies1.get());
                return "success";
            }else{
                System.out.println(movies1.toString());
                return "error";
            }
        }catch (Exception e){
            System.out.println(e);
            return "error";
        }

    }
    public String deleteWatchingMovie(Long mId) {

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
        Optional<Movies> movies1 = movieRepository.findById(mId);
        if(movies1.isPresent()){
            movies1.get().setPlaying(0);
            movieRepository.save(movies1.get());
            return "success";
        }
        return "error";
    }

    public String deleteAllMovie(Long mId) {

        try{
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            String username = auth.getName();

            User user = userRepository.findByUsername(username)
                    .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
            Optional<Movies> movies1 = movieRepository.findById(mId);
            if(movies1.isEmpty()){
                return "error";
            }else{
                if (movies1.get().getWatchlist() == 0 && movies1.get().getFavourite() == 0 && movies1.get().getPlaying() == 0){
                    movieRepository.deleteById(movies1.get().getUid());
                }
                return "success de;";
            }
        }catch (Exception e){
            return "error";
        }
    }

    public List<Movies> getAllMovies(){
        return movieRepository.findAll();
    }

}
