package controllers;

import models.WebsiteUser;
import play.mvc.Controller;
import play.mvc.Result;

import views.html.errors._404;
import views.html.user.show;

import java.util.List;


public class UserController extends Controller {

    public Result showAll(){
        List<WebsiteUser> websiteUsers = WebsiteUser.find.all();
        return TODO;
    }

    public Result show(int id){
        WebsiteUser websiteUser = WebsiteUser.find.byId(id);
        if(websiteUser ==null){
            return notFound(_404.render());
        }
        return ok(show.render(websiteUser));
    }
}
