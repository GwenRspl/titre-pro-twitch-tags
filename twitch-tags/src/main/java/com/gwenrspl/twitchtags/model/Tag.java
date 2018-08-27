package com.gwenrspl.twitchtags.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class Tag {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @OneToMany(mappedBy = "tag", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonBackReference
    private List<ChannelTagUserLink> channelTagUserLinks;

    public Tag() {
    }
}
