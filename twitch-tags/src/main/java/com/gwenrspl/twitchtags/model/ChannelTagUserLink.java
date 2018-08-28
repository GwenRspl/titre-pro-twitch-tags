package com.gwenrspl.twitchtags.model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.gwenrspl.twitchtags.converter.ChannelConverter;
import com.gwenrspl.twitchtags.converter.TagConverter;
import com.gwenrspl.twitchtags.converter.UserConverter;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
public class ChannelTagUserLink {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "channel_id")
    @JsonSerialize(converter = ChannelConverter.class)
    private Channel channel;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "user_id")
    @JsonSerialize(converter = UserConverter.class)
    private User user;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "tag_id")
    @JsonSerialize(converter = TagConverter.class)
    private Tag tag;

    public ChannelTagUserLink() {
    }
}
