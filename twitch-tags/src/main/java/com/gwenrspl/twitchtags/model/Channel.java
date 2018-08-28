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
    @OneToMany(mappedBy = "channel", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonSerialize(converter = ListChannelTagUserLinkConverter.class)
    private List<ChannelTagUserLink> channelTagUserLinks;

    public Channel() {
    }
}
