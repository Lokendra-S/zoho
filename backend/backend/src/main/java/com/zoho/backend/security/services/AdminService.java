package com.zoho.backend.security.services;

import com.zoho.backend.models.Movies;
import com.zoho.backend.models.User;
import com.zoho.backend.repository.MovieRepository;
import com.zoho.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class AdminService {
    @Autowired
    MovieRepository movieRepository;
    @Autowired
    UserRepository userRepository;

    public List<User> allMovies(){
        return userRepository.findAll();
    }

    public List<Movies> allUserMovies(String user){
        List<Movies> mv = movieRepository.findAll();
        List<Movies> usermv = new ArrayList<>();
        for (Movies movies:mv) {
            if (Objects.equals(movies.getUser().getUsername(), user)){
                usermv.add(movies);
            }
        }
        return usermv;
    }

    public List<Integer> allUserMoviesLength(String user){
        List<Movies> mv = movieRepository.findAll();
        List<Integer> usermv = new ArrayList<>();
        int all=0,wish=0,fav=0,play=0;
        for (Movies movies:mv) {
            if (Objects.equals(movies.getUser().getUsername(), user)){
                all++;
                if(Objects.equals(movies.getWatchlist(),1)){
                    wish++;
                }
                if(Objects.equals(movies.getFavourite(),1)){
                    fav++;
                }
                if(Objects.equals(movies.getPlaying(),1)){
                    play++;
                }
            }
        }
        usermv.add(all);
        usermv.add(wish);
        usermv.add(fav);
        usermv.add(play);
        return usermv;
    }


    public String removeUser(String user){
        Optional<User> user1 = userRepository.findByUsername(user);
        userRepository.deleteById(user1.get().getId());
        return "yes";
    }
}
