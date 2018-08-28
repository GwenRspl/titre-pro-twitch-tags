package com.gwenrspl.twitchtags.converter;

import com.fasterxml.jackson.databind.util.StdConverter;
import com.gwenrspl.twitchtags.model.ChannelTagUserLink;

import java.util.ArrayList;
import java.util.List;


public class ListChannelTagUserLinkConverter extends StdConverter<List<ChannelTagUserLink>, List<ListChannelTagUserLinkConverter.LinkSummary>> {

    @Override
    public List<ListChannelTagUserLinkConverter.LinkSummary> convert(final List<ChannelTagUserLink> channelTagUserLinks) {
        final List<LinkSummary> summaryList = new ArrayList<>();
        for (final ChannelTagUserLink link : channelTagUserLinks) {
            final LinkSummary summary = new LinkSummary();
            summary.setId(link.getId());
            summary.setChannelName(link.getChannel().getName());
            summary.setTagName(link.getTag().getName());
            summary.setUsername(link.getUser().getUsername());
            summaryList.add(summary);
        }
        return summaryList;
    }

    public class LinkSummary {
        private Long id;
        private String channelName;
        private String tagName;
        private String username;

        public LinkSummary() {
        }

        public Long getId() {
            return this.id;
        }

        public void setId(final Long id) {
            this.id = id;
        }

        public String getChannelName() {
            return this.channelName;
        }

        public void setChannelName(final String channelName) {
            this.channelName = channelName;
        }

        public String getTagName() {
            return this.tagName;
        }

        public void setTagName(final String tagName) {
            this.tagName = tagName;
        }

        public String getUsername() {
            return this.username;
        }

        public void setUsername(final String username) {
            this.username = username;
        }
    }
}
