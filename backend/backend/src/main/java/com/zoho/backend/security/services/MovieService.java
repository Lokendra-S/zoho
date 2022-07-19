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
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class MovieService {

    @Autowired
    MovieRepository movieRepository;
    @Autowired
    UserRepository userRepository;

    public void newMovie(Movies movies, HttpServletRequest request) {

        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String username = auth.getName();
//        User user = userRepository.findByUsername(username)
//                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
//        System.out.println(user);
//        System.out.println("LOADING");
//        movies.setUser(user);
        movieRepository.save(movies);
        System.out.println("DONE LOAD");
    }

}
