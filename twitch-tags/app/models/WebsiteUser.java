package models;

import com.avaje.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Set;

@Entity
public class WebsiteUser extends Model {

    @Id
    private Long websiteUserId;

    private String username;
    private String email;
    private String password;

    @OneToMany(mappedBy = "websiteUser")
    private Set<ChannelTagUserLink> channelTagUserLinks;

    public static Finder<Long, WebsiteUser> find = new Finder<>(WebsiteUser.class);

    public Long getWebsiteUserId() {
        return websiteUserId;
    }

    public void setWebsiteUserId(Long websiteUserId) {
        this.websiteUserId = websiteUserId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<ChannelTagUserLink> getChannelTagUserLinks() {
        return channelTagUserLinks;
    }

    public void setChannelTagUserLinks(Set<ChannelTagUserLink> channelTagUserLinks) {
        this.channelTagUserLinks = channelTagUserLinks;
    }
}
