package models;

import io.ebean.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.List;

@Entity
public class Channel extends Model {

    @Id
    private Long id;

    private String name;

    private String url;

    private String language;

    private String logo;

    private Long followerCount;

    private List tags;

}
