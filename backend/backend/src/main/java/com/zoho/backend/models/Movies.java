package com.zoho.backend.models;

import javax.persistence.*;

@Entity
@Table(name = "movies")
public class Movies {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "movieId")
    private String movieId;

    @Column(name = "status")
    private String status;

    @Column(name = "buyStatus")
    private int bought;

    @ManyToOne
    //Adding the name
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
