package models;

import com.avaje.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Set;

@Entity
public class Tag extends Model {

    @Id
    private Long tagId;

    private String tagName;

    @OneToMany(mappedBy = "tag")
    private Set<ChannelTagUserLink> channelTagUserLinks;

    public static Finder<Long,Tag> find = new Finder<>(Tag.class);


    public Long getTagId() {
        return tagId;
    }

    public void setTagId(Long tagId) {
        this.tagId = tagId;
    }

    public String getTagName() {
        return tagName;
    }

    public void setTagName(String tagName) {
        this.tagName = tagName;
    }


    public Set<ChannelTagUserLink> getChannelTagUserLinks() {
        return channelTagUserLinks;
    }

    public void setChannelTagUserLinks(Set<ChannelTagUserLink> channelTagUserLinks) {
        this.channelTagUserLinks = channelTagUserLinks;
    }
}
