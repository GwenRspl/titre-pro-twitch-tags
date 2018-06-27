package controllers;

import models.Channel;
import play.mvc.Controller;
import play.mvc.Result;
import views.html.channels.show;
import views.html.channels.showAll;
import views.html.errors._404;

import java.util.List;

public class ChannelController extends Controller {

    public Result showAll(){
        List<Channel> channels = Channel.find.all();
        return ok(showAll.render(channels));
    }

    public Result show(Long id){
        Channel channel = Channel.find.byId(id);
        if(channel==null){
            return notFound(_404.render());
        }
        return ok(show.render(channel));
    }
}
