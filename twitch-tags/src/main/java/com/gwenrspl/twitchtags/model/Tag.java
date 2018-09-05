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
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @OneToMany(mappedBy = "tag", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonSerialize(converter = ListChannelTagUserLinkConverter.class)
    private List<ChannelTagUserLink> channelTagUserLinks;

    public Tag() {
    }
}
