
package com.gwenrspl.twitchtags.converter;

import com.fasterxml.jackson.databind.util.StdConverter;
import com.gwenrspl.twitchtags.model.Channel;


public class ChannelConverter extends StdConverter<Channel, ChannelConverter.ChannelSummary> {
    @Override
    public ChannelSummary convert(final Channel channel) {
        final ChannelSummary summary = new ChannelSummary();
        summary.setId(channel.getId());
        summary.setName(channel.getName());
        return summary;
    }

    public class ChannelSummary {
        private Long id;
        private String name;

        public ChannelSummary() {
        }

        public Long getId() {
            return this.id;
        }
        public void setId(final Long id) {
            this.id = id;
        }
        public String getName() {
            return this.name;
        }
        public void setName(final String name) {
            this.name = name;
        }
    }
}

