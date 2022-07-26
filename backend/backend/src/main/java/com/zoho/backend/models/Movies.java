package com.zoho.backend.models;

import javax.persistence.*;

@Entity
@Table(name = "movies")
public class Movies {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "movie_id",unique = true)
    private String movieId;
    @Column(name = "status")
    private String status;
    @Column(name = "buy_status")
    private int bought;
    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;
    public Movies() {
    }

    public Movies(String movieId, String status, int isBought) {
        this.movieId = movieId;
        this.status = status;
        this.bought = isBought;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getMovieId() {
        return movieId;
    }

    public void setMovieId(String movieId) {
        this.movieId = movieId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getBought() {
        return bought;
    }

    public void setBought(int bought) {
        this.bought = bought;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
