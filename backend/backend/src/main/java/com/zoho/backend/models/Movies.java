package com.zoho.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity(name = "movies")
@Table(name = "movies")
public class Movies {
    @Id
    @Column(name="uid")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long uid;

    @Column(name = "id")
    private String id;

    @Column(name = "movie_img_id")
    private String movieImgId;

    @Column(name = "movie_title")
    private String movieTitle;

    @Column(name = "movie_director")
    private String movieDirector;

    @Column(name = "movie_released")
    private String movieReleased;

    @Column(name = "movie_rating")
    private String movieRating;

    @Column(name = "watchlist")
    private int watchlist;
    @Column(name = "favourite")
    private int favourite;
    @Column(name = "playing")
    private int playing;
    @Column(name = "buy_status")
    private int bought;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    User user;
    public Movies() {
    }

    public Movies(String id, String movieImgId, String movieTitle, String movieDirector, String movieReleased, String movieRating, int watchlist, int favourite, int playing, int bought, User user) {
        this.id = id;
        this.movieImgId = movieImgId;
        this.movieTitle = movieTitle;
        this.movieDirector = movieDirector;
        this.movieReleased = movieReleased;
        this.movieRating = movieRating;
        this.watchlist = watchlist;
        this.favourite = favourite;
        this.playing = playing;
        this.bought = bought;
        this.user = user;
    }

    public Long getUid() {
        return uid;
    }

    public void setUid(Long uid) {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getMovieImgId() {
        return movieImgId;
    }

    public void setMovieImgId(String movieImgId) {
        this.movieImgId = movieImgId;
    }

    public String getMovieTitle() {
        return movieTitle;
    }

    public void setMovieTitle(String movieTitle) {
        this.movieTitle = movieTitle;
    }

    public String getMovieDirector() {
        return movieDirector;
    }

    public void setMovieDirector(String movieDirector) {
        this.movieDirector = movieDirector;
    }

    public String getMovieReleased() {
        return movieReleased;
    }

    public void setMovieReleased(String movieReleased) {
        this.movieReleased = movieReleased;
    }

    public String getMovieRating() {
        return movieRating;
    }

    public void setMovieRating(String movieRating) {
        this.movieRating = movieRating;
    }

    public int getWatchlist() {
        return watchlist;
    }

    public void setWatchlist(int watchlist) {
        this.watchlist = watchlist;
    }

    public int getFavourite() {
        return favourite;
    }

    public void setFavourite(int favourite) {
        this.favourite = favourite;
    }

    public int getPlaying() {
        return playing;
    }

    public void setPlaying(int playing) {
        this.playing = playing;
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
