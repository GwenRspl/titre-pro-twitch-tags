package controllers;

import models.Channel;
import models.User;
import play.mvc.Controller;
import play.mvc.Result;

import views.html.errors._404;
import views.html.user.show;

import java.util.List;


public class UserController extends Controller {

    public Result showAll(){
        List<User> users = User.find.all();
        return TODO;
    }

    public Result show(int id){
        User user = User.find.byId(id);
        if(user==null){
            return notFound(_404.render());
        }
        return ok(show.render(user));
    }
}
