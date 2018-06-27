package models;

import javax.persistence.*;

@Entity
public class ChannelTagUserLink {

    @Id
    private int id;

    @ManyToOne
    @JoinColumn(name = "channel_id")
    private Channel channel;

    @ManyToOne
    @JoinColumn(name = "website_user_id")
    private WebsiteUser websiteUser;

    @ManyToOne
    @JoinColumn(name = "tag_id")
    private Tag tag;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Channel getChannel() {
        return channel;
    }

    public void setChannel(Channel channel) {
        this.channel = channel;
    }

    public WebsiteUser getWebsiteUser() {
        return websiteUser;
    }

    public void setWebsiteUser(WebsiteUser websiteUser) {
        this.websiteUser = websiteUser;
    }

    public Tag getTag() {
        return tag;
    }

    public void setTag(Tag tag) {
        this.tag = tag;
    }
}
