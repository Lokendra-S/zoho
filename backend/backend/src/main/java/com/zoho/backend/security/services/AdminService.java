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

    public List<Movies> allUserMovies(){
        String user = "bbb";
        List<Movies> mv = movieRepository.findAll();
        List<Movies> usermv = new ArrayList<>();
        for (Movies movies:mv) {
            if (Objects.equals(movies.getUser().getUsername(), user)){
                usermv.add(movies);
            }
        }
        return usermv;
    }

    public int allUserMoviesLength(){
        String user = "bbb";
        List<Movies> mv = movieRepository.findAll();
        List<Movies> usermv = new ArrayList<>();
        for (Movies movies:mv) {
            if (Objects.equals(movies.getUser().getUsername(), user)){
                usermv.add(movies);
            }
        }
        return usermv.size();
    }

    @Transactional
    public String removeUser(){
        String user = "bbb";
        Optional<User> user1 = userRepository.findByUsername(user);

//        System.out.println(user1.get().getUsername());
        userRepository.deleteByUsername(user1.get().getUsername());
        return "yes";
    }
}
