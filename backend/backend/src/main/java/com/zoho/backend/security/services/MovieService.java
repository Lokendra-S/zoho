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
import java.util.*;
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
            List<Movies> movies1 = movieRepository.findById(movies.getId());
            if(movies1.isEmpty()){
                System.out.println("yes");
                movies.setWatchlist(1);
                movies.setUser(user);
                movieRepository.save(movies);
                return "No";
            }else {
                for (int i=0;i<movies1.size();i++) {
                    if (Objects.equals(movies1.get(i).getUser().getUsername(), username)) {
                        System.out.println("No");
                        movies1.get(i).setWatchlist(1);
                        movieRepository.save(movies1.get(i));
                    } else if(i+1 == movies1.size()) {
                        System.out.println("YES");
                        movies.setWatchlist(1);
                        movies.setUser(user);
                        movieRepository.save(movies);
                    }
                }

            }
            return "success";
        }catch (Exception e) {
            System.out.println(e.toString());
            return "error";
        }
    }
    public String newFavouriteMovie(Movies movies) {
        try{
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            String username = auth.getName();

            User user = userRepository.findByUsername(username)
                    .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
            List<Movies> movies1 = movieRepository.findById(movies.getId());
            if(movies1.isEmpty()){
                System.out.println("yes");
                movies.setFavourite(1);
                movies.setUser(user);
                movieRepository.save(movies);
                return "No";
            }else {
                for (int i=0;i<movies1.size();i++) {
                    if (Objects.equals(movies1.get(i).getUser().getUsername(), username)) {
                        System.out.println("No");
                        movies1.get(i).setFavourite(1);
                        movieRepository.save(movies1.get(i));
                    } else if(i+1 == movies1.size()) {
                        System.out.println("YES");
                        movies.setFavourite(1);
                        movies.setUser(user);
                        movieRepository.save(movies);
                    }
                }

            }
            return "success";
        }catch (Exception e) {
            System.out.println(e.toString());
            return "error";
        }
    }
    public String newWatchingMovie(Movies movies) {

        try{
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            String username = auth.getName();

            User user = userRepository.findByUsername(username)
                    .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
            List<Movies> movies1 = movieRepository.findById(movies.getId());
            if(movies1.isEmpty()){
                System.out.println("yes");
                movies.setPlaying(1);
                movies.setUser(user);
                movieRepository.save(movies);
                return "No";
            }else {
                for (int i=0;i<movies1.size();i++) {
                    if (Objects.equals(movies1.get(i).getUser().getUsername(), username)) {
                        System.out.println("No");
                        movies1.get(i).setPlaying(1);
                        movieRepository.save(movies1.get(i));
                    } else if(i+1 == movies1.size()) {
                        System.out.println("YES");
                        movies.setPlaying(1);
                        movies.setUser(user);
                        movieRepository.save(movies);
                    }
                }

            }
            return "success";
        }catch (Exception e) {
            System.out.println(e.toString());
            return "error";
        }
    }
    public String deleteWatchlistMovie(String mId) {

        try{
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            String username = auth.getName();

            User user = userRepository.findByUsername(username)
                    .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
            List<Movies> movies1 = movieRepository.findById(mId);
            if(!movies1.isEmpty()){
                for (int i=0;i<movies1.size();i++) {
                    if (Objects.equals(movies1.get(i).getUser().getUsername(), username)) {
                        System.out.println("No");
                        movies1.get(i).setWatchlist(0);
                        movieRepository.save(movies1.get(i));
                    }
                }
            }
            return "success";
        }catch (Exception e) {
            System.out.println(e.toString());
            return "error";
        }
    }
    public String deleteFavouriteMovie(String mId) {
            try{
                Authentication auth = SecurityContextHolder.getContext().getAuthentication();
                String username = auth.getName();

                User user = userRepository.findByUsername(username)
                        .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
                List<Movies> movies1 = movieRepository.findById(mId);
                if(!movies1.isEmpty()){
                    for (int i=0;i<movies1.size();i++) {
                        if (Objects.equals(movies1.get(i).getUser().getUsername(), username)) {
                            System.out.println("No");
                            movies1.get(i).setFavourite(0);
                            movieRepository.save(movies1.get(i));
                        }
                    }
                }
                return "success";
            }catch (Exception e) {
                System.out.println(e.toString());
                return "error";
            }

    }
    public String deleteWatchingMovie(String mId) {

                try{
                    Authentication auth = SecurityContextHolder.getContext().getAuthentication();
                    String username = auth.getName();

                    User user = userRepository.findByUsername(username)
                            .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
                    List<Movies> movies1 = movieRepository.findById(mId);
                    if(!movies1.isEmpty()){
                        for (int i=0;i<movies1.size();i++) {
                            if (Objects.equals(movies1.get(i).getUser().getUsername(), username)) {
                                System.out.println("No");
                                movies1.get(i).setPlaying(0);
                                movieRepository.save(movies1.get(i));
                            }
                        }
                    }
                    return "success";
                }catch (Exception e) {
                    System.out.println(e.toString());
                    return "error";
                }
    }

    public String deleteAllMovie(String mId) {
                    try{
                        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
                        String username = auth.getName();

                        User user = userRepository.findByUsername(username)
                                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
                        List<Movies> movies1 = movieRepository.findById(mId);
                        if(movies1.isEmpty()) {
                            return "e";
                        }else{
                            for (int i=0;i<movies1.size();i++) {
                                if (Objects.equals(movies1.get(i).getUser().getUsername(), username)) {
                                    System.out.println("DEL");
                                    if(movies1.get(i).getWatchlist() == 0 && movies1.get(i).getFavourite() == 0 && movies1.get(i).getPlaying() == 0) {
                                        System.out.println(movies1.get(i).getId());
                                        movieRepository.deleteById(movies1.get(i).getUid());
                                    }
                                }
                            }
                        }
                        return "success";
                    }catch (Exception e) {
                        System.out.println(e.toString());
                        return "error";
                    }
    }

    public List<Movies> getAllMovies(){
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
//        User user = userRepository.findByUsername(username)
//                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
        List<Movies> mv = movieRepository.findAll();
        List<Movies> mv1 = new ArrayList<>();
        for (Movies movies : mv) {
            if (Objects.equals(movies.getUser().getUsername(), username)) {
                mv1.add(movies);
            }
        }
        System.out.println(mv1.toString());
        return mv1;
    }

}
