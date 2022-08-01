package com.zoho.backend.repository;

import com.zoho.backend.models.Movies;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MovieRepository extends JpaRepository<Movies, Long> {
    List<Movies> findById(String name);
}
