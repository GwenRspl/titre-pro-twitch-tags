package com.gwenrspl.twitchtags.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
public class Channel {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String url;
    private String language;
    private Long followers;
    private String avatar;
    private boolean partner;
    private boolean affiliate;

    public Channel() {
    }
}
