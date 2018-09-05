package com.gwenrspl.twitchtags.model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.gwenrspl.twitchtags.converter.ListChannelTagUserLinkConverter;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@Table(name = "website_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String username;
    private String email;
    private String password;
    private boolean admin;
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonSerialize(converter = ListChannelTagUserLinkConverter.class)
    private List<ChannelTagUserLink> channelTagUserLinks;

    public User() {
    }
}
