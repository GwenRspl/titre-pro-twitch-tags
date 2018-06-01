package models;

import com.avaje.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Channel extends Model {

    @Id
    private int id;

    private String channelName;

    private String url;

    private String ChannelLanguage;

    private String logo;

    private Long followerCount;

    private boolean partner;

    //private List tags;

    public static Finder<Integer,Channel> find = new Finder<>(Channel.class);


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
}
