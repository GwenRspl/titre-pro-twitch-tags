package models;

import com.avaje.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import java.util.List;
import java.util.Set;


@Entity
public class Channel extends Model {

    @Id
    private Long channelId;

    private String channelName;

    private String url;

    private String ChannelLanguage;

    private String logo;

    private Long followerCount;

    private boolean partner;

    @OneToMany(mappedBy = "channel")
    private Set<ChannelTagUserLink> channelTagUserLinks;

    public static Finder<Long,Channel> find = new Finder<>(Channel.class);


    public Long getChannelId() {
        return channelId;
    }

    public void setChannelId(Long channelId) {
        this.channelId = channelId;
    }

    public String getChannelName() {
        return channelName;
    }

    public void setChannelName(String channelName) {
        this.channelName = channelName;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getChannelLanguage() {
        return ChannelLanguage;
    }

    public void setChannelLanguage(String channelLanguage) {
        this.ChannelLanguage = channelLanguage;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public Long getFollowerCount() {
        return followerCount;
    }

    public void setFollowerCount(Long followerCount) {
        this.followerCount = followerCount;
    }

    public boolean isPartner() {
        return partner;
    }

    public void setPartner(boolean partner) {
        this.partner = partner;
    }


    public Set<ChannelTagUserLink> getChannelTagUserLinks() {
        return channelTagUserLinks;
    }

    public void setChannelTagUserLinks(Set<ChannelTagUserLink> channelTagUserLinks) {
        this.channelTagUserLinks = channelTagUserLinks;
    }
}
