package com.gwenrspl.twitchtags.model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.gwenrspl.twitchtags.converter.ListChannelTagUserLinkConverter;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Channel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String url;
    private String language;
    private Long followers;
    private String avatar;
    private ChannelStatus status;
    @OneToMany(mappedBy = "channel", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonSerialize(converter = ListChannelTagUserLinkConverter.class)
    private List<ChannelTagUserLink> channelTagUserLinks;

    public enum ChannelStatus {
        PARTNER(0),
        AFFILIATE(1),
        NONE(2);

        private int statusCode;

        ChannelStatus(int statusCode) {
            this.statusCode = statusCode;
        }

        public int getStatusCode() {
            return statusCode;
        }
        public void setStatusCode(int statusCode) {
            this.statusCode = statusCode;
        }
    }
}
