import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Channel} from "../shared/models/channel.model";
import {Observable} from "rxjs";
import {ChannelsService} from "./channels.service";
import {Injectable} from "@angular/core";

@Injectable()
export class ChannelResolver implements Resolve<Channel> {

  constructor(private channelService: ChannelsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Channel> | Promise<Channel> | Channel {
    return this.channelService.getChannel(route.params['id']);
  }

}
